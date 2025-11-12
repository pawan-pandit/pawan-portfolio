"use client"

import type React from "react"
import { useState } from "react"

interface Project {
  id: string
  title: string
  category: string
  client: string
  year: string
  description: string
  link: string
  tags: string[]
  images: string[]
}

interface WorkSectionProps {
  projects?: Project[]
}

const WorkSection: React.FC<WorkSectionProps> = ({
  projects = [
    {
      id: "1",
      title: "MAD's Portfolio",
      category: "Development",
      client: "Mirror Progress",
      year: "2025",
      description:
        "Developed a bilingual website (English and Chinese) for MAD Architects, a renowned Chinese architecture firm known for its futuristic and organic designs. As part of agency Mirror Progress, delivered full-stack development to create a seamless, modern experience that showcases the studio's international portfolio while ensuring accessibility across languages and regions.",
      link: "https://www.i-mad.com",
      tags: ["Development", "Creative Dev", "Fullstack"],
      images: ["/portfolio-1.jpg", "/portfolio-2.jpg"],
    },
    {
      id: "2",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    },

     {
      id: "3",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    },
     {
      id: "4",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    }, {
      id: "5",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    }, {
      id: "6",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    }, {
      id: "7",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    }, {
      id: "8",
      title: "Creative Agency Site",
      category: "Design",
      client: "Tech Startup",
      year: "2024",
      description:
        "A modern and responsive website designed for a tech startup to showcase their services and attract new clients.",
      link: "https://example.com",
      tags: ["Design", "Frontend", "Responsive"],
      images: ["/portfolio-3.jpg", "/portfolio-4.jpg"],
    },
  ],
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="bg-[#191919] text-white py-10 md:py-20">
      {/* Header Row - Hidden on mobile, show only Project and Year on md+ */}
      <div className="hidden md:flex uppercase justify-between px-6 py-4 text-sm font-semibold tracking-wider text-white/80">
        <p className="flex-1">Project</p>
        <p className="flex-1">Category</p>
        <p className="flex-1">Client</p>
        <p className="flex-1">Year</p>
      </div>

      {/* Mobile Header - Only Project and Year visible on mobile */}
      <div className="flex md:hidden uppercase justify-between px-4 py-3 text-xs font-semibold">
        <p className="flex-1">Project</p>
        <p className="flex-1 text-right">Year</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 mx-4 md:mx-6"></div>

      {/* Projects List */}
      <div className="divide-y divide-white mx-4 md:mx-6 roboto">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Project Header - Different layouts for mobile and desktop */}
            <button
              onClick={() => toggleExpand(project.id)}
              className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5 hover:bg-white hover:text-black transition-colors text-left"
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex flex-1 gap-6">
                <p className="flex-1 text-sm">{project.title}</p>
                <p className="flex-1 text-sm">{project.category}</p>
                <p className="flex-1 text-sm">{project.client}</p>
                <p className="flex-1 text-sm">{project.year}</p>
              </div>

              {/* Mobile Layout */}
              <div className="flex md:hidden flex-1 justify-between items-center w-full">
                <p className="flex-1 text-xs md:text-sm">{project.title}</p>
                <p className="flex-1 text-right text-xs md:text-sm">{project.year}</p>
              </div>

              <div className="ml-4 text-gray-400">{expandedId === project.id ? "−" : "+"}</div>
            </button>

            {/* Project Details - Expandable */}
            {expandedId === project.id && (
              <div className="px-6 py-6 bg-[#121212] border-t border-gray-700">
                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-300 mb-6">{project.description}</p>

                {/* Link */}
                <div className="mb-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:underline text-sm font-medium"
                  >
                    See website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-gray-800 text-gray-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Images Gallery */}
                {project.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="bg-[#0a0a0a] rounded-lg overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkSection
