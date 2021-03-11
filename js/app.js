/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// dummy data
const sectionsContent = [{
    section: "Section1",
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    index: 1
  }, {
    section: "Section2",
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor",
    index: 2
  }, {
    section: "Section3",
    description:  
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor",
    index: 3
  }, {
    section: "Section4",
    description:  
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor",
    index: 4
  }
];


//  boolean variable for scrolling
var isScrolling = true;
// top button
const topButton = document.getElementById("topBtn");
//nav bar
let navHeader = document.querySelector('.navbar__menu');
// active section
let active = "";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// create main sections
function createSection(sectionItem){
    // create section
    var section = document.createElement('section');
    section.setAttribute("id", sectionItem.section);
    section.setAttribute("data-nav" , sectionItem.section);
    // create section content
    var div = document.createElement('div');
    div.className = "landing__container";
    var h2 = document.createElement('h2');
    h2.textContent = sectionItem.section;
    var p = document.createElement('p');
    p.textContent = sectionItem.description;
    div.appendChild(h2)
    div.appendChild(p)
    // add the content to section tag
    section.appendChild(div)
    let mainBody = document.getElementById('main-body')
    // add section in main 
    mainBody.appendChild(section)
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav items
function addListItem() {
    let navBar = document.getElementById('navbar__list');
    //looping over the array to show nav items
    sectionsContent.forEach((sectionItem)=>{
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = sectionItem.section;
        a.className = sectionItem.section;
        li.appendChild(a);
        navBar.appendChild(li);
        createSection(sectionItem);
    });
    navBar.addEventListener('click', clickEventListner);
}

// listener on click nav item
function clickEventListner(event){
     // Scroll to the element with smooth scroll behavior
     const sect = document.getElementById(event.target.textContent);
     // check sect has value and not null
     if(!!sect){
        sect.scrollIntoView(true,{ behavior: 'smooth', block: "start" });
     }
}


// check if the element is in viewport and highlighted it
isElementInViewport =(element)=>{
  const elementHeight = element.clientHeight;
  const elementTop = element.offsetTop;
  if (pageYOffset >= elementTop - elementHeight / 3) {
    active = element.getAttribute("id");
    element.classList.add('active-class')
  }else{
    element.classList.remove('active-class');
  }
}


// to check the dom is ready
document.addEventListener('DOMContentLoaded', function () {
    addListItem();
    // Listen for scroll events
    window.addEventListener('scroll', ()=> {
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll(".navbar__menu li a");
        // on scroll fetch sections and check which is in viewport
        sections.forEach((section) => {
          section.classList.remove("active-class");
          isElementInViewport(section)
        });

        // highlight nav item which correponds to the active section
        navLi.forEach((a) => {
            a.classList.remove("active-link");
            if (a.classList.contains(active)) {
              a.classList.add("active-link");
            }
        });

        displayTopBtn();

        // hide nav bar if scrolling stops
        if(document.documentElement.scrollTop != 0){
            // Clear our timeout during scrolling
            window.clearTimeout( isScrolling );
            // Set a timeout to run after scrolling stops
            isScrolling = setTimeout(function() {
                // hide the nav bar
                //navHeader.setAttribute("style", "display:none")
            }, 1500);
        }
    },false);
});


// change top btn displaying while scrolling
displayTopBtn =()=>{
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTop =()=> {
  document.documentElement.scrollTop = 0;
}
