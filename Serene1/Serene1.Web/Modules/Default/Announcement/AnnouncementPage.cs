using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(AnnouncementRow))]
    public class AnnouncementController : Controller
    {
        [Route("Default/Announcement")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Announcement/AnnouncementIndex.cshtml");
        }

        [Route("Default/AnnouncementCustom")]
        public ActionResult CustomIndex()
        {
            return View("~/Modules/Default/AnnouncementCustom/AnnouncementCustomIndex.cshtml");
        }
    }
}