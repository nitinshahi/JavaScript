'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModel = function () {
  // console.log(`button clicked!!!`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (
    e.key === 'Escape' ||
    (e.key === 'a' && !modal.classList.contains('hidden'))
  )
    closeModal();
});

// btnsOpenModal.addEventListener('click', function () {
//   modal.classList.remove('hidden');
// });
