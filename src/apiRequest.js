
const apiRequest = async (url='',optionObj=null,
errMsg=null )=>{
try{
    const response = await fetch(url,optionObj)
    if(!response.ok) throw Error('Please reload the app');
    const responseData = await response.json(); // Try to parse the response as JSON
    return responseData;
}catch(err){
    errMsg = err.errMessage;
}finally{
   return errMsg
}
}


export default apiRequest;