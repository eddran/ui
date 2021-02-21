/// <reference types="react" />
import "./Button.scss";
export declare enum ButtonSize {
    small = "small",
    large = "large"
}
export declare enum ButtonType {
    success = "success",
    warning = "warning",
    info = "info",
    danger = "danger",
    primary = "primary",
    light = "light",
    dark = "dark",
    text = "text",
    default = "default"
}
export interface Props {
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
declare const Button: {
    (props: Props): JSX.Element;
    defaultProps: {
        label: string;
        type: string;
        size: string;
        outline: boolean;
        disabled: boolean;
        loading: boolean;
    };
};
export default Button;
