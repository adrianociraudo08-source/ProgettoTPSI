
let personaggi = 
[
    { nome: "Albert Einstein", anno: 1879, ambito: "FISICA", sesso: "MASCHIO", nobel: true },
    { nome: "Marie Curie", anno: 1867, ambito: "CHIMICA", sesso: "FEMMINA", nobel: true },
    { nome: "Isaac Newton", anno: 1643, ambito: "FISICA", sesso: "MASCHIO", nobel: false },
    { nome: "Galileo Galilei", anno: 1564, ambito: "ASTRONOMIA", sesso: "MASCHIO", nobel: false },
    { nome: "Charles Darwin", anno: 1809, ambito: "BIOLOGIA", sesso: "MASCHIO", nobel: false },
    { nome: "Nikola Tesla", anno: 1856, ambito: "INGEGNERIA", sesso: "MASCHIO", nobel: false },
    { nome: "Alan Turing", anno: 1912, ambito: "INFORMATICA", sesso: "MASCHIO", nobel: false },
    { nome: "Ada Lovelace", anno: 1815, ambito: "INFORMATICA", sesso: "FEMMINA", nobel: false },
    { nome: "Leonardo da Vinci", anno: 1452, ambito: "INGEGNERIA", sesso: "MASCHIO", nobel: false },
    { nome: "Stephen Hawking", anno: 1942, ambito: "FISICA", sesso: "MASCHIO", nobel: false },
    { nome: "Katherine Johnson", anno: 1918, ambito: "MATEMATICA", sesso: "FEMMINA", nobel: false },
    { nome: "Grace Hopper", anno: 1906, ambito: "INFORMATICA", sesso: "FEMMINA", nobel: false },
    { nome: "Tim Berners-Lee", anno: 1955, ambito: "INFORMATICA", sesso: "MASCHIO", nobel: false },
    { nome: "Jane Goodall", anno: 1934, ambito: "BIOLOGIA", sesso: "FEMMINA", nobel: false },
    { nome: "Elon Musk", anno: 1971, ambito: "INGEGNERIA", sesso: "MASCHIO", nobel: false },
    { nome: "Samantha Cristoforetti", anno: 1977, ambito: "ASTRONOMIA", sesso: "FEMMINA", nobel: false },
    { nome: "Margherita Hack", anno: 1922, ambito: "ASTRONOMIA", sesso: "FEMMINA", nobel: false },
    { nome: "Guglielmo Marconi", anno: 1874, ambito: "INGEGNERIA", sesso: "MASCHIO", nobel: true },
    { nome: "Rita Levi-Montalcini", anno: 1909, ambito: "MEDICINA", sesso: "FEMMINA", nobel: true },
    { nome: "Enrico Fermi", anno: 1901, ambito: "FISICA", sesso: "MASCHIO", nobel: true }
];

let domande= 
[
    "Il tuo personaggio è una donna?",
    "Il tuo personaggio è nato dopo il 1900?",
    "Il tuo personaggio ha vinto un Premio nobel?",
    "Il tuo personaggio ha a che fare con la fisica?",
    "Il tuo personaggio ha a che fare con l'informatica?",
    "Il tuo personaggio ha a che fare con l'astronomia?",
];
let indice=0;
let i=0;
document.getElementById("testoDomande").textContent = domande[0];
function rispondi(risposta)
{
    
    if(indice==0)
    {
        
        if(risposta==="SI")
        {
            personaggi=personaggi.filter(temp => temp.sesso==="FEMMINA");
        }
        else 
        {
            personaggi=personaggi.filter(temp => temp.sesso==="MASCHIO");
        }
      
        

    }
    else if(indice===1)
    {
         
        if(risposta==="SI")
        {
            personaggi=personaggi.filter(temp => temp.anno>=1900);

        }
        else
        {
            personaggi=personaggi.filter(temp => temp.anno<1900);

        }
         
            
    }
    else if(indice===2)
    {
         
        if(risposta==="SI")
        {
            personaggi=personaggi.filter(temp =>temp.nobel===true);

        }
        else
        {
            personaggi=personaggi.filter(temp=>temp.nobel===false);
        }
          
        
    }
    else if(indice===3)
    {
        
        if(risposta==="SI")
        {
            personaggi=personaggi.filter(temp =>temp.ambito==="FISICA");

        }
        else
        {
            personaggi=personaggi.filter(temp=>temp.ambito!=="FISICA");
        }
         
    }
    else if(indice===4)
    {
        
        if(risposta==="SI")
        {
            personaggi=personaggi.filter(temp =>temp.ambito==="INFORMATICA");

        }
        else
        {
            personaggi=personaggi.filter(temp=>temp.ambito!=="INFORMATICA");
        }
         
    }
    else if(indice===5)
    {
        
        if(risposta==="SI")
        {
            personaggi=personaggi.filter(temp =>temp.ambito==="ASTRONOMIA");

        }
        else
        {
            personaggi=personaggi.filter(temp=>temp.ambito!=="ASTRONOMIA");
        }
         
    }
    indice++     
    if (personaggi.length===0) 
    {
        document.getElementById("testoDomande").textContent = "Non sono stati trovati personaggi compatibili con le tue risposte";
        return;
    }
    else if (personaggi.length===1) 
    {
        document.getElementById("testoDomande").textContent = "Il personaggio a cui stai pensando è: " + personaggi[0].nome;
        indice=domande.length;
        return;
    }
    else if (indice<domande.length)   
    {
        document.getElementById("testoDomande").textContent = domande[indice];
        
    } 
    else 
    { 
        testo1="";
        for(i=0;i<personaggi.length;i++)
        {
            testo1+=personaggi[i].nome;
            testo1+=" ";
        }
        document.getElementById("testoDomande").textContent="Le mie domande sono finite! Potrebbe essere: " + testo1;
        return;
    }   
}    


