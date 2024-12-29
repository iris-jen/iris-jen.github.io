// /music/albums.js

const albums = [
    {
      id: 'album1',
      name: 'Echoes of Eternity',
      recordedYear: 2022,
      writtenYear: 2021,
      cover: '/albums/album1.jpg',
      details: 'An ethereal journey through soundscapes and emotions.',
      tracks: [
        'Track 1: Awakening',
        'Track 2: Into the Light',
        'Track 3: Shadows Fall',
        'Track 4: Eternal Echo'
      ],
      links: {
        appleMusic: 'https://music.apple.com/album1',
        spotify: 'https://spotify.com/album1',
        itunes: null,
        youtubeMusic: 'https://music.youtube.com/album1',
        deezer: null
      }
    },
    {
      id: 'album2',
      name: 'Whispers in the Wind',
      recordedYear: 2020,
      writtenYear: 2019,
      cover: '/albums/album2.jpg',
      details: 'A melodic exploration of hope and resilience.',
      tracks: [
        'Track 1: Silent Breeze',
        'Track 2: Midnight Haze',
        'Track 3: Golden Horizon'
      ],
      links: {
        appleMusic: null,
        spotify: 'https://spotify.com/album2',
        itunes: 'https://itunes.apple.com/album2',
        youtubeMusic: null,
        deezer: 'https://deezer.com/album2'
      }
    }
  ];
  
  export default albums;
  