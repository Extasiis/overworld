//Variables
const elementBody = document.querySelector('body');
const welcome = document.querySelector('.welcome');
const titleWelcome = document.querySelector('.welcome__title');
const imgWelcome = document.querySelector('.welcome__container-2');
const textPWelcome = document.querySelector('.welcome__container-3');
const textDefWelcome = document.querySelector('.welcome__container-4');
const displayWelcome = document.querySelector('.welcome__display');
const cards = document.querySelector('.cards__container');
const backgroundWelcome = document.querySelector('.backgorund__two');
const team = document.querySelector('.team');
const teamLogo = document.querySelector('.team__logo');
const teamopacity= document.querySelector('.team__opacity');
const artCont = document.querySelector('.art__container');
const art = document.querySelector('.art');
const mymusic = document.querySelector('#mymusic'); //musica
const music = document.querySelector('#music'); // css music

//Optimizar
const teamCards = document.querySelector('.team__card:nth-child(1)');
const teamCards2 = document.querySelector('.team__2 .team__card:nth-child(1)');
const teamCards3 = document.querySelector('.team__2 .team__card:nth-child(2)');
const teamCards4 = document.querySelector('.team__2 .team__card:nth-child(3)');
const teamCards5 = document.querySelector('.team__2 .team__card:nth-child(4)');
const teamCards7 = document.querySelector('.team__2 .team__card:nth-child(5)');
const teamCards8 = document.querySelector('.team__2 .team__card:nth-child(6)');
const teamCards9 = document.querySelector('.team__2 .team__card:nth-child(7)');
const teamCards10 = document.querySelector('.team__2 .team__card:nth-child(8)');
const teamCards6 = document.querySelector('.team__5 .team__card:nth-child(1)');

//Scroll
window.addEventListener('scroll', scrollHistory);

function scrollHistory(){    
        const scrollPosition = window.innerHeight / 1; //pantalla completa
        const scrollPositionDiv = window.innerHeight / 1.5; //patalle 1/3
        const scrollPositionHalf = window.innerHeight / 2; //Mitad de pantalla
    
        scrollBody(elementBody, scrollPosition);
        scrollTitle(welcome, scrollPosition);
        scrollCards(cards, scrollPositionDiv);
        scrollTeam(team, scrollPositionDiv);
        scrollArt(artCont, scrollPositionDiv);
    
    
        //Optimizar
        scrollTeamCard(teamCards, scrollPositionHalf);
        scrollTeamCard(teamCards2, scrollPositionHalf);
        scrollTeamCard(teamCards3, scrollPositionHalf);
        scrollTeamCard(teamCards4, scrollPositionHalf);
        scrollTeamCard(teamCards5, scrollPositionHalf);
        scrollTeamCard(teamCards7, scrollPositionHalf);
        scrollTeamCard(teamCards8, scrollPositionHalf);
        scrollTeamCard(teamCards9, scrollPositionHalf);
        scrollTeamCard(teamCards10, scrollPositionHalf);
        scrollTeamCard(teamCards6, scrollPositionHalf);
    
    
    document.body.style.setProperty('--start', scrollPositionDiv);
    document.body.style.setProperty('--scroll-revelation', scrollPosition);
}

//scrollBody
function scrollBody(name, scrollPosition){    
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;
    if(scrollPosition > namePosition){
    music.classList.add('active');
    const scroll = document.body.style.setProperty('--scroll', (namePosition - 453) / nameHeight );
    }

    musicActive()
}

//scrolltitle
function scrollTitle(name, scrollPosition){    
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;
    if(scrollPosition > namePosition){
        titleWelcome.style.setProperty('--scroll-Title', (namePosition + 180) / nameHeight );
    }

    if(scrollPosition > 200){
        imgWelcome.classList.add('active')
        imgWelcome.style.setProperty('--scroll-img', (namePosition + 150) / nameHeight );
    }
    
    if((namePosition * -1) > 1000){
        displayWelcome.style.display = "none";
    }

    else if((namePosition * -1) > 600){
        displayWelcome.style.display = "block";
        textPWelcome.style.opacity = "0";
        textDefWelcome.classList.add('active');
        textDefWelcome.style.setProperty('--scroll-text-2', (namePosition + 150) / nameHeight );
    }

    else if((namePosition * -1) > 200){
        textPWelcome.style.opacity = "1";
        textPWelcome.classList.add('active');        
        textDefWelcome.classList.remove('active');
        textPWelcome.style.setProperty('--scroll-text', (namePosition + 150) / nameHeight );   
    }
    else{
        textPWelcome.classList.remove('active');
        textDefWelcome.classList.remove('active');
    }
}


//scroll Cards

function scrollCards(name, scrollPositionDiv){    
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;

    if(scrollPositionDiv > namePosition + 850){
        name.style.opacity = '0';
        name.style.transition = 'opacity 0.5s'
    }
    else if(scrollPositionDiv > namePosition){
        name.style.opacity = '1';
        cards.classList.add('active')
        cards.style.setProperty('--scroll-cards', (namePosition - 1500 )  /  (nameHeight*-1));
    }else(
        cards.classList.remove('active')
    )
}

function scrollTeam(name, scrollPositionDiv){    
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;

    if(scrollPositionDiv > namePosition + 100){
        teamLogo.classList.add('active')
    }    

    if(scrollPositionDiv > namePosition){ 
        teamopacity.style.opacity = `${-2.5*((namePosition + 200 * -2)  /  (nameHeight* 0.2))}`;
       
    }
    
    else{
        teamLogo.classList.remove('active');
        teamopacity.style.opacity = '0'
    }
        
    
}

//Scroll Team Card

function scrollTeamCard(name, scrollPositionHalf){
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;

    if(scrollPositionHalf > namePosition + 580){
        name.style.opacity = '0';
        name.style.transition = 'opacity 0.5s'
    }

    else if(scrollPositionHalf > namePosition + 500){
        name.classList.remove('active');
        name.style.transform = 'rotateY(180deg)';
        name.style.transition = '1s';
        name.style.opacity = '1';
    }
    else if(scrollPositionHalf > namePosition){
        name.style.opacity = '1';
        name.style.transform = '';
        name.classList.add('active');        
        name.style.setProperty('--scroll-team-cards', (namePosition + 200 )  /  (nameHeight*-1));
    }
    
    else{
        name.classList.remove('active');
    }
}

function scrollArt(name, scrollPositionDiv){
    const nameHeight = name.clientHeight;
    const namePosition = name.getBoundingClientRect().top;

    if(scrollPositionDiv > namePosition){ 
        name.style.transition = 'left 0.1s linear';
        name.style.left = `calc(1px * ${ 500 *(namePosition -650 )  /  (nameHeight*1)})` 
        art.style.opacity = `${-1*((namePosition + 300 * -2)  /  (nameHeight* 0.2))}`;
    }
    
    else{
        name.classList.remove('active');
        art.style.opacity = '0';

    }
        
    
}


//  Load
function work() { 
    
}

if (document.readyState == 'loading') {
  // cargando todavía, esperar el evento
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM está listo!
  work();
}

window.addEventListener("DOMContentLoaded", (event) => {
    titleWelcome.style.fontSize = "20rem";
});


function musicActive(){
    mymusic.play();
    music.onclick = () => {
        if(mymusic.paused){
            mymusic.play();            
            music.classList.add('active');           
        }else{
            mymusic.pause();
            music.classList.remove('active')
        }
        }
}musicActive()

window.addEventListener()