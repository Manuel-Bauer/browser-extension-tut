'use strict';

const getImgBtn = document.querySelector('.button-img');
const loaderContainer = document.querySelector('.loader-container');

const displayLoading = () => {
  loaderContainer.style.display = 'block';
};

const hideLoading = () => {
  loaderContainer.style.display = 'none';
};

const fetchData = async () => {
  displayLoading();
  const result = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await result.json();
  document.querySelector('.img-dog').src = data.message;
  hideLoading();
};

getImgBtn.addEventListener('click', () => {
  fetchData();
});

fetchData();
