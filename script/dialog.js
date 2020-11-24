function openAsDialog(url) {
  var iframeStyle = 'min-width     : 100%; ' +
                    'height        : 100%; ' +
                    'padding-top   : 0.2em; ' +
                    'padding-right : 0; ' +
                    'padding-bottom: 0.8em; ' +
                    'padding-left  : 0;';
  var iframe = $('<iframe frameborder="0" src="' + url + '" style="' + iframeStyle + '"></iframe>');

  var dialogOptions = {
    width : 400,
    height: 250,
    modal : true,
    title : "確認",
    buttons: [
      {
        text :'OK',
        click: function() {
          $(this).dialog('close');
        }
      },
      {
        text :'戻る',
        click: function() {
          $(this).dialog('close');
        }
      }
    ]
  };
  iframe.dialog(dialogOptions);
}
