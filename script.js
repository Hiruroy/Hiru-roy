// // =======smooth scroll========
gsap.config({ trialWarn: false });
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
// ===============drawing============

// ==========toggle_menu============

var toggle_menu = document.querySelector(".toggle_menu");
var tog = document.querySelector(".tog");
var sidebar = document.querySelector(".sidebar");

// ====================

toggle_menu.addEventListener("click", () => {
  $(document).click((e) => {
    if (!$(e.target).is($(tog))) {
      sidebar.style.right = "-110%";
    } else {
      sidebar.style.right = "0%";
    }
  });
});

// =========nav manu=========
var poss = document.documentElement;
poss.addEventListener("mousemove", (e) => {
  poss.style.setProperty("--x", e.clientX + "px");
  poss.style.setProperty("--y", e.clientY + "px");
});

// =========scrolltop========

// ===============

gsap.to(".innerabout,.outerabout", {
  duration: 3,
  left: "50%",
  ease: "linear",
  scrollTrigger: {
    trigger: ".innerabout,.outerabout",
    start: "center 100%",
    end: "center 30%",
    // markers: true,
    scrub: 2,
  },
});
// ========about won img===========
gsap.from(".white_about img", {
  duration: 0.2,
  scale: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".white_about img",
    start: "center 110%",
    end: "center 50%",
    // markers: true,
    scrub: 3,
  },
});

// =====featured_h heading===========

// ========horizontal img slide=========

// ==================
let mmm = gsap.matchMedia();

mmm.add("(min-width:1000px)", () => {
  gsap.to(".ecomb,.ecoms", {
    duration: 1,
    x: -200,
    // opacity: 0,
    // horizontal: true,
    stagger: {
      each: 0.4,
    },
    scrollTrigger: {
      trigger: ".ecomb",
      start: "440% center",
      end: "440% -100%",
      // markers: true,
      scrub: 2,
      // pin: "#featured",
    },
  });

  gsap.to(".trab,.tras", {
    duration: 1,
    x: -200,
    // opacity: 0,
    // horizontal: true,
    stagger: {
      each: 0.4,
    },
    scrollTrigger: {
      trigger: ".trab",
      start: "640% center",
      end: "640% -100%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.to(".delb,.dels", {
    duration: 1,
    x: -100,

    stagger: {
      each: 0.4,
    },
    scrollTrigger: {
      trigger: ".delb",
      start: "1000% center",
      end: "1000% -100%",
      // markers: true,
      scrub: 2,
    },
  });
});
// ===============

// ==========featured=svg draw===========

// ======journey_content==========
gsap.to(".journey_content_item", {
  duration: 1,
  ease: "power1.inOut",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  scrollTrigger: {
    trigger: ".journey_content",
    start: "center center",
    end: "center -310%",
    // markers: true,
    scrub: 1,
    pin: true,
  },
  stagger: {
    each: 1,
    //  from: "random",
  },
});

// =====================
// =====================
// =====================
// =====================
// =====================
// =====================
// =====================
// =====================
// =====================
// =====================
// =====================
let jureny_head = gsap.matchMedia();
jureny_head.add("(min-width:700px)", () => {
  // ==========be=============
  // =========skill head===========
  // =========skill head===========

  // =======project==========

  //=============================

  // =======project_1=========
  gsap.fromTo(
    "#one",
    {
      duration: 5,

      ease: "power3.out",
    },
    {
      duration: 5,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ".pone",
        start: "top 30%",
        end: "top -130%",
        // markers: true,
        scrub: 3,
        pin: ".project_content",
      },
    }
  );

  // ================
  gsap.to("#one", {
    duration: 5,
    drawSVG: "0% 100%",

    ease: "power3.out",

    stroke: "#a229ff",
    fill: "black",

    scrollTrigger: {
      trigger: ".pone",
      start: "top -130%",
      end: "top -230%",
      // markers: true,
      scrub: 3,
      pin: ".project_content",
    },
  });
  // =============

  gsap.to(".right1 .filter", {
    duration: 2,
    width: "0%",

    scrollTrigger: {
      trigger: ".pone",
      start: "top 30%",
      end: "top -130%",
      // markers: true,
      scrub: 3,
    },
  });
  // ===============
  gsap.from(".pone", {
    duration: 2,

    scale: 0.4,

    scrollTrigger: {
      trigger: ".pone",
      start: "top 100%",
      end: "top 40%",
      // markers: true,
      scrub: 2,
    },
  });
  // ===============

  // =======project_2=========
  gsap.fromTo(
    "#two",
    {
      duration: 5,

      ease: "power3.out",
    },
    {
      duration: 5,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ".ptwo",
        start: "top -230%",
        end: "top -330%",
        // markers: true,
        scrub: 3,
        pin: ".project_content",
      },
    }
  );
  gsap.to("#two", {
    duration: 5,
    drawSVG: "0% 100%",

    ease: "power3.out",

    stroke: "#ffd166",
    fill: "black",

    scrollTrigger: {
      trigger: ".ptwo",
      start: "top -330%",
      end: "top -430%",
      // markers: true,
      scrub: 3,
      pin: ".project_content",
    },
  });

  // =================

  gsap.to(".right2 .filter", {
    duration: 2,
    width: "0%",

    scrollTrigger: {
      trigger: ".ptwo",
      start: "top -230%",
      end: "top -330%",
      // markers: true,
      scrub: 3,
    },
  });
  // =================
  gsap.from(".ptwo", {
    duration: 2,

    scale: 0.4,

    scrollTrigger: {
      trigger: ".ptwo",
      start: "700% center",
      end: "700% top",
      // markers: true,
      scrub: 2,
    },
  });

  // =======project_3=========

  gsap.fromTo(
    "#three",
    {
      duration: 5,

      ease: "power3.out",
    },
    {
      duration: 5,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ".pthree",
        start: "top -430%",
        end: "top -530%",
        // markers: true,
        scrub: 3,
        pin: ".project_content",
      },
    }
  );
  gsap.to("#three", {
    duration: 5,
    drawSVG: "0% 100%",

    ease: "power3.out",

    stroke: "#00a8e8",
    fill: "black",

    scrollTrigger: {
      trigger: ".pthree",
      start: "top -530%",
      end: "top -630%",
      // markers: true,
      scrub: 3,
      pin: ".project_content",
    },
  });
  // =============
  gsap.from(".pthree", {
    duration: 2,
    // y:300,
    scale: 0.4,

    scrollTrigger: {
      trigger: ".pthree",
      start: "1300% center",
      end: "1300% top",
      // markers: true,
      scrub: 2,
    },
  });
  // ============
  gsap.to(".right3 .filter", {
    duration: 2,
    width: "0%",

    scrollTrigger: {
      trigger: ".pthree",
      start: "top -430%",
      end: "top -530%",
      // markers: true,
      scrub: 3,
    },
  });

  // =======project_4=========
  gsap.fromTo(
    "#four",
    {
      duration: 5,

      ease: "power3.out",
    },
    {
      duration: 5,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ".pfour",
        start: "top -630%",
        end: "top -730%",
        // markers: true,
        scrub: 3,
        pin: ".project_content",
      },
    }
  );
  gsap.to("#four", {
    duration: 5,

    ease: "power3.out",

    stroke: "#52b788",
    fill: "black",

    scrollTrigger: {
      trigger: ".pfour",
      start: "top -730%",
      end: "top -830%",
      // markers: true,
      scrub: 3,
      pin: ".project_content",
    },
  });
  // ============
  gsap.from(".pfour", {
    duration: 2,

    scale: 0.4,

    scrollTrigger: {
      trigger: ".pfour",
      start: "1800% center",
      end: "1800% top",
      // markers: true,
      scrub: 2,
    },
  });
  // ==============
  gsap.to(".right4 .filter", {
    duration: 2,
    width: "0%",

    scrollTrigger: {
      trigger: ".pfour",
      start: "top -630%",
      end: "top -730%",
      // markers: true,
      scrub: 3,
    },
  });

  const project_h = new SplitType(".project_h", { types: " chars" });

  // =======project_h=========

  gsap.to(project_h.chars, {
    duration: 2,
    y: -30,
    opacity: 1,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      // from: "random",
    },
    scrollTrigger: {
      trigger: ".project_h",
      start: "center 90%",
      end: "center 85%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.to(".projectsvg", {
    visibility: "visible",

    onStart: function projectsvg() {
      var $projectsvg = $(".projectsvg").drawsvg({
        duration: 5000,
      });

      $projectsvg.drawsvg("animate");
    },
    scrollTrigger: {
      trigger: ".projectsvg",
      start: "center bottom",
      end: "center bottom",
      // markers: true,

      scrub: 0.1,
    },
  });

  gsap.to(".ship", {
    visibility: "visible",

    onStart: function ship() {
      var $ship = $(".ship").drawsvg({
        duration: 1000,
        stagger: 10,
      });

      $ship.drawsvg("animate");
    },
    scrollTrigger: {
      trigger: ".ship",
      start: "center 100%",
      end: "center 100%",
      // markers: true,

      scrub: 0.01,
    },
  });

  // ===============

  const journey_h = new SplitType(".journey_h", { types: " chars" });

  gsap.to(journey_h.chars, {
    duration: 2,
    y: -30,
    opacity: 1,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      // from: "random",
    },
    scrollTrigger: {
      trigger: ".journey_h",
      start: "center 95%",
      end: "center 80%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.to(".butterfly", {
    visibility: "visible",

    onStart: function butterfly() {
      var $butterfly = $(".butterfly").drawsvg({
        duration: 1000,
      });

      $butterfly.drawsvg("animate");
    },
    scrollTrigger: {
      trigger: ".butterfly",
      start: "center bottom",
      end: "center bottom",
      // markers: true,

      scrub: 0.1,
    },
  });

  // =================

  const featured_h = new SplitType(".featured_h", { types: " chars" });

  gsap.to(featured_h.chars, {
    duration: 2,
    y: -30,
    opacity: 1,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      // from: "random",
    },
    scrollTrigger: {
      trigger: ".featured_h",
      start: "center 95%",
      end: "center 80%",
      // markers: true,
      scrub: 2,
    },
  });
  // ========clip_path=============
  var clip = gsap.timeline({
    pin: "#featured",
  });

  clip.to(".clip_path", {
    duration: 5,
    clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
    scrollTrigger: {
      trigger: ".clip_path",
      start: "center center",
      end: "200% center",
      // markers: true,
      scrub: 2,
      pin: "#featured",
    },
  });

  gsap.to(
    ".scroll_content",
    {
      duration: 2,
      left: "-300%",
      scrollTrigger: {
        trigger: ".scroll_content",
        start: "200% center",
        end: "200% -500%",
        // markers: true,
        scrub: 2,
        pin: "#featured",
      },
    },
    "+=50"
  );

  gsap.to(".bransvg", {
    visibility: "visible",

    onStart: function brann() {
      var $bransvg = $(".bransvg").drawsvg({
        duration: 1000,
      });

      $bransvg.drawsvg("animate");
    },
    scrollTrigger: {
      trigger: ".bransvg",
      start: "center bottom",
      end: "center bottom",
      // markers: true,

      scrub: 0.1,
      // pin: true,
    },
  });
  // =========skill heading===========

  const skills_h = new SplitType(".skills_h", { types: " chars" });

  gsap.to(skills_h.chars, {
    duration: 2,
    y: -30,
    opacity: 1,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      // from: "random",
    },
    scrollTrigger: {
      trigger: ".skills_h",
      start: "center 90%",
      end: "center 85%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from(".container_right_item", {
    duration: 2,
    y: 50,
    opacity: 0,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      from: "random",
    },
    scrollTrigger: {
      trigger: ".container_right",
      start: "top 70%",
      end: "top 20%",
      // markers: true,
      scrub: 2,
    },
  });

  const Shaping = new SplitType(".Shaping", { types: " chars" });

  gsap.to(Shaping.chars, {
    duration: 0.1,
    color: "white",
    // ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      from: "random",
    },
    scrollTrigger: {
      trigger: ".Shaping",
      start: "center center",
      end: "center -100%",
      // markers: true,
      scrub: 0.1,
      pin: ".Shaping",
    },
  });
  // =========setting heading===========

  gsap.to(".setting", {
    duration: 10,
    rotate: 360,
    // yoyo: true,
    transformOrigin: "center",
    ease: "linear",
    repeat: -1,
  });

  var hir = $(".hirrr").drawsvg({
    duration: 3000,
  });
  hir.drawsvg("animate");
  // =======nam=end=========

  const fonttt = new SplitType(".font_dev", { types: " chars" });
  gsap.from(fonttt.chars, {
    delay: 1,
    display: "none",

    duration: 0.1,
    scale: 4,
    opacity: 0,
    markers: true,
    x: 200,
    // rotate: 360,
    ease: "linear",
    stagger: {
      each: 0.1,
      from: "random",
    },
  });

  // =======dev=end=========

  // =======about=start=========

  var hell = gsap.timeline();

  const text = new SplitType(".hello_h", { types: " chars" });

  hell.from(text.chars, {
    scale: 4,
    opacity: 0,
    stagger: {
      each: 0.09,
      from: "random",
    },
    scrollTrigger: {
      trigger: ".hello_h",
      start: "center 80%",
      end: "center 50%",
      // markers: true,
      scrub: 1,
    },
  });

  // =========engaging===========
  var eng = gsap.timeline();

  const engaging = new SplitType(".engaging", { types: " chars" });

  eng.from(engaging.chars, {
    opacity: 0.3,
    duration: 2,
    stagger: {
      each: 1,
      // from: "random",
    },
    scrollTrigger: {
      trigger: ".hello_h",
      start: "center 50%",
      end: "center -50%",
      // markers: true,
      scrub: 1,
    },
  });
  // =========four_year===========

  const four_year = new SplitType(".four_year", { types: " lines" });

  gsap.from(four_year.lines, {
    duration: 1,
    y: 40,
    rotate: 40,
    scale: 29,
    transformOrigin: "center",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".four_year",
      start: "top 110%",
      end: "bottom 110%",
      // markers: true,
      scrub: 1,
    },
  });

  const be = new SplitType(".be", { type: "chars" });
  gsap.from(be.chars, {
    duration: 2,
    y: -500,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".be",
      start: "110% center",
      end: "110% top",
      // markers: true,
      scrub: 1,
    },
    stagger: {
      each: 0.1,
    },
  });
  // ===be2=====
  const be2 = new SplitType(".be2", { type: "chars" });
  gsap.from(be2.chars, {
    duration: 2,
    y: -500,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".be2",
      start: "120% top",
      end: "120% -50%",
      // markers: true,
      scrub: 1,
      // pin: true,
    },
    stagger: {
      each: 0.1,
      //  from: "random",
    },
  });

  // =====be3=======
  const be3 = new SplitType(".be3", { type: "chars" });
  gsap.from(be3.chars, {
    duration: 2,
    y: -500,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".be3",
      start: "120% -50%",
      end: "120% -130%",
      // markers: true,
      scrub: 1,
      // pin: true,
    },
    stagger: {
      each: 0.1,
      //  from: "random",
    },
  });
  // ======be4===========
  const be4 = new SplitType(".be4", { type: "chars" });
  gsap.from(be4.chars, {
    duration: 2,
    y: -500,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".be4",
      start: "120% -130%",
      end: "120% -200%",
      // markers: true,
      scrub: 1,
      // pin: true,
    },
    stagger: {
      each: 0.1,
      //  from: "random",
    },
  });
  // =====be5========
  const be5 = new SplitType(".be5", { type: "chars" });
  gsap.from(be5.chars, {
    duration: 2,
    y: -500,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".be5",
      start: "120% -200%",
      end: "120% -280%",
      // markers: true,
      scrub: 1,
      // pin: true,
    },
    stagger: {
      each: 0.1,
      //  from: "random",
    },
  });
  // =====be6=========
  const be6 = new SplitType(".be6", { type: "chars" });
  gsap.from(be6.chars, {
    duration: 2,
    y: -500,
    delay: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".be6",
      start: "120% -280%",
      end: "120% -300%",
      // markers: true,
      scrub: 1,
      // pin: ".main",
    },
    stagger: {
      each: 0.1,
      //  from: "random",
    },
  });
});

// =======slide_text==========

gsap.to(".play,.hope", {
  duration: 1,

  x: "-70%",
  scrollTrigger: {
    trigger: ".slide_text",
    start: "top bottom",
    end: "top -200%",
    // markers: true,
    scrub: 1,
  },
});

gsap.to(".grow", {
  duration: 1,

  x: "-10%",

  scrollTrigger: {
    trigger: ".slide_text",
    start: "top bottom",
    end: "top -100%",
    // markers: true,
    scrub: 1,
  },
});

// ==========frequently============

let mm = gsap.matchMedia();

mm.add("(min-width:700px)", () => {



  gsap.to(".frequently_content .right", {
    duration: 1,
    y: "-78%",

    scrollTrigger: {
      trigger: ".frequently_content .right",
      start: "top top",
      end: "top -600%",
      // markers: true,
      scrub: 1,
      pin: "#frequently",
    },
  });
  // ========name=========
  gsap.to(".hirr", {
    y: 100,
    // opacity: 0,
    fill: "white",
    scrollTrigger: {
      trigger: ".hirr",
      start: "center 40%",
      end: "center top",
      // markers: true,
      scrub: 1,
    },
  });
  // ========scrolltop=========
  gsap.from("#stop", {
    duration: 1,
    ease: "linear",
    drawSVG: "0",
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      scrub: 1,
    },
  });
  // ===scrrol top=====
  gsap.from(".scrolltop", {
    duration: 1,
    ease: "linear",
    opacity: 0,
    scrollTrigger: {
      trigger: ".scrolltop",
      start: "top center",
      end: "top center",
      // markers: true,
      scrub: 1,
    },
  });
  // ======rotate=======
  gsap.from(".rotate", {
    duration: 1,
    ease: "linear",
    rotate: 2000,
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      scrub: 3,
    },
  });
  // =============

  gsap.to(".font_dev", {
    // duration: 0.1,
    color: "white",
    y: 200,
    opacity: 0,
    ease: "linear",
    stagger: {
      each: 0.1,
      from: "random",
    },
    scrollTrigger: {
      trigger: ".font_dev",
      start: "center 80%",
      end: "0% 50%",
      // markers: true,
      scrub: 1,
    },
  });
  // ====anime=======

  var onchange = gsap.timeline({
    scrollTrigger: {
      trigger: ".frequently_content .right",
      start: "top top",
      end: "top -500%",
      // markers: true,
      scrub: 2,
    },
  });

  onchange
    .to("#q1", {
      stroke: "yellow",
    })
    .to("#q1", {
      stroke: "yellowgreen",
    })
    .to("#q1", {
      stroke: "lightgreen",
    });

  var onchange2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".frequently_content .right",
      start: "top top",
      end: "top -500%",
      // markers: true,
      scrub: 2,
    },
  });

  onchange2

    .to("#q2", {
      stroke: "yellow",
    })
    .to("#q2", {
      stroke: "yellowgreen",
    })
    .to("#q2", {
      stroke: "lightgreen",
    });

  // ====anime==ens=====
});

