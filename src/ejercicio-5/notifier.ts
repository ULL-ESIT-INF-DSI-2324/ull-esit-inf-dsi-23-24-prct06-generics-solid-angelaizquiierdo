import { NotificatioServer } from "./notificatioservice";


export class Notifier{
  constructor(private notificatioServer: NotificatioServer) {}

  sendNotification(mensage: string): void {
    this.notificatioServer.notify(mensage);
  }
}