const currencyTable = document.querySelector('#table1');
const comissionTable = document.querySelector('#table2');
const currencyTableIcon = document.querySelector('.table__right_icon_close');
const comissionTableIcon = document.querySelector('.table__left_icon_close');


currencyTableIcon.addEventListener('click', toggleMainTable);
comissionTableIcon.addEventListener('click', toggleMainTable);


function toggleMainTable() {
    console.log('Hola');
    currencyTable.classList.toggle('inactive');
    comissionTable.classList.toggle('inactive');
    return
};