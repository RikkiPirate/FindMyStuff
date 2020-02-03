using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FindMyStuff.Data.Migrations
{
    public partial class CreationDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppConfigurationDataBase",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Value = table.Column<string>(nullable: true),
                    JsonValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppConfigurationDataBase", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DocumentType",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    LastName = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Email = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    Phone = table.Column<string>(unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Document",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DocNumber = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    DocName = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    DocumentTypeId = table.Column<Guid>(nullable: false),
                    picture = table.Column<string>(unicode: false, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Document", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Document_DocumentType",
                        column: x => x.DocumentTypeId,
                        principalTable: "DocumentType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DocumentXPerson",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    PersonId = table.Column<Guid>(nullable: false),
                    DocumentId = table.Column<Guid>(nullable: false),
                    WasFound = table.Column<bool>(nullable: true),
                    DateFound = table.Column<DateTime>(type: "date", nullable: true),
                    Wasloosed = table.Column<bool>(nullable: true),
                    DateLost = table.Column<DateTime>(type: "date", nullable: true),
                    Latitude = table.Column<decimal>(type: "decimal(12,9)", nullable: true),
                    Longitud = table.Column<decimal>(type: "decimal(12,9)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentXPerson", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DocumentXPerson_Document",
                        column: x => x.DocumentId,
                        principalTable: "Document",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DocumentXPerson_Person",
                        column: x => x.PersonId,
                        principalTable: "Person",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AppConfigurationDataBase",
                columns: new[] { "Id", "IsActive", "JsonValue", "Name", "Value" },
                values: new object[] { new Guid("4086794f-e470-46f6-ba3d-a9534ff0ef51"), true, null, "ApiGoogleMaps", "AIzaSyDlHVTgZ4eMfXiMIRy6VUn_yIAlnKc2JEs" });

            migrationBuilder.InsertData(
                table: "DocumentType",
                columns: new[] { "Id", "Type" },
                values: new object[] { new Guid("b94c602b-fa28-4580-abe7-215e06a4c31a"), "Passport" });

            migrationBuilder.InsertData(
                table: "DocumentType",
                columns: new[] { "Id", "Type" },
                values: new object[] { new Guid("7d1d24e7-a1f5-4347-94ab-8b1d53ab86da"), "Driver License" });

            migrationBuilder.CreateIndex(
                name: "IX_Document_DocumentTypeId",
                table: "Document",
                column: "DocumentTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentXPerson_DocumentId",
                table: "DocumentXPerson",
                column: "DocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentXPerson_PersonId",
                table: "DocumentXPerson",
                column: "PersonId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppConfigurationDataBase");

            migrationBuilder.DropTable(
                name: "DocumentXPerson");

            migrationBuilder.DropTable(
                name: "Document");

            migrationBuilder.DropTable(
                name: "Person");

            migrationBuilder.DropTable(
                name: "DocumentType");
        }
    }
}
