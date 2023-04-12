function check(number) {
    if (number <= 3) {
        return true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
    }
    return true;
}

let $a = document.getElementById('a');
let $b = document.getElementById('b');
let $btn = document.getElementById('btn');
let $sum = document.getElementById('sum');


$btn.onclick = function () {
    let sum = 0;
    if (Math.ceil($a.value) < 0 || Math.ceil($b.value) < 0 || Math.ceil($a.value) >= Math.ceil($b.value)) {
        $sum.innerHTML = `vui lòng nhập lại a và b`
    } else {
        for (let i = Math.ceil($a.value); i <= Math.ceil($b.value); i++) {
            if (check(i)) {
                sum += i;
            }
        }
        $sum.innerHTML = `${sum}`
    }
}