document.getElementById('servicesLink').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default link behavior
    var servicesList = document.getElementById('servicesList');
    var toggleElements = document.querySelectorAll('.toggle-element');
    
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
        
        // Hide other elements
        toggleElements.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        servicesList.style.display = "none";
        
        // Show other elements
        toggleElements.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
