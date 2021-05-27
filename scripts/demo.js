let data = [{
    name: "s",
    class: "1"
},{ name: "f",
    class: "5"
}
]

let fakeData = {
    data: [{
        name: "s",
        class: "1"
    },{ name: "f",
        class: "5"
    }
    ]
}

let getData = async ()=>{
    let result = await firebase.firestore().collection('demo').get()
    console.log(result);
    let data = await getDataFromDocs(result.docs)
    console.log(data);
}
// getData()

let createDate = async(d)=>{
    await firebase.firestore().collection('demo').add(d)
}
createDate(fakeData)
let getDataFromDoc =(doc)=>{
    let data =doc.data()
    data.id = doc.id
    return data

}
let getDataFromDocs =(docs) =>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}

// Sua data
let addData = async ()=>{
    let updateData = {
        data: [{
            name: "s",
            class: "1"
        },{ name: "f",
            class: "5"
        }
        ]
    }
    
    await firebase
    .firestore()
    .collection('demo')
    .doc('KZf6qn8J0EjSaWlqrLXi')
    .set(up)
}
addData()

