import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Next.js",
  "AST",
  "Tailwind CSS",
  "Pug",
  "Webpack",
  "Browser extension",
  "IDE extension",
  "Puppeteer",
  "Redux",
  "Bundling",
  "Technical Writing",
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-muted-foreground mt-2">
            Get to know more about my journey and expertise.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="prose dark:prose-invert max-w-none space-y-4">
              <p>
                Hi! I'm Rakesh Purohit, a frontend developer with over 5 years
                of experience in building web applications. I specialize in
                frontend ecosystems, with a strong focus on creating performant
                and scalable solutions.
              </p>

              <p>
                I started my journey as a self-taught developer, and through
                continuous learning and hands-on experience, I've had the
                opportunity to work on various exciting projects.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Frontend Engineer (SDE III)</h3>
                  <p className="text-muted-foreground">
                    DhiWise • Apr 2021 - Present
                  </p>
                  <p className="mt-2">
                    Improved product code-base compile time by 51.2% with CRACO
                    method.
                  </p>
                  <p className="mt-2">
                    Built a drag-and-drop dashboard with react-beautiful-dnd,
                    increasing efficiency by 40%, cutting errors by 30%.
                  </p>
                  <p className="mt-2">
                    Increased HTML block conversion accuracy by 40% with an AST
                    generator for React component props.
                  </p>
                  <p className="mt-2">
                    Cut down 70% of repetitive code in react-admin-panel through
                    a JSON-to-column generator.
                  </p>
                  <p className="mt-2">
                    Enhanced an In-Browser IDE to support JPEG, WEBP, PNG, and
                    SVG, boosting compatibility by 50%, improving user
                    experience, and securing the code for being copied.
                  </p>
                  <p className="mt-2">
                    Ported a Preact Figma plugin to React within 6 hours,
                    maintaining full feature parity.
                  </p>
                  <p className="mt-2">
                    Migrated a Webflow site to Next.js with SSR in frontend +
                    Strapi CMS with zero data loss using JS scripting and
                    Puppeteer for efficient data scraping.
                  </p>
                  <p className="mt-2">
                    Developed a Chrome extension to automate blog posting from
                    Notion to Strapi CMS, improving content management
                    efficiency by 60%.
                  </p>
                  <p className="mt-2">
                    Published 1000+ educational blogs on frontend development,
                    enhancing community engagement and visibility, 90+ PageSpeed
                    scores.
                  </p>
                  <p className="mt-2">
                    Extended a Figma plugin to support the new Dev mode,
                    increasing functionality and user adoption by 30%.
                  </p>
                  <p className="mt-2">
                    Spear-headed #30Days30Usecases campaign including
                    HackerRank, leading 10 engineers.
                  </p>
                  <p className="mt-2">
                    Mentored 2 software developers in agile practices and code
                    review.
                  </p>
                  <p className="mt-2">
                    Provided active technical support to users, free and paid,
                    through 1:1 calls and documentation.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Full-stack Developer</h3>
                  <p className="text-muted-foreground">
                    Coruscate Solutions Pvt. Ltd. • Jun 2020 - May 2021
                  </p>
                  <p className="mt-2">
                    Engineered a flexible UI from JSON, enabling simultaneous
                    operations across multiple projects and improving efficiency
                    by 40%.
                  </p>
                  <p className="mt-2">
                    Refactored Class components into functional ones, reducing
                    technical debt by 30% and enhancing maintainability.
                  </p>
                  <p className="mt-2">
                    Created a reactive KYC form, reducing processing time by 50%
                    and improving accuracy.
                  </p>
                  <p className="mt-2">
                    Built 10+ data-intensive products with personalized web
                    dashboards, and graphs enhancing user experience and
                    engagement by 35%.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Intern</h3>
                  <p className="text-muted-foreground">
                    GatiSoftTech • Jan 2020 - Jun 2020
                  </p>
                  <p className="mt-2">
                    Developed CRM iOS applications in React Native with offline
                    data storage and sync features.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Intern</h3>
                  <p className="text-muted-foreground">
                    Elite Technocrats • Dec 2018 - Jun 2019
                  </p>
                  <p className="mt-2">
                    Developed a Project Management System using .NET MVC5 and
                    Entity Framework.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Web Developer (PHP)</h3>
                  <p className="text-muted-foreground">
                    divi-professional.com • Jun 2018 - Jul 2018
                  </p>
                  <p className="mt-2">
                    Worked on WordPress, PHP, Divi Theme, and Plugin
                    Development.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Telesales Executive</h3>
                  <p className="text-muted-foreground">
                    PureSkill InfoSolutions • Jul 2016 - Jun 2016
                  </p>
                  <p className="mt-2">
                    Promoted courses on Cloud Computing and Software Development
                    over calls.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
