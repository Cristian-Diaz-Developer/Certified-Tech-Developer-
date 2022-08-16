## crear una variable con datos
set @variableLocal = "vssssss";



DROP PROCEDURE SP_testeo;
DELIMITER $$
CREATE PROCEDURE SP_testeo(IN IDCIUDAD INT)
BEGIN
 SELECT * FROM city where city_id=IDCIUDAD or IDCIUDAD IS NULL;
END $$
CALL SP_testeo(2);
CALL SP_testeo();
CALL SP_testeo(null);


#INGRESAR UN TEXTO Y DEVOLVERLO A UNA VARIABLE
DROP PROCEDURE SP_mostrar_actores;
DELIMITER $$
CREATE PROCEDURE SP_mostrar_actores(IN nuevoValor varchar(100), OUT nombres varchar(100))
BEGIN 
SET nombres = concat("el nuevo nombre es ",nuevoValor); 
END $$

call SP_mostrar_actores("33333333",@nombres);
SELECT @nombres;

DROP PROCEDURE SP_contar_coincidencias;
#OTRO EJEMPLO
DELIMITER $$
CREATE PROCEDURE SP_contar_coincidencias(OUT cantidad INT,in condicion VARCHAR(100))
BEGIN
SELECT COUNT(*) into cantidad FROM actor where first_name like concat("%",condicion,"%");
END $$

call SP_contar_coincidencias(@cantidadNuevos,"s");
select @cantidadNuevos;

##insert
DROP PROCEDURE SP_insertar_actores;
DELIMITER $$
CREATE PROCEDURE SP_insertar_actores(IN nombre VARCHAR(50), IN apellido VARCHAR(50),OUT MAXID INT)
BEGIN 
INSERT INTO actor (first_name,last_name,last_update) values(nombre,apellido,CURRENT_TIMESTAMP);
set MAXID = (SELECT MAX(actor_id) from actor);
END $$
#modificar SP para ver la tabla

CALL SP_insertar_actores("rodrigo","222222",@salida);
select @salida;

##update
DROP PROCEDURE SP_actualizar_nombre;
DELIMITER $$
CREATE PROCEDURE SP_actualizar_nombre(in apellido varchar(100), in nuevonombre varchar(100))
BEGIN 
update actor set first_name = nuevonombre where last_name = apellido;
END $$

call SP_actualizar_nombre("vergara","rodrigo");
SELECT * from actor order by actor_id desc;


##select
DROP PROCEDURE SP_toda;
DELIMITER $$
CREATE PROCEDURE SP_toda()
BEGIN
	SELECT count(*) as totales FROM actor;
END $$
call SP_toda();

## select con join
DROP PROCEDURE SP_ciudadesxpais;
DELIMITER $$
CREATE PROCEDURE SP_ciudadesxpais(in pais varchar(100))
BEGIN
	SELECT c.country, cc.city FROM country c inner join city cc 
    on cc.country_id=c.country_id where c.country=pais;
END $$
call SP_ciudadesxpais("chile");


#select con un if
DROP PROCEDURE SP_conif;
DELIMITER $$
CREATE PROCEDURE SP_conif(in valor int)
BEGIN
IF 
valor=1 THEN SELECT * FROM rental;
ELSEIF 
valor = 2 THEN  SELECT * from category;
ELSE 
SELECT "imposible acceder" AS MENSAJE;
END IF;
END $$

CALL SP_conif(255);