using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Configuration;

namespace FindMyStuff.Data.Models
{
    public partial class FindMyStuffDBContext : DbContext
    {

        public FindMyStuffDBContext(DbContextOptions<FindMyStuffDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Document> Document { get; set; }
        public virtual DbSet<DocumentType> DocumentType { get; set; }
        public virtual DbSet<DocumentXperson> DocumentXperson { get; set; }
        public virtual DbSet<Person> Person { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //if (!optionsBuilder.IsConfigured)
            //{
            //    optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=FindMyStuffDB;Trusted_Connection=True;");
            //}
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Document>(entity =>
            {
                entity.Property(e => e.DocName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DocNumber)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Picture)
                    .HasColumnName("picture")
                    .IsUnicode(false);

                entity.HasOne(d => d.DocumentType)
                    .WithMany(p => p.Document)
                    .HasForeignKey(d => d.DocumentTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Document_DocumentType");
            });

            modelBuilder.Entity<DocumentType>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DocumentXperson>(entity =>
            {
                entity.ToTable("DocumentXPerson");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DateFound).HasColumnType("date");

                entity.Property(e => e.DateLost).HasColumnType("date");

                entity.HasOne(d => d.Document)
                    .WithMany(p => p.DocumentXperson)
                    .HasForeignKey(d => d.DocumentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentXPerson_Document");

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.DocumentXperson)
                    .HasForeignKey(d => d.PersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentXPerson_Person");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }


}
