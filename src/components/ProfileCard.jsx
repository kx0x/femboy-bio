import Image from "next/image";
import { Eye } from "lucide-react";
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

export default function ProfileCard({ 
  viewCount, 
  prevCount, 
  shouldAnimate,
  omoriFont,
  profileImage,
  angelImage,
  sparkleImage,
  username,
  description,
  profileImageSize = 130,
  angelImageSize = 120,
  sparkleImageSize = 124
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4 
      }}
      className="relative z-30 w-full max-w-2xl mx-auto"
    >
      <Tilt
        className="parallax-effect"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        gyroscope={true}
      >
        <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl border border-neutral-800/50 opacity-60">
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-neutral-800/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]"></div>
              <div className="w-3 h-3 rounded-full bg-white drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]"></div>
              <div className="w-3 h-3 rounded-full bg-white drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]"></div>
            </div>
            <div className="flex items-center gap-1 text-sm text-neutral-500">
              <Eye size={17} className="text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.6)] mr-1" />
              {shouldAnimate ? (
                <CountUp 
                  start={prevCount}
                  end={viewCount} 
                  duration={8}
                  separator=","
                  className="font-['Chillax'] text-white text-lg/snug drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]"
                />
              ) : (
                <span className="font-['Chillax'] text-lg/snug">
                  {viewCount}
                </span>
              )}
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={profileImageSize}
                  height={profileImageSize}
                  className="rounded-full"
                  priority
                />
                <Image
                  src={angelImage}
                  alt="Angel"
                  width={angelImageSize}
                  height={angelImageSize}
                  className="absolute top-[-27px] left-0 mt-4"
                  priority
                  unoptimized
                />
              </div>
              <h1 className={`${omoriFont.className} font-bold text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative`}>
                {username}
                <Image
                  src={sparkleImage}
                  alt="Sparkle"
                  width={sparkleImageSize}
                  height={24}
                  className="absolute -top-1"
                  priority
                  unoptimized
                />
              </h1> 
              <p className={`${omoriFont.className} text-neutral-300 text-xl text-center`}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
} 