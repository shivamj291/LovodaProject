document.querySelector("#btnsign").addEventListener("click",call);
var person=JSON.parse(localStorage.getItem("array"));
console.log(person)
function call(){
   event.preventDefault();
    var mail=document.getElementById("mail").value;
    var password=document.getElementById("password").value;
    console.log(mail,password)
    if(!password||!mail){
      alert("Email or Password Incorrect")
      document.querySelector("#secondlast").setAttribute("style","display:block");
      document.querySelector("#thirdlast").setAttribute("style","display:none");
    }else if(person[0].mail!=mail||person[0].password!=password){
   
      document.querySelector("#secondlast").setAttribute("style","display:none");
      document.querySelector("#thirdlast").setAttribute("style","display:block");
    }
    else if(person[0].mail===mail&&person[0].password===password){
      alert("Login Successful");
     window.location.href = "index.html";
    }
// if(person[0].fname==undefined){
      
//       document.getElementById("ull").style.display="contents";
//       document.getElementById("adjust").style.display="contents";
//       document.getElementById("logimage").style.display="contents";

//    }else{
//    
//    }
}