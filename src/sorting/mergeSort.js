const mergeSort = (arr) => {
  if(arr.length <= 1) {
    return arr; 
  }

  let mid = Math.floor(arr.length/2);

  let left = mergeSort(arr.slice(0,mid));
  let right =  mergeSort(arr.slice(mid));
  let results = [];

  while(left[0] && right[0]) {
    if(left[0] > right [0]) {
      results.push(right.shift());
    } else {
      results.push(left.shift());
    }
  }
  
  while(left[0]) {
    results.push(left.shift());
  }

  while(right[0]) {
    results.push(right.shift());
  }

  return results;

  //if you want to make space complexity 1, replace original array instead of creating new array
  
};

export default mergeSort;