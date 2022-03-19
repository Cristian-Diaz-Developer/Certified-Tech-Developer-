package com.company;
import java.util.ArrayList;
import java.util.List;


public class Barco {

    private String nombre;
    private List<Cargable> cargables;

    public Barco(String nombre) {
        this.nombre = nombre;
        this.cargables = new ArrayList<Cargable>();
    }

        public void agregar(Cargable cargable) {
        this.cargables.add(cargable);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Cargable> getCargables() {
        return cargables;
    }

    public void setCargables(List<Cargable> cargables) {
        this.cargables = cargables;
    }
    public void generarInforme() {
        String crearInforme = "El barco: "
                + this.getNombre() + " transporta las siguientes cargas: \n";

        for (Cargable cargable : cargables) {
            crearInforme += "Nombre: " + cargable.getNombre() + " con un peso de: " + cargable.calcularPeso() + "y " + "refrigeración \n" ;
        }
        System.out.println(crearInforme);
    }
}
