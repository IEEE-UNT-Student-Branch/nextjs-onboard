import type { NextPageWithLayout } from '@/components/Page';
import type { ReactElement } from 'react';
import Image from 'next/image';
import cat from '@/media/cat.jpg';
import homePageStyles from '@/styles/HomePage.module.css';

const HomePage: NextPageWithLayout = function () {
	//Visible on http://localhost:80/
	return (
		<div id="mainContainer" className="flex flex-col w-full">
			<div
				id="welcomeMsg"
				className={`${homePageStyles['welcomeMsg']} w-full p-10 m-10 text-center`}
			>
				Hello, Next.js!
			</div>
			<div className="w-1/3 self-center">
				<Image
					id="catImage"
					src={cat}
					alt="silly cat"
					className="object-contain h-full w-full"
				></Image>
			</div>
			<a href="https://matias.me/nsfw/" className="p-10 m-10 text-center">
				here is a link (not malware)
			</a>
		</div>
	);
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <div>{page}</div>;
};
export default HomePage;
