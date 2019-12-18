using System;
using System.Collections.Generic;

namespace FindMyStuff.Data.Models
{
    public partial class DocumentType
    {
        public DocumentType()
        {
            Document = new HashSet<Document>();
        }

        public int Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Document> Document { get; set; }
    }
}
