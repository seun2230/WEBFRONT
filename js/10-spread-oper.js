console.log("===== 배열 전개 연산");
 
var arr1 = ['홍길동', '장길산'];
var arr2 = ['임꺽정', '전우치'];
console.log(arr1, arr2);
// 기존 방식 합치기
var combined = [];  //  빈 배열
// 첫 번째 방법
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1:", combined);

// 두 번째 방법: concat
combined = arr1.concat(arr2);
console.log("combine 2:", combined);
// 세 번째 방법: concat
combined = [].concat(arr1, arr2);
console.log("combine 3:", combined);

// ES6 Way 
// : 간결하고 편리하게 만들 수 있음
combined = [...arr1, ...arr2]; // 각 배열의 모든 요소를 풀어 헤쳐라
console.log("ES6 combine:", combined);

// 배열의 전개
console.log("===== 배열의 전개");
console.log("원본배열:", arr1);
var [first, second, third="empty", ...others] = arr1;   // : 변수 임의로 지정해도 됨
console.log(first, second, third, others);   // 결과: 홍길동 장길산 empty []

console.log("원본배열:", combined);
var [first, second, third="empty", ...others] = combined;    
console.log(first, second, third, others);    // 결과: 홍길동 장길산 임꺽정 [ '전우치' ]

console.log("===== 객체 전개 연산")
// : 객체의 키나 값을 추출할 때 활용 가능함
var obj1 = { one: 1, two: 2, other: 0}
var obj2 = { three: 3, four: 4, other: -1}

// 기존 방식1
var combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.hree,
    four: obj2.four,
    other: obj2.other
}
console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("combined 1:", combined);

// 방법 2: Object 객체 이용
combined = Object.assign({}, obj1, obj2);
console.log("combine 2:", combined);

// 연결 순서 바꾸기
combined = Object.assign({}, obj1, obj2);
console.log("combine 3:", combined);

// ES6  Way
combined = {
    ...obj1,      // obj1의 모든 속성을 전개
    ...obj2,      // obj2의 모든 속성을 전개
}

console.log("ES6 combine:", combined);

// TODO: 전개 순서를 obj2, obj1 순서로 전개해서 결과 비교

// 객체의 전개
console.log("원본:", combined);
var { one, three, ...others } = combined;    // 변수명: oner, three는 객체의 속성과 일치해야 함
console.log(one, three, others);