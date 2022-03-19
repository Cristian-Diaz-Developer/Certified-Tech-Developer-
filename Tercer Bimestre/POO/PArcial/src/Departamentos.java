public class Departamentos extends Proyecto implements Comparable{
    private int cantidadDePisos;
    private int CantidadDepartamentosPorPiso;


    public Departamentos(String nombre, int numero, String ciudad, String estatus, int cantidadDePisos, int cantidadDepartamentosPorPiso) {
        super(nombre, numero, ciudad, estatus);
        this.cantidadDePisos = cantidadDePisos;
        CantidadDepartamentosPorPiso = cantidadDepartamentosPorPiso;
    }

    @Override
    public int compareTo(Object o) {
        return 0;
    }
}
