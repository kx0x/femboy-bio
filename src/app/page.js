"use client"
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState, useRef } from 'react';
import localFont from 'next/font/local';
import ProfileCard from '@/components/ProfileCard';
import EntryScreen from '@/components/EntryScreen';

const omoriFont = localFont({
  src: '../../public/omori.ttf',
  variable: '--font-omori'
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [viewCount, setViewCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const [isEntered, setIsEntered] = useState(false);
  const [isCountUpdated, setIsCountUpdated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchInitialCount = async () => {
      try {
        const { data, error } = await supabase
          .from('page_views')
          .select('count')
          .single();

        if (error) throw error;
        const currentCount = data?.count || 0;
        setViewCount(currentCount);
      } catch (error) {
        console.error('Error fetching initial count:', error);
      }
    };

    fetchInitialCount();
  }, []);

  useEffect(() => {
    if (isEntered && !isCountUpdated) {
      const updateViewCount = async () => {
        try {
          // Increment the view count in Supabase
          const { data, error } = await supabase
            .from('page_views')
            .update({ count: viewCount + 1 })
            .eq('id', 1) // Assuming your row has id=1
            .select();

          if (error) throw error;

          setPrevCount(viewCount);
          setViewCount(prev => prev + 1);
          setIsCountUpdated(true);
          setShouldAnimate(true);
        } catch (error) {
          console.error('Error updating view count:', error);
        }
      };

      updateViewCount();
    }
  }, [isEntered, isCountUpdated, viewCount]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  const handleEnter = async () => {
    try {
      await audioRef.current.play();
      setIsEntered(true);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />
      
      {!isEntered ? (
        <EntryScreen onEnter={handleEnter} />
      ) : (
        <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-neutral-950 p-3 py-12 md:py-24">
          
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover z-10 opacity-45"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <div className="relative z-30 w-full max-w-4xl mx-auto">
            <ProfileCard 
              viewCount={viewCount}
              prevCount={prevCount}
              shouldAnimate={shouldAnimate}
              omoriFont={omoriFont}
              profileImage="/profilePic.png"
              angelImage="/angel_webp.webp"
              sparkleImage="/sparkle_white.gif"
              username="Klofrox"
              description="I do not use my name on any forums, social media, or similar platforms, and just as I do not share my private information here, I do not share it elsewhere either."
              profileImageSize={180}
              angelImageSize={170}
              sparkleImageSize={174}
            />
          </div>
        </div>
      )}
    </>
  );
}
