'use client';

import Image from 'next/image';
import * as React from 'react';
import { useMemo } from 'react';
import Caro1 from '../../images/Caro1.png';
import Caro2 from '../../images/Caro2.png';
import Caro3 from '../../images/Caro3.png';
import Caro4 from '../../images/Caro4.png';
import Caro5 from '../../images/Caro5.png';
import Caro6 from '../../images/Caro6.png';
import Caro7 from '../../images/Caro7.png';
import Caro8 from '../../images/Caro8.png';
import Caro9 from '../../images/Caro9.png';
import Caro10 from '../../images/Caro10.png';
import Caro11 from '../../images/Caro11.png';
import Caro12 from '../../images/Caro12.png';

type AnimatedCarouselProps = {
  className?: string;
};

export function AnimatedCarousel({ className = '' }: AnimatedCarouselProps) {
  return (
    <div
      className={`animated-carousel ${className}`.trim()}
      aria-hidden={false}
    >
      <div
        className="animated-carousel-track"
        style={{ animationDuration: `20s` }}
      >
        {[
          Caro1,
          Caro2,
          Caro3,
          Caro4,
          Caro5,
          Caro6,
          Caro7,

          Caro8,
          Caro9,
          Caro10,
          Caro11,
          Caro12,
        ].map((src, i) => (
          <div
            className="animated-carousel-slide border-2 mr-2"
            key={`${src}-${i}`}
          >
            <Image src={src} alt={`carousel-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCarousel;
