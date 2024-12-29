'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function AlbumDetailsModal({ show, onClose, album }) {

  const [currentTrackPath, SetCurrentTrackPath] = useState(null);
  const [currentTrackName, SetCurrentTrackName] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  
  const playTrack = (track) => {
    console.log(track)
    if (currentTrackPath === track.file && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      SetCurrentTrackPath(track.file);
      SetCurrentTrackName(track.title);
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 100); // Ensure the audio file is loaded
    }
  };

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
                        currentTrackPath === track.title ? 'bg-primary text-white' : 'bg-transparent'
                      }`}
                    >
                      {/* Track Title */}
                      <span>{track.title}</span>

                      {/* Action Buttons */}
                      <div className="d-flex gap-2">
                        {/* Play/Pause Button */}
                        <button
                          onClick={() => playTrack(track)}
                          className="btn btn-sm btn-outline-light"
                        >
                          {currentTrackPath === track.file && isPlaying ? (
                            <i className="bi bi-pause-fill"></i>
                          ) : (
                            <i className="bi bi-play-fill"></i>
                          )}
                        </button>

                        {/* Download Button */}
                        <a
                          href={track.file}
                          download
                          className="btn btn-sm btn-outline-light"
                          title="Download Track"
                        >
                          <i className="bi bi-download"></i>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Streaming Links */}
            <div className="mt-4">
              <h6>Also on:</h6>
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
          {currentTrackPath && (
            <div className="modal-footer d-flex flex-column align-items-center bg-secondary text-white py-3">
              <h6>Now Playing:</h6>
              <p className="fw-bold">{currentTrackName}</p>
              <audio
                ref={audioRef}
                src={currentTrackPath}
                controls
                className="w-100"
              ></audio>
            </div>
          )}

          <div className="modal-footer d-flex justify-content-between">
            <button type="button" className="btn btn-outline-light" onClick={onClose}>
              Close
            </button>
  
          </div>
        </div>
      </div>
    </div>
  );
}
  // ✅ Pause Track