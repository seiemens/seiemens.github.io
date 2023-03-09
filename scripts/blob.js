function track() {
    let tracer = document.getElementById("blob");
    let {clientX, clientY} = window.event;
    
    tracer.animate({
      left: `${clientX}px`,
      top: `${clientY}px`,
    },{duration:2000, fill:"forwards"});
}