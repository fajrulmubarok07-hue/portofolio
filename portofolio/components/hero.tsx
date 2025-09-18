"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
        style={{
          backgroundImage: `url('/modern-workspace-with-laptop-and-design-tools.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I'm <span className="text-primary">Jay</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, modern
            design, and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
