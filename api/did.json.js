import did from "../DID.js"

export function GET() {
	return new Response(
		JSON.stringify({
			"@context": ["https://www.w3.org/ns/did/v1"],
			id: did,
			service: [
				{
					id: "#bsky_fg",
					type: "BskyFeedGenerator",
					serviceEndpoint: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api`
				}
			]
		})
	)
}
