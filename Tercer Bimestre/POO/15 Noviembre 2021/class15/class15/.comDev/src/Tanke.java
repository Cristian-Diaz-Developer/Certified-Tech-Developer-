public class Tanke extends SistemaArma implements Atacar,Defender {

    public Tanke(Integer energia, String nombreSistema) {
        super(energia, nombreSistema);
    }

    @Override
    public String mostrarse() {
        return "SISTEMA: "+getNombreSistema()+" Energia: "+getEnergia();
    }

}
