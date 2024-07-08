import React from "react";
import { useLocation } from "react-router-dom";

const YouTubeEmbed = () => {
  const location = useLocation();
  const { link } = location.state;

 const getYouTubeEmbedLink = (url) => {
   const urlObj = new URL(url);
   let videoId = urlObj.searchParams.get("v");

   if (!videoId) {
     const pathParts = urlObj.pathname.split("/");
     videoId = pathParts[pathParts.length - 1];
   }

   return videoId;
 };

  const embedLink = `https://www.youtube.com/embed/${getYouTubeEmbedLink(
    link
  )}`;

  return (
    <div className="youtube-embed">
      <iframe
        width="560"
        height="315"
        src={embedLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default YouTubeEmbed;
