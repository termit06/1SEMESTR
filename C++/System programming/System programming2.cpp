#include <iostream>
#include <cmath> 
using namespace std; 

double operation(double n)
{
    return (sqrt(n + 1) + sqrt(n - 1)) /( 2 * sqrt(n));;
}

int main()
{   
	
	setlocale(LC_ALL, "Russian");

	
	int n;
// запрос данных у клиента
	cout << "Введите n\n";
	cin >> n;
	cout << n << endl;

	
	double m, wn, mn;

	m = operation(n);

	cout << "System programming2" << endl << endl;

	
	cout << "При n = " << n << "m = " << m << endl << endl;

	
	cout << "Введите n: ";
	cin >> wn;

	mn = operation(wn);

	cout << "При n = " << wn << "m = " << mn << endl << endl;
}