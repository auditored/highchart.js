const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Afşin",
        "path": "M27,198,21,229,23,275,29,296,20,331,14,394,-4,393,-18,401,-39,401,-61,396,-79,350,-103,328,-106,298L-110,280,-126,262,-105,230L-96,201,-54,185,-22,180,-4,181z"
      },
      {
        "id": "id1",
        "name": "Göksun",
        "path": "M14,394,16,403L6,436,-15,455L-15,469,-51,487,-87,483,-98,479,-109,462,-121,460,-150,474,-151,489,-126,526,-121,558,-134,572,-162,551,-176,523,-216,511L-235,512,-226,464,-195,342L-165,314,-127,263,-109,281,-106,305,-104,322,-98,333,-79,349,-62,395,-40,401,-19,401,-7,395z"
      },
      {
        "id": "id2",
        "name": "Andırın",
        "path": "M-134,572,-148,600,-146,618,-133,630,-136,638,-144,651,-154,670,-155,702,-171,716,-176,747,-211,760,-242,760,-262,745,-271,680,-246,640,-217,573L-235,541L-234,512,-214,510,-209,513,-175,523,-162,551z"
      },
      {
        "id": "id3",
        "name": "Kahramanmaraş Merkez",
        "path": "M-175,746,-157,742,-150,732,-139,731,-130,742,-119,746,-109,744,-103,720,-100,716,-90,714,-80,718,-60,706,-47,707L-35,716,-29,720,-20,731L-18,741,-11,744,27,749,60,705,69,696,82,668,82,649,90,613L73,610,48,589,44,571,44,559,48,547,24,541,4,527L-2,513,2,491,6,474,5,469,-6,466L-15,468L-48,487,-96,481,-109,463,-124,461,-149,473,-150,490,-126,527,-121,558,-132,571,-147,600,-145,619,-133,631,-154,670,-155,704,-170,715,-172,721z"
      },
      {
        "id": "id4",
        "name": "Türkoğlu",
        "path": "M-157,742,-145,743,-125,756,-107,774,-91,796,-49,766,-27,746L-12,767,4,746,-17,742L-19,731,-29,720,-35,718,-46,708,-61,707,-79,719,-88,715,-93,715,-101,717,-110,744,-120,746,-131,741,-138,731,-150,732z"
      },
      {
        "id": "id5",
        "name": "Pazarcık",
        "path": "M-13,768,-9,793,-5,807,1,816,10,818,28,810L40,789,56,777,84,765,196,742,221,740,230,733,234,723,232,683,214,670,186,656,174,653,164,647,160,639,159,624,146,618,116,611,104,610,89,613,82,651,82,670,70,695L59,706,28,749,3,747Z"
      },
      {
        "id": "id6",
        "name": "Çağlayancerit",
        "path": "M160,623,158,598,176,584,187,577,169,572,158,558,129,556,109,554L85,557,70,557,56,550L49,548,44,560,47,590,72,609,91,614,106,611,132,614,161,624z"
      },
      {
        "id": "id7",
        "name": "Nurhak",
        "path": "M188,577,196,566,217,537,245,473,257,443,235,436,173,425,119,422,101,429,89,443,84,487,62,507,20,525,10,532,24,542,70,556,109,554,159,559,168,571z"
      },
      {
        "id": "id8",
        "name": "Ekinözü",
        "path": "M12,530,25,523,63,506,85,487,88,443,104,427,121,422,112,408,102,403,82,402,71,408,32,407,16,400,6,436,-15,455,-14,468,-3,467,6,470,-1,512,4,527,13,532z"
      },
      {
        "id": "id9",
        "name": "Elbistan",
        "path": "M28,199,110,191,111,200,104,214,85,228,80,235,75,247,81,255,112,250,135,252,169,259,264,302,284,321,287,333,287,353,257,443,232,435,172,424,121,422L113,409,102,403,81,401,73,407,30,407,16,401,13,394,20,330,29,296,23,277,21,227Z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 78152
      },
      {
        "id": "id1",
        "y": 49119
      },
      {
        "id": "id2",
        "y": 32581
      },
      {
        "id": "id3",
        "y": 214608
      },
      {
        "id": "id4",
        "y": 74255
      },
      {
        "id": "id5",
        "y": 67262
      },
      {
        "id": "id6",
        "y": 23159
      },
      {
        "id": "id7",
        "y": 11984
      },
      {
        "id": "id8",
        "y": 10471
      },
      {
        "id": "id9",
        "y": 127755
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Kahramanmaraş İlçeleri Nüfus Bilgisi'
    },



    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },


    tooltip: {
        pointFormat: '{point.name}: <b>{point.y}</b>',

    },
    colorAxis: {
        min: 0,
        minColor: '#e0f3ff',
        maxColor: '#0052b4',
        visible: true
    },


    series: [{
        data: datalocal.data,
        mapData: datalocal.mapDatalocal,
        joinBy: 'id',
        name: 'Nüfus',
        
        states: {
            hover: {
                color: '#BADA55'
            }
        },

        dataLabels: {
            enabled: false,
            format: '{point.name}'
        },
        colorKey: 'y',
    }]
});