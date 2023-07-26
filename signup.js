document.querySelector("form").addEventListener("submit",call);
  var arr=[];
function call(){
    event.preventDefault();
    var obj={
         fname :document.getElementById("fname").value,
         lname :document.getElementById("lname").value,
         mail  :document.getElementById("mail").value,
         password :document.getElementById("password").value
    } 
    // if(obj["mail"]!=[]&&obj["password"]!=[]){
    //     arr.push(obj);
    //  }


    //  localStorage.setItem("array", JSON.stringify(arr));
     var reset= JSON.parse(localStorage.getItem("array"))||[];


   
      var flag=true;
      for(var i=0;i<reset.length;i++){
        if((obj["mail"])===reset[i]["mail"]&&obj["mail"]!=[]){
            flag=false;
            document.getElementById("reset").style.display="contents";
            document.getElementById("margin").style.display="none";
            document.getElementById("lineblank").style.display="none";
            document.getElementById("secondlast").style.display="none";
            document.getElementById("last").style.display="none";
            document.getElementById("adjust").style.display="contents";
        }
     }
      if(flag){
      if(obj["mail"]==[]){
          document.getElementById("secondlast").style.display="contents";
          document.getElementById("adjust").style.display="contents";
          document.getElementById("margin").style.display="contents";
      }else if(obj["mail"]!=[]){
          document.getElementById("secondlast").style.display="none";
          document.getElementById("margin").style.display="none";
          
      }
      if(obj["password"]==[]){
          document.getElementById("last").style.display="contents";
          document.getElementById("adjust").style.display="contents";
          document.getElementById("lineblank").style.display="contents";
      }else if(obj["password"]!=[]){
          document.getElementById("last").style.display="none";
          document.getElementById("lineblank").style.display="none";
      }
      if(obj["mail"]!=[]&&obj["password"]!=[]){
          document.getElementById("adjust").style.display="none";
          if(obj["mail"]!=[]&&obj["password"]!=[]){
            arr.push(obj);
            alert("Sign Up Successful");
            window.location.href="index.html";
         }
         localStorage.setItem("array", JSON.stringify(arr));
      }
      
      }
    }
      

