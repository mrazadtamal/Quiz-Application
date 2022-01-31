import React, { useEffect } from "react";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

const useVideoList = () => {
  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();

      const videosRef = ref(db, "videos");
      const videosQuery = query();
    }

    fetchVideos();
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default useVideoList;
