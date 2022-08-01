﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene1.Editor
{
    public partial class StatusEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene1.Editor.StatusEditor";

        public StatusEditorAttribute()
            : base(Key)
        {
        }

        public bool AllowClear
        {
            get { return GetOption<bool>("allowClear"); }
            set { SetOption("allowClear", value); }
        }

        public bool Delimited
        {
            get { return GetOption<bool>("delimited"); }
            set { SetOption("delimited", value); }
        }

        public object MinimumResultsForSearch
        {
            get { return GetOption<object>("minimumResultsForSearch"); }
            set { SetOption("minimumResultsForSearch", value); }
        }

        public bool Multiple
        {
            get { return GetOption<bool>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}
