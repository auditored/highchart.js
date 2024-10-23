const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Tuzluca",
        "path": "M-314,234,-361,257,-422,267,-485,272,-523,285,-510,320,-535,340,-574,336,-577,362,-542,433,-538,458,-519,466,-507,484,-507,605,-479,626,-458,634,-439,628,-423,592,-375,581,-278,619,-270,585,-243,559,-229,527,-239,470,-240,432,-231,407,-189,354,-212,336,-282,325z"
      },
      {
        "id": "id1",
        "name": "Karakoyunlu",
        "path": "M13,356,45,340,78,335,114,345,143,371,129,404,111,433,96,455,91,483L72,474,55,463,44,457,26,455,9,445,6,431L9,407,9,380z"
      },
      {
        "id": "id2",
        "name": "Aralık",
        "path": "M143,371,131,400,98,453,88,502,96,514,124,505,130,515,124,538,71,626,62,664L65,722,117,714,134,705,215,701,309,632,297,587,270,527,229,473,215,439,181,400Z"
      },
      {
        "id": "id3",
        "name": "Iğdır Merkez",
        "path": "M64,721,41,719,5,697L-33,695,-97,707,-128,700,-196,657,-279,620,-269,583,-243,559,-229,527L-240,467L-241,427,-231,405,-189,356,-161,371,-127,380L15,355,8,383,11,409,7,428,10,446L28,455,44,454,92,484,88,502,96,514,126,505,131,516,123,540,72,625,63,665z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 23584
      },
      {
        "id": "id1",
        "y": 13116
      },
      {
        "id": "id2",
        "y": 19495
      },
      {
        "id": "id3",
        "y": 153543
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Iğdır İlçeleri Nüfus Bilgisi'
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