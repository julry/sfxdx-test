import styles from '@shared/Background/background.styles.scss';
import React from 'react';

export const Ellipse3 = (props) => (
	<svg
		width="1057"
		height="908"
		viewBox="0 0 1057 908"
		fill="none"
		id={'ellipse3'}
		{...props}
	>
		<g opacity="0.15" filter="url(#filter0_f_4125_11938)">
			<ellipse
				cx="528.214"
				cy="454.258"
				rx="229.5"
				ry="345"
				transform="rotate(-65.4076 528.214 454.258)"
				fill="#3AC922"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_4125_11938"
				x="0.205078"
				y="0.931641"
				width="1056.02"
				height="906.652"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="100"
					result="effect1_foregroundBlur_4125_11938"
				/>
			</filter>
		</defs>
	</svg>
);
