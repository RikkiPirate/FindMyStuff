using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FindMyStuff.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DocumentType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
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
                    Id = table.Column<long>(nullable: false),
                    Name = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    LastName = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    Email = table.Column<string>(unicode: false, maxLength: 50, nullable: true),
                    Phone = table.Column<string>(unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Document",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DocNumber = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    DocName = table.Column<string>(unicode: false, maxLength: 50, nullable: false),
                    DocumentTypeId = table.Column<int>(nullable: false),
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
                    Id = table.Column<int>(nullable: false),
                    PersonId = table.Column<long>(nullable: false),
                    DocumentId = table.Column<long>(nullable: false),
                    WasFound = table.Column<bool>(nullable: true),
                    DateFound = table.Column<DateTime>(type: "date", nullable: true),
                    Wasloosed = table.Column<bool>(nullable: true),
                    DateLost = table.Column<DateTime>(type: "date", nullable: true)
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
