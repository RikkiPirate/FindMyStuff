using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindMyStuff.Data.Models
{
    public partial class Document
    {
        public Document()
        {
            Id = Guid.NewGuid();
            DocumentXperson = new HashSet<DocumentXperson>();
        }
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string DocNumber { get; set; }
        [Required]
        public string DocName { get; set; }
        [ForeignKey("DocumentType")]
        [Required]
        public Guid DocumentTypeId { get; set; }
        public string Picture { get; set; }

        public virtual DocumentType DocumentType { get; set; }
        public virtual ICollection<DocumentXperson> DocumentXperson { get; set; }
    }
}
