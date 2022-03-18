export interface InputData {
  nbPlaces: number;
  nbRidesPerDay: number;
  nbGroups: number;
  nbPersonsByGroup: number[];
}
interface CacheTotal {
  nbPersons: number,
  nextIdx: number,
  nbRides: number,
}

export const calculateTotalEarnings = (inputData: InputData): number => {
  let nbRidesDone = 0;
  let totalEarning = 0;
  let groupIdx = 0;
  let calculatingCache: { [key: number]: CacheTotal } = {};
  let calculatedCache: { [key: number]: CacheTotal } = {};

  while (nbRidesDone < inputData.nbRidesPerDay) {
    const calculatedCacheForIdx = calculatedCache[groupIdx];
    // Calculs are already made for this index
    if (calculatedCacheForIdx && nbRidesDone + calculatedCacheForIdx.nbRides <= inputData.nbRidesPerDay) {
      totalEarning += calculatedCacheForIdx.nbPersons;
      groupIdx = calculatedCacheForIdx.nextIdx;
      nbRidesDone += calculatedCacheForIdx.nbRides;
    } else {
      let nbPersonsInRide = 0;
      let firstGroupIdx = groupIdx;
      let isFirstInRide = false;

      // Calcul the ride
      while (nbPersonsInRide + inputData.nbPersonsByGroup[groupIdx] <= inputData.nbPlaces && (!isFirstInRide || groupIdx !== firstGroupIdx)) {
        isFirstInRide = true;
        nbPersonsInRide += inputData.nbPersonsByGroup[groupIdx];
        groupIdx++;
        if (groupIdx >= inputData.nbGroups) {
          groupIdx = 0;
        }
      }
      totalEarning += nbPersonsInRide;
      nbRidesDone++;

      // Update the counters for this index
      let finishedIdx: number[] = [];
      for (const [cacheIdx, cache] of Object.entries(calculatingCache)) {
        cache.nbPersons += nbPersonsInRide;
        cache.nbRides++;
        cache.nextIdx = groupIdx;
        if (+cacheIdx <= groupIdx) {
          finishedIdx.push(+cacheIdx);
        }
      }

      // If index have made a loop, finish the calcul
      finishedIdx.forEach((cacheIdx: number) => {
        calculatedCache[cacheIdx] = calculatingCache[cacheIdx];
        delete calculatingCache[cacheIdx];
      });

      // If index for the first time, init the new cache for this index
      if (!calculatedCache[firstGroupIdx]) {
        calculatingCache[firstGroupIdx] = {
          nbPersons: nbPersonsInRide,
          nextIdx: groupIdx,
          nbRides: 1,
        }
      }
    }
  }
  return totalEarning;
};
