import { useState } from "react";
import ListGroup from "./component/ListGroup";
import Alert from "./component/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [alertText, setAlertText] = useState("");
  let items = ["New York", "San Francisco"];

  const onSelectItem = (item: string) => {
    if (item === alertText) {
      setAlertVisibility(!alertVisible);
    } else if (alertText === "") {
      setAlertText(item);
      setAlertVisibility(!alertVisible);
    } else {
      setAlertText(item);
    }
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(true)}>{alertText}</Alert>
      )}
      <ListGroup items={items} heading="Slm" onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
