export function GET() {
	return new Response(
		JSON.stringify([
			{
				post: "at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.post/3lery4ketx226"
			}
		])
	)
}
