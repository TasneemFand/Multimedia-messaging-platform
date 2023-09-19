//All files uploaded to uploadthing are associated with a FileRoute.
//middleware to authenticate and tag requests.
import { auth } from '@clerk/nextjs';
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => {
	const userId = auth();
	if(!userId) {
		throw new Error('Unauthorized');
	}
	return { userId: userId}
} 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1} })
		.middleware(() => handleAuth())
		// This code runs on your server before upload
		.onUploadComplete(async ({ metadata, file }) => {
		// This code RUNS ON YOUR SERVER after upload
		}),
	messageFile : f(["image", "pdf"])
		.middleware(() => handleAuth())
		.onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;