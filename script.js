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
//  testimonies section
let testimoner=document.querySelector("#testimonial h4");
let testimonerTitle=document.querySelector("#testimonial span");
let testimony=document.querySelector("#testimonial p")
let forwardBtn=document.querySelector("#forwardBtn");
let backBtn=document.querySelector("#backBtn");
let Image=document.querySelector("#testimonial img");
let Tnames=["@Joshua Mwendwa","@Wilfred Mutwiri","@Ruth Anyango","@Michael Kinyua","@Princess Favour"];
let Ttitles=["Customer","Customer","Team Member","Customer","Team Member"];
let testimonies=["Golden Networks ave been the best internet service providers for my organisation for a decade now! I recommend them to everyone out there.","When it comes to electrical installation and computer repair, I will definetely choose the Golden Networks","Maybe their name depics their nature because their services are just golden special. Thank you Golden Networks","Golden networks are understanding and customer friendly. I appreciate what they are doing out here!","Golden networks is the real deal when it comes to internet provision"];
let Counter=0;
forwardBtn.addEventListener("click",forwardClick);
backBtn.addEventListener("click",backClick);
function forwardClick(){
    testimoner.innerHTML=Tnames[Counter];
    testimonerTitle.innerHTML=Ttitles[Counter];
    testimony.innerHTML=testimonies[Counter];
    Counter++;
    if(Counter>=Tnames.length){
    Counter=0;
    }
}
function backClick(){
    testimoner.innerHTML=Tnames[Counter];
    testimonerTitle.innerHTML=Ttitles[Counter];
    testimony.innerHTML=testimonies[Counter];
    Counter--;
    if(Counter<=Tnames.length){
        Counter=1;
        }
}
// form section
let formBtn=document.querySelector("#contanctForm button");
let nameInput=document.querySelector("#name");
let emailInput=document.querySelector("#email")
let phoneInput=document.querySelector("#phone")
let msgInput=document.querySelector("#text");
formBtn.addEventListener("click",formBtnClick);
function formBtnClick(){
    if(nameInput.value===""){
        alert("Kindly Enter your name to proceed");
    }else if(emailInput.value===""){
        alert("Kindly Enter your email address to proceed");
    }else if(phoneInput.value===""){
        alert("Kindly Enter your phone number to proceed");
    }else if(msgInput.value===""){
        alert("Kindly Enter leave us a message to proceed");
    }else{
        alert(`Thank you for your Interest in the Golden Networks Services. An email has been sent to ${emailInput.value}`)
    }
// clear input values
    nameInput.value="";
    emailInput.value="";
    phoneInput.value="";
    msgInput.value="";
}
// footer section...subscription
subscribeBtn=document.querySelector("#subscribe button");
subscribeInput=document.querySelector(".subscribeInput input");
subscribeBtn.addEventListener("click",subscribeClick);
function subscribeClick(){
    if(subscribeInput.value==""){
        alert("Enter email address to subscribe!")
    }else{
        alert(`Subscription Successfull!. An email has been sent to ${subscribeInput.value}`);
    }
    subscribeInput.value="";
}
// reveal the nav bar
let navIcon=document.querySelector("#navIcon");
let navBar=document.querySelector(".navBar");
let navContainer=document.querySelector(".navContainer");
navIcon.addEventListener("mouseover",navIconOver);
function navIconOver(){
navBar.style.height="260px";
navContainer.style.opacity="1";
}
navBar.addEventListener("mouseleave",navLeave);
function navLeave(){
navBar.style.height="";
navContainer.style.opacity="";
}