using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FindMyStuff.Data.Models
{
    public partial class DocumentType
    {
        public DocumentType()
        {
            Id=  Guid.NewGuid();
            Document = new HashSet<Document>();
        }
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Type { get; set; }

        public virtual ICollection<Document> Document { get; set; }
    }
}
