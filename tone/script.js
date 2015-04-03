//this dynamically expands the height of textarea based on # of characters

//this span is used to measure the size of the textarea
var span = $('<span>').css('display','inline-block')
                      .css('word-break','break-all')
                      .appendTo('body').css('visibility','hidden');
function initSpan(textarea){
  span.text(textarea.text())
      .width(textarea.width())
      .css('font',textarea.css('font'));
}
$('textarea').on({
    input: function(){
       var text = $(this).val();      
       span.text(text);      
       $(this).height(text ? span.height() : '1.1em');
    },
    focus: function(){           
       initSpan($(this));
    },
    keypress: function(e){
       //cancel the Enter keystroke, otherwise a new line will be created
       //This ensures the correct behavior when user types Enter 
       //into an input field
       if(e.which == 13) e.preventDefault();
    }
});

var $form = $('form');
var $body = $('body');
var $button = $('button');
var $redo = $('.redo');
var $tone = $('.tone');

$form.submit(function( event ) {
 
  var $textAreaVal = $( "textarea").val();
  var $result = $( ".result" );
  var $slctVal = $('#slct').val();

 /* can use this to break up lines, but only with one index #
  String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));

    //add this to text results below to create break at 25 char:
    .splice(25, 0, "\n"))
}; */

  $form.hide();

  if($slctVal == 'happy') {
		$result.text($textAreaVal + "!!!").css("display", "inline-block");
    $body.css("background-color", "coral");
    $tone.text("Happy:").show();
	} else if($slctVal == 'excited') {
		$result.text($textAreaVal.toUpperCase() + "!!!").css("display", "inline-block");
    $body.css("background-color", "deeppink");
    $tone.text("Excited:").show();
	} else if($slctVal == 'angry') {
		$result.text($textAreaVal + " ... k ...").css("display", "inline-block");
    $body.css("background-color", "firebrick");
    $tone.text("Angry:").show();
	} else if($slctVal == 'sad') {
		$result.text($textAreaVal + " :(").css("display", "inline-block");
    $body.css("background-color", "steelblue");
    $tone.text("Sad:").show();
	} else if($slctVal == 'apathetic') {
    $result.text($textAreaVal.toLowerCase() + " or not, whatever.").css("display", "inline-block");
    $body.css("background-color", "gray");
    $tone.text("Apathetic:").show();
  } else if($slctVal == 'singing') {
    $result.text("ooOoOoOo " + $textAreaVal + "! oooOOooo OOOoooooOOoo!").css("display", "inline-block");
    $body.css("background-color", "turquoise");
    $tone.text("Like you're singing:").show();
  } else if($slctVal == 'sarcastic') {
    $result.text($textAreaVal + " ... like I care.").css("display", "inline-block");
    $body.css({
      "background-color" : "white",
      "color" : "black",
    });
    $tone.text("Sarcastic:").show();
    $button.css("border", "1px solid black");
  } else {
		$result.text($textAreaVal).css("display", "inline-block");
  }

  $redo.show();

  //$( ".result" ).text($( "textarea" ).val()).show(); --> this works!
  event.preventDefault();
});

$redo.click(function() {

  $form.show();
  $('.result').hide();
  $redo.hide();
  $('textarea').val('');
  $('#slct').val('');
  $body.css({
    "background-color" : "blueviolet",
    "color" : "white"  
  });
  $button.css("border", "0px solid black");
  $tone.hide();

});

