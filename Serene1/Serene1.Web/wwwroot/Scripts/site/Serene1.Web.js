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
        var ClinicsColumns = /** @class */ (function () {
            function ClinicsColumns() {
            }
            ClinicsColumns.columnsKey = 'Default.Clinics';
            return ClinicsColumns;
        }());
        Default.ClinicsColumns = ClinicsColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ClinicsForm = /** @class */ (function (_super) {
            __extends(ClinicsForm, _super);
            function ClinicsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ClinicsForm.init) {
                    ClinicsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ClinicsForm, [
                        'DeptNo', w0,
                        'ClinicNo', w0,
                        'ClinicName', w0,
                        'ClinicNameEng', w0
                    ]);
                }
                return _this;
            }
            ClinicsForm.formKey = 'Default.Clinics';
            return ClinicsForm;
        }(Serenity.PrefixedContext));
        Default.ClinicsForm = ClinicsForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ClinicsRow;
        (function (ClinicsRow) {
            ClinicsRow.idProperty = 'DeptNo';
            ClinicsRow.nameProperty = 'DeptNo';
            ClinicsRow.localTextPrefix = 'Default.Clinics';
            ClinicsRow.deletePermission = 'Default:Clinics:Delete';
            ClinicsRow.insertPermission = 'Default:Clinics:Add';
            ClinicsRow.readPermission = 'Default:Clinics:View';
            ClinicsRow.updatePermission = 'Default:Clinics:Modify';
        })(ClinicsRow = Default.ClinicsRow || (Default.ClinicsRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ClinicsService;
        (function (ClinicsService) {
            ClinicsService.baseUrl = 'Default/Clinics';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ClinicsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ClinicsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ClinicsService = Default.ClinicsService || (Default.ClinicsService = {}));
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
        var DepartmentsColumns = /** @class */ (function () {
            function DepartmentsColumns() {
            }
            DepartmentsColumns.columnsKey = 'Default.Departments';
            return DepartmentsColumns;
        }());
        Default.DepartmentsColumns = DepartmentsColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartmentsForm = /** @class */ (function (_super) {
            __extends(DepartmentsForm, _super);
            function DepartmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DepartmentsForm.init) {
                    DepartmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(DepartmentsForm, [
                        'DeptNo', w0,
                        'DeptName', w0,
                        'DeptNameEng', w0,
                        'Hiddent', w1
                    ]);
                }
                return _this;
            }
            DepartmentsForm.formKey = 'Default.Departments';
            return DepartmentsForm;
        }(Serenity.PrefixedContext));
        Default.DepartmentsForm = DepartmentsForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartmentsRow;
        (function (DepartmentsRow) {
            DepartmentsRow.idProperty = 'DeptNo';
            DepartmentsRow.nameProperty = 'DeptNo';
            DepartmentsRow.localTextPrefix = 'Default.Departments';
            DepartmentsRow.deletePermission = 'Default:Departments:Delete';
            DepartmentsRow.insertPermission = 'Default:Departments:Add';
            DepartmentsRow.readPermission = 'Default:Departments:View';
            DepartmentsRow.updatePermission = 'Default:Departments:Modify';
        })(DepartmentsRow = Default.DepartmentsRow || (Default.DepartmentsRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartmentsService;
        (function (DepartmentsService) {
            DepartmentsService.baseUrl = 'Default/Departments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartmentsService = Default.DepartmentsService || (Default.DepartmentsService = {}));
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
    var Default;
    (function (Default) {
        var SpecialCallingLogicsColumns = /** @class */ (function () {
            function SpecialCallingLogicsColumns() {
            }
            SpecialCallingLogicsColumns.columnsKey = 'Default.SpecialCallingLogics';
            return SpecialCallingLogicsColumns;
        }());
        Default.SpecialCallingLogicsColumns = SpecialCallingLogicsColumns;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var SpecialCallingLogicsForm = /** @class */ (function (_super) {
            __extends(SpecialCallingLogicsForm, _super);
            function SpecialCallingLogicsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SpecialCallingLogicsForm.init) {
                    SpecialCallingLogicsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Serene1.Editor.StatusEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(SpecialCallingLogicsForm, [
                        'PackageName', w0,
                        'SpecialStatus', w1,
                        'Seq', w2,
                        'RagulerCount', w2,
                        'CallCount', w2,
                        'OldAge', w2
                    ]);
                }
                return _this;
            }
            SpecialCallingLogicsForm.formKey = 'Default.SpecialCallingLogics';
            return SpecialCallingLogicsForm;
        }(Serenity.PrefixedContext));
        Default.SpecialCallingLogicsForm = SpecialCallingLogicsForm;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var SpecialCallingLogicsRow;
        (function (SpecialCallingLogicsRow) {
            SpecialCallingLogicsRow.idProperty = 'Id';
            SpecialCallingLogicsRow.nameProperty = 'PackageName';
            SpecialCallingLogicsRow.localTextPrefix = 'Default.SpecialCallingLogics';
            SpecialCallingLogicsRow.deletePermission = 'Default:SpecialCallingLogics:Delete';
            SpecialCallingLogicsRow.insertPermission = 'Default:SpecialCallingLogics:Add';
            SpecialCallingLogicsRow.readPermission = 'Default:SpecialCallingLogics:View';
            SpecialCallingLogicsRow.updatePermission = 'Default:SpecialCallingLogics:Modify';
        })(SpecialCallingLogicsRow = Default.SpecialCallingLogicsRow || (Default.SpecialCallingLogicsRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var SpecialCallingLogicsService;
        (function (SpecialCallingLogicsService) {
            SpecialCallingLogicsService.baseUrl = 'Default/SpecialCallingLogics';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SpecialCallingLogicsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SpecialCallingLogicsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SpecialCallingLogicsService = Default.SpecialCallingLogicsService || (Default.SpecialCallingLogicsService = {}));
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
        Serene1['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Default: { Announcement: { AnnounceDesc: 1, AnnouncePriority: 1, AnnounceType: 1, Attachments: 1, Createdate: 1, Createuser: 1, DetailList: 1, Oid: 1, ReleaseDate: 1, ServiceCode: 1, TargetRoleIds: 1, TargetUserIds: 1, Updatedate: 1, Updateuser: 1 }, AnnouncementDetail: { AnnouncementsId: 1, Createdate: 1, Createuser: 1, Oid: 1, ReplyContent: 1, ReplyDate: 1, ReplyUser: 1, TargetUser: 1, Updatedate: 1, Updateuser: 1 }, CaseServiceData: { CaseNo: 1, CreateDate: 1, CreateUser: 1, CreateUserName: 1, Oid: 1, PatientId: 1, RocId: 1, UpdateDate: 1, UpdateUser: 1, UpdateUserName: 1 }, Clinics: { ClinicName: 1, ClinicNameEng: 1, ClinicNo: 1, DeptNo: 1 }, ContactBook: { Advise: 1, Advisedate: 1, Alreadyknow: 1, AlreadyknowExpre: 1, Caseno: 1, Checkbox: 1, CreateDate: 1, CreateUser: 1, CreateUserName: 1, Oid: 1, UpdateDate: 1, UpdateUser: 1, UpdateUserName: 1 }, Departments: { DeptName: 1, DeptNameEng: 1, DeptNo: 1, Hiddent: 1 }, EmpQuestionnaire: { Age: 1, EmpArea: 1, EmpBody: 1, EmpDriverLicense: 1, EmpEffectiveDate: 1, EmpEmt1License: 1, EmpLanguage: 1, EmpNo: 1, EmpServiceLevel: 1, EmpSkill: 1, EmpTimePhase: 1, EmpWorkYear: 1, Height: 1, Oid: 1, QDate: 1, Sex: 1, UpdateDate: 1, UpdateUser: 1, Weight: 1 }, Employee: { Address1: 1, Address2: 1, Birthday: 1, BloodType: 1, Church: 1, CitizenId: 1, CountryId: 1, DeptId: 1, DeptType: 1, Educate: 1, EmName: 1, EmRelation: 1, EmployeeEngName: 1, EmployeeId: 1, EmployeeName: 1, Homeland: 1, IdentificationCardNo: 1, LeaveDate: 1, License: 1, MarryFlag: 1, Oid: 1, OrgId: 1, PatientId: 1, PositionId: 1, PostId: 1, PostType: 1, PractitionerRegisterFlag: 1, RaceFlag: 1, Ranks: 1, Religion: 1, RetireFlag: 1, Sex: 1, Standard: 1, StartDate: 1, Telephone1: 1, Telephone2: 1, UnitId: 1, Username: 1, Years: 1 }, RepairFormDetailRecords: { Createdate: 1, Createuser: 1, MaterialAmount: 1, Oid: 1, PayAmount: 1, RepairFormRecordsId: 1, SubsidyAmount: 1, Updatedate: 1, Updateuser: 1, UseMaterial: 1, UseMaterialCount: 1 }, RepairFormRecords: { Area: 1, AssistiveSource: 1, CaseNo: 1, Createdate: 1, Createuser: 1, DetailList: 1, EvalutionLevel: 1, HandlingPlace: 1, ItemName: 1, MaterialNo: 1, Oid: 1, Place: 1, RepairDate: 1, RepairEmpId: 1, RepairRecord: 1, ServiceCount: 1, ServiceType: 1, SubsidySource: 1, Township: 1, Updatedate: 1, Updateuser: 1 }, SpecialCallingLogics: { CallCount: 1, Id: 1, OldAge: 1, PackageName: 1, RagulerCount: 1, Seq: 1, SpecialStatus: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
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
        var ClinicsDialog = /** @class */ (function (_super) {
            __extends(ClinicsDialog, _super);
            function ClinicsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ClinicsForm(_this.idPrefix);
                return _this;
            }
            ClinicsDialog.prototype.getFormKey = function () { return Default.ClinicsForm.formKey; };
            ClinicsDialog.prototype.getIdProperty = function () { return Default.ClinicsRow.idProperty; };
            ClinicsDialog.prototype.getLocalTextPrefix = function () { return Default.ClinicsRow.localTextPrefix; };
            ClinicsDialog.prototype.getNameProperty = function () { return Default.ClinicsRow.nameProperty; };
            ClinicsDialog.prototype.getService = function () { return Default.ClinicsService.baseUrl; };
            ClinicsDialog.prototype.getDeletePermission = function () { return Default.ClinicsRow.deletePermission; };
            ClinicsDialog.prototype.getInsertPermission = function () { return Default.ClinicsRow.insertPermission; };
            ClinicsDialog.prototype.getUpdatePermission = function () { return Default.ClinicsRow.updatePermission; };
            ClinicsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ClinicsDialog);
            return ClinicsDialog;
        }(Serenity.EntityDialog));
        Default.ClinicsDialog = ClinicsDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var ClinicsGrid = /** @class */ (function (_super) {
            __extends(ClinicsGrid, _super);
            function ClinicsGrid(container) {
                return _super.call(this, container) || this;
            }
            ClinicsGrid.prototype.getColumnsKey = function () { return Default.ClinicsColumns.columnsKey; };
            ClinicsGrid.prototype.getDialogType = function () { return Default.ClinicsDialog; };
            ClinicsGrid.prototype.getIdProperty = function () { return Default.ClinicsRow.idProperty; };
            ClinicsGrid.prototype.getInsertPermission = function () { return Default.ClinicsRow.insertPermission; };
            ClinicsGrid.prototype.getLocalTextPrefix = function () { return Default.ClinicsRow.localTextPrefix; };
            ClinicsGrid.prototype.getService = function () { return Default.ClinicsService.baseUrl; };
            ClinicsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ClinicsGrid);
            return ClinicsGrid;
        }(Serenity.EntityGrid));
        Default.ClinicsGrid = ClinicsGrid;
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
        var DepartmentsDialog = /** @class */ (function (_super) {
            __extends(DepartmentsDialog, _super);
            function DepartmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DepartmentsForm(_this.idPrefix);
                return _this;
            }
            DepartmentsDialog.prototype.getFormKey = function () { return Default.DepartmentsForm.formKey; };
            DepartmentsDialog.prototype.getIdProperty = function () { return Default.DepartmentsRow.idProperty; };
            DepartmentsDialog.prototype.getLocalTextPrefix = function () { return Default.DepartmentsRow.localTextPrefix; };
            DepartmentsDialog.prototype.getNameProperty = function () { return Default.DepartmentsRow.nameProperty; };
            DepartmentsDialog.prototype.getService = function () { return Default.DepartmentsService.baseUrl; };
            DepartmentsDialog.prototype.getDeletePermission = function () { return Default.DepartmentsRow.deletePermission; };
            DepartmentsDialog.prototype.getInsertPermission = function () { return Default.DepartmentsRow.insertPermission; };
            DepartmentsDialog.prototype.getUpdatePermission = function () { return Default.DepartmentsRow.updatePermission; };
            DepartmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsDialog);
            return DepartmentsDialog;
        }(Serenity.EntityDialog));
        Default.DepartmentsDialog = DepartmentsDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartmentsGrid = /** @class */ (function (_super) {
            __extends(DepartmentsGrid, _super);
            function DepartmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartmentsGrid.prototype.getColumnsKey = function () { return Default.DepartmentsColumns.columnsKey; };
            DepartmentsGrid.prototype.getDialogType = function () { return Default.DepartmentsDialog; };
            DepartmentsGrid.prototype.getIdProperty = function () { return Default.DepartmentsRow.idProperty; };
            DepartmentsGrid.prototype.getInsertPermission = function () { return Default.DepartmentsRow.insertPermission; };
            DepartmentsGrid.prototype.getLocalTextPrefix = function () { return Default.DepartmentsRow.localTextPrefix; };
            DepartmentsGrid.prototype.getService = function () { return Default.DepartmentsService.baseUrl; };
            DepartmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartmentsGrid);
            return DepartmentsGrid;
        }(Serenity.EntityGrid));
        Default.DepartmentsGrid = DepartmentsGrid;
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
    var Default;
    (function (Default) {
        var SpecialCallingLogicsDialog = /** @class */ (function (_super) {
            __extends(SpecialCallingLogicsDialog, _super);
            function SpecialCallingLogicsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SpecialCallingLogicsForm(_this.idPrefix);
                return _this;
            }
            SpecialCallingLogicsDialog.prototype.getFormKey = function () { return Default.SpecialCallingLogicsForm.formKey; };
            SpecialCallingLogicsDialog.prototype.getIdProperty = function () { return Default.SpecialCallingLogicsRow.idProperty; };
            SpecialCallingLogicsDialog.prototype.getLocalTextPrefix = function () { return Default.SpecialCallingLogicsRow.localTextPrefix; };
            SpecialCallingLogicsDialog.prototype.getNameProperty = function () { return Default.SpecialCallingLogicsRow.nameProperty; };
            SpecialCallingLogicsDialog.prototype.getService = function () { return Default.SpecialCallingLogicsService.baseUrl; };
            SpecialCallingLogicsDialog.prototype.getDeletePermission = function () { return Default.SpecialCallingLogicsRow.deletePermission; };
            SpecialCallingLogicsDialog.prototype.getInsertPermission = function () { return Default.SpecialCallingLogicsRow.insertPermission; };
            SpecialCallingLogicsDialog.prototype.getUpdatePermission = function () { return Default.SpecialCallingLogicsRow.updatePermission; };
            SpecialCallingLogicsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialCallingLogicsDialog);
            return SpecialCallingLogicsDialog;
        }(Serenity.EntityDialog));
        Default.SpecialCallingLogicsDialog = SpecialCallingLogicsDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var SpecialCallingLogicsGrid = /** @class */ (function (_super) {
            __extends(SpecialCallingLogicsGrid, _super);
            function SpecialCallingLogicsGrid(container) {
                return _super.call(this, container) || this;
            }
            SpecialCallingLogicsGrid.prototype.getColumnsKey = function () { return Default.SpecialCallingLogicsColumns.columnsKey; };
            SpecialCallingLogicsGrid.prototype.getDialogType = function () { return Default.SpecialCallingLogicsDialog; };
            SpecialCallingLogicsGrid.prototype.getIdProperty = function () { return Default.SpecialCallingLogicsRow.idProperty; };
            SpecialCallingLogicsGrid.prototype.getInsertPermission = function () { return Default.SpecialCallingLogicsRow.insertPermission; };
            SpecialCallingLogicsGrid.prototype.getLocalTextPrefix = function () { return Default.SpecialCallingLogicsRow.localTextPrefix; };
            SpecialCallingLogicsGrid.prototype.getService = function () { return Default.SpecialCallingLogicsService.baseUrl; };
            SpecialCallingLogicsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialCallingLogicsGrid);
            return SpecialCallingLogicsGrid;
        }(Serenity.EntityGrid));
        Default.SpecialCallingLogicsGrid = SpecialCallingLogicsGrid;
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
        var StatusEditor = /** @class */ (function (_super) {
            __extends(StatusEditor, _super);
            function StatusEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.addOption('1', "敬老");
                _this.addOption('2', "過號");
                _this.addOption('3', "檢後再診");
                return _this;
            }
            StatusEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], StatusEditor);
            return StatusEditor;
        }(Serenity.Select2Editor));
        Editor.StatusEditor = StatusEditor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyZW5lMS5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnRDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50Q29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnREZXRhaWxGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50Rm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5uY2VtZW50RGV0YWlsQ29sdW1uc0N1c3RvbTEudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DYXNlU2VydmljZURhdGFDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNsaW5pY3NDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2xpbmljc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DbGluaWNzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2xpbmljc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0NvbHVtbnNDdXN0b20udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0Zvcm1DdXN0b20udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0Zvcm1DdXN0b20xLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ29udGFjdEJvb2tSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZXBhcnRtZW50c0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZXBhcnRtZW50c0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZXBhcnRtZW50c1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkRlcGFydG1lbnRzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkVtcFF1ZXN0aW9ubmFpcmVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBRdWVzdGlvbm5haXJlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkVtcGxveWVlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlNwZWNpYWxDYWxsaW5nTG9naWNzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JCYXNlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudC9Bbm5vdW5jZW1lbnREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQW5ub3VuY2VtZW50L0Fubm91bmNlbWVudEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQW5ub3VuY2VtZW50Q3VzdG9tL0Fubm91bmNlbWVudERpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnRDdXN0b20vQW5ub3VuY2VtZW50R3JpZEN1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvQW5ub3VuY2VtZW50RGV0YWlsRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9Bbm5vdW5jZW1lbnREZXRhaWxHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudERldGFpbEN1c3RvbS9Bbm5vdW5jZW1lbnRHcmlkRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudERldGFpbEN1c3RvbS9Bbm5vdW5jZW1lbnRHcmlkRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9DYXNlU2VydmljZURhdGFEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhL0Nhc2VTZXJ2aWNlRGF0YUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhQ3VzdG9tL0Nhc2VTZXJ2aWNlRGF0YURpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9DYXNlU2VydmljZURhdGFDdXN0b20vQ2FzZVNlcnZpY2VEYXRhR3JpZEN1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9DbGluaWNzL0NsaW5pY3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2xpbmljcy9DbGluaWNzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Db250YWN0Qm9vay9Db250YWN0Qm9va0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Db250YWN0Qm9vay9Db250YWN0Qm9va0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ29udGFjdEJvb2tDdXN0b20vQ29udGFjdEJvb2tEaWFsb2dDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ29udGFjdEJvb2tDdXN0b20vQ29udGFjdEJvb2tEaWFsb2dDdXN0b20xLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0NvbnRhY3RCb29rQ3VzdG9tL0NvbnRhY3RCb29rR3JpZEN1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9EZXBhcnRtZW50cy9EZXBhcnRtZW50c0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9EZXBhcnRtZW50cy9EZXBhcnRtZW50c0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9FbXBRdWVzdGlvbm5haXJlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvRW1wUXVlc3Rpb25uYWlyZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wbG95ZWUvRW1wbG95ZWVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wbG95ZWUvRW1wbG95ZWVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0dyaWREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b20vUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL1JlcGFpckZvcm1SZWNvcmRzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL1JlcGFpckZvcm1SZWNvcmRzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0dyaWRDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvU3BlY2lhbENhbGxpbmdMb2dpY3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvU3BlY2lhbENhbGxpbmdMb2dpY3NHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvQWxyZWFhZHlLbm93RWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvQXJlYUVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL0JvZHlFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9DcmVhdGVVc2VyTG9va1VwRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvTGFuZ3VhZ2VFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9MZXZlbEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL0xvb2tVcEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL1BoYXNlRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvU2V4RWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvU3RhdHVzRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvV29ya1llYXJFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Mb2dpblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9SZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1NpZ25VcC9TaWduVXBQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FJaEI7QUFKRCxXQUFVLE9BQU87SUFBQyxJQUFBLGNBQWMsQ0FJL0I7SUFKaUIsV0FBQSxjQUFjO1FBQzVCO1lBQUE7WUFFQSxDQUFDO1lBRFUsMEJBQVUsR0FBRyx5QkFBeUIsQ0FBQztZQUNsRCxzQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLDhCQUFlLGtCQUUzQixDQUFBO0lBQ0wsQ0FBQyxFQUppQixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUkvQjtBQUFELENBQUMsRUFKUyxPQUFPLEtBQVAsT0FBTyxRQUloQjtBQ0pELElBQVUsT0FBTyxDQTBCaEI7QUExQkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxjQUFjLENBMEIvQjtJQTFCaUIsV0FBQSxjQUFjO1FBTTVCO1lBQWtDLGdDQUF3QjtZQUl0RCxzQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQWFoQjtnQkFYRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRztvQkFDckIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXpCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVB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RUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLGVBQWUsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGdCQUFnQixFQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBQyx1QkFBdUIsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLG9CQUFvQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxFQUFDLG9CQUFvQixFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsZUFBZSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLHFCQUFxQixFQUFDLENBQUMsRUFBQyx1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RCxDQUFDLEVBbERTLE9BQU8sS0FBUCxPQUFPLFFBa0RoQiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xhbmd1YWdlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TGFuZ3VhZ2VSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPExhbmd1YWdlUm93PignQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VJZCA9IFwiTGFuZ3VhZ2VJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZU5hbWUgPSBcIkxhbmd1YWdlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVybWlzc2lvbktleXMge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTZWN1cml0eSA9IFwiQWRtaW5pc3RyYXRpb246U2VjdXJpdHlcIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgVHJhbnNsYXRpb24gPSBcIkFkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uXCI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVGb3JtIHtcclxuICAgICAgICBSb2xlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUm9sZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJvbGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSb2xlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSb2xlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFJvbGVQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZVJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvbklkID0gXCJSb2xlUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgUm9sZVJvbGVOYW1lID0gXCJSb2xlUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1JvbGVOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Um9sZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Um9sZVJvdz4oJ0FkbWluaXN0cmF0aW9uLlJvbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBSb2xlTmFtZSA9IFwiUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uSXRlbSB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZVRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VGV4dD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21UZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRyYW5zbGF0aW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRyYW5zbGF0aW9uSXRlbT4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVXBkYXRlXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlRyYW5zbGF0aW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVHJhbnNsYXRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJGb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIFVzZXJJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybTogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFVc2VyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVXNlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFVzZXJGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJJbWFnZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZENvbmZpcm0nLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnU291cmNlJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUGVybWlzc2lvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0Um9sZVBlcm1pc3Npb25zKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0UGVybWlzc2lvbktleXMocmVxdWVzdDogU2VyZW5pdHkuU2VydmljZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBMaXN0Um9sZVBlcm1pc3Npb25zID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0Um9sZVBlcm1pc3Npb25zXCIsXHJcbiAgICAgICAgICAgIExpc3RQZXJtaXNzaW9uS2V5cyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFBlcm1pc3Npb25LZXlzXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnTGlzdFJvbGVQZXJtaXNzaW9ucycsIFxyXG4gICAgICAgICAgICAnTGlzdFBlcm1pc3Npb25LZXlzJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclBlcm1pc3Npb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPG51bWJlcj4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVVcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBSb2xlcz86IG51bWJlcltdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZENvbmZpcm0/OiBzdHJpbmc7XHJcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZXJuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VXNlclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VXNlclJvdz4oJ0FkbWluaXN0cmF0aW9uLlVzZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgU291cmNlID0gXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRIYXNoID0gXCJQYXNzd29yZEhhc2hcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBcIkRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA9IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRDb25maXJtID0gXCJQYXNzd29yZENvbmZpcm1cIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudENvbHVtbnNDdXN0b20ge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50Q3VzdG9tJztcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGV0YWlsQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnREZXRhaWwnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm91bmNlbWVudERldGFpbEZvcm0ge1xyXG4gICAgICAgIEFubm91bmNlbWVudHNJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBUYXJnZXRVc2VyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwbHlDb250ZW50OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwbHlEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFJlcGx5VXNlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBVcGRhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50RGV0YWlsJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBbm5vdW5jZW1lbnREZXRhaWxGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBbm5vdW5jZW1lbnREZXRhaWxGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShBbm5vdW5jZW1lbnREZXRhaWxGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlbWVudHNJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXRVc2VyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGx5Q29udGVudCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXBseURhdGUnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUmVwbHlVc2VyJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZXVzZXInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRlZGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGV1c2VyJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZWRhdGUnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm91bmNlbWVudERldGFpbEZvcm1DdXN0b20ge1xyXG4gICAgICAgIFRhcmdldFVzZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2VydmljZUFELkFubm91bmNlbWVudERldGFpbEN1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXRVc2VyJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBbm5vdW5jZW1lbnREZXRhaWxSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBBbm5vdW5jZW1lbnRzSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGFyZ2V0VXNlcj86IHN0cmluZztcclxuICAgICAgICBSZXBseUNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwbHlEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGx5VXNlcj86IHN0cmluZztcclxuICAgICAgICBDcmVhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIENyZWF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRldXNlcj86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVkYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQW5ub3VuY2VtZW50RGV0YWlsUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdPaWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGFyZ2V0VXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkFubm91bmNlbWVudERldGFpbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6RGVsZXRlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudERldGFpbDpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudERldGFpbDpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudERldGFpbDpNb2RpZnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE9pZCA9IFwiT2lkXCIsXHJcbiAgICAgICAgICAgIEFubm91bmNlbWVudHNJZCA9IFwiQW5ub3VuY2VtZW50c0lkXCIsXHJcbiAgICAgICAgICAgIFRhcmdldFVzZXIgPSBcIlRhcmdldFVzZXJcIixcclxuICAgICAgICAgICAgUmVwbHlDb250ZW50ID0gXCJSZXBseUNvbnRlbnRcIixcclxuICAgICAgICAgICAgUmVwbHlEYXRlID0gXCJSZXBseURhdGVcIixcclxuICAgICAgICAgICAgUmVwbHlVc2VyID0gXCJSZXBseVVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRldXNlciA9IFwiQ3JlYXRldXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGVkYXRlID0gXCJDcmVhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZXVzZXIgPSBcIlVwZGF0ZXVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlZGF0ZSA9IFwiVXBkYXRlZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBbm5vdW5jZW1lbnREZXRhaWxTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0Fubm91bmNlbWVudERldGFpbCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxBbm5vdW5jZW1lbnREZXRhaWxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxBbm5vdW5jZW1lbnREZXRhaWxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8QW5ub3VuY2VtZW50RGV0YWlsUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEFubm91bmNlbWVudERldGFpbFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Bbm5vdW5jZW1lbnREZXRhaWxTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm91bmNlbWVudEZvcm0ge1xyXG4gICAgICAgIFNlcnZpY2VDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQW5ub3VuY2VUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQW5ub3VuY2VEZXNjOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQW5ub3VuY2VQcmlvcml0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRhcmdldFJvbGVJZHM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUYXJnZXRVc2VySWRzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVsZWFzZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQXR0YWNobWVudHM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcmVhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVcGRhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkFubm91bmNlbWVudCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQW5ub3VuY2VtZW50Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQW5ub3VuY2VtZW50Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQW5ub3VuY2VtZW50Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdTZXJ2aWNlQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZVR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VEZXNjJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlUHJpb3JpdHknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGFyZ2V0Um9sZUlkcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXRVc2VySWRzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2VEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F0dGFjaG1lbnRzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZXVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRlZGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGV1c2VyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZWRhdGUnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm91bmNlbWVudEZvcm1DdXN0b20ge1xyXG4gICAgICAgIFNlcnZpY2VDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQW5ub3VuY2VUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQW5ub3VuY2VEZXNjOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQW5ub3VuY2VQcmlvcml0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRhcmdldFJvbGVJZHM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUYXJnZXRVc2VySWRzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVsZWFzZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQXR0YWNobWVudHM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXRhaWxMaXN0OiBBbm5vdW5jZW1lbnRHcmlkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkFubm91bmNlbWVudEN1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQW5ub3VuY2VtZW50Rm9ybUN1c3RvbS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQW5ub3VuY2VtZW50Rm9ybUN1c3RvbS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBBbm5vdW5jZW1lbnRHcmlkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEFubm91bmNlbWVudEZvcm1DdXN0b20sIFtcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZUNvZGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlRGVzYycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZVByaW9yaXR5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhcmdldFJvbGVJZHMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGFyZ2V0VXNlcklkcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWxlYXNlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdHRhY2htZW50cycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXRhaWxMaXN0JywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBBbm5vdW5jZW1lbnRSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBTZXJ2aWNlQ29kZT86IHN0cmluZztcclxuICAgICAgICBBbm5vdW5jZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQW5ub3VuY2VEZXNjPzogc3RyaW5nO1xyXG4gICAgICAgIEFubm91bmNlUHJpb3JpdHk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0Um9sZUlkcz86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRVc2VySWRzPzogc3RyaW5nO1xyXG4gICAgICAgIFJlbGVhc2VEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEF0dGFjaG1lbnRzPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGV0YWlsTGlzdD86IEFubm91bmNlbWVudERldGFpbFJvd1tdO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQW5ub3VuY2VtZW50Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdPaWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnU2VydmljZUNvZGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50OkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnQ6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnQ6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnQ6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBTZXJ2aWNlQ29kZSA9IFwiU2VydmljZUNvZGVcIixcclxuICAgICAgICAgICAgQW5ub3VuY2VUeXBlID0gXCJBbm5vdW5jZVR5cGVcIixcclxuICAgICAgICAgICAgQW5ub3VuY2VEZXNjID0gXCJBbm5vdW5jZURlc2NcIixcclxuICAgICAgICAgICAgQW5ub3VuY2VQcmlvcml0eSA9IFwiQW5ub3VuY2VQcmlvcml0eVwiLFxyXG4gICAgICAgICAgICBUYXJnZXRSb2xlSWRzID0gXCJUYXJnZXRSb2xlSWRzXCIsXHJcbiAgICAgICAgICAgIFRhcmdldFVzZXJJZHMgPSBcIlRhcmdldFVzZXJJZHNcIixcclxuICAgICAgICAgICAgUmVsZWFzZURhdGUgPSBcIlJlbGVhc2VEYXRlXCIsXHJcbiAgICAgICAgICAgIEF0dGFjaG1lbnRzID0gXCJBdHRhY2htZW50c1wiLFxyXG4gICAgICAgICAgICBDcmVhdGV1c2VyID0gXCJDcmVhdGV1c2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZWRhdGUgPSBcIkNyZWF0ZWRhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRldXNlciA9IFwiVXBkYXRldXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVkYXRlID0gXCJVcGRhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIERldGFpbExpc3QgPSBcIkRldGFpbExpc3RcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQW5ub3VuY2VtZW50U2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9Bbm5vdW5jZW1lbnQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QW5ub3VuY2VtZW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QW5ub3VuY2VtZW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEFubm91bmNlbWVudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBbm5vdW5jZW1lbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnQvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnQvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnQvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudC9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+QW5ub3VuY2VtZW50U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bm5jZW1lbnREZXRhaWxDb2x1bW5zQ3VzdG9tMSB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2VydmljZUFELkFubm91bmNlbWVudERldGFpbEN1c3RvbSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGEnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIENhc2VTZXJ2aWNlRGF0YUNvbHVtbnNDdXN0b20ge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhQ3VzdG9tJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2FzZVNlcnZpY2VEYXRhRm9ybSB7XHJcbiAgICAgICAgQ2FzZU5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGF0aWVudElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUm9jSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcmVhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZVVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBVcGRhdGVVc2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2FzZVNlcnZpY2VEYXRhRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2FzZVNlcnZpY2VEYXRhRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2FzZVNlcnZpY2VEYXRhRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGF0aWVudElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvY0lkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZURhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRlVXNlcicsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZVVzZXInLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20ge1xyXG4gICAgICAgIENhc2VObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhdGllbnRJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJvY0lkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBDcmVhdGVVc2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlVXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGFDdXN0b20nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhdGllbnRJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb2NJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZVVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VyJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXNlU2VydmljZURhdGFSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBDYXNlTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgUGF0aWVudElkPzogc3RyaW5nO1xyXG4gICAgICAgIFJvY0lkPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRlVXNlcj86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXNlU2VydmljZURhdGFSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDYXNlTm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGEnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTG9va3VwLkNhc2VTZXJ2aWNlRGF0YSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Q2FzZVNlcnZpY2VEYXRhUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxDYXNlU2VydmljZURhdGFSb3c+KCdMb29rdXAuQ2FzZVNlcnZpY2VEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgQ2FzZU5vID0gXCJDYXNlTm9cIixcclxuICAgICAgICAgICAgUGF0aWVudElkID0gXCJQYXRpZW50SWRcIixcclxuICAgICAgICAgICAgUm9jSWQgPSBcIlJvY0lkXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZURhdGUgPSBcIkNyZWF0ZURhdGVcIixcclxuICAgICAgICAgICAgQ3JlYXRlVXNlciA9IFwiQ3JlYXRlVXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXIgPSBcIlVwZGF0ZVVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRlVXNlck5hbWUgPSBcIkNyZWF0ZVVzZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJOYW1lID0gXCJVcGRhdGVVc2VyTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXNlU2VydmljZURhdGFTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXNlU2VydmljZURhdGFSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXNlU2VydmljZURhdGFSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2FzZVNlcnZpY2VEYXRhUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENhc2VTZXJ2aWNlRGF0YVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DYXNlU2VydmljZURhdGFTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIENsaW5pY3NDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkNsaW5pY3MnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENsaW5pY3NGb3JtIHtcclxuICAgICAgICBEZXB0Tm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDbGluaWNObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENsaW5pY05hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDbGluaWNOYW1lRW5nOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENsaW5pY3NGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkNsaW5pY3MnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNsaW5pY3NGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDbGluaWNzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2xpbmljc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGVwdE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NsaW5pY05vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NsaW5pY05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2xpbmljTmFtZUVuZycsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2xpbmljc1JvdyB7XHJcbiAgICAgICAgRGVwdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIENsaW5pY05vPzogc3RyaW5nO1xyXG4gICAgICAgIENsaW5pY05hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2xpbmljTmFtZUVuZz86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENsaW5pY3NSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0RlcHRObyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdEZXB0Tm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5DbGluaWNzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkNsaW5pY3M6RGVsZXRlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdEZWZhdWx0OkNsaW5pY3M6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpDbGluaWNzOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6Q2xpbmljczpNb2RpZnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIERlcHRObyA9IFwiRGVwdE5vXCIsXHJcbiAgICAgICAgICAgIENsaW5pY05vID0gXCJDbGluaWNOb1wiLFxyXG4gICAgICAgICAgICBDbGluaWNOYW1lID0gXCJDbGluaWNOYW1lXCIsXHJcbiAgICAgICAgICAgIENsaW5pY05hbWVFbmcgPSBcIkNsaW5pY05hbWVFbmdcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2xpbmljc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvQ2xpbmljcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDbGluaWNzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2xpbmljc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxDbGluaWNzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENsaW5pY3NSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9DbGluaWNzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvQ2xpbmljcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0NsaW5pY3MvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0NsaW5pY3MvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9DbGluaWNzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DbGluaWNzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuQ29udGFjdEJvb2snO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tDb2x1bW5zQ3VzdG9tIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkNvbnRhY3RCb29rQ3VzdG9tJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEJvb2tGb3JtIHtcclxuICAgICAgICBDYXNlbm86IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgQWxyZWFkeWtub3c6IEVkaXRvci5BbHJlYWR5S25vd0VkaXRvcjtcclxuICAgICAgICBBZHZpc2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZHZpc2VkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQ29udGFjdEJvb2snO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNvbnRhY3RCb29rRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ29udGFjdEJvb2tGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBFZGl0b3IuTG9va1VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRhdGVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ29udGFjdEJvb2tGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc2VubycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbHJlYWR5a25vdycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZHZpc2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlZGF0ZScsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEJvb2tGb3JtQ3VzdG9tIHtcclxuICAgICAgICBDYXNlbm86IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgQWR2aXNlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBBZHZpc2U6IFNlcmVuaXR5LlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgIEFscmVhZHlrbm93OiBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3I7XHJcbiAgICAgICAgQ2hlY2tib3g6IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Db250YWN0Qm9va0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ29udGFjdEJvb2tGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDb250YWN0Qm9va0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5Cb29sZWFuRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENvbnRhY3RCb29rRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlbm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlZGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZHZpc2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQWxyZWFkeWtub3cnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnQ2hlY2tib3gnLCB3NFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnRhY3RCb29rRm9ybUN1c3RvbTEge1xyXG4gICAgICAgIEFkdmlzZTogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XHJcbiAgICAgICAgU2hvd1RleHQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbHJlYWR5a25vdzogRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0Zvcm1DdXN0b20xIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkNvbnRhY3RCb29rQ3VzdG9tMSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ29udGFjdEJvb2tGb3JtQ3VzdG9tMS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ29udGFjdEJvb2tGb3JtQ3VzdG9tMS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENvbnRhY3RCb29rRm9ybUN1c3RvbTEsIFtcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nob3dUZXh0JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FscmVhZHlrbm93JywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb250YWN0Qm9va1JvdyB7XHJcbiAgICAgICAgT2lkPzogbnVtYmVyO1xyXG4gICAgICAgIENhc2Vubz86IHN0cmluZztcclxuICAgICAgICBBbHJlYWR5a25vdz86IG51bWJlcjtcclxuICAgICAgICBBbHJlYWR5a25vd0V4cHJlPzogc3RyaW5nO1xyXG4gICAgICAgIEFkdmlzZT86IHN0cmluZztcclxuICAgICAgICBBZHZpc2VkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2hlY2tib3g/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29udGFjdEJvb2tSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDYXNlbm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5Db250YWN0Qm9vayc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpDb250YWN0Qm9vazpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6Q29udGFjdEJvb2s6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpDb250YWN0Qm9vazpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkNvbnRhY3RCb29rOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgQ2FzZW5vID0gXCJDYXNlbm9cIixcclxuICAgICAgICAgICAgQWxyZWFkeWtub3cgPSBcIkFscmVhZHlrbm93XCIsXHJcbiAgICAgICAgICAgIEFscmVhZHlrbm93RXhwcmUgPSBcIkFscmVhZHlrbm93RXhwcmVcIixcclxuICAgICAgICAgICAgQWR2aXNlID0gXCJBZHZpc2VcIixcclxuICAgICAgICAgICAgQWR2aXNlZGF0ZSA9IFwiQWR2aXNlZGF0ZVwiLFxyXG4gICAgICAgICAgICBDcmVhdGVVc2VyID0gXCJDcmVhdGVVc2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZURhdGUgPSBcIkNyZWF0ZURhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlciA9IFwiVXBkYXRlVXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZVVzZXJOYW1lID0gXCJDcmVhdGVVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VyTmFtZSA9IFwiVXBkYXRlVXNlck5hbWVcIixcclxuICAgICAgICAgICAgQ2hlY2tib3ggPSBcIkNoZWNrYm94XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENvbnRhY3RCb29rU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9Db250YWN0Qm9vayc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDb250YWN0Qm9va1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENvbnRhY3RCb29rUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENvbnRhY3RCb29rUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENvbnRhY3RCb29rUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvQ29udGFjdEJvb2svQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0NvbnRhY3RCb29rL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0NvbnRhY3RCb29rL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Db250YWN0Qm9va1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgRGVwYXJ0bWVudHNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkRlcGFydG1lbnRzJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBEZXBhcnRtZW50c0Zvcm0ge1xyXG4gICAgICAgIERlcHRObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlcHROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVwdE5hbWVFbmc6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIaWRkZW50OiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBEZXBhcnRtZW50c0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuRGVwYXJ0bWVudHMnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIURlcGFydG1lbnRzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudHNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuQm9vbGVhbkVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShEZXBhcnRtZW50c0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGVwdE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHROYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHROYW1lRW5nJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hpZGRlbnQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIERlcGFydG1lbnRzUm93IHtcclxuICAgICAgICBEZXB0Tm8/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVwdE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVwdE5hbWVFbmc/OiBzdHJpbmc7XHJcbiAgICAgICAgSGlkZGVudD86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBEZXBhcnRtZW50c1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnRGVwdE5vJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0RlcHRObyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkRlcGFydG1lbnRzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkRlcGFydG1lbnRzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpEZXBhcnRtZW50czpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkRlcGFydG1lbnRzOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RGVwYXJ0bWVudHM6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBEZXB0Tm8gPSBcIkRlcHROb1wiLFxyXG4gICAgICAgICAgICBEZXB0TmFtZSA9IFwiRGVwdE5hbWVcIixcclxuICAgICAgICAgICAgRGVwdE5hbWVFbmcgPSBcIkRlcHROYW1lRW5nXCIsXHJcbiAgICAgICAgICAgIEhpZGRlbnQgPSBcIkhpZGRlbnRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRGVwYXJ0bWVudHNTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0RlcGFydG1lbnRzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PERlcGFydG1lbnRzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RGVwYXJ0bWVudHNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8RGVwYXJ0bWVudHNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RGVwYXJ0bWVudHNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9EZXBhcnRtZW50cy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0RlcGFydG1lbnRzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvRGVwYXJ0bWVudHMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0RlcGFydG1lbnRzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvRGVwYXJ0bWVudHMvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkRlcGFydG1lbnRzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBRdWVzdGlvbm5haXJlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5FbXBRdWVzdGlvbm5haXJlJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbXBRdWVzdGlvbm5haXJlRm9ybSB7XHJcbiAgICAgICAgQWdlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEhlaWdodDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBXZWlnaHQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgU2V4OiBFZGl0b3IuU2V4RWRpdG9yO1xyXG4gICAgICAgIEVtcExhbmd1YWdlOiBFZGl0b3IuTGFuZ3VhZ2VFZGl0b3I7XHJcbiAgICAgICAgRW1wQm9keTogRWRpdG9yLkJvZHlFZGl0b3I7XHJcbiAgICAgICAgRW1wV29ya1llYXI6IEVkaXRvci5Xb3JrWWVhckVkaXRvcjtcclxuICAgICAgICBFbXBUaW1lUGhhc2U6IEVkaXRvci5QaGFzZUVkaXRvcjtcclxuICAgICAgICBFbXBBcmVhOiBFZGl0b3IuQXJlYUVkaXRvcjtcclxuICAgICAgICBFbXBTZXJ2aWNlTGV2ZWw6IEVkaXRvci5MZXZlbEVkaXRvcjtcclxuICAgICAgICBFbXBObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFFEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFbXBRdWVzdGlvbm5haXJlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5FbXBRdWVzdGlvbm5haXJlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFFbXBRdWVzdGlvbm5haXJlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRW1wUXVlc3Rpb25uYWlyZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IEVkaXRvci5TZXhFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBFZGl0b3IuTGFuZ3VhZ2VFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBFZGl0b3IuQm9keUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NCA9IEVkaXRvci5Xb3JrWWVhckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NSA9IEVkaXRvci5QaGFzZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NiA9IEVkaXRvci5BcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc3ID0gRWRpdG9yLkxldmVsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc4ID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzkgPSBzLkRhdGVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRW1wUXVlc3Rpb25uYWlyZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQWdlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hlaWdodCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdXZWlnaHQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2V4JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcExhbmd1YWdlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcEJvZHknLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnRW1wV29ya1llYXInLCB3NCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1wVGltZVBoYXNlJywgdzUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcEFyZWEnLCB3NixcclxuICAgICAgICAgICAgICAgICAgICAnRW1wU2VydmljZUxldmVsJywgdzcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcE5vJywgdzgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1FEYXRlJywgdzlcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbXBRdWVzdGlvbm5haXJlUm93IHtcclxuICAgICAgICBPaWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgUURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQWdlPzogbnVtYmVyO1xyXG4gICAgICAgIEhlaWdodD86IG51bWJlcjtcclxuICAgICAgICBXZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAgICAgU2V4Pzogc3RyaW5nO1xyXG4gICAgICAgIEVtcExhbmd1YWdlPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcEJvZHk/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wV29ya1llYXI/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wVGltZVBoYXNlPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcEFyZWE/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wU2VydmljZUxldmVsPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFNraWxsPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcERyaXZlckxpY2Vuc2U/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wRW10MUxpY2Vuc2U/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wRWZmZWN0aXZlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFbXBRdWVzdGlvbm5haXJlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdPaWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOkFkZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBFbXBObyA9IFwiRW1wTm9cIixcclxuICAgICAgICAgICAgUURhdGUgPSBcIlFEYXRlXCIsXHJcbiAgICAgICAgICAgIEFnZSA9IFwiQWdlXCIsXHJcbiAgICAgICAgICAgIEhlaWdodCA9IFwiSGVpZ2h0XCIsXHJcbiAgICAgICAgICAgIFdlaWdodCA9IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIFNleCA9IFwiU2V4XCIsXHJcbiAgICAgICAgICAgIEVtcExhbmd1YWdlID0gXCJFbXBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICBFbXBCb2R5ID0gXCJFbXBCb2R5XCIsXHJcbiAgICAgICAgICAgIEVtcFdvcmtZZWFyID0gXCJFbXBXb3JrWWVhclwiLFxyXG4gICAgICAgICAgICBFbXBUaW1lUGhhc2UgPSBcIkVtcFRpbWVQaGFzZVwiLFxyXG4gICAgICAgICAgICBFbXBBcmVhID0gXCJFbXBBcmVhXCIsXHJcbiAgICAgICAgICAgIEVtcFNlcnZpY2VMZXZlbCA9IFwiRW1wU2VydmljZUxldmVsXCIsXHJcbiAgICAgICAgICAgIEVtcFNraWxsID0gXCJFbXBTa2lsbFwiLFxyXG4gICAgICAgICAgICBFbXBEcml2ZXJMaWNlbnNlID0gXCJFbXBEcml2ZXJMaWNlbnNlXCIsXHJcbiAgICAgICAgICAgIEVtcEVtdDFMaWNlbnNlID0gXCJFbXBFbXQxTGljZW5zZVwiLFxyXG4gICAgICAgICAgICBFbXBFZmZlY3RpdmVEYXRlID0gXCJFbXBFZmZlY3RpdmVEYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlciA9IFwiVXBkYXRlVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFbXBRdWVzdGlvbm5haXJlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9FbXBRdWVzdGlvbm5haXJlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcFF1ZXN0aW9ubmFpcmVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBRdWVzdGlvbm5haXJlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEVtcFF1ZXN0aW9ubmFpcmVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RW1wUXVlc3Rpb25uYWlyZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9FbXBRdWVzdGlvbm5haXJlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5FbXBsb3llZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVGb3JtIHtcclxuICAgICAgICBFbXBsb3llZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1wbG95ZWVOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1wbG95ZWVFbmdOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSWRlbnRpZmljYXRpb25DYXJkTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVbml0SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXB0VHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlcHRJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE9yZ0lkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUG9zaXRpb25JZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc3RUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUG9zdElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3RhcnREYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFNleDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEJpcnRoZGF5OiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIENpdGl6ZW5JZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEJsb29kVHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvdW50cnlJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJhY2VGbGFnOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSG9tZWxhbmQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNYXJyeUZsYWc6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFZHVjYXRlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGljZW5zZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFByYWN0aXRpb25lclJlZ2lzdGVyRmxhZzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJhbmtzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3RhbmRhcmQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBZZWFyczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlbGlnaW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2h1cmNoOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWRkcmVzczE6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBZGRyZXNzMjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtUmVsYXRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBUZWxlcGhvbmUxOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGVsZXBob25lMjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExlYXZlRGF0ZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJldGlyZUZsYWc6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXRpZW50SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuRW1wbG95ZWVGb3JtJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFFbXBsb3llZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEVtcGxveWVlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRW1wbG95ZWVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1wbG95ZWVOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVlRW5nTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJZGVudGlmaWNhdGlvbkNhcmRObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdVbml0SWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVwdFR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGVwdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ09yZ0lkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc2l0aW9uSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUG9zdFR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUG9zdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXJ0RGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZXgnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQmlydGhkYXknLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ2l0aXplbklkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Jsb29kVHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3VudHJ5SWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmFjZUZsYWcnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSG9tZWxhbmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTWFycnlGbGFnJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VkdWNhdGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGljZW5zZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWcnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmFua3MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU3RhbmRhcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnWWVhcnMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsaWdpb24nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2h1cmNoJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZHJlc3MxJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkZHJlc3MyJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbVJlbGF0aW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlbGVwaG9uZTEnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGVsZXBob25lMicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMZWF2ZURhdGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmV0aXJlRmxhZycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXRpZW50SWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtcGxveWVlUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgRW1wbG95ZWVJZD86IHN0cmluZztcclxuICAgICAgICBFbXBsb3llZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVFbmdOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElkZW50aWZpY2F0aW9uQ2FyZE5vPzogc3RyaW5nO1xyXG4gICAgICAgIFVuaXRJZD86IHN0cmluZztcclxuICAgICAgICBEZXB0VHlwZT86IHN0cmluZztcclxuICAgICAgICBEZXB0SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgT3JnSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zaXRpb25JZD86IHN0cmluZztcclxuICAgICAgICBQb3N0VHlwZT86IHN0cmluZztcclxuICAgICAgICBQb3N0SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgU3RhcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFNleD86IHN0cmluZztcclxuICAgICAgICBCaXJ0aGRheT86IHN0cmluZztcclxuICAgICAgICBDaXRpemVuSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQmxvb2RUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIENvdW50cnlJZD86IHN0cmluZztcclxuICAgICAgICBSYWNlRmxhZz86IHN0cmluZztcclxuICAgICAgICBIb21lbGFuZD86IHN0cmluZztcclxuICAgICAgICBNYXJyeUZsYWc/OiBzdHJpbmc7XHJcbiAgICAgICAgRWR1Y2F0ZT86IHN0cmluZztcclxuICAgICAgICBMaWNlbnNlPzogc3RyaW5nO1xyXG4gICAgICAgIFByYWN0aXRpb25lclJlZ2lzdGVyRmxhZz86IHN0cmluZztcclxuICAgICAgICBSYW5rcz86IHN0cmluZztcclxuICAgICAgICBTdGFuZGFyZD86IHN0cmluZztcclxuICAgICAgICBZZWFycz86IHN0cmluZztcclxuICAgICAgICBSZWxpZ2lvbj86IHN0cmluZztcclxuICAgICAgICBDaHVyY2g/OiBzdHJpbmc7XHJcbiAgICAgICAgQWRkcmVzczE/OiBzdHJpbmc7XHJcbiAgICAgICAgQWRkcmVzczI/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1OYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtUmVsYXRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVsZXBob25lMT86IHN0cmluZztcclxuICAgICAgICBUZWxlcGhvbmUyPzogc3RyaW5nO1xyXG4gICAgICAgIExlYXZlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBSZXRpcmVGbGFnPzogc3RyaW5nO1xyXG4gICAgICAgIFBhdGllbnRJZD86IHN0cmluZztcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEVtcGxveWVlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdPaWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRW1wbG95ZWVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkVtcGxveWVlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcGxveWVlOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBsb3llZTpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcGxveWVlOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wbG95ZWU6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUlkID0gXCJFbXBsb3llZUlkXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlTmFtZSA9IFwiRW1wbG95ZWVOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtcGxveWVlRW5nTmFtZSA9IFwiRW1wbG95ZWVFbmdOYW1lXCIsXHJcbiAgICAgICAgICAgIElkZW50aWZpY2F0aW9uQ2FyZE5vID0gXCJJZGVudGlmaWNhdGlvbkNhcmROb1wiLFxyXG4gICAgICAgICAgICBVbml0SWQgPSBcIlVuaXRJZFwiLFxyXG4gICAgICAgICAgICBEZXB0VHlwZSA9IFwiRGVwdFR5cGVcIixcclxuICAgICAgICAgICAgRGVwdElkID0gXCJEZXB0SWRcIixcclxuICAgICAgICAgICAgT3JnSWQgPSBcIk9yZ0lkXCIsXHJcbiAgICAgICAgICAgIFBvc2l0aW9uSWQgPSBcIlBvc2l0aW9uSWRcIixcclxuICAgICAgICAgICAgUG9zdFR5cGUgPSBcIlBvc3RUeXBlXCIsXHJcbiAgICAgICAgICAgIFBvc3RJZCA9IFwiUG9zdElkXCIsXHJcbiAgICAgICAgICAgIFN0YXJ0RGF0ZSA9IFwiU3RhcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFNleCA9IFwiU2V4XCIsXHJcbiAgICAgICAgICAgIEJpcnRoZGF5ID0gXCJCaXJ0aGRheVwiLFxyXG4gICAgICAgICAgICBDaXRpemVuSWQgPSBcIkNpdGl6ZW5JZFwiLFxyXG4gICAgICAgICAgICBCbG9vZFR5cGUgPSBcIkJsb29kVHlwZVwiLFxyXG4gICAgICAgICAgICBDb3VudHJ5SWQgPSBcIkNvdW50cnlJZFwiLFxyXG4gICAgICAgICAgICBSYWNlRmxhZyA9IFwiUmFjZUZsYWdcIixcclxuICAgICAgICAgICAgSG9tZWxhbmQgPSBcIkhvbWVsYW5kXCIsXHJcbiAgICAgICAgICAgIE1hcnJ5RmxhZyA9IFwiTWFycnlGbGFnXCIsXHJcbiAgICAgICAgICAgIEVkdWNhdGUgPSBcIkVkdWNhdGVcIixcclxuICAgICAgICAgICAgTGljZW5zZSA9IFwiTGljZW5zZVwiLFxyXG4gICAgICAgICAgICBQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWcgPSBcIlByYWN0aXRpb25lclJlZ2lzdGVyRmxhZ1wiLFxyXG4gICAgICAgICAgICBSYW5rcyA9IFwiUmFua3NcIixcclxuICAgICAgICAgICAgU3RhbmRhcmQgPSBcIlN0YW5kYXJkXCIsXHJcbiAgICAgICAgICAgIFllYXJzID0gXCJZZWFyc1wiLFxyXG4gICAgICAgICAgICBSZWxpZ2lvbiA9IFwiUmVsaWdpb25cIixcclxuICAgICAgICAgICAgQ2h1cmNoID0gXCJDaHVyY2hcIixcclxuICAgICAgICAgICAgQWRkcmVzczEgPSBcIkFkZHJlc3MxXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MyID0gXCJBZGRyZXNzMlwiLFxyXG4gICAgICAgICAgICBFbU5hbWUgPSBcIkVtTmFtZVwiLFxyXG4gICAgICAgICAgICBFbVJlbGF0aW9uID0gXCJFbVJlbGF0aW9uXCIsXHJcbiAgICAgICAgICAgIFRlbGVwaG9uZTEgPSBcIlRlbGVwaG9uZTFcIixcclxuICAgICAgICAgICAgVGVsZXBob25lMiA9IFwiVGVsZXBob25lMlwiLFxyXG4gICAgICAgICAgICBMZWF2ZURhdGUgPSBcIkxlYXZlRGF0ZVwiLFxyXG4gICAgICAgICAgICBSZXRpcmVGbGFnID0gXCJSZXRpcmVGbGFnXCIsXHJcbiAgICAgICAgICAgIFBhdGllbnRJZCA9IFwiUGF0aWVudElkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFbXBsb3llZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvRW1wbG95ZWUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RW1wbG95ZWVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBsb3llZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxFbXBsb3llZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxFbXBsb3llZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L0VtcGxveWVlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvRW1wbG95ZWUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9FbXBsb3llZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvRW1wbG95ZWUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9FbXBsb3llZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+RW1wbG95ZWVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0NvbHVtbnNDdXN0b20ge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NlcnZpY2VBRC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybSB7XHJcbiAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVc2VNYXRlcmlhbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFVzZU1hdGVyaWFsQ291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgTWF0ZXJpYWxBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgU3Vic2lkeUFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBQYXlBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDcmVhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRhdGVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpckZvcm1SZWNvcmRzSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlTWF0ZXJpYWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlTWF0ZXJpYWxDb3VudCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbEFtb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJzaWR5QW1vdW50JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BheUFtb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGV1c2VyJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZWRhdGUnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRldXNlcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVkYXRlJywgdzNcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm1DdXN0b20ge1xyXG4gICAgICAgIFVzZU1hdGVyaWFsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWF0ZXJpYWxBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgU3Vic2lkeUFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcclxuICAgICAgICBVcGRhdGV1c2VyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2VydmljZUFELlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ3VzdG9tJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm1DdXN0b20uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRlY2ltYWxFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtQ3VzdG9tLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZU1hdGVyaWFsJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsQW1vdW50JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YnNpZHlBbW91bnQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRldXNlcicsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBSZXBhaXJGb3JtUmVjb3Jkc0lkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZU1hdGVyaWFsPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZU1hdGVyaWFsQ291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgTWF0ZXJpYWxBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgU3Vic2lkeUFtb3VudD86IG51bWJlcjtcclxuICAgICAgICBQYXlBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRldXNlcj86IG51bWJlcjtcclxuICAgICAgICBDcmVhdGVkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlZGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdPaWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVXNlTWF0ZXJpYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybURldGFpbFJlY29yZHM6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNJZCA9IFwiUmVwYWlyRm9ybVJlY29yZHNJZFwiLFxyXG4gICAgICAgICAgICBVc2VNYXRlcmlhbCA9IFwiVXNlTWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgVXNlTWF0ZXJpYWxDb3VudCA9IFwiVXNlTWF0ZXJpYWxDb3VudFwiLFxyXG4gICAgICAgICAgICBNYXRlcmlhbEFtb3VudCA9IFwiTWF0ZXJpYWxBbW91bnRcIixcclxuICAgICAgICAgICAgU3Vic2lkeUFtb3VudCA9IFwiU3Vic2lkeUFtb3VudFwiLFxyXG4gICAgICAgICAgICBQYXlBbW91bnQgPSBcIlBheUFtb3VudFwiLFxyXG4gICAgICAgICAgICBDcmVhdGV1c2VyID0gXCJDcmVhdGV1c2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZWRhdGUgPSBcIkNyZWF0ZWRhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRldXNlciA9IFwiVXBkYXRldXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVkYXRlID0gXCJVcGRhdGVkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LlJlcGFpckZvcm1SZWNvcmRzJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzQ29sdW1uc0N1c3RvbSB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGFpckZvcm1SZWNvcmRzRm9ybSB7XHJcbiAgICAgICAgQ2FzZU5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBUb3duc2hpcDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFyZWE6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTdWJzaWR5U291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQXNzaXN0aXZlU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSXRlbU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNYXRlcmlhbE5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VydmljZVR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTZXJ2aWNlQ291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRXZhbHV0aW9uTGV2ZWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIYW5kbGluZ1BsYWNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGxhY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZXBhaXJSZWNvcmQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZXBhaXJFbXBJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBVcGRhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybVJlY29yZHNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1SZWNvcmRzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwYWlyRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3duc2hpcCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcmVhJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YnNpZHlTb3VyY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXNzaXN0aXZlU291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0ZW1OYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZVR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZUNvdW50JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V2YWx1dGlvbkxldmVsJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hhbmRsaW5nUGxhY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGxhY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwYWlyUmVjb3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpckVtcElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZXVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRlZGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGV1c2VyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZWRhdGUnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGFpckZvcm1SZWNvcmRzRm9ybUN1c3RvbSB7XHJcbiAgICAgICAgQ2FzZU5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBUb3duc2hpcDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFyZWE6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTdWJzaWR5U291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQXNzaXN0aXZlU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSXRlbU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBNYXRlcmlhbE5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VydmljZVR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTZXJ2aWNlQ291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgRXZhbHV0aW9uTGV2ZWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBIYW5kbGluZ1BsYWNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyRW1wSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXRhaWxMaXN0OiBSZXBhaXJGb3JtUmVjb3Jkc0dyaWRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1SZWNvcmRzRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwYWlyRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdUb3duc2hpcCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBcmVhJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1YnNpZHlTb3VyY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXNzaXN0aXZlU291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0l0ZW1OYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hdGVyaWFsTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZVR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2VydmljZUNvdW50JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V2YWx1dGlvbkxldmVsJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hhbmRsaW5nUGxhY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwYWlyRW1wSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGV0YWlsTGlzdCcsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwYWlyRm9ybVJlY29yZHNSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBDYXNlTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwYWlyRGF0ZT86IHN0cmluZztcclxuICAgICAgICBUb3duc2hpcD86IHN0cmluZztcclxuICAgICAgICBBcmVhPzogc3RyaW5nO1xyXG4gICAgICAgIFN1YnNpZHlTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgQXNzaXN0aXZlU291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIEl0ZW1OYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIE1hdGVyaWFsTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgU2VydmljZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU2VydmljZUNvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIEV2YWx1dGlvbkxldmVsPzogc3RyaW5nO1xyXG4gICAgICAgIEhhbmRsaW5nUGxhY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGxhY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwYWlyUmVjb3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGFpckVtcElkPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGV0YWlsTGlzdD86IFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93W107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtUmVjb3Jkc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Nhc2VObyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LlJlcGFpckZvcm1SZWNvcmRzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybVJlY29yZHM6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBDYXNlTm8gPSBcIkNhc2VOb1wiLFxyXG4gICAgICAgICAgICBSZXBhaXJEYXRlID0gXCJSZXBhaXJEYXRlXCIsXHJcbiAgICAgICAgICAgIFRvd25zaGlwID0gXCJUb3duc2hpcFwiLFxyXG4gICAgICAgICAgICBBcmVhID0gXCJBcmVhXCIsXHJcbiAgICAgICAgICAgIFN1YnNpZHlTb3VyY2UgPSBcIlN1YnNpZHlTb3VyY2VcIixcclxuICAgICAgICAgICAgQXNzaXN0aXZlU291cmNlID0gXCJBc3Npc3RpdmVTb3VyY2VcIixcclxuICAgICAgICAgICAgSXRlbU5hbWUgPSBcIkl0ZW1OYW1lXCIsXHJcbiAgICAgICAgICAgIE1hdGVyaWFsTm8gPSBcIk1hdGVyaWFsTm9cIixcclxuICAgICAgICAgICAgU2VydmljZVR5cGUgPSBcIlNlcnZpY2VUeXBlXCIsXHJcbiAgICAgICAgICAgIFNlcnZpY2VDb3VudCA9IFwiU2VydmljZUNvdW50XCIsXHJcbiAgICAgICAgICAgIEV2YWx1dGlvbkxldmVsID0gXCJFdmFsdXRpb25MZXZlbFwiLFxyXG4gICAgICAgICAgICBIYW5kbGluZ1BsYWNlID0gXCJIYW5kbGluZ1BsYWNlXCIsXHJcbiAgICAgICAgICAgIFBsYWNlID0gXCJQbGFjZVwiLFxyXG4gICAgICAgICAgICBSZXBhaXJSZWNvcmQgPSBcIlJlcGFpclJlY29yZFwiLFxyXG4gICAgICAgICAgICBSZXBhaXJFbXBJZCA9IFwiUmVwYWlyRW1wSWRcIixcclxuICAgICAgICAgICAgQ3JlYXRldXNlciA9IFwiQ3JlYXRldXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGVkYXRlID0gXCJDcmVhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZXVzZXIgPSBcIlVwZGF0ZXVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlZGF0ZSA9IFwiVXBkYXRlZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZXRhaWxMaXN0ID0gXCJEZXRhaWxMaXN0XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcGFpckZvcm1SZWNvcmRzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJlcGFpckZvcm1SZWNvcmRzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJlcGFpckZvcm1SZWNvcmRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJlcGFpckZvcm1SZWNvcmRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybVJlY29yZHMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5SZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgU3BlY2lhbENhbGxpbmdMb2dpY3NDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LlNwZWNpYWxDYWxsaW5nTG9naWNzJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTcGVjaWFsQ2FsbGluZ0xvZ2ljc0Zvcm0ge1xyXG4gICAgICAgIFBhY2thZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3BlY2lhbFN0YXR1czogRWRpdG9yLlN0YXR1c0VkaXRvcjtcclxuICAgICAgICBTZXE6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgUmFndWxlckNvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENhbGxDb3VudDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBPbGRBZ2U6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNwZWNpYWxDYWxsaW5nTG9naWNzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU3BlY2lhbENhbGxpbmdMb2dpY3NGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTcGVjaWFsQ2FsbGluZ0xvZ2ljc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gRWRpdG9yLlN0YXR1c0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTcGVjaWFsQ2FsbGluZ0xvZ2ljc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUGFja2FnZU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU3BlY2lhbFN0YXR1cycsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTZXEnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUmFndWxlckNvdW50JywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhbGxDb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdPbGRBZ2UnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93IHtcclxuICAgICAgICBJZD86IHN0cmluZztcclxuICAgICAgICBQYWNrYWdlTmFtZT86IHN0cmluZztcclxuICAgICAgICBTcGVjaWFsU3RhdHVzPzogbnVtYmVyO1xyXG4gICAgICAgIFNlcT86IG51bWJlcjtcclxuICAgICAgICBSYWd1bGVyQ291bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2FsbENvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIE9sZEFnZT86IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQYWNrYWdlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LlNwZWNpYWxDYWxsaW5nTG9naWNzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpTcGVjaWFsQ2FsbGluZ0xvZ2ljczpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6U3BlY2lhbENhbGxpbmdMb2dpY3M6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgUGFja2FnZU5hbWUgPSBcIlBhY2thZ2VOYW1lXCIsXHJcbiAgICAgICAgICAgIFNwZWNpYWxTdGF0dXMgPSBcIlNwZWNpYWxTdGF0dXNcIixcclxuICAgICAgICAgICAgU2VxID0gXCJTZXFcIixcclxuICAgICAgICAgICAgUmFndWxlckNvdW50ID0gXCJSYWd1bGVyQ291bnRcIixcclxuICAgICAgICAgICAgQ2FsbENvdW50ID0gXCJDYWxsQ291bnRcIixcclxuICAgICAgICAgICAgT2xkQWdlID0gXCJPbGRBZ2VcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU3BlY2lhbENhbGxpbmdMb2dpY3NTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L1NwZWNpYWxDYWxsaW5nTG9naWNzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNwZWNpYWxDYWxsaW5nTG9naWNzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U3BlY2lhbENhbGxpbmdMb2dpY3NSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8U3BlY2lhbENhbGxpbmdMb2dpY3NSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8U3BlY2lhbENhbGxpbmdMb2dpY3NSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9TcGVjaWFsQ2FsbGluZ0xvZ2ljcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L1NwZWNpYWxDYWxsaW5nTG9naWNzL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L1NwZWNpYWxDYWxsaW5nTG9naWNzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlNwZWNpYWxDYWxsaW5nTG9naWNzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDaGFuZ2VQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnT2xkUGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZvcmdvdFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgRm9yZ290UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShGb3Jnb3RQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Mb2dpbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTG9naW5Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMb2dpbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMb2dpbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVzZXRQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlc2V0UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlc2V0UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVG9rZW4/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwRm9ybSB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1FbWFpbDogU2VyZW5pdHkuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlNpZ25VcCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2lnblVwRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgU2lnblVwRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lnblVwRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5UZXh0cyB7XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRGIge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFRyYW5zbGF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21UZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3ZlcnJpZGVDb25maXJtYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZUxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERlZmF1bHQge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEFubm91bmNlbWVudCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQW5ub3VuY2VEZXNjOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQW5ub3VuY2VQcmlvcml0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEF0dGFjaG1lbnRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXRhaWxMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVsZWFzZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXJ2aWNlQ29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFJvbGVJZHM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRVc2VySWRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEFubm91bmNlbWVudERldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQW5ub3VuY2VtZW50c0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBseUNvbnRlbnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBseURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBseVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENhc2VTZXJ2aWNlRGF0YSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FzZU5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGVVc2VyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhdGllbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvY0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2xpbmljcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpbmljTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaW5pY05hbWVFbmc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGluaWNObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlcHRObzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ29udGFjdEJvb2sge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkdmlzZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkdmlzZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbHJlYWR5a25vdzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFscmVhZHlrbm93RXhwcmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXNlbm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaGVja2JveDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlVXNlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBEZXBhcnRtZW50cyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVwdE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXB0TmFtZUVuZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlcHRObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEhpZGRlbnQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEVtcFF1ZXN0aW9ubmFpcmUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcEFyZWE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBCb2R5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wRHJpdmVyTGljZW5zZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcEVmZmVjdGl2ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBFbXQxTGljZW5zZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wTm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBTZXJ2aWNlTGV2ZWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBTa2lsbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcFRpbWVQaGFzZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcFdvcmtZZWFyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSGVpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFdlaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRW1wbG95ZWUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZHJlc3MxOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkcmVzczI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaXJ0aGRheTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJsb29kVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENodXJjaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENpdGl6ZW5JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvdW50cnlJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlcHRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlcHRUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRWR1Y2F0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtUmVsYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUVuZ05hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSG9tZWxhbmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZGVudGlmaWNhdGlvbkNhcmRObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExlYXZlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExpY2Vuc2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYXJyeUZsYWc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmdJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhdGllbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc2l0aW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQb3N0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQb3N0VHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByYWN0aXRpb25lclJlZ2lzdGVyRmxhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJhY2VGbGFnOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmFua3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZWxpZ2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldGlyZUZsYWc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGFuZGFyZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbGVwaG9uZTE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZWxlcGhvbmUyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVW5pdElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBZZWFyczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVwYWlyRm9ybURldGFpbFJlY29yZHMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWF0ZXJpYWxBbW91bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXlBbW91bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBhaXJGb3JtUmVjb3Jkc0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3Vic2lkeUFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlTWF0ZXJpYWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VNYXRlcmlhbENvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXBhaXJGb3JtUmVjb3JkcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXJlYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFzc2lzdGl2ZVNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhc2VObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGV0YWlsTGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEV2YWx1dGlvbkxldmVsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSGFuZGxpbmdQbGFjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEl0ZW1OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWF0ZXJpYWxObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwYWlyRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcGFpckVtcElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwYWlyUmVjb3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2VydmljZUNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2VydmljZVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJzaWR5U291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG93bnNoaXA6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRldXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU3BlY2lhbENhbGxpbmdMb2dpY3Mge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhbGxDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2xkQWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFja2FnZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSYWd1bGVyQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTcGVjaWFsU3RhdHVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dpblRvWW91ckFjY291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPUjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduVXBCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NlcHRUZXJtczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IExvZ291dExpbms6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBY2Nlc3NEZW5pZWQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFja1Blcm1pc3Npb25zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYW5jZWxUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsU3VjY2Vzc0Zvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RoaW5nVG9Qcm9jZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGVudERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgTGF5b3V0IHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyUmlnaHRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93TGlnaHQ6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXZva2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgVmFsaWRhdGlvbkVycm9yIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkVycm9yOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGVGb3JlaWduS2V5RXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZEFjdGl2YXRlVG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTYXZlUHJpbWFyeUtleUVycm9yOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgU2VyZW5lMVsnVGV4dHMnXSA9IFEucHJveHlUZXh0cyhUZXh0cywgJycsIHtEYjp7QWRtaW5pc3RyYXRpb246e0xhbmd1YWdlOntJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MX0sUm9sZTp7Um9sZUlkOjEsUm9sZU5hbWU6MX0sUm9sZVBlcm1pc3Npb246e1Blcm1pc3Npb25LZXk6MSxSb2xlSWQ6MSxSb2xlUGVybWlzc2lvbklkOjEsUm9sZVJvbGVOYW1lOjF9LFRyYW5zbGF0aW9uOntDdXN0b21UZXh0OjEsRW50aXR5UGx1cmFsOjEsS2V5OjEsT3ZlcnJpZGVDb25maXJtYXRpb246MSxTYXZlQ2hhbmdlc0J1dHRvbjoxLFNvdXJjZUxhbmd1YWdlOjEsU291cmNlVGV4dDoxLFRhcmdldExhbmd1YWdlOjEsVGFyZ2V0VGV4dDoxfSxVc2VyOntEaXNwbGF5TmFtZToxLEVtYWlsOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLElzQWN0aXZlOjEsTGFzdERpcmVjdG9yeVVwZGF0ZToxLFBhc3N3b3JkOjEsUGFzc3dvcmRDb25maXJtOjEsUGFzc3dvcmRIYXNoOjEsUGFzc3dvcmRTYWx0OjEsU291cmNlOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFVzZXJJZDoxLFVzZXJJbWFnZToxLFVzZXJuYW1lOjF9LFVzZXJQZXJtaXNzaW9uOntHcmFudGVkOjEsUGVybWlzc2lvbktleToxLFVzZXI6MSxVc2VySWQ6MSxVc2VyUGVybWlzc2lvbklkOjEsVXNlcm5hbWU6MX0sVXNlclJvbGU6e1JvbGVJZDoxLFVzZXI6MSxVc2VySWQ6MSxVc2VyUm9sZUlkOjEsVXNlcm5hbWU6MX19LERlZmF1bHQ6e0Fubm91bmNlbWVudDp7QW5ub3VuY2VEZXNjOjEsQW5ub3VuY2VQcmlvcml0eToxLEFubm91bmNlVHlwZToxLEF0dGFjaG1lbnRzOjEsQ3JlYXRlZGF0ZToxLENyZWF0ZXVzZXI6MSxEZXRhaWxMaXN0OjEsT2lkOjEsUmVsZWFzZURhdGU6MSxTZXJ2aWNlQ29kZToxLFRhcmdldFJvbGVJZHM6MSxUYXJnZXRVc2VySWRzOjEsVXBkYXRlZGF0ZToxLFVwZGF0ZXVzZXI6MX0sQW5ub3VuY2VtZW50RGV0YWlsOntBbm5vdW5jZW1lbnRzSWQ6MSxDcmVhdGVkYXRlOjEsQ3JlYXRldXNlcjoxLE9pZDoxLFJlcGx5Q29udGVudDoxLFJlcGx5RGF0ZToxLFJlcGx5VXNlcjoxLFRhcmdldFVzZXI6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxfSxDYXNlU2VydmljZURhdGE6e0Nhc2VObzoxLENyZWF0ZURhdGU6MSxDcmVhdGVVc2VyOjEsQ3JlYXRlVXNlck5hbWU6MSxPaWQ6MSxQYXRpZW50SWQ6MSxSb2NJZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VyOjEsVXBkYXRlVXNlck5hbWU6MX0sQ2xpbmljczp7Q2xpbmljTmFtZToxLENsaW5pY05hbWVFbmc6MSxDbGluaWNObzoxLERlcHRObzoxfSxDb250YWN0Qm9vazp7QWR2aXNlOjEsQWR2aXNlZGF0ZToxLEFscmVhZHlrbm93OjEsQWxyZWFkeWtub3dFeHByZToxLENhc2VubzoxLENoZWNrYm94OjEsQ3JlYXRlRGF0ZToxLENyZWF0ZVVzZXI6MSxDcmVhdGVVc2VyTmFtZToxLE9pZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VyOjEsVXBkYXRlVXNlck5hbWU6MX0sRGVwYXJ0bWVudHM6e0RlcHROYW1lOjEsRGVwdE5hbWVFbmc6MSxEZXB0Tm86MSxIaWRkZW50OjF9LEVtcFF1ZXN0aW9ubmFpcmU6e0FnZToxLEVtcEFyZWE6MSxFbXBCb2R5OjEsRW1wRHJpdmVyTGljZW5zZToxLEVtcEVmZmVjdGl2ZURhdGU6MSxFbXBFbXQxTGljZW5zZToxLEVtcExhbmd1YWdlOjEsRW1wTm86MSxFbXBTZXJ2aWNlTGV2ZWw6MSxFbXBTa2lsbDoxLEVtcFRpbWVQaGFzZToxLEVtcFdvcmtZZWFyOjEsSGVpZ2h0OjEsT2lkOjEsUURhdGU6MSxTZXg6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcjoxLFdlaWdodDoxfSxFbXBsb3llZTp7QWRkcmVzczE6MSxBZGRyZXNzMjoxLEJpcnRoZGF5OjEsQmxvb2RUeXBlOjEsQ2h1cmNoOjEsQ2l0aXplbklkOjEsQ291bnRyeUlkOjEsRGVwdElkOjEsRGVwdFR5cGU6MSxFZHVjYXRlOjEsRW1OYW1lOjEsRW1SZWxhdGlvbjoxLEVtcGxveWVlRW5nTmFtZToxLEVtcGxveWVlSWQ6MSxFbXBsb3llZU5hbWU6MSxIb21lbGFuZDoxLElkZW50aWZpY2F0aW9uQ2FyZE5vOjEsTGVhdmVEYXRlOjEsTGljZW5zZToxLE1hcnJ5RmxhZzoxLE9pZDoxLE9yZ0lkOjEsUGF0aWVudElkOjEsUG9zaXRpb25JZDoxLFBvc3RJZDoxLFBvc3RUeXBlOjEsUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnOjEsUmFjZUZsYWc6MSxSYW5rczoxLFJlbGlnaW9uOjEsUmV0aXJlRmxhZzoxLFNleDoxLFN0YW5kYXJkOjEsU3RhcnREYXRlOjEsVGVsZXBob25lMToxLFRlbGVwaG9uZTI6MSxVbml0SWQ6MSxVc2VybmFtZToxLFllYXJzOjF9LFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOntDcmVhdGVkYXRlOjEsQ3JlYXRldXNlcjoxLE1hdGVyaWFsQW1vdW50OjEsT2lkOjEsUGF5QW1vdW50OjEsUmVwYWlyRm9ybVJlY29yZHNJZDoxLFN1YnNpZHlBbW91bnQ6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxLFVzZU1hdGVyaWFsOjEsVXNlTWF0ZXJpYWxDb3VudDoxfSxSZXBhaXJGb3JtUmVjb3Jkczp7QXJlYToxLEFzc2lzdGl2ZVNvdXJjZToxLENhc2VObzoxLENyZWF0ZWRhdGU6MSxDcmVhdGV1c2VyOjEsRGV0YWlsTGlzdDoxLEV2YWx1dGlvbkxldmVsOjEsSGFuZGxpbmdQbGFjZToxLEl0ZW1OYW1lOjEsTWF0ZXJpYWxObzoxLE9pZDoxLFBsYWNlOjEsUmVwYWlyRGF0ZToxLFJlcGFpckVtcElkOjEsUmVwYWlyUmVjb3JkOjEsU2VydmljZUNvdW50OjEsU2VydmljZVR5cGU6MSxTdWJzaWR5U291cmNlOjEsVG93bnNoaXA6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxfSxTcGVjaWFsQ2FsbGluZ0xvZ2ljczp7Q2FsbENvdW50OjEsSWQ6MSxPbGRBZ2U6MSxQYWNrYWdlTmFtZToxLFJhZ3VsZXJDb3VudDoxLFNlcToxLFNwZWNpYWxTdGF0dXM6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsR29vZ2xlQnV0dG9uOjEsTG9naW5Ub1lvdXJBY2NvdW50OjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExhbmd1YWdlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IExhbmd1YWdlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTGFuZ3VhZ2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTGFuZ3VhZ2VSb3cuRmllbGRzLkxhbmd1YWdlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Sb2xlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJvbGVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSb2xlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUm9sZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbUm9sZVJvdy5GaWVsZHMuUm9sZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4gKDxVc2VyUGVybWlzc2lvblJvdz57IFBlcm1pc3Npb25LZXk6IHggfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4geC5QZXJtaXNzaW9uS2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVXNlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVXNlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSAhPSB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZHMgZW50ZXJlZCBkb2Vzbid0IG1hdGNoIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRSb2xlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXJvbGVzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtdXNlcnMgdGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJSb2xlRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRQZXJtaXNzaW9uc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ2VkaXQtcm9sZXMtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXNlIGZpZWxkcyBhcmUgb25seSByZXF1aXJlZCBpbiBuZXcgcmVjb3JkIG1vZGVcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlVzZXJcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVXNlckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1VzZXJSb3cuRmllbGRzLlVzZXJuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKFtTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5EYXRhR3JpZDxQZXJtaXNzaW9uQ2hlY2tJdGVtLCBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIGJ5UGFyZW50S2V5OiBRLkdyb3VwaW5nPFBlcm1pc3Npb25DaGVja0l0ZW0+O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0OiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPiA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgcGVybWlzc2lvbktleXMgPSB0aGlzLmdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHBlcm1pc3Npb25LZXlzLm1hcChrZXkgPT4gPFBlcm1pc3Npb25DaGVja0l0ZW0+e1xyXG4gICAgICAgICAgICAgICAgS2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBQYXJlbnRLZXk6IHRoaXMuZ2V0UGFyZW50S2V5KGtleSksXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGVCeUtleVtrZXldLFxyXG4gICAgICAgICAgICAgICAgR3JhbnRSZXZva2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBJc0dyb3VwOiBrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PT0gJzonXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieVBhcmVudEtleSA9IFEudG9Hcm91cGluZyhpdGVtcywgeCA9PiB4LlBhcmVudEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtLCBncmFudDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChpdGVtLkdyYW50UmV2b2tlID09PSBncmFudCkgPyAnIGNoZWNrZWQnIDogJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gZGVzYy5maWx0ZXIoeCA9PiB4LkdyYW50UmV2b2tlID09PSBncmFudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkZXNjLmxlbmd0aCA9PT0gZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCBwYXJ0aWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcm9sZU9ySW1wbGljaXQoa2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlUGVybWlzc2lvbnNba2V5XSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba107XHJcbiAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgb2YgT2JqZWN0LmtleXModGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5HcmFudFJldm9rZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUVmZmVjdGl2ZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBzdHJpbmcge1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYW50Q291bnQgPSBRLmNvdW50KGRlc2MsIHggPT4geC5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh4LkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdCh4LktleSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbnRDb3VudCA9PT0gZGVzYy5sZW5ndGggfHwgZGVzYy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2FsbG93JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbnRDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZGVueSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwYXJ0aWFsJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBpdGVtLkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoaXRlbS5LZXkpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoZ3JhbnRlZCA/ICcgYWxsb3cnIDogJyBkZW55Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUGVybWlzc2lvbicpLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUaXRsZScsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFNlcmVuaXR5LlNsaWNrRm9ybWF0dGluZy50cmVlVG9nZ2xlKCgpID0+IHRoaXMudmlldywgeCA9PiB4LktleSwgY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcyA9IHRoaXMuZ2V0SXRlbUVmZmVjdGl2ZUNsYXNzKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJlZmZlY3RpdmUtcGVybWlzc2lvbiAnICsga2xhc3MgKyAnXCI+JyArIFEuaHRtbEVuY29kZShjdHgudmFsdWUpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDk1LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5HcmFudCcpLCBmaWVsZDogJ0dyYW50JyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MxID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2NoZWNrLWJveCBncmFudCBuby1mbG9hdCBcIiArIGtsYXNzMSArIFwiJz48L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93UmV2b2tlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5SZXZva2UnKSwgZmllbGQ6ICdSZXZva2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczIgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0yLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJjaGVjay1ib3ggcmV2b2tlIG5vLWZsb2F0ICcgKyBrbGFzczIgKyAnXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRJdGVtcyhpdGVtczogUGVybWlzc2lvbkNoZWNrSXRlbVtdKTogdm9pZCB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5zZXRJbmRlbnRzKGl0ZW1zLCB4ID0+IHguS2V5LCB4ID0+IHguUGFyZW50S2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyhpdGVtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuZmlsdGVyQnlJZChpdGVtLCB0aGlzLnZpZXcsIHggPT4geC5QYXJlbnRLZXkpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hDb250YWlucyhpdGVtKSB8fCBpdGVtLklzR3JvdXAgJiYgUS5hbnkodGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCBmYWxzZSksIHggPT4gdGhpcy5tYXRjaENvbnRhaW5zKHgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG1hdGNoQ29udGFpbnMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLlRpdGxlIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXREZXNjZW5kYW50cyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtLCBleGNsdWRlR3JvdXBzOiBib29sZWFuKTogUGVybWlzc2lvbkNoZWNrSXRlbVtdIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogUGVybWlzc2lvbkNoZWNrSXRlbVtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBzdGFjayA9IFtpdGVtXTtcclxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmJ5UGFyZW50S2V5W2kuS2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4Y2x1ZGVHcm91cHMgfHwgIWNoaWxkLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlLCByb3csIGNlbGwpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIudG9nZ2xlQ2xpY2soZSwgcm93LCBjZWxsLCB0aGlzLnZpZXcsIHggPT4geC5LZXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBncmFudCA9IHRhcmdldC5oYXNDbGFzcygnZ3JhbnQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncmFudCB8fCB0YXJnZXQuaGFzQ2xhc3MoJ3Jldm9rZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrZWRPclBhcnRpYWwgPSB0YXJnZXQuaGFzQ2xhc3MoJ2NoZWNrZWQnKSB8fCB0YXJnZXQuaGFzQ2xhc3MoJ3BhcnRpYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZE9yUGFydGlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYW50ID0gZ3JhbnQgIT09IGNoZWNrZWRPclBhcnRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgb2YgdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBncmFudDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWNrR3JpZC5pbnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0UGFyZW50S2V5KGtleSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDAsIGtleS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlkeCA9IGtleS5sYXN0SW5kZXhPZignOicpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsIGlkeCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCwgKGZpZWxkLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEudHJpbVRvTnVsbCh0ZXh0KSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+KTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IDxzdHJpbmdbXT5RLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzJyk7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZVdpdGhHcm91cCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzID0gaztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQocy5sZW5ndGggLSAxKSA9PSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZUJ5S2V5W3NdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVCeUtleVtzXSA9IFEuY29hbGVzY2UoUS50cnlHZXRUZXh0KCdQZXJtaXNzaW9uLicgKyBzKSwgcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSBzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSAnJztcclxuICAgICAgICAgICAgICAgIGxldCBncm91cFRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwID0gZ3JvdXAgKyBwYXJ0c1tpXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0ID0gUS50cnlHZXRUZXh0KCdQZXJtaXNzaW9uLicgKyBncm91cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W2dyb3VwXSA9IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRpdGxlID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbZ3JvdXBdICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW2dyb3VwXSA9IGdyb3VwVGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbc10gPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBrZXlzID0ga2V5cy5zb3J0KCh4LCB5KSA9PiBRLnR1cmtpc2hMb2NhbGVDb21wYXJlKHRpdGxlV2l0aEdyb3VwW3hdLCB0aXRsZVdpdGhHcm91cFt5XSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgdmFsdWUoKTogVXNlclBlcm1pc3Npb25Sb3dbXSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBVc2VyUGVybWlzc2lvblJvd1tdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlldy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5HcmFudFJldm9rZSAhPSBudWxsICYmIGl0ZW0uS2V5LmNoYXJBdChpdGVtLktleS5sZW5ndGggLSAxKSAhPSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IFBlcm1pc3Npb25LZXk6IGl0ZW0uS2V5LCBHcmFudGVkOiBpdGVtLkdyYW50UmV2b2tlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHZhbHVlKHZhbHVlOiBVc2VyUGVybWlzc2lvblJvd1tdKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlldy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKHJvdy5QZXJtaXNzaW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLkdyYW50UmV2b2tlID0gUS5jb2FsZXNjZShyb3cuR3JhbnRlZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9yb2xlUGVybWlzc2lvbnM6IFEuRGljdGlvbmFyeTxib29sZWFuPiA9IHt9O1xyXG5cclxuICAgICAgICBnZXQgcm9sZVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgcm9sZVBlcm1pc3Npb25zKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2ltcGxpY2l0UGVybWlzc2lvbnM6IFEuRGljdGlvbmFyeTxRLkRpY3Rpb25hcnk8Ym9vbGVhbj4+ID0ge307XHJcblxyXG4gICAgICAgIHNldCBpbXBsaWNpdFBlcm1pc3Npb25zKHZhbHVlOiBRLkRpY3Rpb25hcnk8c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHZhbHVlW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgb2YgbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba11bc10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMge1xyXG4gICAgICAgIHNob3dSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrSXRlbSB7XHJcbiAgICAgICAgUGFyZW50S2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBJc0dyb3VwPzogYm9vbGVhbjtcclxuICAgICAgICBHcmFudFJldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3RSb2xlUGVybWlzc2lvbnMoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnJvbGVQZXJtaXNzaW9ucyA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclJvbGVEaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFJvbGVDaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUm9sZURpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUm9sZUNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUm9sZXMnKSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUm9sZVNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySURcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5zZXJ2aWNlUmVxdWVzdCgnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHBhcnNlSW50KHgsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5TYXZlU3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5EaWFsb2dUaXRsZScpLCB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGlkPSd+X1JvbGVzJz48L2Rpdj5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZURpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5Db21tb24ge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RXhlY3V0ZU9wdGlvbnMge1xyXG4gICAgICAgIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgICAgIGRvd25sb2FkPzogYm9vbGVhbjtcclxuICAgICAgICBleHRlbnNpb24/OiAncGRmJyB8ICdodG0nIHwgJ2h0bWwnIHwgJ3hsc3gnIHwgJ2RvY3gnO1xyXG4gICAgICAgIGdldFBhcmFtcz86ICgpID0+IGFueTtcclxuICAgICAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcbiAgICAgICAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0QnV0dG9uT3B0aW9ucyBleHRlbmRzIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBjc3NDbGFzcz86IHN0cmluZztcclxuICAgICAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmVwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogUmVwb3J0QnV0dG9uT3B0aW9ucyk6IFNlcmVuaXR5LlRvb2xCdXR0b24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJ1JlcG9ydCcpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFEuY29hbGVzY2Uob3B0aW9ucy5jc3NDbGFzcywgJ3ByaW50LWJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGUob3B0aW9uczogUmVwb3J0RXhlY3V0ZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IG9wdGlvbnMuZ2V0UGFyYW1zID8gb3B0aW9ucy5nZXRQYXJhbXMoKSA6IG9wdGlvbnMucGFyYW1zO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzZFwiKVxyXG4gICAgICAgICAgICBRLnBvc3RUb1VybCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICd+L0V4dGVuc2lvbnMvUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICAvL3VybDogJ34vUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IG9wdGlvbnMucmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogUS5jb2FsZXNjZShvcHRpb25zLmV4dGVuc2lvbiwgJ3BkZicpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdDogb3B0ID8gJC50b0pTT04ob3B0KSA6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBRLmNvYWxlc2NlKG9wdGlvbnMudGFyZ2V0LCAnX2JsYW5rJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lMS5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdTZXJlbmUxJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcyhbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lZGl0b3IoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JCYXNlPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxURW50aXR5LCBhbnk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbmV4dElkID0gMTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpZChlbnRpdHk6IFRFbnRpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbnRpdHkgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV4dElkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJgXCIgKyB0aGlzLm5leHRJZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldE5ld0lkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICBlbnRpdHlbdGhpcy5nZXRJZFByb3BlcnR5KCldID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlKG9wdDogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8YW55PiwgY2FsbGJhY2s6IChyOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBvcHQucmVxdWVzdCBhcyBTZXJlbml0eS5TYXZlUmVxdWVzdDxURW50aXR5PjtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IFEuZGVlcENsb25lKHJlcXVlc3QuRW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQocm93KTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIChyb3cgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVFbnRpdHkocm93LCBpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy52aWV3LmdldEl0ZW1zKCkuc2xpY2UoKTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IFEuaW5kZXhPZihpdGVtcywgeCA9PiB0aGlzLmlkKHgpID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBRLmRlZXBDbG9uZSh7fSBhcyBURW50aXR5LCBpdGVtc1tpbmRleF0sIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW50aXRpZXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlRW50aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRlbGV0ZUl0ZW0oaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IFRFbnRpdHksIGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0RW50aXRpZXMoaXRlbXM6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5ld0VudGl0eSgpOiBURW50aXR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFRFbnRpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgdmFyIGFkZEJ1dHRvbiA9IFEudHJ5Rmlyc3QoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09ICdhZGQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKHRoaXMuZ2V0TmV3RW50aXR5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucy5maWx0ZXIoeCA9PiB4LmNzc0NsYXNzICE9IFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZWRpdEl0ZW0oZW50aXR5T3JJZDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSBlbnRpdHlPcklkO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vbkRlbGV0ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZUVudGl0eShpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckRpYWxvZ1JlYWRPbmx5KGRpYWxvZyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEVkaXRWYWx1ZShwcm9wZXJ0eSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eS5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZSwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eS5uYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogVEVudGl0eVtdIHtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldElkUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5nZXRJdGVtcygpLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkICYmIGlkLnRvU3RyaW5nKCkuY2hhckF0KDApID09ICdgJylcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgeVtwXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoKHZhbHVlIHx8IFtdKS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IFEuZGVlcENsb25lKHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh5IGFzIGFueSlbcF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAoeSBhcyBhbnkpW3BdID0gXCJgXCIgKyB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGVuYWJsZURlbGV0ZUNvbHVtbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlRGVsZXRlQ29sdW1uKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdEZWxldGUgUm93JyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiAnPGEgY2xhc3M9XCJpbmxpbmUtYWN0aW9uIGRlbGV0ZS1yb3dcIiB0aXRsZT1cImRlbGV0ZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vIHRleHQtcmVkXCI+PC9pPjwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDI0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtOiBURW50aXR5ID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdXNlciBjbGlja3MgXCJpXCIgZWxlbWVudCwgZS5nLiBpY29uXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSlcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZURlbGV0ZUNvbHVtbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnZGVsZXRlLXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRpdHkoaXRlbVt0aGlzLmdldElkUHJvcGVydHkoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT4gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VEVudGl0eSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb25TYXZlOiAob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuU2F2ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgb25EZWxldGU6IChvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5EZWxldGVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNhdmUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlID0gbnVsbDtcclxuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhcHBseSBjaGFuZ2VzIGJ1dHRvbiBkb2Vzbid0IHdvcmsgcHJvcGVybHkgd2l0aCBpbi1tZW1vcnkgZ3JpZHMgeWV0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGx5Q2hhbmdlc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUNoYW5nZXNCdXR0b24uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUhhbmRsZXIob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuU2F2ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMub25TYXZlICYmIHRoaXMub25TYXZlKG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVIYW5kbGVyKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZSAmJiB0aGlzLm9uRGVsZXRlKG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEFubm91bmNlbWVudFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEFubm91bmNlbWVudEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEFubm91bmNlbWVudFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREaWFsb2dDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8QW5ub3VuY2VtZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEFubm91bmNlbWVudEZvcm1DdXN0b20uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQW5ub3VuY2VtZW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50R3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QW5ub3VuY2VtZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEFubm91bmNlbWVudENvbHVtbnNDdXN0b20uY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxBbm5vdW5jZW1lbnREZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREZXRhaWxHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxBbm5vdW5jZW1lbnREZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50R3JpZERpYWxvZyBleHRlbmRzIENvbW1vbi5HcmlkRWRpdG9yRGlhbG9nPEFubm91bmNlbWVudFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQW5ub3VuY2VtZW50VHlwZSA6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgcmVwYWlyRGF0ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yQmFzZS50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAvKiAgIGltcG9ydCBmbGQgPSBBbm5vdW5jZW1lbnRSb3cuRmllbGRzKi9cclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRHcmlkRWRpdG9yIGV4dGVuZHMgQ29tbW9uLkdyaWRFZGl0b3JCYXNlPEFubm91bmNlbWVudERldGFpbFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJTZXJ2aWNlQUQuQW5ub3VuY2VtZW50RGV0YWlsQ3VzdG9tXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudEdyaWREaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICAvL3B1YmxpYyBzZXJ2aWNlQ29kZTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBBdHRhY2htZW50IDogc3RyaW5nO1xyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2VydmljZUNvZGUgPSBRLmdldENvb2tpZShcIlNlcnZpY2VDb2RlXCIpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQW5ub3VuY2VtZW50Um93LmRlbGV0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZGVsZXRlLXJvdyAgIGZhIGZhLXRyYXNoXCIgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQW5ub3VuY2VtZW50Um93LnVwZGF0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93ICAgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA3NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vY29sdW1ucy5wdXNoKFxyXG4gICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBmaWVsZDogXCJDb250YWN0UGVyc29uUm93XCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgQ29udGFjdFBlcnNvbi1yb3cgIGZhIGZhLXBob25lXCIgdGl0bGU9XCLoga/ntaHkurpcIj7oga/ntaHkuro8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgIHdpZHRoOiA4NSxcclxuICAgICAgICAgICAgLy8gICAgICAgIG1pbldpZHRoOiA4NSxcclxuICAgICAgICAgICAgLy8gICAgICAgIG1heFdpZHRoOiA4NVxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRPcHRpb25zID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBncmlkT3B0aW9ucy5yb3dIZWlnaHQgPSA0MDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBncmlkT3B0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdlZGl0LXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVudGl0eURpYWxvZyh0aGlzLmdldEl0ZW1UeXBlKCksIGRsZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgQW5ub3VuY2VtZW50R3JpZERpYWxvZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLnRyaWdnZXJEYXRhQ2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdkZWxldGUtcm93JykpIHtcclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50aXR5KGl0ZW1bdGhpcy5nZXRJZFByb3BlcnR5KCldKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdDb250YWN0UGVyc29uLXJvdycpKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBkbGcgPSBuZXcgUHVibGljQmFzaWMuQ29udGFjdFBlcnNvbkN1c3RvbUdyaWREaWFsb2codGhpcy5zZXJ2aWNlQ29kZSwgaXRlbS5QYXRpZW50Tm8sIGl0ZW0uQ2FzZU5vKTtcclxuICAgICAgICAgICAgLy8gICAgZGxnLmxvYWROZXdBbmRPcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIC8vICAgIC8vbGV0IGRsZyA9IG5ldyBDb250YWN0UGVyc29uR3JpZEN1c3RvbSh0aGlzLnNsaWNrQ29udGFpbmVyLnBhcmVudCgpLCB0aGlzLnNlcnZpY2VDb2RlLCBpdGVtLlBhdGllbnRObyk7XHJcblxyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wcml2YXRlIGF1dG9TaXplO1xyXG5cclxuICAgICAgICAvL3Byb3RlY3RlZCBjcmVhdGVTbGlja0dyaWQoKTogU2xpY2suR3JpZCB7XHJcbiAgICAgICAgLy8gICAgbGV0IGdyaWQgPSBzdXBlci5jcmVhdGVTbGlja0dyaWQoKTtcclxuICAgICAgICAvLyAgICB0aGlzLmF1dG9TaXplID0gbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpOyAvLyAqKiogSWYgeW91IHdhbnQgdG8gbWFrZSBpdCBhdXRvcmVzaXplIHdoZW4gZ3JpZCBpcyBsb2FkZWQsIHVzZTogbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpO1xyXG4gICAgICAgIC8vICAgIGdyaWQucmVnaXN0ZXJQbHVnaW4odGhpcy5hdXRvU2l6ZSk7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGdyaWQ7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAvLyoqKiBSZXNpemVzIHRoZSBjb2x1bW5zIGFmdGVyIGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIGdyaWQgKGV4LiBDb2x1bW4gUGlja2VyKSAqXHJcbiAgICAgICAgLy9wcm90ZWN0ZWQgbWFya3VwUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gICAgc3VwZXIubWFya3VwUmVhZHkoKTtcclxuICAgICAgICAvLyAgICBpZiAodGhpcy5hdXRvU2l6ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMuYXV0b1NpemUucmVzaXplQWxsQ29sdW1ucygpO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2FzZVNlcnZpY2VEYXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2FzZVNlcnZpY2VEYXRhRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2FzZVNlcnZpY2VEYXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YUNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkRlbGV0ZVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENhc2VTZXJ2aWNlRGF0YVJvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ2FzZVNlcnZpY2VEYXRhUm93LmRlbGV0ZVBlcm1pc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93IGZhIGZhLXRyYXNoXCIgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBmYSBmYS10cmFzaFwiIGRpc2FibGVkIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q2FzZVNlcnZpY2VEYXRhUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDYXNlU2VydmljZURhdGFSb3cudXBkYXRlUGVybWlzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdyBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENhc2VTZXJ2aWNlRGF0YURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImRlbGV0ZS1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oXCLnorrlrpropoHliKrpmaTll44/XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDYXNlU2VydmljZURhdGFTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhc2VTZXJ2aWNlRGF0YURpYWxvZ0N1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDYXNlU2VydmljZURhdGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhR3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2FzZVNlcnZpY2VEYXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YUNvbHVtbnNDdXN0b20uY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkRlbGV0ZVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENhc2VTZXJ2aWNlRGF0YVJvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ2FzZVNlcnZpY2VEYXRhUm93LmRlbGV0ZVBlcm1pc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93IGZhIGZhLXRyYXNoXCIgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBmYSBmYS10cmFzaFwiIGRpc2FibGVkIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q2FzZVNlcnZpY2VEYXRhUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDYXNlU2VydmljZURhdGFSb3cudXBkYXRlUGVybWlzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdyBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENhc2VTZXJ2aWNlRGF0YURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImRlbGV0ZS1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oXCLnorrlrpropoHliKrpmaTll44/XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDYXNlU2VydmljZURhdGFTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDbGluaWNzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENsaW5pY3NSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2xpbmljc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2xpbmljc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENsaW5pY3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaW5pY3NSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDbGluaWNzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDbGluaWNzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENsaW5pY3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2xpbmljc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENsaW5pY3NGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDbGluaWNzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2xpbmljc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDbGluaWNzQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDbGluaWNzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDbGluaWNzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENsaW5pY3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDbGluaWNzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2xpbmljc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDb250YWN0Qm9va1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDb250YWN0Qm9va0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb250YWN0Qm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDb250YWN0Qm9va0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q29udGFjdEJvb2tSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IHN1cGVyLmdldFF1aWNrRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IEFscmVhZHlGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiQWxyZWFkeWtub3dcIik7XHJcbiAgICAgICAgICAgIGlmIChBbHJlYWR5RmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5RmlsdGVyLmluaXQgPSB3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAodyBhcyBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3IpLnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucGFuZWwodHJ1ZSlcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENvbnRhY3RCb29rUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENvbnRhY3RCb29rRm9ybUN1c3RvbSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICBwcml2YXRlIGNhc2VObztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoQ2FzZW5vPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzZU5vID0gQ2FzZW5vO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkdmlzZS5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkudmFsKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLkFscmVhZHlrbm93LnZhbHVlID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLkFscmVhZHlrbm93LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhpcy5mb3JtLkNhc2Vuby52YWx1ZSA9IHRoaXMuQ2FzZW5vO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tEaWFsb2dDdXN0b20xIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENvbnRhY3RCb29rUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRm9ybUN1c3RvbTEuZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb250YWN0Qm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDb250YWN0Qm9va0Zvcm1DdXN0b20xKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgIHByaXZhdGUgQ2FzZW5vO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihDYXNlbm8/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5DYXNlbm8gPSBDYXNlbm87XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWR2aXNlLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS52YWwoKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uQWxyZWFkeWtub3cudmFsdWUgPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uQWxyZWFkeWtub3cudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uU2hvd1RleHQudmFsdWUgPSB0aGlzLkNhc2VubztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rR3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q29udGFjdEJvb2tSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tDb2x1bW5zQ3VzdG9tLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMuc3BsaWNlKFEuaW5kZXhPZihidXR0b25zLCB4ID0+IHguY3NzQ2xhc3MgPT0gXCJhZGQtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInRvb2wtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInJlZnJlc2gtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoXCJMQUxBTEFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICd0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYS1yZWd1bGFyIGZhLWJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBDb250YWN0Qm9va0RpYWxvZ0N1c3RvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbGcubG9hZE5ld0FuZE9wZW5EaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IHRoaXMuZ2V0U2VydmljZSgpICsgJy9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLoga/ntaHnsL9FWENFTFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL2J1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgLy8gICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5SZXBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICByZXBvcnRLZXk6IFwiUmVwb3J0LkNvbnRhY3RCb29rXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICB0aXRsZTogJ+iBr+e1oeewv1BERidcclxuICAgICAgICAgICAgLy8gICAgfSlcclxuICAgICAgICAgICAgLy8pO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfoga/ntaHnsL9QREYnLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwicGRmLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJmYSBmYS1maWxlLXBkZi1vXCIsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vU2VyZW5lMS5Db21tb24uUmVwb3J0SGVscGVyLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHJlcG9ydEtleTogXCJTZXJlbmUxLkNvbnRhY3RCb29rUmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5FeHRlbnNpb25zLlJlcG9ydEhlbHBlci5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0S2V5OiBcIlNlcmVuZTEuQ29udGFjdEJvb2tSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9vbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vICAgICAgICB0aGlzLmVkaXRJdGVtKDxDb250YWN0Qm9va1Jvdz57XHJcbiAgICAgICAgLy8gICAgICAgICAgICBDYXNlbm86IHRoaXMuY2FzZW5vKCksXHJcbiAgICAgICAgLy8gICAgICAgIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3U3VibWl0KCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciByZXEgPSB0aGlzLnZpZXcucGFyYW1zIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICByZXEuU29ydCA9IFsnQ2hlY2tib3gnLCAnQWR2aXNlZGF0ZSBkZXNjJ11cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRRdWlja0ZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXNlbm9GaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiQ2FzZW5vXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2FzZW5vRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlbm9GaWx0ZXIuaGFuZGxlciA9IGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snQ2FzZW5vJ10sICdsaWtlJywgYCUke2gudmFsdWV9JWBdLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlbm9GaWx0ZXIuaW5pdCA9IHcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICh3IGFzIFNlcmVuaXR5LlN0cmluZ0VkaXRvcikudmFsdWUgPSBcImZcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IEFkdmlzZWRhdGVmaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiQWR2aXNlZGF0ZVwiKTtcclxuICAgICAgICAgICAgaWYgKEFkdmlzZWRhdGVmaWx0ZXIpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgQWR2aXNlZGF0ZWZpbHRlci5pbml0ID0gciA9PiB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAociBhcyBTZXJlbml0eS5EYXRlRWRpdG9yKS52YWx1ZSA9ICcnOyAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZERhdGUgPSByLmVsZW1lbnQubmV4dEFsbChcIi5zLURhdGVFZGl0b3JcIikuZ2V0V2lkZ2V0KFNlcmVuaXR5LkRhdGVFZGl0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGUudmFsdWUgPSAnbm93JztcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICBsZXQgQ3JlYXRlVXNlckZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJDcmVhdGVVc2VyXCIpO1xyXG4gICAgICAgICAgICBpZiAoQ3JlYXRlVXNlckZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlVXNlckZpbHRlci5pbml0ID0geiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHogYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGxldCBhY29sID0gUS5maXJzdChjb2x1bW5zLCB4ID0+IHguZmllbGQgPT0gXCJBbHJlYWR5a25vd1wiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY29sKSB7XHJcbiAgICAgICAgICAgICAgICBhY29sLmZvcm1hdCA9IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxDb250YWN0Qm9va1Jvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5BbHJlYWR5a25vdyA9PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCLmmK9cIjtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtLkFscmVhZHlrbm93ID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIuWQplwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxDb250YWN0Qm9va1Jvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ29udGFjdEJvb2tSb3cuZGVsZXRlUGVybWlzc2lvbikgJiYgaXRlbS5DaGVja2JveCAhPSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93IGZhIGZhLXRyYXNoXCIgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBmYSBmYS10cmFzaFwiIGRpc2FibGVkIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENvbnRhY3RCb29rUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDb250YWN0Qm9va1Jvdy51cGRhdGVQZXJtaXNzaW9uKSAmJiBpdGVtLkNoZWNrYm94ICE9IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdyBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJlY29tbWFuZFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKC8qY3R4Ki8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgbGV0IGl0ZW0gPSA8Q29udGFjdEJvb2tSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENvbnRhY3RCb29rUm93LnVwZGF0ZVBlcm1pc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZWRpdC1yb3cyIGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6Lyv5bu66K2wXCI+57eo6Lyv5bu66K2wPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6Lyv5bu66K2wXCI+57eo6Lyv5bu66K2wPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogOTVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHNsaWNrID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHNsaWNrLnJvd0hlaWdodCA9IDM1O1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImVkaXQtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBDb250YWN0Qm9va0RpYWxvZ0N1c3RvbSgpO1xyXG4gICAgICAgICAgICAgICAgIGRsZy5sb2FkQnlJZEFuZE9wZW5EaWFsb2coaXRlbS5PaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJkZWxldGUtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFwi56K65a6a6KaB5Yiq6Zmk5ZeOP1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdEJvb2tTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJlZGl0LXJvdzJcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tMSgndGVzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRsZy5sb2FkQnlJZEFuZE9wZW5EaWFsb2coaXRlbS5PaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRGVwYXJ0bWVudHNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RGVwYXJ0bWVudHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRGVwYXJ0bWVudHNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRGVwYXJ0bWVudHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRGVwYXJ0bWVudHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgRGVwYXJ0bWVudHNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBEZXBhcnRtZW50c0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPERlcGFydG1lbnRzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIERlcGFydG1lbnRzQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBEZXBhcnRtZW50c0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRGVwYXJ0bWVudHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRGVwYXJ0bWVudHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBEZXBhcnRtZW50c1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIERlcGFydG1lbnRzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucGFuZWwodHJ1ZSlcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcFF1ZXN0aW9ubmFpcmVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RW1wUXVlc3Rpb25uYWlyZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICAvL3Byb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBFbXBRdWVzdGlvbm5haXJlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lbnRpdHkuRW1wTm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKHRydWUpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBRdWVzdGlvbm5haXJlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8RW1wUXVlc3Rpb25uYWlyZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKHRydWUpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxFbXBsb3llZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBFbXBsb3llZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBsb3llZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBFbXBsb3llZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBFbXBsb3llZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8RW1wbG95ZWVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gRW1wbG95ZWVDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEVtcGxveWVlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBFbXBsb3llZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBsb3llZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEVtcGxveWVlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRW1wbG95ZWVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcImFkZC1idXR0b25cIiksIDEpO1xyXG4gICAgICAgICAgICBidXR0b25zLnNwbGljZShRLmluZGV4T2YoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09IFwidG9vbC1idXR0b25cIiksIDEpO1xyXG4gICAgICAgICAgICBidXR0b25zLnNwbGljZShRLmluZGV4T2YoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09IFwicmVmcmVzaC1idXR0b25cIiksIDEpO1xyXG4gICAgICAgICAgICAvL2J1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgIC8vICAgICAgICB0aXRsZTogUS50ZXh0KFwiRU1QUVVFU1RJT05OQUlSRVwiKSxcclxuICAgICAgICAgICAgLy8gICAgY3NzQ2xhc3M6ICd0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAvLyAgICBpY29uOiAnZmEtcmVndWxhciBmYS1ib29rJyxcclxuICAgICAgICAgICAgLy8gICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgbGV0IGRsZyA9IG5ldyBFbXBsb3llZURpYWxvZygpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgZGxnLmxvYWROZXdBbmRPcGVuRGlhbG9nKHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vKVxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5FeHRlbnNpb25zLkV4Y2VsRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZTogdGhpcy5nZXRTZXJ2aWNlKCkgKyAnL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWToeW3pUVYQ0VMXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnRW1wbG95ZWVQREYnLFxyXG4gICAgICAgICAgICAgIGNzc0NsYXNzOiBcInBkZi1idXR0b25cIixcclxuICAgICAgICAgICAgICBpY29uOiBcImZhIGZhLWZpbGUtcGRmLW9cIixcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICBTZXJlbmUxLkNvbW1vbi5SZXBvcnRIZWxwZXIuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXBvcnRLZXk6IFwiU2VyZW5lMS5FbXBsb3llZVJlcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbn0pO1xyXG5yZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0UXVpY2tGaWx0ZXJzKCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IHN1cGVyLmdldFF1aWNrRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IEVtcGxveWVlTmFtZUZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJFbXBsb3llZU5hbWVcIik7XHJcbiAgICAgICAgICAgIGlmIChFbXBsb3llZU5hbWVGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIEVtcGxveWVlTmFtZUZpbHRlci5oYW5kbGVyID0gaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucmVxdWVzdC5Dcml0ZXJpYSA9IFNlcmVuaXR5LkNyaXRlcmlhLmFuZChbWydFbXBsb3llZU5hbWUnXSwgJ2xpa2UnLCBgJSR7aC52YWx1ZX0lYF0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEVtcGxveWVlTmFtZUZpbHRlci5pbml0ID0gYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGEgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgRW1wbG95ZWVJZEZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJFbXBsb3llZUlkXCIpO1xyXG4gICAgICAgICAgICBpZiAoRW1wbG95ZWVJZEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgRW1wbG95ZWVJZEZpbHRlci5oYW5kbGVyID0gaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucmVxdWVzdC5Dcml0ZXJpYSA9IFNlcmVuaXR5LkNyaXRlcmlhLmFuZChbWydFbXBsb3llZUlkJ10sICdsaWtlJywgYCUke2kudmFsdWV9JWBdLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZUlkRmlsdGVyLmluaXQgPSBiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAoYiBhcyBTZXJlbml0eS5TdHJpbmdFZGl0b3IpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBEZXB0SWRGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiRGVwdElkXCIpO1xyXG4gICAgICAgICAgICBpZiAoRGVwdElkRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBEZXB0SWRGaWx0ZXIuaGFuZGxlciA9IGogPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGouYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBqLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snRGVwdElkJ10sICdsaWtlJywgYCUke2oudmFsdWV9JWBdLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIERlcHRJZEZpbHRlci5pbml0ID0gYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAoYyBhcyBTZXJlbml0eS5TdHJpbmdFZGl0b3IpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBQb3N0VHlwZUZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJQb3N0VHlwZVwiKTtcclxuICAgICAgICAgICAgaWYgKFBvc3RUeXBlRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBQb3N0VHlwZUZpbHRlci5oYW5kbGVyID0gdiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYucmVxdWVzdC5Dcml0ZXJpYSA9IFNlcmVuaXR5LkNyaXRlcmlhLmFuZChbWydQb3N0VHlwZSddLCAnbGlrZScsIGAlJHt2LnZhbHVlfSVgXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUG9zdFR5cGVGaWx0ZXIuaW5pdCA9IGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgKGQgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8RW1wUXVlc3Rpb25uYWlyZVJvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oRW1wUXVlc3Rpb25uYWlyZVJvdy51cGRhdGVQZXJtaXNzaW9uKSB8fCBRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihFbXBRdWVzdGlvbm5haXJlUm93Lmluc2VydFBlcm1pc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgZWRpdC1yb3cgZmEgZmEtbGlzdC11bFwiIHRpdGxlPVwi5ZOh5bel5oqA6IO95ZWP5Y23XCI+5ZOh5bel5oqA6IO95ZWP5Y23PC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGZhIGZhLWxpc3QtdWxcIiBkaXNhYmxlZCB0aXRsZT1cIuWToeW3peaKgOiDveWVj+WNt1wiPuWToeW3peaKgOiDveWVj+WNtzwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxNDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRJdGVtQ3NzQ2xhc3MoaXRlbTogRGVmYXVsdC5FbXBsb3llZVJvdywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGxldCBrbGFzczogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uRW1wbG95ZWVJZCA9PSBudWxsIHx8IGl0ZW0uRW1wbG95ZWVOYW1lID09IG51bGwgfHwgaXRlbS5FbXBsb3llZUVuZ05hbWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGtsYXNzICs9IFwiIG51bGwgXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gUS50cmltVG9OdWxsKGtsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IEVtcFF1ZXN0aW9ubmFpcmVEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbXBRdWVzdGlvbm5haXJlT2lkO1xyXG4gICAgICAgICAgICAgICAgRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JpdGVyaWE6IFtbJ0VtcE5vJ10sICc9JywgaXRlbS5FbXBsb3llZUlkXSxcclxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpOyAvL+aJvnJlc3BvbnNlIOeahOWxrOaAp1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5FbnRpdGllcy5sZW5ndGggPiAwKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBRdWVzdGlvbm5haXJlT2lkID0gcmVzcG9uc2UuRW50aXRpZXNbMF0uT2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbGcubG9hZEJ5SWRBbmRPcGVuRGlhbG9nKGVtcFF1ZXN0aW9ubmFpcmVPaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgRW1wUXVlc3Rpb25uYWlyZURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbGcubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coPEVtcFF1ZXN0aW9ubmFpcmVSb3c+eyBFbXBObzogaXRlbS5FbXBsb3llZUlkLCBRRGF0ZTogUS5mb3JtYXREYXRlKG5ldyBEYXRlKCksICd5eXl5L01NL2RkIEhIOm1tOnNzJykgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sIHsgYXN5bmM6IGZhbHNlIH0pOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybURldGFpbFJlY29yZHNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0dyaWREaWFsb2cgZXh0ZW5kcyBDb21tb24uR3JpZEVkaXRvckRpYWxvZzxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtQ3VzdG9tLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXJ2aWNlVHlwZSA6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgTWF0ZXJpYWxObzogc3RyaW5nO1xyXG5cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yQmFzZS50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgIC8qIGltcG9ydCBmbGQgPVJlcGFpckZvcm1SZWNvcmRzUm93LkZpZWxkcyovXHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yIGV4dGVuZHMgQ29tbW9uLkdyaWRFZGl0b3JCYXNlPFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIlNlcnZpY2VBRC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0dyaWREaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcblxyXG4gICAgICAgIC8vcHVibGljIHNlcnZpY2VDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIEFyZWEgOiBzdHJpbmc7XHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zZXJ2aWNlQ29kZSA9IFEuZ2V0Q29va2llKFwiU2VydmljZUNvZGVcIik7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIkRlbGV0ZVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5kZWxldGVQZXJtaXNzaW9uKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS1yb3cgICBmYSBmYS10cmFzaFwiIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBmYSBmYS10cmFzaFwiIGRpc2FibGVkIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDc1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFJlcGFpckZvcm1SZWNvcmRzUm93LnVwZGF0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93ICAgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA3NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vY29sdW1ucy5wdXNoKFxyXG4gICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBmaWVsZDogXCJDb250YWN0UGVyc29uUm93XCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgQ29udGFjdFBlcnNvbi1yb3cgIGZhIGZhLXBob25lXCIgdGl0bGU9XCLoga/ntaHkurpcIj7oga/ntaHkuro8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgIHdpZHRoOiA4NSxcclxuICAgICAgICAgICAgLy8gICAgICAgIG1pbldpZHRoOiA4NSxcclxuICAgICAgICAgICAgLy8gICAgICAgIG1heFdpZHRoOiA4NVxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRPcHRpb25zID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBncmlkT3B0aW9ucy5yb3dIZWlnaHQgPSA0MDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBncmlkT3B0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdlZGl0LXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVudGl0eURpYWxvZyh0aGlzLmdldEl0ZW1UeXBlKCksIGRsZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgUmVwYWlyRm9ybVJlY29yZHNHcmlkRGlhbG9nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHsgdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIudHJpZ2dlckRhdGFDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2RlbGV0ZS1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnQ29udHJvbHMuRW50aXR5RGlhbG9nLkRlbGV0ZUNvbmZpcm1hdGlvbicpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRpdHkoaXRlbVt0aGlzLmdldElkUHJvcGVydHkoKV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ0NvbnRhY3RQZXJzb24tcm93JykpIHtcclxuICAgICAgICAgICAgLy8gICAgbGV0IGRsZyA9IG5ldyBQdWJsaWNCYXNpYy5Db250YWN0UGVyc29uQ3VzdG9tR3JpZERpYWxvZyh0aGlzLnNlcnZpY2VDb2RlLCBpdGVtLlBhdGllbnRObywgaXRlbS5DYXNlTm8pO1xyXG4gICAgICAgICAgICAvLyAgICBkbGcubG9hZE5ld0FuZE9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgLy8gICAgLy9sZXQgZGxnID0gbmV3IENvbnRhY3RQZXJzb25HcmlkQ3VzdG9tKHRoaXMuc2xpY2tDb250YWluZXIucGFyZW50KCksIHRoaXMuc2VydmljZUNvZGUsIGl0ZW0uUGF0aWVudE5vKTtcclxuXHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ByaXZhdGUgYXV0b1NpemU7XHJcblxyXG4gICAgICAgIC8vcHJvdGVjdGVkIGNyZWF0ZVNsaWNrR3JpZCgpOiBTbGljay5HcmlkIHtcclxuICAgICAgICAvLyAgICBsZXQgZ3JpZCA9IHN1cGVyLmNyZWF0ZVNsaWNrR3JpZCgpO1xyXG4gICAgICAgIC8vICAgIHRoaXMuYXV0b1NpemUgPSBuZXcgU2xpY2suQXV0b0NvbHVtblNpemUodHJ1ZSk7IC8vICoqKiBJZiB5b3Ugd2FudCB0byBtYWtlIGl0IGF1dG9yZXNpemUgd2hlbiBncmlkIGlzIGxvYWRlZCwgdXNlOiBuZXcgU2xpY2suQXV0b0NvbHVtblNpemUodHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgZ3JpZC5yZWdpc3RlclBsdWdpbih0aGlzLmF1dG9TaXplKTtcclxuICAgICAgICAvLyAgICByZXR1cm4gZ3JpZDtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy8gKioqIFJlc2l6ZXMgdGhlIGNvbHVtbnMgYWZ0ZXIgY2hhbmdlcyBhcmUgbWFkZSB0byB0aGUgZ3JpZCAoZXguIENvbHVtbiBQaWNrZXIpICpcclxuICAgICAgICAvL3Byb3RlY3RlZCBtYXJrdXBSZWFkeSgpIHtcclxuICAgICAgICAvLyAgICBzdXBlci5tYXJrdXBSZWFkeSgpO1xyXG4gICAgICAgIC8vICAgIGlmICh0aGlzLmF1dG9TaXplICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgICAgdGhpcy5hdXRvU2l6ZS5yZXNpemVBbGxDb2x1bW5zKCk7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJlcGFpckZvcm1SZWNvcmRzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJlcGFpckZvcm1SZWNvcmRzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSZXBhaXJGb3JtUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSZXBhaXJGb3JtUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzR3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmVwYWlyRm9ybVJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zQ3VzdG9tLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzRGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0UXVpY2tGaWx0ZXJzKCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IHN1cGVyLmdldFF1aWNrRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IFJlcGFpckVtcElkRmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIlJlcGFpckVtcElkXCIpO1xyXG4gICAgICAgICAgICBpZiAoUmVwYWlyRW1wSWRGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIFJlcGFpckVtcElkRmlsdGVyLmluaXQgPSB6ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAoeiBhcyBTZXJlbml0eS5TdHJpbmdFZGl0b3IpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IEFkdmlzZWRhdGVmaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiUmVwYWlyRGF0ZVwiKTtcclxuICAgICAgICAgICAgaWYgKEFkdmlzZWRhdGVmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIEFkdmlzZWRhdGVmaWx0ZXIuaW5pdCA9IHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIChyIGFzIFNlcmVuaXR5LkRhdGVFZGl0b3IpLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmREYXRlID0gci5lbGVtZW50Lm5leHRBbGwoXCIucy1EYXRlRWRpdG9yXCIpLmdldFdpZGdldChTZXJlbml0eS5EYXRlRWRpdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFJlcGFpckZvcm1SZWNvcmRzUm93LmRlbGV0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZGVsZXRlLXJvdyBmYSBmYS10cmFzaFwiIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZmEgZmEtdHJhc2hcIiBkaXNhYmxlZCB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oUmVwYWlyRm9ybVJlY29yZHNSb3cudXBkYXRlUGVybWlzc2lvbikgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZWRpdC1yb3cgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgZGlzYWJsZWQgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImVkaXQtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBSZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbSgpO1xyXG4gICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImRlbGV0ZS1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oXCLnorrlrpropoHliKrpmaTll44/XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UuRGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50aXR5SWQ6IGl0ZW0uT2lkXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFwi5Yiq6Zmk5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgICAgICAgXHJcblxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU3BlY2lhbENhbGxpbmdMb2dpY3NEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8U3BlY2lhbENhbGxpbmdMb2dpY3NSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgU3BlY2lhbENhbGxpbmdMb2dpY3NGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTcGVjaWFsQ2FsbGluZ0xvZ2ljc0dyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgQWxyZWFkeUtub3dFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzAnLCBcIuWQplwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIuaYr1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgQXJlYUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi6Iqx6JOu5biCXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi56eA5p6X6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5ZCJ5a6J6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwi5aO96LGQ6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNScsIFwi6bOz5p6X6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNicsIFwi6JCs5qau6YSJXCIpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEJvZHlFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5SYWRpb0J1dHRvbkVkaXRvciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdD86IFNlcmVuaXR5LlJhZGlvQnV0dG9uRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFJhZGlvKCdGJywgXCLlo6/noqlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmFkaW8oJ1QnLCBcIue6lue0sFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRSYWRpbygnTScsIFwi5Lit562JXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJMb29rVXBFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFNlcmVuaXR5LlNlbGVjdDJFZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2VyZW5lMS5BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS5MaXN0KHt9LCAocikgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICBpZiAoci5Ub3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgJC5lYWNoKHIuRW50aXRpZXMsIChpLCBtKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24obS5Vc2VySWQudG9TdHJpbmcoKSwgbS5EaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAvL30sIHsgYXN5bmM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBTZXJlbmUxLkFkbWluaXN0cmF0aW9uLlVzZXJSb3cuZ2V0TG9va3VwKCkuaXRlbXMuZm9yRWFjaCgobSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24obS5Vc2VySWQudG9TdHJpbmcoKSwgKG0uRGlzcGxheU5hbWUgPz8gXCLmnKroqK3lrppcIikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi5ZyL6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi5Y+w6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5aSq6a2v6Zaj6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwi6Zi/576O5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNScsIFwi5biD6L6y5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNicsIFwi5o6S54Gj5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNycsIFwi5Y2w5bC86KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignOCcsIFwi6LaK5Y2X6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignOScsIFwi6Iux6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMTAnLCBcIuaXpeiqnlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgTGV2ZWxFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIui6q+W/g+manOekmeiok+e3tFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzInLCBcIuWkseaZuuiok+e3tFwiKTtcclxuICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvb2tVcEVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogU2VyZW5pdHkuU2VsZWN0MkVkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5lMS5EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuTGlzdCh7fSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLlRvdGFsQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHIuRW50aXRpZXMsIChpLCBtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKG0uQ2FzZU5vLCBtLlBhdGllbnRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHsgYXN5bmM6IGZhbHNlIH0pO1xyXG4gICAgICAgIC8vICAgIFNlcmVuZTEuRGVmYXVsdC5DYXNlU2VydmljZURhdGFSb3cuZ2V0TG9va3VwKCkuaXRlbXMuZm9yRWFjaCgobSwgaSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICB0aGlzLmFkZE9wdGlvbihtLkNhc2VObywgKG0uUm9jSWQgPz8gXCLmnKroqK3lrppcIikpO1xyXG4gICAgICAgIC8vICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUGhhc2VFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ0EnLCBcIuS4iuWNiFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ1AnLCBcIuS4i+WNiFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ1QnLCBcIuWFqOaXpVwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJ04nLCBcIuWknOmWkzE4OjAwLTIwOjAwXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBTZXhFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5SYWRpb0J1dHRvbkVkaXRvcntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuUmFkaW9CdXR0b25FZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmFkaW8oJ00nLCBcIiAgICDnlLcgIFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRSYWRpbygnRicsIFwiICAgIOWlsyAgXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBTdGF0dXNFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIuaVrOiAgVwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzInLCBcIumBjuiZn1wiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzMnLCBcIuaqouW+jOWGjeioulwiKTsgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFdvcmtZZWFyRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuU2VsZWN0MkVkaXRvcjxhbnksIGFueT57XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdD86IFNlcmVuaXR5LlNlbGVjdDJDb21tb25PcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKCcxJywgXCIy5bm0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwiMy015bm0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwiNi055bm0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwiPjEw5bm0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5QYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8TG9naW5SZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMb2dpbkZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IExvZ2luRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgPSAnc2VyZW5pdHknO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uVXNlcm5hbWUudmFsdWUgPSAnYWRtaW4nO1xyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ0xvZ2luQnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb1JldHVyblVybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvci5Db2RlID09IFwiUmVkaXJlY3RVc2VyVG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5FcnJvci5Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgIVEuaXNFbXB0eU9yTnVsbChyZXNwb25zZS5FcnJvci5NZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihyZXNwb25zZS5FcnJvci5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNQYXNzd29yZCcpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLkVycm9ySGFuZGxpbmcuc2hvd1NlcnZpY2VFcnJvcihyZXNwb25zZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlZGlyZWN0VG9SZXR1cm5VcmwoKSB7XHJcbiAgICAgICAgICAgIHZhciBxID0gUS5wYXJzZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciByZXR1cm5VcmwgPSBxWydyZXR1cm5VcmwnXSB8fCBxWydSZXR1cm5VcmwnXTtcclxuICAgICAgICAgICAgaWYgKHJldHVyblVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNoICE9IG51bGwgJiYgaGFzaCAhPSAnIycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVXJsICs9IGhhc2g7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJldHVyblVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7US5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvaW1hZ2VzL3NlcmVuaXR5LWxvZ28tdy0xMjgucG5nXCIpfVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgcC0xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zLXNpZGViYXItYmFuZC1iZylcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiAvPiBTZXJlbmUxXHJcbiAgICA8L2gyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzLVBhbmVsIHAtNFwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIG15LTRcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uTG9naW5Ub1lvdXJBY2NvdW50XCIpfTwvaDU+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1lbmQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3Jnb3RQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXktMyB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cInRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyl9XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICA8L2Rpdj4gICBcclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS53KCdDb25maXJtUGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzLVBhbmVsXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJwYWdlLXRpdGxlIG1iLTQgdGV4dC1jZW50ZXJcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X1N1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Ym1pdEJ1dHRvblwiKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Rm9yZ290UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBGb3Jnb3RQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3Jnb3RQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLiAgY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8UmVzZXRQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlc2V0UGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBSZXNldFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSZXNldFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlRva2VuID0gdGhpcy5ieUlkKCdUb2tlbicpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9SZXNldFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuUmVzZXRQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvTG9naW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTaWduVXBQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8U2lnblVwUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2lnblVwRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogU2lnblVwRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBTaWduVXBGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1FbWFpbC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtRW1haWwudmFsdWUgIT09IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uRW1haWxDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlOYW1lOiB0aGlzLmZvcm0uRGlzcGxheU5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB0aGlzLmZvcm0uRW1haWwudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5TaWduVXAuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=