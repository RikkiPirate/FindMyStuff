using System.Collections.Generic;
using System.Linq;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Models;

namespace FindMyStuff.Data.Dal.Persistence
{
    public class DocumentQueryDal : IDocumentQueryDal
    {
        private FindMyStuffDBContext _dbContext;

        public DocumentQueryDal()
        {
            _dbContext= new FindMyStuffDBContext();
        }

        public List<Document> GetDocumentsList()
        {
            var x = _dbContext.Document.ToList();
            return x;
        }

        public Document GetDocumentItem(Document doc)
        {
            return _dbContext.Document.FirstOrDefault(d=>d.DocNumber==doc.DocNumber);
        }
    }
}
