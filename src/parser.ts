import { InputData } from './index';
import fs from 'fs';

/**
 * Read the file and convert into InputData
 * @param filename
 * @returns
 */
export const getValuesFromFile = (filename: string): InputData => {
  try {
    // Read the file
    const fileData = fs.readFileSync(filename, 'utf8');
    // Decompose the data
    const splittedData = fileData.split('\n');
    const fistLineSplitted = splittedData[0].split(' ');
    // Build the InputData
    const inputData: InputData = {
      nbPlaces: +fistLineSplitted[0],
      nbRidesPerDay: +fistLineSplitted[1],
      nbGroups: +fistLineSplitted[2],
      nbPersonsByGroup: new Array(+fistLineSplitted[2]),
    };
    // Build the groups
    for (let i = 1; i < splittedData.length; i++) {
      inputData.nbPersonsByGroup.push(+splittedData[i]);
    }
    return inputData;
  } catch (e) {
    console.log('Error:', e);
    throw e;
  }
};
