var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_1.addFeatures(features_1_1);
var lyr_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_1, 
                style: style_1_1,
                interactive: true,
                title: '<img src="styles/legend/1_1.png" /> 1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1_1];
lyr_1_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_1_1.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_1_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});