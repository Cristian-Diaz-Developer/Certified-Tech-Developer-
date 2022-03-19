package com.company;

public abstract  class Mamifero extends  Animal{

    private int cantidadCrias;

    public Mamifero(int cantidadCrias) {
        this.cantidadCrias = cantidadCrias;
    }

    public int getCantidadCrias() {
        return cantidadCrias;
    }

    public void setCantidadCrias(int cantidadCrias) {
        this.cantidadCrias = cantidadCrias;
    }
    public void amamantar(){
        System.out.println("amamantando");
    }
}
