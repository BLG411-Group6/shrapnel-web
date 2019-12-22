

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    //id of input of search bar
    const searched = document.getElementById('searched')
    searched = searched.value
    
  }
