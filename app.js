$(document).ready(function () {
  const fontFamilies = ['Arial', 'Comic Sans', 'Pacifico'];

  let fontFamilySelect = $('#text_font_family');

  let meme = $('#meme');

  //Populate Font Family Select options
  let fontFamilyOptions = function (fontFamilyOptions) {
    $.each(fontFamilyOptions, function (index, value) {
      $('<option/>', {
        value: value,
        text: value,
      }).appendTo(fontFamilySelect);
    });
  };

  fontFamilyOptions(fontFamilies);

  // core drawing function
  let drawMeme = function () {
    let fontSize = Number($('#text_size').val());

    let textColor = $('#text_color').val();

    let fontFamily = fontFamilySelect.val();

    meme.css('font-size', fontSize);
    meme.css('color', textColor);
    meme.css('font-family', fontFamily);

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

  $('#text_font_family').change(function () {
    $('#text_font_family_value').text($(this).val());
    drawMeme();
  });

  $('#download_as_png').click(function () {
    domtoimage.toBlob(document.getElementById('meme')).then(function (blob) {
      window.saveAs(blob, 'output.png');
    });
  });
  $('#download_as_jpeg').click(function () {
    domtoimage.toBlob(document.getElementById('meme')).then(function (blob) {
      window.saveAs(blob, 'output.jpeg');
    });
  });
  $('#download_as_gif').click(function () {
    domtoimage.toBlob(document.getElementById('meme')).then(function (blob) {
      window.saveAs(blob, 'output.gif');
    });
  });
});
