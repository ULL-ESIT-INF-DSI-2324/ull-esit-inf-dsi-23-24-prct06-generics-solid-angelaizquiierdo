import { NotificatioServer} from "./notificatioservice";

/**
 * Clase que representa un servicio de notificación por mensaje corto (SMS).
 * Implementa la interfaz NotificationService.
 */
export class ShortMessageService implements NotificatioServer {
  /**
   * Envía una notificación por SMS con el mensaje proporcionado.
   * @param mensage El mensaje que se enviará como notificación.
   */
  notify(mensage: string): void {
    console.log(`Enviando notificación por SMS: ${mensage}`);
  }
}