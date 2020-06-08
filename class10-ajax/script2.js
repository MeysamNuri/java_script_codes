function re(){
	var r=new XMLHttpRequest();
	r.open("GET","data.txt");
	r.onreadystatechange=function(){
		if(r.readyState==4&&r.status==200){
			document.getElementById("pr").innerHTML=r.responseText;
		}
	}
	r.send();
	console.log(r);
	
	
}

