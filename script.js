function page1Animation() {
    const tl = gsap.timeline();
    tl.from('nav h1, nav h4, nav button', {
        y: -30,
        duration: 0.68,
        delay: 0.6,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.79
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.69
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        x: -100,
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        // delay:-1,
        duration: 0.5
    }, "-=2.5")
    tl.from(".section1Bottom img", {
        opacity: 0,
        y: -30,
        delay: -1,
        duration: 1.5
    })

}
// ! --> call page1Animation() ;


const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        // markers:true,
        start:true,
        start:"top 50%",
        scrub:4,
        // end:"top 10%"
    }
})
tl2.from(".services", {
    opacity: 0,
    x:-200,
    duration: 0.5,
});
tl2.from(".card.line1.left",{
    opacity:0,
    x:-300,
    duration:0.6
},"line1")
tl2.from(".card.line1.right",{
    opacity:0,
    x:300,
    duration:0.6
},"line1")
tl2.from(".card.line2.left",{
    opacity:0,
    x:-300,
    duration:0.6
},"line2")
tl2.from(".card.line2.right",{
    opacity:0,
    x:300,
    duration:0.6
},"line2")