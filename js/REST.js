window.previousMessageCount = null;
window.friends = [];

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

  $.ajax('https://api.parse.com/1/classes/blooblahs', {
  contentType: 'application/json',
  data: {order: "-createdAt"},
  success: function(data){
    previousMessageCount = previousMessageCount || data.results.length;
    displayNewMessages(data);
  },
  error: function(data) {
    console.log('Ajax request failed');
  }
});

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
  $.ajax('https://api.parse.com/1/classes/blooblahs', {
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify(message),
    success: function(data){
      //addMessageToDOM(content);
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

var addMessageToDOM = function(content, username){

  var userAndContent = username + ": " + content;
  var newMessage = $('<li></li>').text(userAndContent).addClass(username);
  
  newMessage.on('click', function(){
    var domClass = '.' + username;
    addFriend(username);
    $("." + username).css("font-weight","bold");
  });
  window.$listOfTweets.prepend(newMessage);
  if(isFriend(username)){
    $("." + username).css("font-weight","bold");
  }
};

var displayNewMessages = function(data){
    for(var i = 0; i < data.results.length - previousMessageCount; i++){
    addMessageToDOM(data.results[0].content, data.results[0].username);
   }
    previousMessageCount = data.results.length;
};

// var addFriend2User = function(friend){
//   $.ajax('https://api.parse.com/1/users/friends', {
//     contentType: 'application/json',
//     type: 'POST',
//     data: JSON.stringify(friend),
//     success: function(data){
//       console.log(data);
//     },
//     error: function(error) {
//       console.log(error);
//       console.log('Ajax request failed');
//     }
//   });
// };

//Check to see if this user belongs to the list of the current user's friends
var isFriend = function(username){
  for(var i = 0; i < friends.length; i++){
    if(friends[i] === username){
      return true;
    }
  }
};

//Adds friend the user clicked on to a list of the user's friends
var addFriend = function(username){
  window.friends.push(username);

};

























