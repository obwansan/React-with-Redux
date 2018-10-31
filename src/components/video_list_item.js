import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // {video} above is the ES6 version of passing the 'props' argument and
  // having "const video = props.video;" in the function. Same for onVideoSelect.

  // video is the object returned from youtube (5 of them in an array). We access
  // the url using this nested objects path.
  const imageUrl = video.snippet.thumbnails.default.url;

  // A JS variable used in JSX has to be wrapped in curly braces e.g. src={imageUrl}
  // When the video_list_item li is clicked, call the onVideoSelect function and pass
  // it the video object on the props object that is passed to VideoListItem.
  // 
  // Program flow: Whenever VideoListItem is clicked, call onVideoSelect() with the
  // video that was clicked on.
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
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
