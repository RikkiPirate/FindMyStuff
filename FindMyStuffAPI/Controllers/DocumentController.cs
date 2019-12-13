using System.Collections.Generic;
using FindMyStuff.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace FindMyStuff.API.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    public class DocumentController : Controller
    {
        private readonly IMongoCollection<Document> _documentsCollection;

        public DocumentController(IFindMyStuffDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _documentsCollection = database.GetCollection<Document>(settings.FindMyStuffCollectionName);
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult<List<Document>> Get()
        {
            return _documentsCollection.Find(doc => true).ToList();
        }
    }
}