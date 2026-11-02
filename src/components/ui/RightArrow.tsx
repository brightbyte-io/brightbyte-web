import React from 'react';

export const RightArrow: React.FC = () => (
  <span
    aria-hidden="true"
    className="inline-block h-5 w-5 shrink-0 bg-current align-middle"
    style={{
      mask: "url('/images/arrow-right-white.svg') center / contain no-repeat",
      WebkitMask: "url('/images/arrow-right-white.svg') center / contain no-repeat",
    }}
  />
);
