import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoadingIcons from "react-loading-icons";
export default function MainContent(props) {
  console.log(props);
  return (
    <div className="inner-containter">
      <h1 className="title"> Advice Of The Day is Here!</h1>
      <h2 className="sub-title">Note it Down ✍️</h2>
      <p className="advice">
        {" "}
        {props.isLoading ? <LoadingIcons.Rings /> : props.advice}
      </p>
      <button
        className={`button ${props.isLoading ? "button-loading" : ""}`}
        disabled={props.isLoading}
        onClick={props.newAdvice}
      >
        {props.isLoading ? "loading..." : "Next"}
      </button>
    </div>
  );
}
