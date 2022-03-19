package com.company;

public class Hipopotamo extends Mamifero implements PuedeParir {


    public Hipopotamo(int cantidadCrias) {
        super(cantidadCrias);
    }

    @Override
    public void sonido() {
        System.out.println("sonido del hipopotamo");
    }

    @Override
    public void parir() {
        System.out.println("El hipopotamo esta pariendo");
    }
}
