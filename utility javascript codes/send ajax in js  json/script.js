var request

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest()
} else {
  request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'data.json')
// request.open('GET', 'http://localhost:4046/api/values.asmx')
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
   var items = JSON.parse(request.responseText);
   

   var output="<ul>";

   for(var key in items)
   {
    console.log(items[key]);
    output+="<li>"+ items[key].name +" | "+items[key].bio+"</li>";
   }

   output+="</ul>";
   document.getElementById('update').innerHTML = output;
   
  }
}

request.send()
