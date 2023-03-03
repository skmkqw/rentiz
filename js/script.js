
/*--------------------BURGER--------------------*/

const menu = document.querySelector('.menu-body')
const menuBtn = document.querySelector('.menu-icon')
const body = document.querySelector('body')

if (menu && menuBtn) {
	menuBtn.addEventListener('click', function () {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', function () {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	});
}

/*--------------------/BURGER--------------------*/


/*--------------------FILTER--------------------*/

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.filter-block')

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.filter-dropdown').classList.toggle('active');
			item.querySelector('.filter-icon').classList.toggle('active');

			if (event.target.classList.contains('filter-item')) {
				item.querySelector('.filter-value').textContent = event.target.textContent;
			}
		})
	})
}

/*--------------------/FILTER--------------------*/


/*--------------------LOGIN--------------------*/

const loginBtn = document.querySelector('#login')
const signBtn = document.querySelector('#signup')
const loginExit = document.querySelector('.login-exit')
const signExit = document.querySelector('.signup-exit')
const login = document.querySelector('.login')
const signup = document.querySelector('.signup')
const logTransf = document.querySelector('.login-transfer-link')
const signTransf = document.querySelector('.signup-transfer-link')

if (loginBtn) {
	loginBtn.addEventListener('click', function () {
		login.classList.toggle('active')
		body.classList.add('lock')
	})
	loginExit.addEventListener('click', function () {
		login.classList.remove('active')
		body.classList.remove('lock')
	})
}
if (signBtn) {
	signBtn.addEventListener('click', function () {
		signup.classList.toggle('active')
		body.classList.add('lock')
	})
	signExit.addEventListener('click', function () {
		signup.classList.remove('active')
		body.classList.remove('lock')
	})
}
if (logTransf || signTransf) {
	logTransf.addEventListener('click', function () {
		login.classList.remove('active')
		signup.classList.add('active')
	})
	signTransf.addEventListener('click', function () {
		login.classList.add('active')
		signup.classList.remove('active')
	})
}

/*--------------------/LOGIN--------------------*/

/*--------------------POULAR-SLIDER--------------------*/

const popularSlider = new Swiper('.popular-swiper', {
	spaceBetween: 20,
	allowTouchMove: true,
	simulateTouch: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-popular-next',
		prevEl: '.swiper-popular-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});

/*--------------------/POPULAR-SLIDER--------------------*/

/*--------------------REVIEWS-SLIDER--------------------*/

const revSlider = new Swiper('.rev-slider', {
	spaceBetween: 20,
	autoHeight: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-rev-next',
		prevEl: '.slider-rev-prev',
	},
});

/*--------------------/REVIEWS-SLIDER--------------------*/

/*--------------------GALLERY--------------------*/

const galleryItems = document.querySelectorAll('.gallery-item')

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}

/*--------------------/GALLERY--------------------*/