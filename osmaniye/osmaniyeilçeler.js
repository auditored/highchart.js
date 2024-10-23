const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Sumbas",
        "path": "M144,159,104,182,58,227,-51,430,-52,520L-15,516,59,457,109,402,116,333,125,296L126,271L150,209L152,185z"
      },
      {
        "id": "id1",
        "name": "Kadirli",
        "path": "M-51,518,-42,577,-76,647L-65,660,0,625L49,610,59,595L92,572,145,563L183,596,209,607,226,602,249,562,252,539,242,507,245,485,261,455,282,433,251,415,233,397,214,259,269,169L285,127,244,125,170,143L141,160,153,183,144,232,126,273,124,298L115,330,109,403,50,464,-14,515Z"
      },
      {
        "id": "id2",
        "name": "Toprakkale",
        "path": "M48,610,59,595,92,572,148,562,171,583L185,596,206,605,280,592L333,605,317,622,291,641,258,676,214,710,174,725,118,737,119,750,129,763,76,759,91,652,77,626z"
      },
      {
        "id": "id3",
        "name": "Osmaniye Merkez",
        "path": "M130,765,118,750,116,737,172,727,214,710,253,679L300,635L321,619,330,604,379,600,376,630,385,641,409,646,424,643,434,649,434,678,411,687,404,694,403,709,433,722,399,822,351,831,319,827,293,815,268,787,249,770z"
      },
      {
        "id": "id4",
        "name": "Hasanbeyli",
        "path": "M433,722,403,709,404,694,411,686,435,678,433,649,424,642,409,646,385,641,377,631,379,602,416,593,512,592,548,597,472,659z"
      },
      {
        "id": "id5",
        "name": "Bahçe",
        "path": "M565,450,493,519,468,540,382,586,380,601,415,594,515,593,548,596,558,578,613,510,613,505,589,477z"
      },
      {
        "id": "id6",
        "name": "Düziçi",
        "path": "M566,450,469,539,383,586,380,601,330,604,280,593,227,603,249,561,252,538,242,507,244,486,260,457,281,433,349,430,400,411,465,394,494,396,541,424z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 13375
      },
      {
        "id": "id1",
        "y": 127513
      },
      {
        "id": "id2",
        "y": 21421
      },
      {
        "id": "id3",
        "y": 280068
      },
      {
        "id": "id4",
        "y": 5455
      },
      {
        "id": "id5",
        "y": 23218
      },
      {
        "id": "id6",
        "y": 86616
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Osmaniye İlçeleri Nüfus Bilgisi'
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