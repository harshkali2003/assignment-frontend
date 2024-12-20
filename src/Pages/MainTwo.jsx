import React from 'react'

export default function MainTwo() {
    const projects = [
        { 
          name: "Portfolio Website", 
          icon: "🌐", 
          description: "A personal portfolio to showcase my skills and projects." 
        },
        { 
          name: "E-Commerce App", 
          icon: "🛒", 
          description: "A full-stack application for online shopping with payment integration." 
        },
        { 
          name: "Health Dashboard", 
          icon: "📊", 
          description: "An analytics dashboard for tracking health metrics over time." 
        },
        { 
          name: "Chat Application", 
          icon: "💬", 
          description: "A real-time chat app with WebSocket support and emoji features." 
        },
        { 
          name: "Blockchain Coinflip", 
          icon: "🪙", 
          description: "A blockchain-based game for flipping coins and earning tokens." 
        },
      ];
    
      // Project component
      const Project = ({ name, icon, description }) => (
        <div className="flex flex-col items-start p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-2">
            <div className="text-3xl mr-4">{icon}</div>
            <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      );
    
  return (
   <>
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
        <p className="text-gray-600 mt-2">A collection of my work and contributions</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            name={project.name} 
            icon={project.icon} 
            description={project.description} 
          />
        ))}
      </main>
    </div>
   </>
  )
}
