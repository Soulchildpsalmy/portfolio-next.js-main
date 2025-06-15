"use client";

import { getIconForSkill } from "@/lib/getIconForSkill";

type SkillCardProps = {
  skill: string;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const { icon, color } = getIconForSkill(skill);

  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-lg hover:shadow-lg transition">
      {icon && <i className={`${icon} ${color} text-5xl mb-4`} />}
      <h3 className="text-xl font-bold">{skill}</h3>
    </div>
  );
}
