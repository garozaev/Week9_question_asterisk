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
  total.textContent = (message); 
  console.log(`Через год у вас будет` + total +  ` руб. с учетом процентной ставки 7% годовых`)
});
