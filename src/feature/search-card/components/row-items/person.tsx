import { PersonType } from "../../types";

const Person = ({ data }: { data: PersonType }) => {
  return (
    <div className="row-container">
      <div className="row-icon-wrapper">
        <div className="row-icon">
          <img
            className="row-img"
            src="https://thumbs.dreamstime.com/b/business-man-cute-smirk-his-face-young-looking-camera-42666979.jpg"
          />
        </div>
        <div className="active-dot" />
      </div>

      <div className="content">
        <div className="content-header">
          <h5 className="content__title">{data.title}</h5>
        </div>
        <div className="content__desc">
          <p className="desc">{data.lastActive}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
