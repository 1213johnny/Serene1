﻿using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene1.Editor
{
    public partial class CreateUserLookEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene1.Editor.CreateUserLookEditor";

        public CreateUserLookEditorAttribute()
            : base(Key)
        {
        }
    }
}
