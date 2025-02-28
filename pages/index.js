import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (

    <div className="container mx-auto px-4 py-8" style={{backgroundColor:"#C9F4F3"}}>

      <header className="text-center mb-8 p-2" style={{display: 'block',padding:'0 1rem'}}>
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality thumbnails from YouTube videos.</p> 
        
      </header>

      <div style={{justifyContent: 'center',width:'65%',marginTop:"2rem" ,margin:"0 auto"}} className="text-center" >
        <input
          type="text"
          style={{display: 'block',border:'3px solid gray',marginTop:"2rem" }}
          className="px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          style={{marginRight: 'auto', marginLeft: 'auto',display: 'block',border:'3px solid gray'}}
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>

      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4" style={{marginLeft: '1.5rem'}}>Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  style={{marginRight: 'auto', marginLeft: 'auto',display: 'block',border:'3px solid gray'}}
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
                <a
                  className="btn-blue mt-2"
                  style={{width:'200px',margin: '1rem auto',display: 'block',border:'3px solid gray'}}
                  href={option.url} download={`thumbnail_${index + 1}.jpg`}
                >
                  Download Image
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
