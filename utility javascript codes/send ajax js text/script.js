var request

if (window.XMLHttpRequest) {
  request = new XMLHttpRequest()
} else {
  request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'data.txt')
// request.open('GET', 'http://localhost:4046/api/values')
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    var modify = document
      .getElementsByTagName('ul')[1]
      .getElementsByTagName('li')

    for (var i = 0; i < modify.length; i++) {
      modify[i].innerHTML = request.responseText
    }
  }
}

request.send()
