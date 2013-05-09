var index = function(){
  $.ajax('https://api.parse.com/1/classes/messages', {
  contentType: 'application/json',
  success: function(data){
    return(data);
  },
  error: function(data) {
    console.log('Ajax request failed');
  }
});

};

var show = function(){

};

var newMessage = function(){

};

// var username = function(){
//   window.username = window.location.search.split('=')[1];
// };

$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
});

var create = function(content, roomname, hax){
  var message = {
    'username': window.username,
    'content': content,
    'roomname': roomname
    // 'hax': hax
  };
  $.ajax('https://api.parse.com/1/classes/blooblah', {
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify(message),
    success: function(data){
      addMessageToDOM(content);
    },
    error: function(error) {
      console.log(error);
      console.log('Ajax request failed');
    }
  });
};

var edit = function(){

};

var update = function(){

};

var destroy = function(){

};

var addMessageToDOM = function(content){

  var userAndContent = window.username + ": " + content;
  var newMessage = $('<li></li>').text(userAndContent).addClass(window.username);
  newMessage.on('click', function(){
    var domClass = '.' + window.username;
    debugger;
    $("." + window.username).css("font-weight","bold");
  });
  window.$listOfTweets.prepend(newMessage);
};

























