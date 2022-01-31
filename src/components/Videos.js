import classes from "../styles/Videos.module.css";
import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "./hooks/useVideoList";

export default function Videos() {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.map((video) => (
        <Link to="/quiz" key={video.youtubeID}>
          <Video title={Video.title} id={video.youtubeID} noq={video.noq} />
        </Link>
      ))}
    </div>
  );
}
