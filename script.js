window.addEventListener("scroll",reveal);
function reveal(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){

        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=150;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
let hmeBtn=document.getElementById("CTA");
hmeBtn.addEventListener("click",hmeBtnClick);
function hmeBtnClick(){
    alert("Content unavailable. Site still under development");
}

// class Links{
//     constructor(link){
//         this.link=link;
//     }
// }

// let link1=new Links(document.getElementById("internet a"));
