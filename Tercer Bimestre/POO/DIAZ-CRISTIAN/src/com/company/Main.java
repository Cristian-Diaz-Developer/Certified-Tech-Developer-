package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Simple tvLed = (Simple) CargaFactory.getInstance().crearCarga(CargaFactory.CARGA_SIMPLE);
        tvLed.setNombre("TV LED");
        tvLed.setPeso(30);

        Simple medicamento = (Simple) CargaFactory.getInstance().crearCarga(CargaFactory.CARGA_SIMPLE);
        medicamento.setNombre("Medicamento");
        medicamento.setRefrigerado(true);
        medicamento.setPeso(2);


        Contenedor contenedor = (Contenedor) CargaFactory.getInstance().crearCarga(CargaFactory.CONTENEDOR);
        contenedor.setNombre("Evergreen");
        contenedor.setPeso(100);
        contenedor.agregar(tvLed);
        contenedor.agregar(medicamento);

        Barco barco = new Barco("POO");
        barco.agregar(tvLed);
        barco.agregar(medicamento);
        barco.agregar(contenedor);
        barco.generarInforme();

    }
}
