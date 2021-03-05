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

const sectionsContent = [{
    title: "title1",
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    index: 1
  }, {
    title: "title2",
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor",
    index: 2
  }, {
    title: "title3",
    description:  
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor",
    index: 3
  }];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav items
function addListItem() {

    //looping over the array to show nav items
    sectionsContent.forEach((sectionItem)=>{

        let li = document.createElement('li');
        let navBar = document.getElementById('navbar__list');
        li.setAttribute("id", sectionItem.title);
        li.appendChild(document.createElement('a'))
        li.appendChild(document.createTextNode(sectionItem.title))
        navBar.appendChild(li);
        createSection(sectionItem);
    })
}


function createSection(sectionItem){
 
      // create section
      var section = document.createElement('section');
      section.setAttribute("id", sectionItem.title);
      section.setAttribute("data-nav" , sectionItem.title.toUpperCase());
      if (sectionItem.index == 1){
        section.className= "your-active-class"
      }

      // create section content
      var div = document.createElement('div');
      div.className = "landing__container";
      var h2 = document.createElement('h2');
      h2.appendChild(document.createTextNode(sectionItem.title.toUpperCase()))
      var p = document.createElement('p');
      p.appendChild(document.createTextNode(sectionItem.description))
      div.appendChild(h2)
      div.appendChild(p)
      // add the content to section tag
      section.appendChild(div)
      
      let mainBody = document.getElementById('main-body')
      // add section in main 
      mainBody.appendChild(section)
      console.log("added--" ,sectionItem.title)
}



// Add class 'active' to section when near top of viewport

function isSectionInViewport(sectionElement) {
    const sect = sectionElement.getBoundingClientRect();
    return (
        sect.top >= 0 &&
        sect.left >= 0 &&
        sect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        sect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

var findMe = document.querySelectorAll('.thisisatest');

window.addEventListener('scroll', function(event) {
// add event on scroll
findMe.forEach(element => {
    //for each .thisisatest
    if (isInViewport(element)) {
      //if in Viewport
      element.classList.add("draw");
    }
});
}, false);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active