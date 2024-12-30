import Image from "next/image";

import TitleBlock from './components/AnimatedIris';

export default function Home() {
  return (
    <>
       <div className="iris-container mx-auto ">
          <TitleBlock />
        </div>
   

        <div className="card shadow-lg border-0 text-white bg-dark schooch">
          <div className="card-body text-center p-4">
            <h3 className="card-title fw-bold trans-flag-text">💜 Howdey! ^.^ 💜</h3>
            <div className="d-flex justify-content-center mt-4">
              <Image
                src="/me.jpg"
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
            <div className="mt-3">
              <a
                href="/music"
                className="btn btn-outline-light fw-bold trans-flag-text"
              >
                🎵 Music
              </a>
            </div>
            <div className="mt-3">
              <a
                href="mailto:iris.jennis@gmail.com"
                className="btn btn-outline-light fw-bold trans-flag-text"
              >
                📧 Contact
              </a>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/iris-jen" target="_blank" className="btn btn-outline-light rounded-circle p-3 trans-flag-text">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/iris_jennison_/" target="_blank" className="btn btn-outline-light rounded-circle p-3 trans-flag-text">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/people/Iris-Jennison-Music/61571030457155/" target="_blank" className="btn btn-outline-light rounded-circle p-3 trans-flag-text">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://discordapp.com/users/_iris_j" target="_blank" className="btn btn-outline-light rounded-circle p-3 trans-flag-text">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>

     
      
    </>
  );
}
