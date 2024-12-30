import React from 'react';

export default function ProjectOne({ onClick }) {
  const project = {
    id: 1,
    title: 'Portfolio Website',
    shortDescription: 'A modern personal portfolio built with React.',
    longDescription:
      'This project showcases my portfolio with animations, responsive design, and optimized performance using React and Next.js.',
    image: '/images/projects/portfolio.png',
    link: 'https://example.com/portfolio',
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
      </div>
    </div>
  );
}
