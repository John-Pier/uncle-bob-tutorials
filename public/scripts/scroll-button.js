const scrollButton = document.createElement("div");
scrollButton.className = "app__button app__overlay-button app__button_warn";
scrollButton.textContent = "Вверх";
scrollButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

(document.getElementsByClassName("app__wrapper")[0] || document.body).append(scrollButton);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

window.onscroll = () => scrollFunction();
