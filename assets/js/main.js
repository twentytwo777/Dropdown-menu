var main__dd = document.querySelector('.main__dd');
var dd_ml = document.querySelector('.dd_ml');
var dd = document.querySelector('.dd');

main__dd.addEventListener('click', function(){
    dd_ml.classList.toggle('active');
    window.setTimeout(function(){
        dd_ml.classList.toggle('activef')
        dd.classList.toggle('actived')
    }, 100);
});