const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Gerçüş",
        "path": "M-314,773,-267,836,-233,902L-165,902,-82,898,-14,886,9,847,32,823,21,817,14,801,1,802L-19,822,-186,807,-203,799,-210,785,-213,752,-241,744,-249,745,-274,731,-289,756z"
      },
      {
        "id": "id1",
        "name": "Hasankeyf",
        "path": "M-211,751,-209,780,-204,797,-186,806,-19,821L0,802L16,801,24,817,32,824,42,815L155,772L146,751,134,751,81,773,57,744,37,738,14,752,-86,762,-129,765L-170,762Z"
      },
      {
        "id": "id2",
        "name": "Batman Merkez",
        "path": "M-272,732,-308,711,-316,677,-272,643,-251,599,-204,609,-192,609,-183,624,-185,632,-197,638,-203,647,-186,687,-152,698,-84,760,-114,764,-159,762,-212,750,-241,744,-250,744z"
      },
      {
        "id": "id3",
        "name": "Beşiri",
        "path": "M-83,760,14,750,36,737,60,745,76,707,73,689,7,685L-42,685L-80,671L-111,646,-93,613,-67,600,-66,572,-86,554,-123,550,-144,550,-181,539,-231,535,-251,597,-203,608,-193,608,-184,622,-184,633,-198,640,-201,647,-186,686,-151,697z"
      },
      {
        "id": "id4",
        "name": "Kozluk",
        "path": "M-226,534,-217,505,-211,451,-221,408,-155,405,-134,404,-76,387,-36,347L10,298L31,291,42,381,43,437L45,440,29,471,24,510,-2,554,-36,570,-66,574,-85,553L-141,548,-179,539z"
      },
      {
        "id": "id5",
        "name": "Sason",
        "path": "M-220,407,-130,402,-74,386,-11,321L10,298,29,290,16,224,-6,203,-60,198L-104,212,-93,238,-101,251,-114,255,-143,247,-200,282,-217,364z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 21958
      },
      {
        "id": "id1",
        "y": 7969
      },
      {
        "id": "id2",
        "y": 491811
      },
      {
        "id": "id3",
        "y": 32378
      },
      {
        "id": "id4",
        "y": 61297
      },
      {
        "id": "id5",
        "y": 31792
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Batman İlçeleri Nüfus Bilgisi'
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