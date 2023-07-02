import { Server, Socket } from "socket.io";

const io = new Server({
	// path: "/simplay-socket/",
	transports: ["websocket", "polling"],
	cors: {
		origin: "*",
	},
});

export interface CustomSocket extends Socket {
	user?: any; // or any other type
}

let userIdList: any = {};

const getUserId = (id: any) => {
	return userIdList[`${id}`] || "";
};

const setUserId = (_id: any, id: any) => {
	userIdList[`${_id}`] = id;
};

console.log("server is running.... on port 4009");

io.on("connection", (socket: CustomSocket) => {
	console.log("Socket Connection Received");

	// io.emit("first-event", "hello new user connected");

	// io.to(getUserId(boy?._id)).emit("new-order", d);

	//set user data when connected
	socket.on("set-user", (d) => {
		socket.user = d;
		setUserId(d.id, socket.id);
		console.log(d.id);
		console.log(`user saved successfully ${getUserId(d.id)} `);
	});

	socket.on("test-ping", (d) => {
		console.log("d: ", d);
		io.emit("test-pong", d);
	});

	/*
	 * Users' Events
	 */

	socket.on("sendMessage", (data: { recieverId: string; message: string }) => {
		console.log("Received chat message:", data.message);

		const recipientSocketId = getUserId(`${data.recieverId}`);
		console.log("recipientSocketId: ", recipientSocketId);
		if (recipientSocketId) {
			// Emit the chat message to the recipient

			// socket.emit("recieveMessage", {
			// 	senderId: socket.user.id,
			// 	message: data.message,
			// });

			io.to(recipientSocketId).emit("recieveMessage", {
				senderId: socket.user.id,
				message: data.message,
			});
		}
	});

	// join user into chat room

	socket.on("disconnect", (history) => {
		io.emit("disconnected", "user gone");
	});
});

io.listen(4009);
