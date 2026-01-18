(function () {
    emailjs.init("czDWUqMBEYh48EVMO"); // PUBLIC KEY
})();

const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_h8dqwck",   // SERVICE ID
        "template_ithweea",  // TEMPLATE ID
        this
    ).then(
        function () {
            success.style.display = "block";
            form.reset();
        },
        function (error) {
            console.error("EmailJS Error:", error);
            alert("Error al enviar. Revisá la consola.");
        }
    );
});
