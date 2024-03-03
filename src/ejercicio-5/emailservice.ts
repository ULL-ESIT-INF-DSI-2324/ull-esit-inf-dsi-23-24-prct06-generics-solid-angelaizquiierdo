import { NotificatioServer } from "./notificatioservice";

export class EmailService implements NotificatioServer {
  notify(mensage: string): void {
    console.log(`Sending notification by email: ${mensage}`);
  }
}
