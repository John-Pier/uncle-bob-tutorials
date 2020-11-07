let form;

const feedbackFormName = "feedback-form";
const feedbackFormFieldNames = {
    EMAIL: "email",
    NAME: "name",
    TEXT_AREA: "text",
    COURSE: "course",
    TOOLBAR: "toolbar",
    SUBMIT: "submit",
    CHECKBOX: "requireAnswer"
};

document.addEventListener("DOMContentLoaded", () => {
    form = document.forms[feedbackFormName];
    console.log(form, form.elements);

    form.onsubmit = (event) => {
        console.log(event);
        event.preventDefault();
    };

    Object.values(feedbackFormFieldNames).forEach(value => {
        form.elements[value].addEventListener("change", event => {
            console.log(event);
        });
    })
});



