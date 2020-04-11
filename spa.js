// ##################################
// #        buttonHandlers          #
// ##################################
//
const jsBtn = document.getElementById('js');
const reactBtn = document.getElementById('react');
const phpBtn = document.getElementById('php');
const cppBtn = document.getElementById('cpp');
const htmlBtn = document.getElementById('html');
const kontaktBtn = document.getElementById('kontakt');
const infoBtn = document.getElementById('info');
const logowanieBtn = document.getElementById('logowanie');

// buttonHandlers GAMES
const snakeBtn = document.getElementById('snake');

// ##################################
// #         blockHandlers          #
// ##################################
//
const jsBlock = document.getElementById('JS');
const reactBlock = document.getElementById('REACT');
const phpBlock = document.getElementById('PHP');
const cppBlock = document.getElementById('CPP');
const htmlBlock = document.getElementById('HTML');
const kontaktBlock = document.getElementById('KONTAKTEN');
const infoBlock = document.getElementById('INFO');
const logowanieBlock = document.getElementById('LOGOWANIE');

// blockHandlers GAMES
const snakeBlock = document.getElementById('SNAKE');

// ##################################
// #           IMPORTANT!           #
// ##################################
// 
// SET DISPLAY: 'none' of the BLOCKS first
// before starting 'click' EVENTS
// #
// # TO PREVENT UGLY LOOK OF THE BLOCK AT THE BEGGINNING
// #
function blockDisplayNone() {

    // invisible BLOCK blocks
    jsBlock.style.display = 'none';
    reactBlock.style.display = 'none';
    phpBlock.style.display = 'none';
    cppBlock.style.display = 'none';
    htmlBlock.style.display = 'none';
    kontaktBlock.style.display = 'none';
    infoBlock.style.display = 'none';
    logowanieBlock.style.display = 'none';
    
    // invisible GAME blocks
    snakeBlock.style.display = 'none';
}
blockDisplayNone();
// ##########################################################################################################
// # ANIMATION THAT I BASE OFF
/*
    @keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0px, 0);
            transform: translate3d(100%, 0px, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: translate3d(0px, 0px, 0);
            transform: translate3d(0px, 0px, 0);
        }
    }

    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
        animation: fadeInRight 0.5s ease-in-out;
    }
*/
// ##########################################################################################################



// ##########################################################################################################
// #                                       ENTRIES BLOCKS                                                   #
// ##########################################################################################################
// moving blocks on 'click' event 
// -->                                                          JS BUTTON
jsBtn.addEventListener('click', () => {
    blockDisplayNone();

    jsBlock.style.display = 'block';
    jsBlock.classList.add('fadeInRight');
});
// -->                                                          REACT BUTTON    
reactBtn.addEventListener('click', () => {
    blockDisplayNone();

    reactBlock.style.display = 'block';
    reactBlock.classList.add('fadeInRight');
});
// -->                                                          PHP BUTTON
phpBtn.addEventListener('click', () => {
    blockDisplayNone();

    phpBlock.style.display = 'block';
    phpBlock.classList.add('fadeInRight');
});

// -->                                                          CPP BUTTON    
cppBtn.addEventListener('click', () => {    
    blockDisplayNone();

    cppBlock.style.display = 'block';
    cppBlock.classList.add('fadeInRight');
});

// -->                                                          HTML BUTTON
htmlBtn.addEventListener('click', () => {
    blockDisplayNone();

    htmlBlock.style.display = 'block';
    htmlBlock.classList.add('fadeInRight');
});

// ##########################################################################################################
// #                                            GAMES                                                       #
// ##########################################################################################################
// # SNAKE
// -->                                                          SNAKE BUTTON
snakeBtn.addEventListener('click', () => {
    blockDisplayNone();

    snakeBlock.style.display = 'block';
    snakeBlock.classList.add('fadeInRight');
});

// ##########################################################################################################
// #                                    KONTAKT  FAQ  ZALOGUJ                                               #
// ##########################################################################################################
// -->                                                          KONTAKT BUTTON
kontaktBtn.addEventListener('click', () => {
    blockDisplayNone();

    kontaktBlock.style.display = 'block';
    kontaktBlock.classList.add('fadeInRight');
});

// -->                                                          INFO BUTTON
infoBtn.addEventListener('click', () => {
    blockDisplayNone();

    infoBlock.style.display = 'block';
    infoBlock.classList.add('fadeInRight');
});

// -->                                                          LOGOWANIE BUTTON
logowanieBtn.addEventListener('click', () => {
    if (logowanieBlock.style.display == 'block') {
        logowanieBlock.style.display = 'none';
    } else {
        logowanieBlock.style.display = 'block';
        logowanieBlock.style.position = 'fixed';
        logowanieBlock.style.right = '0px';
        logowanieBlock.style.top = '70px';
        logowanieBlock.classList.add('fadeInRight');
    }
});

// # REQUEST FULLSCREEN on button 'click'
// # TO ADD!!
		// if (document.fullscreenEnabled) {
		// 	document.documentElement.requestFullscreen();
		// 	console.log('supported');
		// }