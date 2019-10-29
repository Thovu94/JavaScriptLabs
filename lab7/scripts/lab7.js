var buying = (function () {
    var brands = [{
            brand: 'gum1',
            price: 1.50
        },
        {
            brand: 'gum2',
            price: 1.00
    },
        {
            brand: 'gum3',
            price: 1.20
    },
        {
            brand: 'gum4',
            price: 2.30
    }
    ];
    var addPrice = function () {
        var cartItem = document.getElementById('cartitem');
        var cartTotal = document.getElementById('carttotal');

        var item = Number(cartItem.innerHTML);
        var total = Number(cartTotal.innerHTML);
        var price = 0;

        for (var i = 0; i < 4; i++) {
            console.log(this.id);

            if (brands[i].brand == this.id) {
                price = brands[i].price;

                console.log(price);
                break;
            }

        }

        item += 1;
        total += price;
        cartTotal.innerHTML = total;
        cartItem.innerHTML = item;
    };

    function clear() {
        document.getElementById('cartitem').innerHTML = '0';
        document.getElementById('carttotal').innerHTML = '0';

    }
    return {
        addPrice: addPrice,
        clear: clear
    };
}());

document.getElementById("gum1").addEventListener("click", buying.addPrice);
document.getElementById("gum2").addEventListener("click", buying.addPrice);
document.getElementById("gum3").addEventListener("click", buying.addPrice);
document.getElementById("gum4").addEventListener("click", buying.addPrice);
document.getElementById("clear").addEventListener("click", buying.clear);
