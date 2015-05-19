/* creating these variables for jQuery reduces the amount of times that we call jQuery since we're using them over and over again.*/

var textArea = $('textarea');
var tweetCounter = $('.tweet-counter');
var submitButton = $('input');
var tweetList = $('.tweets');
var firstTweet = $('.tweet').first();

var calculateRemaining = function () {
  var remaining = 140 - textArea.val().length;
  
  tweetCounter.text(remaining);
  
  //toggleClass - will add class if true, remove if false:
  tweetCounter.toggleClass('warning', remaining < 16);
  
  tweetCounter.toggleClass('error', remaining < 0);
  
  submitButton.prop('disabled', remaining < 0 || remaining === 140);
};

calculateRemaining();

textArea.on('keyup', calculateRemaining);

$('form').on('submit', function(event) {
  //prevent default action of "submit" (which is refresh the page):
  event.preventDefault();
  
  //find all tweets, find the first one, then clone it:
  var newTweet = firstTweet.clone();
  
  //look inside newTweet and find anything with a class of tweet-content & change text:
  newTweet.find('.tweet-content').text(textArea.val());
  
  //when a new tweet is created with either class here, it will be removed
  newTweet.removeClass('favorited retweeted');
  
  //adds newTweet to the beginning of class tweets:
  tweetList.prepend(newTweet);
  //newTweet.prependTo(tweetList);
  
  //clear the text area after you submit a tweet:
  textArea.val('');
  
  //reset tweet counter
  tweetCounter.text('140');
  
});

/* this listens for button clicks within the tweets class. if you do just $('button').on then when the page loads it only see the existing buttons and not any new buttons that are added with new tweets */

$('.tweets').on('click', 'button', function () {
  var $this = $(this);
  var classToAdd;
  
  if ($this.hasClass('favorite')) {
    classToAdd = 'favorited';
  } else if ($this.hasClass('retweet')) {
    classToAdd = 'retweeted';
  }
  $this.closest('.tweet').toggleClass(classToAdd);

});

//.on takes two argumnts: the first is the type of event you're listening for (written as a string) and the second is a function.

/*this is a "context variable" >> changes the scope you're in. here "this" refers to the specific textarea that has been typed into
this.val() won't work because this is no longer an array holding all of the jQuery functions, so val is not defined. using $(this) will add in the jQuery features. val() will always return a string.*/

//prop takes two arguments - first is which property you want to change, second is what we want to change it to (true or false). here remaining < 0 is either true or false
