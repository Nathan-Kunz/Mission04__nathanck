using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstAspNetWebApp.models
{
    public class FormModel
    {
        [Range(0, 100)]
        public double assignments { get; set; }
        [Range(0, 100)]
        public double groupPro { get; set; }
        [Range(0, 100)]
        public double quiz { get; set; }
        [Range(0, 100)]
        public double midterm  { get; set; }
        [Range(0, 100)]
        public double final { get; set; }
        [Range(0, 100)]
        public double intex { get; set; }



    }
}
