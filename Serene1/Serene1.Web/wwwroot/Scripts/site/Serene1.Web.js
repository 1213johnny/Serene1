var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementColumns = /** @class */ (function () {
            function AnnouncementColumns() {
            }
            AnnouncementColumns.columnsKey = 'Default.Announcement';
            return AnnouncementColumns;
        }());
        Default.AnnouncementColumns = AnnouncementColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementColumnsCustom = /** @class */ (function () {
            function AnnouncementColumnsCustom() {
            }
            AnnouncementColumnsCustom.columnsKey = 'Default.AnnouncementCustom';
            return AnnouncementColumnsCustom;
        }());
        Default.AnnouncementColumnsCustom = AnnouncementColumnsCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailColumns = /** @class */ (function () {
            function AnnouncementDetailColumns() {
            }
            AnnouncementDetailColumns.columnsKey = 'Default.AnnouncementDetail';
            return AnnouncementDetailColumns;
        }());
        Default.AnnouncementDetailColumns = AnnouncementDetailColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailForm = /** @class */ (function (_super) {
            __extends(AnnouncementDetailForm, _super);
            function AnnouncementDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AnnouncementDetailForm.init) {
                    AnnouncementDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(AnnouncementDetailForm, [
                        'AnnouncementsId', w0,
                        'TargetUser', w1,
                        'ReplyContent', w1,
                        'ReplyDate', w2,
                        'ReplyUser', w1,
                        'Createuser', w0,
                        'Createdate', w2,
                        'Updateuser', w0,
                        'Updatedate', w2
                    ]);
                }
                return _this;
            }
            AnnouncementDetailForm.formKey = 'Default.AnnouncementDetail';
            return AnnouncementDetailForm;
        }(Serenity.PrefixedContext));
        Default.AnnouncementDetailForm = AnnouncementDetailForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailFormCustom = /** @class */ (function (_super) {
            __extends(AnnouncementDetailFormCustom, _super);
            function AnnouncementDetailFormCustom(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AnnouncementDetailFormCustom.init) {
                    AnnouncementDetailFormCustom.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AnnouncementDetailFormCustom, [
                        'TargetUser', w0
                    ]);
                }
                return _this;
            }
            AnnouncementDetailFormCustom.formKey = 'ServiceAD.AnnouncementDetailCustom';
            return AnnouncementDetailFormCustom;
        }(Serenity.PrefixedContext));
        Default.AnnouncementDetailFormCustom = AnnouncementDetailFormCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailRow;
        (function (AnnouncementDetailRow) {
            AnnouncementDetailRow.idProperty = 'Oid';
            AnnouncementDetailRow.nameProperty = 'TargetUser';
            AnnouncementDetailRow.localTextPrefix = 'Default.AnnouncementDetail';
            AnnouncementDetailRow.deletePermission = 'Default:AnnouncementDetail:Delete';
            AnnouncementDetailRow.insertPermission = 'Default:AnnouncementDetail:Add';
            AnnouncementDetailRow.readPermission = 'Default:AnnouncementDetail:View';
            AnnouncementDetailRow.updatePermission = 'Default:AnnouncementDetail:Modify';
        })(AnnouncementDetailRow = Default.AnnouncementDetailRow || (Default.AnnouncementDetailRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailService;
        (function (AnnouncementDetailService) {
            AnnouncementDetailService.baseUrl = 'Default/AnnouncementDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AnnouncementDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(AnnouncementDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AnnouncementDetailService = Default.AnnouncementDetailService || (Default.AnnouncementDetailService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementForm = /** @class */ (function (_super) {
            __extends(AnnouncementForm, _super);
            function AnnouncementForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AnnouncementForm.init) {
                    AnnouncementForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(AnnouncementForm, [
                        'ServiceCode', w0,
                        'AnnounceType', w0,
                        'AnnounceDesc', w0,
                        'AnnouncePriority', w0,
                        'TargetRoleIds', w0,
                        'TargetUserIds', w0,
                        'ReleaseDate', w1,
                        'Attachments', w0,
                        'Createuser', w2,
                        'Createdate', w1,
                        'Updateuser', w2,
                        'Updatedate', w1
                    ]);
                }
                return _this;
            }
            AnnouncementForm.formKey = 'Default.Announcement';
            return AnnouncementForm;
        }(Serenity.PrefixedContext));
        Default.AnnouncementForm = AnnouncementForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementFormCustom = /** @class */ (function (_super) {
            __extends(AnnouncementFormCustom, _super);
            function AnnouncementFormCustom(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AnnouncementFormCustom.init) {
                    AnnouncementFormCustom.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = Default.AnnouncementGridEditor;
                    Q.initFormType(AnnouncementFormCustom, [
                        'ServiceCode', w0,
                        'AnnounceType', w0,
                        'AnnounceDesc', w0,
                        'AnnouncePriority', w0,
                        'TargetRoleIds', w0,
                        'TargetUserIds', w0,
                        'ReleaseDate', w1,
                        'Attachments', w0,
                        'DetailList', w2
                    ]);
                }
                return _this;
            }
            AnnouncementFormCustom.formKey = 'Default.AnnouncementCustom';
            return AnnouncementFormCustom;
        }(Serenity.PrefixedContext));
        Default.AnnouncementFormCustom = AnnouncementFormCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementRow;
        (function (AnnouncementRow) {
            AnnouncementRow.idProperty = 'Oid';
            AnnouncementRow.nameProperty = 'ServiceCode';
            AnnouncementRow.localTextPrefix = 'Default.Announcement';
            AnnouncementRow.deletePermission = 'Default:Announcement:Delete';
            AnnouncementRow.insertPermission = 'Default:Announcement:Add';
            AnnouncementRow.readPermission = 'Default:Announcement:View';
            AnnouncementRow.updatePermission = 'Default:Announcement:Modify';
        })(AnnouncementRow = Default.AnnouncementRow || (Default.AnnouncementRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementService;
        (function (AnnouncementService) {
            AnnouncementService.baseUrl = 'Default/Announcement';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AnnouncementService[x] = function (r, s, o) {
                    return Q.serviceRequest(AnnouncementService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AnnouncementService = Default.AnnouncementService || (Default.AnnouncementService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnounncementDetailColumnsCustom1 = /** @class */ (function () {
            function AnnounncementDetailColumnsCustom1() {
            }
            AnnounncementDetailColumnsCustom1.columnsKey = 'ServiceAD.AnnouncementDetailCustom';
            return AnnounncementDetailColumnsCustom1;
        }());
        Default.AnnounncementDetailColumnsCustom1 = AnnounncementDetailColumnsCustom1;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataColumns = /** @class */ (function () {
            function CaseServiceDataColumns() {
            }
            CaseServiceDataColumns.columnsKey = 'Default.CaseServiceData';
            return CaseServiceDataColumns;
        }());
        Default.CaseServiceDataColumns = CaseServiceDataColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataColumnsCustom = /** @class */ (function () {
            function CaseServiceDataColumnsCustom() {
            }
            CaseServiceDataColumnsCustom.columnsKey = 'Default.CaseServiceDataCustom';
            return CaseServiceDataColumnsCustom;
        }());
        Default.CaseServiceDataColumnsCustom = CaseServiceDataColumnsCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataForm = /** @class */ (function (_super) {
            __extends(CaseServiceDataForm, _super);
            function CaseServiceDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CaseServiceDataForm.init) {
                    CaseServiceDataForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(CaseServiceDataForm, [
                        'CaseNo', w0,
                        'PatientId', w0,
                        'RocId', w0,
                        'CreateDate', w1,
                        'CreateUser', w2,
                        'UpdateDate', w1,
                        'UpdateUser', w2
                    ]);
                }
                return _this;
            }
            CaseServiceDataForm.formKey = 'Default.CaseServiceData';
            return CaseServiceDataForm;
        }(Serenity.PrefixedContext));
        Default.CaseServiceDataForm = CaseServiceDataForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataFormCustom = /** @class */ (function (_super) {
            __extends(CaseServiceDataFormCustom, _super);
            function CaseServiceDataFormCustom(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CaseServiceDataFormCustom.init) {
                    CaseServiceDataFormCustom.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(CaseServiceDataFormCustom, [
                        'CaseNo', w0,
                        'PatientId', w0,
                        'RocId', w0,
                        'CreateDate', w1,
                        'CreateUser', w2,
                        'UpdateDate', w1,
                        'UpdateUser', w2
                    ]);
                }
                return _this;
            }
            CaseServiceDataFormCustom.formKey = 'Default.CaseServiceDataCustom';
            return CaseServiceDataFormCustom;
        }(Serenity.PrefixedContext));
        Default.CaseServiceDataFormCustom = CaseServiceDataFormCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataRow;
        (function (CaseServiceDataRow) {
            CaseServiceDataRow.idProperty = 'Oid';
            CaseServiceDataRow.nameProperty = 'CaseNo';
            CaseServiceDataRow.localTextPrefix = 'Default.CaseServiceData';
            CaseServiceDataRow.lookupKey = 'Lookup.CaseServiceData';
            function getLookup() {
                return Q.getLookup('Lookup.CaseServiceData');
            }
            CaseServiceDataRow.getLookup = getLookup;
            CaseServiceDataRow.deletePermission = 'Default:EmpQuestionnaire:Delete';
            CaseServiceDataRow.insertPermission = 'Default:EmpQuestionnaire:Add';
            CaseServiceDataRow.readPermission = 'Default:EmpQuestionnaire:View';
            CaseServiceDataRow.updatePermission = 'Default:EmpQuestionnaire:Modify';
        })(CaseServiceDataRow = Default.CaseServiceDataRow || (Default.CaseServiceDataRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataService;
        (function (CaseServiceDataService) {
            CaseServiceDataService.baseUrl = 'Default/CaseServiceData';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CaseServiceDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(CaseServiceDataService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CaseServiceDataService = Default.CaseServiceDataService || (Default.CaseServiceDataService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookColumns = /** @class */ (function () {
            function ContactBookColumns() {
            }
            ContactBookColumns.columnsKey = 'Default.ContactBook';
            return ContactBookColumns;
        }());
        Default.ContactBookColumns = ContactBookColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookColumnsCustom = /** @class */ (function () {
            function ContactBookColumnsCustom() {
            }
            ContactBookColumnsCustom.columnsKey = 'Default.ContactBookCustom';
            return ContactBookColumnsCustom;
        }());
        Default.ContactBookColumnsCustom = ContactBookColumnsCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookForm = /** @class */ (function (_super) {
            __extends(ContactBookForm, _super);
            function ContactBookForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContactBookForm.init) {
                    ContactBookForm.init = true;
                    var s = Serenity;
                    var w0 = Serene1.Editor.LookUpEditor;
                    var w1 = Serene1.Editor.AlreadyKnowEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ContactBookForm, [
                        'Caseno', w0,
                        'Alreadyknow', w1,
                        'Advise', w2,
                        'Advisedate', w3
                    ]);
                }
                return _this;
            }
            ContactBookForm.formKey = 'Default.ContactBook';
            return ContactBookForm;
        }(Serenity.PrefixedContext));
        Default.ContactBookForm = ContactBookForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookFormCustom = /** @class */ (function (_super) {
            __extends(ContactBookFormCustom, _super);
            function ContactBookFormCustom(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContactBookFormCustom.init) {
                    ContactBookFormCustom.init = true;
                    var s = Serenity;
                    var w0 = Serene1.Editor.LookUpEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = Serene1.Editor.AlreadyKnowEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(ContactBookFormCustom, [
                        'Caseno', w0,
                        'Advisedate', w1,
                        'Advise', w2,
                        'Alreadyknow', w3,
                        'Checkbox', w4
                    ]);
                }
                return _this;
            }
            ContactBookFormCustom.formKey = 'Default.ContactBookCustom';
            return ContactBookFormCustom;
        }(Serenity.PrefixedContext));
        Default.ContactBookFormCustom = ContactBookFormCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookFormCustom1 = /** @class */ (function (_super) {
            __extends(ContactBookFormCustom1, _super);
            function ContactBookFormCustom1(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContactBookFormCustom1.init) {
                    ContactBookFormCustom1.init = true;
                    var s = Serenity;
                    var w0 = s.TextAreaEditor;
                    var w1 = s.StringEditor;
                    var w2 = Serene1.Editor.AlreadyKnowEditor;
                    Q.initFormType(ContactBookFormCustom1, [
                        'Advise', w0,
                        'ShowText', w1,
                        'Alreadyknow', w2
                    ]);
                }
                return _this;
            }
            ContactBookFormCustom1.formKey = 'Default.ContactBookCustom1';
            return ContactBookFormCustom1;
        }(Serenity.PrefixedContext));
        Default.ContactBookFormCustom1 = ContactBookFormCustom1;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookRow;
        (function (ContactBookRow) {
            ContactBookRow.idProperty = 'Oid';
            ContactBookRow.nameProperty = 'Caseno';
            ContactBookRow.localTextPrefix = 'Default.ContactBook';
            ContactBookRow.deletePermission = 'Default:ContactBook:Delete';
            ContactBookRow.insertPermission = 'Default:ContactBook:Add';
            ContactBookRow.readPermission = 'Default:ContactBook:View';
            ContactBookRow.updatePermission = 'Default:ContactBook:Modify';
        })(ContactBookRow = Default.ContactBookRow || (Default.ContactBookRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookService;
        (function (ContactBookService) {
            ContactBookService.baseUrl = 'Default/ContactBook';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ContactBookService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContactBookService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ContactBookService = Default.ContactBookService || (Default.ContactBookService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpQuestionnaireColumns = /** @class */ (function () {
            function EmpQuestionnaireColumns() {
            }
            EmpQuestionnaireColumns.columnsKey = 'Default.EmpQuestionnaire';
            return EmpQuestionnaireColumns;
        }());
        Default.EmpQuestionnaireColumns = EmpQuestionnaireColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpQuestionnaireForm = /** @class */ (function (_super) {
            __extends(EmpQuestionnaireForm, _super);
            function EmpQuestionnaireForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmpQuestionnaireForm.init) {
                    EmpQuestionnaireForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = Serene1.Editor.SexEditor;
                    var w2 = Serene1.Editor.LanguageEditor;
                    var w3 = Serene1.Editor.BodyEditor;
                    var w4 = Serene1.Editor.WorkYearEditor;
                    var w5 = Serene1.Editor.PhaseEditor;
                    var w6 = Serene1.Editor.AreaEditor;
                    var w7 = Serene1.Editor.LevelEditor;
                    var w8 = s.StringEditor;
                    var w9 = s.DateEditor;
                    Q.initFormType(EmpQuestionnaireForm, [
                        'Age', w0,
                        'Height', w0,
                        'Weight', w0,
                        'Sex', w1,
                        'EmpLanguage', w2,
                        'EmpBody', w3,
                        'EmpWorkYear', w4,
                        'EmpTimePhase', w5,
                        'EmpArea', w6,
                        'EmpServiceLevel', w7,
                        'EmpNo', w8,
                        'QDate', w9
                    ]);
                }
                return _this;
            }
            EmpQuestionnaireForm.formKey = 'Default.EmpQuestionnaire';
            return EmpQuestionnaireForm;
        }(Serenity.PrefixedContext));
        Default.EmpQuestionnaireForm = EmpQuestionnaireForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpQuestionnaireRow;
        (function (EmpQuestionnaireRow) {
            EmpQuestionnaireRow.idProperty = 'Oid';
            EmpQuestionnaireRow.nameProperty = 'Oid';
            EmpQuestionnaireRow.localTextPrefix = 'Default.EmpQuestionnaire';
            EmpQuestionnaireRow.deletePermission = 'Default:EmpQuestionnaire:Delete';
            EmpQuestionnaireRow.insertPermission = 'Default:EmpQuestionnaire:Add';
            EmpQuestionnaireRow.readPermission = 'Default:EmpQuestionnaire:View';
            EmpQuestionnaireRow.updatePermission = 'Default:EmpQuestionnaire:Modify';
        })(EmpQuestionnaireRow = Default.EmpQuestionnaireRow || (Default.EmpQuestionnaireRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpQuestionnaireService;
        (function (EmpQuestionnaireService) {
            EmpQuestionnaireService.baseUrl = 'Default/EmpQuestionnaire';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmpQuestionnaireService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmpQuestionnaireService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmpQuestionnaireService = Default.EmpQuestionnaireService || (Default.EmpQuestionnaireService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmployeeColumns = /** @class */ (function () {
            function EmployeeColumns() {
            }
            EmployeeColumns.columnsKey = 'Default.Employee';
            return EmployeeColumns;
        }());
        Default.EmployeeColumns = EmployeeColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmployeeForm = /** @class */ (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeForm.init) {
                    EmployeeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(EmployeeForm, [
                        'EmployeeId', w0,
                        'EmployeeName', w0,
                        'EmployeeEngName', w0,
                        'IdentificationCardNo', w0,
                        'UnitId', w0,
                        'DeptType', w0,
                        'DeptId', w0,
                        'OrgId', w0,
                        'PositionId', w0,
                        'PostType', w0,
                        'PostId', w0,
                        'StartDate', w1,
                        'Sex', w0,
                        'Birthday', w1,
                        'CitizenId', w0,
                        'BloodType', w0,
                        'CountryId', w0,
                        'RaceFlag', w0,
                        'Homeland', w0,
                        'MarryFlag', w0,
                        'Educate', w0,
                        'License', w0,
                        'PractitionerRegisterFlag', w0,
                        'Ranks', w0,
                        'Standard', w0,
                        'Years', w0,
                        'Religion', w0,
                        'Church', w0,
                        'Address1', w0,
                        'Address2', w0,
                        'EmName', w0,
                        'EmRelation', w0,
                        'Telephone1', w0,
                        'Telephone2', w0,
                        'LeaveDate', w0,
                        'RetireFlag', w0,
                        'PatientId', w0,
                        'Username', w0
                    ]);
                }
                return _this;
            }
            EmployeeForm.formKey = 'Default.EmployeeForm';
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        Default.EmployeeForm = EmployeeForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'Oid';
            EmployeeRow.nameProperty = 'EmployeeId';
            EmployeeRow.localTextPrefix = 'Default.Employee';
            EmployeeRow.deletePermission = 'Default:Employee:Delete';
            EmployeeRow.insertPermission = 'Default:Employee:Add';
            EmployeeRow.readPermission = 'Default:Employee:View';
            EmployeeRow.updatePermission = 'Default:Employee:Modify';
        })(EmployeeRow = Default.EmployeeRow || (Default.EmployeeRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'Default/Employee';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeService = Default.EmployeeService || (Default.EmployeeService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsColumns = /** @class */ (function () {
            function RepairFormDetailRecordsColumns() {
            }
            RepairFormDetailRecordsColumns.columnsKey = 'Default.RepairFormDetailRecords';
            return RepairFormDetailRecordsColumns;
        }());
        Default.RepairFormDetailRecordsColumns = RepairFormDetailRecordsColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsColumnsCustom = /** @class */ (function () {
            function RepairFormDetailRecordsColumnsCustom() {
            }
            RepairFormDetailRecordsColumnsCustom.columnsKey = 'ServiceAD.RepairFormDetailRecordsCustom';
            return RepairFormDetailRecordsColumnsCustom;
        }());
        Default.RepairFormDetailRecordsColumnsCustom = RepairFormDetailRecordsColumnsCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsForm = /** @class */ (function (_super) {
            __extends(RepairFormDetailRecordsForm, _super);
            function RepairFormDetailRecordsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RepairFormDetailRecordsForm.init) {
                    RepairFormDetailRecordsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(RepairFormDetailRecordsForm, [
                        'RepairFormRecordsId', w0,
                        'UseMaterial', w1,
                        'UseMaterialCount', w0,
                        'MaterialAmount', w2,
                        'SubsidyAmount', w2,
                        'PayAmount', w2,
                        'Createuser', w0,
                        'Createdate', w3,
                        'Updateuser', w0,
                        'Updatedate', w3
                    ]);
                }
                return _this;
            }
            RepairFormDetailRecordsForm.formKey = 'Default.RepairFormDetailRecords';
            return RepairFormDetailRecordsForm;
        }(Serenity.PrefixedContext));
        Default.RepairFormDetailRecordsForm = RepairFormDetailRecordsForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsFormCustom = /** @class */ (function (_super) {
            __extends(RepairFormDetailRecordsFormCustom, _super);
            function RepairFormDetailRecordsFormCustom(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RepairFormDetailRecordsFormCustom.init) {
                    RepairFormDetailRecordsFormCustom.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(RepairFormDetailRecordsFormCustom, [
                        'UseMaterial', w0,
                        'MaterialAmount', w1,
                        'SubsidyAmount', w1,
                        'Updateuser', w0
                    ]);
                }
                return _this;
            }
            RepairFormDetailRecordsFormCustom.formKey = 'ServiceAD.RepairFormDetailRecordsCustom';
            return RepairFormDetailRecordsFormCustom;
        }(Serenity.PrefixedContext));
        Default.RepairFormDetailRecordsFormCustom = RepairFormDetailRecordsFormCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsRow;
        (function (RepairFormDetailRecordsRow) {
            RepairFormDetailRecordsRow.idProperty = 'Oid';
            RepairFormDetailRecordsRow.nameProperty = 'UseMaterial';
            RepairFormDetailRecordsRow.localTextPrefix = 'Default.RepairFormDetailRecords';
            RepairFormDetailRecordsRow.deletePermission = 'Default:RepairFormDetailRecords:Delete';
            RepairFormDetailRecordsRow.insertPermission = 'Default:RepairFormDetailRecords:Add';
            RepairFormDetailRecordsRow.readPermission = 'Default:RepairFormDetailRecords:View';
            RepairFormDetailRecordsRow.updatePermission = 'Default:RepairFormDetailRecords:Modify';
        })(RepairFormDetailRecordsRow = Default.RepairFormDetailRecordsRow || (Default.RepairFormDetailRecordsRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsService;
        (function (RepairFormDetailRecordsService) {
            RepairFormDetailRecordsService.baseUrl = 'Default/RepairFormDetailRecords';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RepairFormDetailRecordsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RepairFormDetailRecordsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RepairFormDetailRecordsService = Default.RepairFormDetailRecordsService || (Default.RepairFormDetailRecordsService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsColumns = /** @class */ (function () {
            function RepairFormRecordsColumns() {
            }
            RepairFormRecordsColumns.columnsKey = 'Default.RepairFormRecords';
            return RepairFormRecordsColumns;
        }());
        Default.RepairFormRecordsColumns = RepairFormRecordsColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsColumnsCustom = /** @class */ (function () {
            function RepairFormRecordsColumnsCustom() {
            }
            RepairFormRecordsColumnsCustom.columnsKey = 'Default.RepairFormRecordsCustom';
            return RepairFormRecordsColumnsCustom;
        }());
        Default.RepairFormRecordsColumnsCustom = RepairFormRecordsColumnsCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsForm = /** @class */ (function (_super) {
            __extends(RepairFormRecordsForm, _super);
            function RepairFormRecordsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RepairFormRecordsForm.init) {
                    RepairFormRecordsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(RepairFormRecordsForm, [
                        'CaseNo', w0,
                        'RepairDate', w1,
                        'Township', w0,
                        'Area', w0,
                        'SubsidySource', w0,
                        'AssistiveSource', w0,
                        'ItemName', w0,
                        'MaterialNo', w0,
                        'ServiceType', w0,
                        'ServiceCount', w2,
                        'EvalutionLevel', w0,
                        'HandlingPlace', w0,
                        'Place', w0,
                        'RepairRecord', w0,
                        'RepairEmpId', w0,
                        'Createuser', w2,
                        'Createdate', w1,
                        'Updateuser', w2,
                        'Updatedate', w1
                    ]);
                }
                return _this;
            }
            RepairFormRecordsForm.formKey = 'Default.RepairFormRecords';
            return RepairFormRecordsForm;
        }(Serenity.PrefixedContext));
        Default.RepairFormRecordsForm = RepairFormRecordsForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsFormCustom = /** @class */ (function (_super) {
            __extends(RepairFormRecordsFormCustom, _super);
            function RepairFormRecordsFormCustom(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RepairFormRecordsFormCustom.init) {
                    RepairFormRecordsFormCustom.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = Default.RepairFormRecordsGridEditor;
                    Q.initFormType(RepairFormRecordsFormCustom, [
                        'CaseNo', w0,
                        'RepairDate', w1,
                        'Township', w0,
                        'Area', w0,
                        'SubsidySource', w0,
                        'AssistiveSource', w0,
                        'ItemName', w0,
                        'MaterialNo', w0,
                        'ServiceType', w0,
                        'ServiceCount', w2,
                        'EvalutionLevel', w0,
                        'HandlingPlace', w0,
                        'Place', w0,
                        'RepairEmpId', w0,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            RepairFormRecordsFormCustom.formKey = 'Default.RepairFormRecordsCustom';
            return RepairFormRecordsFormCustom;
        }(Serenity.PrefixedContext));
        Default.RepairFormRecordsFormCustom = RepairFormRecordsFormCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsRow;
        (function (RepairFormRecordsRow) {
            RepairFormRecordsRow.idProperty = 'Oid';
            RepairFormRecordsRow.nameProperty = 'CaseNo';
            RepairFormRecordsRow.localTextPrefix = 'Default.RepairFormRecords';
            RepairFormRecordsRow.deletePermission = 'Default:RepairFormRecords:Delete';
            RepairFormRecordsRow.insertPermission = 'Default:RepairFormRecords:Add';
            RepairFormRecordsRow.readPermission = 'Default:RepairFormRecords:View';
            RepairFormRecordsRow.updatePermission = 'Default:RepairFormRecords:Modify';
        })(RepairFormRecordsRow = Default.RepairFormRecordsRow || (Default.RepairFormRecordsRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsService;
        (function (RepairFormRecordsService) {
            RepairFormRecordsService.baseUrl = 'Default/RepairFormRecords';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RepairFormRecordsService[x] = function (r, s, o) {
                    return Q.serviceRequest(RepairFormRecordsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RepairFormRecordsService = Default.RepairFormRecordsService || (Default.RepairFormRecordsService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Texts;
    (function (Texts) {
        Serene1['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Default: { Announcement: { AnnounceDesc: 1, AnnouncePriority: 1, AnnounceType: 1, Attachments: 1, Createdate: 1, Createuser: 1, DetailList: 1, Oid: 1, ReleaseDate: 1, ServiceCode: 1, TargetRoleIds: 1, TargetUserIds: 1, Updatedate: 1, Updateuser: 1 }, AnnouncementDetail: { AnnouncementsId: 1, Createdate: 1, Createuser: 1, Oid: 1, ReplyContent: 1, ReplyDate: 1, ReplyUser: 1, TargetUser: 1, Updatedate: 1, Updateuser: 1 }, CaseServiceData: { CaseNo: 1, CreateDate: 1, CreateUser: 1, CreateUserName: 1, Oid: 1, PatientId: 1, RocId: 1, UpdateDate: 1, UpdateUser: 1, UpdateUserName: 1 }, ContactBook: { Advise: 1, Advisedate: 1, Alreadyknow: 1, AlreadyknowExpre: 1, Caseno: 1, Checkbox: 1, CreateDate: 1, CreateUser: 1, CreateUserName: 1, Oid: 1, UpdateDate: 1, UpdateUser: 1, UpdateUserName: 1 }, EmpQuestionnaire: { Age: 1, EmpArea: 1, EmpBody: 1, EmpDriverLicense: 1, EmpEffectiveDate: 1, EmpEmt1License: 1, EmpLanguage: 1, EmpNo: 1, EmpServiceLevel: 1, EmpSkill: 1, EmpTimePhase: 1, EmpWorkYear: 1, Height: 1, Oid: 1, QDate: 1, Sex: 1, UpdateDate: 1, UpdateUser: 1, Weight: 1 }, Employee: { Address1: 1, Address2: 1, Birthday: 1, BloodType: 1, Church: 1, CitizenId: 1, CountryId: 1, DeptId: 1, DeptType: 1, Educate: 1, EmName: 1, EmRelation: 1, EmployeeEngName: 1, EmployeeId: 1, EmployeeName: 1, Homeland: 1, IdentificationCardNo: 1, LeaveDate: 1, License: 1, MarryFlag: 1, Oid: 1, OrgId: 1, PatientId: 1, PositionId: 1, PostId: 1, PostType: 1, PractitionerRegisterFlag: 1, RaceFlag: 1, Ranks: 1, Religion: 1, RetireFlag: 1, Sex: 1, Standard: 1, StartDate: 1, Telephone1: 1, Telephone2: 1, UnitId: 1, Username: 1, Years: 1 }, RepairFormDetailRecords: { Createdate: 1, Createuser: 1, MaterialAmount: 1, Oid: 1, PayAmount: 1, RepairFormRecordsId: 1, SubsidyAmount: 1, Updatedate: 1, Updateuser: 1, UseMaterial: 1, UseMaterialCount: 1 }, RepairFormRecords: { Area: 1, AssistiveSource: 1, CaseNo: 1, Createdate: 1, Createuser: 1, DetailList: 1, EvalutionLevel: 1, HandlingPlace: 1, ItemName: 1, MaterialNo: 1, Oid: 1, Place: 1, RepairDate: 1, RepairEmpId: 1, RepairRecord: 1, ServiceCount: 1, ServiceType: 1, SubsidySource: 1, Township: 1, Updatedate: 1, Updateuser: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Serene1.Texts || (Serene1.Texts = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Serene1.Authorization || (Serene1.Authorization = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                console.log("asd");
                Q.postToUrl({
                    url: '~/Extensions/Report/' + (options.download ? 'Download' : 'Render'),
                    //url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Serene1.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Serene1.LanguageList || (Serene1.LanguageList = {}));
})(Serene1 || (Serene1 = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Serene1;
(function (Serene1) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Serene1');
        Serenity.EntityDialog.defaultLanguageList = Serene1.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Serene1.ScriptInitialization || (Serene1.ScriptInitialization = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var addButton = Q.tryFirst(buttons, function (x) { return x.cssClass == 'add-button'; });
                if (addButton != null) {
                    addButton.onClick = function () {
                        _this.createEntityDialog(_this.getItemType(), function (dlg) {
                            var dialog = dlg;
                            dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                            _this.transferDialogReadOnly(dialog);
                            dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                        });
                    };
                }
                return buttons.filter(function (x) { return x.cssClass != "refresh-button"; });
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    _this.transferDialogReadOnly(dialog);
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDialog = /** @class */ (function (_super) {
            __extends(AnnouncementDialog, _super);
            function AnnouncementDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AnnouncementForm(_this.idPrefix);
                return _this;
            }
            AnnouncementDialog.prototype.getFormKey = function () { return Default.AnnouncementForm.formKey; };
            AnnouncementDialog.prototype.getIdProperty = function () { return Default.AnnouncementRow.idProperty; };
            AnnouncementDialog.prototype.getLocalTextPrefix = function () { return Default.AnnouncementRow.localTextPrefix; };
            AnnouncementDialog.prototype.getNameProperty = function () { return Default.AnnouncementRow.nameProperty; };
            AnnouncementDialog.prototype.getService = function () { return Default.AnnouncementService.baseUrl; };
            AnnouncementDialog.prototype.getDeletePermission = function () { return Default.AnnouncementRow.deletePermission; };
            AnnouncementDialog.prototype.getInsertPermission = function () { return Default.AnnouncementRow.insertPermission; };
            AnnouncementDialog.prototype.getUpdatePermission = function () { return Default.AnnouncementRow.updatePermission; };
            AnnouncementDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementDialog);
            return AnnouncementDialog;
        }(Serenity.EntityDialog));
        Default.AnnouncementDialog = AnnouncementDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementGrid = /** @class */ (function (_super) {
            __extends(AnnouncementGrid, _super);
            function AnnouncementGrid(container) {
                return _super.call(this, container) || this;
            }
            AnnouncementGrid.prototype.getColumnsKey = function () { return Default.AnnouncementColumns.columnsKey; };
            AnnouncementGrid.prototype.getDialogType = function () { return Default.AnnouncementDialog; };
            AnnouncementGrid.prototype.getIdProperty = function () { return Default.AnnouncementRow.idProperty; };
            AnnouncementGrid.prototype.getInsertPermission = function () { return Default.AnnouncementRow.insertPermission; };
            AnnouncementGrid.prototype.getLocalTextPrefix = function () { return Default.AnnouncementRow.localTextPrefix; };
            AnnouncementGrid.prototype.getService = function () { return Default.AnnouncementService.baseUrl; };
            AnnouncementGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementGrid);
            return AnnouncementGrid;
        }(Serenity.EntityGrid));
        Default.AnnouncementGrid = AnnouncementGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDialogCustom = /** @class */ (function (_super) {
            __extends(AnnouncementDialogCustom, _super);
            function AnnouncementDialogCustom() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AnnouncementForm(_this.idPrefix);
                return _this;
            }
            AnnouncementDialogCustom.prototype.getFormKey = function () { return Default.AnnouncementFormCustom.formKey; };
            AnnouncementDialogCustom.prototype.getIdProperty = function () { return Default.AnnouncementRow.idProperty; };
            AnnouncementDialogCustom.prototype.getLocalTextPrefix = function () { return Default.AnnouncementRow.localTextPrefix; };
            AnnouncementDialogCustom.prototype.getNameProperty = function () { return Default.AnnouncementRow.nameProperty; };
            AnnouncementDialogCustom.prototype.getService = function () { return Default.AnnouncementService.baseUrl; };
            AnnouncementDialogCustom.prototype.getDeletePermission = function () { return Default.AnnouncementRow.deletePermission; };
            AnnouncementDialogCustom.prototype.getInsertPermission = function () { return Default.AnnouncementRow.insertPermission; };
            AnnouncementDialogCustom.prototype.getUpdatePermission = function () { return Default.AnnouncementRow.updatePermission; };
            AnnouncementDialogCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementDialogCustom);
            return AnnouncementDialogCustom;
        }(Serenity.EntityDialog));
        Default.AnnouncementDialogCustom = AnnouncementDialogCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementGridCustom = /** @class */ (function (_super) {
            __extends(AnnouncementGridCustom, _super);
            function AnnouncementGridCustom(container) {
                return _super.call(this, container) || this;
            }
            AnnouncementGridCustom.prototype.getColumnsKey = function () { return Default.AnnouncementColumnsCustom.columnsKey; };
            AnnouncementGridCustom.prototype.getDialogType = function () { return Default.AnnouncementDialogCustom; };
            AnnouncementGridCustom.prototype.getIdProperty = function () { return Default.AnnouncementRow.idProperty; };
            AnnouncementGridCustom.prototype.getInsertPermission = function () { return Default.AnnouncementRow.insertPermission; };
            AnnouncementGridCustom.prototype.getLocalTextPrefix = function () { return Default.AnnouncementRow.localTextPrefix; };
            AnnouncementGridCustom.prototype.getService = function () { return Default.AnnouncementService.baseUrl; };
            AnnouncementGridCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementGridCustom);
            return AnnouncementGridCustom;
        }(Serenity.EntityGrid));
        Default.AnnouncementGridCustom = AnnouncementGridCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailDialog = /** @class */ (function (_super) {
            __extends(AnnouncementDetailDialog, _super);
            function AnnouncementDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AnnouncementDetailForm(_this.idPrefix);
                return _this;
            }
            AnnouncementDetailDialog.prototype.getFormKey = function () { return Default.AnnouncementDetailForm.formKey; };
            AnnouncementDetailDialog.prototype.getIdProperty = function () { return Default.AnnouncementDetailRow.idProperty; };
            AnnouncementDetailDialog.prototype.getLocalTextPrefix = function () { return Default.AnnouncementDetailRow.localTextPrefix; };
            AnnouncementDetailDialog.prototype.getNameProperty = function () { return Default.AnnouncementDetailRow.nameProperty; };
            AnnouncementDetailDialog.prototype.getService = function () { return Default.AnnouncementDetailService.baseUrl; };
            AnnouncementDetailDialog.prototype.getDeletePermission = function () { return Default.AnnouncementDetailRow.deletePermission; };
            AnnouncementDetailDialog.prototype.getInsertPermission = function () { return Default.AnnouncementDetailRow.insertPermission; };
            AnnouncementDetailDialog.prototype.getUpdatePermission = function () { return Default.AnnouncementDetailRow.updatePermission; };
            AnnouncementDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementDetailDialog);
            return AnnouncementDetailDialog;
        }(Serenity.EntityDialog));
        Default.AnnouncementDetailDialog = AnnouncementDetailDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementDetailGrid = /** @class */ (function (_super) {
            __extends(AnnouncementDetailGrid, _super);
            function AnnouncementDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            AnnouncementDetailGrid.prototype.getColumnsKey = function () { return Default.AnnouncementDetailColumns.columnsKey; };
            AnnouncementDetailGrid.prototype.getDialogType = function () { return Default.AnnouncementDetailDialog; };
            AnnouncementDetailGrid.prototype.getIdProperty = function () { return Default.AnnouncementDetailRow.idProperty; };
            AnnouncementDetailGrid.prototype.getInsertPermission = function () { return Default.AnnouncementDetailRow.insertPermission; };
            AnnouncementDetailGrid.prototype.getLocalTextPrefix = function () { return Default.AnnouncementDetailRow.localTextPrefix; };
            AnnouncementDetailGrid.prototype.getService = function () { return Default.AnnouncementDetailService.baseUrl; };
            AnnouncementDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementDetailGrid);
            return AnnouncementDetailGrid;
        }(Serenity.EntityGrid));
        Default.AnnouncementDetailGrid = AnnouncementDetailGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AnnouncementGridDialog = /** @class */ (function (_super) {
            __extends(AnnouncementGridDialog, _super);
            function AnnouncementGridDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AnnouncementFormCustom(_this.idPrefix);
                return _this;
            }
            AnnouncementGridDialog.prototype.getFormKey = function () { return Default.AnnouncementDetailFormCustom.formKey; };
            AnnouncementGridDialog.prototype.getLocalTextPrefix = function () { return Default.AnnouncementRow.localTextPrefix; };
            AnnouncementGridDialog.prototype.getService = function () { return Default.AnnouncementService.baseUrl; };
            AnnouncementGridDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementGridDialog);
            return AnnouncementGridDialog;
        }(Serene1.Common.GridEditorDialog));
        Default.AnnouncementGridDialog = AnnouncementGridDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
///// <reference path="../Common/Helpers/GridEditorBase.ts" />
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        /*   import fld = AnnouncementRow.Fields*/
        var AnnouncementGridEditor = /** @class */ (function (_super) {
            __extends(AnnouncementGridEditor, _super);
            function AnnouncementGridEditor(container) {
                return _super.call(this, container) || this;
                //this.serviceCode = Q.getCookie("ServiceCode");
            }
            AnnouncementGridEditor.prototype.getColumnsKey = function () { return "ServiceAD.AnnouncementDetailCustom"; };
            AnnouncementGridEditor.prototype.getDialogType = function () { return Default.AnnouncementGridDialog; };
            AnnouncementGridEditor.prototype.getLocalTextPrefix = function () { return Default.AnnouncementDetailRow.localTextPrefix; };
            AnnouncementGridEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "DeleteRow",
                    name: "",
                    format: function () {
                        if (Q.Authorization.hasPermission(Default.AnnouncementRow.deletePermission))
                            return "<div><button class=\"btn btn-danger delete-row   fa fa-trash\" title=\"\u522A\u9664\">\u522A\u9664</button></div>";
                        return "<div><button class=\"btn btn-danger fa fa-trash\" disabled title=\"\u522A\u9664\">\u522A\u9664</button></div>";
                    },
                    width: 75,
                    minWidth: 75,
                    maxWidth: 75
                });
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function () {
                        if (Q.Authorization.hasPermission(Default.AnnouncementRow.updatePermission))
                            return "<div><button class=\"btn btn-primary edit-row   fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button></div>";
                        return "<div><button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button></div>";
                    },
                    width: 75,
                    minWidth: 75,
                    maxWidth: 75
                });
                //columns.push(
                //    {
                //        field: "ContactPersonRow",
                //        name: "",
                //        format: () => {
                //            return `<div><button class="btn btn-primary ContactPerson-row  fa fa-phone" title="聯絡人">聯絡人</button></div>`;
                //        },
                //        width: 85,
                //        minWidth: 85,
                //        maxWidth: 85
                //    });
                return columns;
            };
            AnnouncementGridEditor.prototype.getSlickOptions = function () {
                var gridOptions = _super.prototype.getSlickOptions.call(this);
                gridOptions.rowHeight = 40;
                return gridOptions;
            };
            AnnouncementGridEditor.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass('edit-row')) {
                    this.createEntityDialog(this.getItemType(), function (dlg) {
                        var dialog = dlg;
                        dialog.onSave = function (opt, callback) { _this.save(opt, callback); };
                        dialog.loadEntityAndOpenDialog(item, false);
                    });
                    Serenity.SubDialogHelper.triggerDataChange(this);
                }
                else if ($(e.target).hasClass('delete-row')) {
                    Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                        _this.deleteEntity(item[_this.getIdProperty()]);
                    });
                }
                //else if ($(e.target).hasClass('ContactPerson-row')) {
                //    let dlg = new PublicBasic.ContactPersonCustomGridDialog(this.serviceCode, item.PatientNo, item.CaseNo);
                //    dlg.loadNewAndOpenDialog();
                //    //let dlg = new ContactPersonGridCustom(this.slickContainer.parent(), this.serviceCode, item.PatientNo);
                //}
            };
            AnnouncementGridEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AnnouncementGridEditor);
            return AnnouncementGridEditor;
        }(Serene1.Common.GridEditorBase));
        Default.AnnouncementGridEditor = AnnouncementGridEditor;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataDialog = /** @class */ (function (_super) {
            __extends(CaseServiceDataDialog, _super);
            function CaseServiceDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CaseServiceDataForm(_this.idPrefix);
                return _this;
            }
            CaseServiceDataDialog.prototype.getFormKey = function () { return Default.CaseServiceDataForm.formKey; };
            CaseServiceDataDialog.prototype.getIdProperty = function () { return Default.CaseServiceDataRow.idProperty; };
            CaseServiceDataDialog.prototype.getLocalTextPrefix = function () { return Default.CaseServiceDataRow.localTextPrefix; };
            CaseServiceDataDialog.prototype.getNameProperty = function () { return Default.CaseServiceDataRow.nameProperty; };
            CaseServiceDataDialog.prototype.getService = function () { return Default.CaseServiceDataService.baseUrl; };
            CaseServiceDataDialog.prototype.getDeletePermission = function () { return Default.CaseServiceDataRow.deletePermission; };
            CaseServiceDataDialog.prototype.getInsertPermission = function () { return Default.CaseServiceDataRow.insertPermission; };
            CaseServiceDataDialog.prototype.getUpdatePermission = function () { return Default.CaseServiceDataRow.updatePermission; };
            CaseServiceDataDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CaseServiceDataDialog);
            return CaseServiceDataDialog;
        }(Serenity.EntityDialog));
        Default.CaseServiceDataDialog = CaseServiceDataDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataGrid = /** @class */ (function (_super) {
            __extends(CaseServiceDataGrid, _super);
            function CaseServiceDataGrid(container) {
                return _super.call(this, container) || this;
            }
            CaseServiceDataGrid.prototype.getColumnsKey = function () { return Default.CaseServiceDataColumns.columnsKey; };
            CaseServiceDataGrid.prototype.getDialogType = function () { return Default.CaseServiceDataDialog; };
            CaseServiceDataGrid.prototype.getIdProperty = function () { return Default.CaseServiceDataRow.idProperty; };
            CaseServiceDataGrid.prototype.getInsertPermission = function () { return Default.CaseServiceDataRow.insertPermission; };
            CaseServiceDataGrid.prototype.getLocalTextPrefix = function () { return Default.CaseServiceDataRow.localTextPrefix; };
            CaseServiceDataGrid.prototype.getService = function () { return Default.CaseServiceDataService.baseUrl; };
            CaseServiceDataGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "DeleteRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.CaseServiceDataRow.deletePermission))
                            return "<button class=\"btn btn-danger delete-row fa fa-trash\" title=\"\u522A\u9664\">\u522A\u9664</button>";
                        return "<button class=\"btn btn-danger fa fa-trash\" disabled title=\"\u522A\u9664\">\u522A\u9664</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.CaseServiceDataRow.updatePermission))
                            return "<button class=\"btn btn-primary edit-row fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                        return "<button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                return columns;
            };
            CaseServiceDataGrid.prototype.getSlickOptions = function () {
                var slick = _super.prototype.getSlickOptions.call(this);
                slick.rowHeight = 35;
                return slick;
            };
            CaseServiceDataGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass("edit-row")) {
                    var dlg = new Default.CaseServiceDataDialog();
                    dlg.loadByIdAndOpenDialog(item.Oid);
                    Serenity.SubDialogHelper.bindToDataChange(dlg, this, function (p1, p2) {
                        _this.refresh();
                    });
                }
                else if ($(e.target).hasClass("delete-row")) {
                    Q.confirm("確定要刪除嗎?", function () {
                        Default.CaseServiceDataService.Delete({
                            EntityId: item.Oid
                        }, function (r) {
                            Q.notifySuccess("刪除成功");
                            _this.refresh();
                        });
                    });
                }
            };
            CaseServiceDataGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CaseServiceDataGrid);
            return CaseServiceDataGrid;
        }(Serenity.EntityGrid));
        Default.CaseServiceDataGrid = CaseServiceDataGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataDialogCustom = /** @class */ (function (_super) {
            __extends(CaseServiceDataDialogCustom, _super);
            function CaseServiceDataDialogCustom() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CaseServiceDataFormCustom(_this.idPrefix);
                return _this;
            }
            CaseServiceDataDialogCustom.prototype.getFormKey = function () { return Default.CaseServiceDataFormCustom.formKey; };
            CaseServiceDataDialogCustom.prototype.getIdProperty = function () { return Default.CaseServiceDataRow.idProperty; };
            CaseServiceDataDialogCustom.prototype.getLocalTextPrefix = function () { return Default.CaseServiceDataRow.localTextPrefix; };
            CaseServiceDataDialogCustom.prototype.getNameProperty = function () { return Default.CaseServiceDataRow.nameProperty; };
            CaseServiceDataDialogCustom.prototype.getService = function () { return Default.CaseServiceDataService.baseUrl; };
            CaseServiceDataDialogCustom.prototype.getDeletePermission = function () { return Default.CaseServiceDataRow.deletePermission; };
            CaseServiceDataDialogCustom.prototype.getInsertPermission = function () { return Default.CaseServiceDataRow.insertPermission; };
            CaseServiceDataDialogCustom.prototype.getUpdatePermission = function () { return Default.CaseServiceDataRow.updatePermission; };
            CaseServiceDataDialogCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], CaseServiceDataDialogCustom);
            return CaseServiceDataDialogCustom;
        }(Serenity.EntityDialog));
        Default.CaseServiceDataDialogCustom = CaseServiceDataDialogCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var CaseServiceDataGridCustom = /** @class */ (function (_super) {
            __extends(CaseServiceDataGridCustom, _super);
            function CaseServiceDataGridCustom(container) {
                return _super.call(this, container) || this;
            }
            CaseServiceDataGridCustom.prototype.getColumnsKey = function () { return Default.CaseServiceDataColumnsCustom.columnsKey; };
            CaseServiceDataGridCustom.prototype.getDialogType = function () { return Default.CaseServiceDataDialogCustom; };
            CaseServiceDataGridCustom.prototype.getIdProperty = function () { return Default.CaseServiceDataRow.idProperty; };
            CaseServiceDataGridCustom.prototype.getInsertPermission = function () { return Default.CaseServiceDataRow.insertPermission; };
            CaseServiceDataGridCustom.prototype.getLocalTextPrefix = function () { return Default.CaseServiceDataRow.localTextPrefix; };
            CaseServiceDataGridCustom.prototype.getService = function () { return Default.CaseServiceDataService.baseUrl; };
            CaseServiceDataGridCustom.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "DeleteRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.CaseServiceDataRow.deletePermission))
                            return "<button class=\"btn btn-danger delete-row fa fa-trash\" title=\"\u522A\u9664\">\u522A\u9664</button>";
                        return "<button class=\"btn btn-danger fa fa-trash\" disabled title=\"\u522A\u9664\">\u522A\u9664</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.CaseServiceDataRow.updatePermission))
                            return "<button class=\"btn btn-primary edit-row fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                        return "<button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                return columns;
            };
            CaseServiceDataGridCustom.prototype.getSlickOptions = function () {
                var slick = _super.prototype.getSlickOptions.call(this);
                slick.rowHeight = 35;
                return slick;
            };
            CaseServiceDataGridCustom.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass("edit-row")) {
                    var dlg = new Default.CaseServiceDataDialog();
                    dlg.loadByIdAndOpenDialog(item.Oid);
                    Serenity.SubDialogHelper.bindToDataChange(dlg, this, function (p1, p2) {
                        _this.refresh();
                    });
                }
                else if ($(e.target).hasClass("delete-row")) {
                    Q.confirm("確定要刪除嗎?", function () {
                        Default.CaseServiceDataService.Delete({
                            EntityId: item.Oid
                        }, function (r) {
                            Q.notifySuccess("刪除成功");
                            _this.refresh();
                        });
                    });
                }
            };
            CaseServiceDataGridCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], CaseServiceDataGridCustom);
            return CaseServiceDataGridCustom;
        }(Serenity.EntityGrid));
        Default.CaseServiceDataGridCustom = CaseServiceDataGridCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookDialog = /** @class */ (function (_super) {
            __extends(ContactBookDialog, _super);
            function ContactBookDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ContactBookForm(_this.idPrefix);
                return _this;
            }
            ContactBookDialog.prototype.getFormKey = function () { return Default.ContactBookForm.formKey; };
            ContactBookDialog.prototype.getIdProperty = function () { return Default.ContactBookRow.idProperty; };
            ContactBookDialog.prototype.getLocalTextPrefix = function () { return Default.ContactBookRow.localTextPrefix; };
            ContactBookDialog.prototype.getNameProperty = function () { return Default.ContactBookRow.nameProperty; };
            ContactBookDialog.prototype.getService = function () { return Default.ContactBookService.baseUrl; };
            ContactBookDialog.prototype.getDeletePermission = function () { return Default.ContactBookRow.deletePermission; };
            ContactBookDialog.prototype.getInsertPermission = function () { return Default.ContactBookRow.insertPermission; };
            ContactBookDialog.prototype.getUpdatePermission = function () { return Default.ContactBookRow.updatePermission; };
            ContactBookDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContactBookDialog);
            return ContactBookDialog;
        }(Serenity.EntityDialog));
        Default.ContactBookDialog = ContactBookDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookGrid = /** @class */ (function (_super) {
            __extends(ContactBookGrid, _super);
            function ContactBookGrid(container) {
                return _super.call(this, container) || this;
            }
            ContactBookGrid.prototype.getColumnsKey = function () { return Default.ContactBookColumns.columnsKey; };
            ContactBookGrid.prototype.getDialogType = function () { return Default.ContactBookDialog; };
            ContactBookGrid.prototype.getIdProperty = function () { return Default.ContactBookRow.idProperty; };
            ContactBookGrid.prototype.getInsertPermission = function () { return Default.ContactBookRow.insertPermission; };
            ContactBookGrid.prototype.getLocalTextPrefix = function () { return Default.ContactBookRow.localTextPrefix; };
            ContactBookGrid.prototype.getService = function () { return Default.ContactBookService.baseUrl; };
            ContactBookGrid.prototype.getQuickFilters = function () {
                var filter = _super.prototype.getQuickFilters.call(this);
                var AlreadyFilter = Q.tryFirst(filter, function (x) { return x.field == "Alreadyknow"; });
                if (AlreadyFilter) {
                    AlreadyFilter.init = function (w) {
                        w.value = "0";
                    };
                }
                return filter;
            };
            ContactBookGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContactBookGrid);
            return ContactBookGrid;
        }(Serenity.EntityGrid));
        Default.ContactBookGrid = ContactBookGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookDialogCustom = /** @class */ (function (_super) {
            __extends(ContactBookDialogCustom, _super);
            function ContactBookDialogCustom(Caseno) {
                var _this = _super.call(this) || this;
                _this.form = new Default.ContactBookFormCustom(_this.idPrefix);
                _this.caseNo = Caseno;
                _this.form.Advise.change(function (e) {
                    if ($(e.target).val())
                        _this.form.Alreadyknow.value = "1";
                    else
                        _this.form.Alreadyknow.value = "0";
                });
                return _this;
            }
            ContactBookDialogCustom.prototype.getFormKey = function () { return Default.ContactBookFormCustom.formKey; };
            ContactBookDialogCustom.prototype.getIdProperty = function () { return Default.ContactBookRow.idProperty; };
            ContactBookDialogCustom.prototype.getLocalTextPrefix = function () { return Default.ContactBookRow.localTextPrefix; };
            ContactBookDialogCustom.prototype.getNameProperty = function () { return Default.ContactBookRow.nameProperty; };
            ContactBookDialogCustom.prototype.getService = function () { return Default.ContactBookService.baseUrl; };
            ContactBookDialogCustom.prototype.getDeletePermission = function () { return Default.ContactBookRow.deletePermission; };
            ContactBookDialogCustom.prototype.getInsertPermission = function () { return Default.ContactBookRow.insertPermission; };
            ContactBookDialogCustom.prototype.getUpdatePermission = function () { return Default.ContactBookRow.updatePermission; };
            ContactBookDialogCustom.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                //this.form.Caseno.value = this.Caseno;
            };
            ContactBookDialogCustom = __decorate([
                Serenity.Decorators.panel(true),
                Serenity.Decorators.registerClass()
            ], ContactBookDialogCustom);
            return ContactBookDialogCustom;
        }(Serenity.EntityDialog));
        Default.ContactBookDialogCustom = ContactBookDialogCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookDialogCustom1 = /** @class */ (function (_super) {
            __extends(ContactBookDialogCustom1, _super);
            function ContactBookDialogCustom1(Caseno) {
                var _this = _super.call(this) || this;
                _this.form = new Default.ContactBookFormCustom1(_this.idPrefix);
                _this.Caseno = Caseno;
                _this.form.Advise.change(function (e) {
                    if ($(e.target).val())
                        _this.form.Alreadyknow.value = "1";
                    else
                        _this.form.Alreadyknow.value = "0";
                });
                return _this;
            }
            ContactBookDialogCustom1.prototype.getFormKey = function () { return Default.ContactBookFormCustom1.formKey; };
            ContactBookDialogCustom1.prototype.getIdProperty = function () { return Default.ContactBookRow.idProperty; };
            ContactBookDialogCustom1.prototype.getLocalTextPrefix = function () { return Default.ContactBookRow.localTextPrefix; };
            ContactBookDialogCustom1.prototype.getNameProperty = function () { return Default.ContactBookRow.nameProperty; };
            ContactBookDialogCustom1.prototype.getService = function () { return Default.ContactBookService.baseUrl; };
            ContactBookDialogCustom1.prototype.getDeletePermission = function () { return Default.ContactBookRow.deletePermission; };
            ContactBookDialogCustom1.prototype.getInsertPermission = function () { return Default.ContactBookRow.insertPermission; };
            ContactBookDialogCustom1.prototype.getUpdatePermission = function () { return Default.ContactBookRow.updatePermission; };
            ContactBookDialogCustom1.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.form.ShowText.value = this.Caseno;
            };
            ContactBookDialogCustom1 = __decorate([
                Serenity.Decorators.registerClass()
            ], ContactBookDialogCustom1);
            return ContactBookDialogCustom1;
        }(Serenity.EntityDialog));
        Default.ContactBookDialogCustom1 = ContactBookDialogCustom1;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ContactBookGridCustom = /** @class */ (function (_super) {
            __extends(ContactBookGridCustom, _super);
            function ContactBookGridCustom(container) {
                return _super.call(this, container) || this;
            }
            ContactBookGridCustom.prototype.getColumnsKey = function () { return Default.ContactBookColumnsCustom.columnsKey; };
            ContactBookGridCustom.prototype.getDialogType = function () { return Default.ContactBookDialogCustom; };
            ContactBookGridCustom.prototype.getIdProperty = function () { return Default.ContactBookRow.idProperty; };
            ContactBookGridCustom.prototype.getInsertPermission = function () { return Default.ContactBookRow.insertPermission; };
            ContactBookGridCustom.prototype.getLocalTextPrefix = function () { return Default.ContactBookRow.localTextPrefix; };
            ContactBookGridCustom.prototype.getService = function () { return Default.ContactBookService.baseUrl; };
            ContactBookGridCustom.prototype.createQuickSearchInput = function () { };
            ContactBookGridCustom.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "tool-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "refresh-button"; }), 1);
                buttons.push({
                    title: Q.text("LALALA"),
                    cssClass: 'text-blue',
                    icon: 'fa-regular fa-book',
                    onClick: function () {
                        var dlg = new Default.ContactBookDialogCustom();
                        dlg.loadNewAndOpenDialog(true);
                        Serenity.SubDialogHelper.bindToDataChange(dlg, _this, function (p1, p2) {
                            _this.refresh();
                        });
                    }
                });
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    title: "聯絡簿EXCEL"
                }));
                //buttons.push(
                //    Serenity.Extensions.ReportHelper.createToolButton({
                //        reportKey: "Report.ContactBook",
                //        title: '聯絡簿PDF'
                //    })
                //);
                buttons.push({
                    title: '聯絡簿PDF',
                    cssClass: "pdf-button",
                    icon: "fa fa-file-pdf-o",
                    onClick: function () {
                        //Serene1.Common.ReportHelper.execute({
                        //    reportKey: "Serene1.ContactBookReport",
                        //});
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: "Serene1.ContactBookReport",
                        });
                    }
                });
                return buttons;
            };
            //onButtonClick() {
            //        this.editItem(<ContactBookRow>{
            //            Caseno: this.caseno(),
            //        });
            //}
            ContactBookGridCustom.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var req = this.view.params;
                req.Sort = ['Checkbox', 'Advisedate desc'];
                return true;
            };
            ContactBookGridCustom.prototype.getQuickFilters = function () {
                var filter = _super.prototype.getQuickFilters.call(this);
                var casenoFilter = Q.tryFirst(filter, function (x) { return x.field == "Caseno"; });
                if (casenoFilter) {
                    casenoFilter.handler = function (h) {
                        if (h.active) {
                            h.request.Criteria = Serenity.Criteria.and([['Caseno'], 'like', "%".concat(h.value, "%")], null);
                        }
                    };
                    casenoFilter.init = function (w) {
                        w.value = "f";
                    };
                }
                var Advisedatefilter = Q.tryFirst(filter, function (x) { return x.field == "Advisedate"; });
                if (Advisedatefilter) {
                    Advisedatefilter.init = function (r) {
                        r.value = '';
                        var endDate = r.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                        endDate.value = 'now';
                    };
                }
                var CreateUserFilter = Q.tryFirst(filter, function (x) { return x.field == "CreateUser"; });
                if (CreateUserFilter) {
                    CreateUserFilter.init = function (z) {
                        z.value = '';
                    };
                }
                return filter;
            };
            ContactBookGridCustom.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var acol = Q.first(columns, function (x) { return x.field == "Alreadyknow"; });
                if (acol) {
                    acol.format = function (ctx) {
                        var item = ctx.item;
                        if (item.Alreadyknow == 1)
                            return "是";
                        else if (item.Alreadyknow == 0)
                            return "否";
                    };
                }
                columns.unshift({
                    field: "DeleteRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.ContactBookRow.deletePermission) && item.Checkbox != true)
                            return "<button class=\"btn btn-danger delete-row fa fa-trash\" title=\"\u522A\u9664\">\u522A\u9664</button>";
                        return "<button class=\"btn btn-danger fa fa-trash\" disabled title=\"\u522A\u9664\">\u522A\u9664</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.ContactBookRow.updatePermission) && item.Checkbox != true)
                            return "<button class=\"btn btn-primary edit-row fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                        return "<button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                columns.push({
                    field: "EditRecommand",
                    name: "",
                    format: function ( /*ctx*/) {
                        //  let item = <ContactBookRow>ctx.item;
                        if (Q.Authorization.hasPermission(Default.ContactBookRow.updatePermission))
                            return "<button class=\"btn btn-primary edit-row2 fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\u5EFA\u8B70\">\u7DE8\u8F2F\u5EFA\u8B70</button>";
                        return "<button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\u5EFA\u8B70\">\u7DE8\u8F2F\u5EFA\u8B70</button>";
                    },
                    width: 95,
                    minWidth: 80,
                    maxWidth: 95
                });
                return columns;
            };
            ContactBookGridCustom.prototype.getSlickOptions = function () {
                var slick = _super.prototype.getSlickOptions.call(this);
                slick.rowHeight = 35;
                return slick;
            };
            ContactBookGridCustom.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass("edit-row")) {
                    var dlg = new Default.ContactBookDialogCustom();
                    dlg.loadByIdAndOpenDialog(item.Oid);
                    Serenity.SubDialogHelper.bindToDataChange(dlg, this, function (p1, p2) {
                        _this.refresh();
                    });
                }
                else if ($(e.target).hasClass("delete-row")) {
                    Q.confirm("確定要刪除嗎?", function () {
                        Default.ContactBookService.Delete({
                            EntityId: item.Oid
                        }, function (r) {
                            Q.notifySuccess("刪除成功");
                            _this.refresh();
                        });
                    });
                }
                if ($(e.target).hasClass("edit-row2")) {
                    var dlg = new Default.ContactBookDialogCustom1('test');
                    dlg.loadByIdAndOpenDialog(item.Oid);
                    Serenity.SubDialogHelper.bindToDataChange(dlg, this, function (p1, p2) {
                        _this.refresh();
                    });
                }
            };
            ContactBookGridCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], ContactBookGridCustom);
            return ContactBookGridCustom;
        }(Serenity.EntityGrid));
        Default.ContactBookGridCustom = ContactBookGridCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpQuestionnaireDialog = /** @class */ (function (_super) {
            __extends(EmpQuestionnaireDialog, _super);
            function EmpQuestionnaireDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EmpQuestionnaireForm(_this.idPrefix);
                return _this;
            }
            EmpQuestionnaireDialog.prototype.getFormKey = function () { return Default.EmpQuestionnaireForm.formKey; };
            EmpQuestionnaireDialog.prototype.getIdProperty = function () { return Default.EmpQuestionnaireRow.idProperty; };
            EmpQuestionnaireDialog.prototype.getLocalTextPrefix = function () { return Default.EmpQuestionnaireRow.localTextPrefix; };
            //protected getNameProperty() { return EmpQuestionnaireRow.nameProperty; }
            EmpQuestionnaireDialog.prototype.getService = function () { return Default.EmpQuestionnaireService.baseUrl; };
            EmpQuestionnaireDialog.prototype.getDeletePermission = function () { return Default.EmpQuestionnaireRow.deletePermission; };
            EmpQuestionnaireDialog.prototype.getInsertPermission = function () { return Default.EmpQuestionnaireRow.insertPermission; };
            EmpQuestionnaireDialog.prototype.getUpdatePermission = function () { return Default.EmpQuestionnaireRow.updatePermission; };
            EmpQuestionnaireDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                console.log(this.entity.EmpNo);
            };
            EmpQuestionnaireDialog = __decorate([
                Serenity.Decorators.panel(true),
                Serenity.Decorators.registerClass()
            ], EmpQuestionnaireDialog);
            return EmpQuestionnaireDialog;
        }(Serenity.EntityDialog));
        Default.EmpQuestionnaireDialog = EmpQuestionnaireDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpQuestionnaireGrid = /** @class */ (function (_super) {
            __extends(EmpQuestionnaireGrid, _super);
            function EmpQuestionnaireGrid(container) {
                return _super.call(this, container) || this;
            }
            EmpQuestionnaireGrid.prototype.getColumnsKey = function () { return Default.EmpQuestionnaireColumns.columnsKey; };
            EmpQuestionnaireGrid.prototype.getDialogType = function () { return Default.EmpQuestionnaireDialog; };
            EmpQuestionnaireGrid.prototype.getIdProperty = function () { return Default.EmpQuestionnaireRow.idProperty; };
            EmpQuestionnaireGrid.prototype.getInsertPermission = function () { return Default.EmpQuestionnaireRow.insertPermission; };
            EmpQuestionnaireGrid.prototype.getLocalTextPrefix = function () { return Default.EmpQuestionnaireRow.localTextPrefix; };
            EmpQuestionnaireGrid.prototype.getService = function () { return Default.EmpQuestionnaireService.baseUrl; };
            EmpQuestionnaireGrid = __decorate([
                Serenity.Decorators.panel(true),
                Serenity.Decorators.registerClass()
            ], EmpQuestionnaireGrid);
            return EmpQuestionnaireGrid;
        }(Serenity.EntityGrid));
        Default.EmpQuestionnaireGrid = EmpQuestionnaireGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmployeeDialog = /** @class */ (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return Default.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return Default.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return Default.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return Default.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return Default.EmployeeService.baseUrl; };
            EmployeeDialog.prototype.getDeletePermission = function () { return Default.EmployeeRow.deletePermission; };
            EmployeeDialog.prototype.getInsertPermission = function () { return Default.EmployeeRow.insertPermission; };
            EmployeeDialog.prototype.getUpdatePermission = function () { return Default.EmployeeRow.updatePermission; };
            EmployeeDialog = __decorate([
                Serenity.Decorators.panel(true),
                Serenity.Decorators.registerClass()
            ], EmployeeDialog);
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        Default.EmployeeDialog = EmployeeDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmployeeGrid = /** @class */ (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return Default.EmployeeColumns.columnsKey; };
            EmployeeGrid.prototype.getDialogType = function () { return Default.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return Default.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getInsertPermission = function () { return Default.EmployeeRow.insertPermission; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return Default.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return Default.EmployeeService.baseUrl; };
            EmployeeGrid.prototype.createQuickSearchInput = function () { };
            EmployeeGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "tool-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "refresh-button"; }), 1);
                //buttons.push(
                //{
                //        title: Q.text("EMPQUESTIONNAIRE"),
                //    cssClass: 'text-blue',
                //    icon: 'fa-regular fa-book',
                //    onClick: () => {
                //        let dlg = new EmployeeDialog();
                //        dlg.loadNewAndOpenDialog(true);
                //        Serenity.SubDialogHelper.bindToDataChange(dlg, this, (p1, p2) => {
                //            this.refresh();
                //        });
                // }
                // }
                //)
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    title: "員工EXCEL"
                }));
                buttons.push({
                    title: 'EmployeePDF',
                    cssClass: "pdf-button",
                    icon: "fa fa-file-pdf-o",
                    onClick: function () {
                        Serene1.Common.ReportHelper.execute({
                            reportKey: "Serene1.EmployeeReport",
                        });
                    }
                });
                return buttons;
            };
            EmployeeGrid.prototype.getQuickFilters = function () {
                var filter = _super.prototype.getQuickFilters.call(this);
                var EmployeeNameFilter = Q.tryFirst(filter, function (x) { return x.field == "EmployeeName"; });
                if (EmployeeNameFilter) {
                    EmployeeNameFilter.handler = function (h) {
                        if (h.active) {
                            h.request.Criteria = Serenity.Criteria.and([['EmployeeName'], 'like', "%".concat(h.value, "%")], null);
                        }
                    };
                    EmployeeNameFilter.init = function (a) {
                        a.value = '';
                    };
                }
                var EmployeeIdFilter = Q.tryFirst(filter, function (x) { return x.field == "EmployeeId"; });
                if (EmployeeIdFilter) {
                    EmployeeIdFilter.handler = function (i) {
                        if (i.active) {
                            i.request.Criteria = Serenity.Criteria.and([['EmployeeId'], 'like', "%".concat(i.value, "%")], null);
                        }
                    };
                    EmployeeIdFilter.init = function (b) {
                        b.value = '';
                    };
                }
                var DeptIdFilter = Q.tryFirst(filter, function (x) { return x.field == "DeptId"; });
                if (DeptIdFilter) {
                    DeptIdFilter.handler = function (j) {
                        if (j.active) {
                            j.request.Criteria = Serenity.Criteria.and([['DeptId'], 'like', "%".concat(j.value, "%")], null);
                        }
                    };
                    DeptIdFilter.init = function (c) {
                        c.value = '';
                    };
                }
                var PostTypeFilter = Q.tryFirst(filter, function (x) { return x.field == "PostType"; });
                if (PostTypeFilter) {
                    PostTypeFilter.handler = function (v) {
                        if (v.active) {
                            v.request.Criteria = Serenity.Criteria.and([['PostType'], 'like', "%".concat(v.value, "%")], null);
                        }
                    };
                    PostTypeFilter.init = function (d) {
                        d.value = '';
                    };
                }
                return filter;
            };
            EmployeeGrid.prototype.getSlickOptions = function () {
                var slick = _super.prototype.getSlickOptions.call(this);
                slick.rowHeight = 35;
                return slick;
            };
            EmployeeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.EmpQuestionnaireRow.updatePermission) || Q.Authorization.hasPermission(Default.EmpQuestionnaireRow.insertPermission))
                            return "<button class=\"btn btn-warning edit-row fa fa-list-ul\" title=\"\u54E1\u5DE5\u6280\u80FD\u554F\u5377\">\u54E1\u5DE5\u6280\u80FD\u554F\u5377</button>";
                        return "<button class=\"btn btn-warning fa fa-list-ul\" disabled title=\"\u54E1\u5DE5\u6280\u80FD\u554F\u5377\">\u54E1\u5DE5\u6280\u80FD\u554F\u5377</button>";
                    },
                    width: 140,
                    minWidth: 80,
                    maxWidth: 140
                });
                return columns;
            };
            EmployeeGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.EmployeeId == null || item.EmployeeName == null || item.EmployeeEngName == null)
                    klass += " null ";
                return Q.trimToNull(klass);
            };
            EmployeeGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass("edit-row")) {
                    var dlg_1 = new Default.EmpQuestionnaireDialog();
                    var empQuestionnaireOid_1;
                    Default.EmpQuestionnaireService.List({
                        Criteria: [['EmpNo'], '=', item.EmployeeId],
                    }, function (response) {
                        // console.log(response); //找response 的屬性
                        if (response.Entities.length > 0) {
                            empQuestionnaireOid_1 = response.Entities[0].Oid;
                            dlg_1.loadByIdAndOpenDialog(empQuestionnaireOid_1, true);
                            Serenity.SubDialogHelper.bindToDataChange(dlg_1, _this, function (p1, p2) {
                                _this.refresh();
                            });
                        }
                        else {
                            var dlg_2 = new Default.EmpQuestionnaireDialog();
                            dlg_2.loadEntityAndOpenDialog({ EmpNo: item.EmployeeId, QDate: Q.formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss') }, true);
                            Serenity.SubDialogHelper.bindToDataChange(dlg_2, _this, function (p1, p2) {
                                _this.refresh();
                            });
                        }
                    }, { async: false });
                }
            };
            EmployeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeGrid);
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        Default.EmployeeGrid = EmployeeGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsDialog = /** @class */ (function (_super) {
            __extends(RepairFormDetailRecordsDialog, _super);
            function RepairFormDetailRecordsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RepairFormDetailRecordsForm(_this.idPrefix);
                return _this;
            }
            RepairFormDetailRecordsDialog.prototype.getFormKey = function () { return Default.RepairFormDetailRecordsForm.formKey; };
            RepairFormDetailRecordsDialog.prototype.getIdProperty = function () { return Default.RepairFormDetailRecordsRow.idProperty; };
            RepairFormDetailRecordsDialog.prototype.getLocalTextPrefix = function () { return Default.RepairFormDetailRecordsRow.localTextPrefix; };
            RepairFormDetailRecordsDialog.prototype.getNameProperty = function () { return Default.RepairFormDetailRecordsRow.nameProperty; };
            RepairFormDetailRecordsDialog.prototype.getService = function () { return Default.RepairFormDetailRecordsService.baseUrl; };
            RepairFormDetailRecordsDialog.prototype.getDeletePermission = function () { return Default.RepairFormDetailRecordsRow.deletePermission; };
            RepairFormDetailRecordsDialog.prototype.getInsertPermission = function () { return Default.RepairFormDetailRecordsRow.insertPermission; };
            RepairFormDetailRecordsDialog.prototype.getUpdatePermission = function () { return Default.RepairFormDetailRecordsRow.updatePermission; };
            RepairFormDetailRecordsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormDetailRecordsDialog);
            return RepairFormDetailRecordsDialog;
        }(Serenity.EntityDialog));
        Default.RepairFormDetailRecordsDialog = RepairFormDetailRecordsDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormDetailRecordsGrid = /** @class */ (function (_super) {
            __extends(RepairFormDetailRecordsGrid, _super);
            function RepairFormDetailRecordsGrid(container) {
                return _super.call(this, container) || this;
            }
            RepairFormDetailRecordsGrid.prototype.getColumnsKey = function () { return Default.RepairFormDetailRecordsColumns.columnsKey; };
            RepairFormDetailRecordsGrid.prototype.getDialogType = function () { return Default.RepairFormDetailRecordsDialog; };
            RepairFormDetailRecordsGrid.prototype.getIdProperty = function () { return Default.RepairFormDetailRecordsRow.idProperty; };
            RepairFormDetailRecordsGrid.prototype.getInsertPermission = function () { return Default.RepairFormDetailRecordsRow.insertPermission; };
            RepairFormDetailRecordsGrid.prototype.getLocalTextPrefix = function () { return Default.RepairFormDetailRecordsRow.localTextPrefix; };
            RepairFormDetailRecordsGrid.prototype.getService = function () { return Default.RepairFormDetailRecordsService.baseUrl; };
            RepairFormDetailRecordsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormDetailRecordsGrid);
            return RepairFormDetailRecordsGrid;
        }(Serenity.EntityGrid));
        Default.RepairFormDetailRecordsGrid = RepairFormDetailRecordsGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsGridDialog = /** @class */ (function (_super) {
            __extends(RepairFormRecordsGridDialog, _super);
            function RepairFormRecordsGridDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RepairFormRecordsFormCustom(_this.idPrefix);
                return _this;
            }
            RepairFormRecordsGridDialog.prototype.getFormKey = function () { return Default.RepairFormDetailRecordsFormCustom.formKey; };
            RepairFormRecordsGridDialog.prototype.getLocalTextPrefix = function () { return Default.RepairFormRecordsRow.localTextPrefix; };
            RepairFormRecordsGridDialog.prototype.getService = function () { return Default.RepairFormRecordsService.baseUrl; };
            RepairFormRecordsGridDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormRecordsGridDialog);
            return RepairFormRecordsGridDialog;
        }(Serene1.Common.GridEditorDialog));
        Default.RepairFormRecordsGridDialog = RepairFormRecordsGridDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
///// <reference path="../Common/Helpers/GridEditorBase.ts" />
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        /* import fld =RepairFormRecordsRow.Fields*/
        var RepairFormRecordsGridEditor = /** @class */ (function (_super) {
            __extends(RepairFormRecordsGridEditor, _super);
            function RepairFormRecordsGridEditor(container) {
                return _super.call(this, container) || this;
                //this.serviceCode = Q.getCookie("ServiceCode");
            }
            RepairFormRecordsGridEditor.prototype.getColumnsKey = function () { return "ServiceAD.RepairFormDetailRecordsCustom"; };
            RepairFormRecordsGridEditor.prototype.getDialogType = function () { return Default.RepairFormRecordsGridDialog; };
            RepairFormRecordsGridEditor.prototype.getLocalTextPrefix = function () { return Default.RepairFormDetailRecordsRow.localTextPrefix; };
            RepairFormRecordsGridEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "DeleteRow",
                    name: "",
                    format: function () {
                        if (Q.Authorization.hasPermission(Default.RepairFormRecordsRow.deletePermission))
                            return "<div><button class=\"btn btn-danger delete-row   fa fa-trash\" title=\"\u522A\u9664\">\u522A\u9664</button></div>";
                        return "<div><button class=\"btn btn-danger fa fa-trash\" disabled title=\"\u522A\u9664\">\u522A\u9664</button></div>";
                    },
                    width: 75,
                    minWidth: 75,
                    maxWidth: 75
                });
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function () {
                        if (Q.Authorization.hasPermission(Default.RepairFormRecordsRow.updatePermission))
                            return "<div><button class=\"btn btn-primary edit-row   fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button></div>";
                        return "<div><button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button></div>";
                    },
                    width: 75,
                    minWidth: 75,
                    maxWidth: 75
                });
                //columns.push(
                //    {
                //        field: "ContactPersonRow",
                //        name: "",
                //        format: () => {
                //            return `<div><button class="btn btn-primary ContactPerson-row  fa fa-phone" title="聯絡人">聯絡人</button></div>`;
                //        },
                //        width: 85,
                //        minWidth: 85,
                //        maxWidth: 85
                //    });
                return columns;
            };
            RepairFormRecordsGridEditor.prototype.getSlickOptions = function () {
                var gridOptions = _super.prototype.getSlickOptions.call(this);
                gridOptions.rowHeight = 40;
                return gridOptions;
            };
            RepairFormRecordsGridEditor.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass('edit-row')) {
                    this.createEntityDialog(this.getItemType(), function (dlg) {
                        var dialog = dlg;
                        dialog.onSave = function (opt, callback) { _this.save(opt, callback); };
                        dialog.loadEntityAndOpenDialog(item, false);
                    });
                    Serenity.SubDialogHelper.triggerDataChange(this);
                }
                else if ($(e.target).hasClass('delete-row')) {
                    Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                        _this.deleteEntity(item[_this.getIdProperty()]);
                    });
                }
                //else if ($(e.target).hasClass('ContactPerson-row')) {
                //    let dlg = new PublicBasic.ContactPersonCustomGridDialog(this.serviceCode, item.PatientNo, item.CaseNo);
                //    dlg.loadNewAndOpenDialog();
                //    //let dlg = new ContactPersonGridCustom(this.slickContainer.parent(), this.serviceCode, item.PatientNo);
                //}
            };
            RepairFormRecordsGridEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormRecordsGridEditor);
            return RepairFormRecordsGridEditor;
        }(Serene1.Common.GridEditorBase));
        Default.RepairFormRecordsGridEditor = RepairFormRecordsGridEditor;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsDialog = /** @class */ (function (_super) {
            __extends(RepairFormRecordsDialog, _super);
            function RepairFormRecordsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RepairFormRecordsForm(_this.idPrefix);
                return _this;
            }
            RepairFormRecordsDialog.prototype.getFormKey = function () { return Default.RepairFormRecordsForm.formKey; };
            RepairFormRecordsDialog.prototype.getIdProperty = function () { return Default.RepairFormRecordsRow.idProperty; };
            RepairFormRecordsDialog.prototype.getLocalTextPrefix = function () { return Default.RepairFormRecordsRow.localTextPrefix; };
            RepairFormRecordsDialog.prototype.getNameProperty = function () { return Default.RepairFormRecordsRow.nameProperty; };
            RepairFormRecordsDialog.prototype.getService = function () { return Default.RepairFormRecordsService.baseUrl; };
            RepairFormRecordsDialog.prototype.getDeletePermission = function () { return Default.RepairFormRecordsRow.deletePermission; };
            RepairFormRecordsDialog.prototype.getInsertPermission = function () { return Default.RepairFormRecordsRow.insertPermission; };
            RepairFormRecordsDialog.prototype.getUpdatePermission = function () { return Default.RepairFormRecordsRow.updatePermission; };
            RepairFormRecordsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormRecordsDialog);
            return RepairFormRecordsDialog;
        }(Serenity.EntityDialog));
        Default.RepairFormRecordsDialog = RepairFormRecordsDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsGrid = /** @class */ (function (_super) {
            __extends(RepairFormRecordsGrid, _super);
            function RepairFormRecordsGrid(container) {
                return _super.call(this, container) || this;
            }
            RepairFormRecordsGrid.prototype.getColumnsKey = function () { return Default.RepairFormRecordsColumns.columnsKey; };
            RepairFormRecordsGrid.prototype.getDialogType = function () { return Default.RepairFormRecordsDialog; };
            RepairFormRecordsGrid.prototype.getIdProperty = function () { return Default.RepairFormRecordsRow.idProperty; };
            RepairFormRecordsGrid.prototype.getInsertPermission = function () { return Default.RepairFormRecordsRow.insertPermission; };
            RepairFormRecordsGrid.prototype.getLocalTextPrefix = function () { return Default.RepairFormRecordsRow.localTextPrefix; };
            RepairFormRecordsGrid.prototype.getService = function () { return Default.RepairFormRecordsService.baseUrl; };
            RepairFormRecordsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormRecordsGrid);
            return RepairFormRecordsGrid;
        }(Serenity.EntityGrid));
        Default.RepairFormRecordsGrid = RepairFormRecordsGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsDialogCustom = /** @class */ (function (_super) {
            __extends(RepairFormRecordsDialogCustom, _super);
            function RepairFormRecordsDialogCustom() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RepairFormRecordsForm(_this.idPrefix);
                return _this;
            }
            RepairFormRecordsDialogCustom.prototype.getFormKey = function () { return Default.RepairFormRecordsFormCustom.formKey; };
            RepairFormRecordsDialogCustom.prototype.getIdProperty = function () { return Default.RepairFormRecordsRow.idProperty; };
            RepairFormRecordsDialogCustom.prototype.getLocalTextPrefix = function () { return Default.RepairFormRecordsRow.localTextPrefix; };
            RepairFormRecordsDialogCustom.prototype.getNameProperty = function () { return Default.RepairFormRecordsRow.nameProperty; };
            RepairFormRecordsDialogCustom.prototype.getService = function () { return Default.RepairFormRecordsService.baseUrl; };
            RepairFormRecordsDialogCustom.prototype.getDeletePermission = function () { return Default.RepairFormRecordsRow.deletePermission; };
            RepairFormRecordsDialogCustom.prototype.getInsertPermission = function () { return Default.RepairFormRecordsRow.insertPermission; };
            RepairFormRecordsDialogCustom.prototype.getUpdatePermission = function () { return Default.RepairFormRecordsRow.updatePermission; };
            RepairFormRecordsDialogCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormRecordsDialogCustom);
            return RepairFormRecordsDialogCustom;
        }(Serenity.EntityDialog));
        Default.RepairFormRecordsDialogCustom = RepairFormRecordsDialogCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RepairFormRecordsGridCustom = /** @class */ (function (_super) {
            __extends(RepairFormRecordsGridCustom, _super);
            function RepairFormRecordsGridCustom(container) {
                return _super.call(this, container) || this;
            }
            RepairFormRecordsGridCustom.prototype.getColumnsKey = function () { return Default.RepairFormRecordsColumnsCustom.columnsKey; };
            RepairFormRecordsGridCustom.prototype.getDialogType = function () { return Default.RepairFormRecordsDialogCustom; };
            RepairFormRecordsGridCustom.prototype.getIdProperty = function () { return Default.RepairFormRecordsRow.idProperty; };
            RepairFormRecordsGridCustom.prototype.getInsertPermission = function () { return Default.RepairFormRecordsRow.insertPermission; };
            RepairFormRecordsGridCustom.prototype.getLocalTextPrefix = function () { return Default.RepairFormRecordsRow.localTextPrefix; };
            RepairFormRecordsGridCustom.prototype.getService = function () { return Default.RepairFormRecordsService.baseUrl; };
            RepairFormRecordsGridCustom.prototype.getQuickFilters = function () {
                var filter = _super.prototype.getQuickFilters.call(this);
                var RepairEmpIdFilter = Q.tryFirst(filter, function (x) { return x.field == "RepairEmpId"; });
                if (RepairEmpIdFilter) {
                    RepairEmpIdFilter.init = function (z) {
                        z.value = '';
                    };
                }
                var Advisedatefilter = Q.tryFirst(filter, function (x) { return x.field == "RepairDate"; });
                if (Advisedatefilter) {
                    Advisedatefilter.init = function (r) {
                        r.value = '';
                        var endDate = r.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                        endDate.value = '';
                    };
                }
                return filter;
            };
            RepairFormRecordsGridCustom.prototype.getSlickOptions = function () {
                var slick = _super.prototype.getSlickOptions.call(this);
                slick.rowHeight = 35;
                return slick;
            };
            RepairFormRecordsGridCustom.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: "DeleteRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.RepairFormRecordsRow.deletePermission))
                            return "<button class=\"btn btn-danger delete-row fa fa-trash\" title=\"\u522A\u9664\">\u522A\u9664</button>";
                        return "<button class=\"btn btn-danger fa fa-trash\" disabled title=\"\u522A\u9664\">\u522A\u9664</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                columns.unshift({
                    field: "EditRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.RepairFormRecordsRow.updatePermission))
                            return "<button class=\"btn btn-primary edit-row fa fa-pencil-square-o\" title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                        return "<button class=\"btn btn-primary fa fa-pencil-square-o\" disabled title=\"\u7DE8\u8F2F\">\u7DE8\u8F2F</button>";
                    },
                    width: 80,
                    minWidth: 80,
                    maxWidth: 80
                });
                return columns;
            };
            RepairFormRecordsGridCustom.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                var item = this.itemAt(row);
                e.preventDefault();
                if ($(e.target).hasClass("edit-row")) {
                    var dlg = new Default.RepairFormRecordsDialogCustom();
                    dlg.loadByIdAndOpenDialog(item.Oid);
                    Serenity.SubDialogHelper.bindToDataChange(dlg, this, function (p1, p2) {
                        _this.refresh();
                    });
                }
                else if ($(e.target).hasClass("delete-row")) {
                    Q.confirm("確定要刪除嗎?", function () {
                        Default.RepairFormRecordsService.Delete({
                            EntityId: item.Oid
                        }, function (r) {
                            Q.notifySuccess("刪除成功");
                            _this.refresh();
                        });
                    });
                }
            };
            RepairFormRecordsGridCustom = __decorate([
                Serenity.Decorators.registerClass()
            ], RepairFormRecordsGridCustom);
            return RepairFormRecordsGridCustom;
        }(Serenity.EntityGrid));
        Default.RepairFormRecordsGridCustom = RepairFormRecordsGridCustom;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var AlreadyKnowEditor = /** @class */ (function (_super) {
            __extends(AlreadyKnowEditor, _super);
            function AlreadyKnowEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('0', "否");
                _this.addOption('1', "是");
                return _this;
            }
            AlreadyKnowEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AlreadyKnowEditor);
            return AlreadyKnowEditor;
        }(Serenity.Select2Editor));
        Editor.AlreadyKnowEditor = AlreadyKnowEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var AreaEditor = /** @class */ (function (_super) {
            __extends(AreaEditor, _super);
            function AreaEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('1', "花蓮市");
                _this.addOption('2', "秀林鄉");
                _this.addOption('3', "吉安鄉");
                _this.addOption('4', "壽豐鄉");
                _this.addOption('5', "鳳林鄉");
                _this.addOption('6', "萬榮鄉");
                return _this;
            }
            AreaEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], AreaEditor);
            return AreaEditor;
        }(Serenity.Select2Editor));
        Editor.AreaEditor = AreaEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var BodyEditor = /** @class */ (function (_super) {
            __extends(BodyEditor, _super);
            function BodyEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addRadio('F', "壯碩");
                _this.addRadio('T', "纖細");
                _this.addRadio('M', "中等");
                return _this;
            }
            BodyEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], BodyEditor);
            return BodyEditor;
        }(Serenity.RadioButtonEditor));
        Editor.BodyEditor = BodyEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var CreateUserLookUpEditor = /** @class */ (function (_super) {
            __extends(CreateUserLookUpEditor, _super);
            function CreateUserLookUpEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                //Serene1.Administration.UserService.List({}, (r) => {
                //    if (r.TotalCount > 0) {
                //        $.each(r.Entities, (i, m) => {
                //            this.addOption(m.UserId.toString(), m.DisplayName);
                //        });
                //    }
                //}, { async: false });
                Serene1.Administration.UserRow.getLookup().items.forEach(function (m, i) {
                    var _a;
                    _this.addOption(m.UserId.toString(), ((_a = m.DisplayName) !== null && _a !== void 0 ? _a : "未設定"));
                });
                return _this;
            }
            CreateUserLookUpEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CreateUserLookUpEditor);
            return CreateUserLookUpEditor;
        }(Serenity.Select2Editor));
        Editor.CreateUserLookUpEditor = CreateUserLookUpEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var LanguageEditor = /** @class */ (function (_super) {
            __extends(LanguageEditor, _super);
            function LanguageEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('1', "國語");
                _this.addOption('2', "台語");
                _this.addOption('3', "太魯閣語");
                _this.addOption('4', "阿美族語");
                _this.addOption('5', "布農族語");
                _this.addOption('6', "排灣族語");
                _this.addOption('7', "印尼語");
                _this.addOption('8', "越南語");
                _this.addOption('9', "英語");
                _this.addOption('10', "日語");
                return _this;
            }
            LanguageEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], LanguageEditor);
            return LanguageEditor;
        }(Serenity.Select2Editor));
        Editor.LanguageEditor = LanguageEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var LevelEditor = /** @class */ (function (_super) {
            __extends(LevelEditor, _super);
            function LevelEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('1', "身心障礙訓練");
                _this.addOption('2', "失智訓練");
                return _this;
            }
            LevelEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], LevelEditor);
            return LevelEditor;
        }(Serenity.Select2Editor));
        Editor.LevelEditor = LevelEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var LookUpEditor = /** @class */ (function (_super) {
            __extends(LookUpEditor, _super);
            function LookUpEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                Serene1.Default.CaseServiceDataService.List({}, function (r) {
                    if (r.TotalCount > 0) {
                        $.each(r.Entities, function (i, m) {
                            _this.addOption(m.CaseNo, m.PatientId);
                        });
                    }
                }, { async: false });
                return _this;
                //    Serene1.Default.CaseServiceDataRow.getLookup().items.forEach((m, i) => {
                //        this.addOption(m.CaseNo, (m.RocId ?? "未設定"));
                //    })
            }
            LookUpEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], LookUpEditor);
            return LookUpEditor;
        }(Serenity.Select2Editor));
        Editor.LookUpEditor = LookUpEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var PhaseEditor = /** @class */ (function (_super) {
            __extends(PhaseEditor, _super);
            function PhaseEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('A', "上午");
                _this.addOption('P', "下午");
                _this.addOption('T', "全日");
                _this.addOption('N', "夜間18:00-20:00");
                return _this;
            }
            PhaseEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhaseEditor);
            return PhaseEditor;
        }(Serenity.Select2Editor));
        Editor.PhaseEditor = PhaseEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var SexEditor = /** @class */ (function (_super) {
            __extends(SexEditor, _super);
            function SexEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addRadio('M', "    男  ");
                _this.addRadio('F', "    女  ");
                return _this;
            }
            SexEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], SexEditor);
            return SexEditor;
        }(Serenity.RadioButtonEditor));
        Editor.SexEditor = SexEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Editor;
    (function (Editor) {
        var WorkYearEditor = /** @class */ (function (_super) {
            __extends(WorkYearEditor, _super);
            function WorkYearEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('1', "2年");
                _this.addOption('2', "3-5年");
                _this.addOption('3', "6-9年");
                _this.addOption('4', ">10年");
                return _this;
            }
            WorkYearEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], WorkYearEditor);
            return WorkYearEditor;
        }(Serenity.Select2Editor));
        Editor.WorkYearEditor = WorkYearEditor;
    })(Editor = Serene1.Editor || (Serene1.Editor = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.form.Password.value = 'serenity';
                _this.form.Username.value = 'admin';
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n    <h2 class=\"text-center p-4\">\n        <img src=\"".concat(Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png"), "\"\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\n            width=\"50\" height=\"50\" /> Serene1\n    </h2>\n\n    <div class=\"s-Panel p-4\">\n        <h5 class=\"text-center my-4\">").concat(Q.text("Forms.Membership.Login.LoginToYourAccount"), "</h5>\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"px-field\">\n                <a class=\"float-end text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/ForgotPassword'), "\">\n                    ").concat(Q.text("Forms.Membership.Login.ForgotPassword"), "\n                </a>\n            </div>\n            <div class=\"px-field\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary my-3 w-100\">\n                    ").concat(Q.text("Forms.Membership.Login.SignInButton"), "\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"text-center mt-2\">\n        <a class=\"text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/SignUp'), "\">").concat(Q.text("Forms.Membership.Login.SignUpButton"), "</a>\n    </div>   \n");
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel.prototype.getTemplate = function () {
                return "<div class=\"s-Panel\">\n    <h3 class=\"page-title mb-4 text-center\">".concat(Q.text("Forms.Membership.ChangePassword.FormTitle"), "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_PropertyGrid\"></div>\n        <div class=\"px-field mt-4\">\n            <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary w-100\">\n                ").concat(Q.text("Forms.Membership.ChangePassword.SubmitButton"), "\n            </button>\n        </div>\n    </form>\n</div>");
            };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyZW5lMS5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnRDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50Q29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnREZXRhaWxGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50Rm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5uY2VtZW50RGV0YWlsQ29sdW1uc0N1c3RvbTEudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DYXNlU2VydmljZURhdGFDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNvbnRhY3RCb29rQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNvbnRhY3RCb29rQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNvbnRhY3RCb29rRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNvbnRhY3RCb29rRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNvbnRhY3RCb29rRm9ybUN1c3RvbTEudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNvbnRhY3RCb29rU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkVtcFF1ZXN0aW9ubmFpcmVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBRdWVzdGlvbm5haXJlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkVtcGxveWVlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpbkZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpblJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2NyaXB0VXNlckRlZmluaXRpb24udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGV4dHMudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vUm9sZVBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1RyYW5zbGF0aW9uR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL0F1dGhlbnRpY2F0aW9uL0F1dGhvcml6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1Blcm1pc3Npb25DaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXNlclBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1JvbGVDaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXNlclJvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRIZWxwZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1NjcmlwdEluaXRpYWxpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yQmFzZS50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vU2lkZWJhclNlYXJjaC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnQvQW5ub3VuY2VtZW50RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudC9Bbm5vdW5jZW1lbnRHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudEN1c3RvbS9Bbm5vdW5jZW1lbnREaWFsb2dDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQW5ub3VuY2VtZW50Q3VzdG9tL0Fubm91bmNlbWVudEdyaWRDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsL0Fubm91bmNlbWVudERldGFpbERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvQW5ub3VuY2VtZW50RGV0YWlsR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWxDdXN0b20vQW5ub3VuY2VtZW50R3JpZERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWxDdXN0b20vQW5ub3VuY2VtZW50R3JpZEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9DYXNlU2VydmljZURhdGEvQ2FzZVNlcnZpY2VEYXRhRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9DYXNlU2VydmljZURhdGFHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YUN1c3RvbS9DYXNlU2VydmljZURhdGFEaWFsb2dDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhQ3VzdG9tL0Nhc2VTZXJ2aWNlRGF0YUdyaWRDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ29udGFjdEJvb2svQ29udGFjdEJvb2tEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ29udGFjdEJvb2svQ29udGFjdEJvb2tHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0NvbnRhY3RCb29rQ3VzdG9tL0NvbnRhY3RCb29rRGlhbG9nQ3VzdG9tLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0NvbnRhY3RCb29rQ3VzdG9tL0NvbnRhY3RCb29rRGlhbG9nQ3VzdG9tMS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Db250YWN0Qm9va0N1c3RvbS9Db250YWN0Qm9va0dyaWRDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9FbXBRdWVzdGlvbm5haXJlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvRW1wUXVlc3Rpb25uYWlyZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wbG95ZWUvRW1wbG95ZWVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wbG95ZWUvRW1wbG95ZWVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0dyaWREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b20vUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL1JlcGFpckZvcm1SZWNvcmRzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL1JlcGFpckZvcm1SZWNvcmRzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0dyaWRDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9BbHJlYWFkeUtub3dFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9BcmVhRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvQm9keUVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL0NyZWF0ZVVzZXJMb29rVXBFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9MYW5ndWFnZUVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL0xldmVsRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvTG9va1VwRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvUGhhc2VFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9TZXhFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9Xb3JrWWVhckVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0xvZ2luUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvU2ln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LGFBQWEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsZUFBZSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxFQUFDLFdBQVcsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxFQUFDLGdCQUFnQixFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBQyx1QkFBdUIsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxF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QyxDQUFDOzRCQUM5QyxDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDO3FCQUNKLENBQUMsQ0FBQztnQkFFUCxDQUFDLENBQUMsQ0FBQzs7WUFDUCxDQUFDO1lBM0NTLGdDQUFVLEdBQXBCLGNBQXlCLE9BQU8sV0FBQSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUY1QyxXQUFXO2dCQUR2QixRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtlQUN2QixXQUFXLENBOEN2QjtZQUFELGtCQUFDO1NBQUEsQUE5Q0QsQ0FBaUMsUUFBUSxDQUFDLGFBQWEsR0E4Q3REO1FBOUNZLHNCQUFXLGNBOEN2QixDQUFBO0lBQ0wsQ0FBQyxFQWxEaUIsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFrRDNCO0FBQUQsQ0FBQyxFQWxEUyxPQUFPLEtBQVAsT0FBTyxRQWtEaEIiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUZvcm0ge1xyXG4gICAgICAgIExhbmd1YWdlSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYW5ndWFnZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTGFuZ3VhZ2VGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExhbmd1YWdlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogc3RyaW5nO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdMYW5ndWFnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxMYW5ndWFnZVJvdz4oJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlSWQgPSBcIkxhbmd1YWdlSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VOYW1lID0gXCJMYW5ndWFnZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFJvbGVSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFJvbGVSb3c+KCdBZG1pbmlzdHJhdGlvbi5Sb2xlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUm9sZU5hbWUgPSBcIlJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkl0ZW0ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlcXVlc3Qge1xyXG4gICAgICAgIFNvdXJjZUxhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXNlckZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogVXNlclBlcm1pc3Npb25Sb3dbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgVXNlclJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclJvbGVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUm9sZUlkID0gXCJVc2VyUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkSGFzaD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZFNhbHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlckltYWdlPzogc3RyaW5nO1xyXG4gICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgVXNlckltYWdlID0gXCJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgUGFzc3dvcmQgPSBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkQ29uZmlybSA9IFwiUGFzc3dvcmRDb25maXJtXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVW5kZWxldGUocmVxdWVzdDogU2VyZW5pdHkuVW5kZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlVuZGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFVuZGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1VuZGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdVbmRlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkFubm91bmNlbWVudCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRDb2x1bW5zQ3VzdG9tIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkFubm91bmNlbWVudEN1c3RvbSc7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50RGV0YWlsJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBbm5vdW5jZW1lbnREZXRhaWxGb3JtIHtcclxuICAgICAgICBBbm5vdW5jZW1lbnRzSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVGFyZ2V0VXNlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGx5Q29udGVudDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGx5RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBSZXBseVVzZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcmVhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVcGRhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREZXRhaWxGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkFubm91bmNlbWVudERldGFpbCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQW5ub3VuY2VtZW50RGV0YWlsRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQW5ub3VuY2VtZW50RGV0YWlsRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQW5ub3VuY2VtZW50RGV0YWlsRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZW1lbnRzSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGFyZ2V0VXNlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXBseUNvbnRlbnQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwbHlEYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGx5VXNlcicsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGV1c2VyJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZWRhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRldXNlcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVkYXRlJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBbm5vdW5jZW1lbnREZXRhaWxGb3JtQ3VzdG9tIHtcclxuICAgICAgICBUYXJnZXRVc2VyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbEZvcm1DdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1NlcnZpY2VBRC5Bbm5vdW5jZW1lbnREZXRhaWxDdXN0b20nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUFubm91bmNlbWVudERldGFpbEZvcm1DdXN0b20uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEFubm91bmNlbWVudERldGFpbEZvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEFubm91bmNlbWVudERldGFpbEZvcm1DdXN0b20sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVGFyZ2V0VXNlcicsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQW5ub3VuY2VtZW50RGV0YWlsUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQW5ub3VuY2VtZW50c0lkPzogbnVtYmVyO1xyXG4gICAgICAgIFRhcmdldFVzZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwbHlDb250ZW50Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGx5RGF0ZT86IHN0cmluZztcclxuICAgICAgICBSZXBseVVzZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRldXNlcj86IG51bWJlcjtcclxuICAgICAgICBDcmVhdGVkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlZGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFubm91bmNlbWVudERldGFpbFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1RhcmdldFVzZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnREZXRhaWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50RGV0YWlsOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBBbm5vdW5jZW1lbnRzSWQgPSBcIkFubm91bmNlbWVudHNJZFwiLFxyXG4gICAgICAgICAgICBUYXJnZXRVc2VyID0gXCJUYXJnZXRVc2VyXCIsXHJcbiAgICAgICAgICAgIFJlcGx5Q29udGVudCA9IFwiUmVwbHlDb250ZW50XCIsXHJcbiAgICAgICAgICAgIFJlcGx5RGF0ZSA9IFwiUmVwbHlEYXRlXCIsXHJcbiAgICAgICAgICAgIFJlcGx5VXNlciA9IFwiUmVwbHlVc2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXIgPSBcIkNyZWF0ZXVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRlZGF0ZSA9IFwiQ3JlYXRlZGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGV1c2VyID0gXCJVcGRhdGV1c2VyXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZWRhdGUgPSBcIlVwZGF0ZWRhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQW5ub3VuY2VtZW50RGV0YWlsU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QW5ub3VuY2VtZW50RGV0YWlsUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QW5ub3VuY2VtZW50RGV0YWlsUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEFubm91bmNlbWVudERldGFpbFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBbm5vdW5jZW1lbnREZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QW5ub3VuY2VtZW50RGV0YWlsU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBbm5vdW5jZW1lbnRGb3JtIHtcclxuICAgICAgICBTZXJ2aWNlQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFubm91bmNlVHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFubm91bmNlRGVzYzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFubm91bmNlUHJpb3JpdHk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUYXJnZXRSb2xlSWRzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGFyZ2V0VXNlcklkczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlbGVhc2VEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEF0dGFjaG1lbnRzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDcmVhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUFubm91bmNlbWVudEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEFubm91bmNlbWVudEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEFubm91bmNlbWVudEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZUNvZGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlRGVzYycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZVByaW9yaXR5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhcmdldFJvbGVJZHMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGFyZ2V0VXNlcklkcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWxlYXNlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdHRhY2htZW50cycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGV1c2VyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZWRhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRldXNlcicsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVkYXRlJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tIHtcclxuICAgICAgICBTZXJ2aWNlQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFubm91bmNlVHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFubm91bmNlRGVzYzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFubm91bmNlUHJpb3JpdHk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUYXJnZXRSb2xlSWRzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGFyZ2V0VXNlcklkczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlbGVhc2VEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIEF0dGFjaG1lbnRzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGV0YWlsTGlzdDogQW5ub3VuY2VtZW50R3JpZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50Rm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnRDdXN0b20nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUFubm91bmNlbWVudEZvcm1DdXN0b20uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEFubm91bmNlbWVudEZvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gQW5ub3VuY2VtZW50R3JpZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VDb2RlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlVHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZURlc2MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VQcmlvcml0eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXRSb2xlSWRzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhcmdldFVzZXJJZHMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZURhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQXR0YWNobWVudHMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGV0YWlsTGlzdCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQW5ub3VuY2VtZW50Um93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgU2VydmljZUNvZGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQW5ub3VuY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIEFubm91bmNlRGVzYz86IHN0cmluZztcclxuICAgICAgICBBbm5vdW5jZVByaW9yaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFJvbGVJZHM/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VXNlcklkcz86IHN0cmluZztcclxuICAgICAgICBSZWxlYXNlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBBdHRhY2htZW50cz86IHN0cmluZztcclxuICAgICAgICBDcmVhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIENyZWF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRldXNlcj86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIERldGFpbExpc3Q/OiBBbm5vdW5jZW1lbnREZXRhaWxSb3dbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFubm91bmNlbWVudFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1NlcnZpY2VDb2RlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50JztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudDpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50OkFkZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50OlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50Ok1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgU2VydmljZUNvZGUgPSBcIlNlcnZpY2VDb2RlXCIsXHJcbiAgICAgICAgICAgIEFubm91bmNlVHlwZSA9IFwiQW5ub3VuY2VUeXBlXCIsXHJcbiAgICAgICAgICAgIEFubm91bmNlRGVzYyA9IFwiQW5ub3VuY2VEZXNjXCIsXHJcbiAgICAgICAgICAgIEFubm91bmNlUHJpb3JpdHkgPSBcIkFubm91bmNlUHJpb3JpdHlcIixcclxuICAgICAgICAgICAgVGFyZ2V0Um9sZUlkcyA9IFwiVGFyZ2V0Um9sZUlkc1wiLFxyXG4gICAgICAgICAgICBUYXJnZXRVc2VySWRzID0gXCJUYXJnZXRVc2VySWRzXCIsXHJcbiAgICAgICAgICAgIFJlbGVhc2VEYXRlID0gXCJSZWxlYXNlRGF0ZVwiLFxyXG4gICAgICAgICAgICBBdHRhY2htZW50cyA9IFwiQXR0YWNobWVudHNcIixcclxuICAgICAgICAgICAgQ3JlYXRldXNlciA9IFwiQ3JlYXRldXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGVkYXRlID0gXCJDcmVhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZXVzZXIgPSBcIlVwZGF0ZXVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlZGF0ZSA9IFwiVXBkYXRlZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZXRhaWxMaXN0ID0gXCJEZXRhaWxMaXN0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFubm91bmNlbWVudFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvQW5ub3VuY2VtZW50JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEFubm91bmNlbWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEFubm91bmNlbWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxBbm5vdW5jZW1lbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8QW5ub3VuY2VtZW50Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50L1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50L0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnQvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnQvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkFubm91bmNlbWVudFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5uY2VtZW50RGV0YWlsQ29sdW1uc0N1c3RvbTEge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NlcnZpY2VBRC5Bbm5vdW5jZW1lbnREZXRhaWxDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIENhc2VTZXJ2aWNlRGF0YUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFDb2x1bW5zQ3VzdG9tIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YUN1c3RvbSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhc2VTZXJ2aWNlRGF0YUZvcm0ge1xyXG4gICAgICAgIENhc2VObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhdGllbnRJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJvY0lkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBDcmVhdGVVc2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlVXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGEnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNhc2VTZXJ2aWNlRGF0YUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENhc2VTZXJ2aWNlRGF0YUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhc2VTZXJ2aWNlRGF0YUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhdGllbnRJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb2NJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZVVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VyJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tIHtcclxuICAgICAgICBDYXNlTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXRpZW50SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSb2NJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlVXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZVVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhQ3VzdG9tJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc2VObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXRpZW50SWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUm9jSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVVc2VyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZURhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcicsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2FzZVNlcnZpY2VEYXRhUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2FzZU5vPzogc3RyaW5nO1xyXG4gICAgICAgIFBhdGllbnRJZD86IHN0cmluZztcclxuICAgICAgICBSb2NJZD86IHN0cmluZztcclxuICAgICAgICBDcmVhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VyPzogbnVtYmVyO1xyXG4gICAgICAgIENyZWF0ZVVzZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2FzZVNlcnZpY2VEYXRhUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdPaWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnQ2FzZU5vJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0xvb2t1cC5DYXNlU2VydmljZURhdGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPENhc2VTZXJ2aWNlRGF0YVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q2FzZVNlcnZpY2VEYXRhUm93PignTG9va3VwLkNhc2VTZXJ2aWNlRGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6RGVsZXRlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpNb2RpZnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE9pZCA9IFwiT2lkXCIsXHJcbiAgICAgICAgICAgIENhc2VObyA9IFwiQ2FzZU5vXCIsXHJcbiAgICAgICAgICAgIFBhdGllbnRJZCA9IFwiUGF0aWVudElkXCIsXHJcbiAgICAgICAgICAgIFJvY0lkID0gXCJSb2NJZFwiLFxyXG4gICAgICAgICAgICBDcmVhdGVEYXRlID0gXCJDcmVhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZVVzZXIgPSBcIkNyZWF0ZVVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VyID0gXCJVcGRhdGVVc2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZVVzZXJOYW1lID0gXCJDcmVhdGVVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VyTmFtZSA9IFwiVXBkYXRlVXNlck5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2FzZVNlcnZpY2VEYXRhU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9DYXNlU2VydmljZURhdGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2FzZVNlcnZpY2VEYXRhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2FzZVNlcnZpY2VEYXRhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENhc2VTZXJ2aWNlRGF0YVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDYXNlU2VydmljZURhdGFSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9DYXNlU2VydmljZURhdGEvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9DYXNlU2VydmljZURhdGEvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9DYXNlU2VydmljZURhdGEvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2FzZVNlcnZpY2VEYXRhU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQ29udGFjdEJvb2snO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tDb2x1bW5zQ3VzdG9tIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkNvbnRhY3RCb29rQ3VzdG9tJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEJvb2tGb3JtIHtcclxuICAgICAgICBDYXNlbm86IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgQWxyZWFkeWtub3c6IEVkaXRvci5BbHJlYWR5S25vd0VkaXRvcjtcclxuICAgICAgICBBZHZpc2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZHZpc2VkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQ29udGFjdEJvb2snO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNvbnRhY3RCb29rRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ29udGFjdEJvb2tGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBFZGl0b3IuTG9va1VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRhdGVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ29udGFjdEJvb2tGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc2VubycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbHJlYWR5a25vdycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZHZpc2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlZGF0ZScsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEJvb2tGb3JtQ3VzdG9tIHtcclxuICAgICAgICBDYXNlbm86IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgQWR2aXNlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBBZHZpc2U6IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIEFscmVhZHlrbm93OiBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3I7XHJcbiAgICAgICAgQ2hlY2tib3g6IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Db250YWN0Qm9va0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ29udGFjdEJvb2tGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDb250YWN0Qm9va0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5Cb29sZWFuRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENvbnRhY3RCb29rRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlbm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlZGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZHZpc2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQWxyZWFkeWtub3cnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hlY2tib3gnLCB3NFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnRhY3RCb29rRm9ybUN1c3RvbTEge1xyXG4gICAgICAgIEFkdmlzZTogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgU2hvd1RleHQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbHJlYWR5a25vdzogRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0Zvcm1DdXN0b20xIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkNvbnRhY3RCb29rQ3VzdG9tMSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ29udGFjdEJvb2tGb3JtQ3VzdG9tMS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ29udGFjdEJvb2tGb3JtQ3VzdG9tMS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENvbnRhY3RCb29rRm9ybUN1c3RvbTEsIFtcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nob3dUZXh0JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FscmVhZHlrbm93JywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb250YWN0Qm9va1JvdyB7XHJcbiAgICAgICAgT2lkPzogbnVtYmVyO1xyXG4gICAgICAgIENhc2Vubz86IHN0cmluZztcclxuICAgICAgICBBbHJlYWR5a25vdz86IG51bWJlcjtcclxuICAgICAgICBBbHJlYWR5a25vd0V4cHJlPzogc3RyaW5nO1xyXG4gICAgICAgIEFkdmlzZT86IHN0cmluZztcclxuICAgICAgICBBZHZpc2VkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2hlY2tib3g/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29udGFjdEJvb2tSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDYXNlbm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5Db250YWN0Qm9vayc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpDb250YWN0Qm9vazpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6Q29udGFjdEJvb2s6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpDb250YWN0Qm9vazpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkNvbnRhY3RCb29rOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgQ2FzZW5vID0gXCJDYXNlbm9cIixcclxuICAgICAgICAgICAgQWxyZWFkeWtub3cgPSBcIkFscmVhZHlrbm93XCIsXHJcbiAgICAgICAgICAgIEFscmVhZHlrbm93RXhwcmUgPSBcIkFscmVhZHlrbm93RXhwcmVcIixcclxuICAgICAgICAgICAgQWR2aXNlID0gXCJBZHZpc2VcIixcclxuICAgICAgICAgICAgQWR2aXNlZGF0ZSA9IFwiQWR2aXNlZGF0ZVwiLFxyXG4gICAgICAgICAgICBDcmVhdGVVc2VyID0gXCJDcmVhdGVVc2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZURhdGUgPSBcIkNyZWF0ZURhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlciA9IFwiVXBkYXRlVXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZVVzZXJOYW1lID0gXCJDcmVhdGVVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VyTmFtZSA9IFwiVXBkYXRlVXNlck5hbWVcIixcclxuICAgICAgICAgICAgQ2hlY2tib3ggPSBcIkNoZWNrYm94XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENvbnRhY3RCb29rU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9Db250YWN0Qm9vayc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDb250YWN0Qm9va1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENvbnRhY3RCb29rUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENvbnRhY3RCb29rUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENvbnRhY3RCb29rUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvQ29udGFjdEJvb2svQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0NvbnRhY3RCb29rL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0NvbnRhY3RCb29rL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Db250YWN0Qm9va1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgRW1wUXVlc3Rpb25uYWlyZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wUXVlc3Rpb25uYWlyZUZvcm0ge1xyXG4gICAgICAgIEFnZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBIZWlnaHQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgV2VpZ2h0OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFNleDogRWRpdG9yLlNleEVkaXRvcjtcclxuICAgICAgICBFbXBMYW5ndWFnZTogRWRpdG9yLkxhbmd1YWdlRWRpdG9yO1xyXG4gICAgICAgIEVtcEJvZHk6IEVkaXRvci5Cb2R5RWRpdG9yO1xyXG4gICAgICAgIEVtcFdvcmtZZWFyOiBFZGl0b3IuV29ya1llYXJFZGl0b3I7XHJcbiAgICAgICAgRW1wVGltZVBoYXNlOiBFZGl0b3IuUGhhc2VFZGl0b3I7XHJcbiAgICAgICAgRW1wQXJlYTogRWRpdG9yLkFyZWFFZGl0b3I7XHJcbiAgICAgICAgRW1wU2VydmljZUxldmVsOiBFZGl0b3IuTGV2ZWxFZGl0b3I7XHJcbiAgICAgICAgRW1wTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBRRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wUXVlc3Rpb25uYWlyZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRW1wUXVlc3Rpb25uYWlyZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEVtcFF1ZXN0aW9ubmFpcmVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBFZGl0b3IuU2V4RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gRWRpdG9yLkxhbmd1YWdlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gRWRpdG9yLkJvZHlFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBFZGl0b3IuV29ya1llYXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzUgPSBFZGl0b3IuUGhhc2VFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzYgPSBFZGl0b3IuQXJlYUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NyA9IEVkaXRvci5MZXZlbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3OCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc5ID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEVtcFF1ZXN0aW9ubmFpcmVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FnZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdIZWlnaHQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnV2VpZ2h0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NleCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBMYW5ndWFnZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBCb2R5JywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcFdvcmtZZWFyJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcFRpbWVQaGFzZScsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBBcmVhJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcFNlcnZpY2VMZXZlbCcsIHc3LFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBObycsIHc4LFxyXG4gICAgICAgICAgICAgICAgICAgICdRRGF0ZScsIHc5XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wUXVlc3Rpb25uYWlyZVJvdyB7XHJcbiAgICAgICAgT2lkPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcE5vPzogc3RyaW5nO1xyXG4gICAgICAgIFFEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEFnZT86IG51bWJlcjtcclxuICAgICAgICBIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAgICAgV2VpZ2h0PzogbnVtYmVyO1xyXG4gICAgICAgIFNleD86IHN0cmluZztcclxuICAgICAgICBFbXBMYW5ndWFnZT86IHN0cmluZztcclxuICAgICAgICBFbXBCb2R5Pzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFdvcmtZZWFyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFRpbWVQaGFzZT86IHN0cmluZztcclxuICAgICAgICBFbXBBcmVhPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFNlcnZpY2VMZXZlbD86IHN0cmluZztcclxuICAgICAgICBFbXBTa2lsbD86IHN0cmluZztcclxuICAgICAgICBFbXBEcml2ZXJMaWNlbnNlPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcEVtdDFMaWNlbnNlPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcEVmZmVjdGl2ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VyPzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wUXVlc3Rpb25uYWlyZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkVtcFF1ZXN0aW9ubmFpcmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgRW1wTm8gPSBcIkVtcE5vXCIsXHJcbiAgICAgICAgICAgIFFEYXRlID0gXCJRRGF0ZVwiLFxyXG4gICAgICAgICAgICBBZ2UgPSBcIkFnZVwiLFxyXG4gICAgICAgICAgICBIZWlnaHQgPSBcIkhlaWdodFwiLFxyXG4gICAgICAgICAgICBXZWlnaHQgPSBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBTZXggPSBcIlNleFwiLFxyXG4gICAgICAgICAgICBFbXBMYW5ndWFnZSA9IFwiRW1wTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgRW1wQm9keSA9IFwiRW1wQm9keVwiLFxyXG4gICAgICAgICAgICBFbXBXb3JrWWVhciA9IFwiRW1wV29ya1llYXJcIixcclxuICAgICAgICAgICAgRW1wVGltZVBoYXNlID0gXCJFbXBUaW1lUGhhc2VcIixcclxuICAgICAgICAgICAgRW1wQXJlYSA9IFwiRW1wQXJlYVwiLFxyXG4gICAgICAgICAgICBFbXBTZXJ2aWNlTGV2ZWwgPSBcIkVtcFNlcnZpY2VMZXZlbFwiLFxyXG4gICAgICAgICAgICBFbXBTa2lsbCA9IFwiRW1wU2tpbGxcIixcclxuICAgICAgICAgICAgRW1wRHJpdmVyTGljZW5zZSA9IFwiRW1wRHJpdmVyTGljZW5zZVwiLFxyXG4gICAgICAgICAgICBFbXBFbXQxTGljZW5zZSA9IFwiRW1wRW10MUxpY2Vuc2VcIixcclxuICAgICAgICAgICAgRW1wRWZmZWN0aXZlRGF0ZSA9IFwiRW1wRWZmZWN0aXZlRGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXIgPSBcIlVwZGF0ZVVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBRdWVzdGlvbm5haXJlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RW1wUXVlc3Rpb25uYWlyZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxFbXBRdWVzdGlvbm5haXJlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEVtcFF1ZXN0aW9ubmFpcmVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9FbXBRdWVzdGlvbm5haXJlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9FbXBRdWVzdGlvbm5haXJlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5FbXBRdWVzdGlvbm5haXJlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuRW1wbG95ZWUnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtcGxveWVlRm9ybSB7XHJcbiAgICAgICAgRW1wbG95ZWVJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVlRW5nTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIElkZW50aWZpY2F0aW9uQ2FyZE5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVW5pdElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVwdFR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXB0SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBPcmdJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc2l0aW9uSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQb3N0VHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc3RJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFN0YXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBTZXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBCaXJ0aGRheTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBDaXRpemVuSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBCbG9vZFR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb3VudHJ5SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSYWNlRmxhZzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEhvbWVsYW5kOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWFycnlGbGFnOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRWR1Y2F0ZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExpY2Vuc2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWc6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSYW5rczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFN0YW5kYXJkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgWWVhcnM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZWxpZ2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENodXJjaDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFkZHJlc3MxOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWRkcmVzczI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbVJlbGF0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGVsZXBob25lMTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRlbGVwaG9uZTI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMZWF2ZURhdGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZXRpcmVGbGFnOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGF0aWVudElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkVtcGxveWVlRm9ybSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRW1wbG95ZWVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEVtcGxveWVlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbXBsb3llZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVlTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBsb3llZUVuZ05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSWRlbnRpZmljYXRpb25DYXJkTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHRUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHRJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdPcmdJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb3NpdGlvbklkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydERhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU2V4JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpcnRoZGF5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NpdGl6ZW5JZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdCbG9vZFR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ291bnRyeUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JhY2VGbGFnJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWVsYW5kJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hcnJ5RmxhZycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFZHVjYXRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xpY2Vuc2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JhbmtzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW5kYXJkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1llYXJzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGlnaW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NodXJjaCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRyZXNzMScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRyZXNzMicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1SZWxhdGlvbicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUZWxlcGhvbmUxJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlbGVwaG9uZTInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGVhdmVEYXRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JldGlyZUZsYWcnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGF0aWVudElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbXBsb3llZVJvdyB7XHJcbiAgICAgICAgT2lkPzogbnVtYmVyO1xyXG4gICAgICAgIEVtcGxveWVlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlRW5nTmFtZT86IHN0cmluZztcclxuICAgICAgICBJZGVudGlmaWNhdGlvbkNhcmRObz86IHN0cmluZztcclxuICAgICAgICBVbml0SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVwdFR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVwdElkPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZ0lkPzogc3RyaW5nO1xyXG4gICAgICAgIFBvc2l0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdFR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdElkPzogc3RyaW5nO1xyXG4gICAgICAgIFN0YXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBTZXg/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhkYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2l0aXplbklkPzogc3RyaW5nO1xyXG4gICAgICAgIEJsb29kVHlwZT86IHN0cmluZztcclxuICAgICAgICBDb3VudHJ5SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUmFjZUZsYWc/OiBzdHJpbmc7XHJcbiAgICAgICAgSG9tZWxhbmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTWFycnlGbGFnPzogc3RyaW5nO1xyXG4gICAgICAgIEVkdWNhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTGljZW5zZT86IHN0cmluZztcclxuICAgICAgICBQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWc/OiBzdHJpbmc7XHJcbiAgICAgICAgUmFua3M/OiBzdHJpbmc7XHJcbiAgICAgICAgU3RhbmRhcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgWWVhcnM/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVsaWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2h1cmNoPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3MxPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3MyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtTmFtZT86IHN0cmluZztcclxuICAgICAgICBFbVJlbGF0aW9uPzogc3RyaW5nO1xyXG4gICAgICAgIFRlbGVwaG9uZTE/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVsZXBob25lMj86IHN0cmluZztcclxuICAgICAgICBMZWF2ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUmV0aXJlRmxhZz86IHN0cmluZztcclxuICAgICAgICBQYXRpZW50SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFbXBsb3llZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0VtcGxveWVlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5FbXBsb3llZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBsb3llZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wbG95ZWU6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBsb3llZTpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcGxveWVlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVJZCA9IFwiRW1wbG95ZWVJZFwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZU5hbWUgPSBcIkVtcGxveWVlTmFtZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUVuZ05hbWUgPSBcIkVtcGxveWVlRW5nTmFtZVwiLFxyXG4gICAgICAgICAgICBJZGVudGlmaWNhdGlvbkNhcmRObyA9IFwiSWRlbnRpZmljYXRpb25DYXJkTm9cIixcclxuICAgICAgICAgICAgVW5pdElkID0gXCJVbml0SWRcIixcclxuICAgICAgICAgICAgRGVwdFR5cGUgPSBcIkRlcHRUeXBlXCIsXHJcbiAgICAgICAgICAgIERlcHRJZCA9IFwiRGVwdElkXCIsXHJcbiAgICAgICAgICAgIE9yZ0lkID0gXCJPcmdJZFwiLFxyXG4gICAgICAgICAgICBQb3NpdGlvbklkID0gXCJQb3NpdGlvbklkXCIsXHJcbiAgICAgICAgICAgIFBvc3RUeXBlID0gXCJQb3N0VHlwZVwiLFxyXG4gICAgICAgICAgICBQb3N0SWQgPSBcIlBvc3RJZFwiLFxyXG4gICAgICAgICAgICBTdGFydERhdGUgPSBcIlN0YXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBTZXggPSBcIlNleFwiLFxyXG4gICAgICAgICAgICBCaXJ0aGRheSA9IFwiQmlydGhkYXlcIixcclxuICAgICAgICAgICAgQ2l0aXplbklkID0gXCJDaXRpemVuSWRcIixcclxuICAgICAgICAgICAgQmxvb2RUeXBlID0gXCJCbG9vZFR5cGVcIixcclxuICAgICAgICAgICAgQ291bnRyeUlkID0gXCJDb3VudHJ5SWRcIixcclxuICAgICAgICAgICAgUmFjZUZsYWcgPSBcIlJhY2VGbGFnXCIsXHJcbiAgICAgICAgICAgIEhvbWVsYW5kID0gXCJIb21lbGFuZFwiLFxyXG4gICAgICAgICAgICBNYXJyeUZsYWcgPSBcIk1hcnJ5RmxhZ1wiLFxyXG4gICAgICAgICAgICBFZHVjYXRlID0gXCJFZHVjYXRlXCIsXHJcbiAgICAgICAgICAgIExpY2Vuc2UgPSBcIkxpY2Vuc2VcIixcclxuICAgICAgICAgICAgUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnID0gXCJQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWdcIixcclxuICAgICAgICAgICAgUmFua3MgPSBcIlJhbmtzXCIsXHJcbiAgICAgICAgICAgIFN0YW5kYXJkID0gXCJTdGFuZGFyZFwiLFxyXG4gICAgICAgICAgICBZZWFycyA9IFwiWWVhcnNcIixcclxuICAgICAgICAgICAgUmVsaWdpb24gPSBcIlJlbGlnaW9uXCIsXHJcbiAgICAgICAgICAgIENodXJjaCA9IFwiQ2h1cmNoXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MxID0gXCJBZGRyZXNzMVwiLFxyXG4gICAgICAgICAgICBBZGRyZXNzMiA9IFwiQWRkcmVzczJcIixcclxuICAgICAgICAgICAgRW1OYW1lID0gXCJFbU5hbWVcIixcclxuICAgICAgICAgICAgRW1SZWxhdGlvbiA9IFwiRW1SZWxhdGlvblwiLFxyXG4gICAgICAgICAgICBUZWxlcGhvbmUxID0gXCJUZWxlcGhvbmUxXCIsXHJcbiAgICAgICAgICAgIFRlbGVwaG9uZTIgPSBcIlRlbGVwaG9uZTJcIixcclxuICAgICAgICAgICAgTGVhdmVEYXRlID0gXCJMZWF2ZURhdGVcIixcclxuICAgICAgICAgICAgUmV0aXJlRmxhZyA9IFwiUmV0aXJlRmxhZ1wiLFxyXG4gICAgICAgICAgICBQYXRpZW50SWQgPSBcIlBhdGllbnRJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0VtcGxveWVlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcGxveWVlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RW1wbG95ZWVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8RW1wbG95ZWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RW1wbG95ZWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9FbXBsb3llZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0VtcGxveWVlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvRW1wbG95ZWUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0VtcGxveWVlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvRW1wbG95ZWUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkVtcGxveWVlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHMnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybURldGFpbFJlY29yZHNDb2x1bW5zQ3VzdG9tIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTZXJ2aWNlQUQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0ge1xyXG4gICAgICAgIFJlcGFpckZvcm1SZWNvcmRzSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXNlTWF0ZXJpYWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VNYXRlcmlhbENvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIE1hdGVyaWFsQW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFN1YnNpZHlBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUGF5QW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBVcGRhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSZXBhaXJGb3JtUmVjb3Jkc0lkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZU1hdGVyaWFsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZU1hdGVyaWFsQ291bnQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTWF0ZXJpYWxBbW91bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnU3Vic2lkeUFtb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXlBbW91bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRldXNlcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVkYXRlJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZXVzZXInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlZGF0ZScsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtQ3VzdG9tIHtcclxuICAgICAgICBVc2VNYXRlcmlhbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE1hdGVyaWFsQW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFN1YnNpZHlBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRldXNlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm1DdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1NlcnZpY2VBRC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VNYXRlcmlhbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbEFtb3VudCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJzaWR5QW1vdW50JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZXVzZXInLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VNYXRlcmlhbD86IHN0cmluZztcclxuICAgICAgICBVc2VNYXRlcmlhbENvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIE1hdGVyaWFsQW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIFN1YnNpZHlBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGF5QW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIENyZWF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZU1hdGVyaWFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybURldGFpbFJlY29yZHM6RGVsZXRlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOkFkZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybURldGFpbFJlY29yZHM6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpNb2RpZnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE9pZCA9IFwiT2lkXCIsXHJcbiAgICAgICAgICAgIFJlcGFpckZvcm1SZWNvcmRzSWQgPSBcIlJlcGFpckZvcm1SZWNvcmRzSWRcIixcclxuICAgICAgICAgICAgVXNlTWF0ZXJpYWwgPSBcIlVzZU1hdGVyaWFsXCIsXHJcbiAgICAgICAgICAgIFVzZU1hdGVyaWFsQ291bnQgPSBcIlVzZU1hdGVyaWFsQ291bnRcIixcclxuICAgICAgICAgICAgTWF0ZXJpYWxBbW91bnQgPSBcIk1hdGVyaWFsQW1vdW50XCIsXHJcbiAgICAgICAgICAgIFN1YnNpZHlBbW91bnQgPSBcIlN1YnNpZHlBbW91bnRcIixcclxuICAgICAgICAgICAgUGF5QW1vdW50ID0gXCJQYXlBbW91bnRcIixcclxuICAgICAgICAgICAgQ3JlYXRldXNlciA9IFwiQ3JlYXRldXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGVkYXRlID0gXCJDcmVhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZXVzZXIgPSBcIlVwZGF0ZXVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlZGF0ZSA9IFwiVXBkYXRlZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkcyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0NvbHVtbnNDdXN0b20ge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0ge1xyXG4gICAgICAgIENhc2VObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGFpckRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVG93bnNoaXA6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBcmVhOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3Vic2lkeVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFzc2lzdGl2ZVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEl0ZW1OYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWF0ZXJpYWxObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNlcnZpY2VUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VydmljZUNvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEV2YWx1dGlvbkxldmVsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSGFuZGxpbmdQbGFjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBsYWNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyUmVjb3JkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyRW1wSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcmVhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVcGRhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHMnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlcGFpckZvcm1SZWNvcmRzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpckRhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVG93bnNoaXAnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXJlYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJzaWR5U291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fzc2lzdGl2ZVNvdXJjZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VDb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdFdmFsdXRpb25MZXZlbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdIYW5kbGluZ1BsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpclJlY29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXBhaXJFbXBJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGV1c2VyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZWRhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRldXNlcicsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVkYXRlJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20ge1xyXG4gICAgICAgIENhc2VObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGFpckRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVG93bnNoaXA6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBcmVhOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3Vic2lkeVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFzc2lzdGl2ZVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEl0ZW1OYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWF0ZXJpYWxObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNlcnZpY2VUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VydmljZUNvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEV2YWx1dGlvbkxldmVsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSGFuZGxpbmdQbGFjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBsYWNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyRW1wSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXRhaWxMaXN0OiBSZXBhaXJGb3JtUmVjb3Jkc0dyaWRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1SZWNvcmRzRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwYWlyRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3duc2hpcCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcmVhJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YnNpZHlTb3VyY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXNzaXN0aXZlU291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0ZW1OYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZVR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZUNvdW50JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V2YWx1dGlvbkxldmVsJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hhbmRsaW5nUGxhY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGxhY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwYWlyRW1wSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGV0YWlsTGlzdCcsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwYWlyRm9ybVJlY29yZHNSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBDYXNlTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwYWlyRGF0ZT86IHN0cmluZztcclxuICAgICAgICBUb3duc2hpcD86IHN0cmluZztcclxuICAgICAgICBBcmVhPzogc3RyaW5nO1xyXG4gICAgICAgIFN1YnNpZHlTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgQXNzaXN0aXZlU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIEl0ZW1OYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIE1hdGVyaWFsTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgU2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU2VydmljZUNvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIEV2YWx1dGlvbkxldmVsPzogc3RyaW5nO1xyXG4gICAgICAgIEhhbmRsaW5nUGxhY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGxhY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwYWlyUmVjb3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGFpckVtcElkPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGV0YWlsTGlzdD86IFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93W107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtUmVjb3Jkc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Nhc2VObyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LlJlcGFpckZvcm1SZWNvcmRzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybVJlY29yZHM6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBDYXNlTm8gPSBcIkNhc2VOb1wiLFxyXG4gICAgICAgICAgICBSZXBhaXJEYXRlID0gXCJSZXBhaXJEYXRlXCIsXHJcbiAgICAgICAgICAgIFRvd25zaGlwID0gXCJUb3duc2hpcFwiLFxyXG4gICAgICAgICAgICBBcmVhID0gXCJBcmVhXCIsXHJcbiAgICAgICAgICAgIFN1YnNpZHlTb3VyY2UgPSBcIlN1YnNpZHlTb3VyY2VcIixcclxuICAgICAgICAgICAgQXNzaXN0aXZlU291cmNlID0gXCJBc3Npc3RpdmVTb3VyY2VcIixcclxuICAgICAgICAgICAgSXRlbU5hbWUgPSBcIkl0ZW1OYW1lXCIsXHJcbiAgICAgICAgICAgIE1hdGVyaWFsTm8gPSBcIk1hdGVyaWFsTm9cIixcclxuICAgICAgICAgICAgU2VydmljZVR5cGUgPSBcIlNlcnZpY2VUeXBlXCIsXHJcbiAgICAgICAgICAgIFNlcnZpY2VDb3VudCA9IFwiU2VydmljZUNvdW50XCIsXHJcbiAgICAgICAgICAgIEV2YWx1dGlvbkxldmVsID0gXCJFdmFsdXRpb25MZXZlbFwiLFxyXG4gICAgICAgICAgICBIYW5kbGluZ1BsYWNlID0gXCJIYW5kbGluZ1BsYWNlXCIsXHJcbiAgICAgICAgICAgIFBsYWNlID0gXCJQbGFjZVwiLFxyXG4gICAgICAgICAgICBSZXBhaXJSZWNvcmQgPSBcIlJlcGFpclJlY29yZFwiLFxyXG4gICAgICAgICAgICBSZXBhaXJFbXBJZCA9IFwiUmVwYWlyRW1wSWRcIixcclxuICAgICAgICAgICAgQ3JlYXRldXNlciA9IFwiQ3JlYXRldXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGVkYXRlID0gXCJDcmVhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZXVzZXIgPSBcIlVwZGF0ZXVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlZGF0ZSA9IFwiVXBkYXRlZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZXRhaWxMaXN0ID0gXCJEZXRhaWxMaXN0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcGFpckZvcm1SZWNvcmRzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJlcGFpckZvcm1SZWNvcmRzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJlcGFpckZvcm1SZWNvcmRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJlcGFpckZvcm1SZWNvcmRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybVJlY29yZHMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5SZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRm9yZ290UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcEZvcm0ge1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBDb25maXJtRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNpZ25VcEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybUVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuVGV4dHMge1xyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVBsdXJhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE92ZXJyaWRlQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZUNoYW5nZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZENvbmZpcm06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudGVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEZWZhdWx0IHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBbm5vdW5jZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlRGVzYzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlUHJpb3JpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbm5vdW5jZVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBdHRhY2htZW50czogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGV0YWlsTGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbGVhc2VEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2VydmljZUNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRSb2xlSWRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VXNlcklkczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBbm5vdW5jZW1lbnREZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlbWVudHNJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlDb250ZW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDYXNlU2VydmljZURhdGEge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhc2VObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlVXNlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXRpZW50SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2NJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENvbnRhY3RCb29rIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZHZpc2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZHZpc2VkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWxyZWFkeWtub3c6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbHJlYWR5a25vd0V4cHJlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FzZW5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2hlY2tib3g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZVVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRW1wUXVlc3Rpb25uYWlyZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wQXJlYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcEJvZHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBEcml2ZXJMaWNlbnNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wRWZmZWN0aXZlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcEVtdDFMaWNlbnNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcFNlcnZpY2VMZXZlbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcFNraWxsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wVGltZVBoYXNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wV29ya1llYXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNleDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgV2VpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBFbXBsb3llZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkcmVzczE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpcnRoZGF5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmxvb2RUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2h1cmNoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l0aXplbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ291bnRyeUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVwdElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVwdFR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZHVjYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1SZWxhdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlRW5nTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIb21lbGFuZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZW50aWZpY2F0aW9uQ2FyZE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGVhdmVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGljZW5zZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1hcnJ5RmxhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZ0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF0aWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUG9zaXRpb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmFjZUZsYWc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSYW5rczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbGlnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmV0aXJlRmxhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNleDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YW5kYXJkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbGVwaG9uZTI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFllYXJzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3JkcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYXRlcmlhbEFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheUFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcGFpckZvcm1SZWNvcmRzSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJzaWR5QW1vdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VNYXRlcmlhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZU1hdGVyaWFsQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlcGFpckZvcm1SZWNvcmRzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBcmVhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXNzaXN0aXZlU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FzZU5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXRhaWxMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRXZhbHV0aW9uTGV2ZWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIYW5kbGluZ1BsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYXRlcmlhbE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGxhY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBhaXJEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwYWlyRW1wSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBhaXJSZWNvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXJ2aWNlQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXJ2aWNlVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1YnNpZHlTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3duc2hpcDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dpblRvWW91ckFjY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPUjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduVXBCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NlcHRUZXJtczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBY2Nlc3NEZW5pZWQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFja1Blcm1pc3Npb25zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYW5jZWxUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsU3VjY2Vzc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RoaW5nVG9Qcm9jZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTGF5b3V0IHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyUmlnaHRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93TGlnaHQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXZva2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVmFsaWRhdGlvbkVycm9yIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVGb3JlaWduS2V5RXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZEFjdGl2YXRlVG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTYXZlUHJpbWFyeUtleUVycm9yOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgU2VyZW5lMVsnVGV4dHMnXSA9IFEucHJveHlUZXh0cyhUZXh0cywgJycsIHtEYjp7QWRtaW5pc3RyYXRpb246e0xhbmd1YWdlOntJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MX0sUm9sZTp7Um9sZUlkOjEsUm9sZU5hbWU6MX0sUm9sZVBlcm1pc3Npb246e1Blcm1pc3Npb25LZXk6MSxSb2xlSWQ6MSxSb2xlUGVybWlzc2lvbklkOjEsUm9sZVJvbGVOYW1lOjF9LFRyYW5zbGF0aW9uOntDdXN0b21UZXh0OjEsRW50aXR5UGx1cmFsOjEsS2V5OjEsT3ZlcnJpZGVDb25maXJtYXRpb246MSxTYXZlQ2hhbmdlc0J1dHRvbjoxLFNvdXJjZUxhbmd1YWdlOjEsU291cmNlVGV4dDoxLFRhcmdldExhbmd1YWdlOjEsVGFyZ2V0VGV4dDoxfSxVc2VyOntEaXNwbGF5TmFtZToxLEVtYWlsOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLElzQWN0aXZlOjEsTGFzdERpcmVjdG9yeVVwZGF0ZToxLFBhc3N3b3JkOjEsUGFzc3dvcmRDb25maXJtOjEsUGFzc3dvcmRIYXNoOjEsUGFzc3dvcmRTYWx0OjEsU291cmNlOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFVzZXJJZDoxLFVzZXJJbWFnZToxLFVzZXJuYW1lOjF9LFVzZXJQZXJtaXNzaW9uOntHcmFudGVkOjEsUGVybWlzc2lvbktleToxLFVzZXI6MSxVc2VySWQ6MSxVc2VyUGVybWlzc2lvbklkOjEsVXNlcm5hbWU6MX0sVXNlclJvbGU6e1JvbGVJZDoxLFVzZXI6MSxVc2VySWQ6MSxVc2VyUm9sZUlkOjEsVXNlcm5hbWU6MX19LERlZmF1bHQ6e0Fubm91bmNlbWVudDp7QW5ub3VuY2VEZXNjOjEsQW5ub3VuY2VQcmlvcml0eToxLEFubm91bmNlVHlwZToxLEF0dGFjaG1lbnRzOjEsQ3JlYXRlZGF0ZToxLENyZWF0ZXVzZXI6MSxEZXRhaWxMaXN0OjEsT2lkOjEsUmVsZWFzZURhdGU6MSxTZXJ2aWNlQ29kZToxLFRhcmdldFJvbGVJZHM6MSxUYXJnZXRVc2VySWRzOjEsVXBkYXRlZGF0ZToxLFVwZGF0ZXVzZXI6MX0sQW5ub3VuY2VtZW50RGV0YWlsOntBbm5vdW5jZW1lbnRzSWQ6MSxDcmVhdGVkYXRlOjEsQ3JlYXRldXNlcjoxLE9pZDoxLFJlcGx5Q29udGVudDoxLFJlcGx5RGF0ZToxLFJlcGx5VXNlcjoxLFRhcmdldFVzZXI6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxfSxDYXNlU2VydmljZURhdGE6e0Nhc2VObzoxLENyZWF0ZURhdGU6MSxDcmVhdGVVc2VyOjEsQ3JlYXRlVXNlck5hbWU6MSxPaWQ6MSxQYXRpZW50SWQ6MSxSb2NJZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VyOjEsVXBkYXRlVXNlck5hbWU6MX0sQ29udGFjdEJvb2s6e0FkdmlzZToxLEFkdmlzZWRhdGU6MSxBbHJlYWR5a25vdzoxLEFscmVhZHlrbm93RXhwcmU6MSxDYXNlbm86MSxDaGVja2JveDoxLENyZWF0ZURhdGU6MSxDcmVhdGVVc2VyOjEsQ3JlYXRlVXNlck5hbWU6MSxPaWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcjoxLFVwZGF0ZVVzZXJOYW1lOjF9LEVtcFF1ZXN0aW9ubmFpcmU6e0FnZToxLEVtcEFyZWE6MSxFbXBCb2R5OjEsRW1wRHJpdmVyTGljZW5zZToxLEVtcEVmZmVjdGl2ZURhdGU6MSxFbXBFbXQxTGljZW5zZToxLEVtcExhbmd1YWdlOjEsRW1wTm86MSxFbXBTZXJ2aWNlTGV2ZWw6MSxFbXBTa2lsbDoxLEVtcFRpbWVQaGFzZToxLEVtcFdvcmtZZWFyOjEsSGVpZ2h0OjEsT2lkOjEsUURhdGU6MSxTZXg6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcjoxLFdlaWdodDoxfSxFbXBsb3llZTp7QWRkcmVzczE6MSxBZGRyZXNzMjoxLEJpcnRoZGF5OjEsQmxvb2RUeXBlOjEsQ2h1cmNoOjEsQ2l0aXplbklkOjEsQ291bnRyeUlkOjEsRGVwdElkOjEsRGVwdFR5cGU6MSxFZHVjYXRlOjEsRW1OYW1lOjEsRW1SZWxhdGlvbjoxLEVtcGxveWVlRW5nTmFtZToxLEVtcGxveWVlSWQ6MSxFbXBsb3llZU5hbWU6MSxIb21lbGFuZDoxLElkZW50aWZpY2F0aW9uQ2FyZE5vOjEsTGVhdmVEYXRlOjEsTGljZW5zZToxLE1hcnJ5RmxhZzoxLE9pZDoxLE9yZ0lkOjEsUGF0aWVudElkOjEsUG9zaXRpb25JZDoxLFBvc3RJZDoxLFBvc3RUeXBlOjEsUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnOjEsUmFjZUZsYWc6MSxSYW5rczoxLFJlbGlnaW9uOjEsUmV0aXJlRmxhZzoxLFNleDoxLFN0YW5kYXJkOjEsU3RhcnREYXRlOjEsVGVsZXBob25lMToxLFRlbGVwaG9uZTI6MSxVbml0SWQ6MSxVc2VybmFtZToxLFllYXJzOjF9LFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOntDcmVhdGVkYXRlOjEsQ3JlYXRldXNlcjoxLE1hdGVyaWFsQW1vdW50OjEsT2lkOjEsUGF5QW1vdW50OjEsUmVwYWlyRm9ybVJlY29yZHNJZDoxLFN1YnNpZHlBbW91bnQ6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxLFVzZU1hdGVyaWFsOjEsVXNlTWF0ZXJpYWxDb3VudDoxfSxSZXBhaXJGb3JtUmVjb3Jkczp7QXJlYToxLEFzc2lzdGl2ZVNvdXJjZToxLENhc2VObzoxLENyZWF0ZWRhdGU6MSxDcmVhdGV1c2VyOjEsRGV0YWlsTGlzdDoxLEV2YWx1dGlvbkxldmVsOjEsSGFuZGxpbmdQbGFjZToxLEl0ZW1OYW1lOjEsTWF0ZXJpYWxObzoxLE9pZDoxLFBsYWNlOjEsUmVwYWlyRGF0ZToxLFJlcGFpckVtcElkOjEsUmVwYWlyUmVjb3JkOjEsU2VydmljZUNvdW50OjEsU2VydmljZVR5cGU6MSxTdWJzaWR5U291cmNlOjEsVG93bnNoaXA6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxfX19LEZvcm1zOntNZW1iZXJzaGlwOntDaGFuZ2VQYXNzd29yZDp7Rm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxGb3Jnb3RQYXNzd29yZDp7QmFja1RvTG9naW46MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sTG9naW46e0ZhY2Vib29rQnV0dG9uOjEsRm9yZ290UGFzc3dvcmQ6MSxHb29nbGVCdXR0b246MSxMb2dpblRvWW91ckFjY291bnQ6MSxPUjoxLFJlbWVtYmVyTWU6MSxTaWduSW5CdXR0b246MSxTaWduVXBCdXR0b246MX0sUmVzZXRQYXNzd29yZDp7QmFja1RvTG9naW46MSxFbWFpbFN1YmplY3Q6MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LFNpZ25VcDp7QWNjZXB0VGVybXM6MSxBY3RpdmF0ZUVtYWlsU3ViamVjdDoxLEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6MSxCYWNrVG9Mb2dpbjoxLENvbmZpcm1FbWFpbDoxLENvbmZpcm1QYXNzd29yZDoxLERpc3BsYXlOYW1lOjEsRW1haWw6MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFBhc3N3b3JkOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfX19LE5hdmlnYXRpb246e0xvZ291dExpbms6MSxTaXRlVGl0bGU6MX0sU2l0ZTp7QWNjZXNzRGVuaWVkOntDbGlja1RvQ2hhbmdlVXNlcjoxLENsaWNrVG9Mb2dpbjoxLExhY2tQZXJtaXNzaW9uczoxLE5vdExvZ2dlZEluOjEsUGFnZVRpdGxlOjF9LEJhc2ljUHJvZ3Jlc3NEaWFsb2c6e0NhbmNlbFRpdGxlOjEsUGxlYXNlV2FpdDoxfSxCdWxrU2VydmljZUFjdGlvbjp7QWxsSGFkRXJyb3JzRm9ybWF0OjEsQWxsU3VjY2Vzc0Zvcm1hdDoxLENvbmZpcm1hdGlvbkZvcm1hdDoxLEVycm9yQ291bnQ6MSxOb3RoaW5nVG9Qcm9jZXNzOjEsU29tZUhhZEVycm9yc0Zvcm1hdDoxLFN1Y2Nlc3NDb3VudDoxfSxEYXNoYm9hcmQ6e0NvbnRlbnREZXNjcmlwdGlvbjoxfSxMYXlvdXQ6e0Zvb3RlckNvcHlyaWdodDoxLEZvb3RlckluZm86MSxGb290ZXJSaWdodHM6MSxHZW5lcmFsU2V0dGluZ3M6MSxMYW5ndWFnZToxLFRoZW1lOjEsVGhlbWVCbGFjazoxLFRoZW1lQmxhY2tMaWdodDoxLFRoZW1lQmx1ZToxLFRoZW1lQmx1ZUxpZ2h0OjEsVGhlbWVHcmVlbjoxLFRoZW1lR3JlZW5MaWdodDoxLFRoZW1lUHVycGxlOjEsVGhlbWVQdXJwbGVMaWdodDoxLFRoZW1lUmVkOjEsVGhlbWVSZWRMaWdodDoxLFRoZW1lWWVsbG93OjEsVGhlbWVZZWxsb3dMaWdodDoxfSxSb2xlUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxFZGl0QnV0dG9uOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlckRpYWxvZzp7RWRpdFBlcm1pc3Npb25zQnV0dG9uOjEsRWRpdFJvbGVzQnV0dG9uOjF9LFVzZXJQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEdyYW50OjEsUGVybWlzc2lvbjoxLFJldm9rZToxLFNhdmVTdWNjZXNzOjF9LFVzZXJSb2xlRGlhbG9nOntEaWFsb2dUaXRsZToxLFNhdmVTdWNjZXNzOjF9LFZhbGlkYXRpb25FcnJvcjp7VGl0bGU6MX19LFZhbGlkYXRpb246e0F1dGhlbnRpY2F0aW9uRXJyb3I6MSxDYW50RmluZFVzZXJXaXRoRW1haWw6MSxDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDoxLERlbGV0ZUZvcmVpZ25LZXlFcnJvcjoxLEVtYWlsQ29uZmlybToxLEVtYWlsSW5Vc2U6MSxJbnZhbGlkQWN0aXZhdGVUb2tlbjoxLEludmFsaWRSZXNldFRva2VuOjEsTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDoxLFNhdmVQcmltYXJ5S2V5RXJyb3I6MX19KTtcclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBMYW5ndWFnZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtMYW5ndWFnZVJvdy5GaWVsZHMuTGFuZ3VhZ2VOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJvbGVGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSb2xlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUm9sZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSb2xlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkVkaXRCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSb2xlUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVJRDogdGhpcy5lbnRpdHkuUm9sZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5lbnRpdHkuUm9sZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiAoPFVzZXJQZXJtaXNzaW9uUm93PnsgUGVybWlzc2lvbktleTogeCB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiB4LlBlcm1pc3Npb25LZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRyYW5zbGF0aW9uSXRlbSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVHJhbnNsYXRpb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYXNDaGFuZ2VzOiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgc291cmNlTGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjsgXHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2VLZXk6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbigna2V5dXAuJyArIHRoaXMudW5pcXVlTmFtZSArICcgY2hhbmdlLicgKyB0aGlzLnVuaXF1ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXQuY3VzdG9tLXRleHQnLCBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IFEudHJpbVRvTnVsbCgkKGUudGFyZ2V0KS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldEl0ZW1CeUlkKCQoZS50YXJnZXQpLmRhdGEoJ2tleScpKS5DdXN0b21UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICBsZXQgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnc291cmNlLXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uU291cmNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5Tb3VyY2VUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3RhcmdldC10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uVGFyZ2V0VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5UYXJnZXRUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbXTtcclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHsgZmllbGQ6ICdLZXknLCB3aWR0aDogMzAwLCBzb3J0YWJsZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTb3VyY2VUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NvdXJjZS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQ3VzdG9tVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGlucHV0Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY3VzdG9tLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGN0eC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1rZXknLCBjdHguaXRlbS5LZXkpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RhcmdldFRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndGFyZ2V0LXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0OiBTZXJlbml0eS5Mb29rdXBFZGl0b3JPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9va3VwS2V5OiAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU291cmNlTGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5UYXJnZXRMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVDaGFuZ2VzKGxhbmd1YWdlOiBzdHJpbmcpOiBQcm9taXNlTGlrZTxhbnk+IHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zW2l0ZW0uS2V5XSA9IGl0ZW0uQ3VzdG9tVGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUcmFuc2xhdGlvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFRhcmdldExhbmd1YWdlSUQ6IGxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNcclxuICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFEudHJpbVRvTnVsbChsYW5ndWFnZSkgfHwgJ2ludmFyaWFudCc7XHJcbiAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoJ1VzZXIgdHJhbnNsYXRpb25zIGluIFwiJyArIGxhbmd1YWdlICtcclxuICAgICAgICAgICAgICAgICAgICAnXCIgbGFuZ3VhZ2UgYXJlIHNhdmVkIHRvIFwidXNlci50ZXh0cy4nICtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSArICcuanNvblwiICcgKyAnZmlsZSB1bmRlciBcIn4vQXBwX0RhdGEvdGV4dHMvXCInLCAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLnZpZXcucGFyYW1zO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNvdXJjZUxhbmd1YWdlSUQgPSB0aGlzLnNvdXJjZUxhbmd1YWdlLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlS2V5ID0gdGhpcy50YXJnZXRMYW5ndWFnZS52YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgcmVxdWVzdC5UYXJnZXRMYW5ndWFnZUlEID0gdGhpcy50YXJnZXRMYW5ndWFnZUtleTtcclxuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdTdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNhdmVDaGFuZ2VzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBlID0+IHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwcGx5LWNoYW5nZXMtYnV0dG9uJ1xyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIChmaWVsZCwgc2VhcmNoVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBUcmFuc2xhdGlvbkl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2QgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzO1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoaW5nID0gc2QodGhpcy5zZWFyY2hUZXh0KS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2goc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3RyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hpbmcpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBRLmlzRW1wdHlPck51bGwoc2VhcmNoaW5nKSB8fCBtYXRjaChpdGVtLktleSkgfHwgbWF0Y2goaXRlbS5Tb3VyY2VUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2goaXRlbS5UYXJnZXRUZXh0KSB8fCBtYXRjaChpdGVtLkN1c3RvbVRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBVc2VyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBVc2VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyFcIjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlICE9IHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhlIHBhc3N3b3JkcyBlbnRlcmVkIGRvZXNuJ3QgbWF0Y2ghXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFJvbGVzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcm9sZXMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS11c2VycyB0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclJvbGVEaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFBlcm1pc3Npb25zQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZWRpdC1yb2xlcy1idXR0b24nKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgZmllbGRzIGFyZSBvbmx5IHJlcXVpcmVkIGluIG5ldyByZWNvcmQgbW9kZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVXNlclwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBVc2VyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkF1dGhvcml6YXRpb24ge1xyXG4gICAgZXhwb3J0IGRlY2xhcmUgbGV0IHVzZXJEZWZpbml0aW9uOiBTY3JpcHRVc2VyRGVmaW5pdGlvbjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aG9yaXphdGlvbiwgJ3VzZXJEZWZpbml0aW9uJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRSZW1vdGVEYXRhKCdVc2VyRGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ2hlY2tFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5DaGVja1RyZWVFZGl0b3I8U2VyZW5pdHkuQ2hlY2tUcmVlSXRlbTxhbnk+LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRpdjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRpdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCwgKGZpZWxkLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHRleHQgfHwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VHJlZUl0ZW1zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUm9sZVJvdy5nZXRMb29rdXAoKS5pdGVtcy5tYXAocm9sZSA9PiA8U2VyZW5pdHkuQ2hlY2tUcmVlSXRlbTxhbnk+PntcclxuICAgICAgICAgICAgICAgIGlkOiByb2xlLlJvbGVJZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcm9sZS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pICYmXHJcbiAgICAgICAgICAgICAgICAoUS5pc0VtcHR5T3JOdWxsKHRoaXMuc2VhcmNoVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0udGV4dCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VSZXF1ZXN0KCdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLlNhdmVTdWNjZXNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgaWQ9J35fUm9sZXMnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkNvbW1vbiB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvcnRFeGVjdXRlT3B0aW9ucyB7XHJcbiAgICAgICAgcmVwb3J0S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgZG93bmxvYWQ/OiBib29sZWFuO1xyXG4gICAgICAgIGV4dGVuc2lvbj86ICdwZGYnIHwgJ2h0bScgfCAnaHRtbCcgfCAneGxzeCcgfCAnZG9jeCc7XHJcbiAgICAgICAgZ2V0UGFyYW1zPzogKCkgPT4gYW55O1xyXG4gICAgICAgIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cclxuICAgICAgICB0YXJnZXQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvcnRCdXR0b25PcHRpb25zIGV4dGVuZHMgUmVwb3J0RXhlY3V0ZU9wdGlvbnMge1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGNzc0NsYXNzPzogc3RyaW5nO1xyXG4gICAgICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBvcnRIZWxwZXIge1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbEJ1dHRvbihvcHRpb25zOiBSZXBvcnRCdXR0b25PcHRpb25zKTogU2VyZW5pdHkuVG9vbEJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS5jb2FsZXNjZShvcHRpb25zLnRpdGxlLCAnUmVwb3J0JyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogUS5jb2FsZXNjZShvcHRpb25zLmNzc0NsYXNzLCAncHJpbnQtYnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBpY29uOiBvcHRpb25zLmljb24sXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVwb3J0SGVscGVyLmV4ZWN1dGUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZXhlY3V0ZShvcHRpb25zOiBSZXBvcnRFeGVjdXRlT3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gb3B0aW9ucy5nZXRQYXJhbXMgPyBvcHRpb25zLmdldFBhcmFtcygpIDogb3B0aW9ucy5wYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNkXCIpXHJcbiAgICAgICAgICAgIFEucG9zdFRvVXJsKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ34vRXh0ZW5zaW9ucy9SZXBvcnQvJyArIChvcHRpb25zLmRvd25sb2FkID8gJ0Rvd25sb2FkJyA6ICdSZW5kZXInKSxcclxuICAgICAgICAgICAgICAgIC8vdXJsOiAnfi9SZXBvcnQvJyArIChvcHRpb25zLmRvd25sb2FkID8gJ0Rvd25sb2FkJyA6ICdSZW5kZXInKSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogb3B0aW9ucy5yZXBvcnRLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0OiBRLmNvYWxlc2NlKG9wdGlvbnMuZXh0ZW5zaW9uLCAncGRmJyksXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0OiBvcHQgPyAkLnRvSlNPTihvcHQpIDogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFEuY29hbGVzY2Uob3B0aW9ucy50YXJnZXQsICdfYmxhbmsnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5MYW5ndWFnZUxpc3Qge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrIG9mIEFkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LmdldExvb2t1cCgpLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChrLkxhbmd1YWdlSWQgIT09ICdlbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtrLklkLnRvU3RyaW5nKCksIGsuTGFuZ3VhZ2VOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBTZXJlbmUxLlNjcmlwdEluaXRpYWxpemF0aW9uIHtcclxuICAgIFEuQ29uZmlnLnJlc3BvbnNpdmVEaWFsb2dzID0gdHJ1ZTtcclxuICAgIFEuQ29uZmlnLnJvb3ROYW1lc3BhY2VzLnB1c2goJ1NlcmVuZTEnKTtcclxuICAgIFNlcmVuaXR5LkVudGl0eURpYWxvZy5kZWZhdWx0TGFuZ3VhZ2VMaXN0ID0gTGFuZ3VhZ2VMaXN0LmdldFZhbHVlO1xyXG4gICAgU2VyZW5pdHkuSHRtbENvbnRlbnRFZGl0b3IuQ0tFZGl0b3JCYXNlUGF0aCA9IFwifi9TZXJlbml0eS5Bc3NldHMvU2NyaXB0cy9ja2VkaXRvci9cIjtcclxuXHJcbiAgICBpZiAoJC5mblsnY29sb3Jib3gnXSkge1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4V2lkdGggPSBcIjk1JVwiO1xyXG4gICAgICAgICQuZm5bJ2NvbG9yYm94J10uc2V0dGluZ3MubWF4SGVpZ2h0ID0gXCI5NSVcIjtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25lcnJvciA9IFEuRXJyb3JIYW5kbGluZy5ydW50aW1lRXJyb3JIYW5kbGVyO1xyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQ29tbW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKFtTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLmVkaXRvcigpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lbGVtZW50KFwiPGRpdi8+XCIpXHJcbiAgICBleHBvcnQgY2xhc3MgR3JpZEVkaXRvckJhc2U8VEVudGl0eT4gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRFbnRpdHksIGFueT5cclxuICAgICAgICBpbXBsZW1lbnRzIFNlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWUge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiX19pZFwiOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBuZXh0SWQgPSAxO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGlkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGVudGl0eSBhcyBhbnkpW3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROZXh0SWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImBcIiArIHRoaXMubmV4dElkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0TmV3SWQoZW50aXR5OiBURW50aXR5KSB7XHJcbiAgICAgICAgICAgIGVudGl0eVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmUob3B0OiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxhbnk+LCBjYWxsYmFjazogKHI6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4gdm9pZCkge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IG9wdC5yZXF1ZXN0IGFzIFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFRFbnRpdHk+O1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gUS5kZWVwQ2xvbmUocmVxdWVzdC5FbnRpdHkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5pZChyb3cpO1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgKHJvdyBhcyBhbnkpW3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXSA9IHRoaXMuZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUVudGl0eShyb3csIGlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnZpZXcuZ2V0SXRlbXMoKS5zbGljZSgpO1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gUS5pbmRleE9mKGl0ZW1zLCB4ID0+IHRoaXMuaWQoeCkgPT09IGlkKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IFEuZGVlcENsb25lKHt9IGFzIFRFbnRpdHksIGl0ZW1zW2luZGV4XSwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRFbnRpdGllcyhpdGVtcyk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHt9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVFbnRpdHkoaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuZGVsZXRlSXRlbShpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRlRW50aXR5KHJvdzogVEVudGl0eSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzZXRFbnRpdGllcyhpdGVtczogVEVudGl0eVtdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyhpdGVtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV3RW50aXR5KCk6IFRFbnRpdHkge1xyXG4gICAgICAgICAgICByZXR1cm4ge30gYXMgVEVudGl0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG4gICAgICAgICAgICB2YXIgYWRkQnV0dG9uID0gUS50cnlGaXJzdChidXR0b25zLCB4ID0+IHguY3NzQ2xhc3MgPT0gJ2FkZC1idXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKGFkZEJ1dHRvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24ub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVudGl0eURpYWxvZyh0aGlzLmdldEl0ZW1UeXBlKCksIGRsZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB0aGlzLnNhdmUob3B0LCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmZXJEaWFsb2dSZWFkT25seShkaWFsb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2codGhpcy5nZXROZXdFbnRpdHkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zLmZpbHRlcih4ID0+IHguY3NzQ2xhc3MgIT0gXCJyZWZyZXNoLWJ1dHRvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBlZGl0SXRlbShlbnRpdHlPcklkOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IGVudGl0eU9ySWQ7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZyA9IGRsZyBhcyBHcmlkRWRpdG9yRGlhbG9nPFRFbnRpdHk+O1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLm9uRGVsZXRlID0gKG9wdCwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVsZXRlRW50aXR5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHt9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0RWRpdFZhbHVlKHByb3BlcnR5LCB0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5Lm5hbWVdID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRFZGl0VmFsdWUoc291cmNlLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc291cmNlW3Byb3BlcnR5Lm5hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB2YWx1ZSgpOiBURW50aXR5W10ge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3LmdldEl0ZW1zKCkubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSBRLmRlZXBDbG9uZSh4KTtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHlbcF07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgJiYgaWQudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT0gJ2AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogVEVudGl0eVtdKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5nZXRJZFByb3BlcnR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcygodmFsdWUgfHwgW10pLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHkgYXMgYW55KVtwXSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICh5IGFzIGFueSlbcF0gPSBcImBcIiArIHRoaXMuZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcclxuICAgICAgICAgICAgfSksIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEdyaWRDYW5Mb2FkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbml0aWFsVGl0bGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZW5hYmxlRGVsZXRlQ29sdW1uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVEZWxldGVDb2x1bW4oKSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0RlbGV0ZSBSb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+ICc8YSBjbGFzcz1cImlubGluZS1hY3Rpb24gZGVsZXRlLXJvd1wiIHRpdGxlPVwiZGVsZXRlXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW8gdGV4dC1yZWRcIj48L2k+PC9hPicsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMjRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW06IFRFbnRpdHkgPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB1c2VyIGNsaWNrcyBcImlcIiBlbGVtZW50LCBlLmcuIGljb25cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnaW5saW5lLWFjdGlvbicpKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnaW5saW5lLWFjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlRGVsZXRlQ29sdW1uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc0NsYXNzKCdkZWxldGUtcm93JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnQ29udHJvbHMuRW50aXR5RGlhbG9nLkRlbGV0ZUNvbmZpcm1hdGlvbicpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVudGl0eShpdGVtW3RoaXMuZ2V0SWRQcm9wZXJ0eSgpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PiBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxURW50aXR5LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiX19pZFwiOyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvblNhdmU6IChvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5TYXZlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvbkRlbGV0ZTogKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2F2ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFwcGx5IGNoYW5nZXMgYnV0dG9uIGRvZXNuJ3Qgd29yayBwcm9wZXJseSB3aXRoIGluLW1lbW9yeSBncmlkcyB5ZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbHlDaGFuZ2VzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5Q2hhbmdlc0J1dHRvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlSGFuZGxlcihvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5TYXZlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5vblNhdmUgJiYgdGhpcy5vblNhdmUob3B0aW9ucywgY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGRlbGV0ZUhhbmRsZXIob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuRGVsZXRlUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlICYmIHRoaXMub25EZWxldGUob3B0aW9ucywgY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2lkZWJhclNlYXJjaCBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBwcml2YXRlIG1lbnVVTDogSlF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihpbnB1dDogSlF1ZXJ5LCBtZW51VUw6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuUXVpY2tTZWFyY2hJbnB1dChpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudVVMID0gbWVudVVMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZU1hdGNoRmxhZ3ModGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUxpc3QgPSB0aGlzLm1lbnVVTC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0ZXh0LnJlcGxhY2UoJywnLCAnICcpLnNwbGl0KCcgJykuZmlsdGVyKHggPT4gIVEuaXNUcmltbWVkRW1wdHkoeCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBRLnRyaW1Ub051bGwoU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhwYXJ0c1tpXSkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGxpTGlzdDtcclxuICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbiAoaWR4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICQoZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEuY29hbGVzY2UoeC50ZXh0KCksICcnKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsICYmICEodGl0bGUuaW5kZXhPZihwKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSBpdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlcyA9IG1hdGNoaW5nSXRlbXMucGFyZW50cygnbGknKS5hZGQobWF0Y2hpbmdJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgbGlMaXN0LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8QW5ub3VuY2VtZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEFubm91bmNlbWVudEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQW5ub3VuY2VtZW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QW5ub3VuY2VtZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEFubm91bmNlbWVudENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERpYWxvZ0N1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxBbm5vdW5jZW1lbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Rm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBbm5vdW5jZW1lbnRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRHcmlkQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxBbm5vdW5jZW1lbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Q29sdW1uc0N1c3RvbS5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREaWFsb2dDdXN0b207IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGV0YWlsRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEFubm91bmNlbWVudERldGFpbFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEFubm91bmNlbWVudERldGFpbEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEFubm91bmNlbWVudERldGFpbFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRHcmlkRGlhbG9nIGV4dGVuZHMgQ29tbW9uLkdyaWRFZGl0b3JEaWFsb2c8QW5ub3VuY2VtZW50Um93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxGb3JtQ3VzdG9tLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEFubm91bmNlbWVudEZvcm1DdXN0b20odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBBbm5vdW5jZW1lbnRUeXBlIDogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyByZXBhaXJEYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxufSIsIi8vLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JCYXNlLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuIC8qICAgaW1wb3J0IGZsZCA9IEFubm91bmNlbWVudFJvdy5GaWVsZHMqL1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudEdyaWRFZGl0b3IgZXh0ZW5kcyBDb21tb24uR3JpZEVkaXRvckJhc2U8QW5ub3VuY2VtZW50RGV0YWlsUm93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIlNlcnZpY2VBRC5Bbm5vdW5jZW1lbnREZXRhaWxDdXN0b21cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50R3JpZERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcblxyXG4gICAgICAgIC8vcHVibGljIHNlcnZpY2VDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIEF0dGFjaG1lbnQgOiBzdHJpbmc7XHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zZXJ2aWNlQ29kZSA9IFEuZ2V0Q29va2llKFwiU2VydmljZUNvZGVcIik7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIkRlbGV0ZVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihBbm5vdW5jZW1lbnRSb3cuZGVsZXRlUGVybWlzc2lvbikgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93ICAgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZmEgZmEtdHJhc2hcIiBkaXNhYmxlZCB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA3NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihBbm5vdW5jZW1lbnRSb3cudXBkYXRlUGVybWlzc2lvbikgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZWRpdC1yb3cgICBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDc1XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb2x1bW5zLnB1c2goXHJcbiAgICAgICAgICAgIC8vICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgIGZpZWxkOiBcIkNvbnRhY3RQZXJzb25Sb3dcIixcclxuICAgICAgICAgICAgLy8gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBmb3JtYXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBDb250YWN0UGVyc29uLXJvdyAgZmEgZmEtcGhvbmVcIiB0aXRsZT1cIuiBr+e1oeS6ulwiPuiBr+e1oeS6ujwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgd2lkdGg6IDg1LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgbWluV2lkdGg6IDg1LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgbWF4V2lkdGg6IDg1XHJcbiAgICAgICAgICAgIC8vICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgZ3JpZE9wdGlvbnMgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRPcHRpb25zLnJvd0hlaWdodCA9IDQwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGdyaWRPcHRpb25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2VkaXQtcm93JykpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpYWxvZyA9IGRsZyBhcyBBbm5vdW5jZW1lbnRHcmlkRGlhbG9nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHsgdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIudHJpZ2dlckRhdGFDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2RlbGV0ZS1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnQ29udHJvbHMuRW50aXR5RGlhbG9nLkRlbGV0ZUNvbmZpcm1hdGlvbicpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRpdHkoaXRlbVt0aGlzLmdldElkUHJvcGVydHkoKV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ0NvbnRhY3RQZXJzb24tcm93JykpIHtcclxuICAgICAgICAgICAgLy8gICAgbGV0IGRsZyA9IG5ldyBQdWJsaWNCYXNpYy5Db250YWN0UGVyc29uQ3VzdG9tR3JpZERpYWxvZyh0aGlzLnNlcnZpY2VDb2RlLCBpdGVtLlBhdGllbnRObywgaXRlbS5DYXNlTm8pO1xyXG4gICAgICAgICAgICAvLyAgICBkbGcubG9hZE5ld0FuZE9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgLy8gICAgLy9sZXQgZGxnID0gbmV3IENvbnRhY3RQZXJzb25HcmlkQ3VzdG9tKHRoaXMuc2xpY2tDb250YWluZXIucGFyZW50KCksIHRoaXMuc2VydmljZUNvZGUsIGl0ZW0uUGF0aWVudE5vKTtcclxuXHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ByaXZhdGUgYXV0b1NpemU7XHJcblxyXG4gICAgICAgIC8vcHJvdGVjdGVkIGNyZWF0ZVNsaWNrR3JpZCgpOiBTbGljay5HcmlkIHtcclxuICAgICAgICAvLyAgICBsZXQgZ3JpZCA9IHN1cGVyLmNyZWF0ZVNsaWNrR3JpZCgpO1xyXG4gICAgICAgIC8vICAgIHRoaXMuYXV0b1NpemUgPSBuZXcgU2xpY2suQXV0b0NvbHVtblNpemUodHJ1ZSk7IC8vICoqKiBJZiB5b3Ugd2FudCB0byBtYWtlIGl0IGF1dG9yZXNpemUgd2hlbiBncmlkIGlzIGxvYWRlZCwgdXNlOiBuZXcgU2xpY2suQXV0b0NvbHVtblNpemUodHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgZ3JpZC5yZWdpc3RlclBsdWdpbih0aGlzLmF1dG9TaXplKTtcclxuICAgICAgICAvLyAgICByZXR1cm4gZ3JpZDtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy8gKioqIFJlc2l6ZXMgdGhlIGNvbHVtbnMgYWZ0ZXIgY2hhbmdlcyBhcmUgbWFkZSB0byB0aGUgZ3JpZCAoZXguIENvbHVtbiBQaWNrZXIpICpcclxuICAgICAgICAvL3Byb3RlY3RlZCBtYXJrdXBSZWFkeSgpIHtcclxuICAgICAgICAvLyAgICBzdXBlci5tYXJrdXBSZWFkeSgpO1xyXG4gICAgICAgIC8vICAgIGlmICh0aGlzLmF1dG9TaXplICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgICAgdGhpcy5hdXRvU2l6ZS5yZXNpemVBbGxDb2x1bW5zKCk7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhc2VTZXJ2aWNlRGF0YURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDYXNlU2VydmljZURhdGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDYXNlU2VydmljZURhdGFGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDYXNlU2VydmljZURhdGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRGVsZXRlUm93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q2FzZVNlcnZpY2VEYXRhUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDYXNlU2VydmljZURhdGFSb3cuZGVsZXRlUGVybWlzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS1yb3cgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxDYXNlU2VydmljZURhdGFSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENhc2VTZXJ2aWNlRGF0YVJvdy51cGRhdGVQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRTbGlja09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBzbGljayA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG4gICAgICAgICAgICBzbGljay5yb3dIZWlnaHQgPSAzNTtcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJlZGl0LXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgQ2FzZVNlcnZpY2VEYXRhRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICBkbGcubG9hZEJ5SWRBbmRPcGVuRGlhbG9nKGl0ZW0uT2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZGVsZXRlLXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShcIueiuuWumuimgeWIqumZpOWXjj9cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuRGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50aXR5SWQ6IGl0ZW0uT2lkXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFwi5Yiq6Zmk5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhRGlhbG9nQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENhc2VTZXJ2aWNlRGF0YVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICBcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFHcmlkQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDYXNlU2VydmljZURhdGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhQ29sdW1uc0N1c3RvbS5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFEaWFsb2dDdXN0b207IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRGVsZXRlUm93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q2FzZVNlcnZpY2VEYXRhUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDYXNlU2VydmljZURhdGFSb3cuZGVsZXRlUGVybWlzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS1yb3cgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxDYXNlU2VydmljZURhdGFSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENhc2VTZXJ2aWNlRGF0YVJvdy51cGRhdGVQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRTbGlja09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBzbGljayA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG4gICAgICAgICAgICBzbGljay5yb3dIZWlnaHQgPSAzNTtcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJlZGl0LXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgQ2FzZVNlcnZpY2VEYXRhRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICBkbGcubG9hZEJ5SWRBbmRPcGVuRGlhbG9nKGl0ZW0uT2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZGVsZXRlLXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShcIueiuuWumuimgeWIqumZpOWXjj9cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuRGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50aXR5SWQ6IGl0ZW0uT2lkXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFwi5Yiq6Zmk5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENvbnRhY3RCb29rUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENvbnRhY3RCb29rRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDb250YWN0Qm9va1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDb250YWN0Qm9va0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb250YWN0Qm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UXVpY2tGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gc3VwZXIuZ2V0UXVpY2tGaWx0ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgQWxyZWFkeUZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJBbHJlYWR5a25vd1wiKTtcclxuICAgICAgICAgICAgaWYgKEFscmVhZHlGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIEFscmVhZHlGaWx0ZXIuaW5pdCA9IHcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICh3IGFzIEVkaXRvci5BbHJlYWR5S25vd0VkaXRvcikudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCh0cnVlKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tEaWFsb2dDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q29udGFjdEJvb2tSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tGb3JtQ3VzdG9tLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ29udGFjdEJvb2tGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgIHByaXZhdGUgY2FzZU5vO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihDYXNlbm8/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jYXNlTm8gPSBDYXNlbm87XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWR2aXNlLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS52YWwoKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uQWxyZWFkeWtub3cudmFsdWUgPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uQWxyZWFkeWtub3cudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy90aGlzLmZvcm0uQ2FzZW5vLnZhbHVlID0gdGhpcy5DYXNlbm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0RpYWxvZ0N1c3RvbTEgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q29udGFjdEJvb2tSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tGb3JtQ3VzdG9tMS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENvbnRhY3RCb29rRm9ybUN1c3RvbTEodGhpcy5pZFByZWZpeCk7XHJcbiAgICAgICAgcHJpdmF0ZSBDYXNlbm87XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKENhc2Vubz86IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLkNhc2VubyA9IENhc2VubztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5BZHZpc2UuY2hhbmdlKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLnZhbCgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5BbHJlYWR5a25vdy52YWx1ZSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5BbHJlYWR5a25vdy52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5TaG93VGV4dC52YWx1ZSA9IHRoaXMuQ2FzZW5vO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tHcmlkQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDb250YWN0Qm9va1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDb250YWN0Qm9va0NvbHVtbnNDdXN0b20uY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tEaWFsb2dDdXN0b207IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb250YWN0Qm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkgeyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcImFkZC1idXR0b25cIiksIDEpO1xyXG4gICAgICAgICAgICBidXR0b25zLnNwbGljZShRLmluZGV4T2YoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09IFwidG9vbC1idXR0b25cIiksIDEpO1xyXG4gICAgICAgICAgICBidXR0b25zLnNwbGljZShRLmluZGV4T2YoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09IFwicmVmcmVzaC1idXR0b25cIiksIDEpO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dChcIkxBTEFMQVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ3RleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXJlZ3VsYXIgZmEtYm9vaycsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRsZy5sb2FkTmV3QW5kT3BlbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5FeHRlbnNpb25zLkV4Y2VsRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZTogdGhpcy5nZXRTZXJ2aWNlKCkgKyAnL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuiBr+e1oeewv0VYQ0VMXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAvLyAgICBTZXJlbml0eS5FeHRlbnNpb25zLlJlcG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIHJlcG9ydEtleTogXCJSZXBvcnQuQ29udGFjdEJvb2tcIixcclxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiAn6IGv57Wh57C/UERGJ1xyXG4gICAgICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgICAgICAvLyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iBr+e1oeewv1BERicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJwZGYtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImZhIGZhLWZpbGUtcGRmLW9cIixcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9TZXJlbmUxLkNvbW1vbi5SZXBvcnRIZWxwZXIuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgcmVwb3J0S2V5OiBcIlNlcmVuZTEuQ29udGFjdEJvb2tSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvL30pO1xyXG4gICAgICAgICAgICAgICAgICAgIFNlcmVuaXR5LkV4dGVuc2lvbnMuUmVwb3J0SGVscGVyLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRLZXk6IFwiU2VyZW5lMS5Db250YWN0Qm9va1JlcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL29uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMuZWRpdEl0ZW0oPENvbnRhY3RCb29rUm93PntcclxuICAgICAgICAvLyAgICAgICAgICAgIENhc2VubzogdGhpcy5jYXNlbm8oKSxcclxuICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdTdWJtaXQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHJlcSA9IHRoaXMudmlldy5wYXJhbXMgYXMgU2VyZW5pdHkuTGlzdFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHJlcS5Tb3J0ID0gWydDaGVja2JveCcsICdBZHZpc2VkYXRlIGRlc2MnXVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IHN1cGVyLmdldFF1aWNrRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhc2Vub0ZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJDYXNlbm9cIik7XHJcbiAgICAgICAgICAgIGlmIChjYXNlbm9GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2Vub0ZpbHRlci5oYW5kbGVyID0gaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucmVxdWVzdC5Dcml0ZXJpYSA9IFNlcmVuaXR5LkNyaXRlcmlhLmFuZChbWydDYXNlbm8nXSwgJ2xpa2UnLCBgJSR7aC52YWx1ZX0lYF0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2Vub0ZpbHRlci5pbml0ID0gdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHcgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9IFwiZlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgQWR2aXNlZGF0ZWZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJBZHZpc2VkYXRlXCIpO1xyXG4gICAgICAgICAgICBpZiAoQWR2aXNlZGF0ZWZpbHRlcikgeyBcclxuICAgICAgICAgICAgICAgICAgICBBZHZpc2VkYXRlZmlsdGVyLmluaXQgPSByID0+IHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIChyIGFzIFNlcmVuaXR5LkRhdGVFZGl0b3IpLnZhbHVlID0gJyc7ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kRGF0ZSA9IHIuZWxlbWVudC5uZXh0QWxsKFwiLnMtRGF0ZUVkaXRvclwiKS5nZXRXaWRnZXQoU2VyZW5pdHkuRGF0ZUVkaXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZS52YWx1ZSA9ICdub3cnO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIGxldCBDcmVhdGVVc2VyRmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIkNyZWF0ZVVzZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChDcmVhdGVVc2VyRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVVc2VyRmlsdGVyLmluaXQgPSB6ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAoeiBhcyBTZXJlbml0eS5TdHJpbmdFZGl0b3IpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgbGV0IGFjb2wgPSBRLmZpcnN0KGNvbHVtbnMsIHggPT4geC5maWVsZCA9PSBcIkFscmVhZHlrbm93XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjb2wpIHtcclxuICAgICAgICAgICAgICAgIGFjb2wuZm9ybWF0ID0gKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENvbnRhY3RCb29rUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLkFscmVhZHlrbm93ID09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIuaYr1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uQWxyZWFkeWtub3cgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwi5ZCmXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkRlbGV0ZVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENvbnRhY3RCb29rUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDb250YWN0Qm9va1Jvdy5kZWxldGVQZXJtaXNzaW9uKSAmJiBpdGVtLkNoZWNrYm94ICE9IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS1yb3cgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q29udGFjdEJvb2tSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENvbnRhY3RCb29rUm93LnVwZGF0ZVBlcm1pc3Npb24pICYmIGl0ZW0uQ2hlY2tib3ggIT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0UmVjb21tYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoLypjdHgqLykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICBsZXQgaXRlbSA9IDxDb250YWN0Qm9va1Jvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ29udGFjdEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdzIgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK/lu7rorbBcIj7nt6jovK/lu7rorbA8L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgZGlzYWJsZWQgdGl0bGU9XCLnt6jovK/lu7rorbBcIj7nt6jovK/lu7rorbA8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA5NVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tKCk7XHJcbiAgICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImRlbGV0ZS1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oXCLnorrlrpropoHliKrpmaTll44/XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0Qm9va1NlcnZpY2UuRGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50aXR5SWQ6IGl0ZW0uT2lkXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFwi5Yiq6Zmk5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImVkaXQtcm93MlwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgQ29udGFjdEJvb2tEaWFsb2dDdXN0b20xKCd0ZXN0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKHRydWUpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBRdWVzdGlvbm5haXJlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEVtcFF1ZXN0aW9ubmFpcmVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgLy9wcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgRW1wUXVlc3Rpb25uYWlyZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW50aXR5LkVtcE5vKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCh0cnVlKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wUXVlc3Rpb25uYWlyZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEVtcFF1ZXN0aW9ubmFpcmVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZUNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCh0cnVlKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RW1wbG95ZWVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRW1wbG95ZWVGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRW1wbG95ZWVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgRW1wbG95ZWVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEVtcGxveWVlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEVtcGxveWVlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBFbXBsb3llZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBsb3llZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcGxveWVlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAvL2J1dHRvbnMuc3BsaWNlKFEuaW5kZXhPZihidXR0b25zLCB4ID0+IHguY3NzQ2xhc3MgPT0gXCJhZGQtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInRvb2wtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInJlZnJlc2gtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgLy9idXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAvLyAgICAgICAgdGl0bGU6IFEudGV4dChcIkVNUFFVRVNUSU9OTkFJUkVcIiksXHJcbiAgICAgICAgICAgIC8vICAgIGNzc0NsYXNzOiAndGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgLy8gICAgaWNvbjogJ2ZhLXJlZ3VsYXIgZmEtYm9vaycsXHJcbiAgICAgICAgICAgIC8vICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgIGxldCBkbGcgPSBuZXcgRW1wbG95ZWVEaWFsb2coKTtcclxuICAgICAgICAgICAgLy8gICAgICAgIGRsZy5sb2FkTmV3QW5kT3BlbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLylcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IHRoaXMuZ2V0U2VydmljZSgpICsgJy9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLlk6Hlt6VFWENFTFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0VtcGxveWVlUERGJyxcclxuICAgICAgICAgICAgICBjc3NDbGFzczogXCJwZGYtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgaWNvbjogXCJmYSBmYS1maWxlLXBkZi1vXCIsXHJcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgU2VyZW5lMS5Db21tb24uUmVwb3J0SGVscGVyLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVwb3J0S2V5OiBcIlNlcmVuZTEuRW1wbG95ZWVSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG59KTtcclxucmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBFbXBsb3llZU5hbWVGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiRW1wbG95ZWVOYW1lXCIpO1xyXG4gICAgICAgICAgICBpZiAoRW1wbG95ZWVOYW1lRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZU5hbWVGaWx0ZXIuaGFuZGxlciA9IGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snRW1wbG95ZWVOYW1lJ10sICdsaWtlJywgYCUke2gudmFsdWV9JWBdLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZU5hbWVGaWx0ZXIuaW5pdCA9IGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIChhIGFzIFNlcmVuaXR5LlN0cmluZ0VkaXRvcikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IEVtcGxveWVlSWRGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiRW1wbG95ZWVJZFwiKTtcclxuICAgICAgICAgICAgaWYgKEVtcGxveWVlSWRGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIEVtcGxveWVlSWRGaWx0ZXIuaGFuZGxlciA9IGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snRW1wbG95ZWVJZCddLCAnbGlrZScsIGAlJHtpLnZhbHVlfSVgXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRW1wbG95ZWVJZEZpbHRlci5pbml0ID0gYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGIgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgRGVwdElkRmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIkRlcHRJZFwiKTtcclxuICAgICAgICAgICAgaWYgKERlcHRJZEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgRGVwdElkRmlsdGVyLmhhbmRsZXIgPSBqID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChqLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgai5yZXF1ZXN0LkNyaXRlcmlhID0gU2VyZW5pdHkuQ3JpdGVyaWEuYW5kKFtbJ0RlcHRJZCddLCAnbGlrZScsIGAlJHtqLnZhbHVlfSVgXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEZXB0SWRGaWx0ZXIuaW5pdCA9IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgKGMgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgUG9zdFR5cGVGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiUG9zdFR5cGVcIik7XHJcbiAgICAgICAgICAgIGlmIChQb3N0VHlwZUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgUG9zdFR5cGVGaWx0ZXIuaGFuZGxlciA9IHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snUG9zdFR5cGUnXSwgJ2xpa2UnLCBgJSR7di52YWx1ZX0lYF0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFBvc3RUeXBlRmlsdGVyLmluaXQgPSBkID0+IHtcclxuICAgICAgICAgICAgICAgIChkIGFzIFNlcmVuaXR5LlN0cmluZ0VkaXRvcikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHNsaWNrID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHNsaWNrLnJvd0hlaWdodCA9IDM1O1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPEVtcFF1ZXN0aW9ubmFpcmVSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKEVtcFF1ZXN0aW9ubmFpcmVSb3cudXBkYXRlUGVybWlzc2lvbikgfHwgUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oRW1wUXVlc3Rpb25uYWlyZVJvdy5pbnNlcnRQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGVkaXQtcm93IGZhIGZhLWxpc3QtdWxcIiB0aXRsZT1cIuWToeW3peaKgOiDveWVj+WNt1wiPuWToeW3peaKgOiDveWVj+WNtzwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBmYSBmYS1saXN0LXVsXCIgZGlzYWJsZWQgdGl0bGU9XCLlk6Hlt6XmioDog73llY/ljbdcIj7lk6Hlt6XmioDog73llY/ljbc8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTQwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0SXRlbUNzc0NsYXNzKGl0ZW06IERlZmF1bHQuRW1wbG95ZWVSb3csIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQga2xhc3M6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLkVtcGxveWVlSWQgPT0gbnVsbCB8fCBpdGVtLkVtcGxveWVlTmFtZSA9PSBudWxsIHx8IGl0ZW0uRW1wbG95ZWVFbmdOYW1lID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBrbGFzcyArPSBcIiBudWxsIFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFEudHJpbVRvTnVsbChrbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImVkaXQtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBFbXBRdWVzdGlvbm5haXJlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW1wUXVlc3Rpb25uYWlyZU9pZDtcclxuICAgICAgICAgICAgICAgIEVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIENyaXRlcmlhOiBbWydFbXBObyddLCAnPScsIGl0ZW0uRW1wbG95ZWVJZF0sXHJcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgLy/mib5yZXNwb25zZSDnmoTlsazmgKdcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuRW50aXRpZXMubGVuZ3RoID4gMCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wUXVlc3Rpb25uYWlyZU9pZCA9IHJlc3BvbnNlLkVudGl0aWVzWzBdLk9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhlbXBRdWVzdGlvbm5haXJlT2lkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IEVtcFF1ZXN0aW9ubmFpcmVEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGxnLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKDxFbXBRdWVzdGlvbm5haXJlUm93PnsgRW1wTm86IGl0ZW0uRW1wbG95ZWVJZCwgUURhdGU6IFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCAneXl5eS9NTS9kZCBISDptbTpzcycpIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCB7IGFzeW5jOiBmYWxzZSB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNHcmlkRGlhbG9nIGV4dGVuZHMgQ29tbW9uLkdyaWRFZGl0b3JEaWFsb2c8UmVwYWlyRm9ybVJlY29yZHNSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VydmljZVR5cGUgOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIE1hdGVyaWFsTm86IHN0cmluZztcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG59IiwiLy8vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckJhc2UudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAvKiBpbXBvcnQgZmxkID1SZXBhaXJGb3JtUmVjb3Jkc1Jvdy5GaWVsZHMqL1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzR3JpZEVkaXRvciBleHRlbmRzIENvbW1vbi5HcmlkRWRpdG9yQmFzZTxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJTZXJ2aWNlQUQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b21cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNHcmlkRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICAvL3B1YmxpYyBzZXJ2aWNlQ29kZTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBBcmVhIDogc3RyaW5nO1xyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2VydmljZUNvZGUgPSBRLmdldENvb2tpZShcIlNlcnZpY2VDb2RlXCIpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oUmVwYWlyRm9ybVJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbikgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93ICAgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZmEgZmEtdHJhc2hcIiBkaXNhYmxlZCB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA3NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihSZXBhaXJGb3JtUmVjb3Jkc1Jvdy51cGRhdGVQZXJtaXNzaW9uKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdyAgIGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgZGlzYWJsZWQgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNzVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2NvbHVtbnMucHVzaChcclxuICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgZmllbGQ6IFwiQ29udGFjdFBlcnNvblJvd1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IENvbnRhY3RQZXJzb24tcm93ICBmYSBmYS1waG9uZVwiIHRpdGxlPVwi6IGv57Wh5Lq6XCI+6IGv57Wh5Lq6PC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgLy8gICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICB3aWR0aDogODUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBtaW5XaWR0aDogODUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBtYXhXaWR0aDogODVcclxuICAgICAgICAgICAgLy8gICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTbGlja09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkT3B0aW9ucyA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZE9wdGlvbnMucm93SGVpZ2h0ID0gNDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ3JpZE9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZWRpdC1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIFJlcGFpckZvcm1SZWNvcmRzR3JpZERpYWxvZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLnRyaWdnZXJEYXRhQ2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdkZWxldGUtcm93JykpIHtcclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50aXR5KGl0ZW1bdGhpcy5nZXRJZFByb3BlcnR5KCldKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdDb250YWN0UGVyc29uLXJvdycpKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBkbGcgPSBuZXcgUHVibGljQmFzaWMuQ29udGFjdFBlcnNvbkN1c3RvbUdyaWREaWFsb2codGhpcy5zZXJ2aWNlQ29kZSwgaXRlbS5QYXRpZW50Tm8sIGl0ZW0uQ2FzZU5vKTtcclxuICAgICAgICAgICAgLy8gICAgZGxnLmxvYWROZXdBbmRPcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIC8vICAgIC8vbGV0IGRsZyA9IG5ldyBDb250YWN0UGVyc29uR3JpZEN1c3RvbSh0aGlzLnNsaWNrQ29udGFpbmVyLnBhcmVudCgpLCB0aGlzLnNlcnZpY2VDb2RlLCBpdGVtLlBhdGllbnRObyk7XHJcblxyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wcml2YXRlIGF1dG9TaXplO1xyXG5cclxuICAgICAgICAvL3Byb3RlY3RlZCBjcmVhdGVTbGlja0dyaWQoKTogU2xpY2suR3JpZCB7XHJcbiAgICAgICAgLy8gICAgbGV0IGdyaWQgPSBzdXBlci5jcmVhdGVTbGlja0dyaWQoKTtcclxuICAgICAgICAvLyAgICB0aGlzLmF1dG9TaXplID0gbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpOyAvLyAqKiogSWYgeW91IHdhbnQgdG8gbWFrZSBpdCBhdXRvcmVzaXplIHdoZW4gZ3JpZCBpcyBsb2FkZWQsIHVzZTogbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpO1xyXG4gICAgICAgIC8vICAgIGdyaWQucmVnaXN0ZXJQbHVnaW4odGhpcy5hdXRvU2l6ZSk7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGdyaWQ7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIC8vICoqKiBSZXNpemVzIHRoZSBjb2x1bW5zIGFmdGVyIGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIGdyaWQgKGV4LiBDb2x1bW4gUGlja2VyKSAqXHJcbiAgICAgICAgLy9wcm90ZWN0ZWQgbWFya3VwUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gICAgc3VwZXIubWFya3VwUmVhZHkoKTtcclxuICAgICAgICAvLyAgICBpZiAodGhpcy5hdXRvU2l6ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMuYXV0b1NpemUucmVzaXplQWxsQ29sdW1ucygpO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSZXBhaXJGb3JtUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmVwYWlyRm9ybVJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNEaWFsb2dDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UmVwYWlyRm9ybVJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmVwYWlyRm9ybVJlY29yZHNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0dyaWRDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJlcGFpckZvcm1SZWNvcmRzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzQ29sdW1uc0N1c3RvbS5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBSZXBhaXJFbXBJZEZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJSZXBhaXJFbXBJZFwiKTtcclxuICAgICAgICAgICAgaWYgKFJlcGFpckVtcElkRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJFbXBJZEZpbHRlci5pbml0ID0geiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHogYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBBZHZpc2VkYXRlZmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIlJlcGFpckRhdGVcIik7XHJcbiAgICAgICAgICAgIGlmIChBZHZpc2VkYXRlZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBBZHZpc2VkYXRlZmlsdGVyLmluaXQgPSByID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAociBhcyBTZXJlbml0eS5EYXRlRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kRGF0ZSA9IHIuZWxlbWVudC5uZXh0QWxsKFwiLnMtRGF0ZUVkaXRvclwiKS5nZXRXaWRnZXQoU2VyZW5pdHkuRGF0ZUVkaXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHNsaWNrID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHNsaWNrLnJvd0hlaWdodCA9IDM1O1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRGVsZXRlUm93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8UmVwYWlyRm9ybVJlY29yZHNSb3c+IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5kZWxldGVQZXJtaXNzaW9uKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS1yb3cgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8UmVwYWlyRm9ybVJlY29yZHNSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFJlcGFpckZvcm1SZWNvcmRzUm93LnVwZGF0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJlZGl0LXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgUmVwYWlyRm9ybVJlY29yZHNEaWFsb2dDdXN0b20oKTtcclxuICAgICAgICAgICAgICAgIGRsZy5sb2FkQnlJZEFuZE9wZW5EaWFsb2coaXRlbS5PaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJkZWxldGUtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFwi56K65a6a6KaB5Yiq6Zmk5ZeOP1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgICAgIFxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgQWxyZWFkeUtub3dFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzAnLCBcIuWQplwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIuaYr1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgQXJlYUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi6Iqx6JOu5biCXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi56eA5p6X6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5ZCJ5a6J6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwi5aO96LGQ6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNScsIFwi6bOz5p6X6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNicsIFwi6JCs5qau6YSJXCIpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEJvZHlFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5SYWRpb0J1dHRvbkVkaXRvciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdD86IFNlcmVuaXR5LlJhZGlvQnV0dG9uRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFJhZGlvKCdGJywgXCLlo6/noqlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmFkaW8oJ1QnLCBcIue6lue0sFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRSYWRpbygnTScsIFwi5Lit562JXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJMb29rVXBFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFNlcmVuaXR5LlNlbGVjdDJFZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2VyZW5lMS5BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS5MaXN0KHt9LCAocikgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICBpZiAoci5Ub3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgJC5lYWNoKHIuRW50aXRpZXMsIChpLCBtKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24obS5Vc2VySWQudG9TdHJpbmcoKSwgbS5EaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAvL30sIHsgYXN5bmM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBTZXJlbmUxLkFkbWluaXN0cmF0aW9uLlVzZXJSb3cuZ2V0TG9va3VwKCkuaXRlbXMuZm9yRWFjaCgobSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24obS5Vc2VySWQudG9TdHJpbmcoKSwgKG0uRGlzcGxheU5hbWUgPz8gXCLmnKroqK3lrppcIikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi5ZyL6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi5Y+w6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5aSq6a2v6Zaj6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwi6Zi/576O5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNScsIFwi5biD6L6y5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNicsIFwi5o6S54Gj5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNycsIFwi5Y2w5bC86KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignOCcsIFwi6LaK5Y2X6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignOScsIFwi6Iux6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMTAnLCBcIuaXpeiqnlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgTGV2ZWxFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIui6q+W/g+manOekmeiok+e3tFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzInLCBcIuWkseaZuuiok+e3tFwiKTtcclxuICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvb2tVcEVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogU2VyZW5pdHkuU2VsZWN0MkVkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5lMS5EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuTGlzdCh7fSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLlRvdGFsQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHIuRW50aXRpZXMsIChpLCBtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKG0uQ2FzZU5vLCBtLlBhdGllbnRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHsgYXN5bmM6IGZhbHNlIH0pO1xyXG4gICAgICAgIC8vICAgIFNlcmVuZTEuRGVmYXVsdC5DYXNlU2VydmljZURhdGFSb3cuZ2V0TG9va3VwKCkuaXRlbXMuZm9yRWFjaCgobSwgaSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICB0aGlzLmFkZE9wdGlvbihtLkNhc2VObywgKG0uUm9jSWQgPz8gXCLmnKroqK3lrppcIikpO1xyXG4gICAgICAgIC8vICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUGhhc2VFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ0EnLCBcIuS4iuWNiFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ1AnLCBcIuS4i+WNiFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ1QnLCBcIuWFqOaXpVwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ04nLCBcIuWknOmWkzE4OjAwLTIwOjAwXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBTZXhFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5SYWRpb0J1dHRvbkVkaXRvcntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuUmFkaW9CdXR0b25FZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmFkaW8oJ00nLCBcIiAgICDnlLcgIFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRSYWRpbygnRicsIFwiICAgIOWlsyAgXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBXb3JrWWVhckVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwiMuW5tFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzInLCBcIjMtNeW5tFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzMnLCBcIjYtOeW5tFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzQnLCBcIj4xMOW5tFwiKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPExvZ2luUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTG9naW5Gb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMb2dpbkZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlID0gJ3NlcmVuaXR5JztcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlVzZXJuYW1lLnZhbHVlID0gJ2FkbWluJztcclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdMb2dpbkJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9SZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChyZXNwb25zZTogU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IuQ29kZSA9PSBcIlJlZGlyZWN0VXNlclRvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuRXJyb3IuQXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmICFRLmlzRW1wdHlPck51bGwocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IocmVzcG9uc2UuRXJyb3IuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjUGFzc3dvcmQnKS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5FcnJvckhhbmRsaW5nLnNob3dTZXJ2aWNlRXJyb3IocmVzcG9uc2UuRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdFRvUmV0dXJuVXJsKCkge1xyXG4gICAgICAgICAgICB2YXIgcSA9IFEucGFyc2VRdWVyeVN0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVXJsID0gcVsncmV0dXJuVXJsJ10gfHwgcVsnUmV0dXJuVXJsJ107XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5VcmwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaCAhPSBudWxsICYmIGhhc2ggIT0gJyMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblVybCArPSBoYXNoO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgcC00XCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke1EucmVzb2x2ZVVybChcIn4vQ29udGVudC9zaXRlL2ltYWdlcy9zZXJlbml0eS1sb2dvLXctMTI4LnBuZ1wiKX1cIlxyXG4gICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIHAtMVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcy1zaWRlYmFyLWJhbmQtYmcpXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgLz4gU2VyZW5lMVxyXG4gICAgPC9oMj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicy1QYW5lbCBwLTRcIj5cclxuICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS00XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkxvZ2luVG9Zb3VyQWNjb3VudFwiKX08L2g1PlxyXG4gICAgICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtZW5kIHRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uRm9yZ290UGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X0xvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LTMgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnbkluQnV0dG9uXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpfVwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduVXBCdXR0b25cIil9PC9hPlxyXG4gICAgPC9kaXY+ICAgXHJcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Q2hhbmdlUGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDaGFuZ2VQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IENoYW5nZVBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBDaGFuZ2VQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udygnQ29uZmlybVBhc3N3b3JkJywgU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3IpLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvQ2hhbmdlUGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicy1QYW5lbFwiPlxyXG4gICAgPGgzIGNsYXNzPVwicGFnZS10aXRsZSBtYi00IHRleHQtY2VudGVyXCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLkZvcm1UaXRsZVwiKX08L2gzPlxyXG4gICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGQgbXQtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9TdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWJtaXRCdXR0b25cIil9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPEZvcmdvdFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRm9yZ290UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBGb3Jnb3RQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9yZ290UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS4gIGNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19