const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Erzin",
        "path": "M164,444,159,437,166,428,175,418,210,419,218,427,200,441,191,440,187,442,182,438,175,435z"
      },
      {
        "id": "id1",
        "name": "Dörtyol",
        "path": "M188,443,199,456,202,463,203,475,212,476,212,484,222,482,226,470,227,457,231,453,232,446,235,442,235,437,239,433,236,428,228,430,218,427,201,441,190,440z"
      },
      {
        "id": "id2",
        "name": "Hassa",
        "path": "M240,433,262,449,266,451,257,485,245,485,240,482,223,482,227,470,227,457,232,452,232,446,235,443,236,437z"
      },
      {
        "id": "id3",
        "name": "İskenderun",
        "path": "M222,482,219,488,209,501,209,505,202,505,187,514,182,520,185,527,169,535,162,541,152,544,146,551,143,547,143,541,161,519,180,503,200,492,203,482,202,475,212,477,212,483z"
      },
      {
        "id": "id4",
        "name": "Kırıkhan",
        "path": "M222,482,210,500,209,506,209,513,207,524,215,531,214,544,221,545,226,544,232,540,235,540,235,534,239,528,238,525,252,519L250,511,257,485,245,485L239,482z"
      },
      {
        "id": "id5",
        "name": "Kumlu",
        "path": "M253,519,254,525,266,542,262,546,260,550,257,552,248,547,243,541,236,540,235,534,240,529,238,525z"
      },
      {
        "id": "id6",
        "name": "Belen",
        "path": "M209,505,209,514,206,524,200,521,185,527,183,520,188,513,201,505z"
      },
      {
        "id": "id7",
        "name": "Altınözü",
        "path": "M224,562,228,562,226,566,227,591,225,598,214,603,205,603,202,608,200,606,200,594,196,587,195,581,201,574,205,563,216,565,221,565z"
      },
      {
        "id": "id8",
        "name": "Yayladağı",
        "path": "M202,608,199,613,199,623,196,630,194,629,190,622,162,610,170,597,169,595,182,594,186,596,195,597,200,600,199,606z"
      },
      {
        "id": "id9",
        "name": "Samandağı",
        "path": "M181,593,174,588,174,584,186,574,186,572,181,567,179,561,169,550,162,540,152,544,146,551,158,570,164,580,169,594z"
      },
      {
        "id": "id10",
        "name": "Reyhanlı",
        "path": "M228,562,229,559,249,556,259,558,269,556,270,547,266,542,262,546,261,550,258,551,248,547,243,541,233,540,227,544,221,545,209,544,207,546,206,548,208,549,213,548,217,553,224,552,225,556,224,556,224,562z"
      },
      {
        "id": "id11",
        "name": "Hatay Merkez",
        "path": "M200,599,200,593,196,588,194,581,201,573,206,562,216,565,221,564,224,562,223,556,225,555,224,552,217,553,213,549,208,549,206,548,209,544,213,544,215,531,206,525,199,522,169,535,163,540,171,552,179,560,181,568,187,572,186,575,175,584,175,587,186,597,196,597z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 42425
      },
      {
        "id": "id1",
        "y": 129276
      },
      {
        "id": "id2",
        "y": 55604
      },
      {
        "id": "id3",
        "y": 227498
      },
      {
        "id": "id4",
        "y": 106975
      },
      {
        "id": "id5",
        "y": 14971
      },
      {
        "id": "id6",
        "y": 1887
      },
      {
        "id": "id7",
        "y": 66533
      },
      {
        "id": "id8",
        "y": 41698
      },
      {
        "id": "id9",
        "y": 120600
      },
      {
        "id": "id10",
        "y": 113615
      },
      {
        "id": "id11",
        "y": 298620
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Hatay İlçeleri Nüfus Bilgisi'
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