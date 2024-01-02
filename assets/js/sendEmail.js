function sendMail(contactForm) {
    emailjs.send("service_n9al4d7", "template_uucvecb", {
        "from_name": contactForm.name.value,
        "to_name": contactForm.email.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent. Thank you for your feedback!");
            document.getElementById("contact-form").reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message failed to send. Please try again.");
        }
    );
    return false;
}