package com.company;

public class CargaFactory {

    private static CargaFactory instance;
    public static final String CARGA_SIMPLE = "Carga Simple";
    public static final String CONTENEDOR = "Contenedor";


    private CargaFactory(){}

    public static CargaFactory getInstance() {
        if (instance == null) instance = new CargaFactory();
        return instance;
    }

    public Cargable crearCarga(String tipo) {
        switch (tipo) {
            case CARGA_SIMPLE:
                return new Simple();
            case CONTENEDOR:
                return new Contenedor();
            default:
                return null;
        }
    }
}
