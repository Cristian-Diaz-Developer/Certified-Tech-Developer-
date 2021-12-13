package com.company;

public abstract class Aves extends Oviparo implements PonerHuevos {

    public Aves(int cantidadCrias) {
        super(cantidadCrias);
    }

    public void volar(){
        System.out.println("volar");
    }

}
