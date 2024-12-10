import Score from "./Score";

function Learner(props) {
  return (
    <div>
      <h1>{props.learner.name}</h1>
      <p>{props.learner.bio}</p>
      <h2>Scores:</h2>
      {props.learner.scores.length &&
        props.learner.scores.map((score, index) => {
          return <Score key={index} score={score} />;
        })}
    </div>
  );
}

export default Learner;
