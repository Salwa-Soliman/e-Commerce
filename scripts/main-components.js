var header = document.querySelector('header');
var footer = document.querySelector('footer');
var scrollTopBtn = document.querySelector('.scroll-top');
var mainLinks = document.querySelectorAll('.main-navbar a');
var sections = document.querySelectorAll('section');
var count = 0;

new WOW().init();

window.addEventListener('scroll', () => {

    header.style.backgroundColor = (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) ?
        'white' : 'transparent';

    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        controlScrollBtn(1, 'block');

    } else {
        controlScrollBtn(0, 'none');
    }
})

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

function controlScrollBtn(op, displayStyle) {
    scrollTopBtn.style.opacity = op;
    setTimeout(() => {
        scrollTopBtn.style.display = displayStyle;
    }, 400);
}

function changeView(i) {
    //Activate Link
    document.querySelector('.active-link').classList.remove('active-link');
    mainLinks[i].classList.add('active-link');
    //Show Section
    document.querySelector('.active-section').classList.remove('active-section')
    sections[i].classList.add('active-section');
}

// if (header.innerHTML == '') {
//     header.innerHTML = `<div class="free-shipping">
// <p>Free Shipping | Free Returns</p>
// </div>
// <div class="container flex">
// <!-- Left Navbar  -->
// <ul class="navbar flex">
//     <li class="nav-item"><a class="shop-all" href="#" onclick="showProducts('all', 0)">Shop All</a></li>
//     <li class="nav-item"><a class="candles-link" href="#" onclick="showProducts('candle',1)">Candles</a></li>
//     <li class="nav-item"><a class="oils-link" href="#" onclick="showProducts('oil',2)">Oils</a></li>
//     <li class="nav-item"><a class="diffusers-link" href="#" onclick="showProducts('diffuser',3)">Diffuser</a></li>
//     <li class="nav-item">
//         <a class="gifts-link" href="#" onclick="showProducts('gift',4)" ">Gifts</a></li>
// </ul>
// <!-- Logo  -->
// <div class="logo ">
//     <img src="../images/casa-logo-removebg-preview.png " alt=" " onclick="changeView(0) ">
// </div>
// <!-- Right Navbar  -->
// <ul class="navbar flex main-navbar ">
//     <li class="nav-item ">
//         <a href="./index.html " id="home ">Home</a>
//     </li>
//     <li class="nav-item ">
//         <a href="./about.html " id="about ">About</a>
//     </li>
//     <li class="nav-item ">
//         <a href="./products.html " id="products ">Products</a>
//     </li>
//     <li class="nav-item ">
//         <a href="./contact.html " id="contact ">Contact Us</a>
//     </li>
//     <li class="nav-item ">
//         <div class="cart wow slideInRight " data-wow-duration="1.5s " data-wow-delay=".3s ">
//             <i class="fa fa-shopping-cart fa-3x "></i>
//             <p class="products-count ">0</p>
//         </div>
//     </li>
// </ul>
// </div>`
// }

// if (footer.innerHTML == '') {
//     footer.innerHTML = `<div class="container ">
//     <div class="sections grid ">
//         <div class="shop ">
//             <h4>Shop</h4>
//             <ul>
//                 <li>
//                     <p>Shop All</p>
//                 </li>
//                 <li>
//                     <p>Gifts</p>
//                 </li>
//                 <li>
//                     <p>Diffuser</p>
//                 </li>
//                 <li>
//                     <p>Candels</p>
//                 </li>
//                 <li>
//                     <p>Essential Oils</p>
//                 </li>
//             </ul>
//         </div>
//         <div class="about ">
//             <h4>About</h4>
//             <ul>
//                 <li>
//                     <p>Mission</p>
//                 </li>
//                 <li>
//                     <p>Story</p>
//                 </li>
//                 <li>
//                     <p>Blog</p>
//                 </li>
//                 <li>
//                     <p>Contact Us</p>
//                 </li>
//             </ul>
//         </div>
//         <div class="help ">
//             <h4>Help</h4>
//             <ul>
//                 <li>
//                     <p>Product Care</p>
//                 </li>
//                 <li>
//                     <p>FAQs</p>
//                 </li>
//                 <li>
//                     <p>Returns and Refunds</p>
//                 </li>
//                 <li>
//                     <p>Shipping</p>
//                 </li>
//             </ul>
//         </div>
//         <div class="contact ">
//             <h4>Contact</h4>
//             <ul class="contact ">
//                 <li>
//                     <p>351 XYZ Street Cairo, Egypt</p>
//                 </li>
//                 <li><a href="tel:01110822177 ">01069908891</a></li>
//                 <li><a href="mailto:salwaa.soliman96@gmail.com?subject=Redirected From RGL&body=Copy your request here ">salwaa.soliman96@gmail.com</a></li>
//                 <li class="social ">
//                     <ul class="social-media ">
//                         <li class="social ">
//                             <a href="https://www.facebook.com " target="_blank ">
//                                 <i class="fa fa-facebook "></i>
//                             </a>
//                         </li>
//                         <li class="social ">
//                             <a href="https://wa.me/01069908891?text=Hi there, I 'm Texting you regarding ...?" target="_blank">
//                                 <i class="fa fa-whatsapp"></i>
//                             </a>
//                         </li>
//                         <li class="social">
//                             <a href="https://www.linkedin.com/in/mohabd28eg/" target="_blank">
//                                 <i class="fa fa-linkedin-in"></i>
//                             </a>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     </div>

//     <hr>

//     <p class="copyright text-center">
//         Copyright &copy; 2022
//         <a href="linkedin.com/in/salwa-a-soliman/" target="_blank">Salwa A. Soliman.</a> All rights reserved
//     </p>
// </div>`
// }