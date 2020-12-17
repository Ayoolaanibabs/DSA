const missingElement=(array1, array2)=>{
    let cache={}
    let missingEle=0;

    for(i of array1){
        if(!cache[i]){
            cache[i]=1
        }else if(cache[i]){
            cache[i] ++
        }
    }
    
    for(i of array2){
        if(cache[i]){
            cache[i]--
            }
        }

    for(ele in cache){
        if(cache[ele] > 0){
            missingEle=ele
        }
    }
    return missingEle
}

missingElement([9,8,7,6,5,4,3,2,1], [9,8,7,6,4,3,2,1])