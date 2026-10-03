/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "murjan-opti.s3.amazonaws.com" },
			{ protocol: "https", hostname: "murjan.s3.amazonaws.com" },
		],
	},
	reactStrictMode: false,
};
