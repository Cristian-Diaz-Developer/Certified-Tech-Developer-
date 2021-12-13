public class RobotPesado extends SistemaArma implements Atacar, Defender {

    public RobotPesado(Integer energia, String nombreSistema) {
        super(energia, nombreSistema);
    }

    @Override
    public String mostrarse() {
        return "SISTEMA: "+getNombreSistema()+" Energia "+getEnergia();
    }
}
