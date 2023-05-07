const stickers = [
    {
        id: 0,
        name: "Neymar Jr.",
        img: "./Assets/Brasil_NeymarJr.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 1,
        name: "Casemiro",
        img: "./Assets/Brasil_Casemiro.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 2,
        name: "Richarlison",
        img: "./Assets/Brasil_Richarlison.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 3,
        name: "Raphinha",
        img: "./Assets/Brasil_Raphinha.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 4,
        name: "Gabriel Jesus",
        img: "./Assets/Brasil_GabrielJesus.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 5,
        name: "Éder Militão",
        img: "./Assets/Brasil_EderMilitao.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 6,
        name: "Lucas Paquetá",
        img: "./Assets/Brasil_LucasPaqueta.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 7,
        name: "Thiago Silva",
        img: "./Assets/Brasil_ThiagoSilva.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 8,
        name: "Marquinhos",
        img: "./Assets/Brasil_Marquinhos.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 9,
        name: "Alison",
        img: "./Assets/Brasil_Alison.png",
        country: "Brasil",
        quantity: 0,
    },
    {
        id: 10,
        name: "Luka Modrić",
        img: "./Assets/Croacia_LukaModric.png",
        country: "Croácia",
        quantity: 0,
    },
    {
        id: 11,
        name: "Ivan Perišić",
        img: "./Assets/Croacia_IvanPerisic.png",
        country: "Croácia",
        quantity: 0,
    },
    {
        id: 12,
        name: "Luis Suárez",
        img: "./Assets/Uruguai_LuisSuarez.png",
        country: "Uruguai",
        quantity: 0,
    },
    {
        id: 13,
        name: "Edinson Cavani",
        img: "./Assets/Uruguai_EdinsonCavani.png",
        country: "Uruguai",
        quantity: 0,
    },
    {
        id: 14,
        name: "Lionel Messi",
        img: "./Assets/Argentina_LionelMessi.png",
        country: "Argentina",
        quantity: 0,
    },
    {
        id: 15,
        name: "Ángel Di María",
        img: "./Assets/Argentina_AngelDiMaria.png",
        country: "Argentina",
        quantity: 0,
    },
    {
        id: 16,
        name: "Cristiano Ronaldo",
        img: "./Assets/Portugal_CristianoRonaldo.png",
        country: "Portugal",
        quantity: 0,
    },
    {
        id: 17,
        name: "Renato Sanches",
        img: "./Assets/Portugal_RenatoSanches.png",
        country: "Portugal",
        quantity: 0,
    },
    {
        id: 18,
        name: "Alejandro Gomez",
        img: "./Assets/Argentina_AlejandroGomez.png",
        country: "Argentina",
        quantity: 0,
    },
    {
        id: 1,
        name: "Renato Sanches",
        img: "./Assets/Portugal_RenatoSanches.png",
        country: "Portugal",
        quantity: 0,
    },
]
const categories = [
    {
        id: 0,
        name: "Brasil",
        img: "./Assets/Brasil.png"
    },
    {
        id: 1,
        name: "Uruguai",
        img: "./Assets/Uruguai.png"
    },
    {
        id: 2,
        name: "Argentina",
        img: "./Assets/Argentina.png"
    },
    {
        id: 3,
        name: "Portugal",
        img: "./Assets/Portugal.png"
    },
    {
        id: 4,
        name: "Croácia",
        img: "./Assets/Croacia.png"
    },
]

inicializarShowcase = () => {
    var showcaseContainer = document.getElementById('showcaseContainer');
    stickers.map((val) => {
        showcaseContainer.innerHTML += `
        
        <div class="sticker">
            <img src=${encodeURI(val.img)} />
            <p>${val.name}</p>
            <p>${val.country}</p>
            <a key=${val.id} href="#">Adicionar ao carrinho!</a>
        </div>
    `;
    })
}

inicializarShowcase();

refreshCart = () => {
    var cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = "";
    stickers.map((val) => {
        if (val.quantity > 0) {

        }
        cartContainer.innerHTML += `
        
        <p>${val.name}| quantidade: ` + val.quantity + `</p>
        <hr>
    `;
    })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        stickers[key].quantity++;
        refreshCart();
        return false;
    })
}

document.getElementById("productSearchBtn").addEventListener('click', (e) => {
    e.preventDefault();

    const searchValue = document.getElementById("search").value;
    const checkPlayers = stickers.filter(stickers => stickers.name.toLocaleLowerCase().includes(searchValue.toLowerCase()));
    const checkCategories = categories.filter(categories => categories.name.toLowerCase().includes(searchValue.toLowerCase()));

    if (checkPlayers.length > 0) {
        playerSearch();
    }
    else if (checkCategories.length > 0) {
        categorySearch();
    }
    else {
        alert("Não foi póssivel concluir a busca")
    }
})

window.onload = () => {
    var htmlString = "";

    categories.forEach(categories => {
        htmlString += `<div class="countryContainer">
            <img src=${encodeURI(categories.img)}>
            <div class="searchContainer">
                <span class="title">${categories.name}</span>
            </div>
        </div>`
    })

    document.getElementById("categoriesContainer").innerHTML = htmlString
}

const categorySearch = () => {
    const searchValue = document.getElementById("search").value;
    const filterPlayers = stickers.filter(stickers => stickers.country.toLocaleLowerCase().includes(searchValue.toLowerCase()));
    var htmlString = "";

    if (filterPlayers.length > 0) {
        filterPlayers.forEach(stickers => {
            htmlString += `<div class="sticker">
                            <img src="${stickers.img}">
                            <p>${stickers.name}</p>
                            <p>${stickers.country}</p>
                            <a key="${stickers.id}" href="../html/carrinho.html">Carrinho</a>
                            </div>`
        })
    } else {
        htmlString = "<span class='noCategoryFound'>Nenhuma categoria encontrada... </span>"
    }
    document.getElementById("showcaseContainer").innerHTML = htmlString
    document.getElementById("search").value = ""
}

//Buscar por nome do jogador

const playerSearch = () => {
    const searchValue = document.getElementById("search").value;
    const filterPlayers = stickers.filter(stickers => stickers.name.toLocaleLowerCase().includes(searchValue.toLowerCase()));
    var htmlString = "";

    if (filterPlayers.length > 0) {
        filterPlayers.forEach(stickers => {
            htmlString += `<div class="sticker">
                            <img src=${stickers.img}>
                            <p>${stickers.name}</p>
                            <p>${stickers.country}</p>
                            <a key="${stickers.id}" href="../html/carrinho.html"></a>
                            </div>`
        })

        document.getElementById("showcaseContainer").innerHTML = htmlString
        document.getElementById("search").value = ""
    }
}