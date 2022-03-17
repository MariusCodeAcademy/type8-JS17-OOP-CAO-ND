console.log('main');

const formEl = document.forms[0];

formEl.addEventListener('submit', (event) => {
  // stabdom perkrovima ir issiutima per html
  event.preventDefault();
  console.log('js in controll');
  const inputVal = formEl.elements.fullName.value;
  console.log('inputVal ===', inputVal);

  const proc = new ProccessInput(inputVal);
  console.log('proc ===', proc);
});
