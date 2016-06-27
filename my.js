    function loadXMLDoc(filename) 
    {
        if (window.ActiveXObject) 
        {
             xhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } else
        {
             xhttp = new XMLHttpRequest();
        }
        
        xhttp.open("GET", filename, false);
        xhttp.send("");
        return xhttp.responseXML;
     
     }

     function applyXSLT(){

         xml = loadXMLDoc("testing.xml");
         xsl = loadXMLDoc("xul-bootstrap.xsl");
         if (document.implementation && document.implementation.createDocument)
         {
            xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            resultDocument = xsltProcessor.transformToDocument(xml);
            //downloadDoc(resultDocument.documentElement.innerHTML);
            download(resultDocument.documentElement.innerHTML,"htmlFromXSLT.html","text/html");
            //document.getElementById('testdiv').appendChild(resultDocument);
         }

     }

     function downloadDoc(result)
     {
         return 'data:text/html;base64,' + utf8_to_b64(result);
            
     }

     function utf8_to_b64( str )
     {
         return window.btoa(unescape(encodeURIComponent( str )));
     }