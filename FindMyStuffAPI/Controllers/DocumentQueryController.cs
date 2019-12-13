using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyStuff.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace FindMyStuff.API.Controllers
{
    [Route("api/query/[controller]")]
    [ApiController]
    public class DocumentQueryController : ControllerBase
    {
        private readonly IMongoCollection<Document> _documentsCollection;

        public DocumentQueryController(IFindMyStuffDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _documentsCollection = database.GetCollection<Document>(settings.FindMyStuffCollectionName);
        }

        [HttpGet]
        public ActionResult<List<Document>> Get()
        {
            return _documentsCollection.Find(doc => true).ToList();
        }

        [HttpGet("{docNumber}", Name = "docNumber")]
        public ActionResult<Document> Get(string docNumber)
        {
            return _documentsCollection.Find(doc => doc.DocNumber == docNumber).FirstOrDefault();
        }
    }
}