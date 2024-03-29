import { add } from '../math';

test('add two numbers together', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(100, 200)).toBe(300);
});

test('throws an error if arguments are not numbers', () => {
  // @ts-expect-error testing incorrect arguments type
  expect(() => add(1, '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments type
  expect(() => add('asd', '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments type
  expect(() => add(true, '1')).toThrow('Pass only numbers!');
});
