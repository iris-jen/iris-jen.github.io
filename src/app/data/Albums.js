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
    
    {
      id: 'bcv_live',
      name: 'BADCROWVIBES - Live',
      recordedYear: 2014,
      writtenYear: 2012,
      cover: 'music/bcv/cover.png',
      details: 'A recording of a live show from the folk punk times. Feat Lora Calvert on the ukelele and backup vocals',
             
      tracks: [
        {title:'Sandcastles', file :"music/bcv/01_bcv_live_sandcastles.mp3"},
        {title:'Shipwrecks Parts 1 & 2', file :"music/bcv/02_bcv_live_shipwrecks_pt_1_2.mp3"},
        {title:'Lines', file :"music/bcv/03_bcv_live_lines.mp3"},
        {title:'Run', file :"music/bcv/04_bcv_live_run.mp3"},
        {title:'Honesty', file :"music/bcv/05_bcv_live_honesty.mp3"},
        {title:'Snow Drifts', file :"music/bcv/06_bcv_live_snowdrifts.mp3"},
        {title:'Anxiety', file :"music/bcv/07_bcv_anxiety.mp3"},

      ],
      links: {
        appleMusic: 'https://geo.music.apple.com/album/badcrowvibes-feat-lora-calvert-live/1786529323',
        spotify: 'https://open.spotify.com/album/6MXJ6VvO7bUOs9ZFYF1Sis',
        itunes: null,
        youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_mQCeT1lu36PDzQlJ24g1sFjN-nFTsec3Q",
        deezer: 'https://www.deezer.com/album/686326691'
      }
    },
    
  ];
  
  export default albums;
  