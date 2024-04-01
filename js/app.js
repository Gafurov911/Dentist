// Loader -------------
let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('loader_hide')
    setTimeout(() => {
        mask.remove()
    },1000)
});

// Slider -----------
const sliderBlock = document.querySelector('.slider-blocks')
const nextSlideBtn = document.querySelector('.slider-arrow__right')
const prevSlideBtn = document.querySelector('.slider-arrow__left')

// все элементы блока slider-blocks (HTML) превращаем в массив для метода forEach
const sliderItems = Array.from(sliderBlock.children)
// -------- некст слайд по нажатии на картинки ----------
// пройдемся по всем элементам в нутри блока
sliderItems.forEach(function (slide, index) {   
    if (index !== 0) slide.classList.add('slider_hide') // кроме индекса [0] скрываем другиe слайды    
    slide.dataset.index = index // добавляем индексы всем слайдам
    // добавляем data атриут активным слайдам для кнопок некст
    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайду
    slide.addEventListener('click', function() {   
        showSlide('next')
        
        // slide.classList.add('slider_hide') // по клику скрываем слайд      
        // slide.removeAttribute('data-active')   // по клику удаляем data атрибут
        // // определим индекс след слайда
        // const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1      
        // // дальше отобразим следующий по индексу слайд и удаляем у него класс hide
        // const nextSlide = sliderBlock.querySelector(`[data-index="${nextSlideIndex}"]`)
        // nextSlide.classList.remove('slider_hide')
        // nextSlide.setAttribute('data-active', '')
    })
});

// Создаем функцию события для кнопки NEXT
nextSlideBtn.addEventListener("click", function () {
    showSlide('next')
    // // скрываем текущий слайд
    // const activeSlide = sliderBlock.querySelector('[data-active]'); // находдим слайд с дата атрибутом
    // const slideIndex = +activeSlide.dataset.index;
    // activeSlide.classList.add('slider_hide');
    // activeSlide.removeAttribute('data-active');

    // // показываем след слайд
    // const nextSlideIndex = slideIndex + 1 === sliderItems.length ? 0 : slideIndex + 1;
    // const nextSlide = sliderBlock.querySelector(`[data-index="${nextSlideIndex}"]`)
    // nextSlide.classList.remove('slider_hide');
    // nextSlide.setAttribute('data-active', '');
});

// Создаем функцию события для кнопки PREV
prevSlideBtn.addEventListener("click", function () {
    showSlide('prev')
    // // скрываем текущий слайд
    // const activeSlide = sliderBlock.querySelector('[data-active]'); // находдим слайд с дата атрибутом
    // const slideIndex = +activeSlide.dataset.index;
    // activeSlide.classList.add('slider_hide');
    // activeSlide.removeAttribute('data-active');

    // // показываем след слайд
    // const nextSlideIndex = slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1;
    // const nextSlide = sliderBlock.querySelector(`[data-index="${nextSlideIndex}"]`)
    // nextSlide.classList.remove('slider_hide');
    // nextSlide.setAttribute('data-active', '');
});

// Обединяем код в функции для более читабельности
function showSlide(options) {
    // скрываем текущий слайд
    const activeSlide = sliderBlock.querySelector('[data-active]'); // находдим слайд с дата атрибутом
    const slideIndex = +activeSlide.dataset.index;
    activeSlide.classList.add('slider_hide');
    activeSlide.removeAttribute('data-active');

    // определим след слайд
    let nextSlideIndex
    if (options === 'next') {
        nextSlideIndex = slideIndex + 1 === sliderItems.length ? 0 : slideIndex + 1;
    } else if (options === 'prev') {
        nextSlideIndex = slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1;
    }
    // показываем след слайд
    const nextSlide = sliderBlock.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('slider_hide');
    nextSlide.setAttribute('data-active', '');
}
