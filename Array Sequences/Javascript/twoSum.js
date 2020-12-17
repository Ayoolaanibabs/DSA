const twoSum=(numArr, sum)=>{
    const newArr=[];
    const counterpartArr=[];
    for(let i=0; i<numArr.length; i++){
        let currNum=numArr[i];
        let counterPart= sum - currNum
        if(counterpartArr.indexOf(counterPart) !== -1){
            newArr.push([currNum, counterPart])
        }
        counterpartArr.push(currNum)
        }
        console.log(counterpartArr)
    return newArr
}

twoSum([1,6,4,5,3,3,4], 7)

