import { HeadlinkProps } from "./Headlink.props";
import styles from "./Headlink.module.css";
import cn from "classnames";

function Headlink({children, className, ...props }: HeadlinkProps ) {
  return (
   <h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
  );
};

export default Headlink;
