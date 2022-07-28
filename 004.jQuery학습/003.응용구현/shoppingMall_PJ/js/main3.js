// 쇼핑몰 배너 JS - 03.페이드효과 //

/////// 제이쿼리 블록 /////////
$(()=>{

    // 호출확인
    console.log("로딩완료!");

    /************************************************ 
        
    [ 페이드 배너 요구사항 ]

        1. 오른쪽버튼 클릭시 배너는 다음 슬라이드가 보임

        2. 왼쪽버튼 클릭시 이전 슬라이드가 보임

        3. 모든 배너는 무한이동을 원칙으로 한다!

        4. 배너 이동시 배너의 순번을 블릿으로 표시한다

        5. 자동넘김이 셋팅되어 있으며 사용자가 조작시 자동넘김이 
        멈춰지고 일정시간 놔두면 다시 자동넘김 작동함
        
    ************************************************/


        // 이벤트 대상: .abtn
        // 이벤트: click() 메서드 사용
        // 양쪽버튼 구분: .ab1(왼쪽버튼) / .ab2(오른쪽버튼)
        // 변경대상: #slide
        // 변경내용: 슬라이드의 top값을 이동하여 애니메이션함
        let slide = $("#slide");

        // 변경에 사용할 제이쿼리 메서드: 
        // animate({CSS속성},시간,이징,함수)

        // 변경대상: 블릿 - .indic li
        let indic = $(".indic li");

        // 광클 금지상태변수
        let prot = 0; //1-불허용, 0-허용

        // 애니메이션 시간 변수
        const aniT = 600;

        // 애니메이션 이징 변수
        const aniE = "easeInOutCubic";

        $(".abtn").click(function(){

            // console.log("진입:",prot);

            // 광클금지 ///////
            if(prot) return;
            prot = 1; //잠금!
            setTimeout(()=>prot=0,aniT);
            // 0.6초후 prot=0 상태해제!

            // console.log("통과:",prot);

            // 자동넘김 지우기함수 호출!
            // clearAuto();

            // 1. 오른쪽여부
            // is(클래스/아이디명) -> 선택요소해당여부 리턴
            let isR = $(this).is(".ab2");


            // 호출확인(방향확인)
            // console.log("오른쪽버튼인가? ",isR);

            // 2. 버튼별 분기하여 기능구현
            if(isR){  //오른쪽버튼  
                

            } //////////// if ///////////

            else{ //윗쪽버튼

               

            } /////// else //////////

            // 3. 등장슬라이드와 같은 순번의 블릿변경하기
            // 변경내용: 블릿 li에 class="on"을 주고
            // 나머지 li에는 class="on"을 지운다!

         

        }); ////////// click ////////////

        
        // 배너 자동호출 넘기기 셋팅 ///
        // 인터발함수 : setInterval(함수,시간)
        // 인터발 지우기 함수 : clearInterval(변수)
        // 타임아웃함수: setTimeout(함수,시간)
        // 타임아웃 지우기 함수: clearTimeout(변수)
        // 타이밍함수는 변수에 할당해야 지울수있다!


        // 인터발용 변수
        let autoI;

        // 타임아웃용 변수
        let autoT;

        // 인터발 최초호출
        // autoSlide();

        // 인터발 호출함수
        function autoSlide(){

            autoI = setInterval(()=>{
               

            },3000); ////// 인터발함수 ///////
        } //////////////// autoSlide함수 //////////////


        // 인터발 지우기 함수 ////////////
        function clearAuto(){
            // 인터발지우기
            clearInterval(autoI);
            // 타임아웃지우기(실행쓰나미 방지!)
            clearTimeout(autoT);

            // 일정시간후 다시 인터발 호출!
            autoT = setTimeout(autoSlide,4000);

        } ///////////////// clearAuto함수 //////////////




        // 근본적 해결소스 아님!
            // setInterval(()=>{
            //     $(".ab2").trigger("click");
            // },3000);
            // 제이쿼리 trigger(이벤트명) 메서드
            // -> 선택요소에 강제 이벤트발생 메서드


}); ///////////////////////////// jQB //////////////////////////
///////////////////////////////////////////////////////////////