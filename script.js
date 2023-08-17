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
function linkClick(){
    alert("Sorry! What you are looking for is currently not Available. Site still under development");
}

// statistics changes section
var years=document.querySelector("#years h3");
var members=document.querySelector("#members h3");
var satisfied=document.querySelector("#satisfied h3");
var projects=document.querySelector("#projects h3");


let statisticsHolder=document.querySelector(".statistics");
statisticsHolder.addEventListener("mouseover",statisticsOver);
// change the years section
function statisticsOver(){
let year2=0;
let members2=0;
let satisfied2=0;
let projects2=0;
let yearCount=setInterval(() => {
    year2++;
    let newYear=year2.toString();
    years.innerText=newYear;
    if(year2===20){
        clearInterval(yearCount);
    }else if(year2>15 &&year2 <20){
        years.style.color="red";
    }
    else if(year2>=10 && year2<=15){
        years.style.color="blue";
    }else{
        years.style.color="black";
    }
},450);
// change the members section
let membersCount=setInterval(() => {
    members2++;
    let newMembers=members2.toString();
    members.innerText=newMembers;
    if(members2===100){
        clearInterval(membersCount);
    }else if(members2>=90 && members2<100){
        members.style.color="red";
    }else if(members2>=50 && members2<90){
        members.style.color="blue";
    }else{
        members.style.color="black";
    }
},50);
// change the satisfied clients section
let satisfiedCount=setInterval(() => {
    satisfied2++;
    let newSatisfied=satisfied2.toString();
    satisfied.innerText=newSatisfied;
    if(satisfied2===2000){
        clearInterval(satisfiedCount);
    }else if(satisfied2>=1500 && satisfied2<2000){
        satisfied.style.color="red";
    }else if(satisfied2 >=900 && satisfied2<1500){
        satisfied.style.color="blue";
    }else{
        satisfied.style.color="black";
    }
},-10);
// change the projects setion
let projectsCount=setInterval(() => {
    projects2++;
    let newProjects=projects2.toString();
    projects.innerText=newProjects;
    if(projects2===1200){
        clearInterval(projectsCount)
    }else if(projects2>=900 && projects2<1200){
        projects.style.color="red";
    }else if(projects2>=500 && projects2<900){
        projects.style.color="blue";
    }else{
        projects2.style.color="black";
    }
},5.6);

}
// the testimonies section
