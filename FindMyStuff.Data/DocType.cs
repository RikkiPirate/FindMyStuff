using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson.Serialization.Attributes;

namespace FindMyStuff.Data
{
    public class DocType
    {
        [BsonElement("Type")]
        public string Type { get; set; }
    }
}
