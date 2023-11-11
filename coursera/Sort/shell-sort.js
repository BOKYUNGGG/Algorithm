class ShellSort{

}
function shellSort(arr) {
    const len = arr.length;
    let gap = Math.floor(len / 2);
  
    while (gap > 0) {
      for (let i = gap; i < len; i++) {
        const temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  
    return arr;
  }
  
  // 사용 예제:
  const unsortedArray = [12, 34, 5, 6, 7, 2, 9, 18];
  const sortedArray = shellSort(unsortedArray);
  console.log(sortedArray); // 정렬된 배열 출력
  