$("#contact-form").submit(function(event){
    var name = document.getElementById("fullname");
    var email = document.getElementById("email");
    var number = document.getElementById("phone");
    var message = document.getElementById("message");

    if (!name.value || !email.value || !number.value || !message.value) {
        alert("Please check your entries");
    } else {
        $.ajax({
            url: "http://formspree.io/oritfreud@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        event.preventDefault()
        $(this).get(0).reset()
        alert("Messgae sent");
    }
})