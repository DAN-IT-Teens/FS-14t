const searchModal = document.querySelector("#searchModal");
const inputSearchModal = document.querySelector("#modalCity");
const closeSearchModal = document.querySelector("#closeSearchModal");
const submitSearchModal = document.querySelector("#submitSearchModal");
const openSearchModal = document.querySelectorAll("#openSearchModal");
const api_key = "fa8ed04cfd663fe1da3794f3f3f4d03e"; // openWeatherApp
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
let localData = [];
function updateLocalData() {
    const clearWeatherApp = document.querySelector("#clearWeatherApp");
    const listWeatherApp = document.querySelector("#listWeatherApp");
    if (localData.length === 0) {
        listWeatherApp?.classList.add("hidden");
        clearWeatherApp?.classList.remove("hidden");
    } else {
        clearWeatherApp?.classList.add("hidden");
        listWeatherApp?.classList.remove("hidden");
    }
}
window.addEventListener("DOMContentLoaded", ()=>{
    updateLocalData();
});
class City {
    constructor(name){
        this.name = name;
    }
    getWeather() {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=fa8ed04cfd663fe1da3794f3f3f4d03e&units=metric&lang=ua`).then((res)=>{
            const info = res.json();
            info.then((value)=>this.weatherInfo = value);
            if (searchModal && res.status === 200) openModal(searchModal);
            return info;
        });
    }
    renderCard() {
        return `
            <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
            <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                        ${this.weatherInfo.name}
                    </h3>

                    <p class="mt-1 text-xs font-medium text-gray-600">${this.weatherInfo.main.temp}\xb0C</p>
                </div>

                <div class="hidden sm:block sm:shrink-0">
                    <img alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        class="size-16 rounded-lg object-cover shadow-sm" />
                </div>
            </div>

            <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                    maiores deleniti consectetur nobis et eaque.
                </p>
            </div>

            <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">\u{412}\u{43E}\u{43B}\u{43E}\u{433}\u{456}\u{441}\u{442}\u{44C}</dt>
                    <dd class="text-xs text-gray-500">${this.weatherInfo.main.humidity}</dd>
                </div>

                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">\u{41C}\u{430}\u{43A}\u{441}\u{438}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{442}\u{435}\u{43C}\u{43F}\u{435}\u{440}\u{430}\u{442}\u{443}\u{440}\u{430}</dt>
                    <dd class="text-xs text-gray-500">${this.weatherInfo.main.temp_max}</dd>
                </div>

                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">\u{41C}\u{456}\u{43D}\u{456}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{442}\u{435}\u{43C}\u{43F}\u{435}\u{440}\u{430}\u{442}\u{443}\u{440}\u{430}</dt>
                    <dd class="text-xs text-gray-500">${this.weatherInfo.main.temp_min}</dd>
                </div>
            </dl>
        </a>
        `;
    }
}
submitSearchModal?.addEventListener("click", ()=>{
    const cityName = inputSearchModal?.value;
    console.log(cityName);
    if (cityName) {
        const city = new City(cityName);
        city.getWeather().then((res)=>{
            console.log(res);
            localData.push(res.name);
            const listWeatherApp = document.querySelector("#listWeatherApp");
            const card = document.createElement("div");
            card.innerHTML = city.renderCard();
            listWeatherApp?.append(card);
            updateLocalData();
        });
    }
});

//# sourceMappingURL=index.1adcbd20.js.map
