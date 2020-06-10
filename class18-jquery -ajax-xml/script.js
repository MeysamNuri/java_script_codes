$(document).ready(function(){
    $("#btn").click(function(){
		var txtname=$("#txtname").val();
		var txtfamily=$("#txtfamily").val();
		var txt="<table border='2' cellpadding='10' cellspacing='10'>";
		$.ajax({
			type:"GET",
			url:"data.xml",
			cache:false,
			dataType:"xml",
			success: function(xml){
				$(xml).find("stu").each(function(){
                    var name=$(this).find("name").text();
					var id=$(this).find("id").text();
					var family=$(this).find("family").text();
					if(txtname==name){ 
						txt+="<tr><td>"+id+"</td><td style='color:red;'>"+name+"</td><td>"+family+"</td></tr>";	
						$("#txtfamily").slideUp();	
						$("#txtname").slideUp();
						$("#btn").slideUp();	
					}else if(txtfamily==family){
						txt+="<tr><td>"+id+"</td><td>"+name+"</td><td style='color:red;'>"+family+"</td></tr>";	
						$("#txtfamily").slideUp();	
						$("#txtname").slideUp();
						$("#btn").slideUp();
						
					}
                });
				txt+="</table>";
				$("#pr").html(txt);

			}
		});			
	});
});

$(document).ready(function(){
	$("#btn").click(function(){
		var txtname=$("#name").val()
		var txtfamily=$("txtfamily").val()

		var txt="<table border='2' celpaddind='10' cellspacing='10'>"
		$.ajax({
			type:"GET",
			url:"data.xml",
			cache:false,
			dataType:"xml",
			success:function(xml){
				$(xml).find("stu").each(function(){
					var name=$(this).find("name").text()
					var family=$(this).find("family").text()
					var id=$(this).find("id").text()
					if(name==txtname){
						txt+="<tr><td>"+id+"</td><td>"+name+"</td><td>"+family+"</td></tr>"
						$("#txtname").slideUp()
						$("#txtfamily").slideUp()
						$("#btn").slideUp()
					}
					else if(txtfamily==family){
						txt+="<tr><td>"+id+"</td><td>"+name+"</td><td>"+family+"</td></tr>"
						$("#txtname").slideUp()
						$("#txtfamily").slideUp()
						$("#btn").slideUp()
					}
				
				})
				txt+="</table>"
				$("#pr").html(txt)
			}
		})

	})
})