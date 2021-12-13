package com.company;

public class Ornitorringo extends  Mamifero implements PonerHuevos {

    public Ornitorringo(int cantidadCrias) {
        super(cantidadCrias);
    }

    @Override
    public void sonido() {
        System.out.println("sonido del ornitorringo");
    }

    @Override
    public void ponerHuevos() {
        System.out.println("poner huevos");
    }

    @Override
    public void romperHuevo() {
        System.out.println("romper el cascaron");
    }
}
