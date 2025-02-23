const datalocal =  {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Baykan",
        "path": "M-200,328,-217,357,-224,412,-254,460,-228,470,-200,475,-144,473,-83,472,-49,475,-16,440L8,422,15,396L14,381L-5,381,-21,364,-45,372L-144,352,-191,337z"
      },
      {
        "id": "id1",
        "name": "Şirvan",
        "path": "M-46,474,-16,442,9,422L15,392L14,380,48,338,69,326,116,318,157,328,226,382,331,418,327,441,301,468,259,490,196,504,120,510,93,522,73,499,59,491,-31,480z"
      },
      {
        "id": "id2",
        "name": "Tillo",
        "path": "M-6,485,62,492,77,502,61,518,46,545,14,548,12,525z"
      },
      {
        "id": "id3",
        "name": "Eruh",
        "path": "M-101,677,-101,655L-85,640,-83,622,-61,606,-33,562,-20,549L47,545,61,519,76,505,93,522,146,538,167,542,200,541,216,547,222,557,219,568,211,578,245,609,253,634,273,657,243,697,191,737,111,733L80,740L53,734,21,739,-26,733,-79,702,-87,677z"
      },
      {
        "id": "id4",
        "name": "Siirt Merkez",
        "path": "M-140,473,-86,472,-41,475,-29,480L-5,482L4,509,12,526,14,548,-19,550,-38,570L-60,608L-84,623,-84,603,-107,560,-121,514z"
      },
      {
        "id": "id5",
        "name": "Kurtalan",
        "path": "M-101,675,-101,655,-83,640,-83,603,-104,561,-119,516,-140,471,-186,475,-218,472L-255,457L-279,470,-324,477,-328,510,-354,525,-374,558,-343,586,-295,603,-245,600,-194,605,-167,607,-165,630,-186,671,-159,700z"
      },
      {
        "id": "id6",
        "name": "Pervari",
        "path": "M272,658,251,635,245,609L213,580,219,567,221,559,217,547,189,540,167,542,141,537,94,522,122,509,194,502,249,492L300,467L326,441,331,418,371,437,406,446,442,487L515,438L548,452,587,445,607,470,609,500,634,535,606,610,604,651L570,632,517,620,465,619L419,590,376,590,334,606,297,631z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 26338
      },
      {
        "id": "id1",
        "y": 20779
      },
      {
        "id": "id2",
        "y": 4441
      },
      {
        "id": "id3",
        "y": 20011
      },
      {
        "id": "id4",
        "y": 184163
      },
      {
        "id": "id5",
        "y": 62232
      },
      {
        "id": "id6",
        "y": 29448
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Siirt İlçeleri Nüfus Bilgisi'
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