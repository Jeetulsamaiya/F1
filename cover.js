var tl = gsap.timeline();

tl.from("#left img", {
  right: "-5040px",
  duration: 2,
  ease: Expo.easeInOut,
})
  .from("#right h4", {
    left: "-50%",
  })

  .from("#nav", {
    opacity: 0,
    width: "50%",
    y: -30,
    duration: 0.5,
    ease: Expo.easeInOut,
  })

  .from("#right img", {
    opacity: 0,
    duration: 0.8,
    ease: Expo.easeInOut,
  })

  .from("#left h1", {
    left: "-40%",
  })
  .from("#q", {
    left: -30,
  })
  .from("#w", {
    left: -30,
  })
  .from("#e", {
    left: -30,
  })
  .from("#point", {
    left: -30,
  })

  .from("#spec1", {
    top: "100%",
    duration: 0.5,
  })

  .from("#spec2", {
    top: "100%",
    duration: 0.5,
  })

  .from("#spec3", {
    top: "100%",
    duration: 0.5,
  });
