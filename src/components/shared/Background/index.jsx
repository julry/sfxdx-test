import React, { useEffect, useMemo, useState } from 'react';
import styles from './background.styles.scss';

export const Background = () => {
	const initialCoordinates = useMemo(() => [
		{ top: '-153px', left: '-250px', transform: 'translate(0,0)' },
		{ top: '-176px', right: '-150px', transform: 'translate(0,0)' },
		{ bottom: '-163px', left: '-126px', transform: 'translate(0,0)' },
		{ bottom: '-120px', right: '-150px', transform: 'translate(0,0)' },
	], []);

	const [ellipsesCoordinates, setEllipsesCoordinates] = useState(initialCoordinates);

	const getRandomCoordinates = (ind) => {
		const { clientWidth, clientHeight } = document?.documentElement ?? {};
		let randLeft = Math.floor((Math.random() * 2 * clientWidth / 3) - (clientWidth / 3));
		let randTop = Math.floor((Math.random() * 2 * clientHeight / 3) - (clientHeight / 3));
		return {
			transform: `translate(${randLeft}px, ${randTop}px)`,
		};
	};

	useEffect(() => {
		requestAnimationFrame(function animate(time) {
			setEllipsesCoordinates((coordinates, i) => [...coordinates]
				.map((coordinate) => ({
					...coordinate,
					...getRandomCoordinates(i),
				})),
			);

			setTimeout(() => {
				requestAnimationFrame(animate);
			}, 5000);
		});
	}, []);

	return (
		<div className={styles.wrapper}>
			<svg
				width='1057'
				height='908'
				viewBox='0 0 1057 908'
				fill='none'
				className={styles.ellipse}
				style={ellipsesCoordinates[0]}
			>
				<g opacity='0.5' filter='url(#filter0_f_4122_11936)'>
					<ellipse cx='528.214' cy='454.258' rx='229.5' ry='345' transform='rotate(-65.4076 528.214 454.258)'
									 fill='#B2F1DE' />
				</g>
				<defs>
					<filter id='filter0_f_4122_11936' x='0.205078' y='0.931641' width='1056.02' height='906.652'
									filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
						<feFlood floodOpacity='0' result='BackgroundImageFix' />
						<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
						<feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_4122_11936' />
					</filter>
				</defs>
			</svg>
			<svg
				width="1057" height="908" viewBox="0 0 1057 908" fill="none"
				className={styles.ellipse}
				style={ellipsesCoordinates[1]}
			>
				<g opacity="0.15" filter="url(#filter0_f_4124_11937)">
					<ellipse cx="229.5" cy="345" rx="229.5" ry="345" transform="matrix(-0.41616 -0.909291 -0.909291 0.41616 937.428 519.365)" fill="#3AC922"/>
				</g>
				<defs>
					<filter id="filter0_f_4124_11937" x="0.205078" y="0.931641" width="1056.02" height="906.652" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4124_11937"/>
					</filter>
				</defs>
			</svg>
			<svg width="1057" height="908" viewBox="0 0 1057 908"  fill="none" id={'ellipse3'} className={styles.ellipse}
					 style={ellipsesCoordinates[2]}>
				<g opacity="0.15" filter="url(#filter0_f_4125_11938)">
					<ellipse cx="528.214" cy="454.258" rx="229.5" ry="345" transform="rotate(-65.4076 528.214 454.258)" fill="#3AC922"/>
				</g>
				<defs>
					<filter id="filter0_f_4125_11938" x="0.205078" y="0.931641" width="1056.02" height="906.652" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4125_11938"/>
					</filter>
				</defs>
			</svg>
			<svg width="1002" height="972" viewBox="0 0 1002 972"  fill="none" className={styles.ellipse}
					 style={ellipsesCoordinates[3]}>
				<g opacity="0.5" filter="url(#filter0_f_4125_11939)">
					<ellipse cx="500.702" cy="486.027" rx="229.5" ry="345" transform="rotate(-131.253 500.702 486.027)" fill="#B2F1DE"/>
				</g>
				<defs>
					<filter id="filter0_f_4125_11939" x="0.361816" y="0.493652" width="1000.68" height="971.067" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4125_11939"/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};
