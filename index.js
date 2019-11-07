function mapToNegativize(arr){
    let newArr = []
    arr.forEach(num => {
       newArr.push(num - num * 2)
    })
    return newArr
}   

function mapToNoChange(arr){
    let newArr = []
    arr.forEach(num => {
        newArr.push(num)
    })
    return newArr
}

function mapToDouble(arr){
   let newArr = []
    arr.forEach(num => {
        newArr.push(num * 2)
    })
    return newArr
}

function mapToSquare(arr){
    let newArr = []
     arr.forEach(num => {
         newArr.push(num * num)
     })
     return newArr
 }


 function reduceToTotal(arr, start=0){
     let accum = start
    for(let i = 0; i < arr.length;){
        accum = accum + arr[i]
        i++;
    }
    return accum
 }


//  function reduceToAllTrue(values){
//     values.forEach(value => {
//         if (value == false){
//         return false
//         } 
    
//     })
//     return true
//  }

 function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }