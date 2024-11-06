#include <cmath>

double operation(double Ra, double Rb, double Rc) 
{
	return sqrt(Rb * Rc) * (pow(Rb + (Rc), 2) - pow(Ra, 2)) / (Rb + Rc);
}
