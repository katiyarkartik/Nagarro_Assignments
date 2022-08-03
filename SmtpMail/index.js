function sendemail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "email",
    Password: "password",
    To: "email",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: document.getElementById("msg").value,
  }).then((message) => alert(message));
  alert(Body);
}
