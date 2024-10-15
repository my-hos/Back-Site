function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (m) {
      return {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
      }[m];
  });
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");
  var windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal2);

window.addEventListener("scroll", function() {
  var img = document.getElementById("imglog");
  var scrollValue = window.scrollY;

  // تعديل الخصائص بشكل آمن
  img.style.transform = `translate(-50%, calc(-50% + ${scrollValue * 0.3}px))`;

  var opacityValue = 1 - scrollValue / 100;
  img.style.opacity = opacityValue > 0 ? opacityValue : 0;

  if (opacityValue <= 0) {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
});

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".numbers");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    // التحقق من أن الهدف رقم صالح
    if (isFinite(goal) && !isNaN(parseInt(goal))) {
      el.textContent++;
    }

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

document.getElementById('readMoreButton').addEventListener('click', function() {
  const linkContainer = document.getElementById('linkContainer');
  const currentMaxHeight = window.getComputedStyle(linkContainer).maxHeight;

  if (currentMaxHeight === 'none' || currentMaxHeight === '') {
    linkContainer.style.maxHeight = '140px';
    this.textContent = 'قراءة المزيد';
  } else {
    linkContainer.style.maxHeight = 'none';
    this.textContent = 'أقل';
  }
});

document.getElementById('readMoreButton2').addEventListener('click', function() {
  const linkContainer = document.getElementById('linkContainer2');
  const currentMaxHeight = window.getComputedStyle(linkContainer).maxHeight;

  if (currentMaxHeight === 'none' || currentMaxHeight === '') {
    linkContainer.style.maxHeight = '140px';
    this.textContent = 'قراءة المزيد';
  } else {
    linkContainer.style.maxHeight = 'none';
    this.textContent = 'أقل';
  }
});


document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
