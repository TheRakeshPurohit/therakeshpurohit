'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSound } from '@/components/sound-provider';

const SoundToggle = () => {
  const { enabled, toggle } = useSound();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable sound' : 'Enable sound'}
      data-cursor="cta"
      data-cursor-label={enabled ? 'Mute' : 'Sound'}
    >
      {enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  );
};

export default SoundToggle;