//========== footer============

gsap.to(".tvv", {
  visibility: "visible",

  onStart: function tvv() {
    var $tvv = $(".tvv").drawsvg({
      duration: 3000,
    });

    $tvv.drawsvg("animate");
  },
  scrollTrigger: {
    trigger: ".tvv",
    start: "center 100%",
    end: "center 100%",
    // markers: true,

    scrub: 0.1,
  },
});

// ===========

gsap.to(".namesig", {
  visibility: "visible",

  onStart: function namesig() {
    var $namesig = $(".namesig").drawsvg({
      duration: 2000,
    });

    $namesig.drawsvg("animate");
  },
  scrollTrigger: {
    trigger: ".namesig",
    start: "center 100%",
    end: "center 100%",
    // markers: true,

    scrub: 0.1,
  },
});

// ================
const cursor1 = document.createElement("div");
const cursor2 = document.createElement("div");
const cursor3 = document.createElement("div");
cursor1.classList.add("cursor1");
document.body.appendChild(cursor1);
cursor2.classList.add("cursor2");
document.body.appendChild(cursor2);
cursor3.classList.add("cursor3");
document.body.appendChild(cursor3);

document.addEventListener("mousemove", (e) => {
  cursor1.style.left = e.clientX + "px";
  cursor1.style.top = e.clientY + "px";

  cursor2.style.left = e.clientX - 10 + "px";
  cursor2.style.top = e.clientY - 10 + "px";
  cursor3.style.left = e.clientX - 25 + "px";
  cursor3.style.top = e.clientY - 25 + "px";
});
