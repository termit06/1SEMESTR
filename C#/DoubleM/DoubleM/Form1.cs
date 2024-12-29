using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DoubleM
{
    public partial class Form1 : Form
    {

        Test Op = new Test();

        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Op.N = Convert.ToInt32(textBox1.Text);
            Op.M = Convert.ToInt32(textBox2.Text);

            Op.A = Op.InpMatrix(listBox1);

            
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            Op.ChildrenPlayReplays();
            Op.OutMatrix(Op.X, listBox2);
        }
    }
}
