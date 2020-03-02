var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        xhttp.onreadystatechange = reportStatus;
        xhttp.open("GET", "./book_data.json", true);

        for (i = 0; i < data.length; i++) {
            var div = document.createElement('Div');
            var newcontent = document.createTextNode('');
            div.appendChild(newcontent);

            var data = document.createElement('');
            var newcontentdata = document.createTextNode('');
            div.appendChild(newcontentdata);
        }

        var currentdivision = document.getElementById("paragraph");
        document.body.insertBefore(div, currentdivision);

        var x = document.createAttribute('image');
    }
};



xhttp.open("GET", "book_data.json", true);
xhttp.send();