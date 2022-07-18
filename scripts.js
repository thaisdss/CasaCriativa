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

function salvar(){
    const divIdeias = document.getElementById("ideias");

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;
    const link = document.getElementById("link").value;  

    divIdeias.innerHTML += 
    `<div class="ideia">
    <img src=" ${image}" alt="Imagem da Ideia"> 
    <div class="content"> 
    <h3>${title}</h3> 
    <p>${category}</p> 
    <div class="description"> 
    ${description} 
    </div> 
    <a href="#">Ir para a Ideia</a> 
    </div>
    </div>`
}