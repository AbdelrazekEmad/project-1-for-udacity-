// Define Global Variables

const getUl = document.getElementById("navbar__list");
const allSections = document.querySelectorAll("section");
const allLinks = document.querySelectorAll("li");

// build the nav

function buildingNavBar() {
  for (section of allSections) {
    // create a new LI and add it to variable
    const newLi = document.createElement("li");
    // get link name and id to insert into innerhtml
    const linkName = section.getAttribute("data-nav");
    const linkId = section.getAttribute("id");
    newLi.innerHTML = `<a class = "menu__link" href=#${linkId} > ${linkName}</a> `;
    // add new li with class and id into ul
    getUl.appendChild(newLi);
  }
}

buildingNavBar();

// Add class 'active' to section when near top of viewport

// creatting functon help to grt top position of veiwport for every element and return boolean value
function ifSectionInVewport(section) {
  const positon = section.getBoundingClientRect();
  return positon.top >= 0;
}

// creatting fuction to check if the class is already exists in section that in viewport or not and remove it from any section else
function sectionActiveState() {
  for (section of allSections) {
    if (ifSectionInVewport(section)) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

//add scrool event to toggle class
document.addEventListener("scroll", sectionActiveState);


