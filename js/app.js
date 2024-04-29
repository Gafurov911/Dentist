// Loader ---------------------------------------------
let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('loader_hide')
    setTimeout(() => {
        mask.remove()
    }, 1000)
});

// Forms ---------------------------------------------
const allDomains = ["google", "yandex", "mail", "gmail", "inbox"]
const phoneNum = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

        if (input.dataset.email) {
            if (!input.value.includes('@')) {
                removeError(input)
                createError(input, `Введен некорректный адрес электронной почты`)
                result = false
            } else {
                const domain = input.value.split('@')[1].split('.')[0] //yandex,google
                // console.log(domain)
                if (!allDomains.includes(domain)) {
                    createError(input, `Недопустимый домен почты: ${allDomains}`)
                    result = false
                }
            }
        }

        if (input.dataset.phone) {

            if (input.value.match(phoneNum)) {
                removeError(input)

            } else {
                removeError(input)
                createError(input, `Введен некорректный номер телефона`)
                result = false
            }

            // if(!input.value.includes('@')) {
            //     removeError(input)
            //     createError(input, `Введен некорректный адрес электронной почты`)                
            //     result = false
            // } else {
            //     const domain = input.value.split('@')[1].split('.')[0] //yandex,google
            //     // console.log(domain)
            //     if(!allDomains.includes(domain)) {
            //         createError(input, `Недопустимый домен почты: ${allDomains}`)                    
            //         result = false
            //     }
            // }


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

// Search Box----------------------------
const searchToggle = document.querySelector(".searchToggle")
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("actives");
});

// Burger menu----------------------------
const burgerOpen = document.querySelector('.burger_open')
const burgerClose = document.querySelector('.burger_close')
const navMenu = document.querySelector('.nav-menu__list')
const navLogo = document.querySelector('.nav-logo')
const body = document.querySelector('body')

burgerOpen.addEventListener('click', () => {
    navMenu.classList.add('active_menu')
    navLogo.classList.add('close_logo')
})
burgerClose.addEventListener('click', () => {
    navMenu.classList.remove('active_menu')
    navLogo.classList.remove('close_logo')
})

// body.addEventListener("click", e => {
//   let clickedElm = e.target;

//   if (!clickedElm.classList.contains("burger_open") && !clickedElm.classList.contains("nav-menu__list")) {
//     navMenu.classList.remove("active_menu");
//   }
// });

// Back to Top buttons-----------------
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector(".back-to-top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('to_top_active')
        } else {
            backToTop.classList.remove('to_top_active')
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Header Actives and passive
(function () {
    const headerAbout = document.querySelector('.header-about');
    const headerNav = document.querySelector('.header-nav');
    const logoSpans = document.querySelector('.logo_spans');
    const navigation = document.querySelector('.navigation');
    window.onscroll = () => {
        if (window.pageYOffset > 500) {
            headerAbout.classList.add('header-about_scroll')
            headerNav.classList.add('header_scroll')
            logoSpans.classList.add('logo_spans_scroll')
            navigation.classList.add('navigation_scroll')
        } else {
            headerAbout.classList.remove('header-about_scroll')
            headerNav.classList.remove('header_scroll')
            logoSpans.classList.remove('logo_spans_scroll')
            navigation.classList.remove('navigation_scroll')
        }
    };
})();

// Scrolling Animations
AOS.init();