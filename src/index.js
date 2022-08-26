import getEvens from './js/fetchEvens';
import cards from './template/cards.hbs';
const inputEl = document.querySelector('.sirch');
const ulEl = document.querySelector('.list');

inputEl.addEventListener('click', onInputClick);
async function onInputClick(event) {
  const { _embedded } = await getEvens('', 'UK');
  console.log(_embedded.events);

  const listItem = _embedded.events.map(item => cards(item)).join('');
  ulEl.insertAdjacentHTML('beforeend', listItem);
}
