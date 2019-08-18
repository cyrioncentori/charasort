dataSetVersion = "2019-08-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name : "Trier par sagas",
    key : "sagas",
    tooltip : "Cochez ou décocher pour tirer par sagas.",
    checked : false,
    sub : [
      {name:"Actions", key:"actions"},
      {name:"Saga 1-α : Chair et Fer", key:"1-a"},
      {name:"Saga 1-β : Rebellion", key:"1-b"},
      {name:"Saga 1-γ : Science Politique",key:"1-c"},
      {name:"Saga 2-α : La Guerre Civile", key:"2-a"},
      {name:"Saga 2-β : Menace Persistante", key:"2-b"},
      {name:"Saga 3 : Le Soraya", key:"3"},
      {name:"Saga 4-α : Légalité Relative", key:"4-a"},
      {name:"Saga 4-β : Les Missions de la Cassionne", key:"4-b"},
      {name:"Saga 5-α : Naturalis", key:"5-a"},
      {name:"Saga 5-β : Seul contre les Étoiles", key:"5-b"},
      {name:"Saga 5-δ : Toujours quelque chose au-dessus", key:"5-c"},
      {name:"Saga 6 : Novus Imperium", key :"6"}
      ]
  },
  {
    name : "Retirer les PNJ",
    key : "pnj",
    tooltip : "Retire les PNJ de la liste.",
    checked: false
  },
  {
    name : "Retirer les personnages de nouvelles",
    key : "nouvelles",
    tooltip : "Retire les personnages apparus uniquement hors-RP",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name : "Cyrion du Centaure",
    img : "",
    opts : {
      sagas: ["actions", "1-c", "2-a", "2-b", "3"]
    }
  },
  {
    name : "Ter Atréides",
    img : "",
    opts : {
      sagas : ["actions", "2-b"]
    }
  },
  {
    name : "Dany",
    img : "",
    opts : {
      sagas : ["actions", "1-a", "2-a"]
    }
  },
  {
    name : "Cap'tain Abyss",
    img : "",
    opts : {
      sagas : ["actions", "1-a", "2-a", "3"]
    }
  },
  {
    name : "Jasmine Sana'a",
    img : "",
    opts : {
      sagas : ["actions", "1-a", "2-a", "3"],
      pnj: true
    }
  },
  {
    name : "Linkon",
    img : "",
    opts : {
      sagas : ["actions", "1-b"]
    }
  },
  {
    name : "Drizztzy",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Adolphe Mitler",
    img : "",
    opts : {
      sagas : ["actions", "1-a"],
      pnj: true
    }
  },
  {
    name : "Sonia Robetti",
    img : "",
    opts : {
      sagas : ["1-a", "2-a"],
      pnj: true
    }
  },
  {
    name : "Balder",
    img : "",
    opts : {
      sagas : ["1-b"],
      pnj: true
    }
  },
  {
    name : "Béatrice IV",
    img :"",
    opts : {
      sagas : ["2-a"],
      pnj: true
    }
  },
  {
    name : "Euronymous Borland",
    img : "",
    opts : {
      sagas : ["actions", "2-b", "4-b"]
    }
  },
  {
    name : "Sirius Cassionne",
    img : "",
    opts : {
      sagas : ["actions", "2-b", "4-a", "4-b", "5-c"]
    }
  },
  {
    name : "Finglas",
    img : "",
    opts : {
      sagas : ["actions", "4-a"]
    }
  },
  {
    name : "Ab'Matech",
    img : "",
    opts : {
      sagas : ["actions", "1-c"]
    }
  },
  {
    name : "Cerio Mendel",
    img : "",
    opts : {
      sagas : ["1-c"],
      pnj: true
    }
  },
  {
    name : "Elayne Rilia",
    img :"",
    opts : {
      sagas : ["2-b"],
      pnj: true
    }
  },
  {
    name : "Yttrine Orian",
    img : "",
    opts : {
      sagas : ["3", "4-b"]
    }
  },
  {
    name : "Cirilla Akabane",
    img :"",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Basil Blaskowiz",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Louka Nastik",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Rose Albald",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Haroun Al Rash",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Ohan Talych",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Salia Dolann",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Khojassteh Eurochild",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "The Smiler",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Alyssa Javan",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Nefarian Yandi",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Narmad Chakir",
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : 'Lupia "Louve" Juli',
    img : "",
    opts : {
      sagas : ["3"]
    }
  },
  {
    name : "Gelduin Orsan",
    img : "",
    opts : {
      sagas : ["4-a", "5-c"]
    }
  },
  {
    name : "Dave",
    img : "",
    opts : {
      sagas : ["4-a"]
    }
  },
  {
    name : "Pesto Lazare",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Alice M. Troid",
    img : "",
    opts : {
      sagas : ["4-a", "4-b"],
      pnj: true
    }
  },
  {
    name : "The Lone Ranger",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "William Ablaye",
    img :"",
    opts : {
      sagas : ["actions", "5-a"]
    }
  },
  {
    name : "Tom Algore",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Marc Silvetstone",
    img : "",
    opts : {
      sagas : ["actions", "5-a", "5-b"]
    }
  },
  {
    name : "Raphaël Rousset",
    img : "",
    opts : {
      sagas : ["actions", "5-a"],
      pnj: true
    }
  },
  {
    name : "Renko Shirata",
    img : "",
    opts : {
      sagas : ["actions", "5-a", "5-b", "5-c"],
      pnj: true
    }
  },
  {
    name : "Deneb Lyrica",
    img : "",
    opts : {
      sagas : ["5-a"],
      pnj: true
    }
  },
  {
    name : "Yarolav Cirfoz",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Safyr Hérian",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Roméo Aslet",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Céleste Louva",
    img : "",
    opts : {
      sagas : ["actions", "5-c"]
    }
  },
  {
    name : "Guny",
    img : "",
    opts : {
      sagas : ["actions", "4-b"]
    }
  },
  {
    name : "Alcyone Lyrica",
    img : "",
    opts : {
      sagas : ["5-b", "5-c"],
      pnj: true
    }
  },
  {
    name : "Catherine Ownnard",
    img : "",
    opts : {
      sagas : ["actions", "6"]
    }
  },
  {
    name : "Noto",
    img : "",
    opts : {
      sagas : ["actions", "6"],
      pnj: true
    }
  },
  {
    name : "Rukh Lyrica",
    img : "",
    opts : {
      sagas : ["5-b"],
      pnj: true
    }
  },
  {
    name : "Mireilla Ferns",
    img : "",
    opts : {
      sagas : ["5-c"],
      pnj: true
    }
  },
  {
    name : "Servin",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Yves Lajoie",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Frost",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Atlas",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Nab'wavef",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Jack Morgan",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Yiagdra Chik-Aneid",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Gabriel Taskar",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Syal Pryl",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Léon Wright",
    img : "",
    opts : {
      sagas : ["actions"]
    }
  },
  {
    name : "Verte",
    img : "",
    opts : {
      sagas : [],
      nouvelles: true
    }
  },
  {
    name : "Sable",
    img : "",
    opts : {
      sagas : [],
      nouvelles: true
    }
  }
  ];
