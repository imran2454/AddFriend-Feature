var addfriend=document.querySelector("h5")
var btn=document.querySelector("#but")
var check=0


btn.addEventListener("click",function(){
    if(check==0){
        addfriend.innerHTML='Add Friend'
        addfriend.style.color="green";
        btn.innerHTML="Remove Friend"
        btn.style.bgcolor="red"
        check=1

    }else{
        addfriend.innerHTML='Remove Friend'
        addfriend.style.color="Red";
         btn.innerHTML="Add Friend"
        check=0
    }

})