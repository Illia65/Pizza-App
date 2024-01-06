import { HTMLAttributes, ReactNode } from "react";



export interface HeadlinkProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}