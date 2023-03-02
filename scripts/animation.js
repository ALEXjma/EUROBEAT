const img = document.querySelector("#image");
const title = document.querySelector("#title");
const text = document.querySelector("#text");
const list = [title, text, img];
var counter = 0;

list.forEach((i) => {
    i.style.opacity = 0;
})

document.addEventListener("keydown", function(event) {
    if (event.key == " ") {
        if(counter >= list.length) {
            if (location.pathname.split("/").slice(-1) == "index.html") {
                window.location = "slide2.html";
            }
            else if (location.pathname.split("/").slice(-1) == "slide2.html") {
                window.location = "slide3.html"
            }
        }
        list.forEach((element, i) => {
            if (i === counter) {
                element.style.opacity = 1;
            }
        });
        counter += 1;
    }
    if (event.key == "Backspace") {
        if(counter <= 0) {
            if (location.pathname.split("/").slice(-1) == "slide3.html") {
                window.location = "slide2.html";
            }
            else if (location.pathname.split("/").slice(-1) == "slide2.html") {
                window.location = "index.html"
            }
        }
        list.forEach((element, i) => {
            if (i === counter - 1) {
                element.style.opacity = 0;
            }
        });
        counter -= 1;
    }
});
