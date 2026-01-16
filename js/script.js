
function Personaggio(nome,anno,ambito,sesso,nobel) 
{
    this.nome=nome;
    this.anno=anno;
    this.ambito=ambito;
    this.sesso=sesso;
    this.nobel=nobel;
}
let personaggi=
[
    new Personaggio("Albert Einstein", 1879, "FISICA", "MASCHIO", true),
    new Personaggio("Marie Curie", 1867, "CHIMICA", "FEMMINA", true),
    new Personaggio("Isaac Newton", 1643, "FISICA", "MASCHIO", false),
    new Personaggio("Galileo Galilei", 1564, "ASTRONOMIA", "MASCHIO", false),
    new Personaggio("Charles Darwin", 1809, "BIOLOGIA", "MASCHIO", false),
    new Personaggio("Nikola Tesla", 1856, "INGEGNERIA", "MASCHIO", false),
    new Personaggio("Alan Turing", 1912, "INFORMATICA", "MASCHIO", false),
    new Personaggio("Ada Lovelace", 1815, "INFORMATICA", "FEMMINA", false),
    new Personaggio("Leonardo da Vinci", 1452, "INGEGNERIA", "MASCHIO", false),
    new Personaggio("Stephen Hawking", 1942, "FISICA", "MASCHIO", false),
    new Personaggio("Katherine Johnson", 1918, "MATEMATICA", "FEMMINA", false),
    new Personaggio("Grace Hopper", 1906, "INFORMATICA", "FEMMINA", false),
    new Personaggio("Tim Berners-Lee", 1955, "INFORMATICA", "MASCHIO", false),
    new Personaggio("Jane Goodall", 1934, "BIOLOGIA", "FEMMINA", false),
    new Personaggio("Elon Musk", 1971, "INGEGNERIA", "MASCHIO", false),
    new Personaggio("Samantha Cristoforetti", 1977, "ASTRONOMIA", "FEMMINA", false),
    new Personaggio("Margherita Hack", 1922, "ASTRONOMIA", "FEMMINA", false),
    new Personaggio("Guglielmo Marconi", 1874, "INGEGNERIA", "MASCHIO", true),
    new Personaggio("Rita Levi-Montalcini", 1909, "MEDICINA", "FEMMINA", true),
    new Personaggio("Enrico Fermi", 1901, "FISICA", "MASCHIO", true),
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
let testo="";
let testo1="";
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


