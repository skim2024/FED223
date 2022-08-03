// 보그 PJ 링크 시스템 JS - linksys.js

$(()=>{ //////////////// jQB //////////////////

    // GNB 링크 셋팅 /////////////////
    // 대상: .gnb a
    $('.gnb a').click(function(e){

        // a기본이동 막기
        e.preventDefault();
        
        // 클릭된 a요소의 글자읽기
        let txt = $(this).text().toLowerCase().trim();
        // toLowerCase() 소문자변환
        // 참고) toUpperCase() 대문자변환
        // trim() 앞뒤공백제거
        console.log(txt);

        // 2. 서브페이지 이동하기
        if(txt!=="search")
            location.href = 'category.html?cat='+txt;

            // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 
            // cat=
    });
}); //////////// jQB //////////////////