using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(DepartmentsRow))]
    public class DepartmentsController : Controller
    {
        [Route("Default/Departments")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Departments/DepartmentsIndex.cshtml");
        }
    }
}