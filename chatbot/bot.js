function sendMessage(){
    var theMessage = document.getElementById("msg").value;
    // alert(theMessage);
    outputMessage('Me: ' + theMessage);
    getRespond(theMessage);
}

function getRespond(msg){
    var resmsg = "";
    fetch('http://www.xhxly.cn:8080/api.php?key=free&appid=0&msg=' + msg)
    .then(response=>response.json())
    .then(data=>{
        outputMessage('Bot: ' + data.content);
        // alert(data.content);
    })
}

function outputMessage(msg){
    var para = document.createElement("p");
    var node = document.createTextNode(msg);
    para.appendChild(node);
    var element = document.getElementById("sectionbox");
    element.appendChild(para);
}