using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FindMyStuff.Data.Models
{
    public partial class AppConfigurationDataBase
    {
        [Key]
        public Guid Id { get; set; }
        public bool IsActive { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string JsonValue { get; set; }
    }
}
