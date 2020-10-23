// // Get the modal
// var emailModal = document.getElementById("email-modal");
//
// // Get the button that opens the modal
// var emailModalButton = document.getElementById("email-modal-btn");
//
// // Get the <span> element that closes the modal
// var closeEmailModalButton = document.getElementsByClassName("close-email-modal")[0];
//
// // When the user clicks on the button, open the modal
// emailModalButton.onclick = function() {
//   emailModal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// closeEmailModalButton.onclick = function() {
//   emailModal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == emailModal) {
//     emailModal.style.display = "none";
//   }
// }

$(".container-mail-connect-text").click(function(){
  $(".container-mail-connect-text a")[0].click();
});


function sendMessage(){
  var clientName = $("#client-name").val();
  var clientEmail = $("#client-email").val();

  var request = new XMLHttpRequest();
  request.open('GET','https://onedrive.live.com/edit.aspx?cid=fdc339d14b7bd2af&page=view&resid=FDC339D14B7BD2AF!112&parId=FDC339D14B7BD2AF!103&app=Excel', true);
}
