import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadFull} from 'tsparticles';
import { useCallback, useEffect, useState } from "react";

const ParticlesContainer = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
            // await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const particlesLoaded = useCallback(async () => {},[]);
    return <Particles 
        className='particles'
        id='tsparticles' 
        init={init} 
        loaded={particlesLoaded} 
        options={{
            fullScreen: {
                enable: true,
                zIndex: 0,
                
            },
            fpsLimit: 120,
            background: {
                color: {
                    value: '#0f0f0f'
                }
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    push:{
                        quantity: 10,
                        
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.9
                    },
                }
            },
            particles: {
                twinkle: {
                    particles: {
                        enable: true,
                        frequency: 0.005,
                        opacity: 1
                    }
                },
                color:{
                    value: '#ffea00'
                },
                links: {
                    color: '#ffea00',
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 2
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1000
                    },
                    value: 130
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value:{
                        min:1,
                        max:3
                    }
                }
            },
            detectRetina: true
        }}
        />
}

export { ParticlesContainer }