import React, { useEffect, useState } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import { Background } from '@shared/Background';
import { Header } from '@shared/Header';
import { Footer } from '@shared/Footer';
import styles from './template.styles.scss';
import { Modal } from '@shared/Modal';

export const LOG_TYPES = {
	in: 'login',
	out: 'logout',
};

export const Template = (props) => {
	const onboarding = React.useRef();
	const [logType, setLogType] = useState(LOG_TYPES.out);
	const [disabledBtn, setDisabledBtn] = useState(false);
	const [accounts, setAccounts] = useState([]);
	const [modal, setModal] = useState({
		shown: false,
		label: '',
		text: '',
	});

	const onGetNewAccounts = (newAccounts) => {
		setAccounts(newAccounts);
	};

	useEffect(() => {
		if (!onboarding.current) {
			onboarding.current = new MetaMaskOnboarding();
		}
	}, []);

	useEffect(() => {
		if (MetaMaskOnboarding.isMetaMaskInstalled()) {
			window.ethereum.on('accountsChanged', onGetNewAccounts);
		}
		return () => {
			window.ethereum.removeListener('accountsChanged', onGetNewAccounts);
		};
	}, []);

	useEffect(() => {
		if (accounts.length > 0 && logType === LOG_TYPES.out)
			setLogType(LOG_TYPES.in);
		if (accounts.length < 1 && logType === LOG_TYPES.in)
			setLogType(LOG_TYPES.out);
	}, [accounts]);

	const onLogin = () => {
		if (MetaMaskOnboarding.isMetaMaskInstalled()) {
			setDisabledBtn(true);
			window.ethereum
				.request({ method: 'eth_requestAccounts' })
				.then((newAccounts) => {
					onGetNewAccounts(newAccounts);
				})
				.catch(() => {
					setModal({
						shown: true,
						label: 'Error with Metamask',
						text: 'The error occurred while connecting wallet',
						onClick: () => setModal({ shown: false }),
					});
				})
				.finally(() => {
					setDisabledBtn(false);
				});
		} else {
			setModal({
				shown: true,
				label: 'Install Metamask',
				text: 'You should install Metamask extension',
				onClick: () => onboarding.current.startOnboarding(),
			});
		}
	};

	return (
		<div className={styles.wrapper}>
			<Header
				onLogin={onLogin}
				onLogout={() => setLogType(LOG_TYPES.out)}
				logType={logType}
				disabledBtn={disabledBtn}
				account={accounts[0]}
			/>
			<Background />
			<div className={styles.content}>{props.children}</div>
			<Footer />
			{modal.shown && (
				<Modal {...modal} onClose={() => setModal(() => ({ shown: false }))} />
			)}
		</div>
	);
};
