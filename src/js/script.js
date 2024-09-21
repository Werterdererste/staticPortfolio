document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
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


var html="";
const preElement = document.getElementById('projekte-columns');



fetch("src/json/projecte.json")
  .then(response => response.json())
  .then(json => {
    
    json.forEach(obj => {

      var top = `
        <div class="column is-12-mobile is-7-tablet is-4-desktop is-3-fullhd is-flex">
          <div class="card min-hight-100">
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
                  <button class="button" onclick="window.location.href='${obj.github}';">
                    <span class="NerdFont" > GitHub</span>
                  </button>
                </div>
            `;
      }
      
      var tags = '<div class="tags down-right mb-2 mr-2">';
      obj.tags.forEach(element => {
        console.log(element.tag);
        tags+=`<p class="tag is-light is-primary">${element.tag}</p>`;
      });
      
    var buttom = `
              </div>
              
            </div>

          </div>
        </div>
      `;
   //   console.log(html)
      html += top + github + tags + buttom;
      
    });
    

    preElement.innerHTML=html;
    
    console.log(html)
  });
  