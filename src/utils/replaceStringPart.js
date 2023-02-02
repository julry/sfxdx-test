export const replaceStringPart = (string, indStart, indEnd, replacement) => {
	if (!string || !string.length) return;
	return string.slice(0, indStart) + replacement + string.slice(indEnd);
}