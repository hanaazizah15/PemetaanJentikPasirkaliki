var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_pasirkaliki_1 = new ol.format.GeoJSON();
var features_pasirkaliki_1 = format_pasirkaliki_1.readFeatures(json_pasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasirkaliki_1.addFeatures(features_pasirkaliki_1);
var lyr_pasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasirkaliki_1, 
                style: style_pasirkaliki_1,
                popuplayertitle: "pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/pasirkaliki_1.png" /> pasirkaliki'
            });
var format_buffered_2 = new ol.format.GeoJSON();
var features_buffered_2 = format_buffered_2.readFeatures(json_buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_2.addFeatures(features_buffered_2);
var lyr_buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_2, 
                style: style_buffered_2,
                popuplayertitle: "buffered",
                interactive: true,
                title: '<img src="styles/legend/buffered_2.png" /> buffered'
            });
var format_SUNGAI_AR_25K_3 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_3 = format_SUNGAI_AR_25K_3.readFeatures(json_SUNGAI_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_3.addFeatures(features_SUNGAI_AR_25K_3);
var lyr_SUNGAI_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_3, 
                style: style_SUNGAI_AR_25K_3,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_3.png" /> SUNGAI_AR_25K'
            });
var format_JALAN_AR_25K_4 = new ol.format.GeoJSON();
var features_JALAN_AR_25K_4 = format_JALAN_AR_25K_4.readFeatures(json_JALAN_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_AR_25K_4.addFeatures(features_JALAN_AR_25K_4);
var lyr_JALAN_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_AR_25K_4, 
                style: style_JALAN_AR_25K_4,
                popuplayertitle: "JALAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_AR_25K_4.png" /> JALAN_AR_25K'
            });
var format_UTMPerindukanVektortitik_perindukan_vektor_5 = new ol.format.GeoJSON();
var features_UTMPerindukanVektortitik_perindukan_vektor_5 = format_UTMPerindukanVektortitik_perindukan_vektor_5.readFeatures(json_UTMPerindukanVektortitik_perindukan_vektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMPerindukanVektortitik_perindukan_vektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMPerindukanVektortitik_perindukan_vektor_5.addFeatures(features_UTMPerindukanVektortitik_perindukan_vektor_5);
var lyr_UTMPerindukanVektortitik_perindukan_vektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMPerindukanVektortitik_perindukan_vektor_5, 
                style: style_UTMPerindukanVektortitik_perindukan_vektor_5,
                popuplayertitle: "UTM Perindukan Vektor — titik_perindukan_vektor",
                interactive: true,
                title: '<img src="styles/legend/UTMPerindukanVektortitik_perindukan_vektor_5.png" /> UTM Perindukan Vektor — titik_perindukan_vektor'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_pasirkaliki_1.setVisible(true);lyr_buffered_2.setVisible(true);lyr_SUNGAI_AR_25K_3.setVisible(true);lyr_JALAN_AR_25K_4.setVisible(true);lyr_UTMPerindukanVektortitik_perindukan_vektor_5.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_pasirkaliki_1,lyr_buffered_2,lyr_SUNGAI_AR_25K_3,lyr_JALAN_AR_25K_4,lyr_UTMPerindukanVektortitik_perindukan_vektor_5];
lyr_pasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_buffered_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', });
lyr_SUNGAI_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_AR_25K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UTMPerindukanVektortitik_perindukan_vektor_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', });
lyr_pasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_buffered_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', });
lyr_SUNGAI_AR_25K_3.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JALAN_AR_25K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UTMPerindukanVektortitik_perindukan_vektor_5.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', });
lyr_pasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_buffered_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', });
lyr_SUNGAI_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_AR_25K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UTMPerindukanVektortitik_perindukan_vektor_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', });
lyr_UTMPerindukanVektortitik_perindukan_vektor_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});