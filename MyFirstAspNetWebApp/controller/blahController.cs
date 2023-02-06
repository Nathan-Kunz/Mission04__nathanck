using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyFirstAspNetWebApp.models;

namespace MyFirstAspNetWebApp.controlers
{
    public class blahController : Controller
    {
        public IActionResult Index()
        {
            return View();
            
        }
        [HttpGet]
        public IActionResult form()
        {
            return View();
        }

        [HttpPost]
        public IActionResult form(FormModel model)
        {
            return View();
        }
    }
}
