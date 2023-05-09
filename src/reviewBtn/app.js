import { gsap } from "gsap-trial";

const button = document.querySelector(".button");
const pen = document.querySelector(".pen");
const box = document.querySelector(".box");

button.addEventListener("mouseenter", () => {
  const tl = gsap.timeline({
    id: "Timeline",
  });
  tl.set(button, {
    "--sda": 145,
    "--sdo": 0,
  });
  tl.to(
    button,
    {
      scale: 1,
    },
    "start"
  );
  tl.to(
    pen,
    {
      "--y": "9px",
      "--x": "9px",
      duration: 0.3,
      ease: "power2.out",
    },
    "start"
  );
  tl.to(
    box,
    {
      "--sda": 162,
      "--sdo": 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "start"
  );
  tl.to(pen, {
    "--y": "20px",
    duration: 0.3,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });
});

button.addEventListener("mouseleave", () => {
  const tl = gsap.timeline({
    id: "Timeline",
    ease: "power2.out",
  });
  gsap.killTweensOf(".pen");

  tl.to(
    pen,
    {
      "--y": "21px",
      "--x": "16px",
      duration: 1,
      ease: "power2.out",
    },
    "end"
  );
  tl.to(
    box,
    {
      "--sda": 145,
      "--sdo": 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "end"
  );
  tl.to(
    button,
    {
      scale: 0.9,
    },
    "end"
  );
});

// const colors = ["#181818", "#5CB8E4", "#F2F2F2"];

// function tween(node) {
//   let path = node;
//   const delay = Math.random() * 1;
//   const length = path.getTotalLength();
//   colors.forEach((color, index) => {
//     if (index !== 0) {
//       path = path.cloneNode();
//       node.parentNode.appendChild(path);
//     }
//     path.setAttribute("stroke", color);

//     tl.set(
//       path,
//       {
//         strokeDasharray: length + 0.5,
//         strokeDashoffset: length + 0.6,
//         autoRound: false,
//       },
//       0
//     );

//     tl.to(
//       path,
//       {
//         strokeDashoffset: 0,
//         autoRound: false,
//         duration: 1.2,
//         ease: "power3.out",
//       },
//       index * 0.25 + delay
//     );
//   });
// }

// document
//   .querySelectorAll(".motion path, .motion line")
//   .forEach((p) => tween(p));
