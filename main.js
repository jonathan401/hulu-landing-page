const formWrapper = document.querySelector('.form-wrapper');
const main = document.querySelector('main');
const closeBtn = document.querySelector('.cancel');
const formTrigger = document.querySelector('.form-trigger');

formTrigger.addEventListener('click', () => {
  if (formWrapper.classList.contains('hidden')) {
    formWrapper.classList.remove('hidden');
  }
});

formTrigger.addEventListener('click', () => {
  formWrapper.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  formWrapper.classList.add('hidden');
});
