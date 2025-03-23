var request

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest()
} else {
  request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'data.xml')
// request.open('GET', 'http://localhost:4046/api/values.asmx')
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    var items =  request.responseXML.getElementsByTagName('name');
    var output = "<ul>";

    for(var i=0;i<items.length;i++)
    {
      output+="<li>"+items[i].firstChild.nodeValue+"</li>";
    }

    output+="</ul>";
    document.getElementById('update').innerHTML=output;
  }
}

request.send()
