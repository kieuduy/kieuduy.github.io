// product info
let data = [{
    name: "Toy",
    price: 10,
    status: "new,",
    img: "./img/toy/Capture15.PNG",
    full_img:[
        {img: "./img/toy/Capture27.PNG"},
        {img: "./img/toy/Capture17.PNG"},
        {img: "./img/toy/Capture16.PNG"},
        {img: "./img/toy/Capture15.PNG"},
        {img: "./img/toy/Capture.PNG"},
    ]
}, {
    name: "Shoes",
    price: 80,
    status: "new,",
    img: "./img/shoes/air-max-97-mens-shoe-sd3zmw.jpg"
}, {
    name: "Glass",
    price: 20,
    status: "new,",
    img: "./img/glass/3400-home_default.jpg"
}, {
    name: "Guitar",
    price: 30,
    status: "new,",
    img: "./img/guitar/Lake4-e1516906215517.jpg"
}, {
    name: "Macbook",
    price: 85,
    status: "new,",
    img: "./img/laptop/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg"
}, {
    name: "Clock",
    price: 200,
    status: "new,",
    img: "./img/clock/apple-watch-series-6-44mm-gps-ban-vien-nhom-do-day-cao-su-full-vat_3.jpg"
}
]

let renderData = (data)=>{
    var container = document.querySelector('#row')
    container.innerHTML = ""
    for (let i of data) {
        let child = `                        <div class="card">
      <a href="./intoProduct.html">  <img src="${i.img}" alt="..."></a>
        <div class="card-body">
            <h5 class="card-title">${i.name}</h5>
            <h5 class="price">${i.price}$</h5>
        </div>
    </div>`
    
        container.innerHTML += child
    }
}
renderData(data)


let filterPrice = document.getElementById("filterPrice")
filterPrice.onsubmit = (e)=>{
    e.preventDefault()

    let min =parseInt(filterPrice.from.value) 
    let max = parseInt(filterPrice.to.value) 

    let dataFilter = data.filter((d)=>{
        return d.price >= min && d.price<=max
    })
    renderData(dataFilter)


}

// // Filter
// const from = document.getElementById('from')
// const to = document.getElementById('to')


// function filter() {
//     let filterData = []
//     let min = from.value
//     let max = to.value
//     console.log(data[1]);
//     for (let x in data) {
//         if (data[x].price >= min & data[x].price <= max) {
//             filterData.push(data[x])
//         }
//     }
//     for (let m in data){
//         data.pop(m)
//     }
//     console.log(data);
//     console.log(filterData)
//     for (z of filterData) {
//         child = `                        <div class="card">
//         <img src="./img/Capture.PNG" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${z.name}</h5>
//             <h5 class="price">${z.price}$</h5>
//         </div>
//     </div>`
//         container.innerHTML += child
//     }


