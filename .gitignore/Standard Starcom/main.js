var _loadedImages=0,
_imageArray=new Array('copy01.png');

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;             
    if(_loadedImages == _imageArray.length) init();
}

function init(){ 
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);

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