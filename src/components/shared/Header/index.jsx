import React, { useEffect, useState } from 'react';
import styles from './header.styles.scss';
import { Logo } from '@shared/Logo';
import { Button } from '@shared/Button';
import buttonTypes from '@shared/Button/buttonTypes';
import { getButtonSize } from '@src/utils/getButtonSize';
import { disconnect, metamaskLogo } from '@shared/icons';
import { LOG_TYPES } from '@components/Template';
import { replaceStringPart } from '@src/utils/replaceStringPart';

export const Header = (props) => {
	const [buttonSize, setButtonSize] = useState(getButtonSize('L', 'S'));
	const { logType, onLogout, onLogin, disabledBtn, account } = props;

	useEffect(() => {
		function handleResize() {
			setButtonSize(getButtonSize('L', 'S'));
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={styles.wrapper}>
			<Logo className={styles.logo} />
			{logType === LOG_TYPES.out ? (
				<Button
					className={styles.header_btn}
					type={buttonTypes.primary}
					size={buttonSize}
					onClick={onLogin}
					disabled={disabledBtn}
				>
					Connect Wallet
				</Button>
			) : (
				<Button
					className={`${styles.header_btn} ${styles.header_btn_login}`}
					icon={{
						left: metamaskLogo,
						right: disconnect,
					}}
					type={buttonTypes.tertiary}
					size={buttonSize}
					onClick={onLogout}
					disabled={disabledBtn}
				>
					{replaceStringPart(account, 10, -4, '...')}
				</Button>
			)}
		</header>
	);
};
