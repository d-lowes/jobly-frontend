function handleChange(evt) {

  const [formInput, setformInput] = useState({
    searchInput: ""
  });

  const fieldName = evt.target.name;
  const value = evt.target.value;

  setformInput(currData => {
    currData[fieldName] = value;
    return {...currData};
  });
}