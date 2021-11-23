
module.exports = {
	reactStrictMode: true,
	async redirects() {
	return [
		{
			source: '/users/:userId/posts',
			destination: '/posts?userId=:userId',
			permanent: true,
		},
	]
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})
		return config;
	}
}