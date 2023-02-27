let wrap = document.querySelector('#body');
let cover = document.querySelector('#cover-black');
function fun(){
   var chbox;
   chbox = document.getElementById('menu__toggle');
   if (chbox.checked) {
      wrap.classList.add('hidden');
      
      cover.removeAttribute('hidden');
   }
   else{
      wrap.classList.remove('hidden');
      cover.setAttribute('hidden', 'true');
   }
}
function closeBurger(){
   var chbox = document.getElementById('menu__toggle');
   chbox.checked = false;
   wrap.classList.remove('hidden');
   cover.setAttribute('hidden', 'true');
}
function trueScroll(){
   var chbox = document.getElementById('menu__toggle');
   if(event.target){
      wrap.classList.remove('hidden');
      chbox.checked = false;
      cover.setAttribute('hidden', 'true');
   }
}

//-----json-----
let pets = [
   {
     "name": "Jennifer",
     "img": "../../assets/images/pets-jennifer.png",
     "type": "Dog",
     "breed": "Labrador",
     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
     "age": "2 months",
     "inoculations": ["none"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Sophia",
     "img": "../../assets/images/pets-sophia.png",
     "type": "Dog",
     "breed": "Shih tzu",
     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
     "age": "1 month",
     "inoculations": ["parvovirus"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Woody",
     "img": "../../assets/images/pets-woody.png",
     "type": "Dog",
     "breed": "Golden Retriever",
     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
     "age": "3 years 6 months",
     "inoculations": ["adenovirus", "distemper"],
     "diseases": ["right back leg mobility reduced"],
     "parasites": ["none"]
   },
   {
     "name": "Scarlett",
     "img": "../../assets/images/pets-scarlet.png",
     "type": "Dog",
     "breed": "Jack Russell Terrier",
     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
     "age": "3 months",
     "inoculations": ["parainfluenza"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Katrine",
     "img": "../../assets/images/pets-katrine.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
     "age": "6 months",
     "inoculations": ["panleukopenia"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Timmy",
     "img": "../../assets/images/pets-timmy.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
     "age": "2 years 3 months",
     "inoculations": ["calicivirus", "viral rhinotracheitis"],
     "diseases": ["kidney stones"],
     "parasites": ["none"]
   },
   {
     "name": "Freddie",
     "img": "../../assets/images/pets-freddie.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
     "age": "2 months",
     "inoculations": ["rabies"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Charly",
     "img": "../../assets/images/pets-charly.png",
     "type": "Dog",
     "breed": "Jack Russell Terrier",
     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
     "age": "8 years",
     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
     "diseases": ["deafness", "blindness"],
     "parasites": ["lice", "fleas"]
   }
 ];

 const createCardTemplate = (i) => {
   let sliderItem = document.createElement('div');
   let card = document.createElement('div');
   let cardImg = document.createElement('div');
   let img = document.createElement('img');
   let name = document.createElement('p');
   let btn = document.createElement('h4');
   let id = document.createElement('h6');

   sliderItem.classList.add('slider__item');
   card.classList.add('card');
   cardImg.classList.add('card__img');
   name.classList.add('card__name');
   btn.classList.add('button');
   btn.classList.add('card__button');
   id.style.display = 'none';

   img.src = pets[i].img;
   name.textContent = pets[i].name;
   btn.textContent  = 'Learn more';
   id.textContent = i;

   card.appendChild(cardImg);
   card.appendChild(id);
   card.appendChild(name);
   card.appendChild(btn);
   cardImg.appendChild(img);
   return card;
 }

if(document.documentElement.clientWidth >= 1280){
   let first = Math.floor(Math.random()*8);
   const card = createCardTemplate(first);
   document.querySelector("#item-active").appendChild(card);
   let buff = [];
   buff.push(first);
   for(let i = 0; i < 2; i++){
      let index = Math.floor(Math.random()*8);
      while(buff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      buff.push(index);
      const card = createCardTemplate(index);
      document.querySelector("#item-active").appendChild(card);
   }
   for(let i = 0; i < 3; i++){
      let index = Math.floor(Math.random()*8);
      while(buff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      buff.push(index);
      const card = createCardTemplate(index);
      document.querySelector("#item-left").appendChild(card);
      
   }
   let newBuff = buff.filter((value, index) => index < 3);
   for(let i = 0; i < 3; i++){
      let index = Math.floor(Math.random()*8);
      while(newBuff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      newBuff.push(index);
      const card = createCardTemplate(index);
      document.querySelector("#item-right").appendChild(card);
   }
}
if(document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768){
   let first = Math.floor(Math.random()*8);
   const card = createCardTemplate(first);
   document.querySelector("#item-active").appendChild(card);
   let buff = [];
   for(let i = 0; i < 1; i++){
      let index = Math.floor(Math.random()*8);
      while(buff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      buff.push(index);
      const card = createCardTemplate(index);
      document.querySelector("#item-active").appendChild(card);
   }
   for(let i = 0; i < 2; i++){
      let index = Math.floor(Math.random()*8);
      while(buff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      buff.push(index);
      const card = createCardTemplate(index);
      document.querySelector("#item-left").appendChild(card);
   }
   let newBuff = buff.filter((value, index) => index < 3);
   for(let i = 0; i < 2; i++){
      let index = Math.floor(Math.random()*8);
      while(newBuff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      newBuff.push(index);
      const card = createCardTemplate(index);
      document.querySelector("#item-right").appendChild(card);
   }
}else
if(document.documentElement.clientWidth < 768){
   let buff = [];
   let index = Math.floor(Math.random()*8);
   let card = createCardTemplate(index);
   document.querySelector("#item-left").appendChild(card);
   buff.push(index);
   
   index = Math.floor(Math.random()*8);
   while(buff.includes(index)){
      index = Math.floor(Math.random()*8);
   }
   buff.push(index);
   card = createCardTemplate(index);
   document.querySelector("#item-active").appendChild(card);
   
   index = Math.floor(Math.random()*8);
   while(buff.includes(index)){
       index = Math.floor(Math.random()*8);
      }
   card = createCardTemplate(index);
   document.querySelector("#item-right").appendChild(card);

   
}

 const BUTTON_LEFT = document.querySelector('#button-left');
 const BUTTON_RIGHT = document.querySelector('#button-right');
 const SLIDER = document.querySelector('#slider');
 let ITEM_LEFT = document.querySelector("#item-left");
 let ITEM_RIGHT = document.querySelector("#item-right");


 const moveleft = () => {
   SLIDER.classList.add('transition-left');
   BUTTON_LEFT.removeEventListener("click", moveleft);
   BUTTON_RIGHT.removeEventListener("click", moveright);

}
const moveright = ()=>{
   SLIDER.classList.add('transition-right');
   BUTTON_LEFT.removeEventListener("click", moveleft);
   BUTTON_RIGHT.removeEventListener("click", moveright);
}

BUTTON_LEFT.addEventListener("click", moveleft);
BUTTON_RIGHT.addEventListener("click", moveright);

SLIDER.addEventListener("animationend", (animationEvent) =>{
   let changedItem;
   let buff = [];

   if(document.documentElement.clientWidth >= 1280){
   if(animationEvent.animationName === "move-left"){
      SLIDER.classList.remove('transition-left');
      changedItem = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

   }else if (animationEvent.animationName === "move-right"){
      SLIDER.classList.remove('transition-right');
      changedItem = ITEM_RIGHT;
      SLIDER.classList.remove('transition-left');
      document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
   }
   for(let i = 0; i < 3; i++){
      let card = document.querySelector('#item-active').children[i];
      buff.push(Number(card.querySelector('h6').textContent));
   }
   changedItem.innerHTML = "";

   for(let i = 0; i < 3; i++){
      let index = Math.floor(Math.random()*8);
      while(buff.includes(index)){
         index = Math.floor(Math.random()*8);
      }
      buff.push(index);

      const card = createCardTemplate(index);
      changedItem.appendChild(card);
   }
}
if(document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768){
   if(animationEvent.animationName === "move-left-tablet"){
      SLIDER.classList.remove('transition-left');
      changedItem = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

   }else if (animationEvent.animationName === "move-right-tablet"){
      SLIDER.classList.remove('transition-right');
      changedItem = ITEM_RIGHT;
      SLIDER.classList.remove('transition-left');
      document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
   }
   for(let i = 0; i < 2; i++){
      let card = document.querySelector('#item-active').children[i];
      buff.push(Number(card.querySelector('h6').textContent));
   }
   changedItem.innerHTML = "";
   
   for(let i = 0; i < 2; i++){
         let index = Math.floor(Math.random()*8);
         while(buff.includes(index)){
            index = Math.floor(Math.random()*8);
         }
         buff.push(index);
         const card = createCardTemplate(index);
         changedItem.appendChild(card);
      }
}
if(document.documentElement.clientWidth < 768){
   
   if(animationEvent.animationName === "move-left-mobile"){
      SLIDER.classList.remove('transition-left');
      changedItem = ITEM_LEFT;
      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

   }else if (animationEvent.animationName === "move-right-mobile"){
      SLIDER.classList.remove('transition-right');
      changedItem = ITEM_RIGHT;
      SLIDER.classList.remove('transition-left');
      document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
   }
   let card = document.querySelector('#item-active').children[0];
   buff.push(Number(card.querySelector('h6').textContent));
   
   changedItem.innerHTML = "";
   
   let index = Math.floor(Math.random()*8);
   while(buff.includes(index)){
      index = Math.floor(Math.random()*8);
   }
   buff.push(index);
   card = createCardTemplate(index);
   changedItem.appendChild(card);

}

   BUTTON_LEFT.addEventListener("click", moveleft);
   BUTTON_RIGHT.addEventListener("click", moveright);

})


//---popap-----

const ACTIVE = document.querySelector("#item-active");
const CLOSE = document.querySelector("#close");
const BACK = document.querySelector("#black-back");
let popap = document.querySelector("#popap");
let name = document.querySelector("#popap-name");
let image = document.querySelector("#popap-img");
let breed = document.querySelector("#popap-type");
let description = document.querySelector("#popap-description");
let age = document.querySelector("#age");
let inoculation = document.querySelector("#inoculation");
let diseases = document.querySelector("#diseases");
let parasites = document.querySelector("#parasites");

ACTIVE.onclick = function(event){
   popap.style.visibility = "visible";
   let target = event.target;
   let element;
   if(target.childNodes.length > 1){
      element = target.childNodes[2].textContent;
   }
   else{
      let buff = target.parentElement;
      if(buff.childNodes.length == 1){
      let parent = buff.parentElement;
      element = parent.childNodes[2].textContent;
      }else{
      element = buff.childNodes[2].textContent;
      }
   }
   for(let i = 0; i < pets.length; i++){
      if(element == pets[i].name ){
         name.textContent = pets[i].name;
         breed.textContent = `${pets[i].type} - ${pets[i].breed}`;
         description.textContent = pets[i].description;
         image.src = pets[i].img;
         age.innerHTML = `<span>Age: </span> ${pets[i].age}`;
         inoculation.innerHTML = `<span>Inoculations: </span> ${pets[i].inoculations}`;
         diseases.innerHTML = `<span>Diseases: </span> ${pets[i].diseases}`;
         parasites.innerHTML = `<span>Parasites: </span> ${pets[i].parasites}`;

      }
   }
   BACK.style.visibility = "visible";
   wrap.classList.add('hidden');
}
CLOSE.onclick = function(){
   popap.style.visibility = "hidden";
   BACK.style.visibility = "hidden";
   wrap.classList.remove('hidden');
}
BACK.onclick = function(){
   popap.style.visibility = "hidden";
   BACK.style.visibility = "hidden";
   wrap.classList.remove('hidden');
}
BACK.addEventListener('mouseenter', e =>{
   CLOSE.classList.add('hover');
})
BACK.addEventListener('mouseleave', e => {
   CLOSE.classList.remove('hover');
 });
 CLOSE.addEventListener('mouseenter', e =>{
   CLOSE.classList.add('hover');
})
CLOSE.addEventListener('mouseleave', e => {
   CLOSE.classList.remove('hover');
 });


