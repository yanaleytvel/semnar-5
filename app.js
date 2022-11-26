document.body.onload = function() {
    console.log('hello onload')
    let request = new XMLHttpRequest;
    request.open('GET', 'header.html', true)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4)
        if (request.status === 200) {
            console.log(request.responseText)
            document.body.innerHTML = request.responseText + document.body.innerHTML
        }
    }
    let request2 = new XMLHttpRequest;
    request2.open('GET', 'footer.html', true)
    request2.send()
    request2.onreadystatechange = function () {
        if (request2.readyState === 4)
        if (request2.status === 200) {
            console.log(request2.responseText)
            document.body.innerHTML = request2.responseText + document.body.innerHTML
        }
    }
}