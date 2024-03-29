  document.addEventListener("DOMContentLoaded", () =>{
    setTimeout(()=> {
        var elements = document.getElementsByClassName("text");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }, 2500);
});

document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".section");
    
    window.addEventListener("scroll", function() {
      sections.forEach(function(section, index) {
        var bounding = section.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          section.style.transform = "scale(1)";
        } else {
          section.style.transform = "scale(0.5)";
        }
      });
    });
  });
 //purchase page
  document.addEventListener('DOMContentLoaded', function() {
    var showFormBtn = document.getElementById('showFormBtn');
    var formSection = document.getElementById('formSection');

    showFormBtn.addEventListener('click', function() {
        formSection.style.display = "block";
        overlay.style.display = 'block';
    });
});

document.getElementById('closeFormBtn').addEventListener('click', function() {
  var formSection = document.getElementById('formSection');
  var overlay = document.getElementById('overlay');
  formSection.style.display = 'none';
  overlay.style.display = 'none';
});

