using Serene1.Administration.Entities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[ContactBook]")]
    [DisplayName("Contact Book"), InstanceName("Contact Book")]
    [ReadPermission(DefaultPermissionKeys.ContactBook.View)]
    [InsertPermission(DefaultPermissionKeys.ContactBook.Add)]
    [ModifyPermission(DefaultPermissionKeys.ContactBook.Modify)]
    [DeletePermission(DefaultPermissionKeys.ContactBook.Delete)]


    public sealed class ContactBookRow : Row<ContactBookRow.RowFields>, IIdRow, INameRow, ILoggingRow
    {
        [DisplayName("Oid"), Column("OID"), Identity, IdProperty]
        public int? Oid
        {
            get => fields.Oid[this];
            set => fields.Oid[this] = value;
        }

        [DisplayName("Caseno"), Column("CASENO"), Size(50), NotNull, QuickSearch, NameProperty]
        [Editor.LookUpEditor]
        public string Caseno
        {
            get => fields.Caseno[this];
            set => fields.Caseno[this] = value;
        }

        [DisplayName("Alreadyknow"), Column("ALREADYKNOW")]
        [Editor.AlreadyKnowEditor]
        public int? Alreadyknow
        {
            get => fields.Alreadyknow[this];
            set => fields.Alreadyknow[this] = value;
        }
        
        

        [DisplayName("UpdateUser"), Column("UpdateUser"), ForeignKey(typeof(UserRow), "UserId"), LeftJoin("d")]
        public int? UpdateUser
        {
            get => fields.Alreadyknow[this];
            set => fields.Alreadyknow[this] = value;
        }

        [DisplayName("CreateUser"), Column("CreateUser"), ForeignKey(typeof(UserRow), "UserId"), LeftJoin("u"),LookupInclude
           ]
        [Editor.CreateUserLookUpEditor]
        public int? CreateUser
        {
            get => fields.Alreadyknow[this];
            set => fields.Alreadyknow[this] = value;
        }

        [DisplayName("CreateDate"), Column("CreateDate")]
        public DateTime? CreateDate
        {
            get => fields.Advisedate[this];
            set => fields.Advisedate[this] = value;
        }

        [DisplayName("UpdateDate"), Column("UpdateDate")]
        public DateTime? UpdateDate
        {
            get => fields.Advisedate[this];
            set => fields.Advisedate[this] = value;
        }
       

        [DisplayName("Advise"), Column("ADVISE"), Size(50)]
        public string Advise
        {
            get => fields.Advise[this];
            set => fields.Advise[this] = value;
        }

        [DisplayName("Advisedate"), Column("ADVISEDATE"), NotNull]
        [DefaultValue("now")]
        public DateTime? Advisedate
        {
            get => fields.Advisedate[this];
            set => fields.Advisedate[this] = value;
        }

        [DisplayName("Alreadyknowexpre")]
        [Expression("Case t0.ALREADYKNOW  when  0 then N'否'  when  1 then N'是'   end ")]
        public string AlreadyknowExpre { get; set; }

        [Origin("u", Property = "DisplayName"),LookupInclude]
        [Editor.CreateUserLookUpEditor]
        public string CreateUserName
        {
            get => fields.CreateUserName[this];
            set => fields.CreateUserName[this] = value;
        }
        [Origin("d", Property = "DisplayName")]
        public string UpdateUserName
        {
            get => fields.UpdateUserName[this];
            set => fields.UpdateUserName[this] = value;
        }
        [DisplayName("Checkbox"), Column("Checkbox")]
        public Boolean? Checkbox
        {
            get => fields.Checkbox[this];
            set => fields.Checkbox[this] = value;
        }

        Field IUpdateLogRow.UpdateUserIdField => Fields.UpdateUser;

        DateTimeField IUpdateLogRow.UpdateDateField => Fields.UpdateDate;

        Field IInsertLogRow.InsertUserIdField => Fields.CreateUser;

        DateTimeField IInsertLogRow.InsertDateField => Fields.CreateDate;

        public ContactBookRow()
            : base()
        {
        }

        public ContactBookRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Oid;
            public StringField Caseno;
            public Int32Field Alreadyknow;
            public StringField AlreadyknowExpre;
            public StringField Advise;
            public DateTimeField Advisedate;
            public Int32Field CreateUser;
            public DateTimeField CreateDate;
            public Int32Field UpdateUser;
            public DateTimeField UpdateDate;
            public StringField CreateUserName;
            public StringField UpdateUserName;
            public BooleanField Checkbox;
        }
    }
}
