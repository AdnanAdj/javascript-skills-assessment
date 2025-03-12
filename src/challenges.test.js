const {
  reverseString,
  isPalindrome,
  calculateFactorial,
  findMaxNumber,
  filterEvenNumbers
} = require('./challenges');

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('handles single character', () => {
    expect(reverseString('a')).toBe('a');
  });
});

describe('isPalindrome', () => {
  test('identifies palindrome correctly', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('identifies non-palindrome correctly', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('handles empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('handles single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('is case sensitive', () => {
    expect(isPalindrome('Racecar')).toBe(false);
  });
});

describe('calculateFactorial', () => {
  test('calculates factorial of positive number', () => {
    expect(calculateFactorial(5)).toBe(120);
  });

  test('handles factorial of 0', () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  test('handles factorial of 1', () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  test('throws error for negative numbers', () => {
    expect(() => calculateFactorial(-1)).toThrow();
  });
});

describe('findMaxNumber', () => {
  test('finds max in positive numbers array', () => {
    expect(findMaxNumber([1, 3, 2, 5, 4])).toBe(5);
  });

  test('finds max in array with negative numbers', () => {
    expect(findMaxNumber([-1, -3, -2, -5, -4])).toBe(-1);
  });

  test('handles array with one element', () => {
    expect(findMaxNumber([1])).toBe(1);
  });

  test('throws error for empty array', () => {
    expect(() => findMaxNumber([])).toThrow();
  });
});

describe('filterEvenNumbers', () => {
  test('filters out even numbers', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });

  test('handles array with only odd numbers', () => {
    expect(filterEvenNumbers([1, 3, 5])).toEqual([1, 3, 5]);
  });

  test('handles array with only even numbers', () => {
    expect(filterEvenNumbers([2, 4, 6])).toEqual([]);
  });

  test('handles empty array', () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });
}); 