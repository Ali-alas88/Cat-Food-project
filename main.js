let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu"); // Include the closeMenu variable
let mobileMenu = document.getElementById("mobileMenu");
let html = document.querySelector("html");

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to closeMenu button
  closeMenu.addEventListener("click", () => {
    // mobileMenu.classList.toggle('transition-all');
    mobileMenu.classList.toggle("hidden");
    html.classList.toggle("overflow-x-hidden");
  });

  // Add event listener to openMenu button
  openMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    html.classList.toggle("overflow-x-hidden");
  });
});








// ANIMATIONS FOR SECTIONS

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(
  ".hero-text , .facts1 , .prev-btn , .footer-Logo , .vectory",
  { delay: 500, origin: "left" }
);
ScrollReveal().reveal(" .facts2 , .next-btn , .footer-btn", {
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal("#slider ", { delay: 500, origin: "top" });
ScrollReveal().reveal(".hero-img , .testimonia-text , .text", {
  delay: 500,
  origin: "bottom   ",
});







//                       TESTIMONIALS SLIDER

let nexT = document.getElementById("next-btn");
let preV = document.getElementById("prev-btn");

let testimonials = [
  {
    text: "I've never seen a cat food like this before. The nutritional balance is exceptional, and I've noticed remarkable improvements in the coat and energy levels of the cats I've recommended it to. It's a game-changer in feline nutrition.",
    person: "Ali Alaz",
    position: "CEO of Alrahma",
    image: "/Assets/8BEAC3E6-9D0F-40F6-8FC5-D6A19225B273.jpeg",
  },
  {
    text: "The service provided by this company is outstanding. Their attention to detail and dedication to customer satisfaction are truly commendable. I highly recommend their services to anyone looking for top-notch quality.",
    person: "Emily Smith",
    position: "Marketing Manager",
    image: "/Assets/avatar2.jpg",
  },
  {
    text: "I'm extremely impressed with the professionalism and expertise of the team at this organization. They went above and beyond to meet our requirements and delivered exceptional results. It was a pleasure working with them.",
    person: "John Doe",
    position: "Project Manager",
    image: "/Assets/avatar3.jpg",
  },
];

let currentIndex = 0;

let render = () => {
  let testimonial = testimonials[currentIndex];
  let slider = document.getElementById("slider");
  slider.innerHTML = `
    <div class="testimona mt-8 w-[400px] flex flex-col gap-4 relative shadow-2xl p-8 text-balance">
      <p class="text-wrap">${testimonial.text}</p>
      <img src="/Assets/icons8-quote-left-30.png" alt="" class="w-4 absolute top-2 left-2" />
      <div class="person flex">
        <img src="${testimonial.image}" class="w-10 rounded-full" />
        <div class="ml-2">
          <p>${testimonial.person}</p>
          <small class="text-priColor">${testimonial.position}</small>
        </div>
      </div>
    </div>
  `;
};

let next = () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  render();
};

let prev = () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  render();
};

nexT.addEventListener("click", next);
preV.addEventListener("click", prev);

render();