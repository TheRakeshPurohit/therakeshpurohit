'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { ExperienceRole } from '@/lib/content';

type ExperienceTimelineProps = {
  items: ExperienceRole[];
};

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((role) => (
        <AccordionItem
          key={`${role.company}-${role.role}`}
          value={`${role.company}-${role.role}`}
          className="rounded-2xl border border-border/60 bg-background/70 px-6 shadow-crisp transition hover:shadow-glow"
          data-cursor="card"
        >
          <AccordionTrigger className="py-5 text-left hover:no-underline">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {role.period}
              </p>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {role.role}
                </h3>
                <p className="text-sm text-muted-foreground">{role.company}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-0">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ExperienceTimeline;
