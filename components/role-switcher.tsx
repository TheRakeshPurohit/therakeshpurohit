'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import type { RoleTrack } from '@/lib/content';

type RoleSwitcherProps = {
  tracks: RoleTrack[];
};

const RoleSwitcher = ({ tracks }: RoleSwitcherProps) => {
  const [activeId, setActiveId] = useState(tracks[0]?.id ?? '');
  const activeTrack = useMemo(
    () => tracks.find((track) => track.id === activeId) ?? tracks[0],
    [activeId, tracks]
  );

  if (!activeTrack) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Paths
        </p>
        {tracks.map((track) => {
          const isActive = track.id === activeTrack.id;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveId(track.id)}
              className={cn(
                'w-full rounded-2xl border px-4 py-3 text-left transition',
                isActive
                  ? 'border-primary/40 bg-primary/10 text-foreground shadow-glow'
                  : 'border-border/60 bg-background/60 text-muted-foreground hover:text-foreground hover:shadow-crisp'
              )}
              data-cursor="card"
              data-sound-click="select"
            >
              <div className="text-sm font-semibold">{track.title}</div>
              <p className="mt-2 text-xs text-muted-foreground">{track.summary}</p>
            </button>
          );
        })}
      </div>
      <Card className="border-border/60 bg-background/70 p-6 shadow-crisp">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          What you get
        </p>
        <h3 className="mt-3 font-serif text-2xl text-foreground">
          {activeTrack.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {activeTrack.summary}
        </p>
        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
          {activeTrack.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RoleSwitcher;
