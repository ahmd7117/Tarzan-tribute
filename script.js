const pages = {
  welcome: `
    <h1>میرے دل کی رانی</h1>
    <p>تم ہو زندگی کا وہ خاص تحفہ، تمہارے ہنسنے میں میری صبح اور تمہارے خوابوں میں میری آس ہے۔ 😍</p>
  `,
  poetry: `
    <h2>یہ اشعار تمہارے نام</h2>
    <p>“بھلے دنوں کی بات تھی، بھلی سی ایک شکل تھی”</p>
    <p>“آپ کی مسکان نے میرے دل کو چاند بنا دیا”</p>
    <p>“تیری آواز میں وہ مٹھاس تھی، جو صبح کی پہلی کرن کو چمکا دے”</p>
  `,
  quotes: `
    <h2>دل سے نکلی باتیں</h2>
    <p>“تو ہے تو ہر لمحہ خاص ہے۔”</p>
    <p>“میری ہر دعا میں تیرا نام ہوتا ہے۔”</p>
    <p>“تجھے جانا ہے تو اپنا سارا جہاں دے دو۔”</p>
  `
};

const navButtons = document.querySelectorAll('.nav button');
const content = document.getElementById('content');

function showPage(page) {
  content.innerHTML = pages[page];
  content.classList.remove('fade');
  void content.offsetWidth; // trigger reflow
  content.classList.add('fade');
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.page));
});

// Initialize on load
showPage('welcome');
