var addMessageToDOM = function(content){

  var userAndContent = window.username + ": " + content;
  //var newMessage = $('<li></li>').text(userAndContent).addClass(window.username);
  var newMessage = $('<li>' +content+ ' </li>');
  newMessage.on('click', function(){
    var domClass = '.' + window.username;
    $("." + window.username).css("font-weight","bold");
  });
  window.$listOfTweets.prepend(newMessage);
};

// var displayNewMessages(data){

// }