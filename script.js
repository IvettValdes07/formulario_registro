(function () {
    emailjs.init("cIuVigCuXoIlwQZF8"); // PUBLIC KEY
})();

const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_hqxqadi",   // SERVICE ID
        "template_8lghcbq",  // TEMPLATE ID
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
