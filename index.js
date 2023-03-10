import { menuArray } from '/data.js'

function getFeedHtml(menuArray){
    let itemsHtml = ``
    menuArray.forEach(menuItem => {
        itemsHtml += ` 
        <div class="main-container">
            <div class="main-container-items">
               <p class="icon">${menuItem.emoji}</p>
               <div class="items">
                    <h3 class="item-name">${menuItem.name}</h3>
                    <p class="item-ingredients">${menuItem.ingredients.join(', ')}</p>
                    <p class="item-price">$ ${menuItem.price}</p>
               </div>
            </div>
            <button class="btn">+</button>
         </div>
        <hr>` 
        return itemsHtml
    })
    document.getElementById('menu').innerHTML = itemsHtml
}
getFeedHtml(menuArray)

