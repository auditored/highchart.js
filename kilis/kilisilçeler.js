const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Musabeyli",
        "path": "M-361,460,-227,390,-186,330,-168,258,-91,221,36,221L105,262,18,404L-49,483,-101,510,-144,519,-232,519,-281,515z"
      },
      {
        "id": "id1",
        "name": "Kilis Merkez",
        "path": "M-362,460,-389,515,-203,566,-138,597,-69,662,22,739L176,732,280,743L285,680,326,553,331,503,231,475,206,520,184,533,148,562,107,585,52,587L-29,577,-90,542L-99,510,-141,518,-224,518,-282,515z"
      },
      {
        "id": "id2",
        "name": "Elbeyli",
        "path": "M474,716,310,745L279,742,286,677,326,553,331,502,391,557,426,658z"
      },
      {
        "id": "id3",
        "name": "Polateli",
        "path": "M104,260,25,392,-51,486,-100,510L-89,542,-29,577,46,585,108,585L150,562L184,533,206,520,233,474,147,422,133,345z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 13108
      },
      {
        "id": "id1",
        "y": 130665
      },
      {
        "id": "id2",
        "y": 6252
      },
      {
        "id": "id3",
        "y": 5154
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Kilis İlçeleri Nüfus Bilgisi'
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