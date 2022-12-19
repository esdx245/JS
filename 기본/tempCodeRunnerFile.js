function taskA(a, b) {
    const execute = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                let res = a + b;
                resolve(res);
            }, 2000
        );
    });
    return execute
}

taskA(1, 2).then((res) => console.log(res));
let result = taskA(1, 2).then((res) => res);
console.log(result);