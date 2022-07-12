import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
  const particlesInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          color: {
            value: '#FCA311',
          },
          line_linked: {
            enable: true,
            opacity: 0.5,
            color: '#FCA311',
          },
          move: {
            enable: true,
            speed: 1,
            random: true,
            straight: true,
          },
          size: {
            value: 2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 1,
            },
          },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 90,
              links: {
                blink: true,
                consent: true,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
