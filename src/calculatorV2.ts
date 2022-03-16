export interface InputData {
    nbPlaces: number;
    nbRidesPerDay: number;
    nbGroups: number;
    nbPersonsByGroup: number[];
  }
  
  export const calculateTotalEarnings = (inputData: InputData): number => {
    let nbRidesDone = 0;
    let totalEarning = 0;
    let groupIdx = 0;
    while(nbRidesDone < inputData.nbRidesPerDay) {
      let nbPersonsInRide = 0;
      let firstGroupIdx = groupIdx;
      let isFirstInRide = false;
      while(nbPersonsInRide + inputData.nbPersonsByGroup[groupIdx] <= inputData.nbPlaces && (!isFirstInRide || groupIdx !== firstGroupIdx)) {
        isFirstInRide = true;
        nbPersonsInRide += inputData.nbPersonsByGroup[groupIdx];
        groupIdx++;
        if(groupIdx >= inputData.nbGroups) {
          groupIdx = 0;
        }
      }
      totalEarning += nbPersonsInRide;
      nbRidesDone++;
    }
    return totalEarning;
  };
  