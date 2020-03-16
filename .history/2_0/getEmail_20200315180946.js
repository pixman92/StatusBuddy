async function getAllEmails(email){
    try{
        var one1 = await one(myEmail);
        var two2 = await two(one1, myEmail);
        // var three3 = await three(two2, myStatus);

    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){

}