const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let depositAsNumber = Number(deposit);

let growthAsNumber = Number(growth);

console.log(`Ваш депозит на начало расчётного периода составлял `+ deposit + currency + `.`);

console.log(`Согласно вашему тарифу, вам была присвоена ставка ` + interestRate + `%`);

console.log(`К концу расчётного периода прирост составил ` + growth + ` ` + currency + `. и на данный момент
ваш депозит составляет ` + `${depositAsNumber + growthAsNumber} ` + currency + `.`);

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  let message = (sum * 1.07);
  total.textContent = (`Через год у вас будет ${message} руб. на счету с учётом процентной ставки 7% годовых`);
  console.log(total.textContent); 
});