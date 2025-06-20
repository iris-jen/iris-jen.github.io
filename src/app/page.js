import Image from "next/image";

import TitleBlock from './components/AnimatedIris';

export default function Home() {
  return (
    <>
       <div className="iris-container mx-auto ">
          <TitleBlock />
        </div>
   

        <div className="card text-white bg-dark album-card mb-4 shadow-sm schooch">
          <div className="card-body text-center p-4">
            <h3 className="card-title fw-bold trans-flag-text">💜 Howdey! ^.^ 💜</h3>
            <div className="d-flex justify-content-center mt-4">
              <Image
                src="/me.webp"
                alt="Square Avatar"
                width={250}
                height={250}
                className="img-fluid rounded border border-3 border-primary"
              />
            </div>
            <p className="card-text">
              <br/>
              You found my website :) <br/>
              Im a musician / software developer / sometimes person (i try).<br/>
              I made this to keep track of projects<br/>
               and keep links to stuff in one place. <br/>
              stay a while! click / tap some shit 🖱️

              <br/><br/>  
              <a href="https://www.istockphoto.com/photos/pig" className="text-decoration-none">
              🏴 <b className="trans-flag-text"> 1010 1100 1010 1011 </b> 🏴
              </a>
              
            </p>
            <div className="text-center mt-4 mb-5">
            <a href="https://github.com/iris-jen/iris-jen.github.io" target="_blank" className="text-decoration-none fw-bold text-light">
            💻 <i className="trans-flag-text"> Source Code for this Website, its hosted for free on github pages <br/>
               feel free to use it as template to make your own :3 </i> 💻
            </a>
          </div>
            <div>
              <a
                href="/music"
                className="btn btn-outline-light fw-bold"
              >
                🎵<b className="trans-flag-text">Music</b>
              </a>
            </div>
            <div className="mt-3">
              <a
                href="/projects"
                className="btn btn-outline-light fw-bold"
              >
                🛠️<b className="trans-flag-text">Projects</b>
              </a>
            </div>
            <div className="mt-3">
              <a
                href="mailto:iris.jennis@gmail.com"
                className="btn btn-outline-light fw-bold"
              >
                📧<b className="trans-flag-text">Contact</b>
              </a>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/iris-jen" target="_blank" className="btn btn-outline-light rounded-circle p-4 trans-flag-text">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
