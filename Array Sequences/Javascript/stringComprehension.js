const stringComprehension= (str)=>{
    let cache={}
    let newStr=[]
    for(i of str){
        if(!cache[i]){
            cache[i]=0
        }
        cache[i]++;
    }
    for(words in cache){
        newStr.push(words + cache[words])
    }
    return newStr.join('')
}

stringComprehension('AAABCCCDDDDDa')