import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ProjectOne({ onClick }) {
  const project = {
    id: 1,
    title: 'Fretless bass conversion',
    shortDescription: 'Made a fretted bass a fretless one and drew a lil tree on the headstock :)  🔗🔗🔗',
    image: '/images/projects/portfolio.png',
    link: 'https://example.com/portfolio',
    modalContent: <div>
      <p>I ended up breaking the truss rod in my 5 string while i was trying to make some adjustments</p>
      <p>Sucks, but lesson learned, dont fucking over torque things lmao</p>
      <p>At first i was considering melting the glue between the neck and the fretboard so i could pop it and swap out the 
        truss rodd. but i was not able to get enough heat applied in a uniform way, and it was not budging  😾
      </p>
      <p>Anyways, i ordered a new neck off ebay from some rando seller. was considering warmoth or another custom fab,
        but i did not want to spend more than $150 on a new neck 🤷‍♀️</p>

      <p> 🎲SO I ROLLED THE DICE ON MYSTERY NECK :)! WITH NO MEASUREMENTS OR
        INFORMATION LISTED OTHER THAN IT MIGHT FIT A 5 STRING JAZZ BASS BODY LETS FUCKING GOOOOOO 🎲</p>

      <p className='trans-flag-text'>~~~~~~~LETS FUCKING GOOOOOO~~~~~~~~~</p>
      <Image
        src={"/projects/bass/start.jpg"}
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
      <p>I could have filed down the frets, but ive been missing playing fretless bass.
        i had one years and years ago but i sold it for travel money at the time lol</p>

      <p>I did not get any pics with the frets ripped out, but here it is with them filled.
        I used nail polish to fill and mark them lmao. Quick test then time to start mixing epoxy!
      </p>
      <Image
        src={"/projects/bass/pre-epoxy.jpg"}
        alt="Bass with details before epoxy pour"
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>First poor was not great, i mostly succeeded in making a giant fucking mess lol, as it all just kinda dripped down the sides
        :)
      </p>
      <Image
        src={"/projects/bass/epour1.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>after that it was a 2 day wait for it to cure enough to re-pour</p>
      <p>this time i used the tape to build a lil epoxy revisor so, yah know, it stays where its supposed to lol</p>
      <Image
        src={"/projects/bass/epour2.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>with the epoxy confined in its green prison, it was time to hurry up and wait. </p>


      <Image
        src={"/projects/bass/epour2_head.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>Very shiny and pretty tho </p>

      <Image
        src={"/projects/bass/epour2.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>after about 3 days of waiting it was time to sand this thing back to a normal height lol.
        i really wanted to bite it at this point, it looked weirdly apatazing, like a gummy candy or some shit
        after the first pour i put some sparkly red transparent nail polish on, now it shimmers in the light :3</p>
      <Image
        src={"/projects/bass/much_to_sand.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />

      <p>The end result of all the sanding</p>
      <Image
        src={"/projects/bass/fin_2.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p>the little part at the end where the epoxy is completely gone bugs me a bit. but good enough for now.
        and it sounds / plays pretty good. wet sanding worked pretty good,  i went from 500 to 600 to 800 grit.
        did not have anything finer, or a polishing pad, so its kinda mate. i might do another layer in the future
        and do a better job polishing it so it stays shinnnyyyyy, like your playing on glass</p>
      <Image
        src={"/projects/bass/fin_3.jpg"}
        alt=""
        width={400}
        height={400}
        className="img-fluid rounded mb-3"
      />
      <p className='trans-flag-text'>anywhooooo thats it, thanks for reading, peace out! ❤️❤️❤️</p>
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
          src={"/projects/bass/epour2_head.jpg"}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded mb-3"
        />
      </div>
    </div>
  );
}

