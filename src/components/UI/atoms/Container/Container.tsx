import { forwardRef } from "react";
import cn from "classnames";
import styles from "./Container.module.scss";

type ContainerProps = JSX.IntrinsicElements["div"] &
	React.CSSProperties & {
		width?: string;
		height?: string;
		gap?: number;
		marginCenter?: boolean;
		maxHeight?: string;
	};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ children, width, height, gap, marginCenter, maxHeight, ...props }, ref) => {
		const classes = cn(styles["container"], styles.container, {
			[styles["container--gap0"]]: gap === 0,
			[styles["container--custom-gap"]]: gap && gap !== 0 && gap > 0 && gap < 0.51,
			[styles["container--gap1"]]: gap === 1,
			[styles["container--gap2"]]: gap === 2,
			[styles["container--width"]]: width,
			[styles["container--height"]]: height,
			[styles["container--margin-center"]]: marginCenter,
			[styles["container--maxHeight"]]: maxHeight,
		});

		return (
			<div className={classes} ref={ref} {...props}>
				{children}
			</div>
		);
	}
);

export default Container;
