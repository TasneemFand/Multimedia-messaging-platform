import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {

	// load the fisrt server for that user profile that signed in.

	const profile = await initialProfile();

	const server = await db.server.findFirst({
		where: {
			members: {
				some: {
					profileId: profile.id
				}
			}
		}
	});

	if(server) {
		return redirect(`/servers/${server.id}`);
	}
	return ( 
		<div>
			create a server
		</div>
	);
}
 
export default SetupPage;