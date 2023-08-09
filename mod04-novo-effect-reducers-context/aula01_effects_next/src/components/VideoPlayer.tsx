import { useEffect, useRef } from "react";

type Props = {
    src: string;
    isPlaying: boolean;
}

export const VideoPlayer = ({src, isPlaying}: Props) => {

    const videoTag = useRef<HTMLVideoElement>(null);
    // videoTag.current?.play();
    // videoTag.current?.pause();

    useEffect(()=>{
        if (isPlaying) {
            videoTag.current?.play();
        } else {
            videoTag.current?.pause();
        }
    }, [isPlaying]); // tem apenas o isPlaying, poderia deixar sem o ', []'

    return (
        <video ref={videoTag} src={src} loop playsInline />
    );
}