import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { images } from '../../assets/images';

const carouselImages = [...images, ...images]; // For looping we have used the photos twice
console.log(carouselImages);


export default function Carousel() {
    const firstSet = useRef(null);
    const secondSet = useRef(null);
    const sliderContainer = useRef(null);

    let xPercent = 0;
    let direction = -1;
    let scrollBoost = 0;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Scroll-triggered direction + speed boost
        gsap.to(sliderContainer.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (self) => {
                    direction = -1 * self.direction; // reverse on scroll direction
                    scrollBoost = 0.3; // Add a quick push when scroll happens
                },
            },
        });

        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        // Reset for infinite loop effect
        if (xPercent <= -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }

        gsap.set(firstSet.current, { xPercent });
        gsap.set(secondSet.current, { xPercent: xPercent + 100 });

        const baseSpeed = 0.05;
        xPercent += (baseSpeed + scrollBoost) * direction;

        if (scrollBoost > 0) {
            scrollBoost *= 0.9; // Gradually reduce the boost
            if (scrollBoost < 0.1) scrollBoost = 0; // Stop when nearly gone
        }

        requestAnimationFrame(animate);
    };

    return (
        <main className="relative w-full h-full overflow-hidden">
            <div ref={sliderContainer} className="absolute bottom-0 w-full overflow-hidden">
                <div className="flex relative w-max">
                    {/* First Set of Images */}
                    <div ref={firstSet} className="flex whitespace-nowrap ">
                        {carouselImages.map((src, i) => (
                            <div key={`first-${i}`} className="relative w-40 h-28 shrink-0">
                                <img src={`${src}`} alt={`img-${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Second Set of Images */}
                    <div ref={secondSet} className="flex whitespace-nowrap absolute right-0">
                        {carouselImages.map((src, i) => (
                            <div key={`second-${i}`} className="relative w-40 h-28 shrink-0">
                                <img src={`${src}`} alt={`img2-${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
