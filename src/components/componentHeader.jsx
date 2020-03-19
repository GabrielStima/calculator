import React from "react";
import HistoryIcon from "@material-ui/icons/History";
import "../assets/header.css";
import ComponentHistory from "./componentHistory";

export default function ComponentHeader() {
  const [openHistory, setOpenHistory] = React.useState(false);

  function closeHistory(data) {
    setOpenHistory(data);
  }

  return (
    <div className="header-body">
      <div className="history-wrap">
        <HistoryIcon
          className="history-icon"
          onClick={() => setOpenHistory(!openHistory)}
        />
        <ComponentHistory open={openHistory} close={closeHistory} />
      </div>
      <div>
        <div className="app-title">Calculator App</div>
      </div>
    </div>
  );
}
