$(document).ready(function(){
	var txt="<table border='2' cellpadding='10' cellspacing='10'>";
	$.ajax({
		type:"GET",
		url:"data.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$(xml).find("stu").each(function(key,value){
				console.log(key);
				if(key==5){
					return false;	
				
				}
                var name=$(this).find("name").text();
				var id=$(this).find("id").text();
				var family=$(this).find("family").text();
				txt+="<tr><td>"+id+"</td><td>"+name+"</td><td style='color:red;'>"+family+"</td></tr>";	
             });
				txt+="</table>";
				$("#pr").html(txt);
			}
		});	
	
		window.onscroll=function(){sr()}
			function sr(){
				if(document.documentElement.scrollTop>50||document.body.scrollTop>50){
						var txt="<table border='2' cellpadding='10' cellspacing='10'>";
						$.ajax({
							type:"GET",
							url:"data.xml",
							cache:false,
							dataType:"xml",
							success: function(xml){
								$(xml).find("stu").each(function(key,value){
									var name=$(this).find("name").text();
									var id=$(this).find("id").text();
									var family=$(this).find("family").text();
									txt+="<tr><td>"+id+"</td><td>"+name+"</td><td style='color:red;'>"+family+"</td></tr>";	
								 });
									txt+="</table>";
									$("#pr").html(txt);
								}
							});	
					
				}
		}		
});