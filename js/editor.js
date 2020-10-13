
var codage=document.getElementById("codage");
var start=document.getElementById("start");
var remove_result=document.getElementById("remove_result");
var result=document.getElementById("result");

start.onclick=()=>{
	result.innerHTML=codage.value;
	codage.style.border="2px solid green";
	localStorage.setItem("RESULT",codage.value);
};
remove_result.onclick= ()=>{
	result.innerHTML="";
	codage.style.border="2px solid red";
}

onload=()=>{
    if(localStorage.getItem("RESULT")===null){
        codage.value="<!DOCTYPE html>"+"\n<html>"+"\n<head>"+'\n<meta charset='+'"UTF-8"'+"/>"+'\n<meta name='+'"viewport"'+" content="+'"width=device-width,initial-scale=1.0"/>'+"\n<title>Editor Web</title>"+"\n<style>"+"</style>"+"\n</head>"+"\n<body>"+"\n "+"\n<script></script>"+"\n</body>"+"\n</html>";
    }
    else{
    codage.value=localStorage.getItem("RESULT");
    result.innerHTML=codage.value;
    }
}






//========================================================================================================================