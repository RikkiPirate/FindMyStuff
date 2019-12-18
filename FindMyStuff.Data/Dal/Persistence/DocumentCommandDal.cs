using System;
using System.Linq;
using FindMyStuff.Data.Dal.Interfaces;
using FindMyStuff.Data.Models;

namespace FindMyStuff.Data.Dal.Persistence
{
    public class DocumentCommandDal : IDocumentCommandDal
    {
        public Document CreateDocument(Document document)
        {
            FindMyStuffDBContext dbContext = new FindMyStuffDBContext();
            var x = dbContext.Document.First();
            if (x == null)
            {
                dbContext.Document.Add(document);
                dbContext.SaveChanges();
            }
            return x;
        }

        public Document UpdateDocument(Document document)
        {
            FindMyStuffDBContext dbContext = new FindMyStuffDBContext();
            var x = dbContext.Document.First();
            if (x != null)
            {
                x.DocName = !string.Equals(x.DocName, document.DocName, StringComparison.Ordinal) ? document.DocName : x.DocName;
                x.DocumentType = document.DocumentType;
                x.Picture = !string.Equals(x.Picture, document.Picture, StringComparison.Ordinal) ? document.Picture : x.Picture;

                dbContext.Document.Add(document);
                dbContext.SaveChanges();
            }
            return x;
        }
    }
}