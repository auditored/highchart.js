const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
      {
        "id": "id0",
        "name": "Akçakent",
        "path": "M-66,159,-74,178,-103,199,-130,217,-142,231,-148,245,-153,268,-163,290,-128,301,-97,307,-87,318,-89,335,-103,351,-100,357,-90,360,-52,356,-38,352,-28,356,-23,346,-11,336,-3,316,6,305,10,284,4,238,5,228,11,216,-46,178z"
      },
      {
        "id": "id1",
        "name": "Akpınar",
        "path": "M-164,292,-179,335,-192,349,-203,355,-213,398,-195,402,-179,400,-166,413,-147,434,-127,437,-116,443,-105,458,-95,473,-71,484,-43,449,-31,426,-27,398,-29,372,-30,364,-27,357,-38,351,-61,357,-82,359,-93,358,-100,358,-102,351,-89,336,-88,320,-96,308,-162,290z"
      },
      {
        "id": "id2",
        "name": "Kaman",
        "path": "M-211,397,-264,403,-295,432,-314,461,-338,522,-322,558,-244,607,-189,634,-165,620,-134,592,-87,528,-81,500,-71,483,-96,473,-116,443,-126,437,-147,434,-180,400,-196,401z"
      },
      {
        "id": "id3",
        "name": "Kırşehir Merkez",
        "path": "M-189,634,-167,644,-128,657,-135,685,-62,751,-46,748,-28,750,-14,761,5,792,26,818,40,811,48,798,51,778,56,763,64,758,51,738,46,721,49,692,58,652,43,605,43,574,27,558,20,533,19,513,27,489,59,423,61,408,71,391,86,372,40,373,8,364,-24,350,-31,364,-27,397,-32,430,-44,451,-73,484,-81,501,-87,529,-134,591,-164,620z"
      },
      {
        "id": "id4",
        "name": "Çiçekdağı",
        "path": "M11,215,69,204,113,217,126,251,171,288,152,327,222,382,211,411,193,405,163,405,142,402,127,395,107,372,41,373,1,362,-25,351,-24,346,-11,334,-5,316,4,306,9,283,3,238,6,224z"
      },
      {
        "id": "id5",
        "name": "Boztepe",
        "path": "M86,373,72,389,61,408,58,424,26,489,19,513,20,537,28,557,44,574,63,545,102,504,129,486,166,478,198,470,200,442,211,411,193,404,167,404,147,402,127,394,106,370z"
      },
      {
        "id": "id6",
        "name": "Mucur",
        "path": "M197,470,128,486,102,505,64,542,43,575,43,606,58,652,48,698,46,723,51,741,65,758,113,765,133,748,135,732,147,717,155,687,186,669,177,628,209,627,220,625,208,600,204,568,226,554,241,538,238,516,242,499,268,475,273,458,260,451,227,478,208,482z"
      }
    ],
    "data": [
      {
        "id": "id0",
        "y": 3792
      },
      {
        "id": "id1",
        "y": 7535
      },
      {
        "id": "id2",
        "y": 34285
      },
      {
        "id": "id3",
        "y": 162989
      },
      {
        "id": "id4",
        "y": 14480
      },
      {
        "id": "id5",
        "y": 5539
      },
      {
        "id": "id6",
        "y": 18559
      }
    ]
  }

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Kırşehir İlçeleri Nüfus Bilgisi'
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