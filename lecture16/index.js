let products = [];

const uimekar = () => {
    document.getElementById("data").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let img = document.createElement("img");
        img.src = products[i].img;
        let title = document.createElement("h2");
        title.innerHTML = products[i].title;
        let price = document.createElement("p");
        price.innerHTML = products[i].price;
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener("click", () => {
            products.splice(i, 1);
            uimekar();
        });
        let div = document.createElement("div");
        div.append(img, title, price, btn);
        document.getElementById("data").append(div);
    }
}

const printdata = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let img = document.getElementById("img").value;
    let price = document.getElementById("Price").value;

    if (title.length<2) {
        alert("please enter welid title")
    }

    if (price.length<0) {
        alert("price in Always positive")
    }

    let product = {
        title: title,
        img: img,
        price: price
    };
    products.push(product);

    uimekar();
}

document.getElementById("form").addEventListener("submit", printdata);
