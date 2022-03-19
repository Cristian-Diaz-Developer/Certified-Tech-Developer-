package com.company;

public class Elefante extends  Mamifero implements PuedeParir {

    public Elefante(int cantidadCrias) {
        super(cantidadCrias);
    }

    @Override
    public void sonido() {
        System.out.println("sonido del elefante");
    }

    @Override
    public void parir() {
        System.out.println("parir");
    }
}
