const image = document.querySelectorAll('.thumb')
image.forEach(function(e,i){
    image[i].addEventListener('click',function(){
        e.parentElement.previousElementSibling.setAttribute('src',e.currentSrc)
        image.forEach(function(thumb){
            thumb.classList.remove('active')
        })
        e.classList.add('active')
    })
})