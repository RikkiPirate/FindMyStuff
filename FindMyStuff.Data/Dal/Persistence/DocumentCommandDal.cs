using System;
using System.Linq;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Models;

namespace FindMyStuff.Data.Dal.Persistence
{
    public class DocumentCommandDal : IDocumentCommandDal
    {
        private readonly FindMyStuffDBContext _dbContext;

        public DocumentCommandDal(FindMyStuffDBContext findMyStuffDbContext)
        {
            _dbContext = findMyStuffDbContext;
        }

        public Document CreateDocument(Document document)
        {

            var x = _dbContext.Document.FirstOrDefault(d =>
                string.Equals(d.DocNumber, document.DocNumber, StringComparison.OrdinalIgnoreCase));
            if (x != null) return x;
            var newDocument = new Document
            {
                DocName = document.DocName,
                DocNumber = document.DocNumber,
                Picture = document.Picture,
                DocumentType = document.DocumentType
            };
            _dbContext.Document.Add(document);
            _dbContext.SaveChanges();
            return x;
        }

        public Document UpdateDocument(Document document)
        {

            var x = _dbContext.Document.FirstOrDefault();
            if (x != null)
            {
                x.DocName = !string.Equals(x.DocName, document.DocName, StringComparison.Ordinal) ? document.DocName : x.DocName;
                x.DocumentType = document.DocumentType;
                x.Picture = !string.Equals(x.Picture, document.Picture, StringComparison.Ordinal) ? document.Picture : x.Picture;

                _dbContext.Document.Add(document);
                _dbContext.SaveChanges();
            }
            return x;
        }
    }
}