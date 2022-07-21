const GetQuestion = (props) => {
    const { question, value, answer, category, isVisible } = props;
    return (
      <div>
        <h2 className="welcome">Let's Play</h2>
        <button onClick={props.handleGetQuestion} className="get-question">
          Get Question
        </button>
        <br />
        <div className="category">
          <h3 className="welcome">Category:</h3>{" "}
          <p className="display">{category}</p>
        </div>
  
        <div className="points">
          <h4 className="welcome">Points:</h4> <p className="display">{value}</p>
        </div>
  
        <div className="question">
          <h4 className="welcome">Question:</h4>
          <p className="welcome">{question}</p>
        </div>
  
        <button onClick={props.handleReveal} className="reveal">
          Click to Reveal Answer
        </button>
        {isVisible ? (
          <div className="answer">
            <h3 className="welcome">Answer:</h3>{" "}
            <h4 className="welcome">{answer}</h4>
          </div>
        ) : null}
        </div>
      );
    };
    
    export default GetQuestion;