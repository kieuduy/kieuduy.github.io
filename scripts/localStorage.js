let data = [{
    img: "./img/toy/Capture27.PNG",
    name: "toy",
    price: 10
}
]

let dom = document.querySelector(".button");
dom.addEventListener("click", (e)=>{
    e.preventDefault()
    let dataToLocal = []
    dataToLocal.push(data[0])
    localStorage.setItem('dataCart', JSON.stringify(dataToLocal))
})