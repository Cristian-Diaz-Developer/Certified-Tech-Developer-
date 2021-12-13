package com.company;

public class Contruccion {
    private String direccion;
    private String fechaInicio;
    private String fechaFinalizacionPrevista;
    private String getFechaFinalizacionReal;
    Proyecto

    public Contruccion(String direccion, String fechaInicio, String fechaFinalizacionPrevista, String getFechaFinalizacionReal) {
        this.direccion = direccion;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacionPrevista = fechaFinalizacionPrevista;
        this.getFechaFinalizacionReal = getFechaFinalizacionReal;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFechaFinalizacionPrevista() {
        return fechaFinalizacionPrevista;
    }

    public void setFechaFinalizacionPrevista(String fechaFinalizacionPrevista) {
        this.fechaFinalizacionPrevista = fechaFinalizacionPrevista;
    }

    public String getGetFechaFinalizacionReal() {
        return getFechaFinalizacionReal;
    }

    public void setGetFechaFinalizacionReal(String getFechaFinalizacionReal) {
        this.getFechaFinalizacionReal = getFechaFinalizacionReal;
    }
}
