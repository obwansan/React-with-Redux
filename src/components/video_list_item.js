import React from 'react';

const VideoListItem = ({video}) => {
  // {video} above is the ES6 version of doing "const video = props.video;"
  // console.log(video);
  // video is the object returned from youtube (5 of them in an array). We access
  // the url using this nested objects path.
  const imageUrl = video.snippet.thumbnails.default.url;

  // A JS variable used in JSX has to be wrapped in curly braces e.g.
  // src={imageUrl}
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
