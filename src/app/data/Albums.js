// /music/albums.js

const albums = [
    {
      id: 'darts_stones',
      name: 'Stones / Darts',
      recordedYear: 2024,
      writtenYear: 2024,
      cover: 'music/darts_stones/cover.png',
      details: 'A recent full recording of an old ashmut song, '+
                'an acoustic demo of a song i wrote this year, and an acoustic cover of a song i really like',
      tracks: [
        {title:'Stones', file :"music/darts_stones/Stones.mp3"},
        {title:'Darts', file : "music/darts_stones/Darts.mp3"},
        {title:'City (Get Bent Cover)', file:"music/darts_stones/City_Get_Bent_Cover.mp3"},
      ],
      links: {
        appleMusic: 'https://geo.music.apple.com/album/stones-darts-single/1786522927',
        spotify: 'https://open.spotify.com/album/4X5X340oNQTjnxoPC3MLhJ',
        itunes: null,
        youtubeMusic: null,
        deezer: 'https://www.deezer.com/album/686250331'
      }
    },
    
    
  ];
  
  export default albums;
  