function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_z5xdyq9","template_37chq86".parms).then(alert("Email Sent"))
}