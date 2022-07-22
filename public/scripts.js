function onOff(){
    document
    .getElementById("modal")
    .classList
    .toggle("hide")

    /*document.querySelector("body")
    .classList
    .toggle("hideScroll")

    document
    .getElementById("modal")
    .classList
    .toggle("addScroll")*/
}

function onOffDel(){
    document
    .getElementById("modalDel")
    .classList
    .toggle("hide")
}

function checkFields(event){
    const valuesCheck = [
        "title",
        "image",
        "category",
        "description",
        "link"
    ]

    const isEmpty = valuesCheck.find(function(value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty){
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert("Por favor, preencha todos os campos!")
    }
}