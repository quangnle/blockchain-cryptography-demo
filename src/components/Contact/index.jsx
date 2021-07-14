const Contact = () => {
  const clickMe = () => {
    const data = undefined;
    console.log(data.as);
  };
  return (
    <div>
      <h3>Contact</h3>
      <button type="button" onClick={clickMe}>
        CLICK ME
      </button>
    </div>
  );
};

export default Contact;
