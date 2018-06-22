$(document).ready(function(){
    $('button').click(function(){
        $("button").removeClass("selected")
        $(this).addClass("selected");
        const flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
        const animal = $(this).text();
        flickerOpt = {
            tags : animal,
            format : "json"
        };
         function displayPhotos(data){
            let photoHTML = "<ul>";
            $.each(data.items,function (index, photos){
               photoHTML += `<li class="grid-25 tablet-grid-50">`;
               photoHTML += `<a href="${photos.value}"></a>`
               photoHTML += `<img src=${photos.media.m}`
               photoHTML += `</a>`
               photoHTML += `</li>`

            })
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
         }
        $.getJSON(flickerAPI, flickerOpt, displayPhotos);
    });
    $('ul li').click(function() {
        $('.current').removeClass('current');
        $(this).addClass('current');
      });
})