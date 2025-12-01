export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I&apos;m a Frontend and Full Stack Developer passionate about turning ideas into
              seamless, interactive web experiences. I build responsive and user-friendly
              applications using HTML, CSS, JavaScript, and modern frameworks like React and React
              Native. I love crafting clean, maintainable code, intuitive designs, and smooth
              animations that make apps feel alive. Every project I work on is focused on delivering
              polished user experiences, scalable solutions, and functionality that feels effortless
              to use.
            </p>
          </div>
        </div>
        <div className="row timeline-row">
          <div className="timeline-line"></div>

          <div className="skills-box">
            <div className="skills-header">
              <h3>
                <i className="uil uil-brackets-curly"></i> Frontend
              </h3>
            </div>
            <div className="skills-list animated-skills">
              <span style={{ ['--order' as string]: 1 }}>HTML</span>
              <span style={{ ['--order' as string]: 2 }}>CSS</span>
              <span style={{ ['--order' as string]: 3 }}>JavaScript</span>
              <span style={{ ['--order' as string]: 4 }}>React</span>
              <span style={{ ['--order' as string]: 5 }}>React Native</span>
              <span style={{ ['--order' as string]: 6 }}>TypeScript</span>
              <span style={{ ['--order' as string]: 7 }}>Tailwind CSS</span>
              <span style={{ ['--order' as string]: 8 }}>Three.js</span>
              <span style={{ ['--order' as string]: 9 }}>Next.js</span>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-header">
              <h3>
                <i className="uil uil-server"></i> Backend
              </h3>
            </div>
            <div className="skills-list animated-skills">
              <span style={{ ['--order' as string]: 1 }}>C</span>
              <span style={{ ['--order' as string]: 2 }}>C++</span>
              <span style={{ ['--order' as string]: 3 }}>Python</span>
              <span style={{ ['--order' as string]: 4 }}>Node.js</span>
              <span style={{ ['--order' as string]: 5 }}>Java</span>
              <span style={{ ['--order' as string]: 6 }}>Express.js</span>
              <span style={{ ['--order' as string]: 7 }}>REST API</span>
              <span style={{ ['--order' as string]: 8 }}>GraphQL</span>
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-header">
              <h3>
                <i className="uil uil-database"></i> Database
              </h3>
            </div>
            <div className="skills-list animated-skills">
              <span style={{ ['--order' as string]: 1 }}>MySQL</span>
              <span style={{ ['--order' as string]: 2 }}>AsyncStorage</span>
              <span style={{ ['--order' as string]: 3 }}>Firebase</span>
              <span style={{ ['--order' as string]: 4 }}>MongoDB</span>
              <span style={{ ['--order' as string]: 5 }}>PostgreSQL</span>
              <span style={{ ['--order' as string]: 6 }}>SQLite</span>
              <span style={{ ['--order' as string]: 7 }}>Prisma</span>
              <span style={{ ['--order' as string]: 8 }}>Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
