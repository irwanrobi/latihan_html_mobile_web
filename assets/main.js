// tangkap element mobile menu
var mobileMenu = document.getElementById('mobile_menu');

// check apakah element berhasil ditangkap
console.log(mobileMenu);

var show = false;

console.log(show);

// kita bikin function untuk mengontrol mobile menu
const showMobileMenu = () => {
    // mengontrol style mobile menu

    if (show == false) {
        // mobileMenu.style.transform = 'translateX(0)';
        mobileMenu.style.top = '70px';
        mobileMenu.style.opacity = '1';

        // ubah show menjadi true
        show = true;
    } else {
        // mobileMenu.style.transform = 'translateY(-300px)';
        mobileMenu.style.top = '-300px';
        mobileMenu.style.opacity = '1';

        // ubah show menjadi true
        show = false;
    }
}



const scrollToHome = () => {
    var sectionName = document.getElementById("my_home");
    sectionName.scrollIntoView({
        behavior: 'smooth',
        offsetTop: 20
    });
}

const scrollToAbout = () => {
    var sectionName = document.getElementById("my_about");
    sectionName.scrollIntoView({
        behavior: 'smooth',
        offsetTop: 20
    });
}

const scrollToContact = () => {
    var sectionName = document.getElementById("my_contact");
    sectionName.scrollIntoView({
        behavior: 'smooth',
        offsetTop: 20
    });
}

const scrollToGallery = () => {
    var sectionName = document.getElementById("my_gallery");
    sectionName.scrollIntoView({
        behavior: 'smooth',
        offsetTop: 20
    });
}



// MODAL

const showModal = () => {

    // menangkap element sub_modal
    var subModal = document.getElementById('sub_modal');
    
    // kita atur styling dari sub_modal
    subModal.style.top = '0%';

}

const closeModal = () => {

    // menangkap element sub_modal
    var subModal = document.getElementById('sub_modal');

    // kita atur styling dari sub_modal
    subModal.style.top = '-150%';

}

const thankYou = () => {

    window.location.href = "/thankyou.html";
    
    var subModal = document.getElementById('sub_modal');
    subModal.style.transform = 'translateY(-100%)';
    subModal.style.transitionDelay = '5s';

}

const backToHome = () => {

    window.location.href = "/";

}


















// TIDAK DIPAKAI

function showModalThankYou() {

    // menangkap element sub_modal
    var subModal = document.getElementById('sub_modal');
    var ModalThankYou = document.getElementById('modal_thank_you');

    // ModalThankYou

    subModal.style.transform = 'scale(0)';
    ModalThankYou.style.transitionDelay = '.5s';
    ModalThankYou.style.transform = 'scale(1)';

}

function closeModalThankYou() {

    // menangkap element sub_modal
    var ModalThankYou = document.getElementById('modal_thank_you');

    // kita atur styling dari sub_modal
    // subModal.style.marginTop = '-1000px';
    ModalThankYou.style.transform = 'scale(0)';

}