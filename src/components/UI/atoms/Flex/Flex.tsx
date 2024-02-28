import { ComponentProps } from "../../../utils/types/common";
import cn from "classnames";
import styles from "./Flex.module.scss";
import { forwardRef } from "react";

type FlexProps = JSX.IntrinsicElements["div"] &
	ComponentProps<HTMLDivElement> & {
		direction?: "row" | "column";
		justify?: "center" | "start" | "end" | "between" | "around" | "evenly" | "normal";
		align?: "start" | "end" | "center" | "baseline" | "stretch" | "normal";
		wrap?: "wrap" | "nowrap" | "wrap-reverse";
		gap?: number;
		grow?: number;
		shrink?: number;
		basis?: string;
		className?: string;
		fullWidth?: boolean;
		fullHeight?: boolean;
		center?: boolean;
	};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
	(
		{
			children,
			direction = "row",
			justify = "normal",
			align = "normal",
			wrap = "nowrap",
			center,
			gap = 0,
			grow = 0,
			shrink = 0,
			basis = "auto",
			className,
			fullWidth,
			fullHeight,
			...rest
		}: FlexProps,
		ref
	) => {
		const classes = cn(styles["container"], className, {
			[styles["container--row"]]: direction === "row",
			[styles["container--column"]]: direction === "column",
			[styles["container--alignCenter"]]: align === "center" || center,
			[styles["container--alignStart"]]: align === "start",
			[styles["container--alignEnd"]]: align === "end",
			[styles["container--alignBaseline"]]: align === "baseline",
			[styles["container--justifyCenter"]]: justify === "center" || center,
			[styles["container--justifyStart"]]: justify === "start",
			[styles["container--justifyEnd"]]: justify === "end",
			[styles["container--justifyBetween"]]: justify === "between",
			[styles["container--justifyAround"]]: justify === "around",
			[styles["container--1gap"]]: gap === 1,
			[styles["container--fullWidth"]]: fullWidth,
			[styles["container--fullHeight"]]: fullHeight,
		});

		const customStyles = {
			flexDirection: direction,
			justifyContent: justify,
			alignItems: align,
			flexWrap: wrap,
			gap: `${gap}px`,
			flex: `${grow} ${shrink} ${basis}`,
		};

		return (
			<div ref={ref} style={customStyles} className={classes} {...rest}>
				{children}
			</div>
		);
	}
);

export default Flex;
