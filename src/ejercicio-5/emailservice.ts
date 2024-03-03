import { NotificatioServer } from "./notificatioservice";

/**
 * Clase que representa un servicio de notificación por correo electrónico.
 * Implementa la interfaz NotificationService.
 */
export class EmailService implements NotificatioServer {
  /**
   * Envía una notificación por correo electrónico con el mensaje proporcionado.
   * @param mensage El mensaje que se enviará como notificación.
   */
  notify(mensage: string): void {
    console.log(`Enviando notificación por correo electrónico: ${mensage}`);
  }
}
