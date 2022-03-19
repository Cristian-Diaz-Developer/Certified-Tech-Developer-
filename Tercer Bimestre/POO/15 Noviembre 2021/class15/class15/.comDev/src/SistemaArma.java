abstract public class SistemaArma {
    private  Integer energia;
    private  String nombreSistema;


    public SistemaArma(Integer energia, String nombreSistema) {
        this.energia = energia;
        this.nombreSistema = nombreSistema;
    }

    public Integer getEnergia() {
        return energia;
    }

    public void setEnergia(Integer energia) {
        this.energia = energia;
    }

    public String getNombreSistema() {
        return nombreSistema;
    }

    public void setNombreSistema(String nombreSistema) {
        this.nombreSistema = nombreSistema;
    }

    abstract public String mostrarse();


}
