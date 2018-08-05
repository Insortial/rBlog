//Home
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

//Posts
const $color_indicator = $("#color-indicator");
const $content_browser = $("#content_browser");
const $color_divider = $("#color-divider");
const $phillipines = $(".philippines");
const $america = $(".america");
const $career = $(".career");
const $content_nav = $("#content_nav");

$("#content_nav:first-child").hide();

/*Content Selector*/
const change_color = (color) => {
    $($color_indicator).css('background', color);
    $($color_divider).css('background', color);
}

const change_display = (america, career, philippines) => {
    $($america).each(function(i) {
        let parent = this.parentNode;
        parent.style.display = america;
    });
    $($career).each(function(i) {
        let parent = this.parentNode;
        parent.style.display = career;
    });
    $($phillipines).each(function(i) {
        let parent = this.parentNode;
        parent.style.display = philippines;
    });
    $("#content_nav:first-child").show();
}

$($content_browser).on('click', x => {
    let Childs = x.target;
    if(Childs.tagName == 'LI') {
        switch(Childs.textContent) {
            case 'Philippines':
                change_color('#6a90d2');
                change_display('none', 'none', 'block');
                break;
            case 'Career':
                change_color('#6f99e1');
                change_display('none', 'block', 'none');
                break;
            case 'America':
                change_color('#7fa3e1');
                change_display('block', 'none', 'none');
                break;
            }
        }
});

$($content_nav).on('click', x => {
    let target = x.target;
    if(target.tagName == 'H3') {
        change_color('linear-gradient(to right, #7fa3e1,#6a90d2,#6f99e1)');
        change_display('block', 'block', 'block');
        $("#content_nav:first-child").hide();
    }
});

