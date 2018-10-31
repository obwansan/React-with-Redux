import React from 'react';

const VideoDetail = ({video}) => {
  // Without this if statement the page won't load...because VideDetail in index.js is
  // rendered before the state has been set with the retrieved videos i.e.
  // <VideoDetail video={this.state.videos[0]} />
  //
  // So how are the videos rendered after <div>Loading...</div> has been
  // returned?...
  // "The YTSearch function has a callback which is called once the video data
  // has been retrieved from the Youtube API. When that callback runs, it calls
  // setState. Because setState has been called, the component renders again,
  // this time having video data to work with. Now that there is video data,
  // we no longer see "Loading..." ""
  if (!video) {
    return <div>Loading...</div>;
  }
  // {video} above is the ES6 version of passing the 'props' argument and
  // having "const video = props.video;" in the function.
  const videoId = video.id.videoId;
  // const url = "https://www.youtube.com/embed/" + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
