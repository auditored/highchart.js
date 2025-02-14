const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Bodrum",
        "path": "M-320,390,-329,382,-341,343,-336,329,-303,290,-283,292,-254,315,-213,303,-184,303,-162,290,-156,295,-156,318,-146,327,-137,329,-136,346,-130,350,-136,365,-226,372,-262,355,-299,365,-306,382z"
      },
      {
        "id": "id1",
        "name": "Milas",
        "path": "M-213,302,-184,304,-162,290,-156,296,-156,320,-144,328,-136,328,-136,346,-129,350,-136,366,-29,355,-34,335,-9,308,-3,294L-5,277L-19,270,-31,247,-49,235,-61,215,-66,195,-68,174,-57,155,-57,139,-113,133,-183,105,-224,83,-237,87,-278,200,-269,217,-232,237,-216,235,-206,230L-195,255Z"
      },
      {
        "id": "id2",
        "name": "Yatağan",
        "path": "M-57,138,-56,155,-68,174,-65,202,-59,219,-49,237L-30,247L-19,270,-2,280,29,251,54,245,71,231,91,213,116,211,136,200,104,177,87,150,76,142,46,110,29,132,8,137z"
      },
      {
        "id": "id3",
        "name": "Kavaklıdere",
        "path": "M135,201,104,179,89,150,74,138L46,110,54,85,91,77,110,89,136,114,170,127L164,158,154,184z"
      },
      {
        "id": "id4",
        "name": "Datça",
        "path": "M-289,515,-241,493,-232,495,-74,471,-23,455,-12,462,-4,461L5,467L-22,485,-58,495,-75,495,-142,489,-164,523,-233,532,-241,542,-281,527z"
      },
      {
        "id": "id5",
        "name": "Marmaris",
        "path": "M-22,456,-12,463,-3,461,4,468,16,469,17,508L0,516L-19,515,-46,527,-31,533,-20,528,-7,532,1,549,-13,570,-41,567,-49,570,-39,590,-1,572,77,500,64,482,61,467,66,451,74,445,84,445,96,459,124,477,136,457,120,447,115,437,121,402,96,385,76,362L45,380L-6,400z"
      },
      {
        "id": "id6",
        "name": "Ula",
        "path": "M254,295,251,282,233,275,202,280,186,290,154,298,122,294,96,317,97,348,77,363,96,387,121,402,142,378,167,366,188,337,204,304,214,296z"
      },
      {
        "id": "id7",
        "name": "Ortaca",
        "path": "M211,467,222,436,236,432,262,443,274,447,289,446,284,488,276,531,229,513,212,477z"
      },
      {
        "id": "id8",
        "name": "Menteşe",
        "path": "M-31,355,81,347,98,350,97,318,122,293,154,297,187,288,201,280,231,275,252,282,253,295L275,283L321,283,338,270L315,254,292,253,276,235,270,200,255,182,219,180,211,152,210,129L168,126,162,167,149,190,133,202,111,211,91,211,51,246,29,250,-4,279,-4,294,-9,310,-33,333z"
      },
      {
        "id": "id9",
        "name": "Köyceğiz",
        "path": "M121,445,114,437,121,401L142,377,170,364,204,302,218,295,255,295L275,282,321,283,337,269,384,302,391,318L375,340L378,368,371,381,287,447L270,445L236,431,221,437,210,467,148,429,123,437z"
      },
      {
        "id": "id10",
        "name": "Dalaman",
        "path": "M276,530,285,487L288,445,369,382,378,367,374,340,391,317,400,343,405,386,442,425,413,432,377,442,342,476,339,498,313,524,306,540z"
      },
      {
        "id": "id11",
        "name": "Fethiye",
        "path": "M442,423,376,441,341,476,338,499,385,526,400,556,381,560,375,596,386,597,399,589,416,600L405,632L415,680,435,700,471,722,491,707,499,647,594,571,604,552,602,511,611,477,639,421L635,395L623,377,587,355,574,357,552,382,542,395,528,398,524,382,533,350,523,333,509,339,503,348L500,387,471,430Z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 198335
      },
      {
        "id": "id1",
        "y": 149691
      },
      {
        "id": "id2",
        "y": 45614
      },
      {
        "id": "id3",
        "y": 10975
      },
      {
        "id": "id4",
        "y": 25649
      },
      {
        "id": "id5",
        "y": 96778
      },
      {
        "id": "id6",
        "y": 27282
      },
      {
        "id": "id7",
        "y": 56056
      },
      {
        "id": "id8",
        "y": 123227
      },
      {
        "id": "id9",
        "y": 40665
      },
      {
        "id": "id10",
        "y": 49044
      },
      {
        "id": "id11",
        "y": 177569
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Muğla İlçeleri Nüfus Bilgisi'
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