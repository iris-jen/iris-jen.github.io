// pages/music.js

'use client';

import React, { useState } from 'react';

import AlbumCard from '../components/AlbumCard';
import AlbumDetailsModal from '../components/AlbumDetailsModal';
import albums from '../data/Albums';

export default function Music() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (album) => {
    setSelectedAlbum(album);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    setShowModal(false);
  };

  return (
    <>
  
      <div className="container mt-5">

        <div className="row">
          {albums.map((album) => (
            <div key={album.id} className="col-md-6 col-lg-4 mb-4">
              <AlbumCard album={album} onClick={openModal} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AlbumDetailsModal show={showModal} onClose={closeModal} album={selectedAlbum} />
    </>
  );
}
