import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Lead development of web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces. Improved website performance by 60%.",
    technologies: ["React", "Vue.js", "SASS", "JavaScript", "Figma"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Built and maintained company websites, implemented new features, and learned modern web development practices in a fast-paced environment.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-accent">{experience.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {experience.period}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {experience.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-pretty">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
