let mainpage = document.querySelector("#mainpage");
let mainmenu = document.querySelector(".mainmenu");
let mainlink = document.querySelectorAll(".mainlink");
let trip = document.querySelectorAll(".trip");
let navbutton = document.querySelector(".navbutton");
let hamburger = document.querySelectorAll(".hamburger");

// navigation menu changes bacgkroundcolor when scrolled

let sectionOptions = {
    rootMargin: "-90px 0px 0px 0px"
};

let observer = new IntersectionObserver((entries, observer)=> {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
             mainmenu.classList.add("scrolled");
             mainlink.forEach(link => {
                 link.classList.add("scrolled");
             })
        } else {
            mainmenu.classList.remove("scrolled");
            mainlink.forEach(link => {
                link.classList.remove("scrolled")
            })
        }
    });
}, sectionOptions);

observer.observe(mainpage);


// hamburger menu opens/closes and changes color functuonality

navbutton.addEventListener("click", ()=> {
    if(!mainmenu.classList.contains("toggle")) {
        mainmenu.classList.add("toggle");
        hamburger.forEach(ham => ham.style.backgroundColor = "white");
    } else {
        mainmenu.classList.remove("toggle");
        hamburger.forEach(ham => ham.style.backgroundColor = "rgb(84, 190, 190");
}
});


// hamburger menu closes when a link is clicked

mainlink.forEach(onelink => {
    onelink.addEventListener("click", ()=> {
       mainmenu.classList.remove("toggle");
       hamburger.forEach(ham => ham.style.backgroundColor = "rgb(84, 190, 190");
    })
});


// makes images smoothly slide to the screen

let observOptions = {
     threshold: 0.1,
     rootMargin: "0px 0px -150px 0px"
};

let observeSlide = new IntersectionObserver((
    entries,
    observeSlide
)=> {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("slide-in")
      }
    })
}, observOptions);

trip.forEach(oneTrip => {
    observeSlide.observe(oneTrip)
});