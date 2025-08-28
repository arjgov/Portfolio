import React from "react";

export interface SkillItem {
  name: string;
  category: string;
  icon: string;
  borderColor: string;
  gradient: string;
  iconColor: string;
}

export interface SkillsChromaGridProps {
  skills: SkillItem[];
  className?: string;
}

const SkillsChromaGrid: React.FC<SkillsChromaGridProps> = ({
  skills,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-full flex flex-wrap justify-start gap-3 ${className}`}>
      {skills.map((skill, i) => (
        <article
          key={i}
          className="group relative flex items-center space-x-3 px-4 py-3 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer min-w-[120px] hover:scale-105"
          style={
            {
              background: skill.gradient,
              borderColor: skill.borderColor + "40",
            } as React.CSSProperties
          }
        >
          {/* Skill content */}
          <div className="relative z-10 flex items-center space-x-3">
            <i 
              className={`${skill.icon} text-lg transition-all duration-300 group-hover:scale-110`}
              style={{ color: skill.iconColor }}
            />
            <span className="text-sm font-medium text-white group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SkillsChromaGrid;
