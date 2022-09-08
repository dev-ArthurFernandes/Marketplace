let separateProducts = {"Frutas":[],"Bebidas": [],"Higiene": []}


function separatesCategories(listItem){
    for(let i = 0; i<listItem.length;i++){
        if(listItem[i].category == "Frutas"){
            separateProducts.Frutas.push(listItem[i])
        }else if(listItem[i].category == "Bebidas"){
            separateProducts.Bebidas.push(listItem[i])
        }else if(listItem[i].category == "Higiene"){
            separateProducts.Higiene.push(listItem[i])
        }
    }
}
separatesCategories(products)

function validarImage(product){
    if(product.image == undefined){
        return product.image = "./img/products/no-img.svg"
    }
    return product.image
    
}

let Frutas  = separateProducts.Frutas
let Bebidas  = separateProducts.Bebidas
let Higiene = separateProducts.Higiene

function createCards(products){
    let tagUl = document.createElement("ul")
    for(let i = 0;i<products.length;i++){
        tagUl.appendChild(MakeCards(products[i]))
    }
    return tagUl
}


function MakeCards(product){
    
    let productTitle            = product.title
    let productPrice           = product.price
    let productCategory       = product.category
    let productImage           = validarImage(product)
    let productImageDescription = productTitle


    let productCard   = document.createElement("li")
    let tagImg         = document.createElement("img")
    let productMain     = document.createElement("div")
    let tagH2            = document.createElement("h2")
    let tagH5             = document.createElement("h5")
    let tagStrong          = document.createElement("strong")

    productCard.className    = "product"
    productMain.className     = "product-main"
    tagImg.className           = "product-img"
    tagH2.className            = "product-title"
    tagH5.className           = "product-category"
    tagStrong.className      = "product-price"

    tagImg.src              = productImage
    tagImg.alt             = productImageDescription
    tagH2.innerHTML       = productTitle
    tagH5.innerHTML      = productCategory
    tagStrong.innerHTML = productPrice

    productMain.append(tagH2,tagH5,tagStrong)
    productCard.append(tagImg, productMain)

    return productCard
}

let container               = document.querySelector(".container")
let sectionFruits          = document.createElement("section")
let sectionDrinks         = document.createElement("section")
let sectionHygienes        = document.createElement("section")
let fruitsTitle             = document.createElement("h2")
let drinksTitle              = document.createElement("h2")
let hygienesTitle             = document.createElement("h2")
let fruitsDiv               = document.createElement("div")
let drinksDiv              = document.createElement("div")
let hygienesDiv           = document.createElement("div")
sectionFruits.className    = "products-section"
sectionDrinks.className     = "products-section"
sectionHygienes.className    = "products-section"
fruitsTitle.innerHTML         = "Frutas"
drinksTitle.innerHTML        = "Bebida"
hygienesTitle.innerHTML     = "Higiene"
fruitsDiv.className        = "products-content Frutas"
drinksDiv.className       = "products-content Bebidas"
hygienesDiv.className      = "products-content Higiene"

fruitsDiv.appendChild(createCards(Frutas))
drinksDiv.appendChild(createCards(Bebidas))
hygienesDiv.appendChild(createCards(Higiene))

sectionFruits.append(fruitsTitle,fruitsDiv)
sectionDrinks.append(drinksTitle,drinksDiv)
sectionHygienes.append(hygienesTitle,hygienesDiv)

container.append(sectionFruits, sectionDrinks, sectionHygienes)