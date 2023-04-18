import { taskFirst, taskNext, getLast } from './0-constants.js';

describe('0-constants.js', () => {
  test('taskFirst() should return a string with "const"', () => {
    const result = taskFirst();
    expect(result).toContain('const');
  });

  test('taskNext() should return a string with "let" and "is okay"', () => {
    const result = taskNext();
    expect(result).toContain('let');
    expect(result).toContain('is okay');
  });

  test('getLast() should return a string with "is okay"', () => {
    const result = getLast();
    expect(result).toContain('is okay');
  });
});

