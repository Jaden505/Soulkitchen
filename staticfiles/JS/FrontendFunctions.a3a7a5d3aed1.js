function displayPrices(sum) {
    document.getElementById('total_basket').innerHTML = '€' + sum
    document.getElementById('subtotal').innerHTML = '€' + sum
    document.getElementById('discount').innerHTML = '€0.00'
}

function displayDiscountPrices(sum, discount_sum, discount_price) {
    document.getElementById('total_basket').innerHTML = '€' + discount_sum
    document.getElementById('subtotal').innerHTML = '€' + sum
    document.getElementById('discount').innerHTML = '€' + discount_price
}

function updateCartAmount(amount) {document.getElementById('cart_amount').innerHTML = amount}

function sortProductsCategory(category, counter) {
    products = document.getElementsByClassName('product')

    document.getElementById(category).appendChild(products[counter])
}

function displayCategory() {
    alles = document.getElementById("radio1")
    broodjes = document.getElementById("radio2")
    drinken = document.getElementById("radio3")
    extras = document.getElementById("radio4")

    cat1 = document.getElementById('bvdw')
    cat2 = document.getElementById('broodjes')
    cat3 = document.getElementById('drinken')
    cat4 = document.getElementById('extras')

    categories = {'alles': alles, 'broodjes': broodjes, 'drinken': drinken, 'extras': extras}
    correspondents = {'alles': [cat1, cat2, cat3, cat4], 'broodjes': [cat2], 'drinken': [cat3], 'extras': [cat4]}

    for (const [key, value] of Object.entries(categories)) {

        correspondent = correspondents[key]

        if (value.checked) {
            for (cat in correspondent) {
                correspondent[cat].style.display = 'inline-block'
            }
            if (key == 'alles') {return}
        }
        else {
            for (cat in correspondent) {
                correspondent[cat].style.display = 'none'
            }
        }

    }
}