using System.Collections.Generic;
using System.Linq;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace FindMyStuff.Data.Dal.Persistence
{
    public class DocumentQueryDal : IDocumentQueryDal
    {
        private FindMyStuffDBContext _dbContext;

        public DocumentQueryDal(FindMyStuffDBContext findMyStuffDbContext)
        {
            _dbContext=  findMyStuffDbContext;
        }

        public List<Document> GetDocumentsList()
        {
            return _dbContext.Document.ToList();
        }

        public Document GetDocumentItem(Document doc)
        {
            var x= _dbContext.Document
                .Include(dxp=>dxp.DocumentXperson)
                .ThenInclude(p=>p.Person).FirstOrDefault(d => d.DocNumber==doc.DocNumber);
            return x;
        }

        public List<DocumentType> GetDocumentTypesList()
        {
            return _dbContext.DocumentType.ToList();
        }
    }
}
