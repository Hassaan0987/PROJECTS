document.addEventListener("DOMContentLoaded", function() {
  const arrowToTop = document.querySelector(".arrowtotop");

  arrowToTop.addEventListener("click", function() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});




  document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".insideLeaveofrecommendation button");
    const messageInput = document.getElementById("message");
    const popup = document.querySelector(".popup");

    submitButton.addEventListener("click", function() {
      // Get the user's message from the input field
      const userMessage = messageInput.value;

      // Create a popup element
      const popupContent = document.querySelector(".popup .insidepopup");
      popupContent.innerHTML = `
        <img src="tick-mark.png" alt="error" width="15%">
        <h4>Thank You</h4>
        <button class="closeButton">OK</button>
      `;

      // Show the popup
      popup.style.display = "flex";

      // Add a click event listener to the OK button
      const closeButton = popup.querySelector(".closeButton");
      closeButton.addEventListener("click", function() {
        // Hide the popup
        popup.style.display = "none";
      });

      // Clear the input field
      messageInput.value = "";
    });
  });

