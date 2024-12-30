'use client';

import React, { useState } from 'react';
import ProjectOne from '../components/projects/ProjectOne';
import ProjectTwo from '../components/projects/ProjectTwo';
import ProjectThree from '../components/projects/ProjectThree';
import ProjectDetailsModal from '../components/ProjectDetailsModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">🚀 My Projects</h1>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <ProjectOne onClick={openModal} />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <ProjectTwo onClick={openModal} />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <ProjectThree onClick={openModal} />
          </div>
        </div>
      </div>
      <ProjectDetailsModal show={showModal} onClose={closeModal} project={selectedProject} />
    </>
  );
}
