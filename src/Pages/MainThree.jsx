import React from 'react'

export default function MainThree() {
    const certifications = [
        { 
          name: "MERN Stack Developer", 
          icon: "💻", 
          organization: "Coursera" 
        },
        { 
          name: "Front-End Web Development", 
          icon: "🌐", 
          organization: "Udemy" 
        },
        { 
          name: "Cloud Practitioner", 
          icon: "☁️", 
          organization: "AWS Academy" 
        },
        { 
          name: "Data Science Specialization", 
          icon: "📊", 
          organization: "edX" 
        },
        { 
          name: "Blockchain Fundamentals", 
          icon: "🔗", 
          organization: "Pluralsight" 
        },
      ];
    
      // Certification component
      const Certification = ({ name, icon, organization }) => (
        <div className="flex flex-col items-start p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-2">
            <div className="text-3xl mr-4">{icon}</div>
            <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
          </div>
          <p className="text-gray-600">Issued by: {organization}</p>
        </div>
      );
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Certifications</h1>
        <p className="text-gray-600 mt-2">Recognitions for my skills and expertise</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <Certification 
            key={index} 
            name={certification.name} 
            icon={certification.icon} 
            organization={certification.organization} 
          />
        ))}
      </main>
    </div>
    </>
  )
}
