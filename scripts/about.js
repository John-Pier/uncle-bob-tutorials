import { openPopover } from "./popover.js";

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("about-script");
    element && element.addEventListener("click", event => {
        const message = document.createElement("div");
        message.innerHTML = "<p><b>Uncle Bob Tutorials</b> - это сайт справочник по популярным JavaScript билиотекам.</p>" +
            "<p>Разработчик <a>Попов Никита, студент 4 курса</a>.</p>";
        openPopover(message, () => {});
    })
});
