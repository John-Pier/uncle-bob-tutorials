const body = document.getElementsByTagName("body")
    .item(0);

export function openPopover(messageOrElement, successFunction, cancelFunction) {
    const overlay = createOverlay();
    const popoverBody = createBody();
    const toolbar = createToolbar();
    const successButton = createSuccessButton();
    const cancelButton = createCancelButton();

    toolbar.append(cancelButton, successButton);
    messageOrElement && popoverBody.append(messageOrElement);
    popoverBody.append(toolbar);
    overlay.append(popoverBody);
    body.append(overlay);


    function createOverlay() {
        const overlay = document.createElement("div");
        overlay.className = "popover";
        overlay.addEventListener("click", () => {
            cancelFunction && cancelFunction();
            overlay.remove();
        });

        return overlay;
    }

    function createBody() {
        const popoverBody = document.createElement("div");
        popoverBody.className = "popover__body";

        return popoverBody;
    }

    function createSuccessButton() {
        const successButton = document.createElement("div");
        successButton.className = "app__button app__button_primary";
        successButton.innerHTML = "<a>Подтвердить</a>";
        successButton.addEventListener("click", () => {
            successFunction && successFunction();
            overlay.remove();
        });

        return successButton;
    }

    function createCancelButton() {
        const cancelButton = document.createElement("div");
        cancelButton.className = "app__button app__button_warn";
        cancelButton.innerHTML = "<a>Назад</a>";
        cancelButton.addEventListener("click", () => {
            cancelFunction && cancelFunction();
            overlay.remove();
        });

        return successButton;
    }

    function createToolbar() {
        const toolbar =  document.createElement("div");
        toolbar.className =  "popover__toolbar";

        return toolbar;
    }
}
