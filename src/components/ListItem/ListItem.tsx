import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import img from "../../assests/listItem.jpg";
import "./ListItem.scss";
const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
type Data = {
  index: number;
};
const ListItem = ({ index }: Data) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      style={isHover ? { left: index * 225 - 50 + index * 2.5 } : { left: 0 }}
      className="listItem"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt="" />

      {isHover && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemsInfoTop">
              <span>1 hour 14m</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur modi cumque dicta natus ad culpa et commodi vitae ex
              iusto?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
