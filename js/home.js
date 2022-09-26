var title = document.getElementById('title');
var icon = document.getElementById('icon');
var gear = document.getElementById('gear');
var pageIcon = document.getElementById('pageIcon');
var iconTxt = document.getElementById('iconTxt');
var register = document.getElementById("register");
var btn = document.getElementById("btn");
var word = document.getElementById("word");
var txt = document.getElementById("txt");
var score = document.getElementById("score");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score3 = document.getElementById("score3");
var elem = document.getElementById('count');
var load = document.getElementById('load');
var final= document.getElementById('final');
var final2= document.getElementById('final2');
var final3= document.getElementById('final3');
var timerId;
var scr=0;
var timeLeft =0;
var currenttime;
var randomWord = "";
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];
txt.onpaste = function () {
  return false;
}
const change = () => {
  setLevel();
  title.innerHTML="write"
  icon.href = "images/c073f257119cbad19b805f2a7809d8f3--keyboard-ui-removebg-preview (1).png";
  gear.style.display = 'block';
  pageIcon.src = "images/hands-keyboard-linear-icon-modern-outline-keyboar-logo-concept-white-background-collection-suitable-use-web-apps-133520585-removebg-preview.png";
  iconTxt.innerHTML = "اكتب بسرعه مفيش وقت للتفسير"
  register.style.display = 'block';
  genWord();
  txt.value = "";
  txt.focus();
  btn.style.display = 'none';
  
};
const test = () => {
  register.style.display = 'block';
  final.style.display = 'none';
  final2.style.display = 'none';
  final3.style.display = 'none';
  txt.value = "";
  scr=0;
  score.innerHTML = scr < 10 ? '0' + scr : scr;
  if (selected.value == 1) {
    localStorage.level =1;
    setLevel();
  }
  if (selected.value == 2) {
    localStorage.level =2;
    setLevel();
  }
  if (selected.value == 3) {
    localStorage.level =3;
    setLevel();
  }
};
const setLevel = () => {
  if(!localStorage.level){
    register.style.background="-webkit-linear-gradient(left, #c2d7f7, #0d6efd)";
    elem.innerHTML=60;
    elem.style.display = 'inline';
    currenttime = new Date().getSeconds();
    timeLeft = 59;
    timerId = setInterval(countdown, 1000);
  }
  if (Number(localStorage.level) == 1) {
    register.style.background="-webkit-linear-gradient(left, #c2d7f7, #0d6efd)";
    elem.innerHTML=60;
    elem.style.display = 'inline';
    currenttime = new Date().getSeconds();
    timeLeft = 59;
    timerId = setInterval(countdown, 1000);
  }
  if (Number(localStorage.level) == 2) {
   
    register.style.background="-webkit-linear-gradient(left, #d3f1ca, #28a745)";
    elem.innerHTML=45;
    elem.style.display = 'inline';
    currenttime = new Date().getSeconds();
    timeLeft = 45;
    timerId =setInterval(countdown, 1000);
  }
  if (Number(localStorage.level) == 3) {
    
    register.style.background="-webkit-linear-gradient(left,  #f6ab97, #dc3545)";
    elem.innerHTML=30;
    elem.style.display = 'inline';
    currenttime = new Date().getSeconds();
     timeLeft = 30; 
     timerId =setInterval(countdown, 1000);
  }
  
  txt.focus();
};
const check = () => {

  if (txt.value.toLowerCase() == randomWord.toLowerCase()) {
    genWord();
    txt.value = "";
    scr++;
    score.innerHTML = scr < 10 ? '0' + scr : scr;
  }
};
const genWord = () => {
  randomWord = words[Math.floor(Math.random() * words.length)];
  var wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  word.innerHTML = randomWord;

};
const countdown = () => {
  let newTime =new Date().setSeconds(currenttime+timeLeft);
  let diff = newTime - new Date();
  let s = Math.floor(diff / 1000) % 60;
  if (s == 0) {
    clearInterval(timerId);
    setResult()
  }else{
    elem.innerHTML = s < 10 ? '0' + s : s;
  
  }
  
};
const tryagain = () => {
  register.style.display = 'block';
  txt.focus();
  scr=0;
  score.innerHTML = scr < 10 ? '0' + scr : scr;
  txt.value = "";
  iconTxt.innerHTML = "اكتب اكتب عشان متضيعش وقت"
  if (Number(localStorage.level) == 1) {
    final.style.display = 'none';
  }
  if (Number(localStorage.level) == 2) {
    final2.style.display = 'none';
  }
  if (Number(localStorage.level) == 3) {
    final3.style.display = 'none';
  }
  setLevel();
};
const setResult = () => {
  register.style.display = 'none';
  iconTxt.innerHTML = "العب تاني ميهمكش";
  if (Number(localStorage.level) == 1) {
    final.style.display = 'block';
    score1.innerHTML = scr < 10 ? '0' + scr : scr;
  }
  if (Number(localStorage.level) == 2) {
    final2.style.display = 'block';
    score2.innerHTML = scr < 10 ? '0' + scr : scr;
  }
  if (Number(localStorage.level) == 3) {
    final3.style.display = 'block';
    score3.innerHTML = scr < 10 ? '0' + scr : scr;
  }
};
