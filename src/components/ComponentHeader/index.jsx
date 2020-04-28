import React from "react";
import "./styles.css";
import HistoryIcon from "@material-ui/icons/History";
import ComponentHistory from "../ComponentHistory";

const ComponentHeader = () => {
  const [openHistory, setOpenHistory] = React.useState(false);

  return (
    <div className="header-body">
      <div className="history-wrap">
        <HistoryIcon
          className="history-icon"
          onClick={() => setOpenHistory(!openHistory)}
        />
        <ComponentHistory open={openHistory} close={setOpenHistory} />
      </div>
      <div>
        <div className="app-title">Calculator App</div>
      </div>
    </div>
  );
};

export default ComponentHeader;
