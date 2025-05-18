window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('popupForm').style.display = 'block';
    });
  });
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
  }
  