const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", () => {
    // alert("hey");
    // playbtn.style.opacity = 1;
    // playbtn.style.scale = 1;
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videocon.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
      left: dets.x - 80,
      top: dets.y - 80,
    });
  });
}
videoconAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
  gsap.from("#page1 h2", {
    y: 50,
    opacity: 0,
    delay: 3.5,
    duration: 0.8,
    stagger: 0.2,
  });
  gsap.from("#page1 p", {
    y: 50,
    opacity: 0,
    delay: 4,
    duration: 0.8,
    stagger: 0.2,
  });
}
loadingAnimation();
