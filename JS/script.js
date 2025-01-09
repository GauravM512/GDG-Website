// Common Swiper Configuration
const swiperConfig = {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    effect: "slide",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
};

// Gallery Swiper
const gallerySwiper = new Swiper(".mySwiper", {
    ...swiperConfig,
    slidesPerView: 1,
});

// Profile Swiper
const profileSwiper = new Swiper(".myProfileSwiper", {
    ...swiperConfig,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// ...existing code...

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            // clearBox('myDiv_id1')
        } else {
            panel.style.display = "block";
            let firstElementChild = panel.children[0].id;
            let secondElementChild = panel.children[1].id;
            // console.log(firstElementChild);
            // console.log(secondElementChild);
            printStringByLetter(secondElementChild, firstElementChild);
        }
    });
}
var images = document.querySelectorAll(".faq-icon");
images.forEach(function (image) {
    image.addEventListener("click", changeImage);
});

function changeImage() {
    if (this.src.match("chevron-down")) {
        this.src = "https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-up.svg";
    } else {
        this.src = "https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg";
    }
}

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

let accordianHead = Array.from(document.querySelectorAll(".accordian_head"));

accordianHead.map((item) =>
    item.addEventListener("click", () => {
        closeAllAccordian(item);
    })
);

function closeAllAccordian(current_target) {
    // console.log(current_target);
    accordianHead.map((item) => {
        if (current_target !== item) {
            const accordianBody = item.nextElementSibling;
            const togglerBtn = item.firstElementChild;
            togglerBtn.classList.remove("active");
            accordianBody.classList.remove("active_body");
        } else {
            const accordianBody = current_target.nextElementSibling;
            const togglerBtn = item.firstElementChild;
            togglerBtn.classList.toggle("active");
            accordianBody.classList.toggle("active_body");
        }
    });
}

document.querySelectorAll('.domain-card-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetModal = document.querySelector(this.getAttribute('data-bs-target'));
        const modal = new bootstrap.Modal(targetModal);
        
        // Cleanup when modal is hidden
        targetModal.addEventListener('hidden.bs.modal', () => {
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }, { once: true });

        modal.show();
    });
});

const teams = {
    management: [
        { name: "Rameshwar Mate", role: "Lead", email: "rameshwarmate.rm@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Prajakta Bawale", role: "Member", email: "bawaleprajaktadattatray@mitacsc.edu.in", img: "assets/members-dp/dp.png" },
        { name: "Sneha Mirajkar", role: "Member", email: "msneha030504@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Saniya Tapkir", role: "Member", email: "tapkirsaniya8383@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Piyush Tiwatne", role: "Member", email: "piyushtiwatne@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Nagesh Bhure", role: "Member", email: "5275903@mitacsc.edu.in", img: "assets/members-dp/dp.png" }
    ],
    technical: [
        { name: "Sanchet Kolekar", role: "Lead", email: "sanchetkolekar237@gmail.com", img: "assets/members-dp/Sanchet_dp.png" },
        { name: "Gaurav Mandal", role: "Member", email: "gauravm5612@gmail.com", img: "assets/members-dp/Gaurav_dp.png" },
        { name: "Ajiinkya Shelke", role: "Member", email: "ajinkyashelke1000@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Himanshu Gajare", role: "Member", email: "gajarehemanshu249@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Harshwardhan Sonawane", role: "Member", email: "harshwardhansonawane099@gmail.com", img: "assets/members-dp/dp.png" }
    ],
    design: [
        { name: "Rohan Katkar", role: "Lead", email: "rohankatkar176@gmail.com", img: "assets/members-dp/Rohan_Katkar_dp.png" },
        { name: "Richa Khandekar", role: "Member", email: "richakhandekar31@gmail.com", img: "assets/members-dp/dp.png" },
        { name: "Shweta More", role: "Member", email: "shwetasbmore@gmail.com", img: "assets/members-dp/dp.png" }
    ],
    community: [
        { name: "Ganesh Gunthal", role: "Lead", email: "ganeshgunthal1009@gmail.com", img: "assets/members-dp/dp.png" }
    ]
};

function generateProfileCards(team) {
    return team.map(member => `
        <div class="profile-card">
            <img src="${member.img}" alt="" class="w-50">
            <h4 class="text-center py-2">${member.name}</h4>
            <h6 class="text-center py-2">${member.role}</h6>
            <a href="mailto:${member.email}" class="text-center d-block">${member.email}</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#managementmodal .profile-cards-container').innerHTML = generateProfileCards(teams.management);
    document.querySelector('#techmodal .profile-cards-container').innerHTML = generateProfileCards(teams.technical);
    document.querySelector('#designmodal .profile-cards-container').innerHTML = generateProfileCards(teams.design);
    document.querySelector('#communitymodal .profile-cards-container').innerHTML = generateProfileCards(teams.community);
});