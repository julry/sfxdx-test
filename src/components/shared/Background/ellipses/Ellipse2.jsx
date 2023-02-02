import styles from '@shared/Background/background.styles.scss';
import React from 'react';

export const Ellipse2 = (props) => (
	<svg width="1057" height="908" viewBox="0 0 1057 908" fill="none" {...props}>
		<g opacity="0.15" filter="url(#filter0_f_4124_11937)">
			<ellipse
				cx="229.5"
				cy="345"
				rx="229.5"
				ry="345"
				transform="matrix(-0.41616 -0.909291 -0.909291 0.41616 937.428 519.365)"
				fill="#3AC922"
			/>
		</g>
		<defs>
			<filter
				id="filter0_f_4124_11937"
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
					result="effect1_foregroundBlur_4124_11937"
				/>
			</filter>
		</defs>
	</svg>
);
