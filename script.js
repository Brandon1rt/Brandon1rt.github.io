function nextPage() {
  window.location.href = "yes.html";
}

function moveButton() {
  var button = document.getElementById("noButton");
  var maxX = window.innerWidth - 2 * button.offsetWidth;
  var maxY = window.innerHeight - 2 * button.offsetWidth;

  var x = Math.random() * maxX;
  var y = Math.random() * maxY;

  // Ensure the button stays within the visible window
  x = Math.min(Math.max(x, 0), maxX);
  y = Math.min(Math.max(y, 0), maxY);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

function sendWhatsAppMessage() {
  var phoneNumber = "8129173679"; // Replace with the recipient's phone number
  var message = "Yes"; // Replace with your message
  var url ="https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
  window.open(url);
}
