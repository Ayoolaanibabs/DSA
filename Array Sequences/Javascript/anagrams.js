const anagram=(string1, string2)=>{
    let string1Array= string1.toLowerCase().split('');
    let string2Array= string2.toLowerCase().split('');
    let validCharacters='abcdefghijklmnopqrstuvwxyz'.split('')
    let cacheObj={} 

    let cache1= string1Array.filter(char=>{
        return validCharacters.indexOf(char) > -1
    })
    let cache2= string2Array.filter(char=>{
        return validCharacters.indexOf(char) > -1
    })

    if(cache1.length !== cache2.length){
        return false
    }

    for(char of cache1){
        if(!cacheObj[char]){
            cacheObj[char]= 0
        }
        cacheObj[char] ++
    }
    
    let anagramPossible= true
    for(char of cache2){
        if(!cacheObj[char]){
            anagramPossible= false
        }else if(cacheObj[char]){
           cacheObj[char]--
           if(cacheObj[char]<0){
               anagramPossible=false
           }
        }
    }

    return anagramPossible
}    


anagram('clint eastwood', 'old west action')