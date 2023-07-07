/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
	async rewrites() {
		return [
			{
				source: '/api',
				destination: 'https://newsapi.org/v2/everything?q=ukraine&from=2023-06-23&sortBy=publishedAt&apiKey=b7f111332ea241dd9d93a86228743d53',
			},
		]
	},
}


// module.exports = nextConfig
