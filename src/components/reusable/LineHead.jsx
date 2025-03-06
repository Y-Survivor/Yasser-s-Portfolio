import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function LineHead({ title,id }) {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setAnimationTriggered(true);
    }
  }, [inView]);

  return (
    <motion.div ref={ref} variants={textVariant()} id={id}>
      <div className="flex items-center justify-start w-full">
        <div className="font-semibold px-4 text-2xl dark:text-primary-green text-primary-dark">
          {animationTriggered ? (
            <TypeAnimation
              sequence={[title]}
              className="font-semibold px-4 text-2xl dark:text-primary-green text-primary-dark"
              speed={30}
            />
          ) : (
            title
          )}
        </div>
        <hr className="w-2/3 h-0.5 my-8 bg-primary-dark dark:bg-primary-green  border-0 rounded" />
      </div>
    </motion.div>
  );
}

export default LineHead;
