import React from "react";
function Lipsvideo({ styles }) {
  return (
    <div className={styles._lipsVideo}>
      <div className={styles._lipsVideo_Child}>
        <div className={styles._lipsVideo_containter}>
          <video autoPlay muted controls={false} loop={true}>
            <source src="./lipsVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles._lipsVideo_content}>
            <span>
                Red Lips
            </span>
        </div>
      </div>
    </div>
  );
}
export default Lipsvideo;
