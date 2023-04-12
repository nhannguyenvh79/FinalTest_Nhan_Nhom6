function inputNumber() {
    let num = Number(prompt("Nhập một số nguyên từ 1 đến 10:"));
    if (num < 1 || num > 10 || isNaN(num) || num % 1 != 0) {
      alert("Invalid input! Vui lòng nhập một số nguyên từ 1 đến 10:");
      return inputNumber();
    };
    return num;
  }


let printTriangle = '';
function numberOneTriangle (a) {
    for (let i = 0; i <a; i++) {
        printTriangle += '*';
        console.log(printTriangle);
        let $triangle = document.createElement('p');
            $triangle.innerHTML = `${printTriangle}`;
        document.body.append($triangle);
    };
    return alert(`Bạn vừa in ra màng hình một hình tam giác với ${a} hàng`);
};

numberOneTriangle(inputNumber());