using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindMyStuff.Data.Models
{
    public partial class Person
    {
        public Person()
        {
            Id = Guid.NewGuid();
            DocumentXperson = new HashSet<DocumentXperson>();
        }
        [Key]
        public Guid Id { get; set; }
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
