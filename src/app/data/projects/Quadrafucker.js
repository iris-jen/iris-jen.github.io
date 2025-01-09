import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ProjectOne({ onClick }) {
  const project = {
    id: 1,
    title: 'QUADRAFUCKER',
    shortDescription: 'a silly lil robot i made back in 2015 ish :3  🔗🔗🔗',
    image: '/images/quadrafucker/pr.png',
    modalContent: <div>

      <p>This post is mostly a WIP. trying to find some old photos and videos of this fucker in action.
        ive deleted alot of acounts over the years and seem to lost alot of the media i had from it :(
      </p>

      <p>Heres some renders from solidworks. Hopefully i can find the old files and throw them up to.
      </p>
      <Image
        src={"/projects/quadrafucker/fvr.png"}
        alt="front view render of quadrafucker"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
        className="img-fluid rounded mb-3"
      />
      <Image
        src={"/projects/quadrafucker/tvr.png"}
        alt="top view render of quadrafucker"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
        className="img-fluid rounded mb-3"
      />

      <Image
        src={"/projects/quadrafucker/pr.png"}
        alt="perspective render of quadrafucker"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
        className="img-fluid rounded mb-3"
      />


      <p>And some schematics. I was using and arduino for all the control logic.
        i didnt really have any method for programming the movments other than guessing angles lol.
        the servos i bought had the wiper pin of the pot inside brought out on a seperate wire. so i used that as an analog input.
        i basicly set up a record function and moved the motors to where i wanted them. then saved the motions into a sequence, and used
        it for forward walk, backwards walk, strafe, turns etc. it fell over alot :).

        I wired up a raspbery pi and used it as a web interface to make the robot walk around. i had four buttons for directions. simple shit.
        it was part of project for a microcontrollers class which i put way to much effor into lmao
        i miss it. one day i will bring it back to life.
      </p>

      <Image
        src={"/projects/quadrafucker/ogschematic.png"}
        alt="Sschematic"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
        className="img-fluid rounded mb-3"
      />

      <p>Pulled from the report. i had ambitions of ditching the arduino and just using a bunch of ADCs and a i2c servo controler on the pi~~~
      next probable schematic is a fucking silly title. lol like am i randomly generating them?
      </p>
      <Image
        src={"/projects/quadrafucker/lolschematic.png"}
        alt="Sschematic"
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
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
          src={"/projects/quadrafucker/pr.png"}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded mb-3"
        />
      </div>
    </div>
  );
}

