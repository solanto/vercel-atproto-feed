import did from "../../DID"

export function GET() {
	return new Response(
		JSON.stringify([
			{
				did,
				feeds: [{ uri: `at://${did}/app.bsky.feed.generator/default` }]
			}
		])
	)
}
