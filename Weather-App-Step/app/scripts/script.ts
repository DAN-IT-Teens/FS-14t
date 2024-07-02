const searchModal: HTMLDivElement | null = document.querySelector('#searchModal');
const inputSearchModal: HTMLInputElement | null = document.querySelector("#modalCity");
const closeSearchModal: HTMLButtonElement | null = document.querySelector('#closeSearchModal');
const submitSearchModal: HTMLButtonElement | null = document.querySelector('#submitSearchModal');
const openSearchModal: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('#openSearchModal');

const api_key: string = "edebf07482e71e4a7c7f039d1713ba2c"; // weather

function openModal(modal: HTMLDivElement): void {
    modal.classList.toggle('hidden');
}

openSearchModal.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
        if(searchModal) {
            openModal(searchModal);
        }
    })
})

closeSearchModal?.addEventListener('click', () => {
    if(searchModal) {
        openModal(searchModal)
    }
})


window.addEventListener('DOMContentLoaded', () => {
    const clearWeatherApp: HTMLDivElement | null = document.querySelector('#clearWeatherApp');
    const listWeatherApp: HTMLDivElement | null = document.querySelector('#listWeatherApp');
    let localData = [];

    if(localData.length === 0) {
        clearWeatherApp?.classList.toggle('hidden');
    } else {
        listWeatherApp?.classList.toggle('hidden');
    }
})