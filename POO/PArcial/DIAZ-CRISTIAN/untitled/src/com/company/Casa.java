package com.company;

public class Casa extends Proyecto{
    private Double superficieDeTerreno;
    private int cantidadBaños;
    private int cantidadDormitorios;

    public Casa(Double superficieDeTerreno, int cantidadBaños, int cantidadDormitorios) {
        this.superficieDeTerreno = superficieDeTerreno;
        this.cantidadBaños = cantidadBaños;
        this.cantidadDormitorios = cantidadDormitorios;
    }
}
