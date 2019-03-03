$(document).ready(
    function () {
        $.ajax('http://api.tvmaze.com/singlesearch/shows?q=the+magicians&embed=episodes', {
            method: "GET",
            dataType: "json"
        }).done(function (data) {
            $('#name').append(data.name);
            console.log(data);
            data._embedded.episodes.forEach(function (episode) {
                $('#episodeList').append('<tr>'+
                    '<td>' + episode.season + '</td>' +
                    '<td>' + episode.number + '</td>' +
                    '<td>' + episode.name + '</td>' +
                    '<td>' + episode.summary + '</td>' +
                    +' </tr>')
            })
        })
    }
)
