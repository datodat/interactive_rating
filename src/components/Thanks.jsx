const Thanks = ({ value }) => {
  return (
      <div className='thanks-div'>
        <div className='selected-value-div'>
          You selected {value} out of 5
        </div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating.
          if you ever need more support, don't hesitate to
          get in touch!
        </p>
      </div>
    );
}

export default Thanks;