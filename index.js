function mapToNegativize(sourceArray) {
    return sourceArray.map(integer => (integer * -1))
    
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    return sourceArray.map(integer => (integer * 2))
}

function mapToSquare(sourceArray) {
    return sourceArray.map(integer => (integer ** 2))
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    const runningTotal = (startingPoint, currentValue) => startingPoint + currentValue
    return sourceArray.reduce(runningTotal, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    if (sourceArray.reduce((x, y) => x && y)){
        return true
    }
    else {
        return false
    }
}

function reduceToAnyTrue(sourceArray) {
    if (sourceArray.reduce((x, y) => x || y)){
        return true
    }
    else {
        return false
    }
}