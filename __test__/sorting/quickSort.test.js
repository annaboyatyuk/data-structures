import quickSort from '../../src/sorting/quickSort.js';

describe('bubble sort', () => {

  it('should sort unsorted array', () => {
    let arr = [1,2,3,6,4];
    expect(quickSort(arr)).toEqual([1,2,3,4,6]);
  });

  it('should not sort sorted array', () => {
    let arr = [10, 20, 50,  160, 100000];
    expect(quickSort(arr)).toEqual([10, 20, 50,  160, 100000]);
  });

  it('should sort a empty array', () => {
    let arr = [];
    expect(quickSort(arr)).toEqual([]);
  });

  it('should sort an array of 1', () => {
    let arr = [1];
    expect(quickSort(arr)).toEqual([1]);
  });

});