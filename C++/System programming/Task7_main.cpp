#include <iostream>
#include <cmath>
#include "Task7_Func.h"
using namespace std;


int main()
{
	// Подключение русского языка
	setlocale(LC_ALL, "Russian");
	
	cout << "Введите b: ";
	cin >> WrB;

	cout << " Введите c: ";
	cin >> WrC;

	cout << " Введите a: ";
	cin >> WrA;

	operation();

	cout << " При b = " << WrB << " При c = " << WrC << " При a = " << WrA << " La (b, c, a) = " << WrLa << endl << endl;
}
