/* 1. EMPLEADOS */
	DELIMITER $$
	CREATE PROCEDURE sp_nombres_empleados()
	BEGIN
		SELECT empleados.Apellido, empleados.Nombre
		FROM empleados
		ORDER BY empleados.Apellido, empleados.Nombre;
	END $$

	CALL sp_nombres_empleados();

/* 2. EMPLEADOS POR CIUDAD */
	DELIMITER $$
	CREATE PROCEDURE sp_empleados_por_ciudad(IN ciudad varchar(50))
	BEGIN
		SELECT *
		FROM empleados 
		WHERE empleados.ciudad = ciudad;
	END $$

	CALL sp_empleados_por_ciudad("Seattle");
    
/* 3. CLIENTES POR PAIS */
	DROP PROCEDURE sp_clientes_por_pais;
	DELIMITER $$
	CREATE PROCEDURE sp_clientes_por_pais(IN pais varchar(50), OUT clientes INT)
	BEGIN
		SELECT count(*) INTO clientes
		FROM clientes
		WHERE clientes.Pais = pais;
	END $$

	SELECT * FROM clientes;

	CALL sp_clientes_por_pais("Portugal", @cantidad);
	SELECT @cantidad
/* 4. PRODUCTOS SIN STOCK */
	DROP PROCEDURE sp_productosSinStock;
	DELIMITER $$
	CREATE PROCEDURE sp_productosSinStock(IN numero INT)
	BEGIN
		SELECT
			productos.ProductoNombre,
			productos.UnidadesStock,
			categorias.CategoriaNombre
		FROM 
			productos LEFT JOIN 
			categorias ON productos.CategoriaID = categorias.CategoriaID
		WHERE productos.UnidadesStock < numero
		ORDER BY productos.UnidadesStock DESC;
	END $$

	CALL sp_productosSinStock(10);
	CALL sp_productosSinStock(1);
/* 5. VENTAS CON DESCUENTO **/

	DROP PROCEDURE sp_ventasConDescuento;
	DELIMITER $$
	CREATE PROCEDURE sp_ventasConDescuento(IN porcentaje DOUBLE)
	BEGIN
		select clientes.Contacto, productos.ProductoNombre, facturadetalle.Descuento
		from
		facturas INNER JOIN
		facturadetalle on facturas.FacturaID = facturadetalle.FacturaID INNER JOIN
		productos ON productos.ProductoID = facturadetalle.ProductoID INNER JOIN
		clientes on clientes.ClienteID = facturas.ClienteID
		WHERE facturadetalle.Descuento >= (porcentaje/100);
	END $$

	CALL sp_ventasConDescuento(10);

