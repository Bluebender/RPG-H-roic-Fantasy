let etapes = [
    {
        id: 0,
        description: "Vous êtes un chevalier sans cheval et vous avez perdu la mémoire. Vous vous retrouver dans les bois sans arme",
        illustration: "assets/img/door.png",
        imgalt: "Porte",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Marcharcher pour essayer de trouver du monde",
            destination : 1
        },
        {
            text: "Courrir en criant",
            destination : 2
        }
        ]
    },
    
    {   
        id: 1,
        description: "En marchant vous trouvez une épée enfoncée dans un rocher",
        illustration: "assets/img/sword.png",
        imgalt: "Epée",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Attraper l'épée",
            destination : 3
        },
        {
            text: "Passer mon chemin, cette épée doit appartenir à quelqu'un",
            destination : 4
        }
        ]
    },
    
    {
        id: 2,
        description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je tente une discussion avec le troll",
            destination : 5
        },
        {
            text: "Je lui saute dessus pour lui faire la peau",
            destination : 6
        }
        ]
    }
    
];

export { etapes };