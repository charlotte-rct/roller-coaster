import { getValuesFromFile } from './parser';
import { calculateTotalEarnings } from './calculatorV2';

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

test('3 -The same group go on the ride several during the day should return 15', () => {
  // Given
  const data = getValuesFromFile('./samples/3_the_same_groups_go_on_the_ride_several_times_during_the_day.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(15);
});


test('4 - All the people get on the roller coaster al least once should return 15000', () => {
  // Given
  const data = getValuesFromFile('./samples/4_all_the_people_get_on_the_roller_coaster_at_least_once.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(15000);
});

test('5 - Hight earnings during the day should return 4999975000', () => {
  // Given
  const data = getValuesFromFile('./samples/5_high_earnings_during_the_day.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(4999975000);
});


test('6 - Works with a large dataset should return 89744892565569', () => {
  // Given
  const data = getValuesFromFile('./samples/6_works_with_a_large_dataset.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(89744892565569);
});

test('7 - Hard should return 8974489271113753', () => {
  // Given
  const data = getValuesFromFile('./samples/7_hard.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(8974489271113753);
});


test('8 - Harder should return 89744892714152289', () => {
  // Given
  const data = getValuesFromFile('./samples/8_harder.txt');

  // When
  const result = calculateTotalEarnings(data);

  // Then
  expect(result).toBe(89744892714152289);
});