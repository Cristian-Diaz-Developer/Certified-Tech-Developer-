package com.company;

import java.util.Objects;

public class Socio {
    // crear propidadades
    private String numeroSocio;
    private String nombre;
    private Double cuotaMensual;
    private String actividad;
    //private Double descuento;
    // constructor


    public Socio(String numeroSocio, String nombre, Double cuotaMensual, String actividad) {
        this.numeroSocio = numeroSocio;
        this.nombre = nombre;
        this.cuotaMensual = cuotaMensual;
        this.actividad = actividad;
    }

    public Double costoMensualCuota(){
        return cuotaMensual ;
    }

    // sobre escribo el metodo toString que pertenece a la clase Object
    // este metodo se usa para mostrar las propiedades que sean necesarias-
    @Override
    public String toString() {
        return "Socio{" +
                "numeroSocio='" + numeroSocio + '\'' +
                ", nombre='" + nombre + '\'' +
                ", cuotaMensual=" + cuotaMensual +
                ", actividad='" + actividad + '\'' +
                '}';
    }

    // Metodo de la clase Object, que se sobreescribe para comparar dos objetos de tipo Socio.
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        // Casting: Algo de tipo Object a Socio
        Socio socio = (Socio) o;

        return Objects.equals(numeroSocio, socio.numeroSocio) && Objects.equals(nombre, socio.nombre) && Objects.equals(actividad, socio.actividad);
    }

    // metodo que generar un codigo unico para un objeto. Lo vamos a ver mas adelante en detalle.
    @Override
    public int hashCode() {
        return Objects.hash(numeroSocio, nombre, actividad);
    }
}
