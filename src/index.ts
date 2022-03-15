export interface InputData {
  nbPlaces: number;
  nbRidesPerDay: number;
  nbGroups: number;
  nbPersonsByGroup: number[];
}

export const calculateTotalEarnings = (inputData: InputData): number => {
  let nbRidesDone = 0;
  let totalEarning = 0;
  while(nbRidesDone < inputData.nbRidesPerDay) {
    let nbPersonsInRide = 0;
    let groupIdx = 0;
    while(nbPersonsInRide + inputData.nbPersonsByGroup[groupIdx] <= inputData.nbPlaces && groupIdx < inputData.nbGroups) {
      nbPersonsInRide += inputData.nbPersonsByGroup[groupIdx];
      groupIdx++;
    }
    totalEarning += nbPersonsInRide;
    const removedElts = inputData.nbPersonsByGroup.splice(0, groupIdx);
    inputData.nbPersonsByGroup.push(...removedElts);
    nbRidesDone++;
  }
  return totalEarning;
};
