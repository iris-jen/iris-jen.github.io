'use client';

import React, { useState } from 'react';
import FretlessBass from '../data/projects/FretlessBass';

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

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <FretlessBass onClick={openModal} />
          </div>
  

        </div>
      </div>
      <ProjectDetailsModal show={showModal} onClose={closeModal} project={selectedProject} />
    </>
  );
}
