using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(AnnouncementDetailRow))]
    public class AnnouncementDetailController : Controller
    {
        [Route("Default/AnnouncementDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/AnnouncementDetail/AnnouncementDetailIndex.cshtml");
        }
    }
}