


  let arr = [2,5,3,9,7,44]

  orderingNumbers =(arr) => {
    for (let i = 1; i < arr.length; i++){
        let first = arr[i];
        let j = i - 1;
         // karim i have learned why we used j in here and i also figured its role 
        while (j >= 0 && arr [j]> first){
            arr [j + 1] = arr [j];
            j-- ;
        }
        arr[j + 1] = first
    }
    return arr;

  }
  console.log(arr);
  let sortedArray = orderingNumbers(arr);
  console.log(sortedArray)