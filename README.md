[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

# Práctica 6

Autor: Ángela Zhouling Izquierdo Padrón

Email: alu0101480442@ull.edu.es

# Indice

# Introducción

# Realización de los ejercicios

Lo primero que debi hacer es instalar las distintas dependencias de trabajo y instale el **coveralls** y **Instanbul** para el cubrimiento del codigo en mis test.

## Ejercicio 1: La mudanza

Para realizar este ejercicio lo primero que hago es crear una interfaz respetando Los principios SOLID:

- El principio de segregación de la interfaz(ISP) especificando el objeto especifico en este caso creamos la interfaz `Enser` con nombre, dimesiones, peso, fragilidad, GetDescripción. En donde el tipado dimensiones es de la clase `Tamayo` que contiene ancho, alto, fondo y un método para imprimir por pantalla la descripcion del tamaño.

- El principio de sustitución de Liskov(LSP) se implementa `Enser` con las clases derivadas `Utencilios`, `Prenda` , `Vajilla` y `DispositivoElectronico`, en donde casa clase derivada tiene los getter de los atributos publicos y un método de `GetDescripcion` para cuando los componentes dependiendo

## Ejercicio 2: Facturas en diferentes formatos

Este ejercicio hay que aplicar el principio SOLID `Open-closed principle`. Tuve problema a la hora de realizar las pruebas unitarias al querer implimir las lista de la compra y poner como una void no podia realizar esas pruebas unitarias, luego como cada espacio contaba tenia que tener mucho cuidado a la hora de realizar la prueba ya que contantemente me daba errores.

## Ejercicio 3: Gestor de ficheros

El código proporcionado por el profesor incumple en dos principio SOLID:

- Responsabilidad Única (SRP) en la una clase debe tener una única responsabilidad.
- Principio de Inversión de Dependencias (DIP) ya que la clase `FileManager` está directamente acoplada a la implementación concreta de fs proporcionada por Node.js. Esto hace que la clase dependa de detalles de implementación concretos en lugar de abstracciones. Lo que dificulta la extension y el cambio de la implementación(escritura y lectura del archivo) .

Por lo que para solucionar el incluplimiento del principio SOLID cree 2 nuevas clases:

- Clase `file`: que lee
- Clase `filewrite`:

# Ejercicio 4: Impresoras y escáneres

El código proporcionado por el profesorado incumple el principio de segregación de la interfaz (ISP).
Por lo que para corregirlo cree

# Ejercicio 5: Servicio de mensajería

El código proporcionado incumple el principio de inversión de dependencia (Dependency Inversion Principle - DIP) del principio SOLID.

El principio de inversión de dependencia establece dos aspectos fundamentales:

Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.
Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.
