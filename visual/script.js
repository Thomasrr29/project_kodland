const containerNames = document.querySelector(".names")

const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];

nombres.forEach((nombre) => {

    containerNames.innerHTML += `
        <p>${nombre}</p>
    `
})

console.log(nombres)

