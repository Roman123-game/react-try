const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };




  let arr = [1, 2, 3, 4, 5, 6]
 

  function fun(){
    function getSum(total, num) {
      return total + Math.round(num);
    }
  
  let first = arr[0]
  console.log(first,'first')
  let last = arr[arr.length-1]
  console.log(last,'last')
  let removeFirst = arr.filter(item => item !== first)
  let removeLast = arr.filter(item => item !== last)
  
  let sumwitoutLast = removeLast.reduce(getSum, 0)
  let sumwitoutFirst = removeFirst.reduce(getSum, 0)

  console.log(removeFirst)
  console.log(removeLast)

 
  console.log(sumwitoutLast,sumwitoutFirst)
  return (sumwitoutLast,sumwitoutFirst)
  }


  fun(arr)
