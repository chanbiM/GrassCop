//메인 슬라이드
$('.slide:gt(0)').hide() // 두번째 이미지 부터 (즉 두번째, 세번째) 이미지를 숨김 따라서 첫번째 이미지만 보여지게 함 
setInterval(function(){
 $('.slide:first').fadeOut(2000).next().fadeIn(2000)
 $('.slide:first').appendTo('.slideWrap') //첫번째 이미지를 마지막에 추가하여 반복적으로 이미지를 재생하도록 함
},3000)
