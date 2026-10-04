import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { EngineeringFocusSection } from './sections/EngineeringFocusSection'
import { SkillsSection } from './sections/SkillsSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ArchitectureLab } from './sections/ArchitectureLab'
import { EducationSection } from './sections/EducationSection'
import { CertificationsSection } from './sections/CertificationsSection'
import { CodingSection } from './sections/CodingSection'
import { JourneySection } from './sections/JourneySection'
import { ResumeSection } from './sections/ResumeSection'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#19201A] selection:bg-[#52664B]/15 selection:text-[#283827] flex flex-col font-sans">
      {/* 1. Sticky Elegant Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section: Organic Arched Portrait & Botanical Details */}
        <HeroSection />

        {/* 3. About Section: Two-Column Editorial Profile & Academic Foundations */}
        <AboutSection />

        {/* 4. Engineering Focus: 5 Core Software Engineering Disciplines */}
        <EngineeringFocusSection />

        {/* 5. Technical Toolkit: 5 Grouped Categories (Zero Fake Percentages) */}
        <SkillsSection />

        {/* 6. Selected Work: 5 Distinct Engineering Projects & Case Study Modal */}
        <ProjectsSection />

        {/* 7. Architecture Lab: 5-Stage System Flow & Embedded IoT Simulation */}
        <ArchitectureLab />

        {/* 8. Education Section: NCET B.E. (8.58 CGPA) & St. Joseph PU (91.83%) */}
        <EducationSection />

        {/* 9. Certifications: Verified AWS, GCP, Python & ML Credentials */}
        <CertificationsSection />

        {/* 10. Coding Achievement: Animated 100+ Counter across LeetCode & CodeChef */}
        <CodingSection />

        {/* 11. Student Journey: Authentic Academic & Technical Milestones */}
        <JourneySection />

        {/* 12. Resume Section: Direct PDF Document Access & Download */}
        <ResumeSection />

        {/* 13. Contact Section: "LET'S BUILD SOMETHING MEANINGFUL." */}
        <ContactSection />
      </main>

      {/* 14. Minimal Luxury Editorial Footer */}
      <Footer />
    </div>
  )
}

export default App
