using System;
using System.Collections.Generic;

namespace FindMyStuff.Data.Models
{
    public partial class Person
    {
        public Person()
        {
            DocumentXperson = new HashSet<DocumentXperson>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public virtual ICollection<DocumentXperson> DocumentXperson { get; set; }
    }
}
