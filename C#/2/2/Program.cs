using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите x = ");
            double x = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите c = ");
            double c = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите y = ");
            double y = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введите z = ");
            double z = Convert.ToDouble(Console.ReadLine());

            double h;
            if (y * z > 0 && x > 0)
            {
                double minEL = y;
                if (minEL > z)
                {
                    minEL = z;
                }
                double maxEL = c;

                if (maxEL < Math.Sqrt(x))
                {
                    maxEL = Math.Sqrt(x);
                }
                if(maxEL < minEL)
                {
                    maxEL = minEL;
                }
                h = maxEL;
            }
            else if (y * x < 0 && x > 0)
            {
                double minEL = Math.Pow(y, 2);
            if (minEL > x) {
                minEL = x;
                           }
 
            h = minEL;
            }
            else
            {
                h = 1;
            }
            Console.WriteLine(h);
        } 
    }  
}