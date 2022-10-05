import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.scss";
const List = () => {
  let listRef = useRef<HTMLDivElement>(null);
  const handleClick = (slider: string) => {
    if (slider === "left" && listRef.current !== null) {
      const distance = listRef.current.getBoundingClientRect().x - 50 + 230;
      listRef.current.style.transform = `translateX(${distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
};

export default List;
