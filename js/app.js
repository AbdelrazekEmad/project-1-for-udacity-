// create an array include sections and store ul in variabele
const allSections = document.querySelectorAll("section");
const getUl = document.getElementById("navbar__list");

// Start building the nav

const myFragment = document.createDocumentFragment(); // create a fragment to append li on it
allSections.forEach((section) => {
  // create a new LI and add it to variable
  const newLi = document.createElement("li");
  // get link name and id to insert into innerhtml
  const linkName = section.getAttribute("data-nav");
  const linkId = section.getAttribute("id");
  newLi.innerHTML = `<a class = "menu__link" href=#${linkId} > ${linkName}</a> `;
  // add new li with class and id into ul
  myFragment.appendChild(newLi);

  // when click scroll to section smoothly (for Performance )
  newLi.addEventListener("click", function scrollToSeciton(eve) {
    eve.preventDefault(); // to delete outo scroll
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// append fragment to unordered list
getUl.appendChild(myFragment);

// End building the nav

// creatting functon help to grt top position of veiwport for every element and return boolean value
function ifSectionInVewport(section) {
  const positon = section.getBoundingClientRect();
  return positon.top >= 0;
}

// creatting fuction to check if the class is already exists in section that in viewport or not and remove it from any section else
function sectionActiveState() {
  allSections.forEach((section) => {
    if (ifSectionInVewport(section)) {
      // check that class not exists if true
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class"); // add the class
      }
    } else {
      // if not remove the class
      section.classList.remove("your-active-class");
    }
  });
}

//add scrool event to toggle class
document.addEventListener("scroll", sectionActiveState);
