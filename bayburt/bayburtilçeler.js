const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Bayburt Merkez",
        "path": "M-253,701,-167,677,84,715,121,717,253,630,346,594,379,511L330,510,240,491,197,458,179,401,156,244L131,201,66,215,-29,226,-34,318,-61,367,-64,427L-75,436L-183,432,-259,365,-267,377,-336,393,-376,433,-380,453,-362,455,-335,495,-300,534,-256,548,-251,560,-281,594,-289,610,-287,635,-261,680z"
      },
      {
        "id": "id1",
        "name": "Aydıntepe",
        "path": "M-259,365,-201,298,-175,218,-69,232,-30,227,-34,317,-61,367,-64,427,-74,436,-183,431z"
      },
      {
        "id": "id2",
        "name": "Demirözü",
        "path": "M-379,453,-362,455,-332,498,-298,535,-256,549,-250,562,-286,602,-286,637,-252,702,-336,729,-346,735,-360,750,-379,786,-394,805,-413,817,-469,784,-491,737,-491,715L-445,661,-396,625,-385,542L-384,482z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 491811
      },
      {
        "id": "id1",
        "y": 7070
      },
      {
        "id": "id2",
        "y": 8072
      }
    ]
  }
  const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Bayburt İlçeleri Nüfus Bilgisi'
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