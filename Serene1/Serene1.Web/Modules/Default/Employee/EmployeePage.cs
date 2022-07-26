using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(EmployeeRow))]
    public class EmployeeController : Controller
    {
        [Route("Default/Employee")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Employee/EmployeeIndex.cshtml");
        }
    }
}