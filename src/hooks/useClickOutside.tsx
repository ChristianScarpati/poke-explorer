import { RefObject, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
type EventHandler = (event?: MouseEvent | TouchEvent | KeyboardEvent) => void;

// eslint-disable-next-line max-len
const useOnClickOutside = (
	ref: RefObject<HTMLDivElement | HTMLUListElement>,
	handler: EventHandler
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target as Node)) return;
			handler();
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key !== "Escape" && e.key !== "Esc") return;
			handler(e);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
