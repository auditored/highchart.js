const datalocal ={
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Posof",
        "path": "M-380,281,-337,234,-320,180,-261,172,-196,183,-116,292,-133,297,-156,285,-233,281,-256,287,-324,340,-357,352,-377,307z"
      },
      {
        "id": "id1",
        "name": "Damal",
        "path": "M-285,310,-241,371,-179,366,-143,352,-110,346,-103,306,-116,292,-134,298,-159,285,-227,282,-251,286z"
      },
      {
        "id": "id2",
        "name": "Hanak",
        "path": "M-286,307,-241,370,-180,365,-141,352,-113,349,-117,368,-106,377,-100,406,-105,418,-131,442,-161,441,-171,437,-265,444,-328,417,-359,351,-326,342z"
      },
      {
        "id": "id3",
        "name": "Çildir",
        "path": "M-159,441,-164,457,-151,501,-88,579,-26,567,3,539,17,500,24,444,81,437,106,452,111,425,84,382,71,375,46,377,-14,407L-50,358L-31,328,-104,310,-116,370,-103,380,-99,405,-131,443z"
      },
      {
        "id": "id4",
        "name": "Göle",
        "path": "M-170,625,-194,767,-263,779,-282,789,-305,812,-341,813,-339,807,-444,652,-456,601,-427,596,-417,588,-378,587,-339,566,-293,566,-233,588,-203,612z"
      },
      {
        "id": "id5",
        "name": "Ardahan Merkez",
        "path": "M-328,418,-330,441L-388,472,-411,498,-454,582,-454,602,-424,595,-417,587,-376,587,-337,567,-287,568,-236,586,-214,603,-200,612,-166,627,-137,597,-87,579L-150,501L-161,460,-159,437,-201,440L-265,442Z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 6340
      },
      {
        "id": "id1",
        "y": 4757
      },
      {
        "id": "id2",
        "y": 8033
      },
      {
        "id": "id3",
        "y": 8745
      },
      {
        "id": "id4",
        "y": 22735
      },
      {
        "id": "id5",
        "y": 42209
      }
    ]
  }

  const mapChart = Highcharts.mapChart('container', {

    chart: {
      map: datalocal,
  
      height: 600
    },
  
    title: {
      text: 'Ardahan İlçeleri Nüfus Bilgisi'
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