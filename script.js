// document.addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
const navItems = document.querySelectorAll(".navmenu a");

function changeColor(index) {
  navItems.forEach((item) => {
    item.classList.remove("active");
  });
  navItems[index].classList.add("active");
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two span
    let parent = document.createElement("span");
    let child = document.createElement("span");

    //parent and child both set their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent get child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replace their value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}
revealToSpan();

document.querySelector("body").addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

// document.querySelector('#home2').addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//       backgroundColor:'blue',
//       height:300,
//       width:300
//     })
// })

// document.querySelector('#home2').addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//       backgroundColor:'gray',
//       height:150,
//       width:150

//     })
// })

var home3 = document.querySelector("#overlayhome3");
var home3cursor = document.querySelector("#cursorImage");

home3.addEventListener("mousemove", function (dets) {
  gsap.to(home3cursor, {
    left: dets.x - 30 + "px",
    top: dets.y - 32 + "px",
    scale: 1,
    opacity: 1,
  });
});

home3.addEventListener("mouseleave", function (dets) {
  gsap.to(home3cursor, {
    opacity: 0,
    scale: 0,
  });
});

home3.addEventListener("mousemove", function () {
  gsap.to(home3cursor, {
    opacity: 1,
    scale: 1,
  });
});

const locomotive = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
locomotive();

const loaderAnimation = () => {
  let tl2 = gsap.timeline();

  tl2.from(".child span", {
    x: "100",
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  });

  tl2.to(".parent .child", {
    y: "-100%",
    delay: 1,
    ease: Circ.easeInOut,
  });

  tl2.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  });
};

loaderAnimation();

gsap.from("#nav .navmenu", {
  stagger: 0.2,
  duration: 0.5,
  delay: 1,
  y: -100,
  opacity: 0,
});

const landingPage = () => {
  var tl = gsap.timeline();

  tl.from("#homeLeft #Hi", {
    opacity: 0,
    x: -150,
    duration: 0.2,
    delay: 1,
  });
  gsap.to(" #name span", {
    opacity: 1,
    x: 0, // Moves to original position
    stagger: 0.2, // Delays each letter
    duration: 1,
    ease: "power3.out",
  });
  tl.from("#homeLeft h1", {
    opacity: 0,
    x: -150,
    stagger: 2,
    duration: 0.2,
  });
  tl.from("#homeLeft #sara", {
    opacity: 0,
    x: -150,
    duration: 0.2,
  });

  tl.from("#homeLeft h3", {
    opacity: 0,
    x: -150,
    duration: 0.2,
  });
  tl.from("#homeLeft h4", {
    opacity: 0,
    x: -150,
    duration: 1,
  });
  gsap.from("#homeRight", {
    x: "10%",
    // scale:10,
    opacity: 0,
    duration: 0.6,
    delay: 2.4,
  });
};

landingPage();

gsap.from("#eduImageContainer .eduImage .eduoverlay", {
  y: 200,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#home2",
    scroller: "#main",
    scrub: 2,
    markers: false,
    start: "top 65%",
    end: "top 60%",
  },
});

gsap.from("#home2 h1", {
  y: 150,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#home2",
    scroller: "#main",
    scrub: 1,
    // markers:true,
    start: "top 70%",
    end: "top 70%",
  },
});

gsap.from("#aboutMe h2", {
  y: 150,
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#aboutMe",
    scroller: "#main",
    scrub: 1,
    start: "top 75%",
    end: "top -75%",
    markers: false,
  },
});

gsap.from("#moreaboutme", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#moreaboutme",
    scroller: "#main",
    scrub: 1,
    markers: false,
    start: "top 10%",
    end: "top 2%",
  },
});

// @media (max-width:1080){
//   gsap.from("#moreaboutme", {
//     opacity: 0,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: "#moreaboutme",
//       scroller: "#main",
//       scrub: 1,
//       markers: false,
//       start: "top 10%",
//       end: "top 10%",
//     },
//   });
// }

// home3 animation
gsap.from("#home3 h1", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#home3",
    scroller: "#main",
    scrub: 2,
    markers: false,
    start: "top 50%",
    end: "top 90%",
  },
});

gsap.from("#home3 #frontend h3", {
  // x:-400,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#home3",
    scroller: "#main",
    // markers:true,
    scrub: 2,
    start: "top 40%",
    end: "top 30%",
  },
});

gsap.from("#home3 #frontend .icons1", {
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: "#home3",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 30%",
    end: "top 0%",
  },
});

gsap.from("#home3 #Testing .icons2", {
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: "#home3",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 30%",
    end: "top 0%",
  },
});

gsap.from("#home3 #backend h3", {
  // x:400,
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: "#backend",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 80%",
    end: "top 60%",
  },
});
gsap.from("#home3 #backend .icons2", {
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: "#backend",
    scroller: "#main",
    scrub: 3,
    // markers:true,
    start: "top 70%",
    end: "top 40%",
  },
});

//home4 animation
gsap.from(" #home4 #Projectsdetails h1", {
  y: 250,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#home4",
    scroller: "#main",
    scrub: 1,
    markers: false,
    start: "top 70%",
    end: "top 70%",
  },
});

gsap.from("#projects .projectImage", {
  y: 200,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#Projectsdetails h1",
    scroller: "#main",
    scrub: 1,
    markers: false,
    start: "top 95%",
    end: "top 65%",
  },
});

//home5 animation
gsap.from("#home5 ", {
  // opacity:0,
  duration: 0.5,
  backgroundColor: "#0000",
  scrollTrigger: {
    trigger: "#Experiance",
    scroller: "#main",
    scrub: 3,
    // markers:true,
    start: "top 70%",
    end: "top 10%",
  },
});

gsap.from("li", {
  x: "-100%",
  opacity: 0,
  duration: 5,
  stagger: 2,
  scrollTrigger: {
    trigger: "#exp_Detail",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 70%",
    end: "top 40%",
  },
});
gsap.from("#expImage", {
  x: "100%",
  opacity: 0,
  duration: 5,
  scrollTrigger: {
    trigger: "#exp_Detail",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 70%",
    end: "top 40%",
  },
});

gsap.from("#exp h2", {
  opacity: 0,
  x: 1000,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: "#exp",
    scroller: "#main",
    scrub: 4,
    // markers:true,
    start: "top 60%",
    end: "top 40%",
  },
});
gsap.from(" #home5 #Experiance h1", {
  y: 200,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#home5",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 70%",
    end: "top 50%",
  },
});

gsap.from("#contact h2", {
  opacity: 0,
  y: 100,
  duration: 0.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#contact",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 30%",
    end: "top 25%",
  },
});

gsap.from("#contact h3", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#contact",
    scroller: "#main",
    scrub: 2,
    // markers:true,
    start: "top 30%",
    end: "top 20%",
  },
});
