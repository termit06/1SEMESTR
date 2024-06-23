using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Method
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите a:");
            double A = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите В:");
            double B = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите c:");
            double C = Convert.ToDouble(Console.ReadLine());

            double lA = bis(A, B, C);
            Console.WriteLine(lA);
        }
        static double bis(double A, double B, double C)
        {
            double lA = (Math.Sqrt(B * C * Math.Pow(B + C, 2) - Math.Pow(A, 2))) / (B + C);
            return lA;
        }
    }  
}  