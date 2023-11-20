document.addEventListener('DOMContentLoaded', function () {
    // 로딩 이미지를 3초 동안만 표시하고 나머지 시간에는 화면을 표시
    showLoadingImage();

    // 일정 시간(예: 3초) 후에 로딩 이미지 감추고 화면 보여주기
    setTimeout(function () {
        hideLoadingImage();
        showContent();
    }, 5000); // 3000 밀리초(3초)

    // 콘텐츠를 보여주는 함수
    function showContent() {
        var wrapper = document.getElementById("wrapper");
        wrapper.style.display = "block";
    }

    // 로딩 이미지를 표시하는 함수
    function showLoadingImage() {
        var loadingOverlay = document.getElementById("loading-overlay");
        loadingOverlay.style.display = "block";
    }

    // 로딩 이미지를 감추는 함수
    function hideLoadingImage() {
        var loadingOverlay = document.getElementById("loading-overlay"); // 수정: "load" 대신 "loading-overlay"를 사용
        loadingOverlay.style.display = "none";
    }

    // Show the content (이 부분은 이미 showContent 함수에서 처리하므로 중복되지 않게 제거)

    var cardContainer = document.querySelector('.card-container');
    var frontImgSrc = './yoojin/images/체리카드뒷면.jpeg';

    var backgroundAudioElement = document.createElement('audio');
    backgroundAudioElement.src = './yoojin/images/내페이지.mp3';

    // 페이지 로드 시에 배경음 재생
    backgroundAudioElement.play().catch(error => {
        console.error('배경음을 재생하는 데 실패했습니다: ', error);
    });

    // 카드 호버시에 재생되는 오디오 요소 생성
    var cardAudioElement = document.createElement('audio');
    cardAudioElement.src = './yoojin/images/마술봉 뾰로롱~.mp3';

    // 카드 호버시에 오디오 재생
    cardContainer.addEventListener('mouseover', function () {
        cardAudioElement.play().catch(error => {
            console.error('카드 오디오를 재생하는 데 실패했습니다: ', error);
        });
    });

    for (var i = 1; i <= 6; i++) {
        var flip = document.createElement('div');
        flip.className = 'flip';

        var front = document.createElement('div');
        front.className = 'front';
        var frontImg = document.createElement('img');
        frontImg.src = frontImgSrc;
        frontImg.alt = 'Cherry Back Image';
        front.appendChild(frontImg);

        var back = document.createElement('div');
        back.className = 'back';
        var backImg = document.createElement('img');
        backImg.src = `./yoojin/images/back${i}.jpeg`;
        backImg.alt = `Back Image ${i}`;
        back.appendChild(backImg);

        flip.appendChild(front);
        flip.appendChild(back);

        // 마우스 오버 이벤트 리스너 추가
        flip.addEventListener('mouseover', function () {
            playAudio(); // 오디오 재생
        });

        cardContainer.appendChild(flip);
    }

    // 페이지 어디든 클릭에 대한 이벤트 리스너 추가
    document.body.addEventListener('click', function () {
        playAudio();
    });

    // 오디오 재생 함수
    function playAudio() {
        cardAudioElement.play().catch(error => {
            console.error('오디오를 재생하는 데 실패했습니다: ', error);
        });
    }
});
