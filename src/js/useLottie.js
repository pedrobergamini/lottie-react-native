import React from 'react';
import LottieView from './LottieView';

function useLottie(...options) {
  const Animations = options.map(
    animationConfig =>
      function AnimatedView() {
        return <LottieView {...animationConfig} />;
      },
  );

  return Animations;
}

module.exports = useLottie;
