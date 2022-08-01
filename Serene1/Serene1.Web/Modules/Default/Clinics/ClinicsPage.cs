using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(ClinicsRow))]
    public class ClinicsController : Controller
    {
        [Route("Default/Clinics")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Clinics/ClinicsIndex.cshtml");
        }
    }
}