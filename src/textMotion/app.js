import { gsap } from "gsap-trial";

const tl = gsap.timeline({
  id: "Timeline",
  repeat: -1,
  repeatDelay: 1.5,
});

const colors = ["#181818", "#5CB8E4", "#F2F2F2"];

function tween(node) {
  let path = node;
  const delay = Math.random() * 1;
  const length = path.getTotalLength();
  colors.forEach((color, index) => {
    if (index !== 0) {
      path = path.cloneNode();
      node.parentNode.appendChild(path);
    }
    path.setAttribute("stroke", color);

    tl.set(
      path,
      {
        strokeDasharray: length + 0.5,
        strokeDashoffset: length + 0.6,
        autoRound: false,
      },
      0
    );

    tl.to(
      path,
      {
        strokeDashoffset: 0,
        autoRound: false,
        duration: 1.2,
        ease: "power3.out",
      },
      index * 0.25 + delay
    );
  });
}

document
  .querySelectorAll(".motion path, .motion line")
  .forEach((p) => tween(p));
