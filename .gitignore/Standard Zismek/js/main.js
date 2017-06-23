var _btnExit = document.getElementById('btn-exit'), _loadedImages=0,
_imageArray=new Array( 'img/copy01.png');

this.addEventListener('DOMContentLoaded', preloadImages); 

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener("load", trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){ 
    _loadedImages++;   
    if(_loadedImages == _imageArray.length){ initEB();} 
}

function initEB() {
   if (!EB.isInitialized()){EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd)} else{startAd()}
}

function startAd(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', 'css/style.css' );
    document.getElementsByTagName('head')[0].appendChild(css);

    addEventListeners();
    initAnimations();
}

function addEventListeners() {
    _btnExit.addEventListener('click', clickHandler);
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
    EB.clickthrough('clickTag'); 
}

