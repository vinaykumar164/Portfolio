import React from "react";
import "./blog.css";

const skillsData = [
  { name: "HTML5", percent: 95 },
  { name: "CSS3", percent: 90 },
  { name: "Bootstrap 5", percent: 85 },
  { name: "JavaScript", percent: 88 },
  { name: "Angular", percent: 80 },
  { name: "React", percent: 85 },
  { name: "Tailwind CSS", percent: 90 },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Skills</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          A showcase of my core front-end development skills and technologies.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white-200">{skill.name}</span>
              <span className="font-medium text-gray-400">
                {skill.percent}%
              </span>
            </div>
            <div className="progress-bg">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
