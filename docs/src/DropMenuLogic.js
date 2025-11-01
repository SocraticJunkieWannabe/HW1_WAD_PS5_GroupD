// Get references to the button and menu
const dropdownBtn = document.getElementById('dropButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown when button is clicked
dropdownBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling to document
    dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Optional: Close dropdown when clicking on a menu item
dropdownMenu.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
});