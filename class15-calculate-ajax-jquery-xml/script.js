$(document).ready(function(){
	var n="";
	var table=$("#tb");
	$.ajax({
		type:"GET",
		url:"data.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$(xml).find("stu").each(function() {
				n+="<tr>";
				n+="<td>"+$(this).find("id").text()+"</td>";
				n+="<td>"+$(this).find("name").text()+"</td>";
				n+="<td>"+$(this).find("lastname").text()+"</td>";
				n+="</tr>";
			});
			table.html(n);
			console.log(n);
		}
	});	
})

$(document).ready(function(){
	var n=""
	var table=$("tb")
	$.ajax({
		type="GET",
		url="data.xml",
		cache:false,
		dataType:"xml",
		success:function(xml){
			$(xml).find("stu").each(function(){
				n+="<tr>"
				n+="<td>"+$(this).find("id").text()+"</td>",
				n+="<td>"+$(this).find("name").text()+"</td>",
				n+="<td>"+$(this).find("last").text()+"</td>",
				n+="</tr>"
			})
			table.html(n)
		}
	})
})