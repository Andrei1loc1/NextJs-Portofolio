export default function AboutSection() {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: 'uil-brackets-curly',
      accent: 'var(--accent-featured)',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 90 },
        { name: 'React Native', level: 78 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Three.js', level: 72 },
        { name: 'Next.js', level: 87 },
      ],
    },
    {
      title: 'Backend',
      icon: 'uil-server',
      accent: 'var(--accent-ai)',
      skills: [
        { name: 'C', level: 75 },
        { name: 'C++', level: 72 },
        { name: 'Python', level: 85 },
        { name: 'Node.js', level: 88 },
        { name: 'Java', level: 80 },
        { name: 'Express.js', level: 86 },
        { name: 'REST API', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'TensorFlow', level: 78 },
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 82 },
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 87 },
        { name: 'Keras', level: 76 },
      ],
    },
    {
      title: 'Database',
      icon: 'uil-database',
      accent: 'var(--accent-pro)',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 83 },
        { name: 'SQLite', level: 78 },
        { name: 'Prisma', level: 75 },
        { name: 'Supabase', level: 77 },
      ],
    },
  ];

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>

      <p className="about-intro-text">
        Frontend & Full Stack Developer passionate about turning ideas into seamless,
        interactive web experiences. I build responsive applications using modern frameworks
        like React and Next.js, crafting clean code, intuitive designs, and smooth animations
        that make apps feel alive.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <div
            key={group.title}
            className="glass-skill-card animated-skills-parent"
            style={{ '--accent': group.accent } as React.CSSProperties}
          >
            <div className="skills-header">
              <div className="skills-header__icon-wrap">
                <i className={`uil ${group.icon}`} />
              </div>
              <h3>{group.title}</h3>

            </div>
            <div className="skills-list animated-skills">
              {group.skills.map((skill, si) => (
                <span
                  key={skill.name}
                  className="skill-pill"
                  style={{ '--order': si + 1, '--fill': `${skill.level}%` } as React.CSSProperties}
                >
                  <span className="skill-pill__label">{skill.name}</span>
                  <span className="skill-pill__bar">
                    <span className="skill-pill__fill" />
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}