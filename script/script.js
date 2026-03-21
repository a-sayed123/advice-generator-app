'use strict'

const adviceNumber = document.getElementById("advice__id")

const adviceText = document.getElementById("advice__text")

const adviceBtn = document.getElementById("advice__btn")

adviceBtn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        adviceNumber.innerText = data.slip.id
        adviceText.innerText = data.slip.advice
    })
})