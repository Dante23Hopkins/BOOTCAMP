const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn,);

if (BMIMark > BMIJohn) {
    console.log('Marks BMI (${BMIMark}) is higher than Johns (${BMIJohn})!')

} else {
    console.log('Johns BMI (${BMIJohn}) is higher than Marks (${BMIMark})!')
    
}