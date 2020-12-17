const uniqueChar=(str)=>{
    let cache={}
    for(char of str){
        if(!cache[char]){
            cache[char]=0;
        }
        cache[char] ++
    }
    for(word in cache){
        if(cache[word] > 1){
            return false
        }
    }
    return true
}

uniqueChar("abcdeef")