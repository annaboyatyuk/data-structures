import bubbleSort from '../../src/sorting/bubbleSort.js';

describe('bubble sort', () => {

  it('should sort unsorted array', () => {
    let arr = [1,2,3,6,4,1];
    expect(bubbleSort(arr)).toEqual([1,1,2,3,4,6]);
  });

  it('should not sort sorted array', () => {
    let arr = [10, 20, 50,  160, 100000];
    expect(bubbleSort(arr)).toEqual([10, 20, 50,  160, 100000]);
  });

  it('should sort a empty array', () => {
    let arr = [];
    expect(bubbleSort(arr)).toEqual([]);
  });

  it('should sort an array of 1', () => {
    let arr = [1];
    expect(bubbleSort(arr)).toEqual([1]);
  });

});