using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(CaseServiceDataRow))]
    public class CaseServiceDataController : Controller
    {
        [Route("Default/CaseServiceData")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/CaseServiceData/CaseServiceDataIndex.cshtml");
        }
        [Route("Default/CaseServiceDataCustom")]
        public ActionResult CustomIndex()
        {
            return View("~/Modules/Default/CaseServiceDataCustom/CaseServiceDataCustomIndex.cshtml");
        }
    }
}