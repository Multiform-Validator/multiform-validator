import Script from "next/script";

interface AdsenseProps {
	GOOGLE_ADSENSE_CLIENT_ID: string | undefined;
}

export default function Adsense({ GOOGLE_ADSENSE_CLIENT_ID }: AdsenseProps) {
	return (
		<script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_CLIENT_ID}`}
			crossOrigin="anonymous"
		/>
	);
}

interface AddBannerProps {
	AdClient: string;
	AdSlot: string;
	AdFormat?: string;
	FullWidthResponsive?: boolean;
}

// TEST
export function AddBanner({
	AdClient,
	AdSlot,
	AdFormat = "auto",
	FullWidthResponsive = true,
}: AddBannerProps) {
	return (
		<>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client={AdClient}
				data-ad-slot={AdSlot}
				data-ad-format={AdFormat}
				data-full-width-responsive={FullWidthResponsive}
			/>
			<Script id="adsbygoogle-start" strategy="lazyOnload">
				{`(adsbygoogle = window.adsbygoogle || []).push({});`}
			</Script>
		</>
	);
}
