import React from 'react';

export default function ProjectDetailsModal({ show, onClose, project }) {
  if (!project) return null;

  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
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
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
