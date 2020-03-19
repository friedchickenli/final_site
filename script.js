//realized that OAuth Token expires after an hour, might need to go to https://developer.spotify.com/console/get-search-item/ and replace it with a new token!
var token =
'BQARl8YGnR-YXDO0dOSo2DZESHSU1OPogo_PRwBqDQxnmy7RXUWvTE9i6HflLwumkhE9geqpB_o7vQtEQf__flVssHXSCJqMDNnp6VD4Vk3oAAE0vQfA6jY5Nnsa2NIyLgwnFcpK98Eq';
var user_keyboard='';
var endpoint = 'https://api.spotify.com/v1/search';

$('#searchB').click(function(){
  reset();
  setTimeout(function(){
    user_keyboard = $('#userInput').val();
    search(user_keyboard);
  },100)
})

function search(input){
  $.ajax({
    
    url: endpoint,
    headers:{
      Authorization: 'Bearer ' + token
    },
    
    data:{
      q:user_keyboard,
      type:'album',
      limit:10
    },
    
    success:function(response){
     renderData(response.albums.items);
       console.log(response)
      //  console.log(albums)
    }
  });
 
}

function renderData(albums){
 albums.forEach(function(album){
  $('.results').append(`
    <div class="album-item">
     <img src="${album.images[0].url}"/>
     <h2>${album.name}</h2>
     <h3>${album.artists[0].name}</h3>
    </div>
  
`)
 })
}

function reset(){
  $('.results').empty();
}