(function() {

  console.log('httpHandler client invoked');

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  const ajaxGet = () => {
    $.get({
      type: 'GET',
      url: serverUrl,
      success: (direction) => {
        console.log('direction from server => ', direction)
        SwimTeam.move(direction);
      },
      complete: () => {
        setTimeout(ajaxGet, 25);
      },
      error: error => {console.log(error)}
    });
  };

<<<<<<< HEAD
  setInterval(ajaxGet, 5000);

||||||| merged common ancestors
  setInterval(ajaxGet, 5000);




=======
  ajaxGet();


const fetchImage = () => {
  $.ajax({
    type: 'GET',
    url: serverUrl + '/background.jpg',
    success: image => {
      console.log('this image from fetch => ', image);
      $('.pool').css('background-image', `url('${image}')`);
    },
    error: error => { console.log(error) }
  });
}

fetchImage();
>>>>>>> 6261ba5e7d78d78e1b9718786030a13672aa01c2
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
<<<<<<< HEAD
      url: serverUrl,
||||||| merged common ancestors
      url: 'http://127.0.0.1:8080/',
=======
      url: serverUrl + '/background.jpg',
>>>>>>> 6261ba5e7d78d78e1b9718786030a13672aa01c2
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      },
      error: (error) => {
        console.log(error)
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
