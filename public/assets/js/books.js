$(function(){
    $("change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newdevour = $(this).data("devoured");
    
        var newDevourState = {
          devoured: newdevour
        };
  
    
   // Send the PUT request.
   $.ajax("/api/books/" + id, {
    type: "PUT",
    data: newDevourState
  }).then(
    function() {
      console.log("changed book to", newdevour);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBook = {
      title: $("#title").val().trim(),
     
    };

    // Send the POST request.
    $.ajax("/api/books", {
      type: "POST",
      data: newBook
    }).then(
      function() {
        console.log("Added New Book");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-book").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/books/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted book", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});






   