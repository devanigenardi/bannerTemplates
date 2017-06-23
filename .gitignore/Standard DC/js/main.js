var _btnExit = document.getElementById('btn-exit');
 
window.onload = function() { Enabler.isInitialized() ? politeload() : Enabler.addEventListener( studio.events.StudioEvent.INIT, politeload ); }

function politeload(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', Enabler.getUrl( 'css/style.css' ) );
    document.getElementsByTagName('head')[0].appendChild(css);

    Enabler.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js')
    Enabler.isPageLoaded() ? checkGreensockReady() : Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, checkGreensockReady );
}

function checkGreensockReady() { window.TimelineMax ? politeInit() : setTimeout( checkGreensockReady, 50 ); }
function politeInit() { Enabler.isVisible() ? init() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,init); }

function init(){ 
    _btnExit.addEventListener('click', clickHandler);
    initAnimations();
}

function initAnimations(){
    var _tt = new TimelineMax();
    _tt.to('#copy-1',.5,{opacity:1, onComplete:actionsButton});
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ TweenMax.to('#copy-1',.5,{ opacity:.5 })});
    _btnExit.addEventListener('mouseout', function(){ TweenMax.to('#copy-1',.5,{ opacity:1 })});
}

function clickHandler(){
    Enabler.exit('ClickTag');
}

