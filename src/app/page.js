import Image from "next/image";

import TitleBlock from './components/AnimatedIris';

export default function Home() {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="card shadow-lg mb-5 border-0 text-white bg-dark">
          <div className="card-body text-center p-4">
            <h5 className="card-title fw-bold">Hi!</h5>
            <p className="card-text">
              You found my personal site!
              Im a musician / software developer / sometimes person.
              i made this to keep track of projects, and keep links to stuff in one place.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <Image
                src="me.jpg"
                alt="Square Avatar"
                width={200}
                height={200}
                className="img-fluid rounded border border-3 border-primary"
              />
            </div>
            <div className="mt-3">
              <a
                href="/music"
                className="btn btn-outline-light fw-bold"
              >
                🎵 Music
              </a>
            </div>
            <div className="mt-3">
              <a
                href="mailto:iris.jennis@gmail.com"
                className="btn btn-outline-light fw-bold"
              >
                📧 Contact
              </a>
            </div>
          </div>
        </div>

        <div className="iris-container mx-auto mb-5">
          <TitleBlock />
        </div>

        {/* Social Links Card */}
        <div className="card shadow-lg mb-5 border-0 text-white bg-dark">
          <div className="card-body text-center p-4">

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/iris-jen" target="_blank" className="btn btn-outline-light rounded-circle p-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/iris_jennison_/" target="_blank" className="btn btn-outline-light rounded-circle p-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/people/Iris-Jennison-Music/61571030457155/" target="_blank" className="btn btn-outline-light rounded-circle p-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://discordapp.com/users/_iris_j" target="_blank" className="btn btn-outline-light rounded-circle p-3">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-4 mb-5">
            <a href="https://github.com/iris-jen/iris-jen.github.io" target="_blank" className="text-decoration-none fw-bold text-light">
              Source Code for this Website (Next.js)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
