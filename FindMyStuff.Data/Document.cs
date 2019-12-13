using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FindMyStuff.Data
{
    public class Document 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("DocNumber")]
        public string DocNumber { get; set; }
        [BsonElement("DocName")]
        public string DocName { get; set; }
        [BsonElement("Phone")]
        public string Phone { get; set; }
        [BsonElement("Email")]
        public string Email { get; set; }
        [BsonElement("DocType")]
        public DocType DocType { get; set; }
    }
}