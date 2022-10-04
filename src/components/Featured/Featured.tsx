import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import bannerImg from "../../assests/banner.webp";
import featuredImg from "../../assests/fetured.jpg";
import "./Featured.scss";

type Data = {
  type: string;
};
const Featured = ({ type }: Data) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={bannerImg} alt="" />
      <div className="info">
        <img src={featuredImg} alt="" />
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          suscipit aut accusantium dolor, alias id repudiandae excepturi culpa?
          Nihil non magni quaerat, commodi consequatur debitis maxime qui, minus
          tempora et blanditiis voluptas quas fuga quod atque eaque. Voluptatem
          sed magnam reiciendis dolorem consectetur eveniet recusandae sequi!
          Nesciunt maiores beatae voluptates.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
