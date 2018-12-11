const bubbleSort = (arr) => {
  let swap = true;
  let index = 1;
  while(swap) {
    swap = false;
    for(let i = 0; i < arr.length - index; i++) {
      if(arr[i] > arr[i+1]) {
        swap = true;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      }
    }
    index++;
  }

  return arr;
};

export default bubbleSort;