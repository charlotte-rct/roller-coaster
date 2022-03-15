import { getValuesFromFile } from './parser';
import { calculateTotalEarnings } from './index';

test('1 - Simple test case should return 7', () => {
  // Given
  const data = getValuesFromFile('./samples/1_simple_case.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(7);
});

test('2 - 1000 groups of few people should return 3935', () => {
  // Given
  const data = getValuesFromFile('./samples/2_1000_groups_of_few_people.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(3935);
});
