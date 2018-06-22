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
            
            let photoHTML = `<div class='row'>`;
            $.each(data.items,function (index, photos){
               photoHTML += `<div class="col-sm-2 col-md-6 col-lg-3 mb-2">`;
               photoHTML += `<a href="${photos.value}"></a>`
               photoHTML += `<img src=${photos.media.m}`
               photoHTML += `</a>`
               photoHTML += `</div>`

            })
            photoHTML += '</div>';
            $('#photos').html(photoHTML);
         }
        $.getJSON(flickerAPI, flickerOpt, displayPhotos);
    });
    $('ul li').click(function() {
        $('.current').removeClass('current');
        $(this).addClass('current');
      });
})