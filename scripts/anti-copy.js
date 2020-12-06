document.oncopy = () => {
    const selection = window.getSelection();
    const copyText = selection + "<p>Источник: <a href='"+document.location.href+"'>Uncle Bob Tutorials</a></p>";;
    const newDiv = document.createElement("div");
    newDiv.style.position="fixed";
    newDiv.style.opacity="0";
    newDiv.innerHTML = copyText;
    document.body.append(newDiv);
    selection.selectAllChildren(newDiv);
    window.setTimeout(() => {
       newDiv.remove();
    },0);
}
