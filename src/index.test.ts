import { getValuesFromFile } from './parser';
import { calculateTotalEarnings } from './index';

test('Simple test case return 7', () => {
  // Given
  const data = getValuesFromFile('./samples/1_simple_case.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(7);
});
