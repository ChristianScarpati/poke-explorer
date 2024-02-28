import { forwardRef } from "react";
import cn from "classnames";
import styles from "./Container.module.scss";

type ContainerProps = JSX.IntrinsicElements["div"] &
	React.CSSProperties & {
		width?: string;
		height?: string;
		gap?: number;
		maxWidth?: string;
		maxHeight?: string;
	};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ children, width, height, gap, maxWidth, maxHeight, ...props }, ref) => {
		// const classes = cn(styles["container"], className);
		const classes = cn(styles["container"], styles.container);

		return (
			<div className={classes} ref={ref} {...props}>
				{children}
			</div>
		);
	}
);

export default Container;
