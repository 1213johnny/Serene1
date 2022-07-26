using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene1.Default
{
    public partial class RepairFormRecordsGridEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene1.Default.RepairFormRecordsGridEditor";

        public RepairFormRecordsGridEditorAttribute()
            : base(Key)
        {
        }
    }
}
