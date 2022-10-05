import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import img from "../../assests/listItem.jpg";
import "./ListItem.scss";

const ListItem = () => {
  return (
    <div className="listItem">
      <img src={img} alt="" />
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          modi cumque dicta natus ad culpa et commodi vitae ex iusto?
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
