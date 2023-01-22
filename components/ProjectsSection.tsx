import Link from 'next/link';
import React from 'react'

export interface ProjectsProps {
    extraInfo?: boolean
}

const GeneralAssemblyProjects = () => (
  <div>
    <h3>During General Assembly</h3>
    <p>These projects were created at the beginning of my Software Engineering journey. I intend to return to them and remake them with newer technology/understandings.</p>
    <div>
      <h4>Boba Tracker</h4>
      <p>Full-stack project bubble tea tracker to monitor your personal exploration of the wonderful world of bubble tea. You can keep track of the orders you've made including details about the drink and upload photos of the drink.</p>
      <p>Made with: React, React Bootstrap, HTML5, CSS3, MongoDB, Express.js, and a need to organize my favorite boba.</p>
      <div>Links to Deployed Site and Repo</div>
      <Link href="https://sei-04-team-3.github.io/group-project-client/" style={{color: 'red'}} target="_blank">
      Boba Tracker: Client
      </Link>
      <Link href="https://github.com/sei-04-team-3/group-project-client" style={{color: 'red'}} target="_blank">
      Boba Tracker: Github
      </Link>
      <Link href="https://github.com/sei-04-team-3/group-project-api" style={{color: 'red'}} target="_blank">
      Chatroom: Backend Github
      </Link>
    </div>
    <div>
      <h4>Chatroom</h4>
      <p>Full-stack project using Socket.io that live updates a chatroom.</p>
      <p>Made with: JavaScript, Handlebars.js, HTML5, CSS3, Bootstrap, MongoDB, Express.js, and Socket.io.</p>
      <div>Links to Deployed Site and Repo</div>
      <Link href="https://sei-04-team-3.github.io/group-project-client/" style={{color: 'red'}} target="_blank">
      Chatroom: Client
      </Link>
      <Link href="https://github.com/sei-04-team-3/group-project-client" style={{color: 'red'}} target="_blank">
      Chatroom: Frontend
      </Link>
      <Link href="https://github.com/sei-04-team-3/group-project-api" style={{color: 'red'}} target="_blank">
      Chatroom: Backend
      </Link>
    </div>
    <div>
      <h4>Yeet into the Void</h4>
      <p>A place to collect your thoughts and "throw" them into space.</p>
      <p>Made with: HTML5, CSS3, JavaScript, Handlebars.js, Ruby, Ruby on Rails, and a desire to throw my worries far away, preferably into space.</p>
      <div>Links to Deployed Site and Repo</div>
      <Link href="https://kimdolion.github.io/void-yeet-client/" style={{color: 'red'}} target="_blank">
      Yeet into the Void: Client
      </Link>
      <Link href="https://github.com/kimdolion/void-yeet-client" style={{color: 'red'}} target="_blank">
      Yeet into the Void: Frontend
      </Link>
      <Link href="https://github.com/kimdolion/void-yeet-backend" style={{color: 'red'}} target="_blank">
      Yeet into the Void: Backend
      </Link>
    </div>
    <div>
      <h4>Tic Tac Toe</h4>
      <p>An in-browser game that lets users play and log color-coded games of tic-tac-toe.</p>
      <p>Made with: JavaScript, HTML5, CSS3, Bootstrap, and sheer determination to not let a child’s game stop me from becoming a web developer.</p>
      <div>Links to Deployed Site and Repo</div>
      <Link href="https://kimdolion.github.io/tic-tac-toe-client/" style={{color: 'red'}} target="_blank">
      Tic-Tac-Toe: Client
      </Link>
      <Link href="https://github.com/kimdolion/tic-tac-toe-client" style={{color: 'red'}} target="_blank">
      Tic-Tac-Toe: Frontend
      </Link>
    </div>
  </div>
)


export const ProjectsSection = ({extraInfo=false}: ProjectsProps): JSX.Element => (
  <>
    <section>
      <Link href="/projects"><h2>Projects and Tech</h2></Link>
        <div>
          <h3>Currently Working on:</h3>
          <h4>Pokemon Marketplace</h4>
          <p>NextJS project with TypeScript, TailwindCSS, and Stripe</p>
          <div>Links to Deployed Site and Repo</div>
          <Link href="https://pokemon-marketplace-chi.vercel.app/" style={{color: 'red'}} target="_blank">
          Pokemon Marketplace: Client
          </Link>
          <Link href="https://github.com/kimdolion/pokemon-marketplace" style={{color: 'red'}} target="_blank">
          Pokemon Marketplace: Github
          </Link>
        </div>
        <div>
          Technologies I've worked with: 
          <div></div>
        </div>
        {extraInfo ? <GeneralAssemblyProjects /> : null}
    </section>
    <style jsx>{`
      button + button {
        margin-left: 10px;
      }
      section {
        max-width: 700px;
      }
    `}</style>
  </>
)
