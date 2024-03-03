import { NotificatioServer } from "./notificatioservice";


/**
 * Clase que utiliza diferentes tipos de servicios para realizar notificaciones.
 * @metodo sendNotification
 */
export class Notifier {
  /**
   * Construye un objeto Notifier con el servicio de notificación proporcionado.
   * @param notificationService El servicio de notificación que utilizará Notifier.
   */
  constructor(private servidor_notificacion: NotificatioServer) {}

  /**
   * Envía una notificación con el mensaje proporcionado utilizando el servicio de notificación configurado.
   * @param message El mensaje que se enviará como notificación.
   */
  sendNotification(mensage: string): void {
    this.servidor_notificacion.notify(mensage);
  }
}