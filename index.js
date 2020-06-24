function mapToNegativize(sourceArray){
   let newArray = sourceArray.map(e => e * -1)
      return newArray
}

function mapToNoChange(sourceArray){
  return  sourceArray.map(x => x)
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => Math.pow(x, 2))
}

function reduceToTotal(sourceArray, startingPoint= 0){
    const reducer = function(acc, currentValue){
        return acc + currentValue
    }

    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
}