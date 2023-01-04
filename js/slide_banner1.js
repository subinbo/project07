$(function(){
    var visual = $('.best_wrap>ul>li'); //슬라이드 이미지
    var leftBtn = $('.best_wrap .allow_left'); //왼쪽 버튼
    var rightBtn = $('.best_wrap .allow_right'); //오른쪽 버튼
    var current = 0 //배너이미지의 현재상태 초기화

    /* 화살표 클릭 */
    rightBtn.click(function(){
        var prev = visual.eq(current);
        move(prev, 0, '-100%');

        current++;

        if(current == visual.size()){current=0;}

        var next = visual.eq(current);
        move(next, '100%', 0);

        return; //함수실행 종료
    });

    leftBtn.click(function(){
        var prev = visual.eq(current);
        move(prev, 0, '100%');

        current--; //1씩 감소

        if(current == -visual.size()){current=0;}

        var next = visual.eq(current);
        move(next, '-100%', 0);

        return; //함수실행 종료
    });




    function move(tg, start, end){ //파라미터
        tg.css('left',start).stop().animate({left:end},
        {duration:500, ease:'easeOutCubic'}); //점점 빨라지게

    }






});