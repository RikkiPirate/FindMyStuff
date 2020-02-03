using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindMyStuff.Data.Models
{
    public partial class DocumentXperson
    {
        public DocumentXperson()
        {
            Id = Guid.NewGuid();
        }
        [Key]
        public Guid Id { get; set; }
        [ForeignKey("Person")]
        public Guid PersonId { get; set; }
        [ForeignKey("Document")]
        public Guid DocumentId { get; set; }
        public bool? WasFound { get; set; }
        public DateTime? DateFound { get; set; }
        public bool? Wasloosed { get; set; }
        public DateTime? DateLost { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitud { get; set; }
        

        public virtual Document Document { get; set; }
        public virtual Person Person { get; set; }
    }
}
