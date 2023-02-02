import React, { useEffect, useMemo, useState } from 'react';
import { Ellipse1 } from '@shared/Background/ellipses/Ellipse1';
import { Ellipse2 } from '@shared/Background/ellipses/Ellipse2';
import { Ellipse3 } from '@shared/Background/ellipses/Ellipse3';
import { Ellipse4 } from '@shared/Background/ellipses/Ellipse4';
import styles from './background.styles.scss';

export const Background = () => {
	const initialCoordinates = useMemo(
		() => [
			{
				top: '-153px',
				left: '-250px',
				transform: 'translate(0,0)',
			},
			{
				top: '-176px',
				right: '-150px',
				transform: 'translate(0,0)',
			},
			{
				bottom: '-163px',
				left: '-126px',
				transform: 'translate(0,0)',
			},
			{
				bottom: '-120px',
				right: '-150px',
				transform: 'translate(0,0)',
			},
		],
		[]
	);

	const [ellipsesCoordinates, setEllipsesCoordinates] =
		useState(initialCoordinates);

	const getRandomCoordinates = (ind) => {
		const { clientWidth, clientHeight } = document?.documentElement ?? {};
		let randLeft = Math.floor(
			(Math.random() * 2 * clientWidth) / 3 - clientWidth / 3
		);
		let randTop = Math.floor(
			(Math.random() * 2 * clientHeight) / 3 - clientHeight / 3
		);
		return {
			transform: `translate(${randLeft}px, ${randTop}px)`,
		};
	};

	useEffect(() => {
		requestAnimationFrame(function animate(time) {
			setEllipsesCoordinates((coordinates, i) =>
				[...coordinates].map((coordinate) => ({
					...coordinate,
					...getRandomCoordinates(i),
				}))
			);

			setTimeout(() => {
				requestAnimationFrame(animate);
			}, 5000);
		});
	}, []);

	return (
		<div className={styles.wrapper}>
			<Ellipse1 className={styles.ellipse} style={ellipsesCoordinates[0]} />
			<Ellipse2 className={styles.ellipse} style={ellipsesCoordinates[1]} />
			<Ellipse3 className={styles.ellipse} style={ellipsesCoordinates[2]} />
			<Ellipse4 className={styles.ellipse} style={ellipsesCoordinates[3]} />
		</div>
	);
};
