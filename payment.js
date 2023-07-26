var product = JSON.parse(localStorage.getItem("cartdata"));
displaydata(product);
function displaydata(data){
    data.map(function(ele){
        var div = document.createElement("div");
        div.setAttribute("id","info");
        var image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.setAttribute("id","adjustimage");
        var name = document.createElement("h4");
        name.innerText = ele.name;
        var price = document.createElement("h5");
        price.innerText = "$" + (ele.price*ele.qty);
        div.append(image,name,price);
        document.getElementById("cartproducts").append(div);
    })
}

var total = product.reduce(function(acc,ele){
    return acc + ((parseInt(ele.price))*ele.qty);
},0);

document.getElementById("applybtn").addEventListener("click",()=>{
    var giftcode = document.getElementById("coupon").value;
    if(giftcode === "masai30"){
        total = Math.round(total*(30/100));
        var p = document.createElement("p");
        p.innerText = total;

var totalprice = document.getElementById("total");
totalprice.innerText = "$" + total;

var finalprice = document.getElementById("finalvalue");
finalprice.innerText = "$" + (total + 3.36);
    } 
})

var p = document.createElement("p");
p.innerText = total;

var totalprice = document.getElementById("total");
totalprice.innerText = "$" + total;

var finalprice = document.getElementById("finalvalue");
finalprice.innerText = "$" + (total + 3.36);

document.getElementById("shopall").addEventListener("click",()=>{
    alert("OTP has been sent");
    window.location.href = "OTP.html";
})