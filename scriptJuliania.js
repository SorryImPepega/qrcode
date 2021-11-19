function makeItEnglish() {

  const langRu = document.querySelector('.lang-ru');
  langRu.style.display = "none";
  const langEn = document.querySelector('.lang-en');
  langEn.style.display = "block";

  const lang = document.querySelector('.lang');
  lang.innerHTML = "ENG";

  const textBox = document.querySelector('.status-container-inner');
  textBox.innerHTML = `
    <div class="status-container-inner">
        <h4 class="title-h4 white status-title main-title">COVID-19 vaccination certificate</h4>
        <div class="status mt-12 text-plain small-text bold"><span class="status-value hide not-found"></span> <span
                class="status-value cert-name">Valid</span></div>
        <h4 class="title-h4 white status-title mt-12"><span class="num-symbol">№</span> <span class="unrz">9340 0000 2468
                0753</span></h4>
    </div>
    `;

  const mb4 = document.querySelector('.mb-4');
  mb4.innerHTML = `
    <div class="person-date mr-12">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.0625 7.1875C12.4077 7.1875 12.6875 6.90768 12.6875 6.5625C12.6875 6.21732 12.4077 5.9375 12.0625 5.9375C11.7173 5.9375 11.4375 6.21732 11.4375 6.5625C11.4375 6.90768 11.7173 7.1875 12.0625 7.1875Z"
            fill="#66727F"></path>
        <path
            d="M13.5 1.25H12.6875V0.625C12.6875 0.279813 12.4077 0 12.0625 0C11.7173 0 11.4375 0.279813 11.4375 0.625V1.25H8.59375V0.625C8.59375 0.279813 8.31394 0 7.96875 0C7.62356 0 7.34375 0.279813 7.34375 0.625V1.25H4.53125V0.625C4.53125 0.279813 4.25144 0 3.90625 0C3.56106 0 3.28125 0.279813 3.28125 0.625V1.25H2.5C1.1215 1.25 0 2.3715 0 3.75V13.5C0 14.8785 1.1215 16 2.5 16H7.28125C7.62644 16 7.90625 15.7202 7.90625 15.375C7.90625 15.0298 7.62644 14.75 7.28125 14.75H2.5C1.81075 14.75 1.25 14.1892 1.25 13.5V3.75C1.25 3.06075 1.81075 2.5 2.5 2.5H3.28125V3.125C3.28125 3.47019 3.56106 3.75 3.90625 3.75C4.25144 3.75 4.53125 3.47019 4.53125 3.125V2.5H7.34375V3.125C7.34375 3.47019 7.62356 3.75 7.96875 3.75C8.31394 3.75 8.59375 3.47019 8.59375 3.125V2.5H11.4375V3.125C11.4375 3.47019 11.7173 3.75 12.0625 3.75C12.4077 3.75 12.6875 3.47019 12.6875 3.125V2.5H13.5C14.1892 2.5 14.75 3.06075 14.75 3.75V7.3125C14.75 7.65769 15.0298 7.9375 15.375 7.9375C15.7202 7.9375 16 7.65769 16 7.3125V3.75C16 2.3715 14.8785 1.25 13.5 1.25Z"
            fill="#66727F"></path>
        <path
            d="M12.2188 8.4375C10.1337 8.4375 8.4375 10.1337 8.4375 12.2188C8.4375 14.3038 10.1337 16 12.2188 16C14.3038 16 16 14.3038 16 12.2188C16 10.1337 14.3038 8.4375 12.2188 8.4375ZM12.2188 14.75C10.823 14.75 9.6875 13.6145 9.6875 12.2188C9.6875 10.823 10.823 9.6875 12.2188 9.6875C13.6145 9.6875 14.75 10.823 14.75 12.2188C14.75 13.6145 13.6145 14.75 12.2188 14.75Z"
            fill="#66727F"></path>
        <path
            d="M13.125 11.5938H12.8438V10.9375C12.8438 10.5923 12.5639 10.3125 12.2188 10.3125C11.8736 10.3125 11.5938 10.5923 11.5938 10.9375V12.2188C11.5938 12.5639 11.8736 12.8438 12.2188 12.8438H13.125C13.4702 12.8438 13.75 12.5639 13.75 12.2188C13.75 11.8736 13.4702 11.5938 13.125 11.5938Z"
            fill="#66727F"></path>
        <path
            d="M9.34375 7.1875C9.68893 7.1875 9.96875 6.90768 9.96875 6.5625C9.96875 6.21732 9.68893 5.9375 9.34375 5.9375C8.99857 5.9375 8.71875 6.21732 8.71875 6.5625C8.71875 6.90768 8.99857 7.1875 9.34375 7.1875Z"
            fill="#66727F"></path>
        <path
            d="M6.625 9.90625C6.97018 9.90625 7.25 9.62643 7.25 9.28125C7.25 8.93607 6.97018 8.65625 6.625 8.65625C6.27982 8.65625 6 8.93607 6 9.28125C6 9.62643 6.27982 9.90625 6.625 9.90625Z"
            fill="#66727F"></path>
        <path
            d="M3.90625 7.1875C4.25143 7.1875 4.53125 6.90768 4.53125 6.5625C4.53125 6.21732 4.25143 5.9375 3.90625 5.9375C3.56107 5.9375 3.28125 6.21732 3.28125 6.5625C3.28125 6.90768 3.56107 7.1875 3.90625 7.1875Z"
            fill="#66727F"></path>
        <path
            d="M3.90625 9.90625C4.25143 9.90625 4.53125 9.62643 4.53125 9.28125C4.53125 8.93607 4.25143 8.65625 3.90625 8.65625C3.56107 8.65625 3.28125 8.93607 3.28125 9.28125C3.28125 9.62643 3.56107 9.90625 3.90625 9.90625Z"
            fill="#66727F"></path>
        <path
            d="M3.90625 12.625C4.25143 12.625 4.53125 12.3452 4.53125 12C4.53125 11.6548 4.25143 11.375 3.90625 11.375C3.56107 11.375 3.28125 11.6548 3.28125 12C3.28125 12.3452 3.56107 12.625 3.90625 12.625Z"
            fill="#66727F"></path>
        <path
            d="M6.625 12.625C6.97018 12.625 7.25 12.3452 7.25 12C7.25 11.6548 6.97018 11.375 6.625 11.375C6.27982 11.375 6 11.6548 6 12C6 12.3452 6.27982 12.625 6.625 12.625Z"
            fill="#66727F"></path>
        <path
            d="M6.625 7.1875C6.97018 7.1875 7.25 6.90768 7.25 6.5625C7.25 6.21732 6.97018 5.9375 6.625 5.9375C6.27982 5.9375 6 6.21732 6 6.5625C6 6.90768 6.27982 7.1875 6.625 7.1875Z"
            fill="#66727F"></path>
    </svg>
</div>
<div class="small-text gray mr-4">Valid until: </div>
<div class="small-text gray">18.11.2022</div>`

  const personData = document.querySelector('#name');
  personData.innerHTML = `
    <div class="mb-4 person-data-wrap attr-wrap">
    <div class="small-text mb-4 mr-4 attr-title hide">Full name: </div>
    <div class="attrValue title-h6 bold text-center">M********* J******</div>
    </div>
    <div class="mb-4 person-data-wrap attr-wrap">
    <div class="small-text mb-4 mr-4 attr-title">Date of birth: </div>
    <div class="attrValue small-text gray">06.06.2003</div>
    </div>
    <div class="mb-4 person-data-wrap attr-wrap">
    <div class="small-text mb-4 mr-4 attr-title">National passport: </div>
    <div class="attrValue small-text gray">18** ***191</div>
    </div>
    <div class="mb-4 person-data-wrap attr-wrap hide">
    <div class="small-text mb-4 mr-4 attr-title">International passport: </div>
    <div class="attrValue small-text gray">7* ****307</div>
    </div>
    `;

  const buttonClose = document.querySelector('.close');
  buttonClose.innerHTML = "Close";

  const disclaimer = document.querySelector('#disclaimer');
  disclaimer.innerHTML = "Disclaimer: This site is for entertainment purposes only and does not endorse a vaccination certificate.";

}



