'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function AlbumDetailsModal({ show, onClose, album }) {
  // ✅ Declare all hooks at the top of the component
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // ✅ Play or Pause Track
  const playTrack = (track) => {
    if (currentTrack === track && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100); // Ensure the audio file is loaded
    }
  };

  // ✅ Pause Track
  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  // ✅ Helper function for streaming links
  const renderLink = (url, iconClass, label) => {
    if (!url) return null;

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-light rounded-circle"
        aria-label={label}
      >
        <i className={iconClass}></i>
      </a>
    );
  };

  // ✅ Prevent rendering without an album
  if (!album) return null;

  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white border-primary">
          <div className="modal-header">
            <h5 className="modal-title">{album.name}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center">
            {/* Album Cover */}
            <Image
              src={album.cover}
              alt={album.name}
              width={300}
              height={300}
              className="img-fluid rounded mb-3"
            />

            {/* Album Details */}
            <p><strong>Recorded:</strong> {album.recordedYear}</p>
            <p><strong>Written:</strong> {album.writtenYear}</p>
            <p><strong>Details:</strong> {album.details}</p>

            {/* Track List */}
            {album.tracks && album.tracks.length > 0 && (
              <div className="mt-4">
                <h6>Track List:</h6>
                <ul className="list-group text-start">
                  {album.tracks.map((track, index) => (
                    <li
                      key={index}
                      className={`list-group-item d-flex justify-content-between align-items-center ${
                        currentTrack === track ? 'bg-primary text-white' : 'bg-transparent'
                      }`}
                    >
                      {track}
                      <button
                        onClick={() => playTrack(track)}
                        className="btn btn-sm btn-outline-light"
                      >
                        {currentTrack === track && isPlaying ? (
                          <i className="bi bi-pause-fill"></i>
                        ) : (
                          <i className="bi bi-play-fill"></i>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Streaming Links */}
            <div className="mt-4">
              <h6>Listen on:</h6>
              <div className="d-flex justify-content-center gap-3 mt-2">
                {renderLink(album.links?.appleMusic, 'bi bi-apple', 'Apple Music')}
                {renderLink(album.links?.spotify, 'bi bi-spotify', 'Spotify')}
                {renderLink(album.links?.itunes, 'bi bi-music-note-beamed', 'iTunes')}
                {renderLink(album.links?.youtubeMusic, 'bi bi-youtube', 'YouTube Music')}
                {renderLink(album.links?.deezer, 'bi bi-music-note', 'Deezer')}
              </div>
            </div>
          </div>

          {/* Media Player */}
          {currentTrack && (
            <div className="modal-footer d-flex flex-column align-items-center bg-secondary text-white py-3">
              <h6>Now Playing:</h6>
              <p className="fw-bold">{currentTrack}</p>
              <audio
                ref={audioRef}
                src={`/albums/${album.id}/${currentTrack.toLowerCase().replace(/ /g, '_')}.mp3`}
                controls
                className="w-100"
              ></audio>
            </div>
          )}

          <div className="modal-footer d-flex justify-content-between">
            <button type="button" className="btn btn-outline-light" onClick={onClose}>
              Close
            </button>
            <a
              href={`/albums/${album.id}.zip`}
              download={`${album.name}.zip`}
              className="btn btn-primary"
            >
              Download MP3s
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
