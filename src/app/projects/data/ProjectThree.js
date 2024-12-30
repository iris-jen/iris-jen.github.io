import React from 'react';

export default function ProjectThree({ onClick }) {
  const project = {
    id: 3,
    title: 'Weather App',
    shortDescription: 'A weather forecasting app.',
    longDescription:
      'Built a weather app using API integration, displaying real-time weather updates with beautiful UI.',
    image: '/images/projects/weather.png',
    link: 'https://example.com/weather',
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
