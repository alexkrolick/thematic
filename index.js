document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#day').addEventListener('click', function(event) {
    document.querySelector('.pic').classList.remove('night');
    document.querySelector('#night').classList.remove('active');
    event.target.classList.add('active');
  });
  document.querySelector('#night').addEventListener('click', function(event) {
    document.querySelector('.pic').classList.add('night');
    document.querySelector('#day').classList.remove('active');
    event.target.classList.add('active');
  });
  document.querySelector('.color-menu #primary').addEventListener('change', function(event) {
    document.querySelectorAll('.pic .primary').forEach(function(el) {el.style.fill = event.target.value});
  });
  document.querySelector('.color-menu #secondary').addEventListener('change', function(event) {
    document.querySelectorAll('.pic .secondary').forEach(function(el) {el.style.fill = event.target.value});
  });
  document.querySelector('.color-menu #highlight').addEventListener('change', function(event) {
    document.querySelectorAll('.pic .highlight').forEach(function(el) {el.style.fill = event.target.value; el.style.stroke = event.target.value});
  });
  document.querySelectorAll('.pic .primary').forEach(function(el) {
    el.addEventListener('click', function(event) {
      document.querySelector('.color-menu #primary').click();
    })
  });
  document.querySelectorAll('.pic .secondary').forEach(function(el) {
    el.addEventListener('click', function(event) {
      document.querySelector('.color-menu #secondary').click();
    })
  });
  document.querySelectorAll('.pic .highlight').forEach(function(el) {
    el.addEventListener('click', function(event) {
      document.querySelector('.color-menu #highlight').click();
    })
  });
});

function recolor(el) {

}