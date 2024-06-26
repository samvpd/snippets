import binarySearch from '../binary-search';

describe('Binary search', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  it('searches for the value in sorted array', () => {
    const index = binarySearch(array, 5);

    expect(index).toEqual(4);
  });

  it('returns -1 if value not found', () => {
    const index = binarySearch(array, 9);

    expect(index).toEqual(-1);
  });
});
