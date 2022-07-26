using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene1.Editor
{
    public partial class CreateUserLookUpEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene1.Editor.CreateUserLookUpEditor";

        public CreateUserLookUpEditorAttribute()
            : base(Key)
        {
        }
    }
}
