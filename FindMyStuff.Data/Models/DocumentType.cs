using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FindMyStuff.Data.Models
{
    public partial class DocumentType
    {
        public DocumentType()
        {
            Document = new HashSet<Document>();
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Type { get; set; }

        public virtual ICollection<Document> Document { get; set; }
    }
}
