[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

# Práctica 6

Autor: Ángela Zhouling Izquierdo Padrón

Email: alu0101480442@ull.edu.es

# Indice

# Introducción

# Realización de los ejercicios

Lo primero que debi hacer es instalar las distintas dependencias de trabajo que no resultaron dificultoso. 
Aplique una nueva dependencia para la personalizacion de la apareciencia de la documentacion generada en Typedoc instalo la dependecias .  

Y realizo el cubrimiento de código con el **coverall**.

## Ejercicio 1: La mudanza

Realizo las distintas clases e interfaces en diferentes ficheros a exepcion de las que son implementadas por la interfaz `Enser` ya que sigue la misma estructura que la inteface Enser que contiene nombre, dimesiones, peso, fragilidad, GetDescripción. En donde el tipado dimensiones es de la clase Tamayo 


## Ejercicio 2: Facturas en diferentes formatos

Este ejercicio hay que aplicar el principio SOLID `Open-closed principle`. Tuve problema a la hora de realizar las pruebas unitarias al querer implimir las lista de la compra y poner como una void no podia realizar esas pruebas unitarias, luego como cada espacio contaba tenia que tener mucho cuidado a la hora de realizar la prueba ya que contantemente me daba errores.

## Ejercicio 3: Gestor de ficheros

El código proporcionado viola el principio SOLID de Responsabilidad Única (SRP) en la que establece que una clase debe tener una sola razón para cambiar, lo que significa que debe tener una única responsabilidad. Por ello vamos a modificar el código proporcionado respetado este principio.

Violación del Principio de Responsabilidad Única (SRP):

La clase FileManager tiene dos responsabilidades principales: leer archivos y escribir archivos. Esto hace que la clase tenga más de una razón para cambiar, lo cual viola el principio de SRP.
La responsabilidad de lectura y escritura de archivos debería estar en clases separadas, cada una con una única responsabilidad.
Violación del Principio de Inversión de Dependencias (DIP):

La clase FileManager está directamente acoplada a la implementación concreta de fs proporcionada por Node.js. Esto hace que la clase dependa de detalles de implementación concretos en lugar de abstracciones.
La dependencia directa de la clase FileManager de fs dificulta la extensión y el cambio de la implementación de la lógica de lectura y escritura de archivos.