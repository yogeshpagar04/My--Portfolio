import React, { useState } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import { Button } from '../Button/Button';
import styles from './Card.module.css';
import Dialog from '@material-ui/core/Dialog';

const Card = (props) => {
	const [state, setState] = useState(false);
	const { newTheme } = React.useContext(ThemeContext);
	const {
		img,
		des,
		title,
		live,
		gitHub,
		technologies,
		role,
		organization,
		category,
		contribution,
	} = props;

	const [width] = WindowSize();

	const handleButton = () => {
		setState(!state);
	};
	const handleClose = (value) => {
		setState(false);
	};
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='300'
			data-aos-easing='ease-in-sine'
			data-aos-duration='700'
			className={styles.card}
			style={{
				boxShadow: `3px 3px 5px ${newTheme.line}`,
				backgroundColor: `${newTheme.highlightBackground}`,
			}}
		>
			<div className={styles.image}>
				<img src={img} alt='project' />
				<div className={styles.colorDiv} />
			</div>

			<div className={styles.card__Container}>
				<div
					className={styles.titleContainer}
					style={
						width <= 1000
							? { background: `${newTheme.card}` }
							: { background: 'none' }
					}
				>
					<h2 style={{ color: `${newTheme.title}` }}>{title}</h2>
					{(role || organization || category) && (
						<div className={styles.metaInfo}>
							{category && (
								<span
									className={styles.categoryBadge}
									style={{
										color: newTheme.accent || '#64ffda',
										borderColor: newTheme.accent || '#64ffda',
									}}
								>
									{category}
								</span>
							)}
							{(role || organization) && (
								<span
									className={styles.roleText}
									style={{ color: newTheme.para }}
								>
									<strong style={{ color: newTheme.title }}>{role}</strong>
									{role && organization && ' • '}
									{organization}
								</span>
							)}
						</div>
					)}
					{width <= 840 && (
						<Button
							text='Read More'
							handleButton={handleButton}
							padding='10px 20px'
						/>
					)}
					<p style={{ color: `${newTheme.para}` }}>{des}</p>
					<div className={styles.techWrapper}>
						{technologies.map((technology, index) => (
							<span
								key={index}
								className={styles.techBadge}
								style={{
									color: `${newTheme.title}`,
									borderColor: `${newTheme.line}`,
								}}
							>
								{technology}
							</span>
						))}
					</div>
					<div className={styles.cardActions}>
						{gitHub && (
							<a
								href={gitHub}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.actionBtn}
								title='GitHub Repository'
							>
								<i className='fab fa-github' /> Code
							</a>
						)}
						{live && (
							<a
								href={live}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.actionBtnPrimary}
								title='Live Demo'
							>
								<i className='fas fa-external-link-alt' /> Live Demo
							</a>
						)}
					</div>
				</div>

				<Dialog
					aria-labelledby='alert-dialog-title'
					aria-describedby='alert-dialog-description'
					open={state}
					onClose={handleClose}
				>
					<div
						style={{
							backgroundColor: `${newTheme.highlightBackground}`,
							padding: '20px',
						}}
					>
						<div className={styles.image}>
							<img src={img} alt='project' />
						</div>
						<h2 style={{ color: `${newTheme.title}` }}>{title}</h2>
						{(role || organization || category) && (
							<div className={styles.metaInfo} style={{ marginBottom: '12px' }}>
								{category && (
									<span
										className={styles.categoryBadge}
										style={{
											color: newTheme.accent || '#64ffda',
											borderColor: newTheme.accent || '#64ffda',
										}}
									>
										{category}
									</span>
								)}
								{(role || organization) && (
									<span
										className={styles.roleText}
										style={{ color: newTheme.para }}
									>
										<strong style={{ color: newTheme.title }}>{role}</strong>
										{role && organization && ' • '}
										{organization}
									</span>
								)}
							</div>
						)}
						<p style={{ color: `${newTheme.para}` }}>{des}</p>
						{contribution && (
							<p style={{ color: `${newTheme.para}`, marginTop: '10px' }}>
								<strong style={{ color: newTheme.accent || '#64ffda' }}>Contribution: </strong>
								{contribution}
							</p>
						)}
						<div className={styles.popupTech}>
							{technologies.map((technology, index) => (
								<div
									key={index}
									style={{
										marginRight: '20px',
										color: `${newTheme.title}`,
									}}
								>
									{technology}
									{index !== technologies.length - 1 ? ',' : '.'}
								</div>
							))}
						</div>
						<div
							style={{
								backgroundColor: `${newTheme.line}`,
								height: '1px',
							}}
						/>
						<br />
						<div className={styles.dialogElements}>
							<div
								style={{
									color: `${newTheme.title}`,
								}}
								className={styles.actionBtns}
							>
								<a
									href={gitHub}
									rel='noopener noreferrer'
									target='_blank'
								>
									<i className='fab fa-github' />
								</a>
								<a
									href={live}
									rel='noopener noreferrer'
									target='_blank'
								>
									<i className='fas fa-external-link-alt' />
								</a>
							</div>
							<Button
								text='close'
								handleButton={handleClose}
								padding='10px 20px'
							/>
						</div>
					</div>
				</Dialog>
			</div>
		</div>
	);
};

export default Card;
