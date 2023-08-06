const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Hola! Soy el div");
});

button.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Hola! Soy el botón");
});
