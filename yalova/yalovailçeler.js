const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Armutlu",
        "path": "M-6583,1841,-6640,1578L-6320,1235,-6023,1075L-6000,858,-5006,572,-4800,435L-4286,390,-3794,618,-3554,824,-2571,1167,-2971,2378,-3017,2835,-3177,3212,-3349,3304,-3406,3475,-3669,3224,-4149,3190,-4240,3087,-4526,3075,-4789,2904,-4994,2767,-5440,2138,-5920,2115,-6034,1967z"
      },
      {
        "id": "id1",
        "name": "Çınarcık",
        "path": "M-2594,1190,-2229,1087,-1177,1270L-594,378,34,47,69,-250,389,-559,411,-730,-80,-719L-343,-948,-400,-948,-411,-742,-617,-662,-1726,-639,-2629,-696,-2846,-753,-3440,-399,-3600,-125,-3977,104,-4160,184,-4297,412,-3806,641,-3566,858z"
      },
      {
        "id": "id2",
        "name": "Termal",
        "path": "M-1177,1247,-137,1670,206,1064,457,710,857,275,766,-170,754,-742,400,-742,366,-570,46,-250L23,47,-594,344Z"
      },
      {
        "id": "id3",
        "name": "Merkez",
        "path": "M-137,1647,777,2012,1371,2047,2194,2001,2446,1738,2800,1624,3029,1430,3337,1487,3257,1098,3074,1018,2651,607,2617,70,2446,-490,2446,-868,1863,-776,1509,-662,1257,-719,697,-742,743,-159,846,252,251,927z"
      },
      {
        "id": "id4",
        "name": "Çiftliköy",
        "path": "M2434,-822,2434,-410,2594,47,2629,618,3063,1018,3280,1132,3314,1487,4171,1772,4171,1521,4709,150,4754,-228,4583,-593,4663,-913,4663,-1336,4389,-1210,4309,-1199,3909,-1553,3669,-1553,3131,-982,2697,-868z"
      },
      {
        "id": "id5",
        "name": "Altınova",
        "path": "M4160,1750,5257,1761,5543,1292,5429,778,5497,218,5714,-159,6229,-456,6606,-708,6583,-1108,5977,-1862,5977,-2296,5909,-2319,5749,-2010,5577,-1828,5451,-1908,5177,-1679,5143,-1473,4629,-1290,4651,-902,4571,-593,4743,-239,4674,207,4149,1521z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 11729
      },
      {
        "id": "id1",
        "y": 42078
      },
      {
        "id": "id2",
        "y": 7572
      },
      {
        "id": "id3",
        "y": 155863
      },
      {
        "id": "id4",
        "y": 53858
      },
      {
        "id": "id5",
        "y": 33680
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Yalova İlçeleri Nüfus Bilgisi'
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