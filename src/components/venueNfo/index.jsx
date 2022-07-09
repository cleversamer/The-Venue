import { Zoom } from "react-awesome-reveal";

const VenueNFO = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item" triggerOnce>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: "url(/assets/icons/calendar.png)",
                    }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">Dec 20 @01:20:00pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className="vn_item" delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: "url(/assets/icons/location.png)",
                    }}
                  ></div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">375 Deer Oak, Oakland, CA 9835</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNFO;
