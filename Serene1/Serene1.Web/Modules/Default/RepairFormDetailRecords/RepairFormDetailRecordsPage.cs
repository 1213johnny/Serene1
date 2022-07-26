using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(RepairFormDetailRecordsRow))]
    public class RepairFormDetailRecordsController : Controller
    {
        [Route("Default/RepairFormDetailRecords")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/RepairFormDetailRecords/RepairFormDetailRecordsIndex.cshtml");
        }
    }
}