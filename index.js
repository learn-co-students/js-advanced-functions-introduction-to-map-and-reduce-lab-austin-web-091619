// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    for(let i =0; i<sourceArray.length; i++){
        newArray.push(sourceArray[i]*-1)
    }
    return newArray 
}
function mapToNoChange(sourceArray){
    let newArray = [...sourceArray]
    return newArray
}
function mapToDouble(sourceArray){
    let newArray = []
    for(let i = 0; i<sourceArray.length; i++){
        newArray.push(sourceArray[i]*2)
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for(let i = 0; i<sourceArray.length; i++){
        newArray.push(sourceArray[i] ** 2 )
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint){
    let memo = 0;
    
    if (!startingPoint){
        memo = sourceArray[0];
        for(let i = 1; i<sourceArray.length; i++ ){
            memo += sourceArray[i]
        }
    } else {
        memo = startingPoint;
        for(let i = 0; i<sourceArray.length; i++ ){
            memo += sourceArray[i]
        }
    }
    return memo
}

function reduceToAllTrue(sourceArray){
    let memo = true;
    for(let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
            memo = false
        }

    }
    return memo
}

function reduceToAnyTrue(sourceArray){
    let memo = false
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i]){
            memo = true
        }
    }
    return memo
}
