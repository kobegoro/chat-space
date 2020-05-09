$(function(){
  function builHTML(message){
    var img = message.image ? `<img src="${message.image}" >` : "";
      var html = 
        `<div class="chat-main__message-list__messages">
          <div class="create-by">
            <div class="author">
              ${message.user_name}
            </div>
            <div class="create-date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="lower-message__content">
              ${message.content}
            </p> 
          </div>
          ${img}
        </div>`
      return html;
  }

  

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = builHTML(data);
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.chat-main__form__submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});