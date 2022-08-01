using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Default.Forms
{
    [FormScript("Default.SpecialCallingLogics")]
    [BasedOnRow(typeof(SpecialCallingLogicsRow), CheckNames = true)]
    public class SpecialCallingLogicsForm
    {
        public string PackageName { get; set; }
        public int SpecialStatus { get; set; }
        public int Seq { get; set; }
        public int RagulerCount { get; set; }
        public int CallCount { get; set; }
        public int OldAge { get; set; }
    }
}