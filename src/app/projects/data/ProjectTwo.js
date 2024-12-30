import React from 'react';

export default function ProjectTwo({ onClick }) {
  const project = {
    id: 2,
    title: 'E-commerce Platform',
    shortDescription: 'A full-stack e-commerce platform.',
    longDescription:
      'Developed a scalable e-commerce platform with product listings, payment integration, and user authentication.',
    image: '/images/projects/ecommerce.png',
    link: 'https://example.com/ecommerce',
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
