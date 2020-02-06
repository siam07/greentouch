document.getElementById('overlayOpen').addEventListener('click',
    function(){
        document.querySelector('.descriptionOverlay').style.display = 'block';
});
document.getElementById('overlayOpen').addEventListener('click',
    function(){
        document.querySelector('.descriptionBg').style.display = 'block';
});
document.getElementById('overlayOpen').addEventListener('click',
    function(){
        document.querySelector('.swiper-container2').style.position = 'fixed';
});
document.getElementById('overlayOpen').addEventListener('click',
    function(){
        document.querySelector('.swiper-container').style.position = 'fixed';
});



document.getElementById('close').addEventListener('click',
    function(){
        document.querySelector('.descriptionOverlay').style.display = 'none';
});
document.getElementById('close').addEventListener('click',
    function(){
        document.querySelector('.descriptionBg').style.display = 'none';
});
document.getElementById('close').addEventListener('click',
    function(){
        document.querySelector('.swiper-container2').style.position = 'absolute';
});
document.getElementById('close').addEventListener('click',
    function(){
        document.querySelector('.swiper-container').style.position = 'relative';
});
document.getElementById('close').addEventListener('click',
    function(){
        window.scrollTo(0,0);
});