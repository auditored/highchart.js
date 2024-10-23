const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Eskipazar",
        "path": "M-421,597,-418,680,-350,722,-264,760,-243,779L-125,665,-13,649,-45,618L-59,596,-74,612,-98,612L-130,595L-162,589,-231,607,-282,574,-309,578,-346,609,-376,607,-392,602,-406,602z"
      },
      {
        "id": "id1",
        "name": "Karabük Merkez",
        "path": "M-59,595,-64,482,-88,458,-142,450,-159,439,-171,391,-195,382L-237,390,-301,446,-316,448,-354,440,-406,526,-440,559,-419,597,-407,601,-392,601,-376,608,-343,609,-309,579,-279,574,-229,607,-162,589,-126,595,-96,612L-70,612Z"
      },
      {
        "id": "id2",
        "name": "Ovacık",
        "path": "M-11,647,-41,623,-59,596,-63,482,-24,473,4,472,27,467L45,439L96,470,156,539,129,610z"
      },
      {
        "id": "id3",
        "name": "Safranbolu",
        "path": "M44,437,38,374,9,362,-11,335L-16,313,-66,265,-73,240,-64,210,-26,174,-21,151,-51,120,-81,160,-112,173,-141,200,-153,265,-180,293,-329,378,-326,396,-351,439,-316,447,-299,442,-239,390,-192,382,-169,390,-156,440,-140,450,-86,457,-64,481,-24,472,26,467z"
      },
      {
        "id": "id4",
        "name": "Eflani",
        "path": "M38,373,40,347,60,313,104,274,128,231,68,108,40,95,-11,122,-48,120,-19,151,-25,174L-60,208,-65,212,-71,237,-65,265,-14,315L-10,337,11,365Z"
      },
      {
        "id": "id5",
        "name": "Yenice",
        "path": "M-330,379,-353,392,-421,406,-476,425,-527,470,-557,520,-561,610,-420,627,-421,595,-441,558,-408,527,-326,395z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 14343
      },
      {
        "id": "id1",
        "y": 134486
      },
      {
        "id": "id2",
        "y": 5677
      },
      {
        "id": "id3",
        "y": 70043
      },
      {
        "id": "id4",
        "y": 10101
      },
      {
        "id": "id5",
        "y": 20592
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Karabük İlçeleri Nüfus Bilgisi'
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