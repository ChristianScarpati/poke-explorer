import { forwardRef } from "react";
import { TypographyProps } from "../../../utils/types/common";
import cn from "classnames";
import styles from "./Title.module.scss";

const defaultStyle = {
	fontStyle: "normal",
	fontWeight: "500",
	lineHeight: "2.2rem",
	letterSpacing: "0.1318em",
};

type TitleProps = JSX.IntrinsicElements["p"] &
	TypographyProps<HTMLParagraphElement> & {
		relative?: boolean;
		h1?: boolean;
		h2?: boolean;
		hovered?: boolean;
	};

const Title = forwardRef<HTMLParagraphElement, TitleProps>(
	({ children, style, h1, h2, relative, hovered, ...props }: TitleProps, forwardedRef) => {
		const classes = cn(styles["default"], {
			[styles["default--h1"]]: h1,
			[styles["default--h2"]]: h2,
			[styles["default--relative"]]: relative,
			[styles["default--hovered"]]: hovered,
		});

		return (
			<p
				style={{
					...defaultStyle,
					...style,
				}}
				className={classes}
				ref={forwardedRef}
				{...props}
			>
				{children}
			</p>
		);
	}
);

export default Title;
