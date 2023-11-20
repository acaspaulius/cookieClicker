// Variables
const cookieContainerElement = document.querySelector('#cookie_container');
const cookieImageElement = document.querySelector('#cookie_container__image');
const cookieCountElement = document.querySelector('#cookie_container__count');

// shop options variables
const shopContainerElement = document.querySelector('#shop_container');
const shopButtonElement = document.querySelector('#shop_button');
const backButtonElement = document.querySelector('#back_button');

const optionsContainerElement = document.querySelector('#options_container');
const buyPoints2Element = document.querySelector('#buy_points_2');
const buyPoints5Element = document.querySelector('#buy_points_5');
const changeCookieElement = document.querySelector('#change_cookie');
const changeBgColorElement = document.querySelector('#change_bg_color');
const spinCookieElement = document.querySelector('#spin_cookie');

let cookieCount = 0;
let pointsPerClick = 1;

//Functions
const clickCookie = () => {
  cookieCount += pointsPerClick;
  updateCookieCount();
};

const updateCookieCount = () => {
  cookieCountElement.innerText = `COOKIE POINTS: ${cookieCount}`;
};

const toggleShop = () => {
  shopButtonElement.classList.toggle('hidden_shop');
  backButtonElement.classList.toggle('hidden_back');
  buyPoints2Element.classList.toggle('hidden_shop');
  buyPoints5Element.classList.toggle('hidden_shop');
  changeCookieElement.classList.toggle('hidden_shop');
  changeBgColorElement.classList.toggle('hidden_shop');
  spinCookieElement.classList.toggle('hidden_shop');
};

const spinCookie = () => {
  cookieImageElement.classList.add('spinning_cookie');
};

const changeBackgroundColor = () => {
  document.body.style.backgroundColor = '#EBE3D5';
};

const changeCookieImage = () => {
  cookieImageElement.src = 'assets/img/cookie2.png';
};

const buyUpgrade = (points, cost, upgradeElement) => {
  if (cookieCount >= cost) {
    cookieCount -= cost;
    updateCookieCount();
    // check for the specific upgrade and call the function
    if (points > 0) {
      pointsPerClick = points;
      alert(`Upgrade purchased! You now get ${pointsPerClick} points per click.`);
    } else if (upgradeElement === changeCookieElement) {
      changeCookieImage();
      changeCookieElement.classList.add('hidden'); // once bought, it cannot be bought again
      alert('Upgrade purchased! Cookie image changed.');
    } else if (upgradeElement === spinCookieElement) {
      spinCookie();
      spinCookieElement.classList.add('hidden'); // once bought, it cannot be bought again
      alert('Upgrade purchased! Cookie is now spinning.');
    } else if (upgradeElement === changeBgColorElement) {
      changeBackgroundColor();
      changeBgColorElement.classList.add('hidden'); // once bought, it cannot be bought again
      alert('Upgrade purchased! Background color changed.');
    } else {
      // other upgrades
      alert('Upgrade purchased!');
    }
    // toggleShop(); // show shop always, or it can disappear once 1 of the upgrades have been bought if uncommented
  } else {
    alert('Not enough cookies to buy the upgrade!');
  }
};

// Events
cookieImageElement.addEventListener('click', clickCookie);
shopContainerElement.addEventListener('click', toggleShop);
backButtonElement.addEventListener('click', toggleShop);
buyPoints2Element.addEventListener('click', () => buyUpgrade(2, 50, buyPoints2Element));
buyPoints5Element.addEventListener('click', () => buyUpgrade(5, 100, buyPoints5Element));
changeCookieElement.addEventListener('click', () => buyUpgrade(0, 50, changeCookieElement));
changeBgColorElement.addEventListener('click', () => buyUpgrade(0, 50, changeBgColorElement));
spinCookieElement.addEventListener('click', () => buyUpgrade(0, 30, spinCookieElement));
