#include <iostream> // библиотека cin cout
#include <cmath> // библиотека математических операций
#include "Source.c"
using namespace std; // пространство имён std
// Объявление функции (прототип функции)
// P.S. в прототипе не указывается переменные,
// а указывается только тип переменной

double operation(double);

int main()

{    // Подключение русского языка
	setlocale(LC_ALL, "Russian");

	// задача переменных типа int (констант)
	int n;

	n = 256;

	// выходные данные (ответ функции типа double)
	double m, wn, mn;

	m = operation(n);

	// Вывод результата в виде констант
	cout << "При n = " << n << " m = " << m << endl << endl;

	// запрос данных у клиента
	cout << "Введите n: ";
	cin >> wn;

	mn = (sqrt(wn + 1) + sqrt(wn - 1)) / (2 * sqrt(wn));

	// Вывод результата
	cout << "При n = " << wn << "m = " << mn << endl << endl;
}