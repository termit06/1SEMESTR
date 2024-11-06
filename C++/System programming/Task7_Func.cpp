#include <cmath>
#include "Task7_Func.h"

double WrA;
double WrB;
double WrC;
double WrLa;

void operation()
{
	WrLa = sqrt(WrA * WrC) * (pow(WrB + (WrC), 2) - pow(WrA, 2)) / (WrB + WrC);
}