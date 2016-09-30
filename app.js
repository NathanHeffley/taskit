document.addEventListener("DOMContentLoaded", function() {
  taskList = document.getElementsByClassName("item");

  for(var i = 0; i < taskList.length; i++) {
    // taskList[i].addEventListener("click", function() { this.remove(); }, false);
    taskList[i].addEventListener("dragstart", function(event) {

    });
  }
});
