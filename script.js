var counter = 0;

$('button').on("click", function() {
  var $this = $(this);
  counter += 1;
  $this.text(counter);
  var classText;
  if (counter % 4 === 0) {
    classText = "zero";
  } else if (counter % 4 === 1) {
    classText = "one";
  } else if (counter % 4 === 2) {
    classText = "two";
  } else if (counter % 4 === 3) {
    classText = "three";
  }
  $this.prop("class", classText);
});
