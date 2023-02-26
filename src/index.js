import './scss/app.scss';
import * as bootstrap from 'bootstrap';

console.log('Compilation des fichiers grâce à Webpack => OK! (index.js)');

// $('body').css('background-color', 'red');

var i = 0;

function findImage(i, e) {
    if ( i === 1) {
        var firstImage = $(e).find('.flip-card-inner .flip-card-back img').attr('src');
        return firstImage;
    } else if ( i === 2 ) {
        var secondImage = $(e).find('.flip-card-inner .flip-card-back img').attr('src');
        return secondImage;
    }
}

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack == needle) return true;
    }
    return false;
}

let arrayImage = [];
let arrayElement = [];

$('.flip-card').click(function() {

    i++;

    if ( i == 3 ) {

        $('.flip-card .flip-card-inner').removeClass('see')
        i = 0;
        arrayImage = [];
        arrayElement = []; 

    } else if ( i == 1 || i == 2 ) {

        $(this).find('.flip-card-inner').addClass('see');

        var element = $(this).find('.flip-card-inner');

        if ( element !== undefined ) {
            arrayElement.push(element);
        }

        var result = findImage(i, this);

        if ( result !== undefined ) {
            arrayImage.push(result);
        }

        if ( arrayImage.length === 2 ) {

            if ( arrayImage[0] !== undefined && arrayImage[1] !== undefined ) {
                var resultComparison = inArray(arrayImage[0], arrayImage[1]);
            }
        
            if ( resultComparison !== true ) {

                setTimeout(() => {
                    $('.flip-card .flip-card-inner').removeClass('see')
                }, "1000");
                
            } else if ( resultComparison == true ) {

                arrayElement.forEach(function(content) {
                    content.addClass('found');
                });

            }

            i = 0;
            arrayImage = [];
            arrayElement = []; 
        
        }

    }

});