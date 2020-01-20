using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindMyStuff.Data.Models
{
    public partial class DocumentXperson
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Person")]
        public long PersonId { get; set; }
        [ForeignKey("Document")]
        public long DocumentId { get; set; }
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
