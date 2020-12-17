const reverseSentence=(str)=>{
    let strArray= str.trim().split(' ');
    for(let i=0;i<(strArray.length)/2;i++){
        let tempVar=strArray[i];
        strArray[i]= strArray[strArray.length-1-i];
        strArray[strArray.length-1-i]=tempVar
    }

    return strArray.join(' ')
}

reverseSentence('i am a boy  ')