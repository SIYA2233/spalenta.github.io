const buy = document.querySelector(".buy");
const back = document,querySelector(".back-button");

let t1 = gsap.timeline({pause:true,reversed: true});
let t2 = gsap.timeline({pause:true, reversed:true});

buy.addEventListener("click",(e) => {
    t2.play();

});
back.addEventListener("click",(e)=>{
    t2.reversed();
});

t1,play();

t1.to(".car-1",{
    ease: "elastic.out(1, .8)",
    top: "10%",
    rotate: 0,
    duration: 1.5,

});
t1.to(
    ".menu",
{
    ease: "elastic.out(1.8)",
    left: 30,
    duration: 1.5
},
0.3
);
