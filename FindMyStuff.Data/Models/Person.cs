using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FindMyStuff.Data.Models
{
    public partial class Person
    {
        public Person()
        {
            DocumentXperson = new HashSet<DocumentXperson>();
        }
        [Key]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }

        public virtual ICollection<DocumentXperson> DocumentXperson { get; set; }
    }
}
