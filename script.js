 var nav =document.querySelector(".nav")
 var tryy =document.querySelector(".para h1")
gsap.to(nav,{
    y:75,
    duration:.9,
    delay:0.3,
    opacity:1,
    stagger:1,
    

})
gsap.to("nav h3",{
    y:20,
    delay:0.7,
    
    
    
})
gsap.from(".nav h6",{
    y:200,
    delay:1,
  
})


gsap.to(".para #img6",{
    delay:1.2,
    x:1,
    rotate:360,
})