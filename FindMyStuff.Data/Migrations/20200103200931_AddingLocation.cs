using Microsoft.EntityFrameworkCore.Migrations;

namespace FindMyStuff.Data.Migrations
{
    public partial class AddingLocation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Latitude",
                table: "DocumentXPerson",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Longitud",
                table: "DocumentXPerson",
                nullable: true);

            //migrationBuilder.InsertData(
            //    table: "DocumentType",
            //    columns: new[] { "Id", "Type" },
            //    values: new object[] { 1, "Passport" });

            migrationBuilder.InsertData(
                table: "DocumentType",
                columns: new[] { "Id", "Type" },
                values: new object[] { 2, "Driver License" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DocumentType",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "DocumentType",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "DocumentXPerson");

            migrationBuilder.DropColumn(
                name: "Longitud",
                table: "DocumentXPerson");
        }
    }
}
