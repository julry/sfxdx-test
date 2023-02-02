import buttonSizes from '@shared/Button/buttonSizes';

export const getButtonSize = (desktopSize, mobileSize) => {
	if (
		document &&
		document?.documentElement &&
		document?.documentElement?.clientWidth < 450
	) {
		return buttonSizes[mobileSize];
	}
	return buttonSizes[desktopSize];
};
