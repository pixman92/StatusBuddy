//functions to output to Requests Page
//then: eventually output to 'main page'

//this code creates an HTML element equipped with className, ID and the prefered Element to be wrapped in 
function createHTMLELement(str, element, clName, id){
    console.log('function that adds HTML to front and back of string and then returns that string');
    if(clName==""&&id){
        return '<'+element+' id="'+id+'">' + str + '</'+element+'>';
    }
    if(clName&&id==""){
        return '<'+element+' class="'+clName+'">' + str + '</'+element+'>';
    }
    if(clName&&id){
        return '<'+element+' id="'+id+'" class="'+clName+'">' + str + '</'+element+'>';
    }if(clName==""&&id==""){
        return '<'+element+'>' + str + '</'+element+'>';
    }
}

//this function adds str to an HTML element in the DOM
function addToHTMLElement(str, elem){
    console.log('function that adds "string" to "HTML element"' );

    document.getElementById(elem).innerHTML = str;
}

var strOfRequests = "";
async function populateRequests(myEmail){
    console.log('funciton that pulls all requests for an email, makes them into div(s) then pushes them to an array');
    await pullRequests(myEmail);

    for(var i in requests){
        strOfRequests+=createHTMLELement(requests[i].UID, 'div', 'aRequest', "request"+i);
    }

}

function addToRequestHTML(){

}

