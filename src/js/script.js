document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of theme
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

var html_project="";
const element_project = document.getElementById('projects-columns');
let tag_color =  new Object();
tag_color["Python"] = "color-red";
tag_color["C#"] = "color-yellow";
tag_color["Web"] = "color-peach";
tag_color["Java"] = "color-maroon";
tag_color["Hacking"] = "color-green";
tag_color["AI"] = "color-teal";
tag_color["Game"] = "color-sky";
tag_color["Application"] = "color-blue";
tag_color["Unity"] = "color-mauve";
tag_color["MySQL"] = "color-rosewater";
tag_color["Wordpress"] = "color-lavender";
tag_color["Mikrocontroller"] = "color-sapphire";
tag_color["CC++"] = "color-flamingo";

fetch("src/json/projecte.json")
  .then(response => response.json())
  .then(json => {
    
    json.forEach(obj => {

      var top = `
        <div class="column is-12-mobile is-7-tablet is-4-desktop is-3-fullhd is-flex">
          <div class="card min-height-100 color-surface0">
            <div class="card-header px-2 pt-2">
              <div class="card-header-title">${obj.name}</div>
              <div class="subtitle">${obj.year}</div>
            </div>
            <div class="card-content">
              <div class="content">
                ${obj.description}
              </div>
          `

      var github = "";
      if (obj.github) {
        var github = `
                <br>
                <div class="buttons down-left ml-2 mb-2">
                  <button class="button color-crust" onclick="window.location.href='${obj.github}';">
                    <span class="NerdFont" > GitHub</span>
                  </button>
                </div>`;
      }

      var gitlab = "";
      if (obj.gitlab) {
        var gitlab = `
                <br>
                <div class="buttons down-left ml-2 mb-2">
                  <button class="button color-gitlab" onclick="window.location.href='${obj.gitlab}';">
                    <span class="NerdFont has-text-black" >󰮠 GitLab</span>
                  </button>
                </div>`;
      }

      var tags = '<div class="tags down-right mb-2 mr-2">';
      obj.tags.forEach(element => {
        
        console.log(tag_color["Java"])
        tags+=`<p class="tag is-light has-text-black ${tag_color[element.tag]}">${element.tag}</p>`;
      });
      
    var buttom = `
              </div>
              
            </div>

          </div>
        </div>
      `;
      html_project += top + github + gitlab + tags + buttom;
      
    });
    
    element_project.innerHTML=html_project;
  });


var html_skill="";
const element_skill = document.getElementById('skill-columns');
fetch("src/json/skills.json")
  .then(response => response.json())
  .then(json => {
    
    json.forEach(obj => {
      var top = `        
      <div class="container my-5">
          <h2 class="title has-text-centered">${obj.skilltype}</h2>

          <div class="columns is-centered is-multiline">

          `;
      
      var cards = "";

      obj.skills.forEach(obj_skill => {

        var card = `

              <div
                class="column is-12-mobile is-6-tablet is-4-desktop is-3-fullhd "
              >
                <div class="card min-height-100 color-surface0">
                  <div class="card-content has-text-centered">
                    <h1 class="title">${obj_skill.name}</h1>
                    <figure class="image is-96x96 is-inline-block">
                      <img src="${obj_skill.img}" loading="lazy"/>
                    </figure>
                  </div>
                  <div class="card-footer">
                    <div class="card-footer-item">
                      <p class="">${obj_skill.level}</p>
                    </div>
                  </div>
                </div>
              </div>
          `;

        cards += card;
      });
      var button=`
          </div>
        </div>`;

      html_skill+=top+cards+button;
    });

    element_skill.innerHTML=html_skill;
  });
