[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

# Práctica 6

Autor: Ángela Zhouling Izquierdo Padrón

Email: alu0101480442@ull.edu.es

# Indice

- [Introducción](#introducción)
- [Realizacion de los ejercicios](#realización-de-los-ejercicios)
  - [Ejercicio 1 - La mudanza](#ejercicio-1-la-mudanza)
  - [Ejercicio 2 - Facturas en diferentes formatos](#ejercicio-2-facturas-en-diferentes-formatos)
  - [Ejercicio 3 - Gestor de ficheros](#ejercicio-3-gestor-de-ficheros)
  - [Ejercicio 4 - Imprisoras y escáneres](#ejercicio-4-impresoras-y-escáneres)
  - [Ejercicio 5 - Servicio de mensajería](#ejercicio-5-servicio-de-mensajería)
- [Conclusión](#conclusión)

# Introducción
Antes de relizar se tuvo que hacer es instalar las distintas dependencias de las anteriores prácticas. Y asimismo hacer los test unitarios con **mocha** y **chai**, y instalar la dependecia de **coveralls** y **Instanbul** para el cubrimiento del codigo en mis test. 

# Realización de los ejercicios

Lo primero que hice releer los principios SOLID antes de realizar el código por repaso de estos principios, luego plantee como se deberia funcionar el programa y lo que deberia contener las distintas clases de forma básica y luego ampliando a nuevas funcionalidades a lo largo de la realizacion del código.

## Ejercicio 1: La mudanza

Para realizar este ejercicio lo primero que hago es crear una interfaz respetando Los principios SOLID:

- El principio de segregación de la interfaz(ISP) especificando el objeto especifico en este caso creamos la interfaz `Enser` con `nombre`, `dimesiones`, `peso`, `fragilidad`, `GetDescripción()`. En donde el tipado dimensiones es de la clase `Tamayo` que contiene ancho, alto, fondo y un método para imprimir por pantalla la descripcion del tamaño.Y un **type** de nivel de fragilidas un rango de 1-5 de fragilidad siendo 1 menos fragil y 5 el más frágil para recortar el limite de fragilidad.

- El principio de sustitución de Liskov(LSP) se implementa `Enser` con las clases derivadas `Utencilios`, `Prenda` , `Vajilla` y `DispositivoElectronico`, en donde la clase derivada de `Enser` contiene los getter de los atributos publicos y un método de `GetDescripcion()` descrito en el interface.

- El principio de Abierto/cerrado(OCP) las clases están diseñadas de manera que sean fáciles de extender sin necesidad de modificar su código interno. Por ejemplo, si se desea agregar un nuevo tipo de objeto que pueda ser embalado para la mudanza, simplemente se crea una nueva clase que implemente la interfaz Enser, sin necesidad de modificar las clases existentes.

- El principio de Inversión de Dependencia (DIP) la clase `Caja` y otras clases dependen de abstracciones `Enser` en lugar de implementaciones concretas. Esto permite que el código sea más flexible y fácil de mantener.

- El principio de Responsabilidad Única (SRP) las clases como `Caja`, `Mudanza`, `Utencilios`, `Prenda`, `Vajilla`, `DispositivoElectronico` y `Tamayo` tienen una única responsabilidad bien definida. Por ejemplo, la clase `Caja` se encarga únicamente de gestionar los objetos que contiene, mientras que la clase `Utencilios` se encarga de representar los utensilios específicamente.

## Ejercicio 2: Facturas en diferentes formatos

Para realizar este ejercicio hay que aplicar el principio SOLID y aqui estan su aplicacion en distintas partes del código:

- Principio de Segregación de Interfaces (ISP) en este caso la interfaz `GeneradorFactura` define un único método `generarFactura()`, lo que permite que las clases que la implementan solo proporcionen la funcionalidad necesaria para generar una factura en un formato específico.

- Principio de Sustitución de Liskov (LSP) en este caso todas las clases que implementan la interfaz `GeneradorFactura` pueden ser utilizadas de manera intercambiable para generar facturas en diferentes formatos en este caso los formatos aplicados son PDF y HTML.

- Principio de Inversión de Dependencia (DIP) en este caso la clase `Factura` depende de la interfaz GeneradorFactura, lo que permite que diferentes implementaciones de GeneradorFactura generen la factura de manera diferente sin modificar la clase Factura.

- La interfaz `GeneradorFactura` permite la creación de nuevos generadores de factura de diferentes formatos(PDF y HTML) sin modificar las clases existentes cumpliendo asi el Principio de Segregación de Interfaces (ISP) y Principio de Abierto/Cerrado (OCP).

- Principio de Responsabilidad Única (SRP) en este caso cada clase tiene una única responsabilidad y motivo para cambiar. Por ejemplo, la clase ColeccionFacturas se encarga específicamente de gestionar una colección de facturas, mientras que la clase Factura se encarga de representar una factura y generarla en diferentes formatos.

Tuve problema a la hora de realizar las pruebas unitarias al querer imprimir las lista de la compra y poner como una void no podia realizar esas pruebas unitarias, luego como cada espacio contaba tenia que tener mucho cuidado a la hora de realizar la prueba ya que contantemente me daba errores.

## Ejercicio 3: Gestor de ficheros

El código proporcionado por el profesor incumple en dos principio SOLID:

**Principio de responsabilidad Única (SRP)** y **principio de Inversión de Dependencias (DIP)** ya que la clase `FileManager` está directamente acoplada a la implementación concreta de fs proporcionada por Node.js. Esto hace que la clase dependa de detalles de implementación concretos en lugar de abstracciones. Lo que dificulta la extension y el cambio de la implementación(escritura y lectura del archivo) .

Para mejorar el diseño y cumplir con los principios SOLID aplicamos los siguientes cambios a al codigo proporcionado:

Separar las responsabilidades por lo dividimos la clase `FileManager` en dos clases distintas: una para la lectura de archivos `LocalFileReader` y otra para la escritura de archivos `LocalFileWriter`. Esto asegura que cada clase tenga una única razón para cambiar.

Inversión de Dependencias implementando las interfaces de lectura(`FileRead`) y escritura(`FileWrite`), de modo que la clase `FileManager` dependa de estas interfaces en lugar de depender directamente de la biblioteca fs.

# Ejercicio 4: Impresoras y escáneres

El código proporcionado por el profesorado incumple el principio de responsabilidad única (SRP) en este caso las clases `Printer`, `Scanner` y `PrinterScanner` están relacionadas con la funcionalidad de impresión y escaneo. Sin embargo, la clase `PrinterScanner` tiene dos responsabilidades: imprimir y escanear.

Por lo que para solucionarlo creamos una interfaz `printable` y `escannable` para cada funcionalidad. Luego implementamos estas interfaces en clases separadas, cada una con su propia responsabilidad. Y por ultimo en `PrintScanner` imprementamos las 2 intefaces y llamamos al método de cada una.

## Ejercicio 5: Servicio de mensajería

El código proporcionado por el profesor incumple el principio de inversión de dependencia (DIP) del principio SOLID.

La clase `Notifier` depende directamente de las implementaciones concretas `EmailService` y `ShortMessageService`, lo que hace que la clase `Notifier` sea rígida y esté fuertemente acoplada a estas implementaciones específicas.

Por lo que para solucionarlo creamos una interfaz `NotificationService` que defina el método notify. Luego, tanto `EmailService` como `ShortMessageService` implementa esta `NotificationService`. De esta manera, `Notifier` dependerá de la abstracción `NotificationService` en lugar de las implementaciones concretas.

# Conclusión

Los ejercicios me han hecho enteder los principios SOLID asi mismo aplicarlo a consciencia para cumplir estos principios para los ejercicios 1 y 2. Lo que más dificulto fue hacer los tests ya algunos cubrimiento no se pudo hacer ejemplo añadir elementos del ejercicio 2 o lo que son demostrar la salida por consola al ser tan largo tenia idea de como hacer. Asimismo las salidas tenia que ser muy especifico los espacios coicidir y al ser texto largo resultaron dificultoso. 

Algunos test unitarios de algunas funciones no se a podido realizar. Aqui esta el cubrimiento de codigo de la práctica 6

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-angelaizquiierdo/badge.svg)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-angelaizquiierdo)


Y por ultimo intente realizar las Integración continua mediante GitHub Actions algo que no puede seguramente debido a que intente instalar una tematica para typedoc por cada vez que se subia y intentaba realizar los ejercicios salia un error de los distintos tipos de compilación.


[!fotos](/fotos/error_integracion_continua_con_Action_Githug.png)


