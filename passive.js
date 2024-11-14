// Toggle the visibility of additional information when the button is clicked
function toggleDetails(button) {
    const moreInfo = button.nextElementSibling;
    const isVisible = moreInfo.style.display === 'block';
  
    if (isVisible) {
      moreInfo.style.display = 'none';
      button.textContent = 'Know More';
    } else {
      moreInfo.style.display = 'block';
      button.textContent = 'Show Less';
    }
  }