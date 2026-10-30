
function SkillBadge({ name, category, level }) {
  return (
    <li>
      <span>{name}</span>
      <span>{category}</span>
      <span>{level}</span>
    </li>
  );
}

export default SkillBadge;
