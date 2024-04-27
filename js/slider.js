let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector('.slider_container')
let listItemDom = document.querySelector('.slider_container .list')
let thumbnailDom = document.querySelector('.slider_container .thumbnail')

nextDom.onclick = function() {
    showSlider('next')
}
prevDom.onclick = function() {
    showSlider('prev')
}
let timeRunning = 3000
let timeAutoNext = 4000
let runTimeOut
let runAutoRun = setTimeout( () => {
    nextDom.click()
}, timeAutoNext)

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.slider_container .list .item')
    let itemThumbnail = document.querySelectorAll('.slider_container .thumbnail .item')

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0])
        carouselDom.classList.add('next')
    } else {
        let positionLastItem = itemSlider.length - 1
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut)
    runTimeOut = setTimeout( () => {
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runAutoRun)
    runAutoRun = setTimeout( () => {
        nextDom.click()
    }, timeAutoNext)
}