// function isPositive(num, resolve, reject) {
//     setTimeout(() => {
//         if (typeof num === 'number') {
//             // 성공 resolve
//             resolve(num >= 0 ? '양수' : '음수');
//         } else {
//             // 실패 reject
//             reject('숫자가 아닙니다.');
//         }
//     }, 2000);
// }

function isPositiveP(num) {
    const executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof num === 'number') {
                // 성공 resolve
                resolve(num >= 0 ? '양수' : '음수');
            } else {
                // 실패 reject
                reject('숫자가 아닙니다.');
            }
        }, 2000);
    }
    const asyncTask = new Promise(executor);
    return asyncTask;
}

let res = isPositiveP([]);
res.then((res) => console.log("성공", res)).catch((err) => console.log("실패", err)); // 여기서 then과 catch 위치를 바꾸면 어떻게 되는가?