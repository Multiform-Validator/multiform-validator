import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const hostUrl: string =
		process.env.NEXT_PUBLIC_WEBSITE_URL ??
		"https://gabriel-logan.github.io/multiform-validator";

	return {
		rules: {
			userAgent: "*",
		},
		sitemap: `${hostUrl}/sitemap.xml`,
	};
}
