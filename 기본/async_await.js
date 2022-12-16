function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });//이는 Promise((resolve) => setTimeout(resolve, ms))와 동일함.
}

async function helloAsync() { //이 함수는 자동으로 프로미스를 반환함.
    return delay(3000).then(() => {
        return 'hello Async';
    }); // 이 값은 resolve 함수의 인자로 전달됨.
}
//async 함수는 자동으로 프로미스를 반환함. 이때 return된 값은 resolve 함수의 인자로 전달됨.

//위 함수를 조금 더 간단히 표현하기 위해 await을 사용하면 
async function helloAsync2() {
    await delay(3000); // 비동기 함수를 동기 함수인것 처럼 실행.
    //즉 3초가 지난 후 아래 값을 return함. async 함수 내에서만 사용가능.
    //await 코드가 붙은 비동기 함수가 실행되기 전에는 helloAsync2 함수는 멈춰있음.
    return 'hello Async2';
}

async function main() {
    const res = await helloAsync(); // 다음과 같이 호출하는 함수만 따로 빼서 사용 가능.
    console.log(res);
}

console.log(helloAsync()); //Promise { 'hello Async' }
helloAsync().then((res) => console.log(res)); //hello Async
helloAsync2().then((res) => console.log(res)); //hello Async2