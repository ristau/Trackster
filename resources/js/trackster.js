var Trackster = {};

const API_KEY = '8b3a4541ff4e727641393001249b1d06';
const baseURL = ('http://ws.audioscrobbler.com/2.0/?method=track.search&track=');
const dataFormat = ('&format=json');

$(document).ready(function(){
  var $searchText = $('#searchInput');

  $('#searchBtn').click(function(){
    Trackster.searchTracksByTitle($searchText.val());
  });



});
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
    console.log(title);
    const urlToSend = baseURL + title + '&api_key=' + API_KEY + dataFormat;

    $.ajax({
      url: urlToSend,
      dataType: 'json',
      success(response){
        console.log(response);
      },
      error(jqXHR, status, errorThrown){
        console.log(jqXHR);
      }
    });
};
