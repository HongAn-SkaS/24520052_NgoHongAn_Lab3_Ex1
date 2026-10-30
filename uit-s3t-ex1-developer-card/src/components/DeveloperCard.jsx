
import { useState } from 'react';
import SkillBadge from './SkillBadge';

function DeveloperCard({ developer }) {
  const [avatarFailed, setAvatarFailed] = useState(false);

  const initials = developer.name
    .split(' ')
    .map((part) => part[0])
    .slice(-2)
    .join('')
    .toUpperCase();

  return (
    <article>
      <header>
        <figure>
          {avatarFailed ? (
            <span role="img" aria-label={`${developer.name} initials`}>
              {initials}
            </span>
          ) : (
            <img
              src={developer.avatarUrl}
              alt={`${developer.name} profile`}
              width={120}
              height={120}
              onError={() => setAvatarFailed(true)}
            />
          )}
          <figcaption>Developer Profile</figcaption>
        </figure>

        <hgroup>
          <h2>{developer.name}</h2>
          <p>{developer.role}</p>
        </hgroup>
      </header>

      <section aria-label="Developer information">
        <h3>About Me</h3>
        <p>{developer.bio}</p>

        <dl>
          <dt>Location</dt>
          <dd>{developer.location}</dd>

          <dt>Experience</dt>
          <dd>{developer.experience}</dd>
        </dl>
      </section>

      <section aria-label="Gaming profile">
        <h3>Gaming Profile</h3>

        <dl>
          <dt>Main Game</dt>
          <dd>{developer.gaming.game}</dd>

          <dt>Current Rank</dt>
          <dd>{developer.gaming.rank}</dd>

          <dt>Main Role</dt>
          <dd>{developer.gaming.mainRole}</dd>
        </dl>
      </section>

      <section aria-label="Technical skills">
        <h3>Technical Skills</h3>

        <ul>
          {developer.skills.map((skill) => (
            <SkillBadge
              key={skill.id}
              name={skill.name}
              category={skill.category}
              level={skill.level}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}

export default DeveloperCard;
