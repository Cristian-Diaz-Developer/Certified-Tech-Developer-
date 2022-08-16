-- --------------------------------------------------------------------------------
-- CLASE 17
-- --------------------------------------------------------------------------------
-- Grupo 2: Alejandro Alonso, Alejandro Zapata, Geovani Carvajal, Brenda Moreno, Paula Osone, Cristian Diaz, Giovanny Cárdenas

-- *************************************
-- PARTE 1
-- *************************************
/*
1. Crear una vista con los siguientes datos de los clientes: Id, contacto, y el Fax. En
caso que no tenga Fax, colocar el teléfono y en este caso aclararlo. Por ejemplo
'TEL: (01) 123-4567'
*/
DROP VIEW IF EXISTS emarket.punto1;
CREATE VIEW emarket.punto1 AS 
SELECT
clienteId,
Contacto,
CASE
   WHEN Fax IS NULL OR Fax="" OR Fax=" " THEN concat("TEL: ",Telefono)
   ELSE concat("FAX: ",Fax)
END AS "Teléfono/Fax"
FROM clientes;

select * from punto1;

/*
2. Se necesita listar los números de teléfono de los clientes que no tengan fax.
Hacerlo de dos formas distintas:
a. Consultando la tabla de clientes
b. Consultando la vista de clientes
*/

-- FORMA A
SELECT Telefono
FROM clientes
WHERE Fax IS NULL OR Fax="" OR Fax=" ";

-- FORMA B

SELECT `Teléfono/Fax`
FROM punto1
WHERE `Teléfono/Fax` LIKE "TEL%";

/*
1. Crear una vista con los siguientes datos de los proveedores: Id, contacto,
compañia y la dirección. Para la dirección tomar la dirección, ciudad, código
postal y país.
*/
DROP VIEW IF EXISTS vProveedores;
CREATE VIEW vProveedores AS
SELECT ProveedorID, Contacto, Compania,
	   concat(Direccion, " - ", Ciudad, " - ", CodigoPostal," - ", Pais) AS Direccion
FROM proveedores;

select * from vproveedores;

/*
2. Listar los proveedores que vivan la calle Americanas en Brazil. Hacerlo de dos
formas distintas:
a. Consultando la tabla de proveedores
b. Consultando la vista de proveedores
*/

-- FORMA A 

SELECT Compania, Direccion
FROM proveedores
WHERE Pais="Brazil" AND Direccion LIKE "%americanas%";

-- FORMA B 

SELECT Compania, Direccion
FROM vProveedores
WHERE Direccion LIKE "%americanas%Brazil%";

-- *************************************
-- PARTE 2
-- *************************************
/*
1. Crear una vista de productos que se usará para control de stock. Incluir el id y nombre del producto, el precio unitario redondeado sin decimales, las unidades en stock y las unidades pedidas. Incluir además una nueva columna PRIORIDAD con los siguientes valores:
BAJA si unidades pedidas es cero
MEDIA si unidades pedidas es menor que unidades en stock
URGENTE si unidades pedidas no duplica al número de unidades en stock
SUPERURGENTE en caso contrario
*/
DROP VIEW IF EXISTS vProductos;
CREATE VIEW vProductos AS
SELECT 
   ProductoID,
   ProductoNombre,
   round(PrecioUnitario, 0) AS PrecioUnitario,
   UnidadesStock,
   UnidadesPedidas,
   CASE
      WHEN UnidadesPedidas=0 THEN "BAJA"
      WHEN UnidadesPedidas<UnidadesStock  THEN "MEDIA"
      WHEN UnidadesPedidas<(UnidadesStock*2)  THEN "URGENTE"
      ELSE "SUPERURGENTE"
   END AS Prioridad
FROM productos;
SELECT * FROM vProductos;

/*
Se necesita un reporte de productos para identificar problemas de stock. Para cada prioridad indicar cuántos productos hay y su precio promedio. No incluir las prioridades para las que haya menos de 5 productos.
*/
-- 
SELECT
   Prioridad,
   count(ProductoID),
   avg(PrecioUnitario) 
FROM vProductos
GROUP BY Prioridad
HAVING count(ProductoID) >= 5;