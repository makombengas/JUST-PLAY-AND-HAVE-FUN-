const pianoKeys = document.querySelectorAll('.key');


function playSound(newUrl) {
   new Audio(newUrl).play();
   
   
}

pianoKeys.forEach((pianoKeys, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKeys.addEventListener('click', ()=>playSound(newUrl))
})

function keyDown() {
    console.log('press key:');
}

const chk = document.getElementById('chk');
const title = document.querySelector('title')


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');

});


console.log(title)
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {

	social_panel_container.classList.remove('visible')
   
});

    

