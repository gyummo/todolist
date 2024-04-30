function test(){
    console.log("test함수 실행")
}

test();

/*
* Arrow 함수
*/

//함수가 사용될때마다 this가 생성됨
//변수는 윈도우 안에 저장됨
//함수 스코프 안에 변수가 생성됨
const arrow1 = () => {
    console.log(arguments)
    console.log("test2 함수 실행")
}

arrow1(); 

