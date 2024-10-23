const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Eskil",
        "path": "M-311,743,-320,667L-330,645,-346,591,-336,539,-309,520,-306,507L-340,475L-406,382,-441,495,-474,586,-419,700,-376,748,-348,750z"
      },
      {
        "id": "id1",
        "name": "Ağaçören",
        "path": "M-324,323,-283,299,-246,290,-202,290,-154,252,-91,317,-91,337,-139,379,-174,393,-239,386,-289,355z"
      },
      {
        "id": "id2",
        "name": "Sarıyahşi",
        "path": "M-153,252,-144,233,-163,187,-173,152,-164,129,-155,125,-87,186,-54,185,-41,197,-6,249,-91,257,-118,282,-121,284z"
      },
      {
        "id": "id3",
        "name": "Ortaköy",
        "path": "M-119,285,-91,317,-91,339,-137,379,-172,395,-144,417,-89,416,-21,424,31,408,8,348,-24,332,-34,312L-9,270,-5,248,-90,259Z"
      },
      {
        "id": "id4",
        "name": "Gülağaç",
        "path": "M37,433,62,454,42,540,31,535,9,545,-18,522,-9,513,-4,484,21,474z"
      },
      {
        "id": "id5",
        "name": "Güzelyurt",
        "path": "M44,542,58,568,55,615,50,622,-22,577,-20,569,11,545,32,536Z"
      },
      {
        "id": "id6",
        "name": "Aksaray Merkez",
        "path": "M49,620,31,629,22,655,-2,678,-31,671,-61,683,-66,703,-311,745,-318,667,-346,592,-336,539,-308,518,-305,505,-339,477,-406,380,-368,335,-324,324,-237,389,-172,393,-144,418L-80,417,-21,425,30,408,38,432,21,473,-4,482,-7,514,-19,521,10,545L-20,567,-21,580z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 18462
      },
      {
        "id": "id1",
        "y": 3035
      },
      {
        "id": "id2",
        "y": 3677
      },
      {
        "id": "id3",
        "y": 20340
      },
      {
        "id": "id4",
        "y": 5039
      },
      {
        "id": "id5",
        "y": 2869
      },
      {
        "id": "id6",
        "y": 251147
      }
    ]
  }

  const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Aksaray İlçeleri Nüfus Bilgisi'
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
      max: 1000000, // Nüfusa göre maksimum değeri ayarla
      stops: [
          [0, '#e0f7fa'],    // En düşük nüfus için çok açık mavi
          [0.05, '#b3e5fc'],  // 0-50.000 arası
          [0.1, '#81d4fa'],   // 50.000-100.000 arası
          [0.2, '#4fc3f7'],   // 100.000-200.000 arası
          [0.3, '#29b6f6'],   // 200.000-300.000 arası
          [0.4, '#03a9f4'],   // 300.000-400.000 arası
          [0.5, '#039be5'],   // 400.000-500.000 arası
          [0.6, '#0288d1'],   // 500.000-600.000 arası
          [0.7, '#0277bd'],   // 600.000-700.000 arası
          [0.8, '#01579b'],   // 700.000-800.000 arası
          [0.9, '#004ba0'],   // 800.000-900.000 arası
          [1, '#003b73']      // En yüksek nüfus için en koyu mavi
      ],
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