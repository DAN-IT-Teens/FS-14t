const searchModal = document.querySelector("#searchModal");
const inputSearchModal = document.querySelector("#modalCity");
const closeSearchModal = document.querySelector("#closeSearchModal");
const submitSearchModal = document.querySelector("#submitSearchModal");
const openSearchModal = document.querySelectorAll("#openSearchModal");
const api_key = "edebf07482e71e4a7c7f039d1713ba2c"; // weather
function openModal(modal) {
    modal.classList.toggle("hidden");
}
openSearchModal.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (searchModal) openModal(searchModal);
    });
});
closeSearchModal?.addEventListener("click", ()=>{
    if (searchModal) openModal(searchModal);
});
window.addEventListener("DOMContentLoaded", ()=>{
    const clearWeatherApp = document.querySelector("#clearWeatherApp");
    const listWeatherApp = document.querySelector("#listWeatherApp");
    let localData = [];
    if (localData.length === 0) clearWeatherApp?.classList.toggle("hidden");
    else listWeatherApp?.classList.toggle("hidden");
});

//# sourceMappingURL=index.1adcbd20.js.map
