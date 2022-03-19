public class RobotLiviano extends  SistemaArma implements Atacar,Defender,Volar{

    public RobotLiviano(Integer energia, String nombreSistema) {
        super(energia, nombreSistema);
    }


    @Override
    public String mostrarse() {
        return null;
    }
}
