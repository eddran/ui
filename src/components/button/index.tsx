import React from "react";

import "./Button.scss";

export enum ButtonSize {
  small = "small",
  large = "large",
}

export enum ButtonType {
  success = "success",
  warning = "warning",
  info = "info",
  danger = "danger",
  primary = "primary",
  light = "light",
  dark = "dark",
  text = "text",
  default = "default",
}

export interface Props {
  //  children?: any;
  type?: ButtonType;
  outline?: boolean;
  disabled?: boolean;
  /**  Sets button size */
  size?: ButtonSize;
  loading?: boolean;
  onClick?: () => {};
  icon?: string;
  transparent?: boolean;
  /** The main label of the button */
  label?: string;
  plain?: boolean;
}

function getSize(size: ButtonSize): string {
  switch (size) {
    case ButtonSize.small:
      return "btn-sm";
    case ButtonSize.large:
      return "btn-lg";
    default:
      return "btn-lg";
  }
}

function getType(type: string, transparent: boolean) {
  if (transparent) {
    return "btn-text-" + type;
  }
  if (type === "text") {
    return "btn-link";
  }
  return "btn-" + type;
}

const Button = (props: Props) => {
  let isDisabled = false;
  let classArr: string[] = ["btn"];

  if (props.outline) {
    classArr.push("btn-outline-" + props.type);
  }
  if (props.disabled) {
    isDisabled = true;
  }
  if (!props.outline && !props.plain) {
    classArr.push(getType(props.type, props.transparent));
  }

  if (props.plain) {
    classArr.push("btn-plain-" + props.type);
  }

  if (props.size) {
    classArr.push(getSize(props.size));
  }

  if (props.loading) {
    isDisabled = true;
  }

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className={classArr.join(" ")} disabled={isDisabled} onClick={onClick}>
      {props.loading ? (
        <div className="loader loading-button">
          <svg className="circular-loader" viewBox="25 25 50 50">
            <circle className="loader-path" cx="50" cy="50" r="20" fill="none" strokeWidth="5" />
          </svg>
        </div>
      ) : (
        <React.Fragment>
          {props.icon && <i className={props.icon} />}
          {props.label}
        </React.Fragment>
      )}
    </button>
  );
};

// Set default props
Button.defaultProps = {
  label: "Add product",
  type: "default",
  size: "small",
  outline: false,
  disabled: false,
  loading: false,
};

export default Button;
