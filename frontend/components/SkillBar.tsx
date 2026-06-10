import type { Skill } from '@/lib/types';

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="skill">
      <div className="skill-top">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  );
}
