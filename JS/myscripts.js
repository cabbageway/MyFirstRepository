const productData = [
    {
        PIndex : 1,
        name: "Iphone 12",
        category: "Electonic",
        inStore: true,
        anzahl: 20,
        price: 950.00,

    },
    {
        PIndex : 2,
        name: "Flat TV",
        category: "Elektro",
        inStore: false,
        anzahl: 40,
        price: 499.00,
    }
];

let counter = 0;

let btn = document.getElementById("new");
btn.addEventListener('click', function(){

    productData.push({
        PIndex: document.getElementById("1").value,
        name: document.getElementById("2").value,
        category: document.getElementById("3").value,
        inStore: document.getElementById("4").checked,
        anzahl: document.getElementById("5").value,
        price: parseFloat(document.getElementById("6").value)
    });

    console.log(productData);
});

document.getElementById("filterB").addEventListener("click", function(){
    let sum = 0;
    for(let i = 0; i < productData.length; i++){
        sum += productData[i].price;
    }

    console.log(productData.filter(function(item){

        if(item.price >= (sum / productData.length)){
            localStorage.setItem(counter +"a", item.PIndex);
            localStorage.setItem(counter +"b", item.name);
            localStorage.setItem(counter +"c", item.category);
            localStorage.setItem(counter +"d", item.inStore);
            localStorage.setItem(counter +"e", item.anzahl);
            localStorage.setItem(counter +"f", item.price);
            counter++;
        }
        return item.price >= (sum / productData.length);
    }));



});

let warenkorb = [];
document.getElementById("warenkorb").addEventListener("click", function(){
    for(let i = 0; i < counter; i++){
        warenkorb.push({
            PIndex : localStorage.getItem(i + "a"),
            name: localStorage.getItem(i + "b"),
            category: localStorage.getItem(i + "c"),
            inStore: localStorage.getItem(i + "d"),
            anzahl: localStorage.getItem(i + "e"),
            price: parseFloat(localStorage.getItem(i + "f"))
        });
    }

    console.log(warenkorb);
});


