//function to make array into object

var obj = {}
function makeIntoObj(something, keyName){
    console.log('function to take <something> obj-ify it ', );
    obj[keyName] = something;
}

function clearObj(){
    console.log('function that clears out obj');
    obj = {};
}