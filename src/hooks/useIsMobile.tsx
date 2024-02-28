import { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { MOBILE_MAX_WIDTH } from "../constants/common";

export default function useIsMobile({ maxWidth = MOBILE_MAX_WIDTH }: { maxWidth?: number } = {}) {
	const { width } = useWindowDimensions();

	const [isMobile, setIsMobile] = useState(width < maxWidth);

	useEffect(() => {
		setIsMobile(width < maxWidth);
	}, [maxWidth, width]);

	return isMobile;
}
