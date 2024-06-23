using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {

            double y;

            for (double x = -1; x <= 1; x += 0.1)
            {
                y = Math.Pow(2, -x) * Math.Exp(x);
                Console.WriteLine(y);
            }

            Console.WriteLine("---------------------------------");

            double a = -1;

            while (a <= 0.1)
            {
                y = Math.Pow(2, -a) * Math.Exp(a);
                a += 0.1;
                Console.WriteLine(y);
            }

            Console.WriteLine("---------------------------------");

            a = -1;

            do
            {
                y = Math.Pow(2, -a) * Math.Exp(a);
                a += 0.1;
                Console.WriteLine(y);
            } while (a <= 1);
            Console.ReadLine();
        }
    }
}