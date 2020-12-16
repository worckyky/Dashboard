import React, { useEffect, useState } from 'react'

type VideoFrameType = {
   linkID: string
}

const VideoFrame: React.FC<VideoFrameType> = ({ linkID }) => {
   const [value, setValue] = useState('VJmNtYZl8i4')

   useEffect(() => {
      if (linkID.length === 11) {
         setValue(linkID)
      }
   }, [linkID])

   return (
      <>
         <iframe
            width='100%'
            height='auto'
            src={`https://www.youtube.com/embed/${value}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
         />
      </>
   )
}

export default VideoFrame