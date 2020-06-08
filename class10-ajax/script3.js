function re(){
	var r=new XMLHttpRequest();
	r.open("GET","data.xml");
	r.onreadystatechange=function(){
		if(r.readyState==4&&r.status==200){
			var name=r.responseXML.getElementsByTagName("name");
			var txt="";
			for(var i=0;i<name.length;i++){
				txt+=name[i].innerHTML+"<br>";
			}
			document.getElementById("pr").innerHTML=txt;
		}
	}
	r.send();
}
