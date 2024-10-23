const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Alaplı",
        "path": "M-203,628,-161,583,-136,545,-135,535,-106,555,-88,581,-73,612,-70,643,-83,669,-65,736,-103,737,-163,678z"
      },
      {
        "id": "id1",
        "name": "Ereğli",
        "path": "M-66,735,-15,730,27,739,166,744,141,697,140,647,150,618,203,571,236,542,246,517,266,456,228,478,192,484,174,480,118,434,93,412,85,353,96,336,98,315,41,346,-10,360,-129,462,-135,537,-104,557,-88,583,-75,613,-69,645,-84,671z"
      },
      {
        "id": "id2",
        "name": "Devrek",
        "path": "M165,744,328,769,474,772,480,660,519,598,552,571,526,556,501,526,471,517,451,505,437,494,432,475,325,433,299,431,272,446,263,460,236,543,150,617,139,643,140,695z"
      },
      {
        "id": "id3",
        "name": "Zonguldak Merkez",
        "path": "M435,479,432,464,440,414,407,385,380,342,374,299,384,267,405,238,405,210,393,179,387,145,99,316,96,337,83,352,93,415,174,481,195,485,225,481,261,460,272,450,295,433,326,433z"
      },
      {
        "id": "id4",
        "name": "Çaycuma",
        "path": "M386,147,391,173,404,209,405,239,384,265,371,302,377,343,402,383,440,419,465,429,506,431,531,421,593,387,620,375,406,134z"
      },
      {
        "id": "id5",
        "name": "Gökçebey",
        "path": "M550,573,581,542,704,505,668,430,620,373,540,414,508,428,462,425,437,417,430,461,437,499,478,522,501,527,513,547z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 43417
      },
      {
        "id": "id1",
        "y": 175294
      },
      {
        "id": "id2",
        "y": 57562
      },
      {
        "id": "id3",
        "y": 201907
      },
      {
        "id": "id4",
        "y": 91968
      },
      {
        "id": "id5",
        "y": 21344
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Zonguldak İlçeleri Nüfus Bilgisi'
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