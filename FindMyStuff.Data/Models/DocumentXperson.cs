using System;
using System.Collections.Generic;

namespace FindMyStuff.Data.Models
{
    public partial class DocumentXperson
    {
        public int Id { get; set; }
        public long PersonId { get; set; }
        public long DocumentId { get; set; }
        public bool? WasFound { get; set; }
        public DateTime? DateFound { get; set; }
        public bool? Wasloosed { get; set; }
        public DateTime? DateLost { get; set; }

        public virtual Document Document { get; set; }
        public virtual Person Person { get; set; }
    }
}
