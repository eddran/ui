/// <reference types="react" />
interface Props {
    children: any;
    type: "success" | "warning" | "info" | "danger" | "dark";
}
declare const Notification: ({ children, ...props }: Props) => JSX.Element;
export default Notification;
