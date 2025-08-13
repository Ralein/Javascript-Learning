function findmatchletter(word,match){
    for(var i=0;i<word.length;i++){
        if(word[i]== match){
            console.log("The match is found in",match,"at",i);

        }
        else{
            console.log("No match is found!",i);
        }
    }
}
findmatchletter("jesusa","s");