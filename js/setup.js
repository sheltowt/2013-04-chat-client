if(!/(&|\?)username=/.test(window.location.search)){
  var newSearch = window.location.search;
  if(newSearch !== '' & newSearch !== '?'){
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;
}

window.username = window.location.search.split('=')[1];

// Don't worry about this code, it will ensure that your ajax calls are allowed by the browser
$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
});

$.ajax('https://api.parse.com/1/classes/bloohblahs', {
  contentType: 'application/json',
  success: function(data){
    showOldMessages(data);
    console.log("retrieval sucessful");
  },
  error: function(data) {
    console.log('Ajax request failed');
  }
});


var showOldMessages= function(data){
    var message;
    // for(var i = 0; i < data.results.length; i++){
    //   //debugger;
    //   if(data.results[i].username){
    //      message = data.results[i].text;
    //   }
    //    message = data.results[i].text;
    //   var message2 = $('<li></li>').text(message);
    //   $(window.$listOfTweets).append(message2);
  };

