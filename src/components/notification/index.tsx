import React from "react";

interface Props {
  children: any;
  type: "success" | "warning" | "info" | "danger" | "dark";
}

const Notification = ({ children, ...props }: Props) => {
  if (props.type) {
    return <div className={"notification-container notification-" + props.type}>{children}</div>;
  }

  return <div className={"notification-container"}>{children}</div>;
};

export default Notification;
