// הגדרה של האינפוט
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

// הגדרה של כפתורי הפעולות 
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const hilook = document.getElementById("hilook");
const kefel = document.getElementById("kefel");

// הגדרה של מספרים

const numbers = document.getElementsByClassName("numbers");

// הגדרת בעת לחיצה על מקשי הפעולות 

plus.addEventListener("click", function () {
    let sum = Number(input1.value) + Number(input2.value)
    console.log(sum);
})

minus.addEventListener("click", function () {
    let sum = Number(input1.value) - Number(input2.value)
    console.log(sum);
})

hilook.addEventListener("click", function () {
    let sum = Number(input1.value) / Number(input2.value)
    console.log(sum);

})

kefel.addEventListener("click", function () {
    let sum = Number(input1.value) * Number(input2.value)
    console.log(sum);
})



for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        input1.value+=numbers[i].innerText
    })
}



















