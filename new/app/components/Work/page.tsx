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
      title: "10X Growth Club — Landing Page for Vivek Shekhawat",
      category: "Web Development",
      client: "Vivek Shekhawat",
      year: "2025",
      description:
"Developed a clean, content-focused landing page for Vivek Shekhawat, based on Figma designs inspired by the 10X Growth Club brand. The client requested a minimal, motion-free experience focused purely on clarity and messaging. I handled the complete frontend development using Next.js, ensuring pixel-perfect implementation, responsive layout, and fast performance. The result is a professional, conversion-oriented page that communicates authority and trust through simplicity and structured content.",
      link: "https://10xgrowth.club",
      tags: ["Next.js", "Landing Page", "UI/UX", "Responsive Design"],
      images: ["/10xgrowth1.png", "/10xgrowth2.png"],
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

      <div className="text-center mb-10 md:mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold  tracking-wide mb-4">
          My Work & Contributions
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl  text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wider">
          A showcase of selected projects that highlight my experience as a creative developer and designer.
          From crafting clean, performant user interfaces to managing full-stack architecture,
          I’ve contributed to every stage — from concept and design to deployment and optimization.
          Each project reflects my focus on detail, usability, and innovation.
        </p>
      </div>
      <div className="hidden md:flex uppercase justify-between px-6 py-4  text-sm lg:text-lg font-semibold tracking-wider text-white/80">
        <p className="flex-1">Project</p>
        <p className="flex-1">Category</p>
        <p className="flex-1">Client</p>
        <p className="flex-1">Year</p>
      </div>

      <div className="flex md:hidden uppercase justify-between px-4 py-3 text-xs font-semibold">
        <p className="flex-1">Project</p>
        <p className="flex-1 text-right">Year</p>
      </div>

      <div className="h-px bg-gray-700 mx-4 md:mx-6"></div>

      <div className="divide-y divide-white mx-4 md:mx-6 roboto">
        {projects.map((project) => (
          <div key={project.id}>
            <button
              onClick={() => toggleExpand(project.id)}
              className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5  hover:bg-white hover:text-black transition-colors text-left"
            >
              <div className="hidden md:flex flex-1 gap-6">
                <p className="flex-1 text-sm lg:text-lg">{project.title}</p>
                <p className="flex-1 text-sm lg:text-lg">{project.category}</p>
                <p className="flex-1 text-sm lg:text-lg">{project.client}</p>
                <p className="flex-1 text-sm lg:text-lg">{project.year}</p>
              </div>

              <div className="flex md:hidden flex-1 justify-between items-center w-full">
                <p className="flex-1 text-xs md:text-sm">{project.title}</p>
                <p className="flex-1 text-right text-xs md:text-sm">{project.year}</p>
              </div>

              <div className="ml-4 text-gray-400">{expandedId === project.id ? "−" : "+"}</div>
            </button>

            {expandedId === project.id && (
              <div className="px-6 py-6 bg-[#121212] border-t border-gray-700">
                <p className="text-sm leading-relaxed text-gray-300 mb-6">{project.description}</p>

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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-gray-800 text-gray-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

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
