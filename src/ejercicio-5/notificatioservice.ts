
/**
 * Interfaz que define un servicio de notificación.
 */
export interface NotificatioServer {
  /**
   * Envía una notificación con el mensaje proporcionado.
   * @param mensage El mensaje que se enviará como notificación.
   */
  notify(mensage: string): void;
}