
const featurePoints = document.querySelectorAll('.feature-points li');
let index = 0;

function showNextFeature() {
  featurePoints[index].classList.remove('active');
  index = (index + 1) % featurePoints.length;
  featurePoints[index].classList.add('active');
}

setInterval(showNextFeature, 5000); // Change feature every 5 seconds
