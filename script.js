let a = document.getElementById("11111");
let b = document.getElementById("22222");
a.onchange = function (qwe) {
    console.log(qwe);
    b.textContent = qwe.target.value;
    b.textContent = "У тебя в штанах " + qwe.target.value;
};