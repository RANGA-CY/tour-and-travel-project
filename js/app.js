// ********** set date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

//*********** nav-toggle***********
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click",() =>{
    links.classList.toggle("show-links")
});
//*********** nav-fixed***********
const navBar = document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
if(window.pageYOffset > 62){
    navBar.classList.add("fixed");
}
else {
    navBar.classList.remove("fixed");
}});
//*********** scroll ***********
const scroll = document.querySelectorAll(".scroll-link");
scroll.forEach((link) => {
  link.addEventListener("click",(e)=>{
      e.preventDefault();
      links.classList.remove("show-links");
      const id = e.target.getAttribute("href").slice(1);
      const element =document.getElementById(id);
      console.log(element.offsetTop);
    //   position
    let position;
    if(navBar.classList.contains("fixed")){
        position = element.offsetTop - 62
    }
    else{
        position = element.offsetTop - 124
    }
    if(window.innerWidth < 992){
        if(navBar.classList.contains("fixed")){
            position = element.offsetTop - 62;
        }
        else{
            position = element.offsetTop - 332 - 62;
        }
    }
// window scroll
window.scrollTo({
 left:0,
 top:element.offsetTop,
behavior:"smooth"
})
  }); 
});