async function getData() {
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts'); //fetch는 api 호출을 도와주는 내장함수로 promise를 반환한다.
    let jsonResponse = await rawResponse.json(); //await는 promise가 resolve될 때까지 기다렸다가 resolve된 값을 반환한다.
    console.log(jsonResponse);
}

//getData();
fetch('https://jsonplaceholder.typicode.com/posts').then((res) => console.log(res))