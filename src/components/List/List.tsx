import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.scss";
const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setMoved] = useState(false);
  let listRef = useRef<HTMLDivElement>(null);
  const handleClick = (slider: string) => {
    setMoved(true);
    if (slider === "left" && listRef.current !== null && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      const distance = listRef.current.getBoundingClientRect().x - 50 + 230;
      listRef.current.style.transform = `translateX(${distance}px)`;
    }
    if (slider === "right" && listRef.current !== null && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      const distance = listRef.current.getBoundingClientRect().x - 50 - 230;
      listRef.current.style.transform = `translateX(${distance}px)`;
    }
  };

  interface display {
    displays: string;
  }

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
          style={!isMoved ? { display: "none" } : { display: "block" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
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
