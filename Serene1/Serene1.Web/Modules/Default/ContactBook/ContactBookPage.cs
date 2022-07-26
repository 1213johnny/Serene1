using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(ContactBookRow))]
    public class ContactBookController : Controller
    {
        [Route("Default/ContactBook")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/ContactBook/ContactBookIndex.cshtml");
        }
        [Route("Default/ContactBookCustom")]
        public ActionResult CustomIndex()
        {
            return View("~/Modules/Default/ContactBookCustom/ContactBookCustomIndex.cshtml");
        }
    }
}