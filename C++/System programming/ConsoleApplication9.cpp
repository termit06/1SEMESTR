#include <iostream>  
#include <cmath> 
using namespace std; // пространство имён std 

// Объявление функции (прототип функции) 
// P.S. в прототипе не указывается переменные, 
// а указывается только тип переменной 


double operation(double, double, double);
int main()
{
	// Подключение русского языка
	setlocale(LC_ALL, "Russian");

	double WrB, WrC, WrA, WrLa;
	double La;

	double Rb = 5;
	double Rc = 2;
	double Ra = 7;

	La = operation(Rc, Ra, Rb);
	cout << "Task 5" << endl << endl;

	cout << " При b = " << Rb << " При c = " << Rc << " При a = " << Ra << " La(b, c, a) = " << La << endl << endl;

	// запрос данных у клиента 
	cout << "Введите b: ";
	cin >> WrB;

	cout << "Введите c: ";
	cin >> WrC;

	cout << "Введите a: ";
	cin >> WrA;

	WrLa = operation(WrA, WrB, WrC);

	cout << " При b = " << WrB << " При c = " << WrC << " При a = " << WrA << " La (b, c, a) = " << WrLa << endl << endl;
}
