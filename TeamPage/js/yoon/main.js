// intro 이벤트
  
  $(window).on('load', function(){
    setTimeout(function(){
      mainScript.gsapFnc();
    }, 500); 
    gnbMenu();
  })
  
  // visual 영역 텍스트 이벤트
  const mainScript = {
    gsapFnc: function(){
      gsap.set('.text-area ul li ', {
        rotateX: 90,
        skewY: 15,
        rotateY: 10,
        opacity: 0,
      })
      gsap.to('.text-area ul li ', {
        rotateX: 0,
        skewY: 0,
        rotateY: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      })
    },  
  }



  
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false, // Change this to false
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  

  $(".tab-menu ul li a").on('click', function() {
    let index = $(".tab-menu ul li a").index(this);
  
    //모든 div의 on 클래스 제거
    $('.tab-contents div').removeClass('on');
    //클릭된 index에 해당하는 div에 on 추가
    $('.tab-contents div:eq('+ index +')').addClass('on');
  })