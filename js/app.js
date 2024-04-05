// Loader ---------------------------------------------
let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('loader_hide')
    setTimeout(() => {
        mask.remove()
    }, 1000)
});

// Slider ---------------------------------------------
const sliderBlock = document.querySelector('.slider-blocks')
const nextSlideBtn = document.querySelector('.slider-arrow__right')
const prevSlideBtn = document.querySelector('.slider-arrow__left')

// все элементы блока slider-blocks (HTML) превращаем в массив для метода forEach
const sliderItems = Array.from(sliderBlock.children)
// -------- некст слайд по нажатии на картинки ----------
// пройдемся по всем элементам в нутри блока
sliderItems.forEach(function (slide, index) {
    if (index !== 0) slide.classList.add('slider_hide')
    slide.dataset.index = index // добавляем индексы всем слайдам
    // добавляем data атриут активным слайдам для кнопок некст
    sliderItems[0].setAttribute('data-active', '')
    // Клик по слайду
    slide.addEventListener('click', function () {
        showSlide('next')
    })
});
// Создаем функцию события для кнопки NEXT
nextSlideBtn.addEventListener("click", function () {
    showSlide('next')
});
// Создаем функцию события для кнопки PREV
prevSlideBtn.addEventListener("click", function () {
    showSlide('prev')
});
// Обединяем код в функции для более читабельности
function showSlide(options) {
    // скрываем текущий слайд
    const activeSlide = sliderBlock.querySelector('[data-active]');
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

// Forms ---------------------------------------------


function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove()
        parent.classList.remove('error')
    }
}

function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')
    errorLabel.classList.add('error-label')
    errorLabel.textContent = text
    parent.classList.add('error')
    parent.append(errorLabel)
}

function validation(form) {
    const allInputs = form.querySelectorAll('input');
    let result = true;

    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    for (const input of allInputs) {
        removeError(input)       

        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength) {
                removeError(input)
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input)
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }
        }

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'Поле не заполнено')
                result = false
            }
        }

        // if (input.dataset.usermail) {
        //     removeError(input)
        //     if (input.value.match(mailformat)) {
        //         createError(input, 'Valid email address!')           
        //         return true;
        //     } else {
        //         createError(input, 'You have entered an invalid email address!') 
                
        //         return false;
        //     }
        // }

    }
    return result
}

document.querySelector('#add-form').addEventListener('submit', function (event) {
    event.preventDefault()
    if (validation(this) == true) {
        alert('Форма успешно заполнена!')
    }
})
