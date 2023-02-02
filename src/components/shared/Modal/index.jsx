import React from 'react';
import {close} from '@shared/icons';
import { Button } from '@shared/Button';
import styles from './modal.styles.scss';
import buttonTypes from '@shared/Button/buttonTypes';
import buttonSizes from '@shared/Button/buttonSizes';

export const Modal = (props) => {
	const {onClose, label, text, onClick, btnText = 'Okay'} = props;
	return (
		<div className={styles.wrapper}>
			<div className={styles.darken}/>
			<div className={styles.content}>
				<div className={styles.title_wrapper}>
					<h2 className={styles.title}>
						{label}
					</h2>
					<img className={styles.close_icon} src={close} onClick={onClose} alt={''}/>
				</div>
				<p className={styles.modal_text}>
					{text}
				</p>
				<Button
					className={styles.modal_button}
					onClick={onClick}
					type={buttonTypes.primary}
					size={buttonSizes.L}
				>{btnText}</Button>
			</div>
		</div>
	)
}