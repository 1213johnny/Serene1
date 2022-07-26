using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Default.Pages
{

    [PageAuthorize(typeof(EmpQuestionnaireRow))]
    public class EmpQuestionnaireController : Controller
    {
        [Route("Default/EmpQuestionnaire")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/EmpQuestionnaire/EmpQuestionnaireIndex.cshtml");
        }
    }
}