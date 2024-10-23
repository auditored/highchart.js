const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Eşme",
        "path": "M-3,294,30,325,58,346,118,397,157,420,133,496,135,544,127,564,132,597,144,626,140,658,141,687,148,716,162,735,178,767,43,750,24,734,-23,716,-40,717,-119,624,-100,593,-96,553,-111,465,-101,413,-113,402,-59,321,-22,307z"
      },
      {
        "id": "id1",
        "name": "Ulubey",
        "path": "M177,766,165,740,148,717,141,688,140,659,144,625,132,595,130,580,126,566,135,545,132,498,155,417,185,421,196,418,222,430,239,450,255,480,271,491,385,523,392,560,353,585,342,600,340,623,350,641,350,652,332,685,335,715,323,708,281,746z"
      },
      {
        "id": "id2",
        "name": "Karahallı",
        "path": "M337,715,453,784,467,748,465,696,505,636,478,609,437,575,412,563,391,560,354,583,343,596,338,626,349,643,349,654,332,683,334,714z"
      },
      {
        "id": "id3",
        "name": "Sivaslı",
        "path": "M506,635,528,540,587,525,596,481,605,474,592,455,589,431,573,411,540,392,504,394,475,372,456,387,449,400,381,493,392,560,414,564,440,577,506,637z"
      },
      {
        "id": "id4",
        "name": "Uşak Merkez",
        "path": "M476,372,455,388,439,415,382,493,386,523,273,492,255,481,238,452,223,431,194,418,187,422,153,418,115,398,-8,293,19,272,36,251,92,247,156,243,171,245,192,254,229,214,263,196,346,167,372,203,389,215,417,227,445,234,461,245,466,263,466,289,461,323,465,349z"
      },
      {
        "id": "id5",
        "name": "Banaz",
        "path": "M605,472,681,339,689,274,693,186,671,142,641,127,530,97,484,103,467,109,445,126,409,143,380,156,345,168,371,204,388,216,425,231,445,234,459,245,466,264,464,293,460,321,463,352,475,375,505,397,539,395,572,413,587,430,593,459z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 34692
      },
      {
        "id": "id1",
        "y": 12025
      },
      {
        "id": "id2",
        "y": 9884
      },
      {
        "id": "id3",
        "y": 19939
      },
      {
        "id": "id4",
        "y": 265148
      },
      {
        "id": "id5",
        "y": 35313
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Uşak İlçeleri Nüfus Bilgisi'
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