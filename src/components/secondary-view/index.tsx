import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "antd";

import "./styles.less";

const SecondaryView = ({ children }: any) => {
  const messages = useSelector((state: any) =>
    state.app.messages.filter((message: any) => message.context === "app")
  );
  return (
    <div className="secondary-view" style={{ background: "#fff" }}>
      {(messages || []).map((message: any) => (
        <Alert
          key={message.Id}
          message={`${
            message.status ? message.status + ":" : ""
          }  ${message.devMessage || message.userMessage}`}
          showIcon
          closable
          type={message.type || "info"}
        />
      ))}

      {children}
    </div>
  );
};

export default SecondaryView;
