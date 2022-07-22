$(document).ready(function () {
    var api = "5911467"
    $('#form').submit(function (event) {
        event.preventDefault();
        var res = ""
        var name = $('#search').val()
        var url = "http://www.omdbapi.com/?apikey=" + api
        $.ajax({
            method: 'GET',
            url: url + "&t=" + name,
            success: function (data) {
                console.log(data)
                console.log(data.Title)
                res = `
                <div style="width:80%; margin-left:auto; margin-right:auto">
                <img  src="${data.Poster}"/>
               </div>
               <p>Title : ${data.Title}</p>
                <p>Year : ${data.Year}</p>
                <p>IMDB Rating : ${data.imdbRating}</p>
                <p>Director : ${data.Director}</p>
                `
                $("#res").html(res)
            }
        })

    })

})