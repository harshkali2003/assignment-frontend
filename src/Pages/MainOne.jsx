import React from 'react'

export default function MainOne() {
    
  const skills = [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌐" },
  ];

  const Skill = ({ name, icon }) => (
    <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
      <div className="text-3xl mr-4">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
    </div>
  );
  return (
  <>
      <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Skills</h1>
        <p className="text-gray-600 mt-2">A list of technologies I excel at</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} icon={skill.icon} />
        ))}
      </main>
    </div>

  </>
  )
}
