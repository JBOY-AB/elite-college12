import React, { useEffect, useRef } from 'react';

const Carousel = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    const runNextAuto = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const list = listRef.current;
        const runningTime = runningTimeRef.current;

        const resetTimeAnimation = () => {
            if (runningTime) {
                runningTime.style.animation = 'none';
                runningTime.offsetHeight; // Trigger reflow
                runningTime.style.animation = 'runningTime 7s linear 1 forwards';
            }
        };

        const showSlider = (type) => {
            const sliderItemsDom = list.querySelectorAll('.item');
            if (type === 'next') {
                list.appendChild(sliderItemsDom[0]);
                carousel.classList.add('next');
            } else {
                list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                carousel.classList.add('prev');
            }

            setTimeout(() => {
                carousel.classList.remove('next');
                carousel.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto.current);
            runNextAuto.current = setTimeout(() => {
                showSlider('next');
            }, timeAutoNext);

            resetTimeAnimation();
        };

        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        runNextAuto.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);

        resetTimeAnimation();

        return () => {
            clearTimeout(runNextAuto.current);
        };
    }, []);

    return (
        <div className="carousel" id="home" ref={carouselRef}>
            <div className="list" ref={listRef}>
                <div
                    className="item"
                    style={{ backgroundImage: "url(image/IMG_4447.jpg)" }}
                >
                    <div className="content">
                        <div className="title">LEARNING </div>
                        <div className="name">FACILITIES</div>
                        <div className="des">
                        Great learning facilities are more than just buildings—they are living ecosystems where curiosity thrives, potential blossoms, and futures take shape.
                         Here’s what truly transforms spaces into sanctuaries of learning:
                        </div>
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_4451.png )" }}
                >
                    <div className="content">
                        <div className="title">SECTRETRY</div>
                        <div className="name">ELITE'S SCHOOL</div>
                        <div className="des">
                            A secretary is an administrative professional who performs various clerical and organizational
                            tasks to support businesses, organizations, or individuals.
                        </div>
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_COM_202504272302141691.jpg )" }}
                >
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_COM_202504272302144513.jpg  )" }}
                >
                    <div className="content">
                        <div className="title">OUR</div>
                        <div className="name">STUDENT</div>
                        <div className="des">
                            The promise of something extraordinary about to unfold. With every page you turn, every question you ask, you are not just learning;
                            you are weaving the future with threads of curiosity and resilience.
                        </div>
                    </div>
                </div>
                {/* <div
          className="item"
          style={{ backgroundImage: "url(/image/IMG_COM_202504272302147114.jpg )" }}
        >
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">OWL</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              culpa similique consequuntur, reprehenderit dicta repudiandae.
            </div>
          </div>
        </div> */}
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_COM_202504272302155105.jpg )" }}
                >
                    <div className="content">
                        <div className="title">OUR</div>
                        <div className="name">STUDENT</div>
                        <div className="des">
                            The promise of something extraordinary about to unfold. With every page you turn, every question you ask, you are not just learning;
                            you are weaving the future with threads of curiosity and resilience.
                        </div>
                    </div>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_COM_202504272302157496.jpg )" }}
                >
                    <div className="content">
                        <div className="title">STUDENT</div>
                        <div className="name">OUTING</div>
                        <div className="des">
                            A student outing is not merely an escape from four walls—it is education coming alive beneath the open sky. When books step off the page and into the rustling leaves of a forest, the hum of a museum, or the
                            echoing halls of a historic site, learning becomes not just absorbed, but felt.
                        </div>
                    </div>
                </div>
                {/* <div
                    className="item"
                    style={{ backgroundImage: "url(/image/IMG_COM_202504272302167479.jpg )" }}
                >
                    <div className="content">
                        <div className="title">SLIDER</div>
                        <div className="name">PARROT</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
                            culpa similique consequuntur, reprehenderit dicta repudiandae.
                        </div>
                    </div>
                </div> */}
                {/* <div
          className="item"
          style={{ backgroundImage: "url(/image/IMG_COM_2025042723021691010.jpg   )" }}
        >
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">HERON</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              culpa similique consequuntur, reprehenderit dicta repudiandae.
            </div>
          </div>
        </div> */}
                <div
                    className="item"
                    style={{ backgroundImage: "url(image/IMG_4447.jpg)" }}
                >
                    <div className="content">
                        <div className="title">JAMB $ WAEC </div>
                        <div className="name">CLASSES</div>
                        <div className="des">
                            This is where dreams take shape—between the pages of past questions and the ink of your determination. Every equation solved, every essay drafted,
                            every midnight oil burned is a step closer to the future you’re building.
                        </div>
                    </div>
                </div>
                {/* <div
                    className="item"
                    style={{ backgroundImage: "url(image/IMG_4447.jpg)" }}
                >
                    <div className="content">
                        <div className="title">SLIDER</div>
                        <div className="name">PARROT</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
                            culpa similique consequuntur, reprehenderit dicta repudiandae.
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="arrows">
                <button className="prev"></button>
                <button className="next">&gt;</button>
            </div>

            <div className="timeRunning" ref={runningTimeRef} />
        </div>
    );
};

export default Carousel;