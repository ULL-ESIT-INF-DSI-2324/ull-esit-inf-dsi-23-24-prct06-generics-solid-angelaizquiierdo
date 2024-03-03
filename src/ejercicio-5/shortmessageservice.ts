import { NotificatioServer} from "./notificatioservice";

/**
 * 
 */
export class ShortMessageService implements NotificatioServer {
  notify(mensage: string): void {
    console.log(`Sending notification by short message: ${mensage}`);
  }
}