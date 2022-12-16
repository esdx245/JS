function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                let res = a + b;
                resolve(res);
            }, 3000
        );
    });
};

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                let res = a * 2;
                resolve(res);
            }, 1000
        );
    });
};

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                let res = a * -1;
                resolve(res);
            }, 2000
        );
    });
};

taskA(5, 1).then((a_res) => {
    console.log("a result :", a_res);
    return taskB(a_res); // taskA의 resolve된 값을 taskB의 인자로 전달
}).then((b_res) => {
    console.log("b result :", b_res);
    return taskC(b_res); // taskB의 resolve된 값을 taskC의 인자로 전달
}).then((c_res) => {
    console.log("c result :", c_res);
}); // 이를 then chainig이라고 함.
// 장점은 다음과 같다.

const taska_res = taskA(5, 1).then((a_res) => {
    console.log("a result :", a_res);
    return taskB(a_res);
});
const taskb_res = taska_res.then((b_res) => {
    console.log("b result :", b_res);
    return taskC(b_res);
});
const taskc_res = taskb_res.then((c_res) => {
    console.log("c result :", c_res);
});
//각각의 코드를 끊어서 사용할 수 있고 또 이를 다른 곳에서 활용할 수 있음. 또한 중간에 다른 작업 가능

// taskA(3, 4, (a_res) => {
//     console.log("taskA result :", a_res);
//     taskB(a_res, (b_res) => {
//         console.log("taskB result :", b_res);
//         taskC(b_res, (c_res) => {
//             console.log("taskC result :", c_res);
//         });
//     });
// });