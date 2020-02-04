const express = require('express');


const serv = express();

let array = [{
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC LEA",
        "vesselCode": null,
        "voyage": "DJ002R",
        "departure": {
            "date": 1579236360,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1583055360,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1579149960,
    "transitTime": 44,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC MASHA 3",
        "vesselCode": null,
        "voyage": "DJ003R",
        "departure": {
            "date": 1579511040,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1583690400,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1579424640,
    "transitTime": 48,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC LEA",
        "vesselCode": null,
        "voyage": "DJ004R",
        "departure": {
            "date": 1580500980,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1584900000,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1580414580,
    "transitTime": 51,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC ALIX 3",
        "vesselCode": null,
        "voyage": "DJ005R",
        "departure": {
            "date": 1580814600,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1585068180,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1580728200,
    "transitTime": 49,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC MASHA 3",
        "vesselCode": null,
        "voyage": "DJ006R",
        "departure": {
            "date": 1581224220,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1585504800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1581137820,
    "transitTime": 49,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC LEA",
        "vesselCode": null,
        "voyage": "DJ007R",
        "departure": {
            "date": 1582200180,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1586453760,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1582113780,
    "transitTime": 49,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC ALIX 3",
        "vesselCode": null,
        "voyage": "DJ008R",
        "departure": {
            "date": 1582513800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1586714400,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1582427400,
    "transitTime": 48,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC MASHA 3",
        "vesselCode": null,
        "voyage": "DJ009R",
        "departure": {
            "date": 1583038620,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1587319200,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1582952220,
    "transitTime": 49,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MSC LEA",
        "vesselCode": null,
        "voyage": "DJ010R",
        "departure": {
            "date": 1583899380,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "HPC - UKRAINA"
        },
        "arrival": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "service": "EAST MED TO BLACK SEA AND GREECE SERVICE"
    }, {
        "type": 1,
        "vesselName": "TBN",
        "vesselCode": "TBN",
        "voyage": "TBN",
        "departure": {
            "date": null,
            "portName": "Port Said East",
            "portUnloCode": "EGPSE",
            "terminal": null
        },
        "arrival": {
            "date": 1588152960,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": null
        },
        "service": "TBN"
    }],
    "cutOff": 1583812980,
    "transitTime": 49,
    "sealine": "MSCU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MAIRA XL",
        "vesselCode": null,
        "voyage": "0BX5CE1PL",
        "departure": {
            "date": 1579219200,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582156800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "NINGBO MEISHAN ISLAND INTERNATIONAL, MEISHAN, BEILUN, NINGBO CITY ZHEJIANG,CHINA NINGBO, 33 315800 CHINA"
        },
        "service": "BEX"
    }],
    "cutOff": 1578787200,
    "transitTime": 33,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "COSCO SHIPPING PANAMA",
        "vesselCode": null,
        "voyage": "0BX5EE1PL",
        "departure": {
            "date": 1579824000,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582243200,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "NINGBO MEISHAN ISLAND INTERNATIONAL, MEISHAN, BEILUN, NINGBO CITY ZHEJIANG,CHINA NINGBO, 33 315800 CHINA"
        },
        "service": "BEX"
    }],
    "cutOff": 1579392000,
    "transitTime": 28,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1583193600,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "NINGBO MEISHAN ISLAND INTERNATIONAL, MEISHAN, BEILUN, NINGBO CITY ZHEJIANG,CHINA NINGBO, 33 315800 CHINA"
        },
        "service": "BEX"
    }],
    "cutOff": 1579996800,
    "transitTime": 31,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582761600,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "WAI GAO QIAO TERMINAL PHASE 2, NO.1299 GANG HUA ROAD PUDONG NEW AREA SHANGHAI, 200137 CHINA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "EVER SAFETY",
        "vesselCode": null,
        "voyage": "0NW5DE1PL",
        "departure": {
            "date": 1582934400,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "WAI GAO QIAO TERMINAL PHASE 2, NO.1299 GANG HUA ROAD PUDONG NEW AREA SHANGHAI, 200137 CHINA"
        },
        "arrival": {
            "date": 1583020800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "NINGBO PORT GRP BEILUN 3RD CONT TER, NO. 8, JIXIANG ROAD BAIFENG TOWN, BEILUN, NINGBO NINGBO, 33 315800 CHINA"
        },
        "service": "Pacific Northwest - Loop 3 (NP3)"
    }],
    "cutOff": 1579996800,
    "transitTime": 29,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MAIRA XL",
        "vesselCode": null,
        "voyage": "0BX5CE1PL",
        "departure": {
            "date": 1579219200,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1581033600,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "TALOS",
        "vesselCode": null,
        "voyage": "0SC22E1PL",
        "departure": {
            "date": 1581292800,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "arrival": {
            "date": 1581811200,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "CHINA MERCHANT INT TERMINAL, PORT DISTRICT D , DAXIE DEVELOPMENT ZONE 86719823/ 86719794 NINGBO, 315812 CHINA"
        },
        "service": "FAL8"
    }],
    "cutOff": 1578787200,
    "transitTime": 30,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582156800,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "TAIPEI TRIUMPH",
        "vesselCode": null,
        "voyage": "0SC26E1PL",
        "departure": {
            "date": 1582502400,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "arrival": {
            "date": 1583020800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "CHINA MERCHANT INT TERMINAL, PORT DISTRICT D , DAXIE DEVELOPMENT ZONE 86719823/ 86719794 NINGBO, 315812 CHINA"
        },
        "service": "FAL8"
    }],
    "cutOff": 1579996800,
    "transitTime": 30,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "MAIRA XL",
        "vesselCode": null,
        "voyage": "0BX5CE1PL",
        "departure": {
            "date": 1579219200,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1581033600,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "COSCO SHIPPING KILIMANJARO",
        "vesselCode": null,
        "voyage": "0RE52E1PL",
        "departure": {
            "date": 1581292800,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "arrival": {
            "date": 1581811200,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "ZHOUSHAN YONGZHOU CONT TERMINAL, Container Terminals of DAPUKOU, Jintang Town, Dinghai District, Zhoushan, PRC NINGBO, 310633 CHINA"
        },
        "service": "Red Sea Express (RSX)"
    }],
    "cutOff": 1578787200,
    "transitTime": 30,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582761600,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "WAI GAO QIAO TERMINAL PHASE 4, NO.1 GANG JIAN ROAD PUDONG DISTRICT SHANGHAI, 200137 CHINA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "CMA CGM NEW JERSEY",
        "vesselCode": null,
        "voyage": "0QA5BS1PL",
        "departure": {
            "date": 1582934400,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "WAI GAO QIAO TERMINAL PHASE 4, NO.1 GANG JIAN ROAD PUDONG DISTRICT SHANGHAI, 200137 CHINA"
        },
        "arrival": {
            "date": 1583020800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "NINGBO BEILUN SECOND CONT TERMINAL, No.227 YingBin Road Beilun, Ningbo NINGBO, 315800 CHINA"
        },
        "service": "China Southeast Asia Service 6 (CS6)"
    }],
    "cutOff": 1579996800,
    "transitTime": 30,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582156800,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "CMA CGM NEVADA",
        "vesselCode": null,
        "voyage": "0FM34E1PL",
        "departure": {
            "date": 1582416000,
            "portName": "PORT KLANG",
            "portUnloCode": "MYPKG",
            "terminal": "WESTPORT TERMINAL, P.O.BOX 266, PULAU INDAH, PORT KELANG, 42009 MALAYSIA"
        },
        "arrival": {
            "date": 1583020800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "CHINA MERCHANT INT TERMINAL, PORT DISTRICT D , DAXIE DEVELOPMENT ZONE 86719823/ 86719794 NINGBO, 315812 CHINA"
        },
        "service": "FAL3"
    }],
    "cutOff": 1579996800,
    "transitTime": 30,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582761600,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "YANGSHAN DEEP WATER PORT PHASE1 TER, NO.1 TongHui Road LuChao Town PuDong, Shanghai SHANGHAI, CHINA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "CMA CGM NEVADA",
        "vesselCode": null,
        "voyage": "0FM34E1PL",
        "departure": {
            "date": 1583020800,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "YANGSHAN DEEP WATER PORT PHASE1 TER, NO.1 TongHui Road LuChao Town PuDong, Shanghai SHANGHAI, CHINA"
        },
        "arrival": {
            "date": 1583020800,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "CHINA MERCHANT INT TERMINAL, PORT DISTRICT D , DAXIE DEVELOPMENT ZONE 86719823/ 86719794 NINGBO, 315812 CHINA"
        },
        "service": "FAL3"
    }],
    "cutOff": 1579996800,
    "transitTime": 30,
    "sealine": "APLU"
}, {
    "transShipments": [{
        "type": 1,
        "vesselName": "CMA CGM ARKANSAS",
        "vesselCode": null,
        "voyage": "0BX5GE1PL",
        "departure": {
            "date": 1580428800,
            "portName": "ODESSA",
            "portUnloCode": "UAODS",
            "terminal": "BRUKLIN-KIEV PORT, 6 KHLEBNAYA GAVAN ODESA, 65003 UKRAINE"
        },
        "arrival": {
            "date": 1582761600,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "YANGSHAN DEEP WATER PORT PHASE1 TER, NO.1 TongHui Road LuChao Town PuDong, Shanghai SHANGHAI, CHINA"
        },
        "service": "BEX"
    }, {
        "type": 1,
        "vesselName": "COSCO SHIPPING ARIES",
        "vesselCode": null,
        "voyage": "0FA5TW1PL",
        "departure": {
            "date": 1583020800,
            "portName": "SHANGHAI",
            "portUnloCode": "CNSHA",
            "terminal": "YANGSHAN DEEP WATER PORT PHASE1 TER, NO.1 TongHui Road LuChao Town PuDong, Shanghai SHANGHAI, CHINA"
        },
        "arrival": {
            "date": 1583107200,
            "portName": "NINGBO",
            "portUnloCode": "CNNGB",
            "terminal": "NINGBO PORT GRP BEILUN 3RD CONT TER, NO. 8, JIXIANG ROAD BAIFENG TOWN, BEILUN, NINGBO NINGBO, 33 315800 CHINA"
        },
        "service": "FAL2"
    }],
    "cutOff": 1579996800,
    "transitTime": 30,
    "sealine": "APLU"
}]
//Enable CORS
serv.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
serv.get('/', (req,res) => {
    res.send(array)
})

serv.listen(3012, () => {
    console.log('Server was started')
})