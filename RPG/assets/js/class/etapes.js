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
            // epee legendaire
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
            // epee legendaire
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
    
    {   
        id: 3,
        description: "Visiblement elle ne bouge pas d'un poil l'épée est bloqué !",
        illustration: "assets/img/sword.png",
        imgalt: "Epée",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Rempli de déception vous herrez sans but",
            destination : 14
        },
        {
            text: "Vous partez en courant en criant a l'aide",
            destination : 2
        }
        ]
    },
    {
        // epee legendaire
        id: 4,
        description: "Vous tombez sur un orc affamé pres a mangez n'importe quoi !",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je tente une discussion avec l'orc",
            destination : 5
        },
        {
            text: "Je lui saute dessus pour lui faire la peau",
            destination : 6
        }
        ]
    },
    
    {
        // epee legendaire
        id: 5,
        description: "L'orc surpris que vous n'ayez pas prit peur de lui vous parle comme a un ami vous lui parlez de votre perte de mémoire et l'orc vous raconte qu'il cherche une épée magique" ,
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je pars retenter de récuperer l'épée",
            destination : 12
        },
        {
            text: "Je revele a l'orc la direction a suivre",
            destination : 11
        }
        ]
    },
    {
        id: 6,
        description: "L'orc surpris tombe au sol et perd son arme",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Récuperez son arme et l'abattre",
            destination : 10
        },
        {
            text: "Le tuer a la force de vos poings",
            destination : 10
        }
        ]
    },
    {
        id: 7,
        description: "Quelqu'un a entendu vos cris. Malheureusement c'est un orc qui n'a pas manger depuis 3 jours",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je tente une discussion avec l'orc",
            destination : 5
        },
        {
            text: "Je lui saute dessus pour lui faire la peau",
            destination : 6
        }
        ]
    },
    {
        id: 8,
        description: "L'orc, affamée vous saute dessus, sans défense vous luttez pour votre survie ,rien a voir mais il dit se nommer Mari",
        illustration: "assets/img/cross-swords.png",
        imgalt: "cross-swords",
        question: "Quoi vous allez quand même pas deja mourrir ?",
        choice : [
        {
            text: "Je tente de fuir",
            destination : 9
        },
        {
            text: "Je me battrai jusqu'a la fin",
            destination : 9
        }
        ]
    },
    {
        id: 9,
        description: "Il n'y avait plus rien a faire ! Mari vous dévore tout cru !",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Fin !",
        choice : [
        {
            text: "Recommencez l'histoire ?",
            destination : 0
        },
        {
            text: "Jetter votre pc par la fenêtre",
            destination : 0
        }
        ]
    },
    {
        id: 10,
        description: "Vous voila maintenant en possession d'une epée d'orc !",
        illustration: "assets/img/sword.png",
        imgalt: "sword",
        question: "Que souhaitez-vous faire ?",
        choice : [
         {
            text: "Je cherche une sortie a cette forêt",
            destination : 13
        },
        {
            text: "Je part a la poursuite de ma destiné",
            destination : 13
        }
        ]
    },
    {
        id: 11,
        description: "L'orc pour vous remerciez vous fait don de son épée",
        illustration: "assets/img/sword.png",
        imgalt: "sword",
        question: "Que souhaitez-vous faire ?",
        choice : [
         {
            text: "Je cherche une sortie a cette forêt",
            destination : 13
        },
        {
            text: "Je part a la poursuite de ma destiné",
            destination : 13
        }
        ]
    },
    {
        id: 12,
        description: "Au moment ou vous prenez l'épée dans vos mains, le rocher se brise et l'épée se libere",
        illustration: "assets/img/sword.png",
        imgalt: "Sword",
        question: "Votre destin sera grand !",
        choice : [
        {
            text: "Je cherche une sortie a cette forêt",
            destination : 13
        },
        {
            text: "Je part a la poursuite de ma destiné",
            destination : 13
        }
        ]
    },
    {
        id: 13,
       description: "Vous voila devant une grande tour en plein milieu de la forêt !",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je fais le contour pour trouver une autre ouverture que la porte d'entée",
            destination : 15
        },
        {
            text: "Passer par la grande porte en criant 'YEEEPAAAA'",
            destination : 16
        }
        ]
    },
     {
        id: 14,
        description: "Vous tombez sur un orc affamé pres a mangez n'importe quoi !",
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
    {
        id: 15,
       description: "En contournant la tour, vous trouvez un trou avec des barreaux couper. Dans le fond, il y a une petite lumière ..",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Prendre son courage à deux main et rentrée",
            destination : 17
        },
        {
            text: "Rebrousser chemain et passer par la porte d'entrée.",
            destination : 13
        }
        ]
    },
    {
        id: 16,
       description: "Vous arrivez dans une grande salle. Devant vous, ce trouve un grand escalier et à droite une porte.",
        illustration: "assets/img/door.png",
        imgalt: "Door",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Monter le grand escalier",
            destination : 18
        },
        {
            text: "Prendre la porte à droite",
            destination : 19
        }
        ]
    },
    {
        id: 17,
       description: "Dans le caveau, vous entendez des bruits. On dirait un orc ... ou un gobelin",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Sauter dans le tas, de toute façon, rien ne peut vous faire peur",
            destination : 20
        },
        {
            text: "Tâtonner le mur, trouver une porte, l'ouvrir rapidement, et s'y faufiler",
            destination : 21
        }
        ]
    },
    {
        id: 18,
       description: "Plus vous monter l'escalier, plus les marches derrières vous disparaisse. Finalement, vous arrivez tout en haut de la tour .. et vous apercevez la princesse .. sur le toit de la tour juste à côté de la votre .. (manque de bol cruel)",
        illustration: "assets/img/tower.png",
        imgalt: "Tower",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je reprends les marches pour descendre .. Quitte à sortir de la tour",
            destination : 22
        },
        {
            text: "Planter ma tente, essayer de trouver de temps en temps du orc ou gobelin pour manger et finir ma vie ici ..",
            destination : 15
        }
        ]
    },
    {
        id: 19,
       description: "Une pancarte avec écrit 'Mort et trepas à celui qui descend' avec un escalier ou l'on ne voit pas le fond",
        illustration: "assets/img/map.png",
        imgalt: "Map",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je descends, je suis un grand garçon !",
            destination : 17
        },
        {
            text: "Je me pisse dessus, et préfère retourner derrière moi ..",
            destination : 16
        }
        ]
    },
    {
        id: 20,
       description: "L'Orc, qui finallement était un Troll vous broie les côtes. En approchant devant vous, il vous regarde, et dit : 'Je s'appel Mari' puis vous fini au sol",
        illustration: "assets/img/sword.png",
        imgalt: "Sword",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Vous êtes mort, mais vous pouvez recommencer.",
            destination : 0
        },
        {
            text: "Vous êtes mort, mais vous pouvez lancer un jet de dés pour une résurrection",
            destination : 0
        }
        ]
    },
    {
        id: 21,
       description: "Vous voyez un coffre, assez vieux, dans le coin de la pièce où vous êtes arrivé.",
        illustration: "assets/img/treasure.png",
        imgalt: "Treasure",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Ouvrir le coffre",
            destination : 23
        },
        {
            text: "Repartir derrière moi, tout ceci sens le piège à plein nez !",
            destination : 17
        }
        ]
    },
    {
        id: 22,
       description: "En redescendant, vous vous appercevez que la porte du donjon est fermé. La porte qui étais à l'entrée n'existe plus non plus. Vous ne pouvez que monter ou descendre.",
        illustration: "assets/img/tower.png",
        imgalt: "Tower",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Remonter et finir par perdre la tête ...",
            destination : 18
        },
        {
            text: "Vous finissez par rester en bas en espérant que quelqu'un rentre dans le donjon ..",
            destination : 0
        }
        ]
    },
    {
        id: 23,
       description: "Dans le coffre ce trouve la plus belle armure que vous n'avez jamais vue. Un parchemin est collé dans le fond du coffre, mais vous ne comprenez pas ce qu'il y a d'écrit.",
        illustration: "assets/img/treasure.png",
        imgalt: "Treasure",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Je porte l'armure, bien entendu !",
            destination : 24
        },
        {
            text: "J'ai déjà vue cela dans des films, ça va m'explosé à la figure, je retourne sur mes pas.",
            destination : 17
        }
        ]
    },
    {
        id: 24,
       description: "L'Orc, qui finallement était un Troll essaye de vous intimidez. Mais votre armure vous donne le pouvoir de le térasser.",
        illustration: "assets/img/orc.png",
        imgalt: "Orc",
        question: "Que souhaitez-vous faire ?",
        choice : [
        {
            text: "Après l'avoir vaincu, vous voyez une porte derrière lui et l'emprunté.",
            destination : 16
        },
        {
            text: "Victorieux, mais curieux, vous voulez recommencer votre partie pour voir plus de choix.",
            destination : 0
        }
        ]
    },
    
    
];

export { etapes };