let click_journey = document.querySelector(".sec2-div2-div1");
let click_Education = document.querySelector(".sec2-div2-div2");
let click_skills = document.querySelector(".sec2-div2-div3");

let display_journey = document.querySelector(".sec2-div3-div1-divA");
let display_Education = document.querySelector(".sec2-div3-div1-divB");
let display_skills = document.querySelector(".sec2-div3-div1-divC");
let sec2_div3 = document.querySelector(".sec2-div3");

function animation(anima_element) {
  anima_element.classList.add("slide-in");
}
click_journey.style.color = "white";
function colorwhite(white, black1, black2) {
  white.style.color = "white";
  black1.style.color = "black";
  black2.style.color = "black";
}
click_Education.addEventListener("click", (e) => {
  display_journey.style.display = "none";
  display_Education.style.display = "block";
  display_skills.style.display = "none";
  animation(display_Education);
  colorwhite(click_Education, click_journey, click_skills);
});

click_journey.addEventListener("click", (e) => {
  display_journey.style.display = "block";
  display_Education.style.display = "none";
  display_skills.style.display = "none";
  animation(display_journey);
  colorwhite(click_journey, click_Education, click_skills);
});

click_skills.addEventListener("click", (e) => {
  display_journey.style.display = "none";
  display_Education.style.display = "none";
  display_skills.style.display = "block";
  animation(display_skills);
  colorwhite(click_skills, click_Education, click_journey);
});

// ^=============================================================
let click_bigproject = document.querySelector(".sec3-div2-div1");
let click_conpro = document.querySelector(".sec3-div2-div2");

let dis_proj = document.querySelector(".sec3-div3-div1");
async function project_data(e) {
  let data = await window.fetch("./project_data.json");
  let finaldata = await data.json();

  let projects = finaldata.big_projects;
  let map = projects.map((e) => {
    dis_proj.innerHTML += `<div class="project-div">
    <img src="${e.img}" alt="image" class="project-div-img">
    <h3>${e.project_Name}</h3><p>${e.description}</p> <div>
          <button>Preview</button>
          <button>Github</button>
          </div></div>`;
  });

  click_bigproject.classList.add("borderbottom");

  let concept_projects = finaldata.concept_project;
  click_conpro.addEventListener("click", (e) => {
    dis_proj.innerHTML = ``;
    concept_projects.map((e) => {
      dis_proj.innerHTML += `<div class="project-div">
          <img src="${e.img}" alt="image" class="project-div-img">
          <h3>${e.project_Name}</h3>
          <p>${e.description}</p>
           <div>
          <button>Preview</button>
          <button>Github</button>
          </div></div>`;
    });
    click_conpro.classList.add("borderbottom");
    click_bigproject.classList.remove("borderbottom");
    let prochil = [...dis_proj.children];
    prochil.map((e) => {
      animation(e);
    });
  });
  click_bigproject.addEventListener("click", (e) => {
    dis_proj.innerHTML = ``;
    projects.map((e) => {
      dis_proj.innerHTML += `<div class="project-div">
          <img src="${e.img}" alt="image" class="project-div-img">
          <h3>${e.project_Name}</h3>
          <p>${e.description}</p>
          <div>
          <button>Preview</button>
          <button>Github</button>
          </div>
          </div>`;
    });

    click_bigproject.classList.add("borderbottom");
    click_conpro.classList.remove("borderbottom");
    let prochil = [...dis_proj.children];
    prochil.map((e) => {
      animation(e);
    });
  });
}
project_data();
// ^==============================================================
