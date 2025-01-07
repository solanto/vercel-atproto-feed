import { AtpAgent, BlobRef } from "@atproto/api"
import did from "./DID.js"

async function run() {
	const agent = new AtpAgent({ service: "https://bsky.social" })

	await agent.login({
		identifier: process.env.BSKY_HANDLE,
		password: process.env.BSKY_PASSWORD
	})

	await agent.com.atproto.repo.putRecord({
		repo: agent.session?.did ?? "",
		collection: "app.bsky.feed.describeFeedGenerator",
		rkey: "test",
		record: {
			did,
			displayName: "test",
			description: "test description",
			// avatar: avatarRef,
			createdAt: new Date().toISOString()
		}
	})
}

run()
