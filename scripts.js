// Get the popup elements
const contactButton = document.getElementById('contactButton');
const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');

// Show the popup when the 'Contact Us' button is clicked
contactButton.addEventListener('click', () => {
    contactPopup.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});
