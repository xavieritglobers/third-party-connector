# third-party-connector

Servicio para solicitudes de terceros desde VTEX. 

El servicio permite conectarse con los siguientes servicios de terceros: 

## Envío de mensajería de texto, a través de SMS IDENTIDAD TECHNOLOGIES
## POST /sendNotification

El servicio recibe como parámetros: 
orderid:string,prevStatus:string,nextStatus:string,phone:string

Y arma un mensaje de texto, según las especificaciones recibidas.

Retorna la respuesta que provee IDENTIDAD TECHNOLOGIES sobre el envío. 

## Envío de solicitud a Mercado Pago, para devolución parcial de dinero
## POST /refundMP

El servicio recibe como parámetros: id:string,amount:number, token

A partir de estos parámetros y el token de Mercado Pago, realiza la solicitud. 

Retorna la respuesta que provee la API de MERCADO PAGO

