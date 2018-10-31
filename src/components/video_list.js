import React from 'react';
import VideoListItem from './video_list_item';

// The 'videos' prop(erty) in class App is an array (on the props object?)
// that is passed as an argument from App to VideoList (this is passing props
// to a function component). The parameter the argument is passed into is (always)
// called 'props'. In App, 'videos' has been assigned this.state.videos
// (videos={this.state.videos}) so the videos array will be a property on the
// videos/props object. You could therefore do this in the VideoList component -
// const videos = props.videos; - because props is a variable holding an object
// (videos) that has the property, called videos, that is an array of objects.
//
// When props are passed to a class-based component, they aren't passed as an
// argument (as for function components) but are available in any of the class's
// methods via 'this.props'.

// Loop over the videos array and return an array of VideoListItem components,
// where the props of each are a single video object (an element from the videos
// array).
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // Every li should have a unique key. The etag is a property on the video
    // object (see it in the console).
    return <VideoListItem key={video.etag} video={video} />
  })

  // React will recognise that {videoItems} is an array of VideoListItems (i.e.
  // JSX <li>s and will render them within the <ul>.)
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
