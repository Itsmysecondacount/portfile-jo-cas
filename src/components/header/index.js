import { Modal } from '../modal';
import './header.css';
import jcLogo from '../../assets/logo_sprite-export.png';

export const Header = () => {
	return (
		<div className="header-layout">
			<img src={jcLogo} alt="jocas-img-small" />
			<Modal />
		</div>
	);
};
