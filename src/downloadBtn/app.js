import gsap from "gsap-trial";
import MorphSVGPlugin from "gsap-trial/MorphSVGPlugin";
import GSDevTools from "gsap-trial/GSDevTools";
gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll(".button").forEach((element) => {
  let arrow = element.querySelector(".arrow"),
    line = element.querySelector(".line"),
    linePath = element.querySelector(".line path"),
    check = element.querySelector(".check");

  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (!element.classList.contains("active")) {
      element.classList.add("active");
      gsap.to(arrow, {
        keyframes: [
          {
            "--r": "30deg",
            "--y": "-8px",
            duration: 0.4,
            ease: "power2.out",
          },
          {
            "--r": "0deg",
            "--y": "6px",
            duration: 0.2,
            ease: "power2.out",
            onStart() {
              gsap.to(linePath, {
                keyframes: [
                  {
                    morphSVG: "M1 3s4.415 2.5 8 2.5S17 3 17 3",
                    duration: 0.2,
                  },
                  {
                    morphSVG: "M1 3h16",
                    duration: 0.5,
                    ease: "elastic.out(1, .5)",
                  },
                ],
              });
            },
          },
          {
            "--r": "0deg",
            "--y": "0px",
            duration: 0.7,
            ease: "elastic.out(1, .5)",
            onComplete() {
              gsap.to(arrow, {
                scale: 0,
                y: 5,
                "--transOrigin": "bottom center",
                duration: 0.2,
                ease: "power2.in",
              });
              gsap.to(line, {
                "--sd": 15.9,
                "--y": "1px",
                "--x": "-3px",
                "--r": "45deg",
                "--text": "var(--check)",
                duration: 0.5,
                ease: "power3.out",
                onComplete() {
                  gsap.to(check, {
                    keyframes: [
                      {
                        "--sd": 54,
                        duration: 0.25,
                        onStart() {
                          gsap.to(line, {
                            opacity: 0,
                            duration: 0.1,
                          });
                        },
                      },
                      {
                        "--sd": 51,
                        duration: 1,
                        ease: "elastic.out(1, .5)",
                      },
                    ],
                    onComplete: allDone,
                  });
                },
              });
            },
          },
        ],
      });
      function allDone() {
        setTimeout(() => {
          gsap.to(check, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            ease: "power2.out",
            clearProps: true,
          });
          gsap.to(arrow, {
            delay: 0.2,
            opacity: 1,
            scale: 1,
            "--transOrigin": "center",
            duration: 0.3,
            y: 0,
            clearProps: true,
          });
          gsap.to(line, {
            keyframes: [
              {
                delay: 0.2,
                "--y": "0px",
                "--x": "0px",
                "--r": "0deg",
                "--text": "#fff",
                duration: 0,
                opacity: 1,
              },
              {
                "--sd": 0,
                duration: 0.3,
                ease: "power2.out",
                clearProps: true,
              },
            ],
          });
          element.classList.remove("active");
        }, 2000);
      }
    }
  });
});
