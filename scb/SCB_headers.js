export const SCB_URL = 'https://api.scb.se/OV0104/v1/doris/sv/ssd/START/MI/MI0107/TotaltUtslappN'

export const headers = {
    method: 'post',
    body: JSON.stringify({
        "query": [{
            "code": "Vaxthusgaser",
            "selection": {
                "filter": "item",
                "values": [
                "CO2-ekv.",
                "CO2",
                "CO2-BIO",
                "CH4",
                "CH4_CO2-ekv.",
                "N2O",
                "N2O_CO2-ekv.",
                "HFC",
                "PFC",
                "SF6",
                "SF6_CO2-ekv."
                ]
            }
        }, {
        "code": "Sektor",
        "selection": {
            "filter": "item",
            "values": [
            "0.1",
            "0.2",
            "0.3",
            "0.4",
            "1.0",
            "2.0",
            "3.0",
            "4.0",
            "8.0",
            "5.0",
            "6.0",
            "7.0",
            "9.0",
            "10.0"
            ]
        }
        }
        ],
        "response": {
            "format": "json"
        }
    })
}

export const sectorValueTexts = [{
    val: '0.1',
    text: "NATIONELL TOTAL (exklusive LULUCF, exklusive internationella transporter)"
    }, {
    val: '0.2',
    text: "NATIONELL TOTAL (exklusive LULUCF, inklusive internationella transporter)"
    }, {
    val: '0.3',
    text: "NATIONELL TOTAL (inklusive LULUCF, exklusive internationella transporter)"
    }, {
    val: '0.4',
    text: "NATIONELL TOTAL (inklusive LULUCF, inklusive internationella transporter)"
    }, {
    val: '1.0',
    text: "ARBETSMASKINER"
    }, {
    val: '2.0',
    text: "AVFALL",
    }, {
    val: '3.0',
    text: "EL OCH FJÄRRVÄRME",
    }, {
    val: '4.0',
    text: "INDUSTRI",
    }, {
    val: '8.0',
    text: "INRIKES TRANSPORTER"
    }, {
    val: '5.0',
    text: "UTRIKES TRANSPORTER"
    }, {
    val: '6.0',
    text: "JORDBRUK"
    }, {
    val: '7.0',
    text: "ÖVRIG PRODUKTANVÄNDNING"
    }, {
    val: '9.0',
    text: "EGEN UPPVÄRMNING AV BOSTÄDER"
    }, {
    val: '10.0',
    text: "MARKANVÄNDNING, FÖRÄNDRAD MARKANVÄNDNING OCH SKOGSBRUK (LULUCF), TOTALT"
}]

export const typeValueTexts = [{
    val: "CO2-ekv.",
    text: "Totala Växthusgaser (kt CO2-ekv.)"
    }, {
    val: "CO2",
    text: "Koldioxid (CO2) (kt)"
    }, {
    val: "CO2-BIO",
    text: "Biogen koldioxid (CO2) från bränslen (kt)"
    }, {
    val: "CH4",
    text: "Metan (CH4) (t)"
    }, {
    val: "CH4_CO2-ekv.",
    text: "Metan (CH4) (kt CO2-ekv.)"
    }, {
    val: "N2O",
    text: "Lustgas (N2O) (t)"
    }, {
    val: "N2O_CO2-ekv.",
    text: "Lustgas (N2O) (kt CO2-ekv.)"
    }, {
    val: "HFC",
    text: "Väte-fluor-kol-föreningar (HFCs) (kt CO2-ekv.)"
    }, {
    val: "PFC",
    text: "Fluor-kol-föreningar (PFCs) (kt CO2-ekv.)"
    }, {
    val: "SF6",
    text: "Svavelhexafluorid (SF6) (kg)"
    }, {
    val: "SF6_CO2-ekv.",
    text: "Svavelhexafluorid (SF6) (kt CO2-ekv.)"
}]