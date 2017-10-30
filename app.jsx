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
                 


    
ReactDOM.render(jsx, document.getElementById('root'));