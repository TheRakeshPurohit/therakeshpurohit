import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'GraphQL', 'AWS',
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
                Hi! I'm John Doe, a full-stack developer with over 5 years of experience
                in building web applications. I specialize in React and Node.js ecosystems,
                with a strong focus on creating performant and scalable solutions.
              </p>
              
              <p>
                I started my journey as a self-taught developer, and through continuous
                learning and hands-on experience, I've had the opportunity to work on
                various exciting projects ranging from e-commerce platforms to real-time
                applications.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Skills & Technologies</h2>
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
                  <h3 className="font-medium">Senior Full-stack Developer</h3>
                  <p className="text-muted-foreground">Tech Corp • 2021 - Present</p>
                  <p className="mt-2">
                    Leading the development of enterprise-level web applications using
                    Next.js, Node.js, and AWS.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Full-stack Developer</h3>
                  <p className="text-muted-foreground">StartUp Inc • 2019 - 2021</p>
                  <p className="mt-2">
                    Developed and maintained multiple client projects using React and
                    Node.js.
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