$(document).ready(function() {

  $('nav ul:last-child li').click( function() {
    $('nav ul:first-child li').toggle('display')
  });

});
