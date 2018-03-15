

  $item = $('#wrap')

  $('.wide-style').on('click',function(){
     $item.addClass('wide'); 
        $item.removeClass('boxed');
        $item.removeClass('framed');
        $item.removeClass('rounded');
  });
  $('.boxed-style').on('click',function(){
     $item.addClass('boxed'); 
        $item.removeClass('wide');
        $item.removeClass('framed');
        $item.removeClass('rounded');
     
  });
  $('.framed-style').on('click',function(){
     $item.addClass('framed'); 
        $item.removeClass('wide');
     $item.removeClass('boxed');
     $item.removeClass('rounded');
  });
  $('.rounded-style').on('click',function(){
     $item.addClass('rounded'); 
        $item.removeClass('wide');
     $item.removeClass('boxed');
     $item.removeClass('framed');
  });

  $item1 = $('body')

  $('.bg-img-1').on('click',function(){
     $item1.addClass('bg-1'); 
        $item1.removeClass('bg-2');
        $item1.removeClass('bg-3');
        $item1.removeClass('bg-4');
  });

  $('.bg-img-2').on('click',function(){
     $item1.addClass('bg-2'); 
        $item1.removeClass('bg-1');
        $item1.removeClass('bg-3');
        $item1.removeClass('bg-4');
  });

  $('.bg-img-3').on('click',function(){
     $item1.addClass('bg-3'); 
        $item1.removeClass('bg-1');
        $item1.removeClass('bg-2');
        $item1.removeClass('bg-4');
  });

  $('.bg-img-4').on('click',function(){
     $item1.addClass('bg-4'); 
        $item1.removeClass('bg-1');
        $item1.removeClass('bg-2');
        $item1.removeClass('bg-3');
  });


$('#header-s').change(function(){ 
  $('body').removeClass('hr-oswald');
  $('body').removeClass('hr-open-sans');
  $('body').removeClass('hr-lato');
  $('body').removeClass('hr-raleway');
  $('body').removeClass('hr-source-sans-pro');
  $('body').removeClass('hr-pt-sans');
  $('body').removeClass('hr-droid-serif');
  $('body').addClass(this.value);
});

$('#body-f').change(function(){ 
  $('body').removeClass('bg-oswald');
  $('body').removeClass('bg-open-sans');
  $('body').removeClass('bg-lato');
  $('body').removeClass('bg-raleway');
  $('body').removeClass('bg-source-sans-pro');
  $('body').removeClass('bg-pt-sans');
  $('body').removeClass('bg-droid-serif');
  $('body').addClass(this.value);
});






