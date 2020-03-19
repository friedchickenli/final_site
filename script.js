//realized that OAuth Token expires after an hour, might need to go to https://developer.spotify.com/console/get-search-item/ and replace it with a new token!
var token =
'BQAyfjKrO0M0MfnCQ4ffF22mT28kMk-2i25YBWZvhO8MIjHQDoHQCykrzQmES6unmL3-R-nvxSpH0QYh3d6azPBqsQvroOPQYO-H46pTyK-JbVlFmnz2QM4eDR3zTnyNkVB3DK1HFlQH';
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
     <h2>${album.artists[0].name}</h2>
     <h3>${album.name}</h3>
    </div>
  
`)
 })
}

function reset(){
  $('.results').empty();
}