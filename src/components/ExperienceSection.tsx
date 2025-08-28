import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "UI/UX & Design Intern",
      company: "The Lead Origin",
      duration: "May 2024 – July 2024",
      location: "Remote",
      achievements: [
        "Designed responsive layouts and user interfaces",
        "Created custom icons and graphics for web applications",
        "Improved user engagement by 20% through design optimization",
        "Collaborated with development team on design implementation"
      ],
      skills: ["UI/UX Design", "Responsive Design", "Icon Design", "Collaboration"]
    }
  ];

  const certifications = [
    { name: "Power BI", provider: "Microsoft", year: "2024" },
    { name: "AWS ML Foundations", provider: "Amazon Web Services", year: "2024" },
    { name: "Networking Basics", provider: "Cisco", year: "2023" }
  ];

  const activities = [
    "Gram Panchayat Bilaspur - Community Development Work",
    "Cosmonauts - Sponsorship Coordinator",
    "Swift Coding Club - Active Member",
    "Goldman Sachs Virtual Experience Program",
    "EA Virtual Experience Program"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-peach/20">
      <div className="max-w-6xl mx-auto">
        {/* Experience */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Experience
            </h2>
          </div>
          
          {experiences.map((exp, index) => (
            <Card key={index} className="floating-card glass-card border-0 slide-up">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary mt-4 md:mt-0" />
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="floating-card glass-card border-0 slide-up stagger-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div>
                      <p className="font-medium text-foreground">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activities */}
          <Card className="floating-card glass-card border-0 slide-up stagger-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Volunteering & Activities
              </h3>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;