using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(SpecialCallingLogicsRow))]
    public class SpecialCallingLogicsController : Controller
    {
        [Route("Default/SpecialCallingLogics")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/SpecialCallingLogics/SpecialCallingLogicsIndex.cshtml");
        }
    }
}