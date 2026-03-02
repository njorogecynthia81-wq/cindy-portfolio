// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from refreshing
            
            // Get the user's name from the first input
            const name = contactForm.querySelector('input[placeholder="Full Name"]').value;
            
            // Show a simple "Success" message
            alert(`Thanks for reaching out, ${name}! Your message has been received.`);
            
            // Clear the form fields
            contactForm.reset();
        });
    }
});
