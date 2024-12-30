import React from 'react';
import Image from 'next/image';

export default function ProjectOne({ onClick }) {
  const project = {
    id: 1,
    title: 'Fretless bass conversion',
    shortDescription: 'Made a fretted bass a fretless one',
    image: '/images/projects/portfolio.png',
    link: 'https://example.com/portfolio',
    modalContent: <div>
      <p>I ended up breaking the truss rodd in my 5 string while i was trying to make some adjustments</p>
      <p>Sucks, but lesson learned, dont fucking over torque things lmao</p>

      <p>Anyways, i ordered a new neck off ebay from some rando seller. was considering warrick or another custom fab,
        but i did not want to spend more than $150 on a new neck 🤷‍♀️</p>

      <p>SO WE ROLLED THE DICE ON MYSTERY NECK WITH NO MEASURMENTS OR INFORMATION LISTED OTHER THAN IT MIGHT FIT A 5 STRING JAZZ BASS BODY LETS FUCKING GOOOOOO 🎲</p>
      <Image
        src={"projects/bass/start.jpg"}
        alt="old bass neck and new bass neck side by side"
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>new neck is in the bottom of the photo there, old one on top</p>

      <p>Mostly fit into the pocket, but it was a tad to small on the sides.
        i ended up shimming it with cut up mountain dew cans on each side of the neck when it sits in the body and it works lmao.
        the shape of the bottom of the neck did not match the mating side on the body. so i just sanded it by eye till it roughly did :)</p>

      <p>Piloted the mounting holes, screwed the neck on, slapped some strings on that bad boy, did a quick check 
        and the frets cut the living shit out of my hands :(</p>
      <p>I could have filed down the frets, but ive been mising playing fretless bass.
        i had one years and years ago but i sold it for travel money at the time lol</p>

      <Image
        src={"projects/bass/pre-epoxy.jpg"}
        alt="Bass with details before epoxy pour"
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <Image
        src={"projects/bass/epour1.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <Image
        src={"projects/bass/epour2_head.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <Image
        src={"projects/bass/epour2.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <Image
        src={"projects/bass/epour2.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
    </div>


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
        <Image
        src={"projects/bass/epour2_head.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      </div>
    </div>
  );
}

