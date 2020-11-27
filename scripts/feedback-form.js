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

    form.elements[feedbackFormFieldNames.TEXT_AREA].minLength = 10;
    form.elements[feedbackFormFieldNames.NAME].minLength = 2;
    form.elements[feedbackFormFieldNames.NAME].maxLength = 25;
    form.elements[feedbackFormFieldNames.NAME].pattern = "^[a-zA-Zа-яА-Я-_ ]+$";
    form.elements[feedbackFormFieldNames.EMAIL].pattern = "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$";

    form.elements[feedbackFormFieldNames.CHECKBOX].addEventListener("change", event => {
        if (event.target.checked) {
            form.elements[feedbackFormFieldNames.EMAIL].setAttribute("required", "true");
        } else {
            form.elements[feedbackFormFieldNames.EMAIL].removeAttribute("required");
        }
    });

    form.elements[feedbackFormFieldNames.EMAIL].addEventListener("change", event => {
        if (form.elements[feedbackFormFieldNames.EMAIL].validity.patternMismatch) {
            event.target.setCustomValidity('Задайте  корректный Email');
            event.target.title = 'Задайте  корректный Email';
            event.preventDefault();
        } else {
            event.target.title = '';
            event.target.setCustomValidity('');
        }
    });

    form.elements[feedbackFormFieldNames.NAME].addEventListener("change", event => {
        if (form.elements[feedbackFormFieldNames.NAME].validity.patternMismatch) {
            event.target.setCustomValidity('Задайте  корректное Имя');
            event.target.title = 'Задайте  корректное Имя';
            event.preventDefault();
        } else {
            event.target.title = '';
            event.target.setCustomValidity('');
        }
    });

    form.onsubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        openPopover(getValuesAsElement(), () => clearForm());
    };

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
        form.elements[feedbackFormFieldNames.EMAIL].removeAttribute("required");
        form.reset();
    }
});


