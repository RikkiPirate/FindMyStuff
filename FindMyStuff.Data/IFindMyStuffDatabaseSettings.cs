using System;
using System.Collections.Generic;
using System.Text;

namespace FindMyStuff.Data
{
    public interface IFindMyStuffDatabaseSettings
    {
        string FindMyStuffCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
