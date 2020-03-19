import React from "react";
import HistoryIcon from "@material-ui/icons/History";
import "../assets/header.css";
import ComponentHistory from "./componentHistory";

export default function Header() {
  const [openHistory, setOpenHistory] = React.useState(false);

  function closeHistory(data) {
    setOpenHistory(data);
  }

  return (
    <div className="header-body">
      <div>
        <HistoryIcon
          className="history-icon"
          onClick={() => setOpenHistory(!openHistory)}
        />
        <ComponentHistory open={openHistory} close={closeHistory} />
      </div>
      <div>Calculator App</div>
    </div>
  );
}
