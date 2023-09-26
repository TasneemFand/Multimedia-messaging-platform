import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

import { NextApiResponseServerIo } from "@/types";

export const config = {
  api: {
    bodyParser: false,
  },
};

//start the WebSocket connection
const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
	if (res.socket.server.io) {
		console.log('Socket is already running')
	}
   //create a new socket connection if one does not already there
	else {
		const path = "/api/socket/io";
		//connect the HTTP server to Socket.IO
		const httpServer: NetServer = res.socket.server as any;
		const io = new ServerIO(httpServer, {
		path: path,
		// @ts-ignore
		addTrailingSlash: false,
		});
		res.socket.server.io = io;
	}
  	res.end();
}

export default ioHandler;