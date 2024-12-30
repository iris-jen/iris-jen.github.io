import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ProjectDetailsModal({ show, onClose, project }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid mb-3"
          style={{ borderRadius: '8px' }}
        />
        <p>{project.longDescription}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Project
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
