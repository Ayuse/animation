import { gsap } from "gsap-trial";
import { TextReveal } from "./textReveal";
import { TextCharsReveal } from "./textCharsReveal";
import { TextLinesReveal } from "./textLinesReveal";
import { ImageHover } from "./imageHover";
const heroText = document.querySelector(".header_text");
const content = document.querySelector(".sub_header");
const image = document.querySelector(".image");

const subText = document.querySelector(".subscribe");
const circle = document.querySelector(".circle");
const subBtn = document.querySelector(".btn");
const stroke = document.querySelector(".stroke_mask");
const emailInput = document.querySelector("#email");
const label = document.querySelector("label");
const arrow = document.querySelector(".arrow");

function initEvents() {
  //   new TextReveal(heroText).in();
  new TextCharsReveal(heroText).in();
  new TextLinesReveal(content).in();
  new ImageHover(image);
  gsap.to(".image_wrapper", {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1,
    ease: "power1.in",
  });

  console.log("object");
}

emailInput.addEventListener("focus", () => {
  gsap.to(stroke, {
    translateX: "0px",
  });
  gsap.to(label, {
    translateY: "80%",
    duration: 0.3,
    ease: "power1.in",
  });
});
emailInput.addEventListener("blur", () => {
  if (emailInput.value === "") {
    gsap.to(stroke, {
      translateX: "-460px",
    });
    gsap.to(label, {
      translateY: "0%",
      duration: 0.3,
      ease: "power1.in",
    });
  }
});

subBtn.addEventListener("mouseenter", () => {
  gsap.to(circle, {
    width: "26px",
    height: "26px",
    backgroundColor: "#1B1B22",
    duration: 0.3,
    ease: "power1.in",
    absolute: true,
  });
  gsap.to(arrow, {
    translateX: "7px",
    translateY: "5px",
    scale: 1,
    opacity: 1,
    duration: 0.3,
    ease: "power1.in",
  });
});

subBtn.addEventListener("mouseleave", () => {
  gsap.to(circle, {
    width: "7px",
    height: "7px",
    backgroundColor: "transparent",
    duration: 0.3,
    ease: "power1.out",
    absolute: true,
  });
  gsap.to(arrow, {
    translateX: "-3px",
    scale: 0,
    opacity: 0,
    duration: 0.3,
    ease: "power1.in",
  });
});

window.onload = () => {
  console.log(document.querySelector("#email").value);
  initEvents();
};
