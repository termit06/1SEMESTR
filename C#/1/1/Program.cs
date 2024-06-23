using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProgrammPosl
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите x = ");
            double x = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите y = ");
            double y = Convert.ToDouble(Console.ReadLine());

            double a = (14 * Math.Sin(x) + Math.Pow(y,2)) / (0.92 * Math.Pow(Math.Cos(x),3));

            Console.WriteLine(a);
        }
    }
}