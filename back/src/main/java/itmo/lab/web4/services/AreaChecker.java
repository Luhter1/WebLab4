package itmo.lab.web4.services;

import itmo.lab.web4.models.Point;
import org.springframework.stereotype.Service;

@Service
public class AreaChecker {

    private static boolean isPointInsideTriangle(
        double xA, double yA, 
        double xB, double yB, 
        double xC, double yC, 
        double xP, double yP
    ) {
        // Вычисляем барицентрические координаты
        double denominator = (yB - yC) * (xA - xC) + (xC - xB) * (yA - yC);

        double lambda1 = ((yB - yC) * (xP - xC) + (xC - xB) * (yP - yC)) / denominator;
        double lambda2 = ((yC - yA) * (xP - xC) + (xA - xC) * (yP - yC)) / denominator;
        double lambda3 = 1.0 - lambda1 - lambda2;

        // Точка внутри треугольника, если все барицентрические координаты в диапазоне [0, 1]
        return lambda1 >= 0 && lambda1 <= 1 &&
                lambda2 >= 0 && lambda2 <= 1 &&
                lambda3 >= 0 && lambda3 <= 1;
    }



    public boolean isInTheSpot(Point point){
        return (checkIsCircle(point) || checkIsTriangle(point) || checkIsRectangle(point));
    }




    private boolean checkIsTriangle(Point point) {

        return isPointInsideTriangle(
            0, 0, 
            0, -point.getR()/2, 
            point.getR()/2, 0, 
            point.getX(), point.getY()
        );   


    }


    private boolean checkIsCircle(Point point) {
        return (0 >= point.getX()) && (0 >= point.getY()) &&
            (point.getX()*point.getX() + point.getY()*point.getY() <= point.getR()*point.getR()/4);
    }


    private boolean checkIsRectangle(Point point) {
        return (0 <= point.getX() && point.getX() <= point.getR()) &&
            (0 <= point.getY() && point.getY() <= point.getR());
    }


}
