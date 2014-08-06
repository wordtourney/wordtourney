var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
};

$(document).ready(main);

/* Bracket Info */

var singleElimination = {
  "teams": [              // Matchups
    ["Team 1", "Team 2"], // First match
    ["Team 3", "Team 4"]  // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket
        [1, 2],           // Team 1 vs Team 2
        [3, 4]            // Team 3 vs Team 4
      ],
      [                   // Second (final) round in single elimination bracket
        [5, 6],           // Match for first place
        [7, 8]            // Match for 3rd place
      ]
    ]
  ]
}
