using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(RepairFormRecordsRow))]
    public class RepairFormRecordsController : Controller
    {
        [Route("Default/RepairFormRecords")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/RepairFormRecords/RepairFormRecordsIndex.cshtml");
        }

        [Route("Default/RepairFormRecordsCustom")]
        public ActionResult CustomIndex()
        {
            return View("~/Modules/Default/RepairFormRecordsCustom/RepairFormRecordsCustomIndex.cshtml");
        }
    }
}