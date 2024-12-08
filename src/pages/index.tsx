import { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import BackgroundMusicPlayer from "@/components/BackgroundMusicPlayer";

export default function Index() {
  // State and refs for each element
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const target1 = useRef(null);
  const target2 = useRef(null);
  const target3 = useRef(null);

  return (
    <div className="frame">
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* First element with tooltip on hover */}
        <a
          className="pulseWrapper1"
          ref={target1}
          href="https://tokenlauncher.rakeshvillage.fun/"
          target="_blank"
          onMouseEnter={() => setShow1(true)}
          onMouseLeave={() => setShow1(false)}
        >
          <div className="fixedCircle"></div>
          <div className="pulseLoader"></div>
        </a>
        {target1.current && (
          <Overlay target={target1.current} show={show1} placement="right">
            {(props) => (
              <Tooltip id="tooltip1" {...props} className="custom-tooltip">
                Launcher
              </Tooltip>
            )}
          </Overlay>
        )}

        {/* Second element with tooltip on hover */}
        <a
          className="pulseWrapper2"
          ref={target2}
          target="_blank"
          onMouseEnter={() => setShow2(true)}
          onMouseLeave={() => setShow2(false)}
        >
          <div className="fixedCircle"></div>
          <div className="pulseLoader"></div>
        </a>
        {target2.current && (
          <Overlay target={target2.current} show={show2} placement="right">
            {(props) => (
              <Tooltip id="tooltip2" {...props} className="custom-tooltip">
                Coming Soon
              </Tooltip>
            )}
          </Overlay>
        )}

        {/* Third element with tooltip on hover */}
        <a
          className="pulseWrapper3"
          ref={target3}
          href="https://home.rakeshvillage.fun/"
          target="_blank"
          onMouseEnter={() => setShow3(true)}
          onMouseLeave={() => setShow3(false)}
        >
          <div className="fixedCircle"></div>
          <div className="pulseLoader"></div>
        </a>
        {target3.current && (
          <Overlay target={target3.current} show={show3} placement="right">
            {(props) => (
              <Tooltip id="tooltip3" {...props} className="custom-tooltip">
                Village
              </Tooltip>
            )}
          </Overlay>
        )}
      </div>

      <div className="scroll-right">
        <span>Scroll</span>
        <div className="arrow-box">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>
      <BackgroundMusicPlayer />
    </div>
  );
}
