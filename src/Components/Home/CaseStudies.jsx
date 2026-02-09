import { useEffect, useRef, useState } from 'react';

const caseStudiesData = [
  {
    id: 1,
    title: 'Skiper OSS 001',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
  },
  {
    id: 2,
    title: 'NeonSync Pro',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  },
  {
    id: 3,
    title: 'PixelForge Studio',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
  },
  {
    id: 4,
    title: 'TaskFlow Sonet',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
  },
  {
    id: 5,
    title: 'CloudVibe Bruh',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
  }
];

function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageReady, setIsImageReady] = useState(true);
  const loadedImagesRef = useRef(new Set());
  const activeStudy = caseStudiesData[activeIndex];

  useEffect(() => {
    if (loadedImagesRef.current.has(activeIndex)) {
      setIsImageReady(true);
      return;
    }

    setIsImageReady(false);
  }, [activeIndex]);

  useEffect(() => {
    caseStudiesData.forEach((study, index) => {
      const image = new Image();
      image.src = study.image;
      image.onload = () => {
        loadedImagesRef.current.add(index);
        if (index === activeIndex) {
          setIsImageReady(true);
        }
      };
    });
  }, [activeIndex]);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <div className="main-container relative min-h-screen py-16 px-20 lg:py-20">
        <div className="relative min-h-[640px]">
          {/* Image Section */}
          <div className="relative w-[27rem] h-[17rem] lg:absolute lg:left-0 lg:top-0 lg:max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className={`h-[14rem] w-full object-cover transition-all duration-500 ease-out md:h-[14rem] ${
                  isImageReady ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
                }`}
                loading="eager"
                decoding="async"
                onLoad={() => {
                  loadedImagesRef.current.add(activeIndex);
                  setIsImageReady(true);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-slate-900/20"></div>
            </div>
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-blue-300/40 blur-2xl"></div>
          </div>

          {/* Titles Section */}
          <div className="mt-10 w-full lg:absolute lg:right-0 lg:bottom-0 lg:max-w-md">
            <div className="flex items-center justify-end gap-4 text-xs uppercase tracking-[0.25em] text-gray-500">
              <span>My Projects</span>
              <span className="h-px w-20 bg-gray-300"></span>
            </div>

            <div className="mt-6 space-y-4 text-right">
              {caseStudiesData.map((study, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={study.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`block w-full cursor-pointer text-right text-2xl md:text-3xl lg:text-4xl font-light transition-colors duration-200 ${
                      isActive
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    aria-current={isActive ? 'true' : 'false'}
                  >
                    {study.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;