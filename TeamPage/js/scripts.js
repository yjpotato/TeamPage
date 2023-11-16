document.addEventListener('DOMContentLoaded', function () {
    // Header 가져오기
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(data => {
            // 페이지 로드가 완료되면 'header' id를 가진 div에 header.html의 내용을 삽입
            document.getElementById('header').innerHTML = data;
        })
        .then(() => {
            // Footer 가져오기
            return fetch('/includes/footer.html');
        })
        .then(response => response.text())
        .then(data => {
            // 'footer' id를 가진 div에 footer.html의 내용을 삽입
            document.getElementById('footer').innerHTML = data;
        })
        .then(() => {
            // 이제 나머지 스크립트를 실행
            // Navbar shrink function
            var navbarShrink = function () {
                // 'mainNav' id를 가진 요소를 찾아서 navbarCollapsible 변수에 할당
                const navbarCollapsible = document.body.querySelector('#mainNav');
                if (!navbarCollapsible) {
                    return;
                }
                // 페이지가 맨 위에 있을 때 navbar-shrink 클래스 제거
                if (window.scrollY === 0) {
                    navbarCollapsible.classList.remove('navbar-shrink')
                } else {
                    // 페이지가 맨 위가 아닐 때 navbar-shrink 클래스 추가
                    navbarCollapsible.classList.add('navbar-shrink')
                }
            };

            // Shrink the navbar 
            // 페이지 로드 시 navbarShrink 함수 호출
            navbarShrink();

            // Shrink the navbar when page is scrolled
            // 페이지를 스크롤할 때마다 navbarShrink 함수 호출
            document.addEventListener('scroll', navbarShrink);

            // Activate Bootstrap scrollspy on the main nav element
            const mainNav = document.body.querySelector('#mainNav');
            if (mainNav) {
                // 'mainNav' 요소에 Bootstrap의 ScrollSpy 기능 적용
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
                    // navbar-toggler가 보일 때 navbar-toggler 클릭 이벤트 발생
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                        // navbar-btn에 clicked 클래스 토글
                        const navbarBtn = document.querySelector('.navbar-btn');
                        navbarBtn.classList.toggle('clicked');
                    }
                });
            });

            // 영희의 구역: 애니메이션 시작 함수
            function startAnimation(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }

            // 옵션 설정
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            // IntersectionObserver 생성
            const observer = new IntersectionObserver(startAnimation, options);
            const progressBars = document.querySelectorAll('.progress-bar');

            progressBars.forEach(bar => {
                observer.observe(bar);
                bar.parentElement.classList.add('visible');
            });
        });
});
