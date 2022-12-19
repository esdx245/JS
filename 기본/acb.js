let value = 100;
function pr() {
    return new Promise((resolve, reject) => {
        console.log("pr0", value);
        setTimeout(() => {
            console.log("pr1", value);
            value = 200;
            console.log("pr2", value);
            resolve(value);
        });
    });
}
(async () => {
    const output = await pr();
    console.log("output", output);
})()

value = 10000;

//example of expression
function a() {
    return undefined
}
if (a = a + 1 > 2) {

}

function aaa() {
    return 1;
}

const bbb = function () {
    return 2;
}



