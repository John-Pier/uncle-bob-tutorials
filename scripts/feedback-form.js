import { openPopover } from "./popover.js";

let form;

const feedbackFormName = "feedback-form";

const feedbackFormFieldNames = {
    EMAIL: "email",
    NAME: "name",
    TEXT_AREA: "text",
    COURSE: "course",
    MAIN_FIELDS: "main-fields",
    SUBMIT: "submit",
    CHECKBOX: "require-answer"
};

document.addEventListener("DOMContentLoaded", () => {
    form = document.forms[feedbackFormName];

    form.onsubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        openPopover(getValuesAsElement(), () => clearForm());
    };

    form.elements[feedbackFormFieldNames.CHECKBOX].addEventListener("change", event => {
        if (event.target.checked) {
            form.elements[feedbackFormFieldNames.EMAIL].setAttribute("required", "true");
        } else {
            form.elements[feedbackFormFieldNames.EMAIL].removeAttribute("required");
        }

    });

    function getValuesAsElement() {
        const element = document.createElement("div");
        element.className = "popover__list";
        element.innerHTML = element.innerHTML.concat(
            "<h3>Введенные данные:</h3>",
            getStroke("Email", form.elements[feedbackFormFieldNames.EMAIL].value),
            getStroke("Имя", form.elements[feedbackFormFieldNames.NAME].value),
            getStroke("Сообщение", form.elements[feedbackFormFieldNames.TEXT_AREA].value),
            getStroke("Курс", form.elements[feedbackFormFieldNames.COURSE].value),
            getStroke("Необходимо ответить", form.elements[feedbackFormFieldNames.CHECKBOX].checked),
        );

        function getStroke(name, value) {
            return ("<div>" + name + ": " + (value || "-") + "</div>");
        }

        return element;
    }

    function clearForm() {
        form.reset();
    }
});


