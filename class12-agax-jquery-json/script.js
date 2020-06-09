$(document).ready(function(){
	$("#txtsearch").keyup(function(){
		$.getJSON("data.json",function(data){
			var txt="<table border='2'>";
			var s=$("#txtsearch").val();
			$.each(data,function(key,val){
				if(val.firstname.search(s)!=-1||val.lastname.search(s)!=-1||val.bio.search(s)!=-1||val.dd.search(s)!=-1){
					console.log(val.dd);
					txt+="<tr>";
					txt+="<td>"+val.dd+"</td>";
					txt+="<td><img src='images/"+val.dd+".png' width='100'></td>";
					txt+="<td>"+val.firstname+"</td>";
					txt+="<td>"+val.lastname+"</td>";
					txt+="<td>"+val.bio+"</td>";
					txt+="</tr>";
				}
			});
			txt+="</table>";
			$("#mydiv").html(txt);
		});
		
	});
});