function nodefaultparms(num){
    console.log('Result',num*num)
}
nodefaultparms();

//with parms

function withdefaultparms(num=10){
    console.log('Result',num*num)
    
}
withdefaultparms();