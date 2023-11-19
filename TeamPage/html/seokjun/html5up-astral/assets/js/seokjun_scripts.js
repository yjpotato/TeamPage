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



// 유튜브 시작

 // YouTube 비디오 ID 배열
 const videoIds = [
    '7ihLv8_Vd-4',
    '0q6DR6EiPPo',
    '5a-tqIQc8RM',
    'WZrLs9hto04',
    'medo8dj_-28'
  ];
  const songTitles = [
    '[최유리-숲]',
    '[선우정아-도망가자]',
    '[Sondia-어른]',
    '[박원-나]',
    '[한요한-범퍼카]'
];
  // 현재 재생 중인 비디오의 인덱스
  let currentVideoIndex = 0;

  // 페이지 로드 시 처음 비디오 재생
  window.onload = function () {
    loadVideo();
  };

  // 다음 비디오 재생 함수
  function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    loadVideo();
  }

  // 이전 비디오 재생 함수
  function playPrevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
    loadVideo();
  }

  // 비디오 로드 함수
  function loadVideo() {
    const iframe = document.getElementById('youtube-video');
    const videoId = videoIds[currentVideoIndex];
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.src = videoUrl;

    //노래 제목
    const songTitleElement = document.getElementById('song-title');
    songTitleElement.textContent = songTitles[currentVideoIndex];
    
  }

  
  // 버튼 보이기
  function showControls() {
    const buttons = document.querySelectorAll('.control-button');
    buttons.forEach(button => (button.style.opacity = 1));
  }

  // 버튼 감추기
  function hideControls() {
    const buttons = document.querySelectorAll('.control-button');
    buttons.forEach(button => (button.style.opacity = 0));
  }
//   유튜브 끝