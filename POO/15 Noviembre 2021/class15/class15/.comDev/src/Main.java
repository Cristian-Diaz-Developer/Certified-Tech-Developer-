public class Main {

    public static void  main (String [] args){

        RobotPesado robotPesado =new RobotPesado(345,"T-3000 (Terminaitor)");
        Tanke tanke=new Tanke(400,"HITLER-TANK G3994");
        System.out.println(robotPesado.mostrarse());
        System.out.println(tanke.mostrarse());
    }
}
