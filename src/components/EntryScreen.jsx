import Image from "next/image";
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';

export default function EntryScreen({ onEnter }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center noise-bg">
      <button
        onClick={onEnter}
        className="group relative flex flex-col items-center mt-5 gap-4"
      >
        <Image
          src="/dance.gif"
          alt=""
          width={200}
          height={200}
          className="absolute -top-17"
          priority
          unoptimized
        />

        <TextShimmerWave
          className="font-['Chillax'] text-2xl mt-1 [--base-color:#c90076] [--base-gradient-color:#c8f4ff]"
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
        >
          Press to Begin
        </TextShimmerWave>
      </button>
    </div>
  );
} 