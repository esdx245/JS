const getName = (person) => {
    if (!person) { // 한번에 예외 처리 가능
        return "유효한 이름이 아닙니다.";
    }
    return person.name;
};

let person = "";
const name = getName(person);
console.log(name);

// [], {}, 0을 제외한 숫자(Infinity, -Infinity), true, "문자열", Symbol, 함수, new Date() 등은 모두 truthy 값이다.
// 0, NaN, "", null, undefined, false는 모두 falsy 값이다.