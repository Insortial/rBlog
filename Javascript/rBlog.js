const $menu_button = $("#menu");
const $menu = $("#nav_links");
const menu_bars = document.querySelectorAll("div.rectangle");
const $cat_image = $("#cat_image");
const $cat_name = $(".cat_name");
const $row_2 = $("#row_2");
const $selector = $("#selector");

let state = 0;

/*checks screen size*/
if($(window).width() < 710) {
    $($menu).hide();
}

/*toggle for menu button*/
$(window).resize(function(){
    if($(window).width() < 700) {
        $($menu).hide();
    } else if($(window).width() > 700) {
        $($menu).show();
    }
    if(state == 1) {
        $(menu_bars).each(function(i) {
            $(this).toggleClass('darkBlue');
            state = 0;
       });
    }
});

$($menu_button).on('click', x => {
    $($menu).animate({height:'toggle'},250);
    if(state == 0) {
        $(menu_bars).each(function(i) {
            $(this).toggleClass('darkBlue');
            state = 1;
       });
    } else if(state == 1) {
        $(menu_bars).each(function(i) {
            $(this).toggleClass('darkBlue');
            state = 0;
       }); 
    }
});

/*Dims Image shows Topic*/
$($cat_name).hide(500);

$($cat_image).on('mouseover', x => {
    $($cat_name).fadeIn(100);
});

$($cat_image).on('mouseout', x => {
    $($cat_name).stop(); 
    $cat_image.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $($cat_image).on('mouseout', x => {
            $($cat_name).fadeOut(100);
        });
    });
});

/*Changes Background Image and Color*/
const change = (value1, value2, value3) => {
    $($selector).css('background-color', value1);
    $($cat_image).css('backgroundImage', value2);
    $($cat_name).text(value3);
}

$($row_2).on('click', x => {
    let Childs = x.target;
    if(Childs.tagName == 'LI'){
        switch(Childs.textContent) {
            case 'Philippines':
                change('#6a90d2', 'url(../Images/Philippines.jpg)', 'Philippines');
                break;
            case 'Career':
                change('#6f99e1', 'url(../Images/Career.jpg)', 'Career');
                break;
            case 'America':
                change('#7fa3e1', 'url(../Images/America.jpg)', 'America');
                break;
            }
        }
});