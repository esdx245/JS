function taskA(a, b, cb) {
    setTimeout(
        () => {
            let res = a + b;
            cb(res);
        }, 2000
    );
}

function taskB(a, cb) {
    setTimeout(
        () => {
            let res = a * 2;
            cb(res);
        }, 1000
    );
}

function taskC(a, cb) {
    setTimeout(
        () => {
            let res = a * -1;
            cb(res);
        }, 2000
    );
}

taskA(1, 2, (res) => { console.log("task1 :", res) }); // 1과 2를 인자로 전달한 후 1+2 연산실행, 이후 cb에 해당하는 콜백 함수를 실행함.
taskB(2, (res) => console.log("task2 :", res)); // 비동기이므로 task b가 1초 뒤이므로 먼저 실행됨.
taskC(3, (res) => console.log("task3 :", res));

taskA(1, 2, (res_A) => {
    console.log("taskA result :", res_A);
    taskB(res_A, (res_B) => {
        console.log("taskB result :", res_B);
        taskC(res_B, (res_C) => {
            console.log("taskC result :", res_C);
        });
    });
});
console.log("코드 끝");