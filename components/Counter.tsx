// import React, { useState } from "react";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

// type endType = {
//   end: number;
//   decimals?: number;
//   className?: string;
// };

// const CounterElement = ({ end, decimals, className }: endType) => {
//   const [counted, setCounted] = useState(false);

//   const handleVisibilityChange = (isVisible: boolean) => {
//     if (isVisible && !counted) {
//       setCounted(true);
//     }
//   };

//   return (
//     <CountUp
//       end={counted ? end : 0}
//       redraw={false}
//       duration={4}
//       decimals={decimals}>
//       {({ countUpRef }) => (
//         <VisibilitySensor onChange={handleVisibilityChange} delayedCall>
//           <span className={className} ref={countUpRef} />
//         </VisibilitySensor>
//       )}
//     </CountUp>
//   );
// };

// export default CounterElement;

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type endType = {
  end: number;
  decimals?: number;
  className?: string;
};

const CounterElement = ({ end, decimals, className }: endType) => {
  const [counted, setCounted] = useState(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !counted) {
      setCounted(true);
    }
  }, [inView, counted]);

  return (
    <CountUp
      end={counted ? end : 0}
      redraw={false}
      duration={4}
      decimals={decimals}>
      {({ countUpRef }) => (
        <span 
          className={className} 
          ref={(node) => {
            // Set CountUp's ref (it's a RefObject, so set .current)
            if (countUpRef && typeof countUpRef === 'object' && 'current' in countUpRef) {
              (countUpRef as React.MutableRefObject<HTMLSpanElement | null>).current = node;
            }
            // Set the inView ref (it's a callback ref)
            inViewRef(node);
          }}
        />
      )}
    </CountUp>
  );
};

export default CounterElement;