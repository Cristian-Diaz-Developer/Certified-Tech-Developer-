package com.company;

public class Depatamento extends Proyecto implements Comparable{
    private int cantidadPisos;
    private int cantidasdDepartamentosPorPiso;

    public Depatamento(String nombre, int numero, String ciudad, String estatus, int cantidadDepartamentos, int cantidasdDepartamentosPorPiso) {
        super(nombre, numero, ciudad, estatus);
        this.cantidadDepartamentos = cantidadDepartamentos;
        this.cantidasdDepartamentosPorPiso = cantidasdDepartamentosPorPiso;
    }

    public int getCantidadPisos() {
        return cantidadPisos;
    }

    public int getCantidasdDepartamentosPorPiso() {
        return cantidasdDepartamentosPorPiso;
    }

    @Override
    public int compareTo(Departamento o) {

    int totalPisosDepartamento = getCantidadPisos()*getCantidasdDepartamentosPorPiso();
    int totalDepartamentosAComparar = o.getCantidadPisos() * o.getCantidasdDepartamentosPorPiso();

        return totalPisosDepartamento - totalDepartamentosAComparar;
    }

}

