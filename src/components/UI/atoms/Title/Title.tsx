import { forwardRef } from "react";
import { TypographyProps } from "../../../utils/types/common";

const defaultStyle = {
	fontFamily: "Platform",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "1.8rem",
	lineHeight: "2.2rem",
	letterSpacing: "0.0018em",
};

type TitleProps = JSX.IntrinsicElements["p"] & TypographyProps<HTMLParagraphElement>;

const Title = forwardRef<HTMLParagraphElement, TitleProps>(
	({ children, style, ...props }: TitleProps, forwardedRef) => {
		return (
			<p
				style={{
					...defaultStyle,
					...style,
				}}
				ref={forwardedRef}
				{...props}
			>
				{children}
			</p>
		);
	}
);

export default Title;
