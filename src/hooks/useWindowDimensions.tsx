import { useState, useEffect } from "react";

function getWindowDimensions() {
	try {
		const width = window.visualViewport?.width ?? window.innerWidth;
		const height = window.visualViewport?.height ?? window.innerHeight;

		return {
			width,
			height,
		};
	} catch (error) {
		return {
			width: 0,
			height: 0,
		};
	}
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowDimensions;
}
