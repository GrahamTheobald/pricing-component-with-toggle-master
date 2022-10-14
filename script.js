const toggle = document.querySelector(".toggle")
const pricings = document.querySelectorAll("[data-pricing]")

toggle.addEventListener("change", changePricing)

function changePricing() {
    pricings.forEach(pricing => pricing.classList.toggle("hidden"))

}