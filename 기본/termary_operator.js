let a = 3;
if (a >= 0) {
    console.log("양수");
}
else {
    console.log("음수");
}

a >= 0 ? console.log("양수") : console.log("음수"); // 이를 삼항연산자라 함.
// 조건식 ? 참일 때 수행할 코드 : 거짓일 때 수행할 코드

b = [];
b.length === 0 ? console.log("빈 배열입니다.") : console.log("비어있지 않은 배열입니다.");