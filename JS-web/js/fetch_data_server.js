var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        xhttp.onreadystatechange = reportStatus;
        xhttp.open("GET", "./book_data.json", true);

        for (i = 0; i < data.length; i++) {

            var div = document.createElement('Div');
            div.style = "background-color:lightblue;border:1px solid black;width:50%;padding:5%";
            div.appendChild(div);

            var content = document.createElement('img');
            content.setAttribute('width', '50px');
            content.setAttribute('height', '50px');
            div.appendChild(img);

            var newdiv = document.createElement('Div');
            newdiv.setAttribute('width', '100%');
            newdiv.setAttribute('height')
        }
    }
};

xhttp.open("GET", "fetch_imagedetails.json", true);
xhttp.send();