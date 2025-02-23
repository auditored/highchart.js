const datalocal = {
    "type": "map",
    "joinBy": "id",
    "mapDatalocal": [
        {
            "id": "id0",
            "name": "Besni",
            "path": "M-506,755,-485,771,-454,770,-414,754,-384,759,-307,790,-290,809,-293,816,-224,838,-226,810,-235,784,-262,750,-265,710,-274,696,-294,680,-338,656,-422,649,-434,663,-440,681,-464,692,-475,731z"
        },
        {
            "id": "id1",
            "name": "Adıyaman Merkez",
            "path": "M-222,836,-180,799,-139,789,-142,760,-131,728,-116,713,-74,675,-66,640,-85,594,-93,561,-117,547,-118,534,-146,529,-153,525,-227,527,-275,545,-269,600,-286,629,-287,652,-293,666,-292,680,-272,698,-264,711,-261,751,-233,784,-225,810z"
        },
        {
            "id": "id2",
            "name": "Samsat",
            "path": "M-139,789,-86,789,-70,781,-18,730,15,717,-3,703,-42,696,-68,705,-100,701,-130,727,-141,762z"
        },
        {
            "id": "id3",
            "name": "Kahta",
            "path": "M-99,699,-68,704,-40,695,-2,702,16,719,48,703,98,691,81,661,146,627,152,597,130,589,120,575,117,535,101,537,92,544,62,533,65,453,5,479,-25,503,-41,537,-95,546,-102,556,-91,562,-83,597,-65,641,-73,677z"
        },
        {
            "id": "id4",
            "name": "Gerger",
            "path": "M62,531,69,425,137,417,184,400,205,386,216,367,234,378,260,360,282,375,284,399,269,449,196,488,153,545,152,597,131,589,120,574,117,534,99,537,92,544z"
        },
        {
            "id": "id5",
            "name": "Sincik",
            "path": "M-43,401,-12,426,70,423,67,453,3,479,-24,502,-40,537,-95,546,-101,555,-116,546,-118,532,-100,497,-105,488,-128,469,-129,456,-114,429,-80,387,-59,371,-44,336,-7,360,-10,371z"
        },
        {
            "id": "id6",
            "name": "Çelikhan",
            "path": "M-247,430,-221,518,-227,527,-152,524,-145,530,-118,533,-99,497,-106,486,-129,467,-129,457,-85,391,-58,371,-44,336,-121,358,-131,371z"
        },
        {
            "id": "id7",
            "name": "Tut",
            "path": "M-292,679,-339,655,-395,650,-405,637,-407,620,-410,607,-434,600,-436,574,-393,552,-356,554,-327,564,-275,545,-269,601,-288,629,-287,652,-293,665z"
        },
        {
            "id": "id8",
            "name": "Gölbaşı",
            "path": "M-395,650,-423,650,-432,660,-440,681,-464,692,-476,731,-509,757,-546,735,-567,730,-583,708,-585,658,-536,617,-518,591,-437,574,-434,601,-410,610,-406,636z"
        }
    ],
    "data": [
        {
            "id": "id0",
            "y": 76415
        },
        {
            "id": "id1",
            "y": 284839
        },
        {
            "id": "id2",
            "y": 6898
        },
        {
            "id": "id3",
            "y": 132303
        },
        {
            "id": "id4",
            "y": 15679
        },
        {
            "id": "id5",
            "y": 16477
        },
        {
            "id": "id6",
            "y": 14856
        },
        {
            "id": "id7",
            "y": 9635
        },
        {
            "id": "id8",
            "y": 47876
        }
    ]
}

const mapChart = Highcharts.mapChart('container', {

    chart: {
        map: datalocal,

        height: 600
    },

    title: {
        text: 'Adıyaman İlçeleri Nüfus Bilgisi'
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