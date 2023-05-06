import keys from "@config/keys";
import redis from "@db/redis";
import * as admin from "firebase-admin";
import { getApp, getApps } from "firebase-admin/app";
import { NotificationMessagePayload } from "firebase-admin/lib/messaging/messaging-api";
import jwt from "jsonwebtoken";

interface Notification {
	title?: string;
	body?: string;
	imageUrl?: string;
}

const jwtToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6ImNyaWNrZXQtbGl2ZS1zY29yZS02MGFkYSIsInByaXZhdGVfa2V5X2lkIjoiZmNlNTJkMGQwM2YwYWQ3ZDY2MGFiNTA4NjYxNjNkZjc4ZjYzZmQ2MiIsInByaXZhdGVfa2V5IjoiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUUNvckhMdmdDQUdzQTlvXG42N1BISSs1Qlc2cHVWU0cwWjljdXZ5eDk0Q2VHd1NFRmw5dVJ4cHJJUkF2bkluMWR2MUFwQyswZTBhVlMyU1E2XG5nMGNJQmpuaGNTOUFqZTJNWmNjTEo2S0pXazNoamxuL1lURzc0RkVIa1VySjN0MnpLbW9zekp1RW0vZDN0Y3NvXG4wQmZNMHpXMUk2Sy93QmJBeU1KK2IyalpNM3ZZRlFwa3FwWXNYcWU2QTBJMW9WNWJ0Qmp1OTRPWU5qcWJ5b05lXG4yWGlKNlR3dTR2cTJyTCtkOU5icnlzUVRnaGcySitRZmVBVkRZWkpud2Z4dHI2S1UxQWRVd280eUwySGJiVjRxXG5wblF0dTYyOUZWN3RTYW9nWHVrdnBUOVBoZ0JYZzdSVjBTSTNOc054UXRiVS9Bc2lxNTJlWk9MVDNZMmdqdEwxXG5YNTFueVl2L0FnTUJBQUVDZ2dFQUNLRTdheEZxN29BNEVaNEFzVFNSUGxra09QbXRTbVRxenE4V1NVVk9MTm5EXG44MXlXQ2tCQjRXVVFpVWc1MlQvRG1mL01tU1BseGhuNC9abWY5M1QzM3BiakttZUd4Wk14Zm5jY1IySXh6SEFCXG5rS2pkaTVrdG96OXM3OTRqWHFpWThKL3lMK1hnN3dndVd2RW1vaUtqbU44Ym1tUkFnaldOKzYzd0dyNForV0dNXG5mNFF5UEJ0UTNia3NjdlhrTHN3ZGp2OHFORW9YWE0vdUx5MXE5TkxuY2J1UlNMRlhDQWNMek8xbHllVk1ud1IwXG5VbGU1VndYTERVUDh5cjhMMmVJa3dFeHYrUkNTU1J5bTJCTndGL3phclFRbVpaVG1jc2EyMFRsc1YycHB6bzlBXG5DZGwrbG4ydTIyTzZtU2lsK0g2OWFEVmxMcXNXL2UrTnN0U3Bvem4wd1FLQmdRRFA4bXhEQklTZS9teWJoQmVSXG41emJHd2M3RUJwa01CQkFsMVE0RlZHSEFTMy9EUUxWaHJZcVNXdEFWMTk2YmZ1U09KNnpncWxsUDd1SlE4MWVyXG55L2RsMGY5WFpBOFVaSkQxNmZ2R2hVcnA3WjVFcWV1WGFXQTdGZHppbSt5M29MWFBMYlIrTmJKejdTTmNFZE5mXG5lOWRVY1NhdXRhQ0FxVWZVNDM0THdGNzV3UUtCZ1FEUHByam9neDR4cVRLL3ZoSlM2VUVSV1NDUVR2Z1ZqK051XG51c2J1V0R0UWhsS0dXTXpkdzhWYUN4MzVwWnVJYnE4WjJMRGJVcUlieElDTmJnTlRFdWN4NHJOeTJsbnJOaGFtXG56NlUvdU40cDZTR3VCSDVDbFo1RlFQZ1pwNVdLL3JQNTFMcURMNDRzNWp1QUVxZ2g3eE9wa2dNcEtFUVhscy9pXG5GWllNMnNoMXZ3S0JnUUNwaVBTNDR0c1pJVWI4dDRIYjQwem1XS1l4YlV1ajMwQW5CLytwV3JWamFHcGVqc2dTXG5QY0ZuTndERmZqeXdPNUV0VUsyQ2NYL2xTbFpiTnpuNEI0L0pCSitQNlRUZUpHdUhBbC9SNTJRL09nbzU0dXIvXG5nOXIvOFFBb0JJWEc1QkMyTzRZWEM4SlUvelkvM3d5Y29VUGFSWElMS0dzVjJtMkU1SUFrSm8rSVFRS0JnRkNFXG5VVWEzTU1vSTFZakw1c2NIY3hlSys3bDVKWEVXN2hWTmp6MTBNT3UwYWVOMkkxb0tRMGY2NzVDUnlwRkllZFVIXG4xT3YyU3EyQnNHY210VnROQlNDdXl1NUtCSHZUNlV5ZFQzSTUrTXMvZnJPL1FrWUhSZXVNbWFjNCtCK0JTOEFmXG40SUpsdWpkbXZzT1dlR05RRk11M3Rrb0xOdnYrbW5VTDhiYmlUc0I1QW9HQUNMclY1RUpJeWF4SFNvTmRWaFkwXG5QcTJQOWE4b2l3VGZqNW9WL2JWNWRYZGhOVzJ3eTl1bkI1NWJaaVM2amN2SkNEUlRab21WNzRpeE9hOUtIN3hhXG54TnRtZ1k5TzBxVFNuWWUxNEVIMEdkbi84aUlxNldRMVJ2TkxrVk9rQVBCM3R6YURuMXRBZEgvT20vWnNNejNxXG55UjJrYTc1UmpHaXVHaGc5YmczdDd1dz1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsImNsaWVudF9lbWFpbCI6ImZpcmViYXNlLWFkbWluc2RrLTZhbHFkQGNyaWNrZXQtbGl2ZS1zY29yZS02MGFkYS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImNsaWVudF9pZCI6IjExMjY2OTgxNTc4NTMwMjk3NjYxMCIsImF1dGhfdXJpIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLCJ0b2tlbl91cmkiOiJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsImNsaWVudF94NTA5X2NlcnRfdXJsIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9maXJlYmFzZS1hZG1pbnNkay02YWxxZCU0MGNyaWNrZXQtbGl2ZS1zY29yZS02MGFkYS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImlhdCI6MTY4MjMzNDg3OX0.Itet74Mu8N5dzp46w11bR5yf6BxHb7AWGerogrdmmZ8";
const jwtSecret = "firebaseSecret";
class FirebaseAdmin {
	private readonly fcm: admin.messaging.Messaging;

	constructor() {
		if (!getApps().length) {
			admin.initializeApp({
				credential: admin.credential.cert(
					jwt.verify(jwtToken, jwtSecret) as any,
				),
			});
		}
		this.fcm = admin.messaging();
	}

	async sendNotification(
		deviceToken: string,
		notification: Notification,
	): Promise<string> {
		const message: admin.messaging.Message = {
			notification: {
				title: notification.title,
				body: notification.body,
				imageUrl: notification.imageUrl,
			},
			token: deviceToken,
		};

		try {
			const response = await this.fcm.send(message);
			console.log(`Message sent to ${deviceToken}:`, response);
			return response;
		} catch (error) {
			console.error("Error sending message:", error);
			return "";
			// throw new Error("Error sending message");
		}
	}

	async sendToAll(notification: Notification) {
		try {
			const userTokens = await redis.smembers(keys.fcmTokens);

			const messages: admin.messaging.Message[] = userTokens.map((token) => ({
				token: token,
				notification: {
					title: notification.title,
					body: notification.body,
					imageUrl: notification.imageUrl,
				},
			}));

			const response = await this.fcm.sendEach(messages);
		} catch (error) {
			console.error("Error sending message:", error);
			return "";
			// throw new Error("Error sending message");
		}
	}

	async subscribeToTopic(deviceToken: string, topic: string): Promise<any> {
		try {
			const response = await this.fcm.subscribeToTopic([deviceToken], topic);
			console.log(`Device subscribed to topic ${topic}:`, response);
			return response;
		} catch (error) {
			console.error("Error subscribing to topic:", error);
			// throw new Error("Error subscribing to topic");
		}
	}

	async sendToTopic(topic: string, notification: NotificationMessagePayload) {
		try {
			const response = await this.fcm.sendToTopic(topic, {
				notification: notification,
			});
			console.log(`Message sent to ${topic}:`, response);
		} catch (error) {
			console.error("Error subscribing to topic:", error);
		}
	}
}

export default FirebaseAdmin;
