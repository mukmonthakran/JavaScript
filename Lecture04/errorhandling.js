function criticalCode(){
    throw "throwing an exception";
}

function logErrror(theException){
    console.log(theException);
}

console.log("\n********Try..Catch********\n");

try {
    criticalCode();
}   catch (ex){
    console.log("Got an eroor");
    logErrror(ex);
}

console.log("\n********Throwing in Try..Catch********\n");

try {
    throw "An exception that is thrown every time";
}   catch (ex){
    console.log("Got an eroor");
    logErrror(ex);
}

console.log("\n********Try..Catch..Finally********\n");

try {
    criticalCode();
}   catch (ex){
    console.log("Got an error");
    logErrror(ex);
}   finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n********Throwing Exceptions********\n");
}