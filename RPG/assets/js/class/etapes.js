let etapes = [
    {
        id: 0,
        description: "Vous êtes un chevalier sans cheval et vous avez perdu la mémoire. Vous vous retrouver dans les bois sans arme",
        illustration: "assets/img/door.png",
        imgalt: "Porte",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Marcher pour essayer de trouver du monde",
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
            text: "Je tente une discussion avec l'orc",
            destination : 8
        },
        {
            text: "Je lui saute dessus pour lui faire la peau",
            destination : 6
        }
        ]
    },
    // {   
    //     id: 3,
    //     description: "Visiblement elle ne bouge pas d'un poil l'épée est bloqué !",
    //     illustration: "assets/img/sword.png",
    //     imgalt: "Epée",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Rempli de déception vous herrez sans but",
    //         destination : 
    //     },
    //     {
    //         text: "Vous partez en courant en criant a l'aide",
    //         destination : 2
    //     }
    //     ]
    // },
    // {
    //     id: 4,
    //     description: "Vous tombez sur un orc affamé pres a mangez n'importe quoi !",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec l'orc",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // },
    
    // {
    //     id: 5,
    //     description: "L'orc surpris que vous n'ayez pas prit peur de lui vous parle comme a un ami vous lui parlez de votre perte de mémoire et l'orc vous raconte qu'il cherche une épée magique" ",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je pars retenter de récuperer l'épée",
    //         destination : 12
    //     },
    //     {
    //         text: "Je releve a l'orc la direction a suivre",
    //         destination : 11
    //     }
    //     ]
    // },
    // {
    //     id: 6,
    //     description: "L'orc surpris tombe au sol et perd son arme",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Récuperez son arme et l'abattre",
    //         destination : 10
    //     },
    //     {
    //         text: "Le tuer a la force de vos poings",
    //         destination : 10
    //     }
    //     ]
    // },
    // {
    //     id: 7,
    //     description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec le troll",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // },
    // {
    //     id: 8,
    //     description: "L'orc, affamée vous saute dessus, sans défense vous luttez pour votre survie ,rien a voir mais il dit se nommer Mari",
    //     illustration: "assets/img/cross-swords.png",
    //     imgalt: "cross-swords",
    //     question: "Quoi vous allez quand même pas deja mourrir ?",
    //     choice : [
    //     {
    //         text: "Je tente de fuir",
    //         destination : 9
    //     },
    //     {
    //         text: "Je me battrai jusqu'a la fin",
    //         destination : 9
    //     }
    //     ]
    // },
    // {
    //     id: 9,
    //     description: "Il n'y avait plus rien a faire ! Mari vous dévore tout cru !",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Fin !",
    //     choice : [
    //     {
    //         text: "Recommencez l'histoire ?",
    //         destination : 0
    //     }
    //     ]
    // },
    // {
    //     id: 10,
    //     description: "Vous voila maintenant en possession d'une epée d'orc !",
    //     illustration: "assets/img/sword.png",
    //     imgalt: "sword",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "",
    //         destination : 
    //     },
    //     {
    //         text: "",
    //         destination : 
    //     }
    //     ]
    // },
    // {
    //     id: 11,
    //     description: "L'orc pour vous remerciez vous fait don de son épée",
    //     illustration: "assets/img/sword.png",
    //     imgalt: "sword",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "",
    //         destination : 
    //     },
    //     {
    //         text: "",
    //         destination : 
    //     }
    //     ]
    // },
    // {
    //     id: 12,
    //     description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec le troll",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // },
    // {
    //     id: 13,
    //     description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec le troll",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // },
    // {
    //     id: 14,
    //     description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec le troll",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // },
    //  {
    //     id: 15,
    //     description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec le troll",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // },
    //  {
    //     id: 16,
    //     description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
    //     illustration: "assets/img/orc.png",
    //     imgalt: "Orc",
    //     question: "Que souhaitez-vous faire ?",
    //     choice : [
    //     {
    //         text: "Je tente une discussion avec le troll",
    //         destination : 5
    //     },
    //     {
    //         text: "Je lui saute dessus pour lui faire la peau",
    //         destination : 6
    //     }
    //     ]
    // }
    
    
];

export { etapes };