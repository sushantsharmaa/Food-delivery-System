async function getData(url){
    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
}

function append(data,container){

    data.forEach(({strMealThumb,strMeal}) =>{
          
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = strMealThumb;

        let name = document.createElement("h4");
        name.innerHTML = strMeal;

        let price = document.createElement("p");
        price.innerHTML = "Price. " + Math.floor(Math.random() * 1000);

        let btn = document.createElement("button");
        btn.innerHTML = "ADD TO CART";

        div.append(img,name,price,btn);

        container.append(div);
    })
}

export {getData, append};