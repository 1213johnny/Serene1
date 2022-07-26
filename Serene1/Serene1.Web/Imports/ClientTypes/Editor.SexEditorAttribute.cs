using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene1.Editor
{
    public partial class SexEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene1.Editor.SexEditor";

        public SexEditorAttribute()
            : base(Key)
        {
        }

        public string EnumKey
        {
            get { return GetOption<string>("enumKey"); }
            set { SetOption("enumKey", value); }
        }

        public object EnumType
        {
            get { return GetOption<object>("enumType"); }
            set { SetOption("enumType", value); }
        }

        public string LookupKey
        {
            get { return GetOption<string>("lookupKey"); }
            set { SetOption("lookupKey", value); }
        }
    }
}
