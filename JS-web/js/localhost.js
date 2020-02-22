var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(httpRequest.responseText);
        var response = response.results;



    }
};

xhttp.open("GET", "https://api.themoviedb.org/3/movie/76341", true);
xhttp.send();