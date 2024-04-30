let members=[
    '최지원',
    '김지원',
    '이지원',
    '박지원',
    '정지원'
]

//members에 있는 배열을 복사해서 members2에 넣어줌
let members2 = [
    ...members
]

console.log("-------------------------------")
let memberInfo = {
    name: "지원",
    age : 47,
    gender: 'M'
}

//memberInfo의 객체를 복사해서 memberInfo2에 넣어줌
let memberInfo2 = {
    ...memberInfo,

    //기존의 memberInfo에 새로운 정보를 추가할 수 있음
    age : 12
}

console.log(memberInfo2)

console.log("-------------------------")

//join()
console.log(members2.join());
console.log(members2.join('/'));
console.log(members2.join(''));

console.log(members2);
//push
console.log(members.push('홍지원'));
console.log(members)

//splice()
console.log(members.splice(0,3));

//concat
console.log(members.concat('홍지원'));
console.log(members);

//console에 왜 출력값이 안 찍힐까?


//리액트는 다시 만들어주는 개념밖에 없음

//리액트는 새로고침 형이기때문에 (다시 시작하는 형태)
//자바스크립트 함수를 이용해 for문을 만들어줄 필요가 있음

//정렬은 프론트에서 하는게 좋음

//sort()
members2.sort();
console.log(members2);
console.log(members2.reverse());

let numbers = [
    1, 9, 7, 5, 3
]
console.log(numbers);

//a, b를 비교한다
//a, b는 인덱스를 의미함
//인덱스는 0부터 시작함

//1) a를 b보다 나중에 정렬하고 싶다면 (뒤에 두려면) 0보다 큰 수를 반환한다
//2) a를 b보다 먼저 정렬하고 싶다면 (앞에 두려면) 0보다 작은 수를 반환한다
//3) 원래 순서를 유지하고 싶다면 0을 반환한다.

//?는 조건문을 의미함
//:은 else를 의미함
numbers.sort((a , b) => {
    console.log(a + " : " + b);
    return a > b ? 1 : -1; //오름차순 정렬
    return a < b ? 1 : -1; //내림차순 정렬
});

(a, b) => a < b ? 1 : -1;

numbers.sort((a, b) => a < b ? 1 : -1);
console.log(numbers);

console.log("-------------------------------")

//map() 함수
//map() 함수는 배열의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함

//m이라는 파라미터 값을 받아 m을 반환함
//기존 배열의 요소를 전부 반복하면서 새로운 배열을 반환함

//특정 값들을 변경해주는 일을 할 때 사용함
console.log(members2.map((m) => 1));

//모든 멤버에 등급을 부여해줘야 한다고 할때
console.log(members2.map((m) => {
    if(m.length > 3){
        return m + " [VIP]";
    } else {
        return "[gold]";
    }
}));

//쿼리에서 한번에 짜지말고 나눠서 짜는게 좋음
//데이터가 많아지면 join테이블이 많아지기 때문에
//조인은 비교하면서 하기 때문에 느려짐 (데이터가 많아지면 느려짐)

//프론트에서 조건처리만 잘라서 가능한 조인만 짧게짧게 해주는게 좋음
//프론트에서는 조인을 최대한 피해야함
let classList = [{
    className : "자바 1장",
    time : "09:00",
    classNo : 1

},{
    className : "자바 1장",
    time : "09:00",
    classNo : 2
    
},{
    className : "자바 1장",
    time : "09:00",
    classNo : 3
    
}]

let studentList = [{
    name : "홍길동",
    classNo : 1
},{
    name : "김길동",
    classNo : 2
},{
    name : "박길동",
    classNo : 3
}];


//기존 함수
let tmpMembers = [];
for(let m of members2){
    tmpMembers.push(m + 1);
}

//copilot은 신이다

//기존 요소를 가지고 전부 1씩 더한 요소를 새로 만들어줌

//classList 배열에서 classNo를 가진 첫번째 클래스를 찾음
//학생과 클래스를 합쳐줌
//학생과 클래스를 합쳐준 값을 반환함

//map을 통해 배열을 만들면 똑같은 배열을 반환해줘야됨
//기존 크기의 똑같은 배열이 반환되지 않을때 reduce를 사용해서 배열을 반환
console.log(classList.map(c => {
    for(let s of studentlist){
        if(s.classNo === c.classNo){
            return {
                ...c,
                ...s
            }
        }
    }
    //filter로 변경해보기
    for (let s of studentList.filter(s => s.classNo === c.classNo)){
        return {
            ...c,
            ...s
        }
    }

    return s;
}))

//filter()
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tmp2 = [];
for (let n of numbers2){
    if(n % 2 === 0){
        tmp2.push(n);
    }
}

//filter() 함수는 배열의 모든 요소 중에서 주어진 함수로 걸러낸 요소들을 모아 새로운 배열로 반환함
//n => n % 2 === 0은 짝수만 걸러내는 함수
tmp2 = numbers2.filter(n => n % 2 === 0);
console.log(numbers.filter(n => n % 2 === 0))

//find()
//find() 함수는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환함
console.log(numbers2.find(n => n % 2 === 0));

//findIndex()
//findIndex() 함수는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환함
console.log(numbers2)
console.log(numbers2.findIndex(n => n % 2 === 0));

//undifined는 자바 스크립트에서 if안에 들어갈때 false로 처리됨

//reduce()
//reduce() 함수는 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환함
//reduce() 함수는 누적값을 반환함

//reduce((, 배열의 요소) => {}, 초기값)
//배열을 통해서 특정 변수 하나를 만들 때 
console.log(numbers2.reduce((p, n) => p + n, 0));
console.log(numbers2.reduce((sum, n) => {
    if(n % 2 === 1){
        sum.push(n);
    }
    return sum;
}, []))




