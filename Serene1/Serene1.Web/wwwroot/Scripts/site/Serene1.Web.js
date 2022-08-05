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
                'CreateBothDetail',
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
                        'PatientName', w0,
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
                        'PatientName', w0,
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
                    var w5 = s.StringEditor;
                    Q.initFormType(ContactBookFormCustom, [
                        'Caseno', w0,
                        'Advisedate', w1,
                        'Advise', w2,
                        'Alreadyknow', w3,
                        'Checkbox', w4,
                        'PatientName', w5
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
                'NewCreate',
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
        var DefaultPermissionKeys;
        (function (DefaultPermissionKeys) {
            var ContactBook;
            (function (ContactBook) {
                ContactBook.Menu = "Default:ContactBook:Menu";
                ContactBook.View = "Default:ContactBook:View";
                ContactBook.Add = "Default:ContactBook:Add";
                ContactBook.Modify = "Default:ContactBook:Modify";
                ContactBook.Delete = "Default:ContactBook:Delete";
                ContactBook.BackendMenu = "Default:ContactBook:BackendMenu";
            })(ContactBook || (ContactBook = {}));
            var CaseServiceData;
            (function (CaseServiceData) {
                CaseServiceData.Menu = "Default:CaseServiceData:Menu";
                CaseServiceData.View = "Default:CaseServiceData:View";
                CaseServiceData.Add = "Default:CaseServiceData:Add";
                CaseServiceData.Modify = "Default:CaseServiceData:Modify";
                CaseServiceData.Delete = "Default:CaseServiceData:Delete";
                CaseServiceData.BackendMenu = "Default:CaseServiceData:BackendMenu";
            })(CaseServiceData || (CaseServiceData = {}));
            var Employee;
            (function (Employee) {
                Employee.Menu = "Default:Employee:Menu";
                Employee.View = "Default:Employee:View";
                Employee.Add = "Default:Employee:Add";
                Employee.Modify = "Default:Employee:Modify";
                Employee.Delete = "Default:Employee:Delete";
                Employee.BackendMenu = "Default:Employee:BackendMenu";
            })(Employee || (Employee = {}));
            var EmpQuestionnaire;
            (function (EmpQuestionnaire) {
                EmpQuestionnaire.Menu = "Default:EmpQuestionnaire:Menu";
                EmpQuestionnaire.View = "Default:EmpQuestionnaire:View";
                EmpQuestionnaire.Add = "Default:EmpQuestionnaire:Add";
                EmpQuestionnaire.Modify = "Default:EmpQuestionnaire:Modify";
                EmpQuestionnaire.Delete = "Default:EmpQuestionnaire:Delete";
                EmpQuestionnaire.BackendMenu = "Default:EmpQuestionnaire:BackendMenu";
            })(EmpQuestionnaire || (EmpQuestionnaire = {}));
            var Announcement;
            (function (Announcement) {
                Announcement.Menu = "Default:Announcement:Menu";
                Announcement.View = "Default:Announcement:View";
                Announcement.Add = "Default:Announcement:Add";
                Announcement.Modify = "Default:Announcement:Modify";
                Announcement.Delete = "Default:Announcement:Delete";
                Announcement.BackendMenu = "Default:Announcement:BackendMenu";
            })(Announcement || (Announcement = {}));
            var AnnouncementDetail;
            (function (AnnouncementDetail) {
                AnnouncementDetail.Menu = "Default:AnnouncementDetail:Menu";
                AnnouncementDetail.View = "Default:AnnouncementDetail:View";
                AnnouncementDetail.Add = "Default:AnnouncementDetail:Add";
                AnnouncementDetail.Modify = "Default:AnnouncementDetail:Modify";
                AnnouncementDetail.Delete = "Default:AnnouncementDetail:Delete";
                AnnouncementDetail.BackendMenu = "Default:AnnouncementDetail:BackendMenu";
            })(AnnouncementDetail || (AnnouncementDetail = {}));
            var RepairFormRecords;
            (function (RepairFormRecords) {
                RepairFormRecords.Menu = "Default:RepairFormRecords:Menu";
                RepairFormRecords.View = "Default:RepairFormRecords:View";
                RepairFormRecords.Add = "Default:RepairFormRecords:Add";
                RepairFormRecords.Modify = "Default:RepairFormRecords:Modify";
                RepairFormRecords.Delete = "Default:RepairFormRecords:Delete";
                RepairFormRecords.BackendMenu = "Default:RepairFormRecords:BackendMenu";
            })(RepairFormRecords || (RepairFormRecords = {}));
            var RepairFormDetailRecords;
            (function (RepairFormDetailRecords) {
                RepairFormDetailRecords.Menu = "Default:RepairFormDetailRecords:Menu";
                RepairFormDetailRecords.View = "Default:RepairFormDetailRecords:View";
                RepairFormDetailRecords.Add = "Default:RepairFormDetailRecords:Add";
                RepairFormDetailRecords.Modify = "Default:RepairFormDetailRecords:Modify";
                RepairFormDetailRecords.Delete = "Default:RepairFormDetailRecords:Delete";
                RepairFormDetailRecords.BackendMenu = "Default:RepairFormDetailRecords:BackendMenu";
            })(RepairFormDetailRecords || (RepairFormDetailRecords = {}));
            var Departments;
            (function (Departments) {
                Departments.Menu = "Default:Departments:Menu";
                Departments.View = "Default:Departments:View";
                Departments.Add = "Default:Departments:Add";
                Departments.Modify = "Default:Departments:Modify";
                Departments.Delete = "Default:Departments:Delete";
                Departments.BackendMenu = "Default:Departments:BackendMenu";
            })(Departments || (Departments = {}));
            var Clinics;
            (function (Clinics) {
                Clinics.Menu = "Default:Clinics:Menu";
                Clinics.View = "Default:Clinics:View";
                Clinics.Add = "Default:Clinics:Add";
                Clinics.Modify = "Default:Clinics:Modify";
                Clinics.Delete = "Default:Clinics:Delete";
                Clinics.BackendMenu = "Default:Clinics:BackendMenu";
            })(Clinics || (Clinics = {}));
            var SpecialCallingLogics;
            (function (SpecialCallingLogics) {
                SpecialCallingLogics.Menu = "Default:SpecialCallingLogics:Menu";
                SpecialCallingLogics.View = "Default:SpecialCallingLogics:View";
                SpecialCallingLogics.Add = "Default:SpecialCallingLogics:Add";
                SpecialCallingLogics.Modify = "Default:SpecialCallingLogics:Modify";
                SpecialCallingLogics.Delete = "Default:SpecialCallingLogics:Delete";
                SpecialCallingLogics.BackendMenu = "Default:SpecialCallingLogics:BackendMenu";
            })(SpecialCallingLogics || (SpecialCallingLogics = {}));
        })(DefaultPermissionKeys = Default.DefaultPermissionKeys || (Default.DefaultPermissionKeys = {}));
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
        Serene1['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Default: { Announcement: { AnnounceDesc: 1, AnnouncePriority: 1, AnnounceType: 1, Attachments: 1, Createdate: 1, Createuser: 1, DetailList: 1, Oid: 1, ReleaseDate: 1, ServiceCode: 1, TargetRoleIds: 1, TargetUserIds: 1, Updatedate: 1, Updateuser: 1 }, AnnouncementDetail: { AnnouncementsId: 1, Createdate: 1, Createuser: 1, Oid: 1, ReplyContent: 1, ReplyDate: 1, ReplyUser: 1, TargetUser: 1, Updatedate: 1, Updateuser: 1 }, CaseServiceData: { CaseNo: 1, CreateDate: 1, CreateUser: 1, CreateUserName: 1, Oid: 1, PatientId: 1, PatientName: 1, RocId: 1, UpdateDate: 1, UpdateUser: 1, UpdateUserName: 1 }, Clinics: { ClinicName: 1, ClinicNameEng: 1, ClinicNo: 1, DeptNo: 1 }, ContactBook: { Advise: 1, Advisedate: 1, Alreadyknow: 1, AlreadyknowExpre: 1, Caseno: 1, Checkbox: 1, CreateDate: 1, CreateUser: 1, CreateUserName: 1, Oid: 1, PatientName: 1, UpdateDate: 1, UpdateUser: 1, UpdateUserName: 1 }, Departments: { DeptName: 1, DeptNameEng: 1, DeptNo: 1, Hiddent: 1 }, EmpQuestionnaire: { Age: 1, EmpArea: 1, EmpBody: 1, EmpDriverLicense: 1, EmpEffectiveDate: 1, EmpEmt1License: 1, EmpLanguage: 1, EmpNo: 1, EmpServiceLevel: 1, EmpSkill: 1, EmpTimePhase: 1, EmpWorkYear: 1, Height: 1, Oid: 1, QDate: 1, Sex: 1, UpdateDate: 1, UpdateUser: 1, Weight: 1 }, Employee: { Address1: 1, Address2: 1, Birthday: 1, BloodType: 1, Church: 1, CitizenId: 1, CountryId: 1, DeptId: 1, DeptType: 1, Educate: 1, EmName: 1, EmRelation: 1, EmployeeEngName: 1, EmployeeId: 1, EmployeeName: 1, Homeland: 1, IdentificationCardNo: 1, LeaveDate: 1, License: 1, MarryFlag: 1, Oid: 1, OrgId: 1, PatientId: 1, PositionId: 1, PostId: 1, PostType: 1, PractitionerRegisterFlag: 1, RaceFlag: 1, Ranks: 1, Religion: 1, RetireFlag: 1, Sex: 1, Standard: 1, StartDate: 1, Telephone1: 1, Telephone2: 1, UnitId: 1, Username: 1, Years: 1 }, RepairFormDetailRecords: { Createdate: 1, Createuser: 1, MaterialAmount: 1, Oid: 1, PayAmount: 1, RepairFormRecordsId: 1, SubsidyAmount: 1, Updatedate: 1, Updateuser: 1, UseMaterial: 1, UseMaterialCount: 1 }, RepairFormRecords: { Area: 1, AssistiveSource: 1, CaseNo: 1, Createdate: 1, Createuser: 1, DetailList: 1, EvalutionLevel: 1, HandlingPlace: 1, ItemName: 1, MaterialNo: 1, Oid: 1, Place: 1, RepairDate: 1, RepairEmpId: 1, RepairRecord: 1, ServiceCount: 1, ServiceType: 1, SubsidySource: 1, Township: 1, Updatedate: 1, Updateuser: 1 }, SpecialCallingLogics: { CallCount: 1, Id: 1, OldAge: 1, PackageName: 1, RagulerCount: 1, Seq: 1, SpecialStatus: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
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
            AnnouncementDialogCustom.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                /* console.log(this.form.TargetUserIds.value);*/
                if (this.isEditMode()) {
                    Serenity.EditorUtils.setReadOnly(this.form.TargetRoleIds, true);
                    Serenity.EditorUtils.setReadOnly(this.form.TargetUserIds, true);
                    //this.form.TargetRoleIds.setReadOnly(true);
                    //this.form.TargetUserIds.setReadOnly(true);
                }
            };
            AnnouncementDialogCustom.prototype.validateBeforeSave = function () {
                if (!_super.prototype.validateBeforeSave.call(this))
                    return false;
                //console.log(this.form.TargetUserIds.value)
                //console.log(this.form.TargetUserIds.value==null)
                if (!this.form.TargetUserIds.value || !this.form.TargetRoleIds.value) {
                    Q.notifyWarning("請填選交班對象");
                    return false;
                }
                return true;
            };
            AnnouncementDialogCustom.prototype.getSaveOptions = function (res) {
                var options = _super.prototype.getSaveOptions.call(this, res);
                if (this.isNew())
                    options.url = "/Services/".concat(this.getService(), "/CreateBothDetail");
                return options;
            };
            AnnouncementDialogCustom = __decorate([
                Serenity.Decorators.panel(true),
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
            CaseServiceDataGridCustom.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "refresh-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "tool-button"; }), 1);
                return buttons;
            };
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
                columns.unshift({
                    field: "QQQRow",
                    name: "",
                    format: function (ctx) {
                        var item = ctx.item;
                        if (Q.Authorization.hasPermission(Default.CaseServiceDataRow.updatePermission) || Q.Authorization.hasPermission(Default.CaseServiceDataRow.insertPermission))
                            return "<button class=\"btn btn-warning qqq-row fa fa-list-ul\" title=\"\u5BB6\u5EAD\u806F\u7D61\u7C3F\">\u5BB6\u5EAD\u806F\u7D61\u7C3F</button>";
                        return "<button class=\"btn btn-warning fa fa-list-ul\" disabled title=\"\u5BB6\u5EAD\u806F\u7D61\u7C3F\">\u5BB6\u5EAD\u806F\u7D61\u7C3F</button>";
                    },
                    width: 140,
                    minWidth: 140,
                    maxWidth: 140
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
                else if ($(e.target).hasClass('qqq-row')) {
                    var dlg = new Default.DynamicGridPanel();
                    dlg.set_dialogTitle("");
                    dlg.grid = new Default.ContactBookGridCustom($("#MyGrid"), item.CaseNo);
                    dlg.dialogOpen();
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
            ContactBookDialogCustom.prototype.getSaveOptions = function (res) {
                var options = _super.prototype.getSaveOptions.call(this, res);
                if (this.isNew())
                    options.url = "/Services/".concat(this.getService(), "/NewCreate");
                return options;
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
            function ContactBookGridCustom(container, caseNo) {
                var _this = this;
                _this.caseNo = caseNo;
                _this = _super.call(this, container) || this;
                return _this;
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
                var _this = this;
                var filter = _super.prototype.getQuickFilters.call(this);
                var casenoFilter = Q.tryFirst(filter, function (x) { return x.field == "Caseno"; });
                if (casenoFilter) {
                    casenoFilter.handler = function (h) {
                        if (h.active) {
                            h.request.Criteria = Serenity.Criteria.and([['Caseno'], 'like', "%".concat(h.value, "%")], null);
                        }
                    };
                    if (this.caseNo) {
                        casenoFilter.init = function (w) {
                            w.value = _this.caseNo;
                        };
                    }
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
    var Default;
    (function (Default) {
        var DynamicGridPanel = /** @class */ (function (_super) {
            __extends(DynamicGridPanel, _super);
            function DynamicGridPanel() {
                return _super.call(this) || this;
            }
            DynamicGridPanel.prototype.getTemplateName = function () {
                return "Dialogs.DynamicGridPanel";
            };
            DynamicGridPanel.prototype.onDialogOpen = function () {
                //this.dialogTitle = (this.grid as TGrid).getTitle();
                if (this.title)
                    this.dialogTitle = this.title;
                else
                    this.dialogTitle = this.element.find(".title-text")[0].innerHTML;
                if (this.element.find(".title-text").length > 0)
                    this.element.find(".title-text")[0].remove();
            };
            DynamicGridPanel = __decorate([
                Serenity.Decorators.panel(true),
                Serenity.Decorators.registerClass()
            ], DynamicGridPanel);
            return DynamicGridPanel;
        }(Serenity.TemplatedDialog));
        Default.DynamicGridPanel = DynamicGridPanel;
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
                            _this.addOption(m.CaseNo, m.PatientName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyZW5lMS5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnRDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50Q29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnREZXRhaWxGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudERldGFpbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5jZW1lbnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQW5ub3VuY2VtZW50Rm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkFubm91bmNlbWVudFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Bbm5vdW5uY2VtZW50RGV0YWlsQ29sdW1uc0N1c3RvbTEudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DYXNlU2VydmljZURhdGFDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2FzZVNlcnZpY2VEYXRhU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkNsaW5pY3NDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2xpbmljc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5DbGluaWNzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ2xpbmljc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0NvbHVtbnNDdXN0b20udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0Zvcm1DdXN0b20udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va0Zvcm1DdXN0b20xLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuQ29udGFjdEJvb2tSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5Db250YWN0Qm9va1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZWZhdWx0UGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZXBhcnRtZW50c0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZXBhcnRtZW50c0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5EZXBhcnRtZW50c1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkRlcGFydG1lbnRzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkVtcFF1ZXN0aW9ubmFpcmVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBRdWVzdGlvbm5haXJlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5FbXBsb3llZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LkVtcGxveWVlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzQ29sdW1uc0N1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljc0NvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9EZWZhdWx0LlNwZWNpYWxDYWxsaW5nTG9naWNzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0dyaWRFZGl0b3JCYXNlLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudC9Bbm5vdW5jZW1lbnREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQW5ub3VuY2VtZW50L0Fubm91bmNlbWVudEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQW5ub3VuY2VtZW50Q3VzdG9tL0Fubm91bmNlbWVudERpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnRDdXN0b20vQW5ub3VuY2VtZW50R3JpZEN1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvQW5ub3VuY2VtZW50RGV0YWlsRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudERldGFpbC9Bbm5vdW5jZW1lbnREZXRhaWxHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudERldGFpbEN1c3RvbS9Bbm5vdW5jZW1lbnRHcmlkRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Fubm91bmNlbWVudERldGFpbEN1c3RvbS9Bbm5vdW5jZW1lbnRHcmlkRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9DYXNlU2VydmljZURhdGFEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhL0Nhc2VTZXJ2aWNlRGF0YUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2FzZVNlcnZpY2VEYXRhQ3VzdG9tL0Nhc2VTZXJ2aWNlRGF0YURpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9DYXNlU2VydmljZURhdGFDdXN0b20vQ2FzZVNlcnZpY2VEYXRhR3JpZEN1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9DbGluaWNzL0NsaW5pY3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ2xpbmljcy9DbGluaWNzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Db250YWN0Qm9vay9Db250YWN0Qm9va0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9Db250YWN0Qm9vay9Db250YWN0Qm9va0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ29udGFjdEJvb2tDdXN0b20vQ29udGFjdEJvb2tEaWFsb2dDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvQ29udGFjdEJvb2tDdXN0b20vQ29udGFjdEJvb2tEaWFsb2dDdXN0b20xLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0NvbnRhY3RCb29rQ3VzdG9tL0NvbnRhY3RCb29rR3JpZEN1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9EZXBhcnRtZW50cy9EZXBhcnRtZW50c0RpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9EZXBhcnRtZW50cy9EZXBhcnRtZW50c0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9FbXBRdWVzdGlvbm5haXJlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvRW1wUXVlc3Rpb25uYWlyZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wbG95ZWUvRW1wbG95ZWVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvRW1wbG95ZWUvRW1wbG95ZWVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0dyaWREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b20vUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL1JlcGFpckZvcm1SZWNvcmRzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL1JlcGFpckZvcm1SZWNvcmRzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbS50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkc0N1c3RvbS9SZXBhaXJGb3JtUmVjb3Jkc0dyaWRDdXN0b20udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvU3BlY2lhbENhbGxpbmdMb2dpY3NEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0RlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvU3BlY2lhbENhbGxpbmdMb2dpY3NHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9EaWFsb2dzL0R5bmFtaWNHcmlkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9BbHJlYWFkeUtub3dFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9BcmVhRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvQm9keUVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL0NyZWF0ZVVzZXJMb29rVXBFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9MYW5ndWFnZUVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvRWRpdG9yL0xldmVsRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvTG9va1VwRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9FZGl0b3IvUGhhc2VFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9TZXhFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9TdGF0dXNFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0VkaXRvci9Xb3JrWWVhckVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0xvZ2luUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvU2lnblVwL1NpZ25VcFBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsT0FBTyxDQUloQjtBQUpELFdBQVUsT0FBTztJQUFDLElBQUEsY0FBYyxDQUkvQjtJQUppQixXQUFBLGNBQWM7UUFDNUI7WUFBQTtZQUVBLENBQUM7WUFEVSwwQkFBVSxHQUFHLHlCQUF5QixDQUFDO1lBQ2xELHNCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksOEJBQWUsa0JBRTNCLENBQUE7SUFDTCxDQUFDLEVBSmlCLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBSS9CO0FBQUQsQ0FBQyxFQUpTLE9BQU8sS0FBUCxPQUFPLFFBSWhCO0FDSkQsSUFBVSxPQUFPLENBMEJoQjtBQTFCRCxXQUFVLE9BQU87SUFBQyxJQUFBLGNBQWMsQ0EwQi9CO0lBMUJpQixXQUFBLGNBQWM7UUFNNUI7WUFBa0MsZ0NBQXdCO1lBSXRELHNCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBYWhCO2dCQVhHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFHO29CQUNyQixZQUFZLENBQUMsSUFBSSxHQUFHLElBQUks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V0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxlQUFlLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLHVCQUF1QixFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxFQUFDLGlCQUFpQixFQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxvQkFBb0IsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLHlCQUF5QixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxl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USxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7ZUFDdkIsV0FBVyxDQThDdkI7WUFBRCxrQkFBQztTQUFBLEFBOUNELENBQWlDLFFBQVEsQ0FBQyxhQUFhLEdBOEN0RDtRQTlDWSxzQkFBVyxjQThDdkIsQ0FBQTtJQUNMLENBQUMsRUFsRGlCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBa0QzQjtBQUFELENBQUMsRUFsRFMsT0FBTyxLQUFQLE9BQU8sUUFrRGhCIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZD86IHN0cmluZztcclxuICAgICAgICBMYW5ndWFnZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTGFuZ3VhZ2VOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxMYW5ndWFnZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8TGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlTmFtZSA9IFwiTGFuZ3VhZ2VOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TGFuZ3VhZ2VSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TGFuZ3VhZ2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJtaXNzaW9uS2V5cyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3VyaXR5ID0gXCJBZG1pbmlzdHJhdGlvbjpTZWN1cml0eVwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUcmFuc2xhdGlvbiA9IFwiQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb25cIjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZUZvcm0ge1xyXG4gICAgICAgIFJvbGVOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSb2xlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUm9sZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJvbGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvbGVOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgUm9sZVBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBSb2xlUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZVBlcm1pc3Npb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQZXJtaXNzaW9uS2V5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uSWQgPSBcIlJvbGVQZXJtaXNzaW9uSWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUGVybWlzc2lvbktleSA9IFwiUGVybWlzc2lvbktleVwiLFxyXG4gICAgICAgICAgICBSb2xlUm9sZU5hbWUgPSBcIlJvbGVSb2xlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVBlcm1pc3Npb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUm93IHtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUm9sZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxSb2xlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxSb2xlUm93PignQWRtaW5pc3RyYXRpb24uUm9sZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFJvbGVOYW1lID0gXCJSb2xlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25JdGVtIHtcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlVGV4dD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbVRleHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0IHtcclxuICAgICAgICBTb3VyY2VMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVHJhbnNsYXRpb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VHJhbnNsYXRpb25JdGVtPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL0xpc3RcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9VcGRhdGVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VHJhbnNsYXRpb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUcmFuc2xhdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlckZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGlzcGxheU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbWFpbDogU2VyZW5pdHkuRW1haWxFZGl0b3I7XHJcbiAgICAgICAgVXNlckltYWdlOiBTZXJlbml0eS5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBTb3VyY2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVVzZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBVc2VyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVXNlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlckltYWdlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkQ29uZmlybScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3VyY2UnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBVc2VyUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIEdyYW50ZWQ/OiBib29sZWFuO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXI/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlclBlcm1pc3Npb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQZXJtaXNzaW9uS2V5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uSWQgPSBcIlVzZXJQZXJtaXNzaW9uSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUGVybWlzc2lvbktleSA9IFwiUGVybWlzc2lvbktleVwiLFxyXG4gICAgICAgICAgICBHcmFudGVkID0gXCJHcmFudGVkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBVc2VyID0gXCJVc2VyXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJQZXJtaXNzaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RSb2xlUGVybWlzc2lvbnMocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RQZXJtaXNzaW9uS2V5cyhyZXF1ZXN0OiBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIExpc3RSb2xlUGVybWlzc2lvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RSb2xlUGVybWlzc2lvbnNcIixcclxuICAgICAgICAgICAgTGlzdFBlcm1pc3Npb25LZXlzID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0UGVybWlzc2lvbktleXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdMaXN0Um9sZVBlcm1pc3Npb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0UGVybWlzc2lvbktleXMnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IFVzZXJQZXJtaXNzaW9uUm93W107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8bnVtYmVyPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIFVzZXJSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclJvbGVJZCA9IFwiVXNlclJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBVc2VyUm9sZUxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFVzZXJSb2xlTGlzdFJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZEhhc2g/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRTYWx0Pzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbWFnZT86IHN0cmluZztcclxuICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVXNlcm5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxVc2VyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxVc2VyUm93PignQWRtaW5pc3RyYXRpb24uVXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBTb3VyY2UgPSBcIlNvdXJjZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZEhhc2ggPSBcIlBhc3N3b3JkSGFzaFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZFNhbHQgPSBcIlBhc3N3b3JkU2FsdFwiLFxyXG4gICAgICAgICAgICBEaXNwbGF5TmFtZSA9IFwiRGlzcGxheU5hbWVcIixcclxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXHJcbiAgICAgICAgICAgIFVzZXJJbWFnZSA9IFwiVXNlckltYWdlXCIsXHJcbiAgICAgICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGUgPSBcIkxhc3REaXJlY3RvcnlVcGRhdGVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZENvbmZpcm0gPSBcIlBhc3N3b3JkQ29uZmlybVwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVuZGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlVuZGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5VbmRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBVbmRlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VbmRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnVW5kZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnQnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50Q29sdW1uc0N1c3RvbSB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnRDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREZXRhaWxDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkFubm91bmNlbWVudERldGFpbCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQW5ub3VuY2VtZW50RGV0YWlsRm9ybSB7XHJcbiAgICAgICAgQW5ub3VuY2VtZW50c0lkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFRhcmdldFVzZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZXBseUNvbnRlbnQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZXBseURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgUmVwbHlVc2VyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDcmVhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGV0YWlsRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Bbm5vdW5jZW1lbnREZXRhaWwnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUFubm91bmNlbWVudERldGFpbEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEFubm91bmNlbWVudERldGFpbEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEFubm91bmNlbWVudERldGFpbEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VtZW50c0lkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhcmdldFVzZXInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnUmVwbHlDb250ZW50JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGx5RGF0ZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXBseVVzZXInLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRldXNlcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVkYXRlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZXVzZXInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlZGF0ZScsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbSB7XHJcbiAgICAgICAgVGFyZ2V0VXNlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREZXRhaWxGb3JtQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTZXJ2aWNlQUQuQW5ub3VuY2VtZW50RGV0YWlsQ3VzdG9tJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBbm5vdW5jZW1lbnREZXRhaWxGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBbm5vdW5jZW1lbnREZXRhaWxGb3JtQ3VzdG9tLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShBbm5vdW5jZW1lbnREZXRhaWxGb3JtQ3VzdG9tLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhcmdldFVzZXInLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm91bmNlbWVudERldGFpbFJvdyB7XHJcbiAgICAgICAgT2lkPzogbnVtYmVyO1xyXG4gICAgICAgIEFubm91bmNlbWVudHNJZD86IG51bWJlcjtcclxuICAgICAgICBUYXJnZXRVc2VyPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGx5Q29udGVudD86IHN0cmluZztcclxuICAgICAgICBSZXBseURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwbHlVc2VyPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBbm5vdW5jZW1lbnREZXRhaWxSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUYXJnZXRVc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50RGV0YWlsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudERldGFpbDpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50RGV0YWlsOkFkZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50RGV0YWlsOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6QW5ub3VuY2VtZW50RGV0YWlsOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgQW5ub3VuY2VtZW50c0lkID0gXCJBbm5vdW5jZW1lbnRzSWRcIixcclxuICAgICAgICAgICAgVGFyZ2V0VXNlciA9IFwiVGFyZ2V0VXNlclwiLFxyXG4gICAgICAgICAgICBSZXBseUNvbnRlbnQgPSBcIlJlcGx5Q29udGVudFwiLFxyXG4gICAgICAgICAgICBSZXBseURhdGUgPSBcIlJlcGx5RGF0ZVwiLFxyXG4gICAgICAgICAgICBSZXBseVVzZXIgPSBcIlJlcGx5VXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGV1c2VyID0gXCJDcmVhdGV1c2VyXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZWRhdGUgPSBcIkNyZWF0ZWRhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRldXNlciA9IFwiVXBkYXRldXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVkYXRlID0gXCJVcGRhdGVkYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEFubm91bmNlbWVudERldGFpbFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEFubm91bmNlbWVudERldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEFubm91bmNlbWVudERldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxBbm5vdW5jZW1lbnREZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8QW5ub3VuY2VtZW50RGV0YWlsUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50RGV0YWlsL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnREZXRhaWwvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkFubm91bmNlbWVudERldGFpbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQW5ub3VuY2VtZW50Rm9ybSB7XHJcbiAgICAgICAgU2VydmljZUNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbm5vdW5jZVR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbm5vdW5jZURlc2M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbm5vdW5jZVByaW9yaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGFyZ2V0Um9sZUlkczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRhcmdldFVzZXJJZHM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZWxlYXNlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBBdHRhY2htZW50czogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBVcGRhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50JztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBbm5vdW5jZW1lbnRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBbm5vdW5jZW1lbnRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShBbm5vdW5jZW1lbnRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VDb2RlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlVHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZURlc2MnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VQcmlvcml0eScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXRSb2xlSWRzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RhcmdldFVzZXJJZHMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVsZWFzZURhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQXR0YWNobWVudHMnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRldXNlcicsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVkYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZXVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlZGF0ZScsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQW5ub3VuY2VtZW50Rm9ybUN1c3RvbSB7XHJcbiAgICAgICAgU2VydmljZUNvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbm5vdW5jZVR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbm5vdW5jZURlc2M6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBbm5vdW5jZVByaW9yaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGFyZ2V0Um9sZUlkczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRhcmdldFVzZXJJZHM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZWxlYXNlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBBdHRhY2htZW50czogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERldGFpbExpc3Q6IEFubm91bmNlbWVudEdyaWRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudEZvcm1DdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQW5ub3VuY2VtZW50Q3VzdG9tJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IEFubm91bmNlbWVudEdyaWRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQW5ub3VuY2VtZW50Rm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdTZXJ2aWNlQ29kZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbm5vdW5jZVR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQW5ub3VuY2VEZXNjJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fubm91bmNlUHJpb3JpdHknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGFyZ2V0Um9sZUlkcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUYXJnZXRVc2VySWRzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGVhc2VEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F0dGFjaG1lbnRzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RldGFpbExpc3QnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm91bmNlbWVudFJvdyB7XHJcbiAgICAgICAgT2lkPzogbnVtYmVyO1xyXG4gICAgICAgIFNlcnZpY2VDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIEFubm91bmNlVHlwZT86IHN0cmluZztcclxuICAgICAgICBBbm5vdW5jZURlc2M/OiBzdHJpbmc7XHJcbiAgICAgICAgQW5ub3VuY2VQcmlvcml0eT86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRSb2xlSWRzPzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFVzZXJJZHM/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVsZWFzZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQXR0YWNobWVudHM/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRldXNlcj86IG51bWJlcjtcclxuICAgICAgICBDcmVhdGVkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBEZXRhaWxMaXN0PzogQW5ub3VuY2VtZW50RGV0YWlsUm93W107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBbm5vdW5jZW1lbnRSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdTZXJ2aWNlQ29kZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkFubm91bmNlbWVudCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpBbm5vdW5jZW1lbnQ6RGVsZXRlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudDpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudDpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkFubm91bmNlbWVudDpNb2RpZnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE9pZCA9IFwiT2lkXCIsXHJcbiAgICAgICAgICAgIFNlcnZpY2VDb2RlID0gXCJTZXJ2aWNlQ29kZVwiLFxyXG4gICAgICAgICAgICBBbm5vdW5jZVR5cGUgPSBcIkFubm91bmNlVHlwZVwiLFxyXG4gICAgICAgICAgICBBbm5vdW5jZURlc2MgPSBcIkFubm91bmNlRGVzY1wiLFxyXG4gICAgICAgICAgICBBbm5vdW5jZVByaW9yaXR5ID0gXCJBbm5vdW5jZVByaW9yaXR5XCIsXHJcbiAgICAgICAgICAgIFRhcmdldFJvbGVJZHMgPSBcIlRhcmdldFJvbGVJZHNcIixcclxuICAgICAgICAgICAgVGFyZ2V0VXNlcklkcyA9IFwiVGFyZ2V0VXNlcklkc1wiLFxyXG4gICAgICAgICAgICBSZWxlYXNlRGF0ZSA9IFwiUmVsZWFzZURhdGVcIixcclxuICAgICAgICAgICAgQXR0YWNobWVudHMgPSBcIkF0dGFjaG1lbnRzXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXIgPSBcIkNyZWF0ZXVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRlZGF0ZSA9IFwiQ3JlYXRlZGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGV1c2VyID0gXCJVcGRhdGV1c2VyXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZWRhdGUgPSBcIlVwZGF0ZWRhdGVcIixcclxuICAgICAgICAgICAgRGV0YWlsTGlzdCA9IFwiRGV0YWlsTGlzdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBBbm5vdW5jZW1lbnRTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0Fubm91bmNlbWVudCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxBbm5vdW5jZW1lbnRSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZUJvdGhEZXRhaWwocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QW5ub3VuY2VtZW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QW5ub3VuY2VtZW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEFubm91bmNlbWVudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBbm5vdW5jZW1lbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9Bbm5vdW5jZW1lbnQvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZUJvdGhEZXRhaWwgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50L0NyZWF0ZUJvdGhEZXRhaWxcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0Fubm91bmNlbWVudC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50L1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvQW5ub3VuY2VtZW50L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdDcmVhdGVCb3RoRGV0YWlsJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Bbm5vdW5jZW1lbnRTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VubmNlbWVudERldGFpbENvbHVtbnNDdXN0b20xIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTZXJ2aWNlQUQuQW5ub3VuY2VtZW50RGV0YWlsQ3VzdG9tJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhQ29sdW1uc0N1c3RvbSB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGFDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXNlU2VydmljZURhdGFGb3JtIHtcclxuICAgICAgICBDYXNlTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXRpZW50SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXRpZW50TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJvY0lkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBDcmVhdGVVc2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlVXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGEnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNhc2VTZXJ2aWNlRGF0YUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENhc2VTZXJ2aWNlRGF0YUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhc2VTZXJ2aWNlRGF0YUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhdGllbnRJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXRpZW50TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb2NJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZVVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VyJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tIHtcclxuICAgICAgICBDYXNlTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXRpZW50SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXRpZW50TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJvY0lkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBDcmVhdGVVc2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRlVXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGFDdXN0b20nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhc2VTZXJ2aWNlRGF0YUZvcm1DdXN0b20sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhdGllbnRJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXRpZW50TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb2NJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVEYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZVVzZXInLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VyJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXNlU2VydmljZURhdGFSb3cge1xyXG4gICAgICAgIE9pZD86IG51bWJlcjtcclxuICAgICAgICBDYXNlTm8/OiBzdHJpbmc7XHJcbiAgICAgICAgUGF0aWVudElkPzogc3RyaW5nO1xyXG4gICAgICAgIFJvY0lkPzogc3RyaW5nO1xyXG4gICAgICAgIENyZWF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRlVXNlcj86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGF0aWVudE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXNlU2VydmljZURhdGFSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDYXNlTm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5DYXNlU2VydmljZURhdGEnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTG9va3VwLkNhc2VTZXJ2aWNlRGF0YSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Q2FzZVNlcnZpY2VEYXRhUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxDYXNlU2VydmljZURhdGFSb3c+KCdMb29rdXAuQ2FzZVNlcnZpY2VEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgQ2FzZU5vID0gXCJDYXNlTm9cIixcclxuICAgICAgICAgICAgUGF0aWVudElkID0gXCJQYXRpZW50SWRcIixcclxuICAgICAgICAgICAgUm9jSWQgPSBcIlJvY0lkXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZURhdGUgPSBcIkNyZWF0ZURhdGVcIixcclxuICAgICAgICAgICAgQ3JlYXRlVXNlciA9IFwiQ3JlYXRlVXNlclwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXIgPSBcIlVwZGF0ZVVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRlVXNlck5hbWUgPSBcIkNyZWF0ZVVzZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJOYW1lID0gXCJVcGRhdGVVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICBQYXRpZW50TmFtZSA9IFwiUGF0aWVudE5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2FzZVNlcnZpY2VEYXRhU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9DYXNlU2VydmljZURhdGEnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2FzZVNlcnZpY2VEYXRhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2FzZVNlcnZpY2VEYXRhUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENhc2VTZXJ2aWNlRGF0YVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDYXNlU2VydmljZURhdGFSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9DYXNlU2VydmljZURhdGEvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9DYXNlU2VydmljZURhdGEvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9DYXNlU2VydmljZURhdGEvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0Nhc2VTZXJ2aWNlRGF0YS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2FzZVNlcnZpY2VEYXRhU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBDbGluaWNzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5DbGluaWNzJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDbGluaWNzRm9ybSB7XHJcbiAgICAgICAgRGVwdE5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2xpbmljTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDbGluaWNOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ2xpbmljTmFtZUVuZzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDbGluaWNzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5DbGluaWNzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDbGluaWNzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2xpbmljc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENsaW5pY3NGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHRObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGluaWNObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDbGluaWNOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NsaW5pY05hbWVFbmcnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENsaW5pY3NSb3cge1xyXG4gICAgICAgIERlcHRObz86IHN0cmluZztcclxuICAgICAgICBDbGluaWNObz86IHN0cmluZztcclxuICAgICAgICBDbGluaWNOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIENsaW5pY05hbWVFbmc/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDbGluaWNzUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdEZXB0Tm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnRGVwdE5vJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuQ2xpbmljcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpDbGluaWNzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpDbGluaWNzOkFkZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6Q2xpbmljczpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkNsaW5pY3M6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBEZXB0Tm8gPSBcIkRlcHROb1wiLFxyXG4gICAgICAgICAgICBDbGluaWNObyA9IFwiQ2xpbmljTm9cIixcclxuICAgICAgICAgICAgQ2xpbmljTmFtZSA9IFwiQ2xpbmljTmFtZVwiLFxyXG4gICAgICAgICAgICBDbGluaWNOYW1lRW5nID0gXCJDbGluaWNOYW1lRW5nXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENsaW5pY3NTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0NsaW5pY3MnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2xpbmljc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENsaW5pY3NSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2xpbmljc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDbGluaWNzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvQ2xpbmljcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0NsaW5pY3MvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9DbGluaWNzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9DbGluaWNzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvQ2xpbmljcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2xpbmljc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdEZWZhdWx0LkNvbnRhY3RCb29rJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rQ29sdW1uc0N1c3RvbSB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5Db250YWN0Qm9va0N1c3RvbSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnRhY3RCb29rRm9ybSB7XHJcbiAgICAgICAgQ2FzZW5vOiBFZGl0b3IuTG9va1VwRWRpdG9yO1xyXG4gICAgICAgIEFscmVhZHlrbm93OiBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3I7XHJcbiAgICAgICAgQWR2aXNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWR2aXNlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkNvbnRhY3RCb29rJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDb250YWN0Qm9va0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENvbnRhY3RCb29rRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gRWRpdG9yLkxvb2tVcEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IEVkaXRvci5BbHJlYWR5S25vd0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENvbnRhY3RCb29rRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdDYXNlbm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWxyZWFkeWtub3cnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQWR2aXNlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkdmlzZWRhdGUnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnRhY3RCb29rRm9ybUN1c3RvbSB7XHJcbiAgICAgICAgQ2FzZW5vOiBFZGl0b3IuTG9va1VwRWRpdG9yO1xyXG4gICAgICAgIEFkdmlzZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgQWR2aXNlOiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICBBbHJlYWR5a25vdzogRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgICAgIENoZWNrYm94OiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgIFBhdGllbnROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRm9ybUN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5Db250YWN0Qm9va0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ29udGFjdEJvb2tGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDb250YWN0Qm9va0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IEVkaXRvci5Mb29rVXBFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gRWRpdG9yLkFscmVhZHlLbm93RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5Cb29sZWFuRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc1ID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ29udGFjdEJvb2tGb3JtQ3VzdG9tLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc2VubycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZHZpc2VkYXRlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FkdmlzZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdBbHJlYWR5a25vdycsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdDaGVja2JveCcsIHc0LFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXRpZW50TmFtZScsIHc1XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEJvb2tGb3JtQ3VzdG9tMSB7XHJcbiAgICAgICAgQWR2aXNlOiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcclxuICAgICAgICBTaG93VGV4dDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFscmVhZHlrbm93OiBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRm9ybUN1c3RvbTEgZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuQ29udGFjdEJvb2tDdXN0b20xJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDb250YWN0Qm9va0Zvcm1DdXN0b20xLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDb250YWN0Qm9va0Zvcm1DdXN0b20xLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlRleHRBcmVhRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ29udGFjdEJvb2tGb3JtQ3VzdG9tMSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdBZHZpc2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnU2hvd1RleHQnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQWxyZWFkeWtub3cnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnRhY3RCb29rUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2FzZW5vPzogc3RyaW5nO1xyXG4gICAgICAgIEFscmVhZHlrbm93PzogbnVtYmVyO1xyXG4gICAgICAgIEFscmVhZHlrbm93RXhwcmU/OiBzdHJpbmc7XHJcbiAgICAgICAgQWR2aXNlPzogc3RyaW5nO1xyXG4gICAgICAgIEFkdmlzZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3JlYXRlVXNlcj86IG51bWJlcjtcclxuICAgICAgICBDcmVhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBDcmVhdGVVc2VyTmFtZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VyTmFtZT86IHN0cmluZztcclxuICAgICAgICBDaGVja2JveD86IGJvb2xlYW47XHJcbiAgICAgICAgUGF0aWVudE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb250YWN0Qm9va1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0Nhc2Vubyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkNvbnRhY3RCb29rJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkNvbnRhY3RCb29rOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnRGVmYXVsdDpDb250YWN0Qm9vazpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkNvbnRhY3RCb29rOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6Q29udGFjdEJvb2s6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBPaWQgPSBcIk9pZFwiLFxyXG4gICAgICAgICAgICBDYXNlbm8gPSBcIkNhc2Vub1wiLFxyXG4gICAgICAgICAgICBBbHJlYWR5a25vdyA9IFwiQWxyZWFkeWtub3dcIixcclxuICAgICAgICAgICAgQWxyZWFkeWtub3dFeHByZSA9IFwiQWxyZWFkeWtub3dFeHByZVwiLFxyXG4gICAgICAgICAgICBBZHZpc2UgPSBcIkFkdmlzZVwiLFxyXG4gICAgICAgICAgICBBZHZpc2VkYXRlID0gXCJBZHZpc2VkYXRlXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZVVzZXIgPSBcIkNyZWF0ZVVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRlRGF0ZSA9IFwiQ3JlYXRlRGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VyID0gXCJVcGRhdGVVc2VyXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcclxuICAgICAgICAgICAgQ3JlYXRlVXNlck5hbWUgPSBcIkNyZWF0ZVVzZXJOYW1lXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJOYW1lID0gXCJVcGRhdGVVc2VyTmFtZVwiLFxyXG4gICAgICAgICAgICBDaGVja2JveCA9IFwiQ2hlY2tib3hcIixcclxuICAgICAgICAgICAgUGF0aWVudE5hbWUgPSBcIlBhdGllbnROYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENvbnRhY3RCb29rU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9Db250YWN0Qm9vayc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDb250YWN0Qm9va1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENvbnRhY3RCb29rUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIE5ld0NyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDb250YWN0Qm9va1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q29udGFjdEJvb2tSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q29udGFjdEJvb2tSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0NvbnRhY3RCb29rL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvQ29udGFjdEJvb2svRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIE5ld0NyZWF0ZSA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9OZXdDcmVhdGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvQ29udGFjdEJvb2svUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9Db250YWN0Qm9vay9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ05ld0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Db250YWN0Qm9va1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRGVmYXVsdFBlcm1pc3Npb25LZXlzIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENvbnRhY3RCb29rIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1lbnUgPSBcIkRlZmF1bHQ6Q29udGFjdEJvb2s6TWVudVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiRGVmYXVsdDpDb250YWN0Qm9vazpWaWV3XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGQgPSBcIkRlZmF1bHQ6Q29udGFjdEJvb2s6QWRkXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIkRlZmF1bHQ6Q29udGFjdEJvb2s6TW9kaWZ5XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIkRlZmF1bHQ6Q29udGFjdEJvb2s6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrZW5kTWVudSA9IFwiRGVmYXVsdDpDb250YWN0Qm9vazpCYWNrZW5kTWVudVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENhc2VTZXJ2aWNlRGF0YSB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNZW51ID0gXCJEZWZhdWx0OkNhc2VTZXJ2aWNlRGF0YTpNZW51XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJEZWZhdWx0OkNhc2VTZXJ2aWNlRGF0YTpWaWV3XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGQgPSBcIkRlZmF1bHQ6Q2FzZVNlcnZpY2VEYXRhOkFkZFwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJEZWZhdWx0OkNhc2VTZXJ2aWNlRGF0YTpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiRGVmYXVsdDpDYXNlU2VydmljZURhdGE6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrZW5kTWVudSA9IFwiRGVmYXVsdDpDYXNlU2VydmljZURhdGE6QmFja2VuZE1lbnVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBFbXBsb3llZSB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNZW51ID0gXCJEZWZhdWx0OkVtcGxveWVlOk1lbnVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIkRlZmF1bHQ6RW1wbG95ZWU6Vmlld1wiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkID0gXCJEZWZhdWx0OkVtcGxveWVlOkFkZFwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJEZWZhdWx0OkVtcGxveWVlOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlID0gXCJEZWZhdWx0OkVtcGxveWVlOkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja2VuZE1lbnUgPSBcIkRlZmF1bHQ6RW1wbG95ZWU6QmFja2VuZE1lbnVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBFbXBRdWVzdGlvbm5haXJlIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1lbnUgPSBcIkRlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpNZW51XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6Vmlld1wiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkID0gXCJEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6QWRkXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIkRlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja2VuZE1lbnUgPSBcIkRlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpCYWNrZW5kTWVudVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFubm91bmNlbWVudCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNZW51ID0gXCJEZWZhdWx0OkFubm91bmNlbWVudDpNZW51XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJEZWZhdWx0OkFubm91bmNlbWVudDpWaWV3XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGQgPSBcIkRlZmF1bHQ6QW5ub3VuY2VtZW50OkFkZFwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJEZWZhdWx0OkFubm91bmNlbWVudDpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiRGVmYXVsdDpBbm5vdW5jZW1lbnQ6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrZW5kTWVudSA9IFwiRGVmYXVsdDpBbm5vdW5jZW1lbnQ6QmFja2VuZE1lbnVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBbm5vdW5jZW1lbnREZXRhaWwge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTWVudSA9IFwiRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6TWVudVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6Vmlld1wiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkID0gXCJEZWZhdWx0OkFubm91bmNlbWVudERldGFpbDpBZGRcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiRGVmYXVsdDpBbm5vdW5jZW1lbnREZXRhaWw6TW9kaWZ5XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIkRlZmF1bHQ6QW5ub3VuY2VtZW50RGV0YWlsOkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja2VuZE1lbnUgPSBcIkRlZmF1bHQ6QW5ub3VuY2VtZW50RGV0YWlsOkJhY2tlbmRNZW51XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUmVwYWlyRm9ybVJlY29yZHMge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTWVudSA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpNZW51XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOlZpZXdcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZCA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpBZGRcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tlbmRNZW51ID0gXCJEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOkJhY2tlbmRNZW51XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgUmVwYWlyRm9ybURldGFpbFJlY29yZHMge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTWVudSA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpNZW51XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJEZWZhdWx0OlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOlZpZXdcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZCA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpBZGRcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tlbmRNZW51ID0gXCJEZWZhdWx0OlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOkJhY2tlbmRNZW51XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgRGVwYXJ0bWVudHMge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTWVudSA9IFwiRGVmYXVsdDpEZXBhcnRtZW50czpNZW51XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJEZWZhdWx0OkRlcGFydG1lbnRzOlZpZXdcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZCA9IFwiRGVmYXVsdDpEZXBhcnRtZW50czpBZGRcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiRGVmYXVsdDpEZXBhcnRtZW50czpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiRGVmYXVsdDpEZXBhcnRtZW50czpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tlbmRNZW51ID0gXCJEZWZhdWx0OkRlcGFydG1lbnRzOkJhY2tlbmRNZW51XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQ2xpbmljcyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNZW51ID0gXCJEZWZhdWx0OkNsaW5pY3M6TWVudVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiRGVmYXVsdDpDbGluaWNzOlZpZXdcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkZCA9IFwiRGVmYXVsdDpDbGluaWNzOkFkZFwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJEZWZhdWx0OkNsaW5pY3M6TW9kaWZ5XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIkRlZmF1bHQ6Q2xpbmljczpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tlbmRNZW51ID0gXCJEZWZhdWx0OkNsaW5pY3M6QmFja2VuZE1lbnVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBTcGVjaWFsQ2FsbGluZ0xvZ2ljcyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNZW51ID0gXCJEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOk1lbnVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIkRlZmF1bHQ6U3BlY2lhbENhbGxpbmdMb2dpY3M6Vmlld1wiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkID0gXCJEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOkFkZFwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlID0gXCJEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja2VuZE1lbnUgPSBcIkRlZmF1bHQ6U3BlY2lhbENhbGxpbmdMb2dpY3M6QmFja2VuZE1lbnVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIERlcGFydG1lbnRzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5EZXBhcnRtZW50cyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGVwYXJ0bWVudHNGb3JtIHtcclxuICAgICAgICBEZXB0Tm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXB0TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlcHROYW1lRW5nOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSGlkZGVudDogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRGVwYXJ0bWVudHNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkRlcGFydG1lbnRzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFEZXBhcnRtZW50c0Zvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnRzRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkJvb2xlYW5FZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRGVwYXJ0bWVudHNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHRObycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXB0TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXB0TmFtZUVuZycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdIaWRkZW50JywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBEZXBhcnRtZW50c1JvdyB7XHJcbiAgICAgICAgRGVwdE5vPzogc3RyaW5nO1xyXG4gICAgICAgIERlcHROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIERlcHROYW1lRW5nPzogc3RyaW5nO1xyXG4gICAgICAgIEhpZGRlbnQ/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRGVwYXJ0bWVudHNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0RlcHRObyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdEZXB0Tm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5EZXBhcnRtZW50cyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpEZXBhcnRtZW50czpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RGVwYXJ0bWVudHM6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpEZXBhcnRtZW50czpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkRlcGFydG1lbnRzOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgRGVwdE5vID0gXCJEZXB0Tm9cIixcclxuICAgICAgICAgICAgRGVwdE5hbWUgPSBcIkRlcHROYW1lXCIsXHJcbiAgICAgICAgICAgIERlcHROYW1lRW5nID0gXCJEZXB0TmFtZUVuZ1wiLFxyXG4gICAgICAgICAgICBIaWRkZW50ID0gXCJIaWRkZW50XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIERlcGFydG1lbnRzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9EZXBhcnRtZW50cyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxEZXBhcnRtZW50c1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PERlcGFydG1lbnRzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPERlcGFydG1lbnRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPERlcGFydG1lbnRzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvRGVwYXJ0bWVudHMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9EZXBhcnRtZW50cy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0RlcGFydG1lbnRzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9EZXBhcnRtZW50cy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L0RlcGFydG1lbnRzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5EZXBhcnRtZW50c1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgRW1wUXVlc3Rpb25uYWlyZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wUXVlc3Rpb25uYWlyZUZvcm0ge1xyXG4gICAgICAgIEFnZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBIZWlnaHQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgV2VpZ2h0OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFNleDogRWRpdG9yLlNleEVkaXRvcjtcclxuICAgICAgICBFbXBMYW5ndWFnZTogRWRpdG9yLkxhbmd1YWdlRWRpdG9yO1xyXG4gICAgICAgIEVtcEJvZHk6IEVkaXRvci5Cb2R5RWRpdG9yO1xyXG4gICAgICAgIEVtcFdvcmtZZWFyOiBFZGl0b3IuV29ya1llYXJFZGl0b3I7XHJcbiAgICAgICAgRW1wVGltZVBoYXNlOiBFZGl0b3IuUGhhc2VFZGl0b3I7XHJcbiAgICAgICAgRW1wQXJlYTogRWRpdG9yLkFyZWFFZGl0b3I7XHJcbiAgICAgICAgRW1wU2VydmljZUxldmVsOiBFZGl0b3IuTGV2ZWxFZGl0b3I7XHJcbiAgICAgICAgRW1wTm86IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBRRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wUXVlc3Rpb25uYWlyZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuRW1wUXVlc3Rpb25uYWlyZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRW1wUXVlc3Rpb25uYWlyZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEVtcFF1ZXN0aW9ubmFpcmVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBFZGl0b3IuU2V4RWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gRWRpdG9yLkxhbmd1YWdlRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gRWRpdG9yLkJvZHlFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBFZGl0b3IuV29ya1llYXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzUgPSBFZGl0b3IuUGhhc2VFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzYgPSBFZGl0b3IuQXJlYUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3NyA9IEVkaXRvci5MZXZlbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3OCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc5ID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEVtcFF1ZXN0aW9ubmFpcmVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0FnZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdIZWlnaHQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnV2VpZ2h0JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NleCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBMYW5ndWFnZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBCb2R5JywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcFdvcmtZZWFyJywgdzQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcFRpbWVQaGFzZScsIHc1LFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBBcmVhJywgdzYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcFNlcnZpY2VMZXZlbCcsIHc3LFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBObycsIHc4LFxyXG4gICAgICAgICAgICAgICAgICAgICdRRGF0ZScsIHc5XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wUXVlc3Rpb25uYWlyZVJvdyB7XHJcbiAgICAgICAgT2lkPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcE5vPzogc3RyaW5nO1xyXG4gICAgICAgIFFEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEFnZT86IG51bWJlcjtcclxuICAgICAgICBIZWlnaHQ/OiBudW1iZXI7XHJcbiAgICAgICAgV2VpZ2h0PzogbnVtYmVyO1xyXG4gICAgICAgIFNleD86IHN0cmluZztcclxuICAgICAgICBFbXBMYW5ndWFnZT86IHN0cmluZztcclxuICAgICAgICBFbXBCb2R5Pzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFdvcmtZZWFyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFRpbWVQaGFzZT86IHN0cmluZztcclxuICAgICAgICBFbXBBcmVhPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcFNlcnZpY2VMZXZlbD86IHN0cmluZztcclxuICAgICAgICBFbXBTa2lsbD86IHN0cmluZztcclxuICAgICAgICBFbXBEcml2ZXJMaWNlbnNlPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcEVtdDFMaWNlbnNlPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcEVmZmVjdGl2ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VyPzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wUXVlc3Rpb25uYWlyZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdEZWZhdWx0LkVtcFF1ZXN0aW9ubmFpcmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wUXVlc3Rpb25uYWlyZTpBZGQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcFF1ZXN0aW9ubmFpcmU6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBRdWVzdGlvbm5haXJlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgRW1wTm8gPSBcIkVtcE5vXCIsXHJcbiAgICAgICAgICAgIFFEYXRlID0gXCJRRGF0ZVwiLFxyXG4gICAgICAgICAgICBBZ2UgPSBcIkFnZVwiLFxyXG4gICAgICAgICAgICBIZWlnaHQgPSBcIkhlaWdodFwiLFxyXG4gICAgICAgICAgICBXZWlnaHQgPSBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBTZXggPSBcIlNleFwiLFxyXG4gICAgICAgICAgICBFbXBMYW5ndWFnZSA9IFwiRW1wTGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgRW1wQm9keSA9IFwiRW1wQm9keVwiLFxyXG4gICAgICAgICAgICBFbXBXb3JrWWVhciA9IFwiRW1wV29ya1llYXJcIixcclxuICAgICAgICAgICAgRW1wVGltZVBoYXNlID0gXCJFbXBUaW1lUGhhc2VcIixcclxuICAgICAgICAgICAgRW1wQXJlYSA9IFwiRW1wQXJlYVwiLFxyXG4gICAgICAgICAgICBFbXBTZXJ2aWNlTGV2ZWwgPSBcIkVtcFNlcnZpY2VMZXZlbFwiLFxyXG4gICAgICAgICAgICBFbXBTa2lsbCA9IFwiRW1wU2tpbGxcIixcclxuICAgICAgICAgICAgRW1wRHJpdmVyTGljZW5zZSA9IFwiRW1wRHJpdmVyTGljZW5zZVwiLFxyXG4gICAgICAgICAgICBFbXBFbXQxTGljZW5zZSA9IFwiRW1wRW10MUxpY2Vuc2VcIixcclxuICAgICAgICAgICAgRW1wRWZmZWN0aXZlRGF0ZSA9IFwiRW1wRWZmZWN0aXZlRGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXIgPSBcIlVwZGF0ZVVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wUXVlc3Rpb25uYWlyZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxFbXBRdWVzdGlvbm5haXJlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RW1wUXVlc3Rpb25uYWlyZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxFbXBRdWVzdGlvbm5haXJlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEVtcFF1ZXN0aW9ubmFpcmVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9FbXBRdWVzdGlvbm5haXJlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvRW1wUXVlc3Rpb25uYWlyZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0VtcFF1ZXN0aW9ubmFpcmUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9FbXBRdWVzdGlvbm5haXJlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5FbXBRdWVzdGlvbm5haXJlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuRW1wbG95ZWUnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEVtcGxveWVlRm9ybSB7XHJcbiAgICAgICAgRW1wbG95ZWVJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtcGxveWVlRW5nTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIElkZW50aWZpY2F0aW9uQ2FyZE5vOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVW5pdElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGVwdFR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEZXB0SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBPcmdJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc2l0aW9uSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQb3N0VHlwZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBvc3RJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFN0YXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBTZXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBCaXJ0aGRheTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBDaXRpemVuSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBCbG9vZFR5cGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDb3VudHJ5SWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSYWNlRmxhZzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEhvbWVsYW5kOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWFycnlGbGFnOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRWR1Y2F0ZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExpY2Vuc2U6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWc6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSYW5rczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFN0YW5kYXJkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgWWVhcnM6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZWxpZ2lvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENodXJjaDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFkZHJlc3MxOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWRkcmVzczI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBFbVJlbGF0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGVsZXBob25lMTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRlbGVwaG9uZTI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMZWF2ZURhdGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBSZXRpcmVGbGFnOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGF0aWVudElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdEZWZhdWx0LkVtcGxveWVlRm9ybSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRW1wbG95ZWVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEVtcGxveWVlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbXBsb3llZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtcGxveWVlTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbXBsb3llZUVuZ05hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnSWRlbnRpZmljYXRpb25DYXJkTm8nLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVW5pdElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHRUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RlcHRJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdPcmdJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQb3NpdGlvbklkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdGFydERhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU2V4JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpcnRoZGF5JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NpdGl6ZW5JZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdCbG9vZFR5cGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ291bnRyeUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JhY2VGbGFnJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWVsYW5kJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01hcnJ5RmxhZycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFZHVjYXRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xpY2Vuc2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JhbmtzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1N0YW5kYXJkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1llYXJzJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlbGlnaW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NodXJjaCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRyZXNzMScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZGRyZXNzMicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1SZWxhdGlvbicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUZWxlcGhvbmUxJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlbGVwaG9uZTInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGVhdmVEYXRlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JldGlyZUZsYWcnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGF0aWVudElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBFbXBsb3llZVJvdyB7XHJcbiAgICAgICAgT2lkPzogbnVtYmVyO1xyXG4gICAgICAgIEVtcGxveWVlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1wbG95ZWVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtcGxveWVlRW5nTmFtZT86IHN0cmluZztcclxuICAgICAgICBJZGVudGlmaWNhdGlvbkNhcmRObz86IHN0cmluZztcclxuICAgICAgICBVbml0SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVwdFR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVwdElkPzogc3RyaW5nO1xyXG4gICAgICAgIE9yZ0lkPzogc3RyaW5nO1xyXG4gICAgICAgIFBvc2l0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdFR5cGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdElkPzogc3RyaW5nO1xyXG4gICAgICAgIFN0YXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBTZXg/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhkYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2l0aXplbklkPzogc3RyaW5nO1xyXG4gICAgICAgIEJsb29kVHlwZT86IHN0cmluZztcclxuICAgICAgICBDb3VudHJ5SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUmFjZUZsYWc/OiBzdHJpbmc7XHJcbiAgICAgICAgSG9tZWxhbmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTWFycnlGbGFnPzogc3RyaW5nO1xyXG4gICAgICAgIEVkdWNhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgTGljZW5zZT86IHN0cmluZztcclxuICAgICAgICBQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWc/OiBzdHJpbmc7XHJcbiAgICAgICAgUmFua3M/OiBzdHJpbmc7XHJcbiAgICAgICAgU3RhbmRhcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgWWVhcnM/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVsaWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2h1cmNoPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3MxPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3MyPzogc3RyaW5nO1xyXG4gICAgICAgIEVtTmFtZT86IHN0cmluZztcclxuICAgICAgICBFbVJlbGF0aW9uPzogc3RyaW5nO1xyXG4gICAgICAgIFRlbGVwaG9uZTE/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVsZXBob25lMj86IHN0cmluZztcclxuICAgICAgICBMZWF2ZURhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUmV0aXJlRmxhZz86IHN0cmluZztcclxuICAgICAgICBQYXRpZW50SWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBFbXBsb3llZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0VtcGxveWVlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5FbXBsb3llZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBsb3llZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6RW1wbG95ZWU6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpFbXBsb3llZTpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OkVtcGxveWVlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgRW1wbG95ZWVJZCA9IFwiRW1wbG95ZWVJZFwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZU5hbWUgPSBcIkVtcGxveWVlTmFtZVwiLFxyXG4gICAgICAgICAgICBFbXBsb3llZUVuZ05hbWUgPSBcIkVtcGxveWVlRW5nTmFtZVwiLFxyXG4gICAgICAgICAgICBJZGVudGlmaWNhdGlvbkNhcmRObyA9IFwiSWRlbnRpZmljYXRpb25DYXJkTm9cIixcclxuICAgICAgICAgICAgVW5pdElkID0gXCJVbml0SWRcIixcclxuICAgICAgICAgICAgRGVwdFR5cGUgPSBcIkRlcHRUeXBlXCIsXHJcbiAgICAgICAgICAgIERlcHRJZCA9IFwiRGVwdElkXCIsXHJcbiAgICAgICAgICAgIE9yZ0lkID0gXCJPcmdJZFwiLFxyXG4gICAgICAgICAgICBQb3NpdGlvbklkID0gXCJQb3NpdGlvbklkXCIsXHJcbiAgICAgICAgICAgIFBvc3RUeXBlID0gXCJQb3N0VHlwZVwiLFxyXG4gICAgICAgICAgICBQb3N0SWQgPSBcIlBvc3RJZFwiLFxyXG4gICAgICAgICAgICBTdGFydERhdGUgPSBcIlN0YXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBTZXggPSBcIlNleFwiLFxyXG4gICAgICAgICAgICBCaXJ0aGRheSA9IFwiQmlydGhkYXlcIixcclxuICAgICAgICAgICAgQ2l0aXplbklkID0gXCJDaXRpemVuSWRcIixcclxuICAgICAgICAgICAgQmxvb2RUeXBlID0gXCJCbG9vZFR5cGVcIixcclxuICAgICAgICAgICAgQ291bnRyeUlkID0gXCJDb3VudHJ5SWRcIixcclxuICAgICAgICAgICAgUmFjZUZsYWcgPSBcIlJhY2VGbGFnXCIsXHJcbiAgICAgICAgICAgIEhvbWVsYW5kID0gXCJIb21lbGFuZFwiLFxyXG4gICAgICAgICAgICBNYXJyeUZsYWcgPSBcIk1hcnJ5RmxhZ1wiLFxyXG4gICAgICAgICAgICBFZHVjYXRlID0gXCJFZHVjYXRlXCIsXHJcbiAgICAgICAgICAgIExpY2Vuc2UgPSBcIkxpY2Vuc2VcIixcclxuICAgICAgICAgICAgUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnID0gXCJQcmFjdGl0aW9uZXJSZWdpc3RlckZsYWdcIixcclxuICAgICAgICAgICAgUmFua3MgPSBcIlJhbmtzXCIsXHJcbiAgICAgICAgICAgIFN0YW5kYXJkID0gXCJTdGFuZGFyZFwiLFxyXG4gICAgICAgICAgICBZZWFycyA9IFwiWWVhcnNcIixcclxuICAgICAgICAgICAgUmVsaWdpb24gPSBcIlJlbGlnaW9uXCIsXHJcbiAgICAgICAgICAgIENodXJjaCA9IFwiQ2h1cmNoXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MxID0gXCJBZGRyZXNzMVwiLFxyXG4gICAgICAgICAgICBBZGRyZXNzMiA9IFwiQWRkcmVzczJcIixcclxuICAgICAgICAgICAgRW1OYW1lID0gXCJFbU5hbWVcIixcclxuICAgICAgICAgICAgRW1SZWxhdGlvbiA9IFwiRW1SZWxhdGlvblwiLFxyXG4gICAgICAgICAgICBUZWxlcGhvbmUxID0gXCJUZWxlcGhvbmUxXCIsXHJcbiAgICAgICAgICAgIFRlbGVwaG9uZTIgPSBcIlRlbGVwaG9uZTJcIixcclxuICAgICAgICAgICAgTGVhdmVEYXRlID0gXCJMZWF2ZURhdGVcIixcclxuICAgICAgICAgICAgUmV0aXJlRmxhZyA9IFwiUmV0aXJlRmxhZ1wiLFxyXG4gICAgICAgICAgICBQYXRpZW50SWQgPSBcIlBhdGllbnRJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdEZWZhdWx0L0VtcGxveWVlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcGxveWVlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8RW1wbG95ZWVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8RW1wbG95ZWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RW1wbG95ZWVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiRGVmYXVsdC9FbXBsb3llZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJEZWZhdWx0L0VtcGxveWVlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkRlZmF1bHQvRW1wbG95ZWUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJEZWZhdWx0L0VtcGxveWVlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkRlZmF1bHQvRW1wbG95ZWUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkVtcGxveWVlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHMnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybURldGFpbFJlY29yZHNDb2x1bW5zQ3VzdG9tIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTZXJ2aWNlQUQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0ge1xyXG4gICAgICAgIFJlcGFpckZvcm1SZWNvcmRzSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgVXNlTWF0ZXJpYWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBVc2VNYXRlcmlhbENvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIE1hdGVyaWFsQW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFN1YnNpZHlBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgUGF5QW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZXVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcclxuICAgICAgICBVcGRhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EYXRlRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSZXBhaXJGb3JtUmVjb3Jkc0lkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZU1hdGVyaWFsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZU1hdGVyaWFsQ291bnQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTWF0ZXJpYWxBbW91bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnU3Vic2lkeUFtb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXlBbW91bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRldXNlcicsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGVkYXRlJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZXVzZXInLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlZGF0ZScsIHczXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtQ3VzdG9tIHtcclxuICAgICAgICBVc2VNYXRlcmlhbDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIE1hdGVyaWFsQW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xyXG4gICAgICAgIFN1YnNpZHlBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRldXNlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm1DdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1NlcnZpY2VBRC5SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0N1c3RvbSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVwYWlyRm9ybURldGFpbFJlY29yZHNGb3JtQ3VzdG9tLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm1DdXN0b20uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VNYXRlcmlhbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbEFtb3VudCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJzaWR5QW1vdW50JywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZXVzZXInLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VNYXRlcmlhbD86IHN0cmluZztcclxuICAgICAgICBVc2VNYXRlcmlhbENvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIE1hdGVyaWFsQW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIFN1YnNpZHlBbW91bnQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGF5QW1vdW50PzogbnVtYmVyO1xyXG4gICAgICAgIENyZWF0ZXVzZXI/OiBudW1iZXI7XHJcbiAgICAgICAgQ3JlYXRlZGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnT2lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZU1hdGVyaWFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybURldGFpbFJlY29yZHMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybURldGFpbFJlY29yZHM6RGVsZXRlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOkFkZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybURldGFpbFJlY29yZHM6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtRGV0YWlsUmVjb3JkczpNb2RpZnknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIE9pZCA9IFwiT2lkXCIsXHJcbiAgICAgICAgICAgIFJlcGFpckZvcm1SZWNvcmRzSWQgPSBcIlJlcGFpckZvcm1SZWNvcmRzSWRcIixcclxuICAgICAgICAgICAgVXNlTWF0ZXJpYWwgPSBcIlVzZU1hdGVyaWFsXCIsXHJcbiAgICAgICAgICAgIFVzZU1hdGVyaWFsQ291bnQgPSBcIlVzZU1hdGVyaWFsQ291bnRcIixcclxuICAgICAgICAgICAgTWF0ZXJpYWxBbW91bnQgPSBcIk1hdGVyaWFsQW1vdW50XCIsXHJcbiAgICAgICAgICAgIFN1YnNpZHlBbW91bnQgPSBcIlN1YnNpZHlBbW91bnRcIixcclxuICAgICAgICAgICAgUGF5QW1vdW50ID0gXCJQYXlBbW91bnRcIixcclxuICAgICAgICAgICAgQ3JlYXRldXNlciA9IFwiQ3JlYXRldXNlclwiLFxyXG4gICAgICAgICAgICBDcmVhdGVkYXRlID0gXCJDcmVhdGVkYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZXVzZXIgPSBcIlVwZGF0ZXVzZXJcIixcclxuICAgICAgICAgICAgVXBkYXRlZGF0ZSA9IFwiVXBkYXRlZGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L1JlcGFpckZvcm1EZXRhaWxSZWNvcmRzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybURldGFpbFJlY29yZHMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtRGV0YWlsUmVjb3Jkcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkcyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0NvbHVtbnNDdXN0b20ge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDdXN0b20nO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0ge1xyXG4gICAgICAgIENhc2VObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGFpckRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVG93bnNoaXA6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBcmVhOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3Vic2lkeVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFzc2lzdGl2ZVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEl0ZW1OYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWF0ZXJpYWxObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNlcnZpY2VUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VydmljZUNvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEV2YWx1dGlvbkxldmVsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSGFuZGxpbmdQbGFjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBsYWNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyUmVjb3JkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVwYWlyRW1wSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDcmVhdGV1c2VyOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIENyZWF0ZWRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVXBkYXRldXNlcjogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBVcGRhdGVkYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHMnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlcGFpckZvcm1SZWNvcmRzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpckRhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVG93bnNoaXAnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXJlYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJzaWR5U291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fzc2lzdGl2ZVNvdXJjZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VDb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdFdmFsdXRpb25MZXZlbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdIYW5kbGluZ1BsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpclJlY29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXBhaXJFbXBJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGV1c2VyJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWF0ZWRhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRldXNlcicsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVkYXRlJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20ge1xyXG4gICAgICAgIENhc2VObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGFpckRhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XHJcbiAgICAgICAgVG93bnNoaXA6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBBcmVhOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU3Vic2lkeVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEFzc2lzdGl2ZVNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEl0ZW1OYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTWF0ZXJpYWxObzogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNlcnZpY2VUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgU2VydmljZUNvdW50OiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIEV2YWx1dGlvbkxldmVsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgSGFuZGxpbmdQbGFjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFJlcGFpckVtcElkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRGV0YWlsTGlzdDogUmVwYWlyRm9ybVJlY29yZHNHcmlkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuUmVwYWlyRm9ybVJlY29yZHNDdXN0b20nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlcGFpckZvcm1SZWNvcmRzRm9ybUN1c3RvbS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IFJlcGFpckZvcm1SZWNvcmRzR3JpZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXBhaXJGb3JtUmVjb3Jkc0Zvcm1DdXN0b20sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2FzZU5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpckRhdGUnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVG93bnNoaXAnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQXJlYScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTdWJzaWR5U291cmNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fzc2lzdGl2ZVNvdXJjZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdJdGVtTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYXRlcmlhbE5vJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VUeXBlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NlcnZpY2VDb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdFdmFsdXRpb25MZXZlbCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdIYW5kbGluZ1BsYWNlJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlcGFpckVtcElkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0RldGFpbExpc3QnLCB3M1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcGFpckZvcm1SZWNvcmRzUm93IHtcclxuICAgICAgICBPaWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2FzZU5vPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGFpckRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVG93bnNoaXA/OiBzdHJpbmc7XHJcbiAgICAgICAgQXJlYT86IHN0cmluZztcclxuICAgICAgICBTdWJzaWR5U291cmNlPzogc3RyaW5nO1xyXG4gICAgICAgIEFzc2lzdGl2ZVNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBJdGVtTmFtZT86IHN0cmluZztcclxuICAgICAgICBNYXRlcmlhbE5vPzogc3RyaW5nO1xyXG4gICAgICAgIFNlcnZpY2VUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIFNlcnZpY2VDb3VudD86IG51bWJlcjtcclxuICAgICAgICBFdmFsdXRpb25MZXZlbD86IHN0cmluZztcclxuICAgICAgICBIYW5kbGluZ1BsYWNlPzogc3RyaW5nO1xyXG4gICAgICAgIFBsYWNlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcGFpclJlY29yZD86IHN0cmluZztcclxuICAgICAgICBSZXBhaXJFbXBJZD86IHN0cmluZztcclxuICAgICAgICBDcmVhdGV1c2VyPzogbnVtYmVyO1xyXG4gICAgICAgIENyZWF0ZWRhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRldXNlcj86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIERldGFpbExpc3Q/OiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvd1tdO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmVwYWlyRm9ybVJlY29yZHNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ09pZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDYXNlTm8nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5SZXBhaXJGb3JtUmVjb3Jkcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6UmVwYWlyRm9ybVJlY29yZHM6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpSZXBhaXJGb3JtUmVjb3JkczpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OlJlcGFpckZvcm1SZWNvcmRzOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgT2lkID0gXCJPaWRcIixcclxuICAgICAgICAgICAgQ2FzZU5vID0gXCJDYXNlTm9cIixcclxuICAgICAgICAgICAgUmVwYWlyRGF0ZSA9IFwiUmVwYWlyRGF0ZVwiLFxyXG4gICAgICAgICAgICBUb3duc2hpcCA9IFwiVG93bnNoaXBcIixcclxuICAgICAgICAgICAgQXJlYSA9IFwiQXJlYVwiLFxyXG4gICAgICAgICAgICBTdWJzaWR5U291cmNlID0gXCJTdWJzaWR5U291cmNlXCIsXHJcbiAgICAgICAgICAgIEFzc2lzdGl2ZVNvdXJjZSA9IFwiQXNzaXN0aXZlU291cmNlXCIsXHJcbiAgICAgICAgICAgIEl0ZW1OYW1lID0gXCJJdGVtTmFtZVwiLFxyXG4gICAgICAgICAgICBNYXRlcmlhbE5vID0gXCJNYXRlcmlhbE5vXCIsXHJcbiAgICAgICAgICAgIFNlcnZpY2VUeXBlID0gXCJTZXJ2aWNlVHlwZVwiLFxyXG4gICAgICAgICAgICBTZXJ2aWNlQ291bnQgPSBcIlNlcnZpY2VDb3VudFwiLFxyXG4gICAgICAgICAgICBFdmFsdXRpb25MZXZlbCA9IFwiRXZhbHV0aW9uTGV2ZWxcIixcclxuICAgICAgICAgICAgSGFuZGxpbmdQbGFjZSA9IFwiSGFuZGxpbmdQbGFjZVwiLFxyXG4gICAgICAgICAgICBQbGFjZSA9IFwiUGxhY2VcIixcclxuICAgICAgICAgICAgUmVwYWlyUmVjb3JkID0gXCJSZXBhaXJSZWNvcmRcIixcclxuICAgICAgICAgICAgUmVwYWlyRW1wSWQgPSBcIlJlcGFpckVtcElkXCIsXHJcbiAgICAgICAgICAgIENyZWF0ZXVzZXIgPSBcIkNyZWF0ZXVzZXJcIixcclxuICAgICAgICAgICAgQ3JlYXRlZGF0ZSA9IFwiQ3JlYXRlZGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGV1c2VyID0gXCJVcGRhdGV1c2VyXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZWRhdGUgPSBcIlVwZGF0ZWRhdGVcIixcclxuICAgICAgICAgICAgRGV0YWlsTGlzdCA9IFwiRGV0YWlsTGlzdFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0RlZmF1bHQvUmVwYWlyRm9ybVJlY29yZHMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UmVwYWlyRm9ybVJlY29yZHNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSZXBhaXJGb3JtUmVjb3Jkc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJEZWZhdWx0L1JlcGFpckZvcm1SZWNvcmRzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybVJlY29yZHMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkRlZmF1bHQvUmVwYWlyRm9ybVJlY29yZHMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiRGVmYXVsdC9SZXBhaXJGb3JtUmVjb3Jkcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+UmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNwZWNpYWxDYWxsaW5nTG9naWNzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljcyc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3BlY2lhbENhbGxpbmdMb2dpY3NGb3JtIHtcclxuICAgICAgICBQYWNrYWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFNwZWNpYWxTdGF0dXM6IEVkaXRvci5TdGF0dXNFZGl0b3I7XHJcbiAgICAgICAgU2VxOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgICAgIFJhZ3VsZXJDb3VudDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcclxuICAgICAgICBDYWxsQ291bnQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgT2xkQWdlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTcGVjaWFsQ2FsbGluZ0xvZ2ljc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0RlZmF1bHQuU3BlY2lhbENhbGxpbmdMb2dpY3MnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNwZWNpYWxDYWxsaW5nTG9naWNzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgU3BlY2lhbENhbGxpbmdMb2dpY3NGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IEVkaXRvci5TdGF0dXNFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU3BlY2lhbENhbGxpbmdMb2dpY3NGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhY2thZ2VOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwZWNpYWxTdGF0dXMnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnU2VxJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JhZ3VsZXJDb3VudCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYWxsQ291bnQnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnT2xkQWdlJywgdzJcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1JvdyB7XHJcbiAgICAgICAgSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFja2FnZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3BlY2lhbFN0YXR1cz86IG51bWJlcjtcclxuICAgICAgICBTZXE/OiBudW1iZXI7XHJcbiAgICAgICAgUmFndWxlckNvdW50PzogbnVtYmVyO1xyXG4gICAgICAgIENhbGxDb3VudD86IG51bWJlcjtcclxuICAgICAgICBPbGRBZ2U/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGFja2FnZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnRGVmYXVsdC5TcGVjaWFsQ2FsbGluZ0xvZ2ljcyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnRGVmYXVsdDpTcGVjaWFsQ2FsbGluZ0xvZ2ljczpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0RlZmF1bHQ6U3BlY2lhbENhbGxpbmdMb2dpY3M6QWRkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnRGVmYXVsdDpTcGVjaWFsQ2FsbGluZ0xvZ2ljczpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdEZWZhdWx0OlNwZWNpYWxDYWxsaW5nTG9naWNzOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFBhY2thZ2VOYW1lID0gXCJQYWNrYWdlTmFtZVwiLFxyXG4gICAgICAgICAgICBTcGVjaWFsU3RhdHVzID0gXCJTcGVjaWFsU3RhdHVzXCIsXHJcbiAgICAgICAgICAgIFNlcSA9IFwiU2VxXCIsXHJcbiAgICAgICAgICAgIFJhZ3VsZXJDb3VudCA9IFwiUmFndWxlckNvdW50XCIsXHJcbiAgICAgICAgICAgIENhbGxDb3VudCA9IFwiQ2FsbENvdW50XCIsXHJcbiAgICAgICAgICAgIE9sZEFnZSA9IFwiT2xkQWdlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFNwZWNpYWxDYWxsaW5nTG9naWNzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnRGVmYXVsdC9TcGVjaWFsQ2FsbGluZ0xvZ2ljcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNwZWNpYWxDYWxsaW5nTG9naWNzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFNwZWNpYWxDYWxsaW5nTG9naWNzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNwZWNpYWxDYWxsaW5nTG9naWNzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkRlZmF1bHQvU3BlY2lhbENhbGxpbmdMb2dpY3MvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiRGVmYXVsdC9TcGVjaWFsQ2FsbGluZ0xvZ2ljcy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJEZWZhdWx0L1NwZWNpYWxDYWxsaW5nTG9naWNzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiRGVmYXVsdC9TcGVjaWFsQ2FsbGluZ0xvZ2ljcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJEZWZhdWx0L1NwZWNpYWxDYWxsaW5nTG9naWNzL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5TcGVjaWFsQ2FsbGluZ0xvZ2ljc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRm9yZ290UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcEZvcm0ge1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBDb25maXJtRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNpZ25VcEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybUVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuVGV4dHMge1xyXG5cclxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVudGl0eVBsdXJhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE92ZXJyaWRlQ29uZmlybWF0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZUNoYW5nZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZENvbmZpcm06IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckltYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudGVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXJSb2xlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBEZWZhdWx0IHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBbm5vdW5jZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlRGVzYzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlUHJpb3JpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbm5vdW5jZVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBdHRhY2htZW50czogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGV0YWlsTGlzdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbGVhc2VEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2VydmljZUNvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRSb2xlSWRzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VXNlcklkczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBBbm5vdW5jZW1lbnREZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFubm91bmNlbWVudHNJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlDb250ZW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwbHlVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDYXNlU2VydmljZURhdGEge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhc2VObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlVXNlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXRpZW50SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXRpZW50TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvY0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2xpbmljcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpbmljTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaW5pY05hbWVFbmc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGluaWNObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlcHRObzogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ29udGFjdEJvb2sge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkdmlzZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFkdmlzZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbHJlYWR5a25vdzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFscmVhZHlrbm93RXhwcmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXNlbm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaGVja2JveDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDcmVhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlVXNlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXRpZW50TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlck5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIERlcGFydG1lbnRzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXB0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlcHROYW1lRW5nOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVwdE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSGlkZGVudDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRW1wUXVlc3Rpb25uYWlyZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wQXJlYTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcEJvZHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBEcml2ZXJMaWNlbnNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wRWZmZWN0aXZlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcEVtdDFMaWNlbnNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBObzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcFNlcnZpY2VMZXZlbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcFNraWxsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wVGltZVBoYXNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wV29ya1llYXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIZWlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPaWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNleDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgV2VpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBFbXBsb3llZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkcmVzczE6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzMjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpcnRoZGF5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmxvb2RUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2h1cmNoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l0aXplbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ291bnRyeUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVwdElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVwdFR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZHVjYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1OYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1SZWxhdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlRW5nTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtcGxveWVlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbXBsb3llZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIb21lbGFuZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkZW50aWZpY2F0aW9uQ2FyZE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGVhdmVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGljZW5zZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1hcnJ5RmxhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9yZ0lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF0aWVudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUG9zaXRpb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBvc3RUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmFjZUZsYWc6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSYW5rczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbGlnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmV0aXJlRmxhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNleDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YW5kYXJkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbGVwaG9uZTI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVbml0SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFllYXJzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXBhaXJGb3JtRGV0YWlsUmVjb3JkcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYXRlcmlhbEFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9pZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheUFtb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcGFpckZvcm1SZWNvcmRzSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJzaWR5QW1vdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VNYXRlcmlhbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZU1hdGVyaWFsQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJlcGFpckZvcm1SZWNvcmRzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBcmVhOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQXNzaXN0aXZlU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FzZU5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3JlYXRlZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENyZWF0ZXVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXRhaWxMaXN0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRXZhbHV0aW9uTGV2ZWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIYW5kbGluZ1BsYWNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXRlbU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNYXRlcmlhbE5vOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT2lkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGxhY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBhaXJEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwYWlyRW1wSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBhaXJSZWNvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXJ2aWNlQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTZXJ2aWNlVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1YnNpZHlTb3VyY2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3duc2hpcDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZWRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGV1c2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTcGVjaWFsQ2FsbGluZ0xvZ2ljcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FsbENvdW50OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPbGRBZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYWNrYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJhZ3VsZXJDb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNlcTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNwZWNpYWxTdGF0dXM6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBGb3JtcyB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZW1iZXJzaGlwIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRm9yZ290UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMb2dpbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmFjZWJvb2tCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdvb2dsZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2luVG9Zb3VyQWNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9SOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVtZW1iZXJNZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25JbkJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25VcEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaWduVXAge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY2VwdFRlcm1zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGVFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBOYXZpZ2F0aW9uIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgTG9nb3V0TGluazogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTaXRlVGl0bGU6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBTaXRlIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFjY2Vzc0RlbmllZCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvQ2hhbmdlVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYWNrUGVybWlzc2lvbnM6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdExvZ2dlZEluOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYWdlVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCYXNpY1Byb2dyZXNzRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhbmNlbFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQbGVhc2VXYWl0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQnVsa1NlcnZpY2VBY3Rpb24ge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxTdWNjZXNzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtYXRpb25Gb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVycm9yQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGhpbmdUb1Byb2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvbWVIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3NDb3VudDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERhc2hib2FyZCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250ZW50RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBMYXlvdXQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyQ29weXJpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJJbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJSaWdodHM6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbmVyYWxTZXR0aW5nczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW5MaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZExpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvdzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3dMaWdodDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFBlcm1pc3Npb25zQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0Um9sZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldm9rZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZURpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBWYWxpZGF0aW9uRXJyb3Ige1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgVmFsaWRhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxJblVzZTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBTZXJlbmUxWydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsTGFuZ3VhZ2VJZDoxLExhbmd1YWdlTmFtZToxfSxSb2xlOntSb2xlSWQ6MSxSb2xlTmFtZToxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sRGVmYXVsdDp7QW5ub3VuY2VtZW50OntBbm5vdW5jZURlc2M6MSxBbm5vdW5jZVByaW9yaXR5OjEsQW5ub3VuY2VUeXBlOjEsQXR0YWNobWVudHM6MSxDcmVhdGVkYXRlOjEsQ3JlYXRldXNlcjoxLERldGFpbExpc3Q6MSxPaWQ6MSxSZWxlYXNlRGF0ZToxLFNlcnZpY2VDb2RlOjEsVGFyZ2V0Um9sZUlkczoxLFRhcmdldFVzZXJJZHM6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxfSxBbm5vdW5jZW1lbnREZXRhaWw6e0Fubm91bmNlbWVudHNJZDoxLENyZWF0ZWRhdGU6MSxDcmVhdGV1c2VyOjEsT2lkOjEsUmVwbHlDb250ZW50OjEsUmVwbHlEYXRlOjEsUmVwbHlVc2VyOjEsVGFyZ2V0VXNlcjoxLFVwZGF0ZWRhdGU6MSxVcGRhdGV1c2VyOjF9LENhc2VTZXJ2aWNlRGF0YTp7Q2FzZU5vOjEsQ3JlYXRlRGF0ZToxLENyZWF0ZVVzZXI6MSxDcmVhdGVVc2VyTmFtZToxLE9pZDoxLFBhdGllbnRJZDoxLFBhdGllbnROYW1lOjEsUm9jSWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcjoxLFVwZGF0ZVVzZXJOYW1lOjF9LENsaW5pY3M6e0NsaW5pY05hbWU6MSxDbGluaWNOYW1lRW5nOjEsQ2xpbmljTm86MSxEZXB0Tm86MX0sQ29udGFjdEJvb2s6e0FkdmlzZToxLEFkdmlzZWRhdGU6MSxBbHJlYWR5a25vdzoxLEFscmVhZHlrbm93RXhwcmU6MSxDYXNlbm86MSxDaGVja2JveDoxLENyZWF0ZURhdGU6MSxDcmVhdGVVc2VyOjEsQ3JlYXRlVXNlck5hbWU6MSxPaWQ6MSxQYXRpZW50TmFtZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VyOjEsVXBkYXRlVXNlck5hbWU6MX0sRGVwYXJ0bWVudHM6e0RlcHROYW1lOjEsRGVwdE5hbWVFbmc6MSxEZXB0Tm86MSxIaWRkZW50OjF9LEVtcFF1ZXN0aW9ubmFpcmU6e0FnZToxLEVtcEFyZWE6MSxFbXBCb2R5OjEsRW1wRHJpdmVyTGljZW5zZToxLEVtcEVmZmVjdGl2ZURhdGU6MSxFbXBFbXQxTGljZW5zZToxLEVtcExhbmd1YWdlOjEsRW1wTm86MSxFbXBTZXJ2aWNlTGV2ZWw6MSxFbXBTa2lsbDoxLEVtcFRpbWVQaGFzZToxLEVtcFdvcmtZZWFyOjEsSGVpZ2h0OjEsT2lkOjEsUURhdGU6MSxTZXg6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcjoxLFdlaWdodDoxfSxFbXBsb3llZTp7QWRkcmVzczE6MSxBZGRyZXNzMjoxLEJpcnRoZGF5OjEsQmxvb2RUeXBlOjEsQ2h1cmNoOjEsQ2l0aXplbklkOjEsQ291bnRyeUlkOjEsRGVwdElkOjEsRGVwdFR5cGU6MSxFZHVjYXRlOjEsRW1OYW1lOjEsRW1SZWxhdGlvbjoxLEVtcGxveWVlRW5nTmFtZToxLEVtcGxveWVlSWQ6MSxFbXBsb3llZU5hbWU6MSxIb21lbGFuZDoxLElkZW50aWZpY2F0aW9uQ2FyZE5vOjEsTGVhdmVEYXRlOjEsTGljZW5zZToxLE1hcnJ5RmxhZzoxLE9pZDoxLE9yZ0lkOjEsUGF0aWVudElkOjEsUG9zaXRpb25JZDoxLFBvc3RJZDoxLFBvc3RUeXBlOjEsUHJhY3RpdGlvbmVyUmVnaXN0ZXJGbGFnOjEsUmFjZUZsYWc6MSxSYW5rczoxLFJlbGlnaW9uOjEsUmV0aXJlRmxhZzoxLFNleDoxLFN0YW5kYXJkOjEsU3RhcnREYXRlOjEsVGVsZXBob25lMToxLFRlbGVwaG9uZTI6MSxVbml0SWQ6MSxVc2VybmFtZToxLFllYXJzOjF9LFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzOntDcmVhdGVkYXRlOjEsQ3JlYXRldXNlcjoxLE1hdGVyaWFsQW1vdW50OjEsT2lkOjEsUGF5QW1vdW50OjEsUmVwYWlyRm9ybVJlY29yZHNJZDoxLFN1YnNpZHlBbW91bnQ6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxLFVzZU1hdGVyaWFsOjEsVXNlTWF0ZXJpYWxDb3VudDoxfSxSZXBhaXJGb3JtUmVjb3Jkczp7QXJlYToxLEFzc2lzdGl2ZVNvdXJjZToxLENhc2VObzoxLENyZWF0ZWRhdGU6MSxDcmVhdGV1c2VyOjEsRGV0YWlsTGlzdDoxLEV2YWx1dGlvbkxldmVsOjEsSGFuZGxpbmdQbGFjZToxLEl0ZW1OYW1lOjEsTWF0ZXJpYWxObzoxLE9pZDoxLFBsYWNlOjEsUmVwYWlyRGF0ZToxLFJlcGFpckVtcElkOjEsUmVwYWlyUmVjb3JkOjEsU2VydmljZUNvdW50OjEsU2VydmljZVR5cGU6MSxTdWJzaWR5U291cmNlOjEsVG93bnNoaXA6MSxVcGRhdGVkYXRlOjEsVXBkYXRldXNlcjoxfSxTcGVjaWFsQ2FsbGluZ0xvZ2ljczp7Q2FsbENvdW50OjEsSWQ6MSxPbGRBZ2U6MSxQYWNrYWdlTmFtZToxLFJhZ3VsZXJDb3VudDoxLFNlcToxLFNwZWNpYWxTdGF0dXM6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsR29vZ2xlQnV0dG9uOjEsTG9naW5Ub1lvdXJBY2NvdW50OjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExhbmd1YWdlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IExhbmd1YWdlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTGFuZ3VhZ2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTGFuZ3VhZ2VSb3cuRmllbGRzLkxhbmd1YWdlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Sb2xlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJvbGVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSb2xlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUm9sZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbUm9sZVJvdy5GaWVsZHMuUm9sZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4gKDxVc2VyUGVybWlzc2lvblJvdz57IFBlcm1pc3Npb25LZXk6IHggfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4geC5QZXJtaXNzaW9uS2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVXNlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVXNlckZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSAhPSB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZHMgZW50ZXJlZCBkb2Vzbid0IG1hdGNoIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRSb2xlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXJvbGVzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtdXNlcnMgdGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJSb2xlRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Vc2VyRGlhbG9nLkVkaXRQZXJtaXNzaW9uc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVzZXJQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiB0aGlzLmVudGl0eS5Vc2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmVudGl0eS5Vc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ2VkaXQtcm9sZXMtYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXNlIGZpZWxkcyBhcmUgb25seSByZXF1aXJlZCBpbiBuZXcgcmVjb3JkIG1vZGVcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ3JlcXVpcmVkJywgdGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJ3N1cCcpLnRvZ2dsZSh0aGlzLmlzTmV3KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlVzZXJcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVXNlckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1VzZXJSb3cuRmllbGRzLlVzZXJuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BdXRob3JpemF0aW9uIHtcclxuICAgIGV4cG9ydCBkZWNsYXJlIGxldCB1c2VyRGVmaW5pdGlvbjogU2NyaXB0VXNlckRlZmluaXRpb247XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1dGhvcml6YXRpb24sICd1c2VyRGVmaW5pdGlvbicsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0UmVtb3RlRGF0YSgnVXNlckRhdGEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKFtTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlXSlcclxuICAgIGV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5EYXRhR3JpZDxQZXJtaXNzaW9uQ2hlY2tJdGVtLCBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIGJ5UGFyZW50S2V5OiBRLkdyb3VwaW5nPFBlcm1pc3Npb25DaGVja0l0ZW0+O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0OiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPiA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgcGVybWlzc2lvbktleXMgPSB0aGlzLmdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHBlcm1pc3Npb25LZXlzLm1hcChrZXkgPT4gPFBlcm1pc3Npb25DaGVja0l0ZW0+e1xyXG4gICAgICAgICAgICAgICAgS2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBQYXJlbnRLZXk6IHRoaXMuZ2V0UGFyZW50S2V5KGtleSksXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGVCeUtleVtrZXldLFxyXG4gICAgICAgICAgICAgICAgR3JhbnRSZXZva2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBJc0dyb3VwOiBrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PT0gJzonXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieVBhcmVudEtleSA9IFEudG9Hcm91cGluZyhpdGVtcywgeCA9PiB4LlBhcmVudEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtLCBncmFudDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChpdGVtLkdyYW50UmV2b2tlID09PSBncmFudCkgPyAnIGNoZWNrZWQnIDogJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gZGVzYy5maWx0ZXIoeCA9PiB4LkdyYW50UmV2b2tlID09PSBncmFudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkZXNjLmxlbmd0aCA9PT0gZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCBwYXJ0aWFsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcm9sZU9ySW1wbGljaXQoa2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlUGVybWlzc2lvbnNba2V5XSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba107XHJcbiAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgb2YgT2JqZWN0LmtleXModGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5HcmFudFJldm9rZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUVmZmVjdGl2ZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBzdHJpbmcge1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYW50Q291bnQgPSBRLmNvdW50KGRlc2MsIHggPT4geC5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICh4LkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdCh4LktleSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbnRDb3VudCA9PT0gZGVzYy5sZW5ndGggfHwgZGVzYy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2FsbG93JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhbnRDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZGVueSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwYXJ0aWFsJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBpdGVtLkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoaXRlbS5LZXkpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoZ3JhbnRlZCA/ICcgYWxsb3cnIDogJyBkZW55Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUGVybWlzc2lvbicpLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUaXRsZScsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFNlcmVuaXR5LlNsaWNrRm9ybWF0dGluZy50cmVlVG9nZ2xlKCgpID0+IHRoaXMudmlldywgeCA9PiB4LktleSwgY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzcyA9IHRoaXMuZ2V0SXRlbUVmZmVjdGl2ZUNsYXNzKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJlZmZlY3RpdmUtcGVybWlzc2lvbiAnICsga2xhc3MgKyAnXCI+JyArIFEuaHRtbEVuY29kZShjdHgudmFsdWUpICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDk1LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5HcmFudCcpLCBmaWVsZDogJ0dyYW50JyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MxID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2NoZWNrLWJveCBncmFudCBuby1mbG9hdCBcIiArIGtsYXNzMSArIFwiJz48L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93UmV2b2tlKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5SZXZva2UnKSwgZmllbGQ6ICdSZXZva2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczIgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0yLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJjaGVjay1ib3ggcmV2b2tlIG5vLWZsb2F0ICcgKyBrbGFzczIgKyAnXCI+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRJdGVtcyhpdGVtczogUGVybWlzc2lvbkNoZWNrSXRlbVtdKTogdm9pZCB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5zZXRJbmRlbnRzKGl0ZW1zLCB4ID0+IHguS2V5LCB4ID0+IHguUGFyZW50S2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyhpdGVtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuZmlsdGVyQnlJZChpdGVtLCB0aGlzLnZpZXcsIHggPT4geC5QYXJlbnRLZXkpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hDb250YWlucyhpdGVtKSB8fCBpdGVtLklzR3JvdXAgJiYgUS5hbnkodGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCBmYWxzZSksIHggPT4gdGhpcy5tYXRjaENvbnRhaW5zKHgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG1hdGNoQ29udGFpbnMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLlRpdGxlIHx8ICcnKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXREZXNjZW5kYW50cyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtLCBleGNsdWRlR3JvdXBzOiBib29sZWFuKTogUGVybWlzc2lvbkNoZWNrSXRlbVtdIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogUGVybWlzc2lvbkNoZWNrSXRlbVtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBzdGFjayA9IFtpdGVtXTtcclxuICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmJ5UGFyZW50S2V5W2kuS2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4Y2x1ZGVHcm91cHMgfHwgIWNoaWxkLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlLCByb3csIGNlbGwpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIudG9nZ2xlQ2xpY2soZSwgcm93LCBjZWxsLCB0aGlzLnZpZXcsIHggPT4geC5LZXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBncmFudCA9IHRhcmdldC5oYXNDbGFzcygnZ3JhbnQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncmFudCB8fCB0YXJnZXQuaGFzQ2xhc3MoJ3Jldm9rZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrZWRPclBhcnRpYWwgPSB0YXJnZXQuaGFzQ2xhc3MoJ2NoZWNrZWQnKSB8fCB0YXJnZXQuaGFzQ2xhc3MoJ3BhcnRpYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZE9yUGFydGlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYW50ID0gZ3JhbnQgIT09IGNoZWNrZWRPclBhcnRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgb2YgdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBncmFudDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWNrR3JpZC5pbnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0UGFyZW50S2V5KGtleSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIGlmIChrZXkuY2hhckF0KGtleS5sZW5ndGggLSAxKSA9PT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDAsIGtleS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlkeCA9IGtleS5sYXN0SW5kZXhPZignOicpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXkuc3Vic3RyKDAsIGlkeCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCwgKGZpZWxkLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEudHJpbVRvTnVsbCh0ZXh0KSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+KTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICBsZXQga2V5cyA9IDxzdHJpbmdbXT5RLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzJyk7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZVdpdGhHcm91cCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzID0gaztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQocy5sZW5ndGggLSAxKSA9PSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZUJ5S2V5W3NdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVCeUtleVtzXSA9IFEuY29hbGVzY2UoUS50cnlHZXRUZXh0KCdQZXJtaXNzaW9uLicgKyBzKSwgcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSBzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSAnJztcclxuICAgICAgICAgICAgICAgIGxldCBncm91cFRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwID0gZ3JvdXAgKyBwYXJ0c1tpXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0ID0gUS50cnlHZXRUZXh0KCdQZXJtaXNzaW9uLicgKyBncm91cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W2dyb3VwXSA9IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRpdGxlID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbZ3JvdXBdICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW2dyb3VwXSA9IGdyb3VwVGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbc10gPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBrZXlzID0ga2V5cy5zb3J0KCh4LCB5KSA9PiBRLnR1cmtpc2hMb2NhbGVDb21wYXJlKHRpdGxlV2l0aEdyb3VwW3hdLCB0aXRsZVdpdGhHcm91cFt5XSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgdmFsdWUoKTogVXNlclBlcm1pc3Npb25Sb3dbXSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBVc2VyUGVybWlzc2lvblJvd1tdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlldy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5HcmFudFJldm9rZSAhPSBudWxsICYmIGl0ZW0uS2V5LmNoYXJBdChpdGVtLktleS5sZW5ndGggLSAxKSAhPSAnOicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IFBlcm1pc3Npb25LZXk6IGl0ZW0uS2V5LCBHcmFudGVkOiBpdGVtLkdyYW50UmV2b2tlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHZhbHVlKHZhbHVlOiBVc2VyUGVybWlzc2lvblJvd1tdKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlldy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gdGhpcy52aWV3LmdldEl0ZW1CeUlkKHJvdy5QZXJtaXNzaW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByLkdyYW50UmV2b2tlID0gUS5jb2FsZXNjZShyb3cuR3JhbnRlZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9yb2xlUGVybWlzc2lvbnM6IFEuRGljdGlvbmFyeTxib29sZWFuPiA9IHt9O1xyXG5cclxuICAgICAgICBnZXQgcm9sZVBlcm1pc3Npb25zKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgcm9sZVBlcm1pc3Npb25zKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2ltcGxpY2l0UGVybWlzc2lvbnM6IFEuRGljdGlvbmFyeTxRLkRpY3Rpb25hcnk8Ym9vbGVhbj4+ID0ge307XHJcblxyXG4gICAgICAgIHNldCBpbXBsaWNpdFBlcm1pc3Npb25zKHZhbHVlOiBRLkRpY3Rpb25hcnk8c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHZhbHVlW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgb2YgbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba11bc10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMge1xyXG4gICAgICAgIHNob3dSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrSXRlbSB7XHJcbiAgICAgICAgUGFyZW50S2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBJc0dyb3VwPzogYm9vbGVhbjtcclxuICAgICAgICBHcmFudFJldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3RSb2xlUGVybWlzc2lvbnMoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnJvbGVQZXJtaXNzaW9ucyA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuQ2hlY2tUcmVlRWRpdG9yPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55PiwgYW55PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkaXY6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihkaXYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCkge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0IHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRyZWVJdGVtcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJvbGVSb3cuZ2V0TG9va3VwKCkuaXRlbXMubWFwKHJvbGUgPT4gPFNlcmVuaXR5LkNoZWNrVHJlZUl0ZW08YW55Pj57XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5Sb2xlSWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHJvbGUuUm9sZU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSAmJlxyXG4gICAgICAgICAgICAgICAgKFEuaXNFbXB0eU9yTnVsbCh0aGlzLnNlYXJjaFRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhpdGVtLnRleHQgfHwgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hUZXh0KSA+PSAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclJvbGVEaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFJvbGVDaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUm9sZURpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUm9sZUNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUm9sZXMnKSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUm9sZVNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySURcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUS5zZXJ2aWNlUmVxdWVzdCgnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXBkYXRlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVzOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHBhcnNlSW50KHgsIDEwKSlcclxuICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5TYXZlU3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUm9sZURpYWxvZy5EaWFsb2dUaXRsZScpLCB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8ZGl2IGlkPSd+X1JvbGVzJz48L2Rpdj5cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZURpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5Db21tb24ge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0RXhlY3V0ZU9wdGlvbnMge1xyXG4gICAgICAgIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgICAgIGRvd25sb2FkPzogYm9vbGVhbjtcclxuICAgICAgICBleHRlbnNpb24/OiAncGRmJyB8ICdodG0nIHwgJ2h0bWwnIHwgJ3hsc3gnIHwgJ2RvY3gnO1xyXG4gICAgICAgIGdldFBhcmFtcz86ICgpID0+IGFueTtcclxuICAgICAgICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcbiAgICAgICAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0QnV0dG9uT3B0aW9ucyBleHRlbmRzIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICB0aXRsZT86IHN0cmluZztcclxuICAgICAgICBjc3NDbGFzcz86IHN0cmluZztcclxuICAgICAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUmVwb3J0SGVscGVyIHtcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogUmVwb3J0QnV0dG9uT3B0aW9ucyk6IFNlcmVuaXR5LlRvb2xCdXR0b24ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEuY29hbGVzY2Uob3B0aW9ucy50aXRsZSwgJ1JlcG9ydCcpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFEuY29hbGVzY2Uob3B0aW9ucy5jc3NDbGFzcywgJ3ByaW50LWJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogb3B0aW9ucy5pY29uLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlcG9ydEhlbHBlci5leGVjdXRlKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGUob3B0aW9uczogUmVwb3J0RXhlY3V0ZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IG9wdGlvbnMuZ2V0UGFyYW1zID8gb3B0aW9ucy5nZXRQYXJhbXMoKSA6IG9wdGlvbnMucGFyYW1zO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzZFwiKVxyXG4gICAgICAgICAgICBRLnBvc3RUb1VybCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICd+L0V4dGVuc2lvbnMvUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICAvL3VybDogJ34vUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IG9wdGlvbnMucmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogUS5jb2FsZXNjZShvcHRpb25zLmV4dGVuc2lvbiwgJ3BkZicpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdDogb3B0ID8gJC50b0pTT04ob3B0KSA6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBRLmNvYWxlc2NlKG9wdGlvbnMudGFyZ2V0LCAnX2JsYW5rJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lMS5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdTZXJlbmUxJyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkNvbW1vbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcyhbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5lZGl0b3IoKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMuZWxlbWVudChcIjxkaXYvPlwiKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JCYXNlPFRFbnRpdHk+IGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxURW50aXR5LCBhbnk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBTZXJlbml0eS5JR2V0RWRpdFZhbHVlLCBTZXJlbml0eS5JU2V0RWRpdFZhbHVlIHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbmV4dElkID0gMTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpZChlbnRpdHk6IFRFbnRpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbnRpdHkgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmV4dElkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJgXCIgKyB0aGlzLm5leHRJZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNldE5ld0lkKGVudGl0eTogVEVudGl0eSkge1xyXG4gICAgICAgICAgICBlbnRpdHlbdGhpcy5nZXRJZFByb3BlcnR5KCldID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlKG9wdDogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8YW55PiwgY2FsbGJhY2s6IChyOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHZvaWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBvcHQucmVxdWVzdCBhcyBTZXJlbml0eS5TYXZlUmVxdWVzdDxURW50aXR5PjtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IFEuZGVlcENsb25lKHJlcXVlc3QuRW50aXR5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQocm93KTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIChyb3cgYXMgYW55KVt0aGlzLmdldElkUHJvcGVydHkoKV0gPSB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVFbnRpdHkocm93LCBpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy52aWV3LmdldEl0ZW1zKCkuc2xpY2UoKTtcclxuICAgICAgICAgICAgaWYgKGlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IFEuaW5kZXhPZihpdGVtcywgeCA9PiB0aGlzLmlkKHgpID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBRLmRlZXBDbG9uZSh7fSBhcyBURW50aXR5LCBpdGVtc1tpbmRleF0sIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW50aXRpZXMoaXRlbXMpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlRW50aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRlbGV0ZUl0ZW0oaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0ZUVudGl0eShyb3c6IFRFbnRpdHksIGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2V0RW50aXRpZXMoaXRlbXM6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5ld0VudGl0eSgpOiBURW50aXR5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIFRFbnRpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgdmFyIGFkZEJ1dHRvbiA9IFEudHJ5Rmlyc3QoYnV0dG9ucywgeCA9PiB4LmNzc0NsYXNzID09ICdhZGQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRCdXR0b24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vblNhdmUgPSAob3B0LCBjYWxsYmFjaykgPT4gdGhpcy5zYXZlKG9wdCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZmVyRGlhbG9nUmVhZE9ubHkoZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKHRoaXMuZ2V0TmV3RW50aXR5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucy5maWx0ZXIoeCA9PiB4LmNzc0NsYXNzICE9IFwicmVmcmVzaC1idXR0b25cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZWRpdEl0ZW0oZW50aXR5T3JJZDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSBlbnRpdHlPcklkO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5RGlhbG9nKHRoaXMuZ2V0SXRlbVR5cGUoKSwgZGxnID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgR3JpZEVkaXRvckRpYWxvZzxURW50aXR5PjtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5vbkRlbGV0ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZUVudGl0eShpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7fSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlckRpYWxvZ1JlYWRPbmx5KGRpYWxvZyk7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cub25TYXZlID0gKG9wdCwgY2FsbGJhY2spID0+IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5sb2FkRW50aXR5QW5kT3BlbkRpYWxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfSk7O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEVkaXRWYWx1ZShwcm9wZXJ0eSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eS5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0RWRpdFZhbHVlKHNvdXJjZSwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eS5uYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogVEVudGl0eVtdIHtcclxuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldElkUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5nZXRJdGVtcygpLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gUS5kZWVwQ2xvbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB5W3BdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkICYmIGlkLnRvU3RyaW5nKCkuY2hhckF0KDApID09ICdgJylcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgeVtwXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRFbnRpdHlbXSkge1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0SWRQcm9wZXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoKHZhbHVlIHx8IFtdKS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IFEuZGVlcENsb25lKHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh5IGFzIGFueSlbcF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAoeSBhcyBhbnkpW3BdID0gXCJgXCIgKyB0aGlzLmdldE5leHRJZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgIH0pLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRHcmlkQ2FuTG9hZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5pdGlhbFRpdGxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGVuYWJsZURlbGV0ZUNvbHVtbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlRGVsZXRlQ29sdW1uKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdEZWxldGUgUm93JyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiAnPGEgY2xhc3M9XCJpbmxpbmUtYWN0aW9uIGRlbGV0ZS1yb3dcIiB0aXRsZT1cImRlbGV0ZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vIHRleHQtcmVkXCI+PC9pPjwvYT4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDI0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtOiBURW50aXR5ID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdXNlciBjbGlja3MgXCJpXCIgZWxlbWVudCwgZS5nLiBpY29uXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSlcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZURlbGV0ZUNvbHVtbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNDbGFzcygnZGVsZXRlLXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRpdHkoaXRlbVt0aGlzLmdldElkUHJvcGVydHkoKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5Db21tb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEdyaWRFZGl0b3JEaWFsb2c8VEVudGl0eT4gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VEVudGl0eSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIl9faWRcIjsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb25TYXZlOiAob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuU2F2ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgb25EZWxldGU6IChvcHRpb25zOiBTZXJlbml0eS5TZXJ2aWNlT3B0aW9uczxTZXJlbml0eS5EZWxldGVSZXNwb25zZT4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNhdmUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlID0gbnVsbDtcclxuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhcHBseSBjaGFuZ2VzIGJ1dHRvbiBkb2Vzbid0IHdvcmsgcHJvcGVybHkgd2l0aCBpbi1tZW1vcnkgZ3JpZHMgeWV0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGx5Q2hhbmdlc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUNoYW5nZXNCdXR0b24uaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUhhbmRsZXIob3B0aW9uczogU2VyZW5pdHkuU2VydmljZU9wdGlvbnM8U2VyZW5pdHkuU2F2ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMub25TYXZlICYmIHRoaXMub25TYXZlKG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVIYW5kbGVyKG9wdGlvbnM6IFNlcmVuaXR5LlNlcnZpY2VPcHRpb25zPFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlPixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZSAmJiB0aGlzLm9uRGVsZXRlKG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEFubm91bmNlbWVudFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEFubm91bmNlbWVudEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEFubm91bmNlbWVudFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKHRydWUpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREaWFsb2dDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8QW5ub3VuY2VtZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEFubm91bmNlbWVudEZvcm1DdXN0b20uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQW5ub3VuY2VtZW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgYWZ0ZXJMb2FkRW50aXR5KCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZnRlckxvYWRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5UYXJnZXRVc2VySWRzLnZhbHVlKTsqL1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRNb2RlKCkpIHsgXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5FZGl0b3JVdGlscy5zZXRSZWFkT25seSh0aGlzLmZvcm0uVGFyZ2V0Um9sZUlkcywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LkVkaXRvclV0aWxzLnNldFJlYWRPbmx5KHRoaXMuZm9ybS5UYXJnZXRVc2VySWRzLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy90aGlzLmZvcm0uVGFyZ2V0Um9sZUlkcy5zZXRSZWFkT25seSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5mb3JtLlRhcmdldFVzZXJJZHMuc2V0UmVhZE9ubHkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB2YWxpZGF0ZUJlZm9yZVNhdmUoKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIudmFsaWRhdGVCZWZvcmVTYXZlKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5mb3JtLlRhcmdldFVzZXJJZHMudmFsdWUpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5mb3JtLlRhcmdldFVzZXJJZHMudmFsdWU9PW51bGwpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLlRhcmdldFVzZXJJZHMudmFsdWUgfHwgIXRoaXMuZm9ybS5UYXJnZXRSb2xlSWRzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBRLm5vdGlmeVdhcm5pbmcoXCLoq4vloavpgbjkuqTnj63lsI3osaFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTYXZlT3B0aW9ucyhyZXMpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBzdXBlci5nZXRTYXZlT3B0aW9ucyhyZXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMudXJsID0gYC9TZXJ2aWNlcy8ke3RoaXMuZ2V0U2VydmljZSgpfS9DcmVhdGVCb3RoRGV0YWlsYDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50R3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QW5ub3VuY2VtZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEFubm91bmNlbWVudENvbHVtbnNDdXN0b20uY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFubm91bmNlbWVudERldGFpbERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxBbm5vdW5jZW1lbnREZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBbm5vdW5jZW1lbnREZXRhaWxGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnREZXRhaWxHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxBbm5vdW5jZW1lbnREZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEFubm91bmNlbWVudERldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBbm5vdW5jZW1lbnREZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQW5ub3VuY2VtZW50R3JpZERpYWxvZyBleHRlbmRzIENvbW1vbi5HcmlkRWRpdG9yRGlhbG9nPEFubm91bmNlbWVudFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEFubm91bmNlbWVudFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBbm5vdW5jZW1lbnRGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgQW5ub3VuY2VtZW50VHlwZSA6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgcmVwYWlyRGF0ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9HcmlkRWRpdG9yQmFzZS50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAvKiAgIGltcG9ydCBmbGQgPSBBbm5vdW5jZW1lbnRSb3cuRmllbGRzKi9cclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBbm5vdW5jZW1lbnRHcmlkRWRpdG9yIGV4dGVuZHMgQ29tbW9uLkdyaWRFZGl0b3JCYXNlPEFubm91bmNlbWVudERldGFpbFJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJTZXJ2aWNlQUQuQW5ub3VuY2VtZW50RGV0YWlsQ3VzdG9tXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEFubm91bmNlbWVudEdyaWREaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQW5ub3VuY2VtZW50RGV0YWlsUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICAvL3B1YmxpYyBzZXJ2aWNlQ29kZTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBBdHRhY2htZW50IDogc3RyaW5nO1xyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2VydmljZUNvZGUgPSBRLmdldENvb2tpZShcIlNlcnZpY2VDb2RlXCIpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQW5ub3VuY2VtZW50Um93LmRlbGV0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZGVsZXRlLXJvdyAgIGZhIGZhLXRyYXNoXCIgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQW5ub3VuY2VtZW50Um93LnVwZGF0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93ICAgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA3NVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vY29sdW1ucy5wdXNoKFxyXG4gICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBmaWVsZDogXCJDb250YWN0UGVyc29uUm93XCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgQ29udGFjdFBlcnNvbi1yb3cgIGZhIGZhLXBob25lXCIgdGl0bGU9XCLoga/ntaHkurpcIj7oga/ntaHkuro8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgIHdpZHRoOiA4NSxcclxuICAgICAgICAgICAgLy8gICAgICAgIG1pbldpZHRoOiA4NSxcclxuICAgICAgICAgICAgLy8gICAgICAgIG1heFdpZHRoOiA4NVxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IGdyaWRPcHRpb25zID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBncmlkT3B0aW9ucy5yb3dIZWlnaHQgPSA0MDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBncmlkT3B0aW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdlZGl0LXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVudGl0eURpYWxvZyh0aGlzLmdldEl0ZW1UeXBlKCksIGRsZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBkbGcgYXMgQW5ub3VuY2VtZW50R3JpZERpYWxvZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLnRyaWdnZXJEYXRhQ2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdkZWxldGUtcm93JykpIHtcclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50aXR5KGl0ZW1bdGhpcy5nZXRJZFByb3BlcnR5KCldKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdDb250YWN0UGVyc29uLXJvdycpKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBkbGcgPSBuZXcgUHVibGljQmFzaWMuQ29udGFjdFBlcnNvbkN1c3RvbUdyaWREaWFsb2codGhpcy5zZXJ2aWNlQ29kZSwgaXRlbS5QYXRpZW50Tm8sIGl0ZW0uQ2FzZU5vKTtcclxuICAgICAgICAgICAgLy8gICAgZGxnLmxvYWROZXdBbmRPcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIC8vICAgIC8vbGV0IGRsZyA9IG5ldyBDb250YWN0UGVyc29uR3JpZEN1c3RvbSh0aGlzLnNsaWNrQ29udGFpbmVyLnBhcmVudCgpLCB0aGlzLnNlcnZpY2VDb2RlLCBpdGVtLlBhdGllbnRObyk7XHJcblxyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wcml2YXRlIGF1dG9TaXplO1xyXG5cclxuICAgICAgICAvL3Byb3RlY3RlZCBjcmVhdGVTbGlja0dyaWQoKTogU2xpY2suR3JpZCB7XHJcbiAgICAgICAgLy8gICAgbGV0IGdyaWQgPSBzdXBlci5jcmVhdGVTbGlja0dyaWQoKTtcclxuICAgICAgICAvLyAgICB0aGlzLmF1dG9TaXplID0gbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpOyAvLyAqKiogSWYgeW91IHdhbnQgdG8gbWFrZSBpdCBhdXRvcmVzaXplIHdoZW4gZ3JpZCBpcyBsb2FkZWQsIHVzZTogbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpO1xyXG4gICAgICAgIC8vICAgIGdyaWQucmVnaXN0ZXJQbHVnaW4odGhpcy5hdXRvU2l6ZSk7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGdyaWQ7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAvLyoqKiBSZXNpemVzIHRoZSBjb2x1bW5zIGFmdGVyIGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIGdyaWQgKGV4LiBDb2x1bW4gUGlja2VyKSAqXHJcbiAgICAgICAgLy9wcm90ZWN0ZWQgbWFya3VwUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gICAgc3VwZXIubWFya3VwUmVhZHkoKTtcclxuICAgICAgICAvLyAgICBpZiAodGhpcy5hdXRvU2l6ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMuYXV0b1NpemUucmVzaXplQWxsQ29sdW1ucygpO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNlU2VydmljZURhdGFEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2FzZVNlcnZpY2VEYXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2FzZVNlcnZpY2VEYXRhRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2FzZVNlcnZpY2VEYXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YUNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkRlbGV0ZVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENhc2VTZXJ2aWNlRGF0YVJvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ2FzZVNlcnZpY2VEYXRhUm93LmRlbGV0ZVBlcm1pc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93IGZhIGZhLXRyYXNoXCIgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBmYSBmYS10cmFzaFwiIGRpc2FibGVkIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q2FzZVNlcnZpY2VEYXRhUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDYXNlU2VydmljZURhdGFSb3cudXBkYXRlUGVybWlzc2lvbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdyBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r1wiPue3qOi8rzwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENhc2VTZXJ2aWNlRGF0YURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImRlbGV0ZS1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oXCLnorrlrpropoHliKrpmaTll44/XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDYXNlU2VydmljZURhdGFTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhc2VTZXJ2aWNlRGF0YURpYWxvZ0N1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDYXNlU2VydmljZURhdGFSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDYXNlU2VydmljZURhdGFGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2VEYXRhR3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2FzZVNlcnZpY2VEYXRhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIENhc2VTZXJ2aWNlRGF0YUNvbHVtbnNDdXN0b20uY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhRGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXNlU2VydmljZURhdGFSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2FzZVNlcnZpY2VEYXRhU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBDYXNlU2VydmljZURhdGFHcmlkOiBDYXNlU2VydmljZURhdGFHcmlkQ3VzdG9tO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInJlZnJlc2gtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInRvb2wtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxDYXNlU2VydmljZURhdGFSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENhc2VTZXJ2aWNlRGF0YVJvdy5kZWxldGVQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZGVsZXRlLXJvdyBmYSBmYS10cmFzaFwiIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZmEgZmEtdHJhc2hcIiBkaXNhYmxlZCB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENhc2VTZXJ2aWNlRGF0YVJvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ2FzZVNlcnZpY2VEYXRhUm93LnVwZGF0ZVBlcm1pc3Npb24pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZWRpdC1yb3cgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgZGlzYWJsZWQgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIlFRUVJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPENhc2VTZXJ2aWNlRGF0YVJvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ2FzZVNlcnZpY2VEYXRhUm93LnVwZGF0ZVBlcm1pc3Npb24pIHx8IFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENhc2VTZXJ2aWNlRGF0YVJvdy5pbnNlcnRQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIHFxcS1yb3cgZmEgZmEtbGlzdC11bFwiIHRpdGxlPVwi5a625bqt6IGv57Wh57C/XCI+5a625bqt6IGv57Wh57C/PC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGZhIGZhLWxpc3QtdWxcIiBkaXNhYmxlZCB0aXRsZT1cIuWutuW6reiBr+e1oeewv1wiPuWutuW6reiBr+e1oeewvzwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNDAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTQwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2xpY2tPcHRpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc2xpY2sgPSBzdXBlci5nZXRTbGlja09wdGlvbnMoKTtcclxuICAgICAgICAgICAgc2xpY2sucm93SGVpZ2h0ID0gMzU7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGljaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IENhc2VTZXJ2aWNlRGF0YURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhpdGVtLk9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImRlbGV0ZS1yb3dcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oXCLnorrlrpropoHliKrpmaTll44/XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDYXNlU2VydmljZURhdGFTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygncXFxLXJvdycpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IER5bmFtaWNHcmlkUGFuZWwoKTtcclxuICAgICAgICAgICAgICAgIGRsZy5zZXRfZGlhbG9nVGl0bGUoXCJcIik7XHJcbiAgICAgICAgICAgICAgICBkbGcuZ3JpZCA9IG5ldyBEZWZhdWx0LkNvbnRhY3RCb29rR3JpZEN1c3RvbSgkKFwiI015R3JpZFwiKSwgaXRlbS5DYXNlTm8pO1xyXG4gICAgICAgICAgICAgICAgZGxnLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDbGluaWNzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENsaW5pY3NSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2xpbmljc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2xpbmljc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENsaW5pY3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENsaW5pY3NSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDbGluaWNzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDbGluaWNzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENsaW5pY3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2xpbmljc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENsaW5pY3NGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDbGluaWNzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2xpbmljc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDbGluaWNzQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDbGluaWNzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDbGluaWNzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENsaW5pY3NSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDbGluaWNzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2xpbmljc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDb250YWN0Qm9va0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDb250YWN0Qm9va1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDb250YWN0Qm9va0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb250YWN0Qm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDb250YWN0Qm9va0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q29udGFjdEJvb2tSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IHN1cGVyLmdldFF1aWNrRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IEFscmVhZHlGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiQWxyZWFkeWtub3dcIik7XHJcbiAgICAgICAgICAgIGlmIChBbHJlYWR5RmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBBbHJlYWR5RmlsdGVyLmluaXQgPSB3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAodyBhcyBFZGl0b3IuQWxyZWFkeUtub3dFZGl0b3IpLnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucGFuZWwodHJ1ZSlcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENvbnRhY3RCb29rUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENvbnRhY3RCb29rRm9ybUN1c3RvbSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICBwcml2YXRlIGNhc2VObztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoQ2FzZW5vPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzZU5vID0gQ2FzZW5vO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkFkdmlzZS5jaGFuZ2UoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkudmFsKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLkFscmVhZHlrbm93LnZhbHVlID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLkFscmVhZHlrbm93LnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAvL3RoaXMuZm9ybS5DYXNlbm8udmFsdWUgPSB0aGlzLkNhc2VubztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNhdmVPcHRpb25zKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHN1cGVyLmdldFNhdmVPcHRpb25zKHJlcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc05ldygpKVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSBgL1NlcnZpY2VzLyR7dGhpcy5nZXRTZXJ2aWNlKCl9L05ld0NyZWF0ZWA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ29udGFjdEJvb2tEaWFsb2dDdXN0b20xIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENvbnRhY3RCb29rUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRm9ybUN1c3RvbTEuZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb250YWN0Qm9va1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29udGFjdEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDb250YWN0Qm9va0Zvcm1DdXN0b20xKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgIHByaXZhdGUgQ2FzZW5vO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihDYXNlbm8/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5DYXNlbm8gPSBDYXNlbm87XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQWR2aXNlLmNoYW5nZShlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS52YWwoKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uQWxyZWFkeWtub3cudmFsdWUgPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uQWxyZWFkeWtub3cudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uU2hvd1RleHQudmFsdWUgPSB0aGlzLkNhc2VubztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRhY3RCb29rR3JpZEN1c3RvbSBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q29udGFjdEJvb2tSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ29udGFjdEJvb2tDb2x1bW5zQ3VzdG9tLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENvbnRhY3RCb29rRGlhbG9nQ3VzdG9tOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb250YWN0Qm9va1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbnRhY3RCb29rUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ29udGFjdEJvb2tTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjYXNlTm87XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIGNhc2VObzogc3RyaW5nKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2FzZU5vID0gY2FzZU5vO1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHsgfSAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMuc3BsaWNlKFEuaW5kZXhPZihidXR0b25zLCB4ID0+IHguY3NzQ2xhc3MgPT0gXCJhZGQtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInRvb2wtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInJlZnJlc2gtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoXCJMQUxBTEFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICd0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmYS1yZWd1bGFyIGZhLWJvb2snLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBDb250YWN0Qm9va0RpYWxvZ0N1c3RvbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbGcubG9hZE5ld0FuZE9wZW5EaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IHRoaXMuZ2V0U2VydmljZSgpICsgJy9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLoga/ntaHnsL9FWENFTFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL2J1dHRvbnMucHVzaChcclxuICAgICAgICAgICAgLy8gICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5SZXBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICByZXBvcnRLZXk6IFwiUmVwb3J0LkNvbnRhY3RCb29rXCIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICB0aXRsZTogJ+iBr+e1oeewv1BERidcclxuICAgICAgICAgICAgLy8gICAgfSlcclxuICAgICAgICAgICAgLy8pO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfoga/ntaHnsL9QREYnLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwicGRmLWJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJmYSBmYS1maWxlLXBkZi1vXCIsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vU2VyZW5lMS5Db21tb24uUmVwb3J0SGVscGVyLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHJlcG9ydEtleTogXCJTZXJlbmUxLkNvbnRhY3RCb29rUmVwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5FeHRlbnNpb25zLlJlcG9ydEhlbHBlci5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0S2V5OiBcIlNlcmVuZTEuQ29udGFjdEJvb2tSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9vbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vICAgICAgICB0aGlzLmVkaXRJdGVtKDxDb250YWN0Qm9va1Jvdz57XHJcbiAgICAgICAgLy8gICAgICAgICAgICBDYXNlbm86IHRoaXMuY2FzZW5vKCksXHJcbiAgICAgICAgLy8gICAgICAgIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3U3VibWl0KCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciByZXEgPSB0aGlzLnZpZXcucGFyYW1zIGFzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0O1xyXG4gICAgICAgICAgICByZXEuU29ydCA9IFsnQ2hlY2tib3gnLCAnQWR2aXNlZGF0ZSBkZXNjJ11cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRRdWlja0ZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXNlbm9GaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiQ2FzZW5vXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2FzZW5vRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlbm9GaWx0ZXIuaGFuZGxlciA9IGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snQ2FzZW5vJ10sICdsaWtlJywgYCUke2gudmFsdWV9JWBdLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXNlTm8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZW5vRmlsdGVyLmluaXQgPSB3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHcgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9IHRoaXMuY2FzZU5vO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBBZHZpc2VkYXRlZmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIkFkdmlzZWRhdGVcIik7XHJcbiAgICAgICAgICAgIGlmIChBZHZpc2VkYXRlZmlsdGVyKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIEFkdmlzZWRhdGVmaWx0ZXIuaW5pdCA9IHIgPT4geyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKHIgYXMgU2VyZW5pdHkuRGF0ZUVkaXRvcikudmFsdWUgPSAnJzsgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmREYXRlID0gci5lbGVtZW50Lm5leHRBbGwoXCIucy1EYXRlRWRpdG9yXCIpLmdldFdpZGdldChTZXJlbml0eS5EYXRlRWRpdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlLnZhbHVlID0gJ25vdyc7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgbGV0IENyZWF0ZVVzZXJGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiQ3JlYXRlVXNlclwiKTtcclxuICAgICAgICAgICAgaWYgKENyZWF0ZVVzZXJGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIENyZWF0ZVVzZXJGaWx0ZXIuaW5pdCA9IHogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICh6IGFzIFNlcmVuaXR5LlN0cmluZ0VkaXRvcikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBsZXQgYWNvbCA9IFEuZmlyc3QoY29sdW1ucywgeCA9PiB4LmZpZWxkID09IFwiQWxyZWFkeWtub3dcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWNvbCkge1xyXG4gICAgICAgICAgICAgICAgYWNvbC5mb3JtYXQgPSAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q29udGFjdEJvb2tSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uQWxyZWFkeWtub3cgPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwi5pivXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5BbHJlYWR5a25vdyA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCLlkKZcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRGVsZXRlUm93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8Q29udGFjdEJvb2tSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKENvbnRhY3RCb29rUm93LmRlbGV0ZVBlcm1pc3Npb24pICYmIGl0ZW0uQ2hlY2tib3ggIT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZGVsZXRlLXJvdyBmYSBmYS10cmFzaFwiIHRpdGxlPVwi5Yiq6ZmkXCI+5Yiq6ZmkPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZmEgZmEtdHJhc2hcIiBkaXNhYmxlZCB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSb3dcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IChjdHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IDxDb250YWN0Qm9va1Jvdz5jdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oQ29udGFjdEJvb2tSb3cudXBkYXRlUGVybWlzc2lvbikgJiYgaXRlbS5DaGVja2JveCAhPSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZWRpdC1yb3cgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgZGlzYWJsZWQgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIkVkaXRSZWNvbW1hbmRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICgvKmN0eCovKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGxldCBpdGVtID0gPENvbnRhY3RCb29rUm93PmN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihDb250YWN0Qm9va1Jvdy51cGRhdGVQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93MiBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiB0aXRsZT1cIue3qOi8r+W7uuitsFwiPue3qOi8r+W7uuitsDwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBkaXNhYmxlZCB0aXRsZT1cIue3qOi8r+W7uuitsFwiPue3qOi8r+W7uuitsDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1LFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDk1XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRTbGlja09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBzbGljayA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG4gICAgICAgICAgICBzbGljay5yb3dIZWlnaHQgPSAzNTtcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJlZGl0LXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgQ29udGFjdEJvb2tEaWFsb2dDdXN0b20oKTtcclxuICAgICAgICAgICAgICAgICBkbGcubG9hZEJ5SWRBbmRPcGVuRGlhbG9nKGl0ZW0uT2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZGVsZXRlLXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShcIueiuuWumuimgeWIqumZpOWXjj9cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RCb29rU2VydmljZS5EZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnRpdHlJZDogaXRlbS5PaWRcclxuICAgICAgICAgICAgICAgICAgICB9LCAocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoXCLliKrpmaTmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZWRpdC1yb3cyXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBDb250YWN0Qm9va0RpYWxvZ0N1c3RvbTEoJ3Rlc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkbGcubG9hZEJ5SWRBbmRPcGVuRGlhbG9nKGl0ZW0uT2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIERlcGFydG1lbnRzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPERlcGFydG1lbnRzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIERlcGFydG1lbnRzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBEZXBhcnRtZW50c1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBEZXBhcnRtZW50c1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIERlcGFydG1lbnRzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBEZXBhcnRtZW50c1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBEZXBhcnRtZW50c1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBEZXBhcnRtZW50c1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IERlcGFydG1lbnRzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRGVwYXJ0bWVudHNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxEZXBhcnRtZW50c1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBEZXBhcnRtZW50c0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gRGVwYXJ0bWVudHNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIERlcGFydG1lbnRzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRGVwYXJ0bWVudHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBEZXBhcnRtZW50c1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnBhbmVsKHRydWUpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBRdWVzdGlvbm5haXJlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEVtcFF1ZXN0aW9ubmFpcmVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgLy9wcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgRW1wUXVlc3Rpb25uYWlyZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW50aXR5LkVtcE5vKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCh0cnVlKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wUXVlc3Rpb25uYWlyZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEVtcFF1ZXN0aW9ubmFpcmVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZUNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBFbXBRdWVzdGlvbm5haXJlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRW1wUXVlc3Rpb25uYWlyZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCh0cnVlKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8RW1wbG95ZWVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gRW1wbG95ZWVGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEVtcGxveWVlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRW1wbG95ZWVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEVtcGxveWVlUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgRW1wbG95ZWVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBFbXBsb3llZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEVtcGxveWVlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEVtcGxveWVlQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBFbXBsb3llZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRW1wbG95ZWVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBFbXBsb3llZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEVtcGxveWVlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAvL2J1dHRvbnMuc3BsaWNlKFEuaW5kZXhPZihidXR0b25zLCB4ID0+IHguY3NzQ2xhc3MgPT0gXCJhZGQtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInRvb2wtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5zcGxpY2UoUS5pbmRleE9mKGJ1dHRvbnMsIHggPT4geC5jc3NDbGFzcyA9PSBcInJlZnJlc2gtYnV0dG9uXCIpLCAxKTtcclxuICAgICAgICAgICAgLy9idXR0b25zLnB1c2goXHJcbiAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAvLyAgICAgICAgdGl0bGU6IFEudGV4dChcIkVNUFFVRVNUSU9OTkFJUkVcIiksXHJcbiAgICAgICAgICAgIC8vICAgIGNzc0NsYXNzOiAndGV4dC1ibHVlJyxcclxuICAgICAgICAgICAgLy8gICAgaWNvbjogJ2ZhLXJlZ3VsYXIgZmEtYm9vaycsXHJcbiAgICAgICAgICAgIC8vICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgIGxldCBkbGcgPSBuZXcgRW1wbG95ZWVEaWFsb2coKTtcclxuICAgICAgICAgICAgLy8gICAgICAgIGRsZy5sb2FkTmV3QW5kT3BlbkRpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLylcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IHRoaXMuZ2V0U2VydmljZSgpICsgJy9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLlk6Hlt6VFWENFTFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0VtcGxveWVlUERGJyxcclxuICAgICAgICAgICAgICBjc3NDbGFzczogXCJwZGYtYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgaWNvbjogXCJmYSBmYS1maWxlLXBkZi1vXCIsXHJcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgU2VyZW5lMS5Db21tb24uUmVwb3J0SGVscGVyLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVwb3J0S2V5OiBcIlNlcmVuZTEuRW1wbG95ZWVSZXBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG59KTtcclxucmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBFbXBsb3llZU5hbWVGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiRW1wbG95ZWVOYW1lXCIpO1xyXG4gICAgICAgICAgICBpZiAoRW1wbG95ZWVOYW1lRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZU5hbWVGaWx0ZXIuaGFuZGxlciA9IGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snRW1wbG95ZWVOYW1lJ10sICdsaWtlJywgYCUke2gudmFsdWV9JWBdLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZU5hbWVGaWx0ZXIuaW5pdCA9IGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIChhIGFzIFNlcmVuaXR5LlN0cmluZ0VkaXRvcikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IEVtcGxveWVlSWRGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiRW1wbG95ZWVJZFwiKTtcclxuICAgICAgICAgICAgaWYgKEVtcGxveWVlSWRGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIEVtcGxveWVlSWRGaWx0ZXIuaGFuZGxlciA9IGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snRW1wbG95ZWVJZCddLCAnbGlrZScsIGAlJHtpLnZhbHVlfSVgXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRW1wbG95ZWVJZEZpbHRlci5pbml0ID0gYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGIgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgRGVwdElkRmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIkRlcHRJZFwiKTtcclxuICAgICAgICAgICAgaWYgKERlcHRJZEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgRGVwdElkRmlsdGVyLmhhbmRsZXIgPSBqID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChqLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgai5yZXF1ZXN0LkNyaXRlcmlhID0gU2VyZW5pdHkuQ3JpdGVyaWEuYW5kKFtbJ0RlcHRJZCddLCAnbGlrZScsIGAlJHtqLnZhbHVlfSVgXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEZXB0SWRGaWx0ZXIuaW5pdCA9IGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgKGMgYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgUG9zdFR5cGVGaWx0ZXIgPSBRLnRyeUZpcnN0KGZpbHRlciwgeCA9PiB4LmZpZWxkID09IFwiUG9zdFR5cGVcIik7XHJcbiAgICAgICAgICAgIGlmIChQb3N0VHlwZUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgUG9zdFR5cGVGaWx0ZXIuaGFuZGxlciA9IHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnJlcXVlc3QuQ3JpdGVyaWEgPSBTZXJlbml0eS5Dcml0ZXJpYS5hbmQoW1snUG9zdFR5cGUnXSwgJ2xpa2UnLCBgJSR7di52YWx1ZX0lYF0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFBvc3RUeXBlRmlsdGVyLmluaXQgPSBkID0+IHtcclxuICAgICAgICAgICAgICAgIChkIGFzIFNlcmVuaXR5LlN0cmluZ0VkaXRvcikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHNsaWNrID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHNsaWNrLnJvd0hlaWdodCA9IDM1O1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogKGN0eCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gPEVtcFF1ZXN0aW9ubmFpcmVSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKEVtcFF1ZXN0aW9ubmFpcmVSb3cudXBkYXRlUGVybWlzc2lvbikgfHwgUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oRW1wUXVlc3Rpb25uYWlyZVJvdy5pbnNlcnRQZXJtaXNzaW9uKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGVkaXQtcm93IGZhIGZhLWxpc3QtdWxcIiB0aXRsZT1cIuWToeW3peaKgOiDveWVj+WNt1wiPuWToeW3peaKgOiDveWVj+WNtzwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZyBmYSBmYS1saXN0LXVsXCIgZGlzYWJsZWQgdGl0bGU9XCLlk6Hlt6XmioDog73llY/ljbdcIj7lk6Hlt6XmioDog73llY/ljbc8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTQwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0SXRlbUNzc0NsYXNzKGl0ZW06IERlZmF1bHQuRW1wbG95ZWVSb3csIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBsZXQga2xhc3M6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLkVtcGxveWVlSWQgPT0gbnVsbCB8fCBpdGVtLkVtcGxveWVlTmFtZSA9PSBudWxsIHx8IGl0ZW0uRW1wbG95ZWVFbmdOYW1lID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBrbGFzcyArPSBcIiBudWxsIFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFEudHJpbVRvTnVsbChrbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImVkaXQtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRsZyA9IG5ldyBFbXBRdWVzdGlvbm5haXJlRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW1wUXVlc3Rpb25uYWlyZU9pZDtcclxuICAgICAgICAgICAgICAgIEVtcFF1ZXN0aW9ubmFpcmVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIENyaXRlcmlhOiBbWydFbXBObyddLCAnPScsIGl0ZW0uRW1wbG95ZWVJZF0sXHJcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTsgLy/mib5yZXNwb25zZSDnmoTlsazmgKdcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuRW50aXRpZXMubGVuZ3RoID4gMCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wUXVlc3Rpb25uYWlyZU9pZCA9IHJlc3BvbnNlLkVudGl0aWVzWzBdLk9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGxnLmxvYWRCeUlkQW5kT3BlbkRpYWxvZyhlbXBRdWVzdGlvbm5haXJlT2lkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLmJpbmRUb0RhdGFDaGFuZ2UoZGxnLCB0aGlzLCAocDEsIHAyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGxnID0gbmV3IEVtcFF1ZXN0aW9ubmFpcmVEaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGxnLmxvYWRFbnRpdHlBbmRPcGVuRGlhbG9nKDxFbXBRdWVzdGlvbm5haXJlUm93PnsgRW1wTm86IGl0ZW0uRW1wbG95ZWVJZCwgUURhdGU6IFEuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpLCAneXl5eS9NTS9kZCBISDptbTpzcycpIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXJlbml0eS5TdWJEaWFsb2dIZWxwZXIuYmluZFRvRGF0YUNoYW5nZShkbGcsIHRoaXMsIChwMSwgcDIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCB7IGFzeW5jOiBmYWxzZSB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmVwYWlyRm9ybURldGFpbFJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybURldGFpbFJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNHcmlkRGlhbG9nIGV4dGVuZHMgQ29tbW9uLkdyaWRFZGl0b3JEaWFsb2c8UmVwYWlyRm9ybVJlY29yZHNSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzRm9ybUN1c3RvbS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2VydmljZVR5cGUgOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIE1hdGVyaWFsTm86IHN0cmluZztcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG59IiwiLy8vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvR3JpZEVkaXRvckJhc2UudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAvKiBpbXBvcnQgZmxkID1SZXBhaXJGb3JtUmVjb3Jkc1Jvdy5GaWVsZHMqL1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzR3JpZEVkaXRvciBleHRlbmRzIENvbW1vbi5HcmlkRWRpdG9yQmFzZTxSZXBhaXJGb3JtRGV0YWlsUmVjb3Jkc1Jvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJTZXJ2aWNlQUQuUmVwYWlyRm9ybURldGFpbFJlY29yZHNDdXN0b21cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNHcmlkRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1EZXRhaWxSZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG5cclxuICAgICAgICAvL3B1YmxpYyBzZXJ2aWNlQ29kZTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBBcmVhIDogc3RyaW5nO1xyXG4gICAgICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2VydmljZUNvZGUgPSBRLmdldENvb2tpZShcIlNlcnZpY2VDb2RlXCIpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogXCJEZWxldGVSb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oUmVwYWlyRm9ybVJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbikgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkZWxldGUtcm93ICAgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgZmEgZmEtdHJhc2hcIiBkaXNhYmxlZCB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiA3NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwiRWRpdFJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihSZXBhaXJGb3JtUmVjb3Jkc1Jvdy51cGRhdGVQZXJtaXNzaW9uKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LXJvdyAgIGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgZGlzYWJsZWQgdGl0bGU9XCLnt6jovK9cIj7nt6jovK88L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNzVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2NvbHVtbnMucHVzaChcclxuICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgZmllbGQ6IFwiQ29udGFjdFBlcnNvblJvd1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgLy8gICAgICAgIGZvcm1hdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIHJldHVybiBgPGRpdj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IENvbnRhY3RQZXJzb24tcm93ICBmYSBmYS1waG9uZVwiIHRpdGxlPVwi6IGv57Wh5Lq6XCI+6IGv57Wh5Lq6PC9idXR0b24+PC9kaXY+YDtcclxuICAgICAgICAgICAgLy8gICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICB3aWR0aDogODUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBtaW5XaWR0aDogODUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBtYXhXaWR0aDogODVcclxuICAgICAgICAgICAgLy8gICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTbGlja09wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkT3B0aW9ucyA9IHN1cGVyLmdldFNsaWNrT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZE9wdGlvbnMucm93SGVpZ2h0ID0gNDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ3JpZE9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZWRpdC1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHlEaWFsb2codGhpcy5nZXRJdGVtVHlwZSgpLCBkbGcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gZGxnIGFzIFJlcGFpckZvcm1SZWNvcmRzR3JpZERpYWxvZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uU2F2ZSA9IChvcHQsIGNhbGxiYWNrKSA9PiB7IHRoaXMuc2F2ZShvcHQsIGNhbGxiYWNrKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuU3ViRGlhbG9nSGVscGVyLnRyaWdnZXJEYXRhQ2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdkZWxldGUtcm93JykpIHtcclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0NvbnRyb2xzLkVudGl0eURpYWxvZy5EZWxldGVDb25maXJtYXRpb24nKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50aXR5KGl0ZW1bdGhpcy5nZXRJZFByb3BlcnR5KCldKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2Vsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdDb250YWN0UGVyc29uLXJvdycpKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGxldCBkbGcgPSBuZXcgUHVibGljQmFzaWMuQ29udGFjdFBlcnNvbkN1c3RvbUdyaWREaWFsb2codGhpcy5zZXJ2aWNlQ29kZSwgaXRlbS5QYXRpZW50Tm8sIGl0ZW0uQ2FzZU5vKTtcclxuICAgICAgICAgICAgLy8gICAgZGxnLmxvYWROZXdBbmRPcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgIC8vICAgIC8vbGV0IGRsZyA9IG5ldyBDb250YWN0UGVyc29uR3JpZEN1c3RvbSh0aGlzLnNsaWNrQ29udGFpbmVyLnBhcmVudCgpLCB0aGlzLnNlcnZpY2VDb2RlLCBpdGVtLlBhdGllbnRObyk7XHJcblxyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wcml2YXRlIGF1dG9TaXplO1xyXG5cclxuICAgICAgICAvL3Byb3RlY3RlZCBjcmVhdGVTbGlja0dyaWQoKTogU2xpY2suR3JpZCB7XHJcbiAgICAgICAgLy8gICAgbGV0IGdyaWQgPSBzdXBlci5jcmVhdGVTbGlja0dyaWQoKTtcclxuICAgICAgICAvLyAgICB0aGlzLmF1dG9TaXplID0gbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpOyAvLyAqKiogSWYgeW91IHdhbnQgdG8gbWFrZSBpdCBhdXRvcmVzaXplIHdoZW4gZ3JpZCBpcyBsb2FkZWQsIHVzZTogbmV3IFNsaWNrLkF1dG9Db2x1bW5TaXplKHRydWUpO1xyXG4gICAgICAgIC8vICAgIGdyaWQucmVnaXN0ZXJQbHVnaW4odGhpcy5hdXRvU2l6ZSk7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIGdyaWQ7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIC8vICoqKiBSZXNpemVzIHRoZSBjb2x1bW5zIGFmdGVyIGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIGdyaWQgKGV4LiBDb2x1bW4gUGlja2VyKSAqXHJcbiAgICAgICAgLy9wcm90ZWN0ZWQgbWFya3VwUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gICAgc3VwZXIubWFya3VwUmVhZHkoKTtcclxuICAgICAgICAvLyAgICBpZiAodGhpcy5hdXRvU2l6ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMuYXV0b1NpemUucmVzaXplQWxsQ29sdW1ucygpO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxSZXBhaXJGb3JtUmVjb3Jkc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBSZXBhaXJGb3JtUmVjb3Jkc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcGFpckZvcm1SZWNvcmRzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UmVwYWlyRm9ybVJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVwYWlyRm9ybVJlY29yZHNEaWFsb2dDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8UmVwYWlyRm9ybVJlY29yZHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNGb3JtQ3VzdG9tLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUmVwYWlyRm9ybVJlY29yZHNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBhaXJGb3JtUmVjb3Jkc0dyaWRDdXN0b20gZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJlcGFpckZvcm1SZWNvcmRzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzQ29sdW1uc0N1c3RvbS5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc0RpYWxvZ0N1c3RvbTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUmVwYWlyRm9ybVJlY29yZHNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJlcGFpckZvcm1SZWNvcmRzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFF1aWNrRmlsdGVycygpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBSZXBhaXJFbXBJZEZpbHRlciA9IFEudHJ5Rmlyc3QoZmlsdGVyLCB4ID0+IHguZmllbGQgPT0gXCJSZXBhaXJFbXBJZFwiKTtcclxuICAgICAgICAgICAgaWYgKFJlcGFpckVtcElkRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBSZXBhaXJFbXBJZEZpbHRlci5pbml0ID0geiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHogYXMgU2VyZW5pdHkuU3RyaW5nRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBBZHZpc2VkYXRlZmlsdGVyID0gUS50cnlGaXJzdChmaWx0ZXIsIHggPT4geC5maWVsZCA9PSBcIlJlcGFpckRhdGVcIik7XHJcbiAgICAgICAgICAgIGlmIChBZHZpc2VkYXRlZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBBZHZpc2VkYXRlZmlsdGVyLmluaXQgPSByID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAociBhcyBTZXJlbml0eS5EYXRlRWRpdG9yKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kRGF0ZSA9IHIuZWxlbWVudC5uZXh0QWxsKFwiLnMtRGF0ZUVkaXRvclwiKS5nZXRXaWRnZXQoU2VyZW5pdHkuRGF0ZUVkaXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFNsaWNrT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHNsaWNrID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHNsaWNrLnJvd0hlaWdodCA9IDM1O1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiRGVsZXRlUm93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8UmVwYWlyRm9ybVJlY29yZHNSb3c+IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihSZXBhaXJGb3JtUmVjb3Jkc1Jvdy5kZWxldGVQZXJtaXNzaW9uKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGRlbGV0ZS1yb3cgZmEgZmEtdHJhc2hcIiB0aXRsZT1cIuWIqumZpFwiPuWIqumZpDwvYnV0dG9uPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZhIGZhLXRyYXNoXCIgZGlzYWJsZWQgdGl0bGU9XCLliKrpmaRcIj7liKrpmaQ8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA4MCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA4MFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJFZGl0Um93XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAoY3R4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSA8UmVwYWlyRm9ybVJlY29yZHNSb3c+Y3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFJlcGFpckZvcm1SZWNvcmRzUm93LnVwZGF0ZVBlcm1pc3Npb24pIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGVkaXQtcm93IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGRpc2FibGVkIHRpdGxlPVwi57eo6LyvXCI+57eo6LyvPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogODAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogODBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJlZGl0LXJvd1wiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkbGcgPSBuZXcgUmVwYWlyRm9ybVJlY29yZHNEaWFsb2dDdXN0b20oKTtcclxuICAgICAgICAgICAgICAgIGRsZy5sb2FkQnlJZEFuZE9wZW5EaWFsb2coaXRlbS5PaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlN1YkRpYWxvZ0hlbHBlci5iaW5kVG9EYXRhQ2hhbmdlKGRsZywgdGhpcywgKHAxLCBwMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJkZWxldGUtcm93XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFwi56K65a6a6KaB5Yiq6Zmk5ZeOP1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVwYWlyRm9ybVJlY29yZHNTZXJ2aWNlLkRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGl0eUlkOiBpdGVtLk9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhcIuWIqumZpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgICAgIFxyXG5cclxuIiwiXHJcbm5hbWVzcGFjZSBTZXJlbmUxLkRlZmF1bHQge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNwZWNpYWxDYWxsaW5nTG9naWNzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFNwZWNpYWxDYWxsaW5nTG9naWNzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFNlcmVuZTEuRGVmYXVsdCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU3BlY2lhbENhbGxpbmdMb2dpY3NHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxTcGVjaWFsQ2FsbGluZ0xvZ2ljc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNwZWNpYWxDYWxsaW5nTG9naWNzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU3BlY2lhbENhbGxpbmdMb2dpY3NSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTcGVjaWFsQ2FsbGluZ0xvZ2ljc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU2VyZW5lMS5EZWZhdWx0IHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5wYW5lbCh0cnVlKVxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRHluYW1pY0dyaWRQYW5lbDxUSXRlbSwgVEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5EYXRhR3JpZDxUSXRlbSxhbnk+PiBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxhbnk+IHtcclxuICAgICAgXHJcbiAgICAgICAgcHVibGljIGdyaWQ6IFNlcmVuaXR5LldpZGdldDxhbnk+O1xyXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nOyAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRGlhbG9ncy5EeW5hbWljR3JpZFBhbmVsXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkRpYWxvZ09wZW4oKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kaWFsb2dUaXRsZSA9ICh0aGlzLmdyaWQgYXMgVEdyaWQpLmdldFRpdGxlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dUaXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nVGl0bGUgPSB0aGlzLmVsZW1lbnQuZmluZChcIi50aXRsZS10ZXh0XCIpWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5maW5kKFwiLnRpdGxlLXRleHRcIikubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5maW5kKFwiLnRpdGxlLXRleHRcIilbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgQWxyZWFkeUtub3dFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzAnLCBcIuWQplwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIuaYr1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgQXJlYUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi6Iqx6JOu5biCXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi56eA5p6X6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5ZCJ5a6J6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwi5aO96LGQ6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNScsIFwi6bOz5p6X6YSJXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNicsIFwi6JCs5qau6YSJXCIpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEJvZHlFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5SYWRpb0J1dHRvbkVkaXRvciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdD86IFNlcmVuaXR5LlJhZGlvQnV0dG9uRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFJhZGlvKCdGJywgXCLlo6/noqlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmFkaW8oJ1QnLCBcIue6lue0sFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRSYWRpbygnTScsIFwi5Lit562JXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJMb29rVXBFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFNlcmVuaXR5LlNlbGVjdDJFZGl0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lciwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2VyZW5lMS5BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS5MaXN0KHt9LCAocikgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICBpZiAoci5Ub3RhbENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgJC5lYWNoKHIuRW50aXRpZXMsIChpLCBtKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24obS5Vc2VySWQudG9TdHJpbmcoKSwgbS5EaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAvL30sIHsgYXN5bmM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBTZXJlbmUxLkFkbWluaXN0cmF0aW9uLlVzZXJSb3cuZ2V0TG9va3VwKCkuaXRlbXMuZm9yRWFjaCgobSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24obS5Vc2VySWQudG9TdHJpbmcoKSwgKG0uRGlzcGxheU5hbWUgPz8gXCLmnKroqK3lrppcIikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi5ZyL6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi5Y+w6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5aSq6a2v6Zaj6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNCcsIFwi6Zi/576O5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNScsIFwi5biD6L6y5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNicsIFwi5o6S54Gj5peP6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignNycsIFwi5Y2w5bC86KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignOCcsIFwi6LaK5Y2X6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignOScsIFwi6Iux6KqeXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMTAnLCBcIuaXpeiqnlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgTGV2ZWxFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIui6q+W/g+manOekmeiok+e3tFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzInLCBcIuWkseaZuuiok+e3tFwiKTtcclxuICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvb2tVcEVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogU2VyZW5pdHkuU2VsZWN0MkVkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgU2VyZW5lMS5EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YVNlcnZpY2UuTGlzdCh7fSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLlRvdGFsQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHIuRW50aXRpZXMsIChpLCBtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKG0uQ2FzZU5vLCBtLlBhdGllbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgeyBhc3luYzogZmFsc2UgfSk7XHJcbiAgICAgICAgLy8gICAgU2VyZW5lMS5EZWZhdWx0LkNhc2VTZXJ2aWNlRGF0YVJvdy5nZXRMb29rdXAoKS5pdGVtcy5mb3JFYWNoKChtLCBpKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMuYWRkT3B0aW9uKG0uQ2FzZU5vLCAobS5Sb2NJZCA/PyBcIuacquioreWumlwiKSk7XHJcbiAgICAgICAgLy8gICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5FZGl0b3Ige1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBQaGFzZUVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignQScsIFwi5LiK5Y2IXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignUCcsIFwi5LiL5Y2IXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignVCcsIFwi5YWo5pelXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignTicsIFwi5aSc6ZaTMTg6MDAtMjA6MDBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNleEVkaXRvciBleHRlbmRzIFNlcmVuaXR5LlJhZGlvQnV0dG9uRWRpdG9ye1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5SYWRpb0J1dHRvbkVkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRSYWRpbygnTScsIFwiICAgIOeUtyAgXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFJhZGlvKCdGJywgXCIgICAg5aWzICBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLkVkaXRvciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXR1c0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LlNlbGVjdDJFZGl0b3I8YW55LCBhbnk+e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ/OiBTZXJlbml0eS5TZWxlY3QyQ29tbW9uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMScsIFwi5pWs6ICBXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMicsIFwi6YGO6JmfXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9wdGlvbignMycsIFwi5qqi5b6M5YaN6Ki6XCIpOyAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuRWRpdG9yIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgV29ya1llYXJFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TZWxlY3QyRWRpdG9yPGFueSwgYW55PntcclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSwgb3B0PzogU2VyZW5pdHkuU2VsZWN0MkNvbW1vbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRPcHRpb24oJzEnLCBcIjLlubRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKCcyJywgXCIzLTXlubRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKCczJywgXCI2LTnlubRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKCc0JywgXCI+MTDlubRcIik7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxMb2dpblJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExvZ2luRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTG9naW5Gb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZSA9ICdzZXJlbml0eSc7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Vc2VybmFtZS52YWx1ZSA9ICdhZG1pbic7XHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHAtNFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9pbWFnZXMvc2VyZW5pdHktbG9nby13LTEyOC5wbmdcIil9XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBwLTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHZhcigtLXMtc2lkZWJhci1iYW5kLWJnKVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+IFNlcmVuZTFcclxuICAgIDwvaDI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInMtUGFuZWwgcC00XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktNFwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Mb2dpblRvWW91ckFjY291bnRcIil9PC9oNT5cclxuICAgICAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LWVuZCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIke1EucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLkZvcmdvdFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9Mb2dpbkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS0zIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25JbkJ1dHRvblwiKX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9TaWduVXAnKX1cIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uU2lnblVwQnV0dG9uXCIpfTwvYT5cclxuICAgIDwvZGl2PiAgIFxyXG5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPENoYW5nZVBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2hhbmdlUGFzc3dvcmRGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBDaGFuZ2VQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgQ2hhbmdlUGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLncoJ0NvbmZpcm1QYXNzd29yZCcsIFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yKS52YWx1ZS5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEuZm9ybWF0KFEudGV4dCgnVmFsaWRhdGlvbi5NaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoJyksIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0NoYW5nZVBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInMtUGFuZWxcIj5cclxuICAgIDxoMyBjbGFzcz1cInBhZ2UtdGl0bGUgbWItNCB0ZXh0LWNlbnRlclwiPiR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5Gb3JtVGl0bGVcIil9PC9oMz5cclxuICAgIDxmb3JtIGlkPVwifl9Gb3JtXCIgYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB4LWZpZWxkIG10LTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fU3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuU3VibWl0QnV0dG9uXCIpfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU2VyZW5lMS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuICBjbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFNlcmVuZTEuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxSZXNldFBhc3N3b3JkUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUmVzZXRQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFJlc2V0UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFJlc2V0UGFzc3dvcmRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuVG9rZW4gPSB0aGlzLmJ5SWQoJ1Rva2VuJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1Jlc2V0UGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTZXJlbmUxLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxTaWduVXBSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaWduVXBGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBTaWduVXBGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNpZ25VcEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybUVtYWlsLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1FbWFpbC52YWx1ZSAhPT0gdGhpcy5mb3JtLkVtYWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5FbWFpbENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGxheU5hbWU6IHRoaXMuZm9ybS5EaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlNpZ25VcC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==