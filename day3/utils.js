// const w1Dirs = ['R993', 'U847', 'R868', 'D286', 'L665', 'D860', 'R823', 'U934', 'L341', 'U49', 'R762', 'D480', 'R899', 'D23', 'L273', 'D892', 'R43', 'U740', 'L940', 'U502', 'L361', 'U283', 'L852', 'D630', 'R384', 'D758', 'R655', 'D358', 'L751', 'U970', 'R72', 'D245', 'L188', 'D34', 'R355', 'U373', 'L786', 'U188', 'L304', 'D621', 'L956', 'D839', 'R607', 'U279', 'L459', 'U340', 'R412', 'D901', 'L929', 'U256', 'R495', 'D462', 'R369', 'D138', 'R926', 'D551', 'L343', 'U237', 'L434', 'U952', 'R421', 'U263', 'L663', 'D694', 'R687', 'D522', 'L47', 'U8', 'L399', 'D930', 'R928', 'U73', 'L581', 'U452', 'R80', 'U610', 'L998', 'D797', 'R584', 'U772', 'L521', 'U292', 'L959', 'U356', 'L940', 'D894', 'R774', 'U957', 'L813', 'D650', 'L891', 'U309', 'L254', 'D271', 'R791', 'D484', 'L399', 'U106', 'R463', 'D39', 'L210', 'D154', 'L380', 'U86', 'L136', 'D228', 'L284', 'D267', 'R195', 'D727', 'R739', 'D393', 'R395', 'U703', 'L385', 'U483', 'R433', 'U222', 'L945', 'D104', 'L605', 'D814', 'L656', 'U860', 'L474', 'D672', 'L812', 'U789', 'L29', 'D256', 'R857', 'U436', 'R927', 'U99', 'R171', 'D727', 'L244', 'D910', 'L347', 'U789', 'R49', 'U598', 'L218', 'D834', 'L574', 'U647', 'L185', 'U986', 'L273', 'D363', 'R848', 'U531', 'R837', 'U433', 'L795', 'U923', 'L182', 'D915', 'R367', 'D347', 'R867', 'U789', 'L776', 'U568', 'R969', 'U923', 'L765', 'D589', 'R772', 'U715', 'R38', 'D968', 'L845', 'D327', 'R721', 'D928', 'R267', 'U94', 'R763', 'U799', 'L946', 'U130', 'L649', 'U521', 'L569', 'D139', 'R584', 'D27', 'L823', 'D918', 'L450', 'D390', 'R149', 'U237', 'L696', 'U258', 'L757', 'U810', 'L216', 'U202', 'L966', 'U157', 'R702', 'D623', 'R740', 'D560', 'R932', 'D587', 'L197', 'D56', 'R695', 'U439', 'R655', 'U576', 'R695', 'D176', 'L800', 'D374', 'R806', 'U969', 'L664', 'U216', 'L170', 'D415', 'R485', 'U188', 'L444', 'D613', 'R728', 'U508', 'L644', 'U289', 'R831', 'D978', 'R711', 'U973', 'R3', 'U551', 'R377', 'U114', 'L15', 'U812', 'R210', 'D829', 'L536', 'D883', 'L843', 'D427', 'L311', 'D680', 'R482', 'D69', 'R125', 'D953', 'L896', 'D85', 'R376', 'D683', 'R374', 'U415', 'L3', 'U843', 'L802', 'D124', 'R299', 'U345', 'L696', 'D276', 'L87', 'D98', 'R619', 'D321', 'R348', 'D806', 'L789', 'U657', 'R590', 'D747', 'L477', 'U251', 'R854', 'D351', 'L82', 'D982', 'R906', 'D94', 'R285', 'U756', 'L737', 'D377', 'L951', 'U126', 'L852', 'D751', 'L946', 'U696', 'L44', 'D709', 'R851', 'D364', 'R222'];
// const w2Dirs = ['L1002', 'D658', 'L695', 'U170', 'L117', 'U93', 'R700', 'D960', 'L631', 'U483', 'L640', 'D699', 'R865', 'U886', 'L59', 'D795', 'R265', 'U803', 'R705', 'D580', 'R519', 'U685', 'R126', 'D888', 'R498', 'U934', 'L980', 'U734', 'L91', 'D50', 'R805', 'U197', 'R730', 'U363', 'R337', 'U594', 'L666', 'U702', 'L237', 'D140', 'L72', 'U980', 'L167', 'U598', 'L726', 'U497', 'L340', 'D477', 'L304', 'U945', 'R956', 'U113', 'L43', 'D4', 'R890', 'D316', 'R916', 'D644', 'R704', 'D398', 'L905', 'U361', 'R420', 'U31', 'L317', 'U338', 'R703', 'D211', 'R27', 'D477', 'L746', 'U813', 'R705', 'U191', 'L504', 'D434', 'R697', 'D945', 'R835', 'D374', 'L512', 'U269', 'L299', 'U448', 'R715', 'U363', 'R266', 'U720', 'L611', 'U672', 'L509', 'D983', 'L21', 'U895', 'L340', 'D794', 'R528', 'U603', 'R154', 'D610', 'L582', 'U420', 'L696', 'U599', 'R16', 'U610', 'L134', 'D533', 'R156', 'D338', 'L761', 'U49', 'L335', 'D238', 'R146', 'U97', 'L997', 'U545', 'L896', 'D855', 'L653', 'D789', 'R516', 'D371', 'L99', 'D731', 'R868', 'D182', 'R535', 'D35', 'R190', 'D618', 'R10', 'D694', 'L567', 'D17', 'R356', 'U820', 'R671', 'D883', 'R807', 'U218', 'L738', 'U225', 'L145', 'D954', 'R588', 'U505', 'R108', 'U178', 'R993', 'D788', 'R302', 'D951', 'R697', 'D576', 'L324', 'U930', 'R248', 'D245', 'R622', 'U323', 'R667', 'U876', 'L987', 'D411', 'L989', 'U915', 'R157', 'D67', 'L968', 'U61', 'R274', 'D189', 'L53', 'D133', 'R617', 'D958', 'L379', 'U563', 'L448', 'D412', 'R940', 'U12', 'R885', 'U121', 'R746', 'U215', 'R420', 'U346', 'L469', 'D839', 'R964', 'D273', 'R265', 'D3', 'L714', 'D224', 'L177', 'U194', 'L573', 'U511', 'L795', 'U299', 'L311', 'U923', 'R815', 'U594', 'L654', 'U326', 'L547', 'U547', 'R467', 'D937', 'L174', 'U453', 'R635', 'D551', 'L365', 'U355', 'R658', 'U996', 'R458', 'D623', 'R61', 'U181', 'R340', 'U163', 'L329', 'D496', 'L787', 'D335', 'L37', 'D565', 'R318', 'U942', 'R198', 'U85', 'R328', 'D826', 'R817', 'D118', 'R138', 'D29', 'L434', 'D427', 'R222', 'D866', 'L10', 'D152', 'R822', 'D779', 'L900', 'D307', 'R723', 'D363', 'L715', 'D60', 'R661', 'U680', 'R782', 'U789', 'R311', 'D36', 'R425', 'U498', 'L910', 'D546', 'R394', 'D52', 'R803', 'D168', 'L6', 'U769', 'R856', 'D999', 'L786', 'U695', 'R568', 'U236', 'R472', 'U291', 'L530', 'U314', 'L251', 'D598', 'R648', 'D475', 'L132', 'D236', 'L915', 'D695', 'L700', 'U378', 'L685', 'D240', 'R924', 'D977', 'R627', 'U824', 'L165'];

// const w1Dirs = ['R993', 'U847', 'R868', 'D286', 'L665', 'D860', 'R823', 'U934', 'L341', 'U49', 'R762', 'D480', 'R899', 'D23', 'L273', 'D892', 'R43', 'U740', 'L940', 'U502', 'L361', 'U283', 'L852', 'D630', 'R384', 'D758', 'R655', 'D358', 'L751', 'U970', 'R72', 'D245', 'L188', 'D34', 'R355', 'U373', 'L786', 'U188', 'L304', 'D621', 'L956', 'D839', 'R607', 'U279', 'L459', 'U340', 'R412', 'D901', 'L929', 'U256', 'R495', 'D462', 'R369', 'D138', 'R926', 'D551', 'L343', 'U237', 'L434', 'U952', 'R421', 'U263', 'L663', 'D694', 'R687', 'D522', 'L47', 'U8', 'L399', 'D930', 'R928', 'U73', 'L581', 'U452', 'R80', 'U610', 'L998', 'D797', 'R584', 'U772', 'L521', 'U292', 'L959', 'U356', 'L940', 'D894', 'R774', 'U957', 'L813', 'D650', 'L891', 'U309', 'L254', 'D271', 'R791', 'D484', 'L399', 'U106', 'R463', 'D39', 'L210', 'D154', 'L380', 'U86', 'L136', 'D228', 'L284', 'D267', 'R195', 'D727', 'R739', 'D393', 'R395', 'U703', 'L385', 'U483', 'R433', 'U222', 'L945', 'D104', 'L605', 'D814', 'L656', 'U860', 'L474', 'D672', 'L812', 'U789', 'L29', 'D256', 'R857', 'U436', 'R927', 'U99', 'R171', 'D727', 'L244', 'D910', 'L347', 'U789', 'R49', 'U598', 'L218', 'D834', 'L574', 'U647', 'L185', 'U986', 'L273', 'D363', 'R848', 'U531', 'R837', 'U433', 'L795', 'U923', 'L182', 'D915', 'R367', 'D347', 'R867', 'U789', 'L776', 'U568', 'R969', 'U923', 'L765', 'D589', 'R772', 'U715', 'R38', 'D968', 'L845', 'D327', 'R721', 'D928', 'R267', 'U94', 'R763', 'U799', 'L946', 'U130', 'L649', 'U521', 'L569', 'D139', 'R584', 'D27', 'L823', 'D918', 'L450', 'D390', 'R149', 'U237', 'L696', 'U258', 'L757', 'U810', 'L216', 'U202', 'L966', 'U157', 'R702', 'D623', 'R740', 'D560', 'R932', 'D587', 'L197', 'D56', 'R695', 'U439', 'R655', 'U576', 'R695', 'D176', 'L800', 'D374', 'R806', 'U969', 'L664', 'U216', 'L170', 'D415', 'R485', 'U188', 'L444', 'D613', 'R728', 'U508', 'L644', 'U289', 'R831', 'D978', 'R711', 'U973', 'R3', 'U551', 'R377', 'U114', 'L15', 'U812', 'R210', 'D829', 'L536', 'D883', 'L843', 'D427', 'L311', 'D680', 'R482', 'D69', 'R125', 'D953', 'L896', 'D85', 'R376', 'D683', 'R374', 'U415', 'L3', 'U843', 'L802', 'D124', 'R299', 'U345', 'L696', 'D276', 'L87', 'D98', 'R619', 'D321', 'R348', 'D806', 'L789', 'U657', 'R590', 'D747', 'L477', 'U251', 'R854', 'D351', 'L82', 'D982', 'R906', 'D94', 'R285', 'U756', 'L737', 'D377', 'L951', 'U126', 'L852', 'D751', 'L946', 'U696', 'L44', 'D709', 'R851', 'D364', 'R222'];
// const w2Dirs = ['L1002', 'D658', 'L695', 'U170', 'L117', 'U93', 'R700', 'D960', 'L631', 'U483', 'L640', 'D699', 'R865', 'U886', 'L59', 'D795', 'R265', 'U803', 'R705', 'D580', 'R519', 'U685', 'R126', 'D888', 'R498', 'U934', 'L980', 'U734', 'L91', 'D50', 'R805', 'U197', 'R730', 'U363', 'R337', 'U594', 'L666', 'U702', 'L237', 'D140', 'L72', 'U980', 'L167', 'U598', 'L726', 'U497', 'L340', 'D477', 'L304', 'U945', 'R956', 'U113', 'L43', 'D4', 'R890', 'D316', 'R916', 'D644', 'R704', 'D398', 'L905', 'U361', 'R420', 'U31', 'L317', 'U338', 'R703', 'D211', 'R27', 'D477', 'L746', 'U813', 'R705', 'U191', 'L504', 'D434', 'R697', 'D945', 'R835', 'D374', 'L512', 'U269', 'L299', 'U448', 'R715', 'U363', 'R266', 'U720', 'L611', 'U672', 'L509', 'D983', 'L21', 'U895', 'L340', 'D794', 'R528', 'U603', 'R154', 'D610', 'L582', 'U420', 'L696', 'U599', 'R16', 'U610', 'L134', 'D533', 'R156', 'D338', 'L761', 'U49', 'L335', 'D238', 'R146', 'U97', 'L997', 'U545', 'L896', 'D855', 'L653', 'D789', 'R516', 'D371', 'L99', 'D731', 'R868', 'D182', 'R535', 'D35', 'R190', 'D618', 'R10', 'D694', 'L567', 'D17', 'R356', 'U820', 'R671', 'D883', 'R807', 'U218', 'L738', 'U225', 'L145', 'D954', 'R588', 'U505', 'R108', 'U178', 'R993', 'D788', 'R302', 'D951', 'R697', 'D576', 'L324', 'U930', 'R248', 'D245', 'R622', 'U323', 'R667', 'U876', 'L987', 'D411', 'L989', 'U915', 'R157', 'D67', 'L968', 'U61', 'R274', 'D189', 'L53', 'D133', 'R617', 'D958', 'L379', 'U563', 'L448', 'D412', 'R940', 'U12', 'R885', 'U121', 'R746', 'U215', 'R420', 'U346', 'L469', 'D839', 'R964', 'D273', 'R265', 'D3', 'L714', 'D224', 'L177', 'U194', 'L573', 'U511', 'L795', 'U299', 'L311', 'U923', 'R815', 'U594', 'L654', 'U326', 'L547', 'U547', 'R467', 'D937', 'L174', 'U453', 'R635', 'D551', 'L365', 'U355', 'R658', 'U996', 'R458', 'D623', 'R61', 'U181', 'R340', 'U163', 'L329', 'D496', 'L787', 'D335', 'L37', 'D565', 'R318', 'U942', 'R198', 'U85', 'R328', 'D826', 'R817', 'D118', 'R138', 'D29', 'L434', 'D427', 'R222', 'D866', 'L10', 'D152', 'R822', 'D779', 'L900', 'D307', 'R723', 'D363', 'L715', 'D60', 'R661', 'U680', 'R782', 'U789', 'R311', 'D36', 'R425', 'U498', 'L910', 'D546', 'R394', 'D52', 'R803', 'D168', 'L6', 'U769', 'R856', 'D999', 'L786', 'U695', 'R568', 'U236', 'R472', 'U291', 'L530', 'U314', 'L251', 'D598', 'R648', 'D475', 'L132', 'D236', 'L915', 'D695', 'L700', 'U378', 'L685', 'D240', 'R924', 'D977', 'R627', 'U824', 'L165'];

const w1Dirs = [
  'R991',
  'U77',
  'L916',
  'D26',
  'R424',
  'D739',
  'L558',
  'D439',
  'R636',
  'U616',
  'L364',
  'D653',
  'R546',
  'U909',
  'L66',
  'D472',
  'R341',
  'U906',
  'L37',
  'D360',
  'L369',
  'D451',
  'L649',
  'D521',
  'R2',
  'U491',
  'R409',
  'U801',
  'R23',
  'U323',
  'L209',
  'U171',
  'L849',
  'D891',
  'L854',
  'U224',
  'R476',
  'D519',
  'L937',
  'U345',
  'R722',
  'D785',
  'L312',
  'D949',
  'R124',
  'U20',
  'R677',
  'D236',
  'R820',
  'D320',
  'L549',
  'D631',
  'R42',
  'U621',
  'R760',
  'U958',
  'L925',
  'U84',
  'R914',
  'U656',
  'R598',
  'D610',
  'R397',
  'D753',
  'L109',
  'U988',
  'R435',
  'U828',
  'R219',
  'U583',
  'L317',
  'D520',
  'L940',
  'D850',
  'R594',
  'D801',
  'L422',
  'U292',
  'R883',
  'U204',
  'L76',
  'U860',
  'L753',
  'U483',
  'L183',
  'U179',
  'R441',
  'U163',
  'L859',
  'U437',
  'L485',
  'D239',
  'R454',
  'D940',
  'R689',
  'D704',
  'R110',
  'D12',
  'R370',
  'D413',
  'L192',
  'D979',
  'R990',
  'D651',
  'L308',
  'U177',
  'R787',
  'D717',
  'R245',
  'U689',
  'R11',
  'D509',
  'L680',
  'U228',
  'L347',
  'D179',
  'R508',
  'D40',
  'L502',
  'U689',
  'L643',
  'U45',
  'R884',
  'D653',
  'L23',
  'D918',
  'L825',
  'D312',
  'L691',
  'U292',
  'L285',
  'D183',
  'R997',
  'U427',
  'L89',
  'U252',
  'R475',
  'U217',
  'R16',
  'U749',
  'L578',
  'D931',
  'L273',
  'U509',
  'L741',
  'U97',
  'R407',
  'U275',
  'L605',
  'U136',
  'L558',
  'U318',
  'R478',
  'U505',
  'R446',
  'U295',
  'R562',
  'D646',
  'R988',
  'D254',
  'L68',
  'U645',
  'L953',
  'U916',
  'L442',
  'D713',
  'R978',
  'U540',
  'R447',
  'U594',
  'L804',
  'U215',
  'R95',
  'D995',
  'R818',
  'D237',
  'R212',
  'U664',
  'R455',
  'D684',
  'L338',
  'U308',
  'R463',
  'D985',
  'L988',
  'D281',
  'R758',
  'U510',
  'L232',
  'U509',
  'R289',
  'D90',
  'R65',
  'D46',
  'R886',
  'D741',
  'L327',
  'U755',
  'R236',
  'U870',
  'L764',
  'U60',
  'R391',
  'U91',
  'R367',
  'U587',
  'L651',
  'D434',
  'L47',
  'U954',
  'R707',
  'D336',
  'L242',
  'D387',
  'L410',
  'D19',
  'R203',
  'D703',
  'L228',
  'U292',
  'L19',
  'U916',
  'R411',
  'U421',
  'L726',
  'U543',
  'L240',
  'U755',
  'R157',
  'U836',
  'L397',
  'U71',
  'L125',
  'D934',
  'L723',
  'D145',
  'L317',
  'D229',
  'R863',
  'U941',
  'L926',
  'D55',
  'L2',
  'D452',
  'R895',
  'D670',
  'L216',
  'U504',
  'R66',
  'U696',
  'L581',
  'U75',
  'L235',
  'U88',
  'L609',
  'U415',
  'L850',
  'U21',
  'L109',
  'U416',
  'R408',
  'D367',
  'R823',
  'D199',
  'L718',
  'U136',
  'L860',
  'U780',
  'L308',
  'D312',
  'R230',
  'D671',
  'R477',
  'D672',
  'L94',
  'U307',
  'R301',
  'D143',
  'L300',
  'D792',
  'L593',
  'D399',
  'R840',
  'D225',
  'R680',
  'D484',
  'L646',
  'D917',
  'R132',
  'D213',
  'L779',
  'D143',
  'L176',
  'U673',
  'L772',
  'D93',
  'L10',
  'D624',
  'L244',
  'D993',
  'R346',
];
const w2Dirs = [
  'L997',
  'U989',
  'L596',
  'U821',
  'L419',
  'U118',
  'R258',
  'D239',
  'R902',
  'D810',
  'R553',
  'D271',
  'R213',
  'D787',
  'R723',
  'D57',
  'L874',
  'D556',
  'R53',
  'U317',
  'L196',
  'D813',
  'R500',
  'U151',
  'R180',
  'D293',
  'L415',
  'U493',
  'L99',
  'U482',
  'R517',
  'U649',
  'R102',
  'U860',
  'R905',
  'D499',
  'R133',
  'D741',
  'R394',
  'U737',
  'L903',
  'U800',
  'R755',
  'D376',
  'L11',
  'U751',
  'R539',
  'U33',
  'R539',
  'U30',
  'L534',
  'D631',
  'L714',
  'U190',
  'L446',
  'U409',
  'R977',
  'D731',
  'R282',
  'U244',
  'R29',
  'D212',
  'L523',
  'D570',
  'L89',
  'D327',
  'R178',
  'U970',
  'R435',
  'U250',
  'R213',
  'D604',
  'R64',
  'D348',
  'R315',
  'D994',
  'L508',
  'D261',
  'R62',
  'D50',
  'L347',
  'U183',
  'R410',
  'D627',
  'L128',
  'U855',
  'L803',
  'D695',
  'L879',
  'U857',
  'L629',
  'D145',
  'L341',
  'D733',
  'L566',
  'D626',
  'L302',
  'U236',
  'L55',
  'U428',
  'R183',
  'U254',
  'R226',
  'D228',
  'R616',
  'U137',
  'L593',
  'U204',
  'R620',
  'U624',
  'R605',
  'D705',
  'L263',
  'D568',
  'R931',
  'D464',
  'R989',
  'U621',
  'L277',
  'U274',
  'L137',
  'U768',
  'L261',
  'D360',
  'L45',
  'D110',
  'R35',
  'U212',
  'L271',
  'D318',
  'L444',
  'D427',
  'R225',
  'D380',
  'L907',
  'D193',
  'L118',
  'U741',
  'L101',
  'D298',
  'R604',
  'D598',
  'L98',
  'U458',
  'L733',
  'U511',
  'L82',
  'D173',
  'L644',
  'U803',
  'R926',
  'D610',
  'R24',
  'D170',
  'L198',
  'U766',
  'R656',
  'D474',
  'L393',
  'D934',
  'L789',
  'U92',
  'L889',
  'U460',
  'L232',
  'U193',
  'L877',
  'D380',
  'L455',
  'D526',
  'R899',
  'D696',
  'R452',
  'U95',
  'L828',
  'D720',
  'R370',
  'U664',
  'L792',
  'D204',
  'R84',
  'D749',
  'R808',
  'U132',
  'L152',
  'D375',
  'R19',
  'U164',
  'L615',
  'D121',
  'R644',
  'D289',
  'R381',
  'U126',
  'L304',
  'U508',
  'L112',
  'D268',
  'L572',
  'D838',
  'L998',
  'U127',
  'R500',
  'D344',
  'R694',
  'U451',
  'L846',
  'D565',
  'R158',
  'U47',
  'L430',
  'U214',
  'R571',
  'D983',
  'R690',
  'D227',
  'L107',
  'U109',
  'L286',
  'D66',
  'L544',
  'U205',
  'L453',
  'U716',
  'L36',
  'U672',
  'L517',
  'U878',
  'L487',
  'U936',
  'L628',
  'U253',
  'R424',
  'D409',
  'R422',
  'U636',
  'R412',
  'U553',
  'R59',
  'D332',
  'R7',
  'U495',
  'L305',
  'D939',
  'L428',
  'D821',
  'R749',
  'D195',
  'R531',
  'D898',
  'R337',
  'D303',
  'L398',
  'D625',
  'R57',
  'D503',
  'L699',
  'D553',
  'L478',
  'U716',
  'R897',
  'D3',
  'R420',
  'U903',
  'R994',
  'U864',
  'L745',
  'U205',
  'R229',
  'U126',
  'L227',
  'D454',
  'R670',
  'U605',
  'L356',
  'U499',
  'R510',
  'U238',
  'L542',
  'D440',
  'R156',
  'D512',
  'L237',
  'D341',
  'L439',
  'U642',
  'R873',
  'D650',
  'R871',
  'D616',
  'R322',
  'U696',
  'R248',
  'D746',
  'R990',
  'U829',
  'R812',
  'U294',
  'L462',
  'U740',
  'R780',
];

const X = 0;
const Y = 1;

const makePath = (dirs, startPoint = [0, 0]) => {
  let path = [startPoint];
  for (let d of dirs) {
    let direction = getDirection(d);
    let distance = getDistance(d);
    // console.log('path[path.length - 1]', path[path.length - 1])
    // console.log('d', d)

    // const from = path[path.length - 1]: Assign by value instead of by reference
    const from = path[path.length - 1]
      .join(',')
      .split(',')
      .map((i) => parseInt(i));
    switch (direction) {
      case 'U':
        path = path.concat(makePathUp(from, distance));
        break;
      case 'D':
        path = path.concat(makePathDown(from, distance));
        break;
      case 'R':
        path = path.concat(makePathRight(from, distance));
        break;
      case 'L':
        path = path.concat(makePathLeft(from, distance));
        break;
    }
  }
  return path;
};

const getDirection = (dir) => {
  return dir.slice(0, 1);
};

const getDistance = (dir) => {
  return parseInt(dir.slice(1));
};

const makePathUp = (from, upTo) => {
  let section = [];
  for (let i = 0; i < upTo; i++) {
    section.push([from[X], ++from[Y]]);
  }
  return section;
};

const makePathDown = (from, upTo) => {
  let section = [];
  for (let i = 0; i < upTo; i++) {
    section.push([from[X], --from[Y]]);
  }
  return section;
};

const makePathRight = (from, upTo) => {
  let section = [];
  for (let i = 0; i < upTo; i++) {
    section.push([++from[X], from[Y]]);
  }
  return section;
};

const makePathLeft = (from, upTo) => {
  let section = [];
  for (let i = 0; i < upTo; i++) {
    section.push([--from[X], from[Y]]);
  }
  return section;
};

const getIntesections = (path1, path2) => {
  // return path1.filter(value => path2.includes(value))
  return path1.filter((value1) => {
    return path2.some((value2) => {
      return value1[X] == value2[X] && value1[Y] == value2[Y];
    });
  });
};

const manhattanDistance = (point) => {
  return Math.abs(point[X]) + Math.abs(point[Y]);
};

module.exports = {
  w1Dirs: w1Dirs,
  w2Dirs: w2Dirs,
  makePath: makePath,
  getIntesections: getIntesections,
  manhattanDistance: manhattanDistance,
  makePathDown: makePathDown,
};
