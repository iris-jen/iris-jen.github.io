import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ProjectOne({ onClick }) {
  const project = {
    id: 1,
    title: 'Fretless bass conversion',
    shortDescription: 'Made a fretted bass a fretless one and drew a lil tree on the headstock :)  🔗🔗🔗',
    image: '/images/projects/portfolio.png',
    link: 'https://example.com/portfolio',
    modalContent: <div>
      <embed src="/projects/quadrafucker/Binder1.pdf" width="500" height="375" 
 type="application/pdf"></embed>
    </div>


  };

  return (
    <div
      className="card project-card text-center"
      onClick={() => onClick(project)}
      style={{ cursor: 'pointer' }}
    >

      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.shortDescription}</p>
        <Image
          src={"/projects/bass/epour2_head.jpg"}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded mb-3"
        />
      </div>
    </div>
  );
}

