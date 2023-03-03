import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

export default function SkillList() {
	const languages = [
		'python',
		'c',
		'cpp',
		'css',
		'html',
		'javascript',
		'csharp',
	];

	const languageFrameworks = {
		'python': [
			['pytorch', 'pytorch-logo.png'],
			['tensorflow', 'tensorflow-logo.svg'],
			['django', 'django-logo.png'],
			['pandas', 'pandas-logo.svg'],
			['nltk', 'nltk-logo.png'],
			['scrapy', 'scrapy-logo.png'],
			['tkinter', 'tkinter-logo.png'],
			['pygame', 'pygame-logo.png'],
			['numpy', 'numpy-logo.png'],
			['matplotlib', 'matplotlib-logo.png'],
			['huggingface', 'huggingface-logo.png'],
			['and a lot more ...', 'more-logo.jpg'],
		],
		'javascript': [['react', 'react-logo.png']],
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: 4,
			}}>
			<Box key={'gutter' || 'default'}>
				<List
					variant="outlined"
					sx={{
						bgcolor: 'background.body',
						minWidth: 240,
						borderRadius: 'sm',
						boxShadow: 'sm',
						'--List-decorator-size': '48px',
						'--List-item-paddingLeft': '1.5rem',
						'--List-item-paddingRight': '1rem',
					}}>
					{languages.map((language, idx) => (
						<div>
							<ListItem>
								<ListItemDecorator
									sx={{ alignSelf: 'flex-start' }}>
									<Avatar
										size="sm"
										src={
											'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/' +
											language +
											'/' +
											language +
											'.png'
										}
									/>
								</ListItemDecorator>
								{language}
							</ListItem>
							{idx < languages.length - 1 && (
								<ListDivider inset={'gutter'} />
							)}

							{languageFrameworks.hasOwnProperty(language) && languageFrameworks[language].map((fw, idx) => {
								const [framework, logo] = fw;

								return (
									<div>
										<ListItem>
											<ListItemDecorator
												sx={{
													alignSelf: 'flex-start',
												}}>
												<Avatar
													size="sm"
													src={'/images/' + logo}
												/>
											</ListItemDecorator>
											{framework}
										</ListItem>
										{idx < fw.length - 1 && (
											<ListDivider inset={'gutter'} />
										)}
									</div>
								);
							})}
						</div>
					))}
				</List>
			</Box>
		</Box>
	);
}
