import styles from '@shared/Background/background.styles.scss';
import React from 'react';

export const Ellipse4 = (props) => (
	<svg width="1002" height="972" viewBox="0 0 1002 972" fill="none" {...props}>
		<g opacity="0.5" filter="url(#filter0_f_4125_11939)">
			<ellipse
				cx="500.702"
				cy="486.027"
				rx="229.5"
				ry="345"
				transform="rotate(-131.253 500.702 486.027)"
				fill="#B2F1DE"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_4125_11939"
				x="0.361816"
				y="0.493652"
				width="1000.68"
				height="971.067"
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
					result="effect1_foregroundBlur_4125_11939"
				/>
			</filter>
		</defs>
	</svg>
);
