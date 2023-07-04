const targetElement = document.querySelector('.link-text');
const cardComponent = document.querySelector('.card');
const imgComponent = document.querySelector('.image');

targetElement.style.visibility = 'hidden';

cardComponent.addEventListener('mouseover', () => {
    targetElement.style.visibility = 'visible';
});

cardComponent.addEventListener('mouseout', () => {
    targetElement.style.visibility = 'hidden';
});

targetElement.addEventListener('mouseover', () => {
    targetElement.style.visibility = 'visible';
    imgComponent.classList.add('changed-img');
});
targetElement.addEventListener('mouseout', () => {
    imgComponent.classList.remove('changed-img');
});
