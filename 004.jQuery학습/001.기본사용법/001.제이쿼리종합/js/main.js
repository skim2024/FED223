// 제이쿼리 기본 JS - main.js 
 
// 제이쿼리 코드블록 /////////
$(()=>{

    // 0.주인공들 변수할당하기!
    // (1) 미니언즈
    let mi = $(".mi");

    // (2) 건물 li
    let bd = $(".building li");

    // (3) 버튼들
    let btns = $(".btns button");

    // (4) 메세지박스
    let msg = $(".msg");


    // 1. 건물에 각방 번호넣기
    bd.each((idx,ele)=>{ // idx는 순번, ele는 요소
        // text() 텍스트 넣기
        $(ele).text(idx);
        // 9번방에 좀비넣기
        if(idx===9) $(ele).append('<img src="images/mz1.png" alt="좀비1" class="mz">');
        // 7번방에 좀비넣기
        if(idx===7) $(ele).append('<img src="images/mz2.png" alt="좀비2" class="mz">');
        // 1번방에 좀비넣기
        if(idx===1) $(ele).append('<img src="images/zom.png" alt="좀비들" class="mz">');
        // 2번방에 주사기넣기
        if(idx===2) $(ele).append('<img src="images/inj.png" alt="주사기" class="inj">');
    }); ///////////// each ///////////////

    // 좀비는 모두 숨기기: hide()
    $(".mz").hide();




    // 2. 버튼 셋팅하기 (탐색기능)
    // 모든 버튼은 숨기고 첫번째 버튼만 보여
    // 버튼.숨겨().첫번째().보여()
    btns.hide().first().show();

    // 3. "들어가기" 버튼 클릭시
    btns.first().click(function(){

        // 0. 버튼 자신 없애기!
            // 없애기 방법: hide(),slideUp(),fadeOut()
            $(this).fadeOut(200);
            // 메세지 없애기
            // msg,hide();

        // 1. 위치값 알아오기 (대상: 빌딩li)
            // 8번째 li
            // eq(순번) -> 순번요소 선택 메서드!
            let tval = bd.eq(8).offset().top;
            let lval = bd.eq(8).offset().left;
            // offset() 메서드 - 요소셋팅값(위치,크기)
            // top,left,width,height 속성값 사용!

        // 2. 위치이동
        mi.animate({top: tval+"px",left: lval+"px"},1000, "easeInOutElastic",function(){ 
            //이동애니 후 

            // 메세지 변경하기+보이기
            msg.text('와~! 아늑하다! 옆방으로 가보자!')
            .show();

            // 다음버튼 보이기
            btns.eq(1).fadeIn(300);

        }); ////////////// animate ////////////
    }); /////////////// click /////////////

}); /////////////// JQB ///////////////////