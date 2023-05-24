export default function MainContent(props) {
  console.log(props);
  return (
    <div>
      <h1 className="title">Advice Of The Day is Here!</h1>
      <h2 className="sub-title">Note it Down ✍️</h2>
      <p className="advice">{props.advice}</p>
      <button className="button" onClick={props.newAdvice}>
        {props.isLoading ? "loading" : "next"}
      </button>
    </div>
  );
}
