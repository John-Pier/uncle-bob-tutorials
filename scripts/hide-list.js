document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".accordion[data-accordion]");
    elements.forEach(element => {
        element.addEventListener("click", event =>  {
            event.target.classList.toggle("non-active");
            const panel = event.target.nextElementSibling;
            panel && panel.classList.toggle("accordion__list_hide");
        });
        if (element.classList.contains("non-active")) {
            const panel = element.nextElementSibling;
            panel && panel.classList.toggle("accordion__list_hide");
        }
    });
});
