import type { AppProps } from 'next/app';
import './global.css';
import type { NextPageWithLayout } from '@/components/Page';

export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(<Component {...pageProps} />);
}
