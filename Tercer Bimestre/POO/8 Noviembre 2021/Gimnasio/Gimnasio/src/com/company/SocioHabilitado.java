package com.company;

import java.util.Objects;

public class SocioHabilitado extends Socio {

    private Double costoPileta;
    private Boolean habilitado;

    public SocioHabilitado(String numeroSocio, String nombre,
                           Double cuotaMensual, String actividad,
                           Double costoPileta, Boolean habilitado) {
        super(numeroSocio, nombre, cuotaMensual, actividad);
        this.costoPileta = costoPileta;
        this.habilitado = habilitado;
    }

    @Override
    public Double costoMensualCuota() {
        if (habilitado){
            return super.costoMensualCuota() + this.costoPileta;
        }else{
            return super.costoMensualCuota();
        }

    }
   // puedo sobreescribir los metodos toString  equals y hashCode



}
