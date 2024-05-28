"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import "@/css/news.css";
import { useEffect, useState } from "react";

import { AddBanner } from "@/components/Adsense";
import MainBg from "@/components/MainBg";

export default function NewsPage() {
	const GOOGLE_ADSENSE_CLIENT_ID =
		process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID ?? "";

	const SlotAd1AndAd2 = "9630566447";
	const SlotAd3 = "8700628151";
	const SlotAd4 = "3500719479";
	const SlotAd5AndAd6 = "7092033017";

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<MainBg>
			<h1>TESTE: {GOOGLE_ADSENSE_CLIENT_ID}</h1>
			{isClient && (
				<>
					<div id="news-page">
						<AddBanner
							AdClient={GOOGLE_ADSENSE_CLIENT_ID}
							AdSlot={SlotAd3}
							AdFormat="fluid"
						/>
					</div>
				</>
			)}
		</MainBg>
	);
}
