var jsx = 
    
    <div id="container">
      <h3 className="fa fa-video-camera" aria-hidden="true"> Видеостудия</h3>
      <h1>#23TV</h1>
       <hr/>
       
      <h4>О нас</h4>
      <p className="fa fa-video-camera"> Мы молодая школьная видеостудия</p>
      <p className="fa fa-plus"> Основана в 2016 году</p>
      <p className="fa fa-map-marker"> Мы находимся в городе Иваново, 23 гимназии</p>
      <hr/>
      <h3>Новости</h3>
      <div id="news">
          <i className="fa fa-newspaper-o"><h5>Название новости</h5><p>Время</p></i>
          <p id="lif_new">Новость</p>
      </div>
      <br/>
      <div id="news">
          <i className="fa fa-newspaper-o"><h5>Название новости</h5><p>Время</p></i>
          <p id="lif_new">Новость</p>
      </div>
      <hr/>
      <h3>Наши видео</h3>
      
      
    <i className="fa fa-file-video-o"> <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/6PZ8r7ky3Rg" frameborder="0" allowfullscreen></iframe></i>
    <br/>
    <br/>
    <i className="fa fa-file-video-o"> <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/byoJGd4U9xg" frameborder="0" allowfullscreen></iframe></i>
    <br/>
    <br/>
    <i className="fa fa-file-video-o"> <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/OF0yS2ryZ9A" frameborder="0" allowfullscreen></iframe></i>
    <br/>
    <br/>
    <i className="fa fa-file-video-o"> <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/fszwqb3-xw0" frameborder="0" allowfullscreen></iframe></i>
    <hr/>
    <a href="https://vk.com/mediacentr23"><i className="fa fa-vk"></i></a>
    <br/>
    <a href="https://www.youtube.com/channel/UC1BIF_7YXKZzVj3k6Dcb0sA"><i  className="fa fa-youtube-play"></i></a>
    </div>;
      
      var OneSignal = window.OneSignal || [];
      OneSignal.push(["init", {
        appId: "323bf40b-85ba-42bf-a642-07599101d065",
        autoRegister: false,
        notifyButton: {
          enable: true /* Set to false to hide */
        },
    /* Your other init options here */
    notifyButton: {
        enable: true, /* Required to use the notify button */
        size: 'medium', /* One of 'small', 'medium', or 'large' */
        theme: 'default', /* One of 'default' (red-white) or 'inverse" (white-red) */
        position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */
        offset: {
            bottom: '0px',
            left: '0px', /* Only applied if bottom-left */
            right: '0px' /* Only applied if bottom-right */
        },
        prenotify: true, /* Show an icon with 1 unread message for first-time site visitors */
        showCredit: false, /* Hide the OneSignal logo */
        text: {
            'tip.state.unsubscribed': 'Subscribe to notifications',
            'tip.state.subscribed': "Вы подписаны",
            'tip.state.blocked': "You've blocked notifications",
            'message.prenotify': 'Click to subscribe to notifications',
            'message.action.subscribed': "Thanks for subscribing!",
            'message.action.resubscribed': "Вы подписаны",
            'message.action.unsubscribed': "You won't receive notifications again",
            'dialog.main.title': 'Manage Site Notifications',
            'dialog.main.button.subscribe': 'SUBSCRIBE',
            'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
            'dialog.blocked.title': 'Unblock Notifications',
            'dialog.blocked.message': "Follow these instructions to allow notifications:"
        }
    }
      }]);
                 


    
ReactDOM.render(jsx, document.getElementById('root'));