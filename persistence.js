const state = {};

function space(objStr) {
    return JSON.stringify(JSON.parse(objStr), null, 2);
}

const setupPersistence = () =>
    setTimeout(() => {
        if (!window.location.href.includes("/character/")) return;
        state.id = window.location.href.split("/").at(-1);
        state.localStorageKey = `characterSheet.${state.id}`;
        addEventListeners();
        setupLocalStorage(state);
    }, 1000);

function addEventListeners() {
    document.querySelectorAll("input").forEach(numberInput =>
        numberInput.addEventListener("input", _e => {
            saveData();
            console.log(state);
        })
    );
}

function setupLocalStorage() {
    const localStorageData = localStorage.getItem(state.localStorageKey);
    if (localStorageData && confirm(`Load this dataset:\n ${space(localStorageData)}`)) {
        Object.assign(state, JSON.parse(localStorageData));
        setData(state);
        return;
    }
    alert(`Initializing dataset:\n ${space(JSON.stringify(state))}`);
    saveData();
}

function saveData() {
    document
        .querySelectorAll("input[type=number]")
        .forEach(number => (state[number.dataset.fieldName] = parseInt(number.value)));
    document
        .querySelectorAll("input[type=checkbox]")
        .forEach(checkbox => (state[checkbox.dataset.fieldName] = checkbox.checked));
    localStorage.setItem(state.localStorageKey, JSON.stringify(state));
}

function setData(state) {
    document.querySelectorAll("input[type=number]").forEach(number => (number.value = state[number.dataset.fieldName]));
    document
        .querySelectorAll("input[type=checkbox]")
        .forEach(checkbox => (checkbox.checked = state[checkbox.dataset.fieldName]));
}

window.addEventListener("hashchange", setupPersistence);
setupPersistence();
