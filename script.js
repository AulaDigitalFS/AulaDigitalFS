
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  lightbox.style.display = 'none';
});
