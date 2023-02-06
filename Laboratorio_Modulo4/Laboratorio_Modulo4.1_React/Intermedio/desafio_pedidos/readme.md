# Aplicación de gestión de pedidos React
## Enunciado
La idea es manejar un modelo con una estructura con algo de complejidad que al presentarlo en el
navegador se tenga que decidir y plantear las mejores alternativas para dividir en componentes y la
comunicación entre los mismos.
El modelo planteado es el de un Pedido (usuarios avanzados pueden también gestionar la lista de
pedidos).
Las reglas son sencillas:
- El pedido tiene una cabecera con información general sobre el pedido como el número, la fecha y
el cliente
- Cada pedido tiene una serie de líneas de pedidos con el articulo que se va a solicitar y el importe
del mismo
- Al modificar el importe de alguna línea de pedido el importe total del pedido se actualiza
- Cada línea de pedido podrá ser validada o invalidada (volver al estado pendiente)
- El pedido solo podrá ser enviado si todas las líneas del pedido están validadas
- El estado del pedido indica el porcentaje de líneas que están validadas, por ejemplo un pedido que
tiene la mitad de sus líneas validadas estará al 50%
## Resumiendo:
- Importe total es un campo calculado.
- Estado depende de si todas las líneas han sido validadas.
- En la tabla tengo un checkbox de selección multiple para validar / invalidar las líneas
seleccionadas.
- El campo importe es de edición.
- El botón de enviar solo se habilita si el estado es 100% (todas las líneas validadas).











