var productdata = JSON.parse(localStorage.getItem("cartdata"));
 console.log(productdata);

// if(productdata.length === 0){

// }
displaydata(productdata);
displayprice(productdata);
function displaydata(data){
    document.getElementById("data12").innerHTML = "";
    data.map(function(ele){
        var div = document.createElement("div");
        div.setAttribute("id","cartProducts");
        var subdiv = document.createElement("div");
        subdiv.setAttribute("id","cartProducts-Image");
        var img = document.createElement("img");
        img.setAttribute("src",ele.image);
        subdiv.append(img);
        var div1 = document.createElement("div");
        div1.setAttribute("id","cartProducts-Description");
        var p1 = document.createElement("p");
        p1.innerText = ele.name;
        p1.setAttribute("id","cartProducts-Name");
        console.log(ele.name);
        var p2 = document.createElement("p");
        p2.innerText = "$" + ele.price;
        p2.setAttribute("id","cartProducts-Price");
        
        div1.append(p1,p2);
        
        var totaldiv = document.createElement("div");
        totaldiv.setAttribute("id","cartJSPart");
        var btndiv = document.createElement("div");
        btndiv.setAttribute("class","qtybox");
        var span1 = document.createElement("span");
        span1.innerText = "-";
        span1.setAttribute("id","minus");
        span1.addEventListener("click",function(){
            subtractqty(ele)
        });
        var span2 = document.createElement("span");
        span2.innerText = ele.qty;
        span2.setAttribute("id","num");
        var span3 = document.createElement("span");
        span3.innerText = "+";
        span3.setAttribute("id","plus");
        span3.addEventListener("click",function(){
            addqty(ele)
        });
        btndiv.append(span1, span2, span3);
        
        var btn = document.createElement("button");
        btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        btn.setAttribute("id","cartProducts-deleteBtn");
        btn.addEventListener("click",function(){
            deletedata(ele);
        });
        
        var totalprice = document.createElement("div");
        totalprice.setAttribute("id","cartProducts-totalPrice");
          var price = document.createElement("p");
          price.innerText = "$" + (ele.price*ele.qty);
        totalprice.append(price);
        
        totaldiv.append(btndiv,btn,totalprice);
        
        div.append(subdiv,div1,totaldiv);
        document.getElementById("data12").append(div);
        })
}




function addqty(ele){
    ele.qty++;
    document.getElementById("num").innerText = ele.qty;
    console.log(ele.qty);
    localStorage.setItem("cartdata",JSON.stringify(productdata));
    displaydata(productdata);
    displayprice(productdata);
}
function subtractqty(ele){
    if(ele.qty>1){
        ele.qty--;
    document.getElementById("num").innerText = ele.qty;
    console.log(ele.qty);
    localStorage.setItem("cartdata",JSON.stringify(productdata));
    displaydata(productdata);
    displayprice(productdata);
    }
    // ele.qty--;
    // document.getElementById("num").innerText = ele.qty;
    // console.log(ele.qty);
    // localStorage.setItem("cartdata",JSON.stringify(productdata));
    // displaydata(productdata);
    // displayprice(productdata);
}
function displayprice(data){
    var overalltotal = data.reduce(function(acc,ele){
        return acc + (ele.qty*(parseInt(ele.price)));
    },0)
    document.getElementById("Overallprice").innerText = "$" + overalltotal;
}

function deletedata(ele){
    productdata.splice(ele,1);
    localStorage.setItem("cartdata",JSON.stringify(productdata));
    displaydata(productdata);
    displayprice(productdata);
}