function makeItRussian() {
  const langEn = document.querySelector('.lang-en');
  langEn.style.display = "none";
  const langRu = document.querySelector('.lang-ru');
  langRu.style.display = "block";

  const lang = document.querySelector('.lang');
  lang.innerHTML = "RUS";

  const textBox = document.querySelector('.status-container-inner');
  textBox.innerHTML = `
    <div class="status-container-inner">
        <h4 class="title-h4 white status-title main-title">Сертификат вакцинации от COVID-19</h4>
        <div class="status mt-12 text-plain small-text bold"><span
                class="status-value hide not-found"></span> <span
                class="status-value cert-name">Действителен</span></div>
        <h4 class="title-h4 white status-title mt-12"><span class="num-symbol">№</span> <span
                class="unrz">9340 0000 2468 0753</span></h4>
    </div>
    `;

  const mb4 = document.querySelector('.mb-4');
  mb4.innerHTML = `
    <div class="person-date mr-12">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.0625 7.1875C12.4077 7.1875 12.6875 6.90768 12.6875 6.5625C12.6875 6.21732 12.4077 5.9375 12.0625 5.9375C11.7173 5.9375 11.4375 6.21732 11.4375 6.5625C11.4375 6.90768 11.7173 7.1875 12.0625 7.1875Z"
            fill="#66727F"></path>
        <path
            d="M13.5 1.25H12.6875V0.625C12.6875 0.279813 12.4077 0 12.0625 0C11.7173 0 11.4375 0.279813 11.4375 0.625V1.25H8.59375V0.625C8.59375 0.279813 8.31394 0 7.96875 0C7.62356 0 7.34375 0.279813 7.34375 0.625V1.25H4.53125V0.625C4.53125 0.279813 4.25144 0 3.90625 0C3.56106 0 3.28125 0.279813 3.28125 0.625V1.25H2.5C1.1215 1.25 0 2.3715 0 3.75V13.5C0 14.8785 1.1215 16 2.5 16H7.28125C7.62644 16 7.90625 15.7202 7.90625 15.375C7.90625 15.0298 7.62644 14.75 7.28125 14.75H2.5C1.81075 14.75 1.25 14.1892 1.25 13.5V3.75C1.25 3.06075 1.81075 2.5 2.5 2.5H3.28125V3.125C3.28125 3.47019 3.56106 3.75 3.90625 3.75C4.25144 3.75 4.53125 3.47019 4.53125 3.125V2.5H7.34375V3.125C7.34375 3.47019 7.62356 3.75 7.96875 3.75C8.31394 3.75 8.59375 3.47019 8.59375 3.125V2.5H11.4375V3.125C11.4375 3.47019 11.7173 3.75 12.0625 3.75C12.4077 3.75 12.6875 3.47019 12.6875 3.125V2.5H13.5C14.1892 2.5 14.75 3.06075 14.75 3.75V7.3125C14.75 7.65769 15.0298 7.9375 15.375 7.9375C15.7202 7.9375 16 7.65769 16 7.3125V3.75C16 2.3715 14.8785 1.25 13.5 1.25Z"
            fill="#66727F"></path>
        <path
            d="M12.2188 8.4375C10.1337 8.4375 8.4375 10.1337 8.4375 12.2188C8.4375 14.3038 10.1337 16 12.2188 16C14.3038 16 16 14.3038 16 12.2188C16 10.1337 14.3038 8.4375 12.2188 8.4375ZM12.2188 14.75C10.823 14.75 9.6875 13.6145 9.6875 12.2188C9.6875 10.823 10.823 9.6875 12.2188 9.6875C13.6145 9.6875 14.75 10.823 14.75 12.2188C14.75 13.6145 13.6145 14.75 12.2188 14.75Z"
            fill="#66727F"></path>
        <path
            d="M13.125 11.5938H12.8438V10.9375C12.8438 10.5923 12.5639 10.3125 12.2188 10.3125C11.8736 10.3125 11.5938 10.5923 11.5938 10.9375V12.2188C11.5938 12.5639 11.8736 12.8438 12.2188 12.8438H13.125C13.4702 12.8438 13.75 12.5639 13.75 12.2188C13.75 11.8736 13.4702 11.5938 13.125 11.5938Z"
            fill="#66727F"></path>
        <path
            d="M9.34375 7.1875C9.68893 7.1875 9.96875 6.90768 9.96875 6.5625C9.96875 6.21732 9.68893 5.9375 9.34375 5.9375C8.99857 5.9375 8.71875 6.21732 8.71875 6.5625C8.71875 6.90768 8.99857 7.1875 9.34375 7.1875Z"
            fill="#66727F"></path>
        <path
            d="M6.625 9.90625C6.97018 9.90625 7.25 9.62643 7.25 9.28125C7.25 8.93607 6.97018 8.65625 6.625 8.65625C6.27982 8.65625 6 8.93607 6 9.28125C6 9.62643 6.27982 9.90625 6.625 9.90625Z"
            fill="#66727F"></path>
        <path
            d="M3.90625 7.1875C4.25143 7.1875 4.53125 6.90768 4.53125 6.5625C4.53125 6.21732 4.25143 5.9375 3.90625 5.9375C3.56107 5.9375 3.28125 6.21732 3.28125 6.5625C3.28125 6.90768 3.56107 7.1875 3.90625 7.1875Z"
            fill="#66727F"></path>
        <path
            d="M3.90625 9.90625C4.25143 9.90625 4.53125 9.62643 4.53125 9.28125C4.53125 8.93607 4.25143 8.65625 3.90625 8.65625C3.56107 8.65625 3.28125 8.93607 3.28125 9.28125C3.28125 9.62643 3.56107 9.90625 3.90625 9.90625Z"
            fill="#66727F"></path>
        <path
            d="M3.90625 12.625C4.25143 12.625 4.53125 12.3452 4.53125 12C4.53125 11.6548 4.25143 11.375 3.90625 11.375C3.56107 11.375 3.28125 11.6548 3.28125 12C3.28125 12.3452 3.56107 12.625 3.90625 12.625Z"
            fill="#66727F"></path>
        <path
            d="M6.625 12.625C6.97018 12.625 7.25 12.3452 7.25 12C7.25 11.6548 6.97018 11.375 6.625 11.375C6.27982 11.375 6 11.6548 6 12C6 12.3452 6.27982 12.625 6.625 12.625Z"
            fill="#66727F"></path>
        <path
            d="M6.625 7.1875C6.97018 7.1875 7.25 6.90768 7.25 6.5625C7.25 6.21732 6.97018 5.9375 6.625 5.9375C6.27982 5.9375 6 6.21732 6 6.5625C6 6.90768 6.27982 7.1875 6.625 7.1875Z"
            fill="#66727F"></path>
    </svg>
</div>
<div class="small-text gray mr-4">Действует до: </div>
<div class="small-text gray">18.11.2022</div>`

  const personData = document.querySelector('#name');
  personData.innerHTML = `
    <div class="mb-4 person-data-wrap attr-wrap">
    <div class="small-text mb-4 mr-4 attr-title hide">ФИО: </div>
    <div class="attrValue title-h6 bold text-center">М******** И******* П*******</div>
    </div>
    <div class="mb-4 person-data-wrap attr-wrap">
    <div class="small-text mb-4 mr-4 attr-title">Дата рождения: </div>
    <div class="attrValue small-text gray">06.06.2003</div>
    </div>
    <div class="mb-4 person-data-wrap attr-wrap">
    <div class="small-text mb-4 mr-4 attr-title">Паспорт: </div>
    <div class="attrValue small-text gray">18** ***191</div>
    </div>
    <div class="mb-4 person-data-wrap attr-wrap hide">
    <div class="small-text mb-4 mr-4 attr-title">Загранпаспорт: </div>
    <div class="attrValue small-text gray">7* ****307</div>
    </div>
    `;

  const buttonClose = document.querySelector('.close');
  buttonClose.innerHTML = "Закрыть";

  const disclaimer = document.querySelector('#disclaimer');
  disclaimer.innerHTML = "Отказ от отвественности: Данный сайт носит сугубо развлекательный характер и не подтверждает наличие сертификата о вакцинации.";
};

function toggleLanguage() {
  let detectLanguage = document.querySelector('#detectLang').innerHTML;
  if (detectLanguage === "RUS") {
    makeItEnglish();
  } else if (detectLanguage === "ENG") {
    makeItRussian();
  }
};
