import React from 'react';
import styles from './footer.styles.scss';
import { Logo } from '@shared/Logo';
import {
	instagramIcon,
	facebookIcon,
	youtubeIcon,
	twitterIcon
} from '@shared/icons';

export const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.links_wrapper}>
				<a className={styles.link}>Privacy Policy</a>
				<a className={styles.link}>Terms & Conditions</a>
				<a className={styles.link}>Cookie Policy</a>
			</div>
			<div className={styles.logo_wrapper}>
				<Logo className={styles.logo}/>
			</div>
			<div className={styles.networks_block}>
				<img className={styles.network_icon} src={facebookIcon} alt={'facebook'}/>
				<img className={styles.network_icon} src={twitterIcon} alt={'twitter'}/>
				<img className={styles.network_icon} src={youtubeIcon} alt={'youtube'}/>
				<img className={styles.network_icon} src={instagramIcon} alt={'inst'}/>
			</div>
			<p className={styles.rights}>
				©2022 All rights reserved. Powered by Atla
			</p>
		</footer>
	);
};