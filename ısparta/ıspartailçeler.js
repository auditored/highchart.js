const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Yalvaç",
        "path": "M-129,37,-230,127L-244,142,-259,163,-285,179,-249,249,-224,253,-194,220,-178,212,-151,210,-126,217,-112,223,-81,259,-56,257,-3,234,12,217,26,212,31,201L-64,114,-65,99L-60,90,-85,81,-104,49z"
      },
      {
        "id": "id1",
        "name": "Senirkent",
        "path": "M-285,179,-249,250,-233,252,-252,270,-293,326,-315,335,-364,332,-374,310L-395,281L-401,268,-401,255,-387,245,-368,238,-360,223,-356,203,-329,189L-305,185Z"
      },
      {
        "id": "id2",
        "name": "Atabey",
        "path": "M-315,335,-299,359,-293,378,-307,378,-334,390,-363,392,-387,390,-393,377,-389,355,-389,330z"
      },
      {
        "id": "id3",
        "name": "Isparta Merkezi",
        "path": "M-293,377,-283,394,-284,446,-288,480,-285,508,-290,537,-302,541,-301,525,-329,505,-385,501,-400,497,-412,484,-443,454,-458,431,-430,416,-407,396,-389,390,-334,391,-309,380z"
      },
      {
        "id": "id4",
        "name": "Sütçüler",
        "path": "M-261,628,-249,644,-227,655,-202,695,-182,709,-89,680,-76,672,-64,661,-27,662,-14,636L-10,612L-11,593,-46,581,-64,552,-94,532,-111,517,-119,503,-149,502,-170,512,-178,525,-216,554,-219,567,-249,611z"
      },
      {
        "id": "id5",
        "name": "Aksu",
        "path": "M-9,593,2,549,-19,537,-34,523,-31,490,-30,466L-35,449,-58,436,-62,422,-94,420,-138,419,-146,429,-147,446,-115,474,-118,505,-110,519,-65,551,-44,581z"
      },
      {
        "id": "id6",
        "name": "Yenişarbademli",
        "path": "M1,548,16,493,31,450,30,430,20,395L17,373,-2,370,-63,402,-62,423,-57,436,-34,450,-30,468,-33,525,-17,540,3,549z"
      },
      {
        "id": "id7",
        "name": "Şarkikaraağaç",
        "path": "M17,371,15,352,23,333,28,326,69,311,97,295,106,275,104,262,30,200,25,213,12,217,-3,234,-43,251,-60,258,-82,260,-95,282,-99,298,-96,306,-73,319,-75,337,-92,356,-94,375,-62,403,-2,371z"
      },
      {
        "id": "id8",
        "name": "Gelendost",
        "path": "M-93,356,-130,362,-171,365,-193,351,-201,345,-208,322,-210,301,-217,287,-226,252,-195,221,-177,212,-150,210,-113,222,-80,259,-96,283,-98,299,-95,308,-73,319,-74,337z"
      },
      {
        "id": "id9",
        "name": "Eğirdir",
        "path": "M-226,253,-234,252,-254,272,-294,328,-316,335,-303,353,-292,378,-282,395,-284,438,-288,483,-285,506,-289,537,-302,541,-297,565,-286,593,-271,616,-260,629,-222,573,-216,554,-177,525,-170,513,-150,502,-118,503,-114,474,-146,446,-146,430,-137,419,-61,423,-62,402,-94,375,-91,355,-171,365,-200,345,-208,321,-210,301,-217,287z"
      },
      {
        "id": "id10",
        "name": "Gönen",
        "path": "M-458,430,-431,418,-409,397,-387,389,-393,378,-389,351,-390,332,-409,331,-454,311,-456,325,-450,339,-446,398,-455,417z"
      },
      {
        "id": "id11",
        "name": "Uluborlu",
        "path": "M-364,331,-375,308,-400,269,-401,256,-387,246,-368,239,-359,221,-357,203,-388,220,-431,261,-476,304,-453,312,-410,331z"
      },
      {
        "id": "id12",
        "name": "Keçiborlu",
        "path": "M-477,305,-527,342,-542,393,-536,417,-552,442,-585,463,-621,460,-611,488,-603,501,-592,504,-569,494,-476,422,-457,430,-454,415,-446,400,-449,339,-456,326,-454,312z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 45694
      },
      {
        "id": "id1",
        "y": 11196
      },
      {
        "id": "id2",
        "y": 6103
      },
      {
        "id": "id3",
        "y": 271396
      },
      {
        "id": "id4",
        "y": 10143
      },
      {
        "id": "id5",
        "y": 4135
      },
      {
        "id": "id6",
        "y": 2495
      },
      {
        "id": "id7",
        "y": 24990
      },
      {
        "id": "id8",
        "y": 14471
      },
      {
        "id": "id9",
        "y": 30988
      },
      {
        "id": "id10",
        "y": 7094
      },
      {
        "id": "id11",
        "y": 6426
      },
      {
        "id": "id12",
        "y": 14646
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Isparta İlçeleri Nüfus Bilgisi'
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