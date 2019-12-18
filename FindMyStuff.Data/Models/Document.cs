using System;
using System.Collections.Generic;

namespace FindMyStuff.Data.Models
{
    public partial class Document
    {
        public Document()
        {
            DocumentXperson = new HashSet<DocumentXperson>();
        }

        public long Id { get; set; }
        public string DocNumber { get; set; }
        public string DocName { get; set; }
        public int DocumentTypeId { get; set; }
        public string Picture { get; set; }

        public virtual DocumentType DocumentType { get; set; }
        public virtual ICollection<DocumentXperson> DocumentXperson { get; set; }
    }
}
