const state = {};

const addEventListeners = () =>
    setTimeout(() => {
        document.querySelectorAll("input").forEach(numberInput =>
            numberInput.addEventListener("input", e => {
                collectData();
                console.log(state);
            })
        );
    }, 1000);

function collectData() {
    document
        .querySelectorAll("input[type=number]")
        .forEach(number => (state[number.dataset.fieldName] = parseInt(number.value)));
    document
        .querySelectorAll("input[type=checkbox]")
        .forEach(checkbox => (state[checkbox.dataset.fieldName] = checkbox.checked));
}

window.addEventListener("hashchange", addEventListeners);
addEventListeners();
