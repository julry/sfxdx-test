import React from 'react';
import styles from './button.styles.scss';

export const Button = (props) => {
	const { size, icon, type, className, ...otherProps } = props;
	return (
		<button
			className={`${styles.button} ${size ? styles['button_size' + size] : ''} ${type ? styles['button_type_' + type] : ''} ${className}`}
			{...otherProps}
		>
			<div className={styles.button_content}>
				{icon?.left && <img
					className={`${styles.button_icon} ${styles.button_icon_left}`}
					src={icon?.left}
					alt={''}
				/>}
				{props.children}
				{icon?.right && <img
					className={`${styles.button_icon} ${styles.button_icon_right}`}
					src={icon?.right}
					alt={''}
				/>}
			</div>
		</button>
	);
};