import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';


const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  videoLabel,
  videoName,
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef(null);
  // Sync ref so handleScroll always reads the live expanded value, not a stale closure
  const expandedRef = useRef(false);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // If the page loads with a hash or the hash changes (e.g. clicking Services),
  // immediately skip the hero animation so the anchor scroll is not blocked.
  useEffect(() => {
    const skipToEnd = () => {
      if (window.location.hash) {
        setScrollProgress(1);
        setMediaFullyExpanded(true);
        setShowContent(true);
      }
    };
    skipToEnd();
    window.addEventListener('hashchange', skipToEnd);
    return () => window.removeEventListener('hashchange', skipToEnd);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        expandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          expandedRef.current = true;
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        expandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          expandedRef.current = true;
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    // Use the sync ref — never a stale closure value
    const handleScroll = () => {
      if (!expandedRef.current && !window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Video starts hidden, fades in quickly once scrolling begins
  const videoOpacity = Math.min(scrollProgress * 3.5, 1);

  // Cinematic wide expansion: starts tiny, expands to ultra-wide landscape
  const mediaWidth = 180 + scrollProgress * (isMobileState ? 750 : 1720);
  const mediaHeight = 120 + scrollProgress * (isMobileState ? 350 : 680);

  // Text spreads apart as video expands
  const textTranslateX = scrollProgress * (isMobileState ? 200 : 160);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>

          {/* Background image fades out as video expands */}
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 1.2 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen object-cover object-center'
            />
            {/* Gradient overlay for text legibility */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>

              {/* Video / image card — hidden until scroll begins */}
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '97vw',
                  maxHeight: '88vh',
                  opacity: videoOpacity,
                  boxShadow: '0px 0px 80px rgba(0, 0, 0, 0.5)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' + mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        title="Hero video"
                      />
                      <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                      <motion.div
                        className='absolute inset-0 bg-black/20'
                        animate={{ opacity: 0.4 - scrollProgress * 0.4 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                      <motion.div
                        className='absolute inset-0 bg-black/20'
                        animate={{ opacity: 0.4 - scrollProgress * 0.4 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover'
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/30'
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                {/* Scaling overlay text inside the video */}
                {(videoLabel || videoName) && (
                  <div
                    className='absolute inset-0 flex flex-col items-center justify-end pointer-events-none z-20'
                    style={{
                      opacity: Math.min(scrollProgress * 4, 1),
                      paddingBottom: `${4 + scrollProgress * 4}%`,
                    }}
                  >
                    {videoLabel && (
                      <p
                        className='text-white/70 uppercase tracking-widest font-sans text-center'
                        style={{
                          fontSize: `${6 + scrollProgress * 12}px`,
                          textShadow: '0 1px 8px rgba(0,0,0,0.7)',
                          letterSpacing: '0.35em',
                        }}
                      >
                        {videoLabel}
                      </p>
                    )}
                    {videoName && (
                      <p
                        className='font-serif italic text-white text-center leading-none'
                        style={{
                          fontSize: `${10 + scrollProgress * 58}px`,
                          textShadow: '0 2px 30px rgba(0,0,0,0.6)',
                        }}
                      >
                        {videoName}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Hero text — spreads apart as video reveals */}
              <div
                className={`flex flex-col items-center justify-center text-center gap-2 w-full relative z-10 transition-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                {/* Company name — slides with first title word */}
                {date && (
                  <p
                    className='tracking-[0.3em] uppercase font-medium mb-3 transition-none'
                    style={{
                      transform: `translateX(-${textTranslateX}vw)`,
                      fontFamily: '"Cinzel", Georgia, serif',
                      fontSize: 'clamp(0.85rem, 1.8vw, 1.4rem)',
                      color: '#C9A84C',
                      textShadow: '0 2px 16px rgba(0,0,0,0.7)',
                      letterSpacing: '0.28em',
                    }}
                  >
                    {date}
                  </p>
                )}

                {/* Title line 1 */}
                <h1
                  className='font-serif font-light leading-none tracking-tight transition-none'
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`,
                    fontSize: 'clamp(4rem, 10vw, 9rem)',
                    color: '#ffffff',
                    textShadow: '0 4px 30px rgba(0,0,0,0.7), 0 1px 0 rgba(0,0,0,0.5)',
                  }}
                >
                  {firstWord}
                </h1>

                {/* Title line 2 — italic, slides the other way */}
                <h1
                  className='font-serif font-extralight italic leading-none tracking-tight transition-none'
                  style={{
                    transform: `translateX(${textTranslateX}vw)`,
                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                    color: 'rgba(255,255,255,0.85)',
                    textShadow: '0 4px 30px rgba(0,0,0,0.7), 0 1px 0 rgba(0,0,0,0.5)',
                  }}
                >
                  {restOfTitle}
                </h1>

                {/* Scroll hint — fades out as video appears */}
                {scrollToExpand && (
                  <p
                    className='text-white/60 text-[10px] tracking-[0.35em] uppercase mt-8 transition-none'
                    style={{ opacity: Math.max(1 - scrollProgress * 5, 0) }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>
            </div>

            {/* Post-expansion children content — gradient bridges from dark video into cream page */}
            {children && (
              <motion.section
                className='flex flex-col w-full px-8 pt-24 pb-32 md:px-16'
                style={{
                  background: 'linear-gradient(to bottom, #000000 0%, #0A1628 25%, #1a2a42 55%, #F8F7F5 100%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
