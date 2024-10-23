const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Genç",
        "path": "M-294,828,-221,825,-207,804,-202,755,-190,744,-117,746,-78,755,-7,755L103,701,74,676,47,672,9,629,-6,603L-9,586,-79,611,-102,612,-118,621,-133,637,-156,654,-206,679,-217,680,-263,666,-266,685,-286,682,-298,675,-322,728,-324,742,-309,762,-299,769,-294,796z"
      },
      {
        "id": "id1",
        "name": "Solhan",
        "path": "M104,700,148,676,137,645,115,629,98,578,105,558,154,498,155,460,140,431,120,411,113,448,101,465,79,463,69,456,41,447,38,437,19,439,-12,464,-32,489,-11,532,-13,561,-7,588,-6,603,14,634,51,675,76,677z"
      },
      {
        "id": "id2",
        "name": "Karlıova",
        "path": "M-32,489,10,445,19,439,40,437L42,448,72,457,79,463,101,465,114,446,121,410,106,339,121,305,86,241,41,246L-35,180L-48,240,-53,258,-71,287L-70,302L-41,332,-44,336,-59,349,-71,373,-76,397,-91,407,-88,431L-95,449L-46,455z"
      },
      {
        "id": "id3",
        "name": "Yedisu",
        "path": "M-39,180,-46,187,-115,217,-130,216,-176,198,-184,215,-287,274,-263,280,-252,290,-234,281,-227,265,-215,268,-209,276,-186,275,-180,288,-158,300,-135,300,-91,304,-83,312L-70,303L-72,287,-52,255,-34,182z"
      },
      {
        "id": "id4",
        "name": "Kiğı",
        "path": "M-256,289,-275,310L-280,316,-329,335,-332,342,-324,359,-316,362,-299,400,-265,383,-250,400,-251,420,-232,425,-238,412,-234,385,-244,367,-238,350,-226,344,-217,335L-255,303Z"
      },
      {
        "id": "id5",
        "name": "Adaklı",
        "path": "M-231,425,-179,437,-156,445,-144,439,-121,457,-109,459,-99,455,-91,438,-88,430L-91,407,-75,397L-72,373,-61,351,-42,332,-69,304,-84,312,-92,304,-156,300,-181,287,-187,275,-206,277,-216,269,-226,266,-233,281,-254,292,-254,302,-215,337,-234,349,-241,358,-244,367,-232,384,-237,413z"
      },
      {
        "id": "id6",
        "name": "Yayladere",
        "path": "M-301,400,-376,435,-384,438,-390,448,-424,466,-411,433,-418,400,-397,361,-390,335,-344,349,-332,344,-324,360,-316,363z"
      },
      {
        "id": "id7",
        "name": "Bingöl Merkez",
        "path": "M-234,424,-256,430,-262,444,-281,465,-299,495,-301,546,-292,571,-285,584,-257,613,-254,632,-262,667,-211,680,-144,646,-117,618,-101,612L-75,610,-10,585,-14,554,-11,532,-29,497,-46,457,-95,450L-101,458,-114,459L-125,457,-146,441,-157,447,-185,436Z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 34178
      },
      {
        "id": "id1",
        "y": 33651
      },
      {
        "id": "id2",
        "y": 26819
      },
      {
        "id": "id3",
        "y": 2798
      },
      {
        "id": "id4",
        "y": 5035
      },
      {
        "id": "id5",
        "y": 8863
      },
      {
        "id": "id6",
        "y": 2304
      },
      {
        "id": "id7",
        "y": 172007
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Bingöl İlçeleri Nüfus Bilgisi'
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