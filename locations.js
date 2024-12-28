// [id, name, description, type (always 1 for now), x, y]

markers = [
['2724', 'Palomino Freeway Gas Station / 24/7', 'located inside the LTD', '1', '381.1359', '2552.3525'],
['2725', 'Palomino Freeway Gas Station / 24/7', 'located inside the LTD', '1', '390.0092', '2558.4895'],
['2726', 'Palomino Freeway Gas Station / 24/7', '', '1', '374.19186', '2560.6538'],
['2727', 'Route 68 Gas Station', '', '1', '2782.6873', '57.09941'],
['2728', 'Route 68 West Gas Station', '', '1', '2314.9097', '-2566.5317'],
['2729', 'Route 68 West Gas Station', '', '1', '2318.2852', '-2522.7458'],
['2730', 'Great Ocean Highway Gas Station - Paleto Bay', '360 degree camera', '1', '6603.2754', '179.58167'],
['2752', 'Sandy Shores  Gas Station', '360 degree camera', '1', '3776.5283', '2003.3433'],
['2753', 'Senora Freeway North Gas Station', '360 degree camera', '1', '6420.63', '1704.9832'],
['2754', 'San Chianski Gas Station', '360 degree camera', '1', '3264.7534', '2682.6519'],
['2761', 'Grapeseed Gas Station', '360 degree camera', '1', '4930.761', '1689.0449'],
['2762', 'Grapeseed Gas Station', 'located inside the LTD', '1', '4920.866', '1700.9111'],
['2764', 'Route 68 Harmony Gas Station', '', '1', '2653.3018', '1207.8058'],
['2731', 'Pacific Bluffs Gas Station', '360 degree camera', '1', '-317.9182', '-2095.5227'],
['2732', 'Pacific Bluffs Gas Station', '', '1', '-329.9647', '-2073.4827'],
['2734', 'Strawberry Gas Station', '360 degree camera', '1', '-1262.2308', '266.7651'],
['2735', 'Strawberry Gas Station', '', '1', '-1275.513', '288.92426'],
['2737', 'Strawberry Gas Station', 'located inside the LTD', '1', '-1754.7528', '-43.331703'],
['2378', 'Strawberry Gas Station', 'located inside the LTD', '1', '-1752.0073', '-56.86824'],
['2735', 'Downtown Vinewood Gas Station', '360 degree camera', '1', '268.04623', '622.18835'],
['2739', 'La Puerta Marina Boat Gas Station', '', '1', '-1321.494', '-881.25397'],
['2743', 'Calais Avenue Gas Station', '360 degree camera', '1', '-1211.1619', '-524.80273'],
['2744', 'Calais Avenue Gas Station', 'located inside the LTD', '1', '-915.56244', '-717.07434'],
['2745', 'Calais Avenue Gas Station', 'located inside the LTD', '1', '-909.3354', '-705.5634'],
['2746', 'Davis Gas Station', '360 degree camera', '1', '-1562.638', '173.88959'],
['2747', 'Little Seoul Gas Station', '360 degree camera', '1', '-935.3711', '-720.18787'],
['2748', 'Little Seoul Gas Station', 'located inside the LTD', '1', '-915.64233', '-716.8132'],
['2749', 'Little Seoul Gas Station', 'located inside the LTD', '1', '-909.25433', '-705.96484'],
['2750', 'La Mesa Gas Station', '360 degree camera', '1', '-1029.1124', '813.5763'],
['2751', 'El Burro Heights Gas Station', '360 degree camera', '1', '-1400.6339', '1208.7578'],
['2755', 'Richman Glen Gas Station', '360 degree camera', '1', '799.85846', '-1802.3398'],
['2756', 'Richman Glen Gas Station', 'located inside the LTD', '1', '797.2091', '-1822.5564'],
['2759', 'Morningwood Gas Station', '360 degree camera', '1', '-274.42245', '-1435.2184'],
['2758', 'Morningwood Gas Station', 'located inside the LTD', '1', '-266.23068', '-1427.2966'],
['2765', 'Elysian Island Gas Station', '360 degree camera', '1', '-2532.1445', '-67.14964'],
['2767', 'Strawberry Clothing Store', '', '1', '-1400.2097', '83.82999'],
['2770', 'Strawberry Clothing Store', '', '1', '-1395.4282', '75.94687'],
['2771', 'Davis Clothing Store', '', '1', '-1824.8911', '200.92177'],
['2772', 'Davis Clothing Store', 'located inside the store', '1', '-1824.7402', '196.43095'],
['2773', 'Vespucci Canals Clothing Store', '', '1', '-1075.206', '-823.49445'],
['2774', 'Prosperity Street Promenade Clothing Store', '', '1', '-776.3548', '-1207.4557'],
['2775', 'Prosperity Street Promenade Clothing Store', '', '1', '-774.35394', '-1196.2584'],
['2776', 'Paleto Bay Clothing Store', '', '1', '6521.3633', '3.5810046'],
['2777', 'Paleto Bay Clothing Store', '', '1', '6514.7607', '5.8631697'],
['2778', 'Vespucci Flip Flops', '', '1', '-1146.675', '-1272.80'],
['2779', 'Vespucci Flip Flops', 'Located inside (Press Y)', '1', '-1147.214', '-1269.61'],
['2780', 'Grand Senora Desert Clothing Store', '', '1', '2702.4143', '1194.9103'],
['2781', 'Grand Senora Desert Clothing Store', '', '1', '2707.9468', '1194.2373'],
['2782', 'Hawick Clothing Store', '', '1', '-208.79768', '131.09521'],
['2783', 'Hawick Clothing Store', '', '1', '-218.2579', '124.40749'],
['2784', 'Las Lagunas Clothing Store', '', '1', '-302.01984', '-160.04555'],
['2766', 'Las Lagunas Clothing Store', '', '1', '-304.28256', '-156.07265'],
['2786', 'Clinton Avenue Clothing Store', '', '1', '348.40637', '324.04935'],
['2785', 'Clinton Avenue Clothing Store', '', '1', '-223.52122', '122.25638'],
['2787', 'Ponsonbys Portola Drive', 'Located inside', '1', '-149.90936', '-721.3296'],
['2788', 'Ponsonbys Portola Drive', '', '1', '-155.8315', '-711.2843'],
['2789', 'Ponsonbys Morningoowd', '', '1', '-225.73184', '-1451.5199'],
['2790', 'Ponsonbys Morningoowd', 'Located inside', '1', '-236.3748', '-1454.1176'],
['2791', 'Textile City Binco', '', '1', '-804.7103', '424.6292'],
['2792', 'Grapeseed Discount Clothing/cctvtp 2791', '', '1', '4828.2163', '1685.2671'],
['2793', 'Grapeseed Discount Clothing', '', '1', '4824.661', '1690.8274'],
['2794', 'Sandy Shores Discount Clothing', '', '1', '3605.3367', '1413.794'],
['2795', 'Sandy Shores Discount Clothing', 'Located inside (Press Y)', '1', '3609.4668', '1420.5222'],
['2796', 'Chumash Suburban', '', '1', '1057.4119', '-3168.7463'],
['2797', 'Chumash Suburban', 'Located inside', '1', '1050.2605', '-3170.9343'],
['2798', 'Mirror Fashion', '', '1', '-460.80658', '1207.1177'],
['2799', 'Mirror Fashion', 'Located inside (Press Y)', '1', '-465.80334', '1213.4996'],
['2801', 'Harmony Clothing Store', 'Located inside', '1', '2753.559', '618.0652'],
['2802', 'Tongva Valley Thrift Shop', '', '1', '2707.7405', '-1092.0857'],
['2803', 'Tongva Valley Thrift Shop', '', '1', '2707.4182', '-1100.8977'],
['2804', 'Burton Flecca Bank', '', '1', '-42.720478', '-353.63452'],
['2805', 'Burton Flecca Bank', 'Located inside', '1', '-47.81998', '-354.07092'],
['2806', 'Legion Square Flecca', 'Located inside', '1', '-1038.2579', '146.43538'],
['2807', 'Legion Square Flecca', '', '1', '-1035.0549', '145.86359'],
['2808', 'Hawick Avenue Bank', '', '1', '-276.78018', '311.0209'],
['2809', 'Hawick Avenue Bank', '', '1', '-271.04788', '302.36023'],
['2810', 'Ginger Street Bank', '', '1', '-814.82806', '-730.03143'],
['2811', 'Ginger Street Bank', '', '1', '-808.44586', '-720.8617'],
['2812', 'Rockford Hills Fleccak', '', '1', '-329.80557', '-1218.8646'],
['2813', 'Rockford Hills Flecca', 'Located inside', '1', '-331.54968', '-1216.5773'],
['2814', 'Vespucci LOMBANK', '', '1', '-1353.422', '-1105.5825'],
['2815', 'Vespucci LOMBANK', 'Located inside (Press Y)', '1', '-1353.422', '-1105.5825'],
['2816', 'Downtown Vinewood Bank', '', '1', '202.03595', '258.92596'],
['2818', 'Downtown Vinewood Bank Test', '', '1', '222.27489', '249.80647'],
['2820', 'Downtown Vinewood Bank', '', '1', '214.71742', '230.95062'],
['2821', 'Palomino Avenue Bank', '', '1', '-1109.8225', '-816.83307'],
['2822', 'Maze Bank Del Perro', 'Located inside (Press Y)', '1', '-828.9539', '-1313.2267'],
['2823', 'Maze Bank Del Perro', '', '1', '-836.1458', '-1314.6445'],
['2824', 'Banham Canyon Flecca', '', '1', '487.9375', '-2966.787'],
['2825', 'Banham Canyon Flecca', 'Located inside', '1', '478.71802', '-2963.476'],
['2826', 'Chumash Savings Bank', '', '1', '1132.9072', '-3142.464'],
['2827', 'Paleto Bay Bank', '', '1', '6461.089', '-112.093094'],
['2828', 'Paleto Bay Bank', '', '1', '6465.83', '-110.884'],
['2829', 'Route 68 Flecca', '', '1', '2705.5576', '1178.5792'],
['2830', 'Route 68 Flecca', '', '1', '2702.4917', '1171.6094'],
['2846', 'Hawick Ammunation', '', '1', '-48.785934', '250.19775'],
['2847', 'Hawick Ammunation', '', '1', '-40.133057', '245.06206'],
['2848', 'Paleto Bay Armory', 'Located inside', '1', '6081.0923', '-329.8282'],
['2849', 'Paleto Bay Armory', '', '1', '6080.4004', '-320.73508'],
['2850', 'Cross Munitions', 'Located inside', '1', '-1030.2648', '844.2028'],
['2851', 'Cross Munitions', '', '1', '-1023.6367', '848.3407'],
['2852', 'Harmony Armory', '', '1', '2774.584', '636.20807'],
['2853', 'Harmony Armory', 'Located inside. Press Y', '1', '2776.3916', '628.9646'],
['2858', 'Chumash Ammunation', '', '1', '1077.6862', '-3165.7388'],
['2859', 'Chumash Ammunation', 'Located inside', '1', '1084.8226', '-3170.0154'],
['2860', 'WeVi Cellphones', 'Located inside. Press Y', '1', '30.206343', '-88.251'],
['2861', 'WeVi Cellphones', '', '1', '37.30395', '-85.71386'],
['2862', '22 Phone Store', '', '1', '-980.0211', '-581.62213'],
['2863', '22 Phone Store', 'Located inside. Press Y', '1', '-986.07465', '-567.7285'],
['2864', 'Davis Telecommunications', '', '1', '-1639.686', '138.33658'],
['2865', 'Davis Telecommunications', 'Located inside. Press Y', '1', '-1643.2953', '140.68945'],
['2866', 'Paleto Bay Phone Store', '', '1', '6386.8213', '-167.53636'],
['2867', 'Paleto Bay Phone Store', 'Located inside. Press Y', '1', '6390.413', '-168.97198'],
['2868', 'Digital Den - Phone Store', '', '1', '-833.35315', '393.50723'],
['2869', 'Digital Den - Phone Store', 'Located inside. Press Y', '1', '-827.53046', '390.45627'],
['2870', 'YouPhone', 'Located inside. Press Y', '1', '-859.8592', '-722.41925'],
['2871', 'Vision Electronics', 'Located inside. Press Y', '1', '-1171.2601', '-1189.9979'],
['2545', 'Downtown Impound Lot', '', '1', '79.55094', '602.20154'],
['2872', 'Rockford Plaza Mall Main Entrance', '', '1', '-286.05457', '-151.04855'],
['2873', 'Rockford Plaza Mall Rear Entrance', '', '1', '-88.184044', '-208.24202'],
['2874', 'Richman Hotel Main Entrance', '', '1', '314.9653', '-1273.2747'],
['2875', 'Richman Hotel Rear Entrance', '', '1', '343.3136', '-1294.0397'],
['2436', 'Pillbox Medical Parking Lot', '', '1', '-551.8846', '337.48892'],
['2426', 'Pillbox Medical Upper Entrance', '', '1', '-585.7683', '292.87158'],
['2425', 'Pillbox Medical Lower Entrance', '', '1', '-591.54474', '363.85434'],
['40', 'Courthouse', '', '1', '-586.242', '-693.49'],
['41', 'Courthouse', '', '1', '-637.292', '-707.971'],
['42', 'Courthouse', '', '1', '-636.6', '-702.457'],
['43', 'Courthouse', '', '1', '-636.645', '-703.475'],
['73', 'Courthouse', '', '1', '-591.901', '-699.951'],
['75', 'Courthouse', '', '1', '-618.137', '-683.971'],
['76', 'Courthouse Lower Parking Lot', '', '1', '-585.567', '-690.483'],
['77', 'Courthouse', '', '1', '-615.197', '-672.422'],
['2890', 'Senora Freeway 24/7', 'Located inside. Press Y', '1', '6414.274', '1733.4232'],
['3023', 'Senora Freeway 24/7', '', '1', '6413.2563', '1726.3552'],
['2893', 'Route 68 24/7', 'Located inside. Press Y', '1', '2669.4536', '544.4179'],
['3024', 'Route 68 24/7', '', '1', '2672.9053', '540.17426'],
['2894', 'Rancho 24/7', 'Located inside. Press Y', '1', '-1954.4178', '234.25648'],
['3025', 'Rancho 24/7', '', '1', '-1946.5266', '232.96754'],
['2895', "Willie's Supermarket", 'Located inside. Press Y', '1', '6518.9585', '-62.29303'],
['3026', "Willie's Supermarket", '', '1', '6518.416', '-52.589832'],
['2896', 'San Chianski 24/7', 'Located inside. Press Y', '1', '3284.357', '2678.1604'],
['3027', 'San Chianski 24/7', '', '1', '3287.642', '2685.4292'],
['2897', 'Morningwood 24/7', 'Located inside. Press Y', '1', '-380.08963', '-1488.0873'],
['3028', 'Morningwood 24/7', '', '1', '-386.53082', '-1489.5317'],
['2898', 'Chumash 24/7', '', '1', '1004.96655', '-3244.5999'],
['2899', 'Vespucci Grocery 24/7', 'Located inside. Press Y', '1', '-1359.4861', '-1116.1898'],
['3029', 'Vespucci Grocery 24/7', '', '1', '-1364.2834', '-1110.0891'],
['2900', 'Banham Canyon 24/7', 'Located inside. Press Y', '1', '586.6296', '-3041.7322'],
['3030', 'Banham Canyon 24/7', '', '1', '594.754', '-3039.4294'],
['2901', 'Capital Boulevard Xero 24', 'Located inside. Press Y', '1', '-1266.9122', '297.55176'],
['2902', 'Atlee Street 24/7', 'Located inside. Press Y', '1', '-938.98816', '371.5296'],
['3031', 'Atlee Street 24/7', '', '1', '-941.7823', '370.48715'],
['2903', 'Hearty Taco 24/7', 'Located inside. Press Y', '1', '-1467.15', '440.76675'],
['3032', 'Hearty Taco 24/7', '', '1', '-1467.0834', '437.74902'],
['2904', 'Textile Convenience', 'Located inside. Press Y', '1', '-720.77747', '304.60233'],
['3033', 'Textile Convenience', '', '1', '-723.17847', '310.29196'],
['2905', 'Paleto Bay 24/7', 'Located inside. Press Y', '1', '6407.0024', '-89.426155'],
['3034', 'Paleto Bay 24/7', '', '1', '6411.463', '-91.06087'],
['2906', 'Bayview Lodge General Store 24/7', 'Located inside. Press Y', '1', '5837.1846', '-676.88995'],
['2907', 'Hawick 24/7', 'Located inside. Press Y', '1', '-155.15173', '531.35657'],
['3035', 'Hawick 24/7', '', '1', '-152.80716', '527.2775'],
['2908', 'Alta 24/7', 'Located inside. Press Y', '1', '-406.20697', '133.59563'],
['3036', 'Alta 24/7', '', '1', '-402.00174', '140.35129'],
['2909', 'Vinewood 24/7', 'Located inside. Press Y', '1', '327.89993', '378.3496'],
['3037', 'Vinewood 24/7', '', '1', '322.1626', '379.7719'],
['2910', 'Prosperity LTD', 'Located inside. Press Y', '1', '-223.16025', '77.23349'],
['2911', 'Grapeseed Farmers Market', 'Located inside. Press Y', '1', '4877.15', '1681.3158'],
['2912', "Mirror Park Farmer's Market", 'Located inside. Press Y', '1', '-777.5487', '1088.6995'],
['2913', "Mirror Park Farmer's Market", '', '1', '-776.0212', '1080.7527'],
['2914', 'Little Seoul Farmers Market', '', '1', '-1017.14386', '-581.4145'],
['2915', 'Vinewood Grocery Store', '', '1', '235.78067', '156.39981'],
['2916', 'Vinewood Grocery Store', 'Located inside. Press Y', '1', '243.64966', '153.98822'],
['2917', 'Paleto Bay Grocery Store', 'Located inside. Press Y', '1', '6047.475', '-382.882'],
['2918', 'Paleto Bay Hardware Store', '', '1', '6500.084', '-10.544732'],
['2919', 'Paleto Bay Hardware Store', 'Located inside. Press Y', '1', '6497.6953', '-7.730116'],
['2920', 'Chumash Hardware Store', '', '1', '1053.826', '-3154.1064'],
['2921', 'Chumash Hardware Store', 'Located inside. Press Y', '1', '1053.8903', '-3154.5325'],
['2922', 'Senora Hardware Store', '', '1', '1053.8903', '-3154.5325'],
['2923', 'Innocence Boulevard', '', '1', '-1388.1141', '-42.212444'],
['2924', 'Innocence Boulevard', 'Located inside. Press Y', '1', '-1391.223', '-10.292631'],
['2925', 'Oday Yardware', '', '1', '-345.7979', '1124.4608'],
['2926', 'Oday Yardware', 'Located inside. Press Y', '1', '-342.05405', '1125.1235'],
['2927', 'Handyman Hardware', '', '1', '-854.61725', '-535.09143'],
['2928', 'Handyman Hardware', 'Located inside. Press Y', '1', '-860.6748', '-531.74817'],
['2929', 'The Tool Shed', '', '1', '347.5794', '191.3973'],
['2930', 'The Tool Shed', 'Located inside. Press Y', '1', '344.02274', '178.99728'],
['2931', 'Tool Shop', '', '1', '-2107.8403', '718.87067'],
['2932', 'Tool Shop', 'Located inside. Press Y', '1', '-2102.1162', '715.5785'],
['2933', 'Harmony Tool Store', '', '1', '2744.3804', '596.4898'],
['2934', 'Harmony Tool Store', 'Located inside. Press Y', '1', '2751.664', '600.6488'],
['2935', 'Mobilier Home & Comfort', '', '1', '-255.82462', '-659.295'],
['2936', 'Mobilier Home & Comfort', 'Located inside. Press Y', '1', '-267.69757', '-664.9489'],
['2937', 'Pink Cage Motel', '', '1', '-223.71031', '328.45316'],
['2938', 'Pink Cage Motel', 'Located inside. Press Y', '1', '-196.98364', '315.6059'],
['2939', 'Bilingsgate Motel', '', '1', '-1749.9711', '569.06165'],
['2940', 'Bilingsgate Motel', 'Located inside. Press Y', '1', '-1779.475', '548.5482'],
['2941', 'Perrara Motel', '', '1', '-673.6764', '-1488.8242'],
['2942', 'Perrara Motel', 'Located inside. Press Y', '1', '-654.03577', '-1451.8529'],
['2943', 'Eastern Motel', '', '1', '2615.148', '338.1335'],
['2944', 'Motor Motel', '', '1', '2641.7336', '1106.1036'],
['2945', 'Motor Motel', 'Located inside. Press Y', '1', '2663.6687', '1139.8867'],
['2946', 'Dream View Motel', '', '1', '6336.8223', '-107.31137'],
['2947', 'Dream View Motel', 'Located inside. Press Y', '1', '6362.6655', '-82.96836'],
['2948', 'Crown Jewels Motel', '', '1', '-936.7391', '-1341.507'],
['2949', 'Crown Jewels Motel', 'Located inside. Press Y', '1', '-936.1031', '-1326.2236'],
['2950', 'Bayview Motel', '', '1', '5782.774', '-695.3385'],
['2951', 'Bayview Motel', 'Located inside. Press Y', '1', '5788.4814', '-681.5374'],
['2952', 'Macdonald Motel', '', '1', '-1818.5001', '386.14035'],
['2953', 'Macdonald Motel', 'Located inside. Press Y', '1', '-1818.5001', '386.14035'],
['2963', 'Mission Row Surgeon', '', '1', '-1073.1549', '325.50104'],
['2964', 'Fat Losers - Plastic Surgeon', 'Located inside. Press Y', '1', '-1156.2512', '-1275.7449'],
['2965', 'Penris Plastic Surgery', '', '1', '-412.62668', '-1021.57776'],
['2966', 'Penris Plastic Surgery', 'Located inside. Press Y', '1', '-421.27747', '-1014.5976'],
['2967', 'Sandy Shores Plastic Surgery', '', '1', '3683.282', '1822.6129'],
['2968', 'Sandy Shores Plastic Surgery', 'Located inside. Press Y', '1', '3676.6785', '1820.7108'],
['2969', 'Downtown DMV', '', '1', '-1088.9622', '105.75024'],
['2970', 'Paleto Bay DMV', '', '1', '6174.213', '-263.78674'],
['2971', 'San Andreas Ave, Vespucci Liquor', ' (Located inside. Press Y)', '1', '-906.47266', '-1223.8115'],
['2972', 'San Andreas Ave, Vespucci Liquor', '', '1', '-904.8347', '-1231.8599'],
['2975', 'Brewers Drop Liquor Store', '', '1', '-1315.372', '99.11962'],
['2976', 'Brewers Drop Liquor Store', ' (Located inside. Press Y)', '1', '-1305.8734', '100.52832'],
['2977', 'Davis Liquor Store', ' (Located inside. Press Y)', '1', '-1834.5082', '1.4939666'],
['2978', 'Lavish Liquor', ' (Located inside. Press Y)', '1', '236.7132', '-241.949'],
['2979', 'Goose Liquor', ' (Located inside. Press Y)', '1', '-1749.2388', '227.49115'],
['2980', 'Mirror Park Liquor', '', '1', '-442.44647', '1212.2463'],
['2981', 'Mirror Park Liquor', ' (Located inside. Press Y)', '1', '-436.78937', '1220.0669'],
['2982', 'Del Perro Liquor Store', ' (Located inside. Press Y)', '1', '-474.8165', '-1574.908'],
['2983', 'Del Perro Liquor Store', '', '1', '-479.20776', '-1578.2101'],
['2984', 'Forum Liquor', ' (Located inside. Press Y)', '1', '-1475.8412', '-21.178991'],
// doesn't want cameras, server owned store ['2985', 'La Mesa Liquor Market', ' (Located inside. Press Y)', '1', '-1070.3573', '808.3229'],
// owner doesn't want cameras, server owned store ['2986', 'La Mesa Liquor Market', '', '1', '-1074.5974', '806.31354'],
['2987', 'Scoops Liquor Barn', ' (Located inside. Press Y)', '1', '2708.091', '1166.7148'],
['2989', 'Paleto Bay Liquor Store', '', '1', '6068.3135', '-412.913'],
['2990', 'Paleto Bay Liquor Store', ' (Located inside. Press Y)', '1', '6069.725', '-406.91205'],
['2991', 'Roy Lower Liquor Store', '', '1', '-1785.6592', '375.89304'],
['2992', 'Roy Lower Liquor Store', ' (Located inside. Press Y)', '1', '-1783.1859', '381.23322'],
['2993', 'Jr. Market Liquor', '', '1', '2676.279', '570.0815'],
['2994', 'Jr. Market Liquor', ' (Located inside. Press Y)', '1', '2675.4062', '579.4561'],
['2996', 'Strawberry Liquor Store', ' (Located inside. Press Y)', '1', '2717.52', '-1093.2631'],
['2997', 'Strawberry Liquor Store', '', '1', '-1337.2949', '170.93614'],
['2998', 'The Liquor Hole', '', '1', '-1159.8241', '-887.8744'],
['2999', 'The Liquor Hole', ' (Located inside. Press Y)', '1', '-1153.4038', '-892.5947'],
['3000', 'Murrieta Heights Liquor', ' (Located inside. Press Y)', '1', '-981.81335', '1136.0211'],
['3001', 'Del Vecchio Liquor', '', '1', '6325.2563', '-153.31738'],
['3002', 'Del Vecchio Liquor', ' (Located inside. Press Y)', '1', '6323.9785', '-159.59515'],
['3003', 'Chinatown Liquor', '', '1', '-1036.0338', '69.05281'],
['3004', 'Chinatown Liquor', ' (Located inside. Press Y)', '1', '6323.9785', '-159.59515'],
['3005', 'Buschettas Liquor Store', ' (Located inside. Press Y)', '1', '-1043.6385', '-39.813805'],
['3006', 'Nicholls Liquor', '', '1', '-2234.5461', '892.2891'],
['3007', 'Nicholls Liquor', ' (Located inside. Press Y)', '1', '-2231.0945', '889.4174'],
['3008', 'Banham Canyon Liquor', '', '1', '390.46408', '-2968.8167'],
['3009', 'Banham Canyon Liquor', ' (Located inside. Press Y)', '1', '393.96304', '-2974.3174'],
['3010', 'South Los Liquor', '', '1', '-2061.7092', '456.92728'],
['3011', 'South Los Liquor', ' (Located inside. Press Y)', '1', '-2063.1885', '446.90015'],
['3012', 'Davis Barber Shop', ' (Located inside)', '1', '-1708.6776', '136.52377'],
['3013', 'Mirror Park Barber Shop', ' (Located inside)', '1', '-472.7573', '1211.9902'],
['3015', 'Paleto Bay Barber Shop', '', '1', '6228.3267', '-278.59628'],
['3016', 'Sandy Shores Barber Shop', ' (Located inside)', '1', '3729.8447', '1932.2236'],
['3017', 'Hawick Barber Shop', ' (Located inside)', '1', '-152.54279', '-33.13211'],
['3018', 'Vespucci Canals Shop', ' (Located inside)', '1', '-1117.3146', '-1282.5343'],
['3019', 'Rockford Hills Shop', ' (Located inside)', '1', '-182.42496', '-811.86237'],
['3020', 'Lightning Cutz', ' (Located inside. Press Y)', '1', '-940.3492', '-679.38776'],
['3021', 'Clinton Cuts', ' (Located inside. Press Y)', '1', '305.03723', '269.84937'],
['3022', 'Belinda Mays', ' (Located inside. Press Y)', '1', '622.6869', '-3048.3306'],
['3038', 'Vespucci Burgershot', '', '1', '-875.93787', '-1187.5369'],
['3039', 'Vespucci Burgershot', ' (Located inside. Press Y)', '1', '-888.7501', '-1189.368'],
['3040', 'Taco Farmer', ' (Located inside. Press Y)', '1', '2724.9766', '649.0249'],
['3041', 'Taco Farmer', '', '1', '2727.239', '649.57214'],
['3042', 'Davis Lucky Plucker', '', '1', '-1466.5087', '128.08234'],
['3043', 'Davis Lucky Plucker', ' (Located inside. Press Y)', '1', '-1466.5087', '128.08234'],
['3044', 'Paleto Grub Hub', '', '1', '6334.333', '-228.82532'],
['3045', 'Paleto Grub Hub', ' (Located inside. Press Y)', '1', '6334.8735', '-230.55067'],
    ['3046', 'Digital Den Mirror Park', 'Located inside. Press Y', '1', '-471.90564', '1133.9556'],
    ['3047', 'Digital Den Mirror Park', '1', '1', '-479.07986', '1135.6879'],
    ['3048', 'High Times Smoke Shop', '1', '1', '-221.30823', '166.41571'],
    ['3049', 'High Times Smoke Shop', 'Located inside. Press Y', '1', '-229.38185', '168.21123'],
   // not a server owned store  ['3050', 'Rich Money Smoke Shop', 'Located Inside. Press Y', '1', '-1334.2164', '117.441795'],
    ['3051', 'Pipe Dreams', 'Located inside. Press Y', '1', '-1194.5925', '-1189.9514'],
    ['3052', 'Holamns Tobacco Lounge', '1', '1', '6193.1855', '-316.55844'],
    ['3053', 'Holamns Tobacco Lounge', 'Located Inside. Press Y', '1', '6188.5723', '-310.88733'],
    ['3054', 'San Chianski Tobacco', 'Located inside. Press Y', '1', '3268.6226', '2667.774'],
    ['3055', 'Davis Smokes', 'Located inside. Press Y', '1', '-1651.9675', '125.07405'],
    ['3056', 'Davis Smokes', '1', '1', '-1647.8254', '119.532814'],
    ['3057', 'Montana Smokes', 'Located inside. Press Y', '1', '-429.8925', '-1514.0027'],
    ['3058', 'Montana Smokes', '1', '1', '-412.75156', '-1527.0386'],
    ['3061', 'Bluewood Tobacconist', 'Located inside. Press Y', '1', '4864.359', '1682.7091'],
    ['3062', 'Isla del Fumador', 'Located inside. Press Y', '1', '-436.0288', '1170.1779'],
    ['3063', 'The Voodoo Vault', '1', '1', '-1027.9073', '278.60617'],
    ['3064', 'The Voodoo Vault', 'Located inside. Press Y', '1', '-1025.7252', '281.06525'],
    // not a server owned store ['3065', 'Vespucci Smokes', 'Located inside. Press Y', '1', '-1377.0342', '-1159.1862'],
    ['3067', 'Paleto Bay Smokes Shop', 'Located inside. Press Y', '1', '6247.0234', '-264.88412'],
        ['3068', 'Mad Hatters', 'Located Inside. Press Y', '1', '-452.76035', '1137.8489'],
        ['3069', 'Blazing Tattoo', '1', '1', '180.82803', '322.0543'],
        ['3070', 'Blazing Tattoo', '1', '1', '176.37572', '323.90274'],
        ['3071', 'Evilside Ink', '1', '1', '-1653.694', '1316.1857'],
        ['3072', 'Evilside Ink', 'Located Inside. Press Y', '1', '-1650.6687', '1322.2482'],
        ['3073', 'Paleto Bay Tattoo Shop', '1', '1', '6205.14', '-293.61496'],
        ['3074', 'Paleto Bay Tattoo Shop', 'Located Inside. Press Y', '1', '6197.0264', '-293.6977'],
        ['3077', 'Los Muertos Ink', 'Located Inside. Press Y', '1', '-176.60619', '36.197548'],
        ['3078', 'Vespucci Ink', '1', '1', '-1607.3754', '-1133.6067'],
        ['3079', 'Vespucci Ink', 'Located Inside. Press Y', '1', '-1601.1901', '-1133.3276'],
        ['3080', 'Gutter Blood Ink', '1', '1', '-780.1825', '290.46152'],
        ['3081', 'Gutter Blood Ink', 'Located Inside. Press Y', '1', '-780.12964', '287.7342'],
        ['3082', 'Demon Ink', 'Located Inside. Press Y', '1', '-1302.1284', '-1324.3276'],
        ['3083', 'Demon Ink', 'Located Inside. Press Y', '1', '-1298.0125', '-1320.8558'],
        ['3084', 'Bastard Art', 'Located Inside. Press Y', '1', '-1243.6594', '-1336.9973'],
        ['3085', 'Graveyard Ink', 'Located Inside. Press Y', '1', '4084.8215', '2475.629'],
        ['3087', 'Bandit Ink', '1', '1', '276.02496', '-482.563'],
        ['3088', 'Bandit Ink', 'Located Inside. Press Y', '1', '283.403', '-484.5388'],
        ['3089', 'Raider Ink', '1', '1', '-1297.1815', '192.54803'],
        ['3090', 'Raider Ink', 'Located Inside. Press Y', '1', '-1283.4261', '192.57701'],
        ['3092', 'Mayhem Ink', '1', '1', '-732.38275', '-1281.1815'],
        ['3093', 'Mayhem Ink', 'Located Inside. Press Y', '1', '-739.05', '-1281.5784'],
        ['3094', 'Chumash Tattoo Parlor', 'Located inside. Press Y', '1', '1076.4161', '-3169.8533'],
        ['3095', 'Chronic Tattoo', 'Located inside. Press Y', '1', '377.4568', '229.71101'],
        ['3098', 'Sundown Subs', '1', '1', '3756.0984', '1855.3424'],
        ['3099', 'Reinaz Ink', 'Located inside. Press Y', '1', '-1832.1676', '204.54646'],
        ['3102', 'Cursed Ink', 'Located inside. Press Y', '1', '-1077.1425', '369.17447'],
        ['3106', 'Misfits Ink', 'Located inside. Press Y', '1', '-1157.4047', '-1265.0544'],
        ['3107', 'Inks Spot', 'Located inside. Press Y', '1', '6317.8896', '-151.2184'],
        ['3108', 'Surtrs Lair', '1', '1', '-1453.0371', '77.82889'],
        ['3109', 'Surtrs Lair', 'Located inside. Press Y', '1', '-1450.4095', '67.99101'],
        ['3110', 'Vallery Side Ink', '1', '1', '2745.2556', '609.92706'],
        ['3111', 'Vallery Side Ink', 'Located inside. Press Y', '1', '2749.0994', '605.66296'],
        ['3114', 'Sinner Ink', 'Located inside. Press Y', '1', '-786.6535', '389.71957']
        ['3278', 'Davis LTD', 'Located inside.', '1', '-1752.4581', '-56.473442'],
        ['3279', 'Davis LTD', 'Located inside', '1', '-1754.9248', '-42.814384']
]
