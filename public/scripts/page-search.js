let searchElement;
const tagMatcher = />(.*?)</g;
let oldValue;
let oldHTML;

document.addEventListener("DOMContentLoaded", () => {
     searchElement = document.getElementById("search-element");
     oldValue = "";
     oldHTML = document.body.innerHTML;

    searchElement.addEventListener("change", event => {
        console.log(event)
        searchInCurrentPage(event.target.value);
    });
});

export function searchInCurrentPage(searchedValue) {
    if (!oldValue) {
        oldHTML = document.body.innerHTML;
    }
    if (!searchedValue || searchedValue.length < 3) {
        document.body.innerHTML = oldHTML;
    }

    searchedValue = searchedValue.trim();

    const searchRegExp = "/" + searchedValue + "/gi";
    const matchedValues = document.body.innerHTML.match(tagMatcher);
    if (!matchedValues) {
        return;
    }

    // console.log(matchedValues);

    const results = matchedValues.map(value => {
        return value.replace(eval(searchRegExp), "<span class=\"_highlighted\">" + searchedValue + "</span>");
    });

    // console.log(results);

    let html = document.body.innerHTML;

    results.forEach((value, index) => {
        html = html.replace(matchedValues[index], value);
    });

    document.body.innerHTML = html;
}
