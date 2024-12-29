'use client';

import React from 'react';
import Image from 'next/image';

export default function AlbumCard({ album, onClick }) {
  return (
    <div
      className="card text-white bg-dark album-card mb-4 shadow-sm"
      onClick={() => onClick(album)}
      style={{ cursor: 'pointer' }}
    >
      <Image
        src={album.cover}
        alt={album.name}
        width={300}
        height={300}
        className="card-img-top rounded-top"
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{album.name}</h5>
        <p className="card-text mb-0">
          <strong>Recorded:</strong> {album.recordedYear}
        </p>
        <p className="card-text">
          <strong>Written:</strong> {album.writtenYear}
        </p>
      </div>
    </div>
  );
}
