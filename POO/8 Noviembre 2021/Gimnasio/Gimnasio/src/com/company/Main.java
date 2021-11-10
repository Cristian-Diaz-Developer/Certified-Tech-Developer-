package com.company;

public class Main {

    public static void main(String[] args) {

        SocioHabilitado juan = new SocioHabilitado("123","juan",2589.0,"natacion",2000.0,true);
        Socio ricardo = new Socio("123","juan", 2589.0,"natacion" );
        Socio mario = new Socio("123","juan",2589.0, "natacion");
        System.out.println(juan.toString());
        System.out.println("son iguales:"+ juan.equals(ricardo));
        System.out.println("son iguales:"+ mario.equals(ricardo));


        // casting ejemplo basico: convertir numero double a int
        int numeroInt=10;
        double numeroDouble=2.5;
        numeroInt=(int)numeroDouble;
        System.out.println(numeroInt);

    }
}
