function se(){
	var r=new XMLHttpRequest();
	r.open("GET","data.xml");
	r.onreadystatechange=function(){
		if(r.readyState==4&&r.status==200){
			var txtsearch=document.getElementById("search").value;
			var id=r.responseXML.getElementsByTagName("id");
			var name=r.responseXML.getElementsByTagName("name");
			var lastname=r.responseXML.getElementsByTagName("lastname");
			var contact=r.responseXML.getElementsByTagName("contact");
			var txt="";
			for(var i=0;i<name.length;i++){
				if(txtsearch==name[i].innerHTML || txtsearch==id[i].innerHTML || txtsearch==lastname[i].innerHTML || txtsearch==contact[i].innerHTML){
					txt+="<tr>";
					if(document.getElementById("chid").checked==true){
						txt+="<td>"+id[i].innerHTML+"</td>";
					}
					if(document.getElementById("chname").checked==true){
						txt+="<td>"+name[i].innerHTML+"</td>";
					}
					if(document.getElementById("chlastname").checked==true){
						txt+="<td>"+lastname[i].innerHTML+"</td>";
					}
					if(document.getElementById("chcontact").checked==true){
						txt+="<td>"+contact[i].innerHTML+"</td>";
					}
					txt+="</tr>";
				}
			}
			document.getElementById("tb").innerHTML=txt;
		}
	};
	r.send();	
}

