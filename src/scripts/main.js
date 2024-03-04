document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    //Header
    window.addEventListener('scroll', function(){
        const positionCurrent = window.scrollY;

        if(positionCurrent < heightHero){
            hideHeaderElements();
        }else{
            displayHeaderElements();
        }
    })


        //Section attractions, tab programming
        for(let i=0; i < buttons.length; i++){
            buttons[i].addEventListener('click',function(button){
                const targetTab = button.target.dataset.tabButton;
                const tab = document.querySelector(`[data-tab-id = ${targetTab}]`);
                hideAllTab();
                tab.classList.add('shows__list--is-active');
                removeButtonActive();
                button.target.classList.add('shows__tabs__button--is-active')
            })
        }
})

//Function remove button Active
function removeButtonActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

//Function hide Tab
function hideAllTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

//Hide Element Header
function hideHeaderElements(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

//Show Element Header
function displayHeaderElements(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}