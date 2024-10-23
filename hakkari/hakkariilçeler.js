const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Hakkari Merkez",
        "path": "M-79,188,-87,222,-102,250,-108,306,-120,353,-121,430,-93,442,-69,442L-55,435,-36,438,-25,495,-6,523,15,527L73,503,103,502,136,510,154,522,194,522,219,507,239,456,241,410,224,352,169,265,161,226,184,205,128,198,101,187,69,192,20,192,-35,185,-53,190z"
      },
      {
        "id": "id1",
        "name": "Çukurca",
        "path": "M-120,432,-118,501,-86,548,-46,583,13,593,108,597,184,592,211,550L230,534L218,508,194,524,152,522,136,510,107,502,74,502,14,527,-6,522,-26,494,-36,438,-54,435,-68,443,-94,442z"
      },
      {
        "id": "id2",
        "name": "Yüksekova",
        "path": "M231,533,243,521,268,517,283,523,309,522,373,548,388,513,384,485,402,466,431,460,436,434,455,414,513,373,559,360,613,355,612,277,620,220L633,200,606,161,560,212L515,250,442,245,394,266,379,257,400,211,390,165,367,143,323,178L285,197L239,190,209,188,184,205,161,226,170,267,224,352,241,407,239,456,218,508z"
      },
      {
        "id": "id3",
        "name": "Şemdinli",
        "path": "M373,549,384,554,405,588,409,618,405,643,384,651,362,699,402,787,441,799,456,771,461,745,518,724,559,695,607,649,648,624,724,639,740,655,760,561,759,536L750,517,652,432,614,420L613,355,557,360,513,372,456,413,436,433,431,459,402,466,385,484,388,515z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 77273
      },
      {
        "id": "id1",
        "y": 17734
      },
      {
        "id": "id2",
        "y": 121969
      },
      {
        "id": "id3",
        "y": 44742
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Hakkari İlçeleri Nüfus Bilgisi'
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