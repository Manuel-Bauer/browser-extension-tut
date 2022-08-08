'use strict';

/* SELECTORS */
const getImgBtn = document.querySelector('.button-img');
const loadingSpinner = document.querySelector('.spinner');

/* LOADING SPINNER FUNCTIONS */
const displayLoading = () => {
  loadingSpinner.style.display = 'block';
};
const hideLoading = () => {
  loadingSpinner.style.display = 'none';
};

/* FETCH DOGS */
const fetchData = async () => {
  displayLoading();
  const result = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await result.json();
  document.querySelector('.img-dog').src = data.message;
  hideLoading();
};

/* EVENT LISTENER */
getImgBtn.addEventListener('click', () => {
  fetchData();
});

fetchData();
