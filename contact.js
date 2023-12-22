emailjs.init("JtlreAhddE5KeDiXx");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submit action

    emailjs.sendForm('service_n7g7sqz', 'template_snpkabr', this)
        .then(function(response) {
            alert('Email successfully sent!');
            document.getElementById('contact-form').reset();
            // You can add code here to handle a successful submission
        }, function(error) {
            alert('Failed to send email. Please try again later.');
            // You can add code here to handle an error during submission
        });
});
