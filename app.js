$(document).ready(function () {
  // core drawing function
  let drawMeme = function () {
    //let img = document.querySelector('#start-image');

    let meme = $('#meme');

    let fontSize = Number($('#text_size').val());

    let textColor = $('#text_color').val();

    meme.css('font-size', fontSize);
    meme.css('color', textColor);

    let text1 = $('#top_text').val();
    $('#top_text_content').text(text1);

    let text2 = $('#bottom_text').val();
    $('#bottom_text_content').text(text2);

    console.log('debug');
  };

  // read selected input image from upload field and display it in browser
  $('#imgInput').change(function () {
    let input = this;

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        $('#meme').css('background-image', 'url(' + e.target.result + ')');
      };

      reader.readAsDataURL(input.files[0]);
    }

    window.setTimeout(function () {
      drawMeme();
    }, 500);
  });

  //Event Listeners
  $(document).on('change keydown keyup', '#top_text', function () {
    drawMeme();
  });

  $(document).on('change keydown keyup', '#bottom_text', function () {
    drawMeme();
  });

  //font-size slider event listener
  $('#text_size').change(function () {
    $('#text_size_value').text($(this).val());
    drawMeme();
  });

  $('#text_color').change(function () {
    $('#text_color_value').text($(this).val());
    drawMeme();
  });
});
