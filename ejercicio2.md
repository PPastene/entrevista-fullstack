# Ejercicio 2 - Diseñando un sistema IoT
El siguiente diagrama representa el conjunto de sistemas que funcionaría como solución al problema planteado por Capta Hydro. Dicho conjunto se compone de los siguientes servicios
![image](https://raw.githubusercontent.com/PPastene/entrevista-fullstack/master/images/diagrama.png)
- CFT y CFC: Son la Estación de telemetría y el Automatizador de Compuerta.
- Servidor API REST Telemetría: Servidor que recibe los datos capturados desde la Estación de telemetría y el estado de la compuerta en el Automatizador de Compuerta, envía datos al servidor de API REST Historicos para el guardado de datos y publica en un websocket los datos y alertas para ser consumidos por la Aplicación Web, por el mismo websocket recibe instrucciones desde la Aplicación Web para controlar el Automatizador de Compuerta.
- Servidor API REST Historicos: Servidor que recibe y envía los datos de la API REST Telemetria a la base de datos, como también generar la información obtenida de la base de datos para ser enviada a la Aplicación Movil.
- Base de datos: Servidor de persistencia que almacena y genera los datos solicitados por el Servidor API REST Historicos
- Aplicación Web: Servidor con una aplicación frontend que consulta y obtiene los datos del Servidor API REST Historicos y se comunica via websocket con el Servidor API REST Telemetría para obtener los datos en tiempo real y controlar el estado de la compuerta.
## Secuencias
Son 5 las secuencias las utilizadas en este sistema:
- Envío y recepción de datos desde el dispositivo a la aplicación web.
- Envío y recepción de alertas desde el servidor de api rest telemetría a la aplicación web.
- Envío de datos desde el dispositivo a la base de datos.
- Consulta y recepción de datos desde la aplicación web a la base de datos.
- Envío y recepción de instrucciones de control desde la aplicación web al dispositivo.

El servidor de API REST Telemetría hace uso de dos websocket
- Un websocket bidireccional que es usado por la Aplicación Web donde se envían los datos obtenidos del dispositivo y también recibe instrucciones desde la Aplicación Web.
- Un websocket unidireccional (puede ser EventSource o una solución cliente-servidor) que permite al servidor API REST Historicos recibir los datos para ser almacenados en la base de datos

El servidor de API REST Historicos también hace uso de una solución cliente-servidor para entregar los datos historicos hacia la Aplicación Web
## Bonus: Como solucionar cuando se usa el el equipo instalado en una zona sin acceso a red celular
En caso de querer obtener datos y controlar el dispositivo en lugares donde exista intermitencia o nula conectividad de red celular se da como opción en preferir el guardado de datos en local (sea en el mismo dispositivo o usando uno que cumpla esa función, por ejemmplo una Raspberry Pi) y enviarlos cuando exista conectividad o que el usuario los pueda obtenber de forma manual. Para dar la opción de conectividad que permita el envió de datos y control sobre el dispositivo se puede usar radiofrecuencia de alta distancia como Xbee o usar una red de cableado hasta un punto donde exista conectividad sea de red celular o internet
