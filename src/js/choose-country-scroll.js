const dropDownBtn = document.querySelector('.js-dropbtn');
const ulDropDownEl = document.querySelector('.country__list');
dropDownBtn.addEventListener('click', onBtnClickOpenDropDown);

export default function onBtnClickOpenDropDown(event) {
ulDropDownEl.classList.toggle('is-shown');

}
onBtnClickOpenDropDown();
