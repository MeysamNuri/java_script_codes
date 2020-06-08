for(var i=0;i<1000;i++){
	var request=new XMLHttpRequest();
	request.open("GET","data.txt",false);
	request.send();
	console.log(request);
	document.getElementById("h").innerHTML=request.responseText;	
}
