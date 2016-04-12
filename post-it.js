$( document ).ready(function() {
  var num_post = 1;
  $( "#board" ).dblclick(function( event ) {
    
    var x = event.pageX;
    var y = event.pageY;
    
    $("#board").append(new PostIt(num_post).div);
    $("#master"+num_post).css({ left:     x,
     top:      y }).draggable({ handle: "div.header" });

    num_post += 1;
    $(".close a").on("click", deletePost);
    
    $(".content").on("click", stop)
    // $( "#board" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });

  function deletePost(e){
    //e.stopPropagation();
    // console.log(parentElement);
    //console.log(this.parentElement.parentElement.parentElement);
    var $parent = $(this.parentElement.parentElement.parentElement);
    $parent.remove();
    
  };

  function stop(e){
    //e.stopPropagation();
    // console.log(parentElement);
    //console.log(this.parentElement.parentElement.parentElement);
    e.stopPropagation();
  };
});

  

var PostIt = function(num_post) {
  // Aquí va el código relacionado con un post-it
  this.div = '<div id="master'+num_post+'" class="post-it"><div class="header"><div class="close"><a href="#">X</a></div></div><div class="content" contentEditable="true">...</div></div>';
};

$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  //new Board('#board');
});