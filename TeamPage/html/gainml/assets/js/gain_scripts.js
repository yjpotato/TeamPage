document.addEventListener('DOMContentLoaded', function () {
    // 헤더 불러오기
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.log('헤더를 불러오는 데 실패했습니다: ', error);
        });

    // 푸터 불러오기
    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footers').innerHTML = data;
        })
        .catch(error => {
            console.log('푸터를 불러오는 데 실패했습니다: ', error);
        });

    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        observer.observe(bar);
        bar.parentElement.classList.add('visible');
    });

});

function checkEmailAvailability() {
    // 이메일 중복 확인을 위한 AJAX 요청을 수행하는 부분
    var email = document.getElementById('email').value;
    // 실제로는 서버에 이메일 중복 확인을 요청해야 하지만, 여기서는 간단한 예제로 alert으로 표시
    alert('이메일 중복 확인: ' + email);
}

function startAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(startAnimation, options);

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        observer.observe(bar);
        bar.parentElement.classList.add('visible');
    });
});
/*영희*/


window.addEventListener('DOMContentLoaded', event => {
    const content = "우리는 우주 최강 1조!!";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        if (text !== null) {
            let txt = content[i++];
            text.innerHTML += txt === "" ? " < br /> " : txt;
            if (i > content.length) {
                text.textContent = "";
                i = 0;
            }
        }
    }
    setInterval(typing, 300)


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
                // Add the following lines to toggle the background on button click
                const navbarBtn = document.querySelector('.navbar-btn');
                navbarBtn.classList.toggle('clicked');
            }
        });
    });
});