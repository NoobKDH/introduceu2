$(document).ready(function(){
    $('.myimg').show();
    $('.myimg2').hide();

    $('.myimg').click(function(){
        $('.myimg').hide();
        $('.myimg2').show();
    });
    $('.myimg2').click(function(){
        $('.myimg').show();
        $('.myimg2').hide();
    });
    $('a').hover(function(){
        $(this).css('color','red');
    }, function(){
        $('.acolor').css('color','#F361DC');
    });

    $('.emailfont').hover(function(){
        $(this).css('color','red');
    }, function(){
        $(this).css('color','#A6A6A6')
    });
    $('.pdfcolor').hover(function(){
        $(this).css('color','black');
    }, function(){
        $(this).css('color','gray')
    });
    $('#panel1').hide();
        $('.2021').click(function(){
            $(this).next('#panel1').slideToggle();
        });
    $('#panel2').hide();
        $('.2022').click(function(){
            $(this).next('#panel2').slideToggle();
        });
    if(window.location.href === 'home.html'){
        $('.home').css('font-weight','bold');
    };
    if(window.location.href === 'introduce.html'){
        $('.introduce').css('font-weight','bold');
    };
    if(window.location.href==='project.html'){
        $('.project').css('font-weight','bold');
    };

});
