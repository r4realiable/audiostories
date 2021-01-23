/**
 * @Author: RahulCv <saravanakumar>
 * @Date:   2021-01-22T08:01:44+05:30
 * @Email:  rahulcv@hotmail.co.in
 * @Last modified by:   saravanakumar
 * @Last modified time: 2021-01-22T08:35:24+05:30
 */



const Audios=[
{"name":"00001","title":"kazappi","duration":"823.75"},
{"name":"00005","title":"അനുവിന്റെ തേരോട്ടം","duration":"614.03"},
{"name":"00006","title":"അനുവിന്റെ വീട്","duration":"596.19"},
{"name":"00007","title":"അമ്മുവിന്റെ_പൂറിൽ_കളിച്ച_മാമൻ","duration":"864.71"},
{"name":"00008","title":"അയലത്തെ ചേച്ചി","duration":"565.58"},
{"name":"00009","title":"അയലത്തെ സുന്ദരി","duration":"734.20"},
{"name":"00010","title":"അയലത്തെ_ചേച്ചിയെ_വളച്ചെടുത്ത്","duration":"478.69"},
{"name":"00011","title":"അയൽക്കാരി_രമ്യ_ചെറിയ_ചന്തിയും_വലിയ_മുലയും","duration":"493.06"},
{"name":"00012","title":"അവരാച്ചൻ","duration":"1089.96"},
{"name":"00013","title":"അശ്വതി_ചേച്ചിയുടെ_പൂർ_തിന്നു","duration":"950.05"},
{"name":"00014","title":"ആതിരയുടെ_പൂറിൽ_കുണ്ണ_കയറ്റി","duration":"833.78"},
{"name":"00015","title":"ആദ്യതവണ","duration":"877.79"},
{"name":"00018","title":"ആമിന_അമ്മായിയുടെ_മുല_കണ്ണ്","duration":"982.70"},
{"name":"00019","title":"ആരതിയുടെ_ചന്തിയിൽ_കുണ്ണ_കയറ്റി","duration":"829.88"},
{"name":"00016","title":"ആൻഡപ്പൻ_അമ്മാവനും_കുടുംബവും","duration":"1212.13"},
{"name":"00017","title":"ആൻറ്റിയെ_സുഖിപ്പിച്ച_ചുള്ളൻ","duration":"856.84"},
{"name":"00021","title":"ഇംഗ്ലീഷ് ട്യൂഷൻ","duration":"1106.18"},
{"name":"00020","title":"ഇക്കാൻറെ_ഭാര്യയും_ഞാനും","duration":"852.69"},
{"name":"00022","title":"എന്റെ ചെറിയ അമ്മ","duration":"741.69"},
{"name":"00003","title":"അത്_ഒരു_ഞായറാഴ്ചയായിരുന്നു","duration":"672.71"},
{"name":"00024","title":"എന്റെ പേര് മനോജ്","duration":"353.28"},
{"name":"00025","title":"എന്റെ പേര് ശ്രുതി","duration":"479.63"},
{"name":"00026","title":"എന്റെ പേര് ഷെറിൻ","duration":"713.40"},
{"name":"00027","title":"എന്റെ പേര് സുമ","duration":"549.43"},
{"name":"00028","title":"എന്റെ പേര് സ്നേഹ","duration":"643.60"},
{"name":"00029","title":"എന്റെ_ഭാര്യയും_പലിശക്കാരനും","duration":"1155.79"},
{"name":"00030","title":"എന്റെ_ഭാര്യയുടെ_അനിയത്തി","duration":"1857.44"},
{"name":"00031","title":"എന്റെ_രശ്മി_അമ്മായിയമ്മ","duration":"2291.54"},
{"name":"00032","title":"ഐശ്വര്യ","duration":"534.20"},
{"name":"00033","title":"ഒരു ജോലി സമയത്ത്","duration":"658.49"},
{"name":"00034","title":"ഒരു വർഷം മുമ്പ്","duration":"730.62"},
{"name":"00035","title":"ഒരു_ചൂടുള്ള_ഉച്ചതിരിഞ്ഞ്","duration":"888.50"},
{"name":"00036","title":"കാദറും മരുമകളും","duration":"1302.10"},
{"name":"00004","title":"അനിത_ചേച്ചിയുടെ_മുലയിൽ_പിടിച്ചു","duration":"1044.22"},
{"name":"00038","title":"കിടന്നു_കൊടുത്ത_ഭാര്യ_വെടി","duration":"619.62"},
{"name":"00039","title":"കിളുന്നു_പെണ്ണിനെ_ഊക്കി_കളിച്ചു","duration":"925.28"},
{"name":"00040","title":"കീർത്തന","duration":"635.72"},
{"name":"00041","title":"കുട്ടൻ_ഇരുമ്പ്_വടിപോലെ_നിൽക്കുന്നു","duration":"982.05"},
{"name":"00043","title":"കൂട്ടുകാരന്റെ ഭാര്യ","duration":"1286.56"},
{"name":"00044","title":"കൂട്ടുകാരിയെ_വീട്ടിൽ_കൊണ്ടുപോയി","duration":"1073.87"},
{"name":"00042","title":"കൂട്ടുകാരൻറെ അമ്മ","duration":"655.18"},
{"name":"00046","title":"കൊച്ചമ്മയും സുനിയും","duration":"919.20"},
{"name":"00047","title":"കൊച്ചിലെ_ആന്റിയെ_ഊക്കി_അടിച്ചു","duration":"716.30"},
{"name":"00045","title":"കേണലും മരുമകൾ താരയും","duration":"2458.46"},
{"name":"00048","title":"ഗംഗാധരൻ കുടുംബം","duration":"934.97"},
{"name":"00049","title":"ഗീത_ഏട്ടത്തിയുടെ_ചന്തി_പിടിത്തം","duration":"1161.25"},
{"name":"00050","title":"ഗീത_മാമിയുടെ_കുണ്ടി_പിടിത്തം","duration":"937.06"},
{"name":"00051","title":"ചരക്ക്_ദീപ്തിയുടെ_തേൻ_പൂർ_നക്കി","duration":"733.36"},
{"name":"00052","title":"ജൂലിയും_അവറാൻ_മുതലാളിയും","duration":"1424.25"},
{"name":"00053","title":"ജോസഫ്","duration":"1192.88"},
{"name":"00056","title":"ഞാൻ അംബിക","duration":"376.89"},
{"name":"00054","title":"ഞാൻ അജു","duration":"857.16"},
{"name":"00055","title":"ഞാൻ അനീഷ്","duration":"610.01"},
{"name":"00057","title":"ഞാൻ കാനൻ","duration":"880.40"},
{"name":"00058","title":"ഞാൻ ടോണി","duration":"1275.66"},
{"name":"00059","title":"ഞാൻ വീണ","duration":"1111.56"},
{"name":"00060","title":"ഞാൻ ശരത്","duration":"707.84"},
{"name":"00061","title":"ഞാൻ ശ്രീകട്ടൻ","duration":"507.61"},
{"name":"00062","title":"ഞാൻ_വിവാഹനിശ്ചയം_കഴിഞ്ഞു","duration":"618.03"},
{"name":"00063","title":"ഞാൻ_ശരാശരി_കാണുന്ന_പെൺകുട്ടിയാണ്","duration":"599.51"},
{"name":"00064","title":"ഡാഡിയിൽ_നിന്നുള്ള_സമ്മാനം","duration":"601.60"},
{"name":"00066","title":"ദിവ്യ ചെച്ചി","duration":"584.57"},
{"name":"00065","title":"ഡിഗ്രി_രണ്ടാം_വർഷ_വിദ്യാർത്ഥി","duration":"521.69"},
{"name":"00067","title":"ദിവ്യയുടെ ഒരു കഥ","duration":"776.75"},
{"name":"00069","title":"ദേവിക","duration":"514.85"},
{"name":"00068","title":"ദേവിക_തമ്പുരാട്ടിയുടെ_വെളുത്ത_പൂർ","duration":"1094.69"},
{"name":"00070","title":"നിനക്ക്_എന്നെ_നന്നായി_അറിയാം_ഞാൻ_ലാലു","duration":"1135.49"},
{"name":"00071","title":"നിമ്മിയുടെ_കുണ്ടി_കളികൾകുണ്ടി_പെണ്ണ്o","duration":"990.04"},
{"name":"00002","title":"അടുത്ത_വീട്ടിലെ_ചേച്ചി","duration":"706.25"},
{"name":"00073","title":"പതിവുപോലെ_ഗായത്രി_അടുക്കളയിൽ_തിരക്കിലായിരുന്നു","duration":"625.92"},
{"name":"00074","title":"ബാലൻ","duration":"714.74"},
{"name":"00075","title":"ബ്യൂട്ടി ഷക്കീല","duration":"984.66"},
{"name":"00077","title":"ഭാഗം 01 സീമ ഒരു അമ്മയാണ്","duration":"1495.20"},
{"name":"00078","title":"ഭാഗം 02 സീമ ഒരു അമ്മയാണ്","duration":"1369.03"},
{"name":"00079","title":"ഭാഗം 03 സീമ ഒരു അമ്മയാണ്","duration":"1259.89"},
{"name":"00080","title":"ഭാഗം 04 സീമ ഒരു അമ്മയാണ്","duration":"1128.10"},
{"name":"00081","title":"ഭാഗം 05 സീമ ഒരു അമ്മയാണ്","duration":"914.49"},
{"name":"00082","title":"ഭാഗം_01_എല്ലാമെല്ലാമാണ്","duration":"1293.87"},
{"name":"00083","title":"ഭാഗം_01_ഞാനും_എന്റെ_ആന്റീയും","duration":"1968.51"},
{"name":"00084","title":"ഭാഗം_01_വിധവയായ_മകൾക്ക്_അച്ഛൻ_ഭർത്താവ്","duration":"1197.51"},
{"name":"00085","title":"ഭാഗം_02_എല്ലാമെല്ലാമാണ്","duration":"1365.19"},
{"name":"00086","title":"ഭാഗം_02_ഞാനും_എന്റെ_ആന്റീയും","duration":"2272.60"},
{"name":"00087","title":"ഭാഗം_02_വിധവയായ_മകൾക്ക്_അച്ഛൻ_ഭർത്താവ്","duration":"1596.92"},
{"name":"00088","title":"ഭാഗം_03_എല്ലാമെല്ലാമാണ്","duration":"960.29"},
{"name":"00089","title":"ഭാഗം_03_വിധവയായ_മകൾക്ക്_അച്ഛൻ_ഭർത്താവ്","duration":"1991.29"},
{"name":"00090","title":"ഭാഗം_04_എല്ലാമെല്ലാമാണ്","duration":"1472.31"},
{"name":"00091","title":"ഭാഗം_04_വിധവയായ_മകൾക്ക്_അച്ഛൻ_ഭർത്താവ്","duration":"1724.55"},
{"name":"00037","title":"കാവ്യ എന്റെ മരുമകൾ","duration":"1127.26"},
{"name":"00093","title":"ഭാഗം_05_വിധവയായ_മകൾക്ക്_അച്ഛൻ_ഭർത്താവ്_Climax","duration":"1155.60"},
{"name":"00094","title":"ഭാഗം_06_എല്ലാമെല്ലാമാണ്","duration":"1422.55"},
{"name":"00095","title":"ഭാഗം_06_സീമ_ഒരു_അമ്മയാണ്_Climax","duration":"1885.18"},
{"name":"00096","title":"ഭാഗം_07_എല്ലാമെല്ലാമാണ്","duration":"1169.55"},
{"name":"00097","title":"ഭാഗം_08_എല്ലാമെല്ലാമാണ്_Climax","duration":"1388.20"},
{"name":"00098","title":"ഭാര്യയുടെ അമ്മായി","duration":"772.00"},
{"name":"00076","title":"ഭർത്താവിന്_കഴിവില്ല_ഭാര്യ_അയൽക്കാരനെ_വിളിച്ചു","duration":"2376.67"},
{"name":"00100","title":"മംഗള എക്സ്പ്രസ്","duration":"621.04"},
{"name":"00099","title":"മകൻറെ മുന്നിൽവെച്ച്","duration":"811.05"},
{"name":"00101","title":"മത്തനും മരുമകളും","duration":"1191.03"},
{"name":"00102","title":"മരുമകൾ വീണ","duration":"1111.48"},
{"name":"00103","title":"മരുമകൾ_ഇന്ദുവും_അമ്മായിയച്ഛനും","duration":"866.19"},
{"name":"00104","title":"മാത്സ് ട്യൂഷൻ","duration":"1205.63"},
{"name":"00105","title":"മായയും_അടുത്ത_വീട്ടിലെ_ഉണ്ണിക്കുട്ടനും","duration":"1236.87"},
{"name":"00106","title":"മായയുടെ_മുലഞെട്ട്_കടിച്ചു_എടുത്തു","duration":"605.10"},
{"name":"00107","title":"മിനിയുടെ_കൂതിയിൽ_ജാക്കി_കയറ്റി","duration":"690.73"},
{"name":"00108","title":"മുതലാളിയുടെ_മകളും_വേലക്കാരനും","duration":"1275.25"},
{"name":"00109","title":"മുഴുത്ത_മുലകൾ_ഉള്ള_ജിൻസി","duration":"1010.36"},
{"name":"00110","title":"മൂന്ന്_മാസം_മുമ്പ്_നടന്ന_ഒരു_സംഭവം","duration":"739.32"},
{"name":"00111","title":"മൃദുലയും_അമ്മായിയച്ഛനും","duration":"986.20"},
{"name":"00112","title":"മേരിയുടെ_പൂർ_തേൻ_വിരിഞ്ഞു","duration":"957.10"},
{"name":"00113","title":"രമേശ്","duration":"490.95"},
{"name":"00114","title":"രാജീന_ടീച്ചറുടെ_ചന്തിയിൽ_അടിച്ചു","duration":"936.33"},
{"name":"00092","title":"ഭാഗം_05_എല്ലാമെല്ലാമാണ്","duration":"1403.74"},
{"name":"00116","title":"രാജീവ്_പാനിക്കറും_ഭാര്യ_ബിയയും","duration":"1246.93"},
{"name":"00117","title":"രാധയും ശ്രീദേവിയും","duration":"1750.91"},
{"name":"00118","title":"രേവതി_ചിറ്റയുടെ_ചന്തിക്ക്_അടി","duration":"816.56"},
{"name":"00072","title":"നീതുവിന്റെ_മുലകണ്ണ്_ചപ്പി_കുടിച്ചു","duration":"716.17"},
{"name":"00149","title":"റാണി_ചേച്ചിയുടെ_ചന്തിയിൽ_കയറ്റി","duration":"1044.48"},
{"name":"00150","title":"റീനയും ജോബിയും","duration":"689.45"},
{"name":"00119","title":"രേഷ്മയുടെ_കൂതിയിൽ_പഴം_കയറ്റി","duration":"631.69"},
{"name":"00023","title":"എന്റെ പേര് നീനു","duration":"481.99"},
{"name":"00115","title":"രാജീവും_സുഹൃത്തുക്കളും","duration":"626.23"},
{"name":"00123","title":"വിനീത്തും അനന്യയും","duration":"850.89"},
{"name":"00124","title":"വിരസമായ നഗരജീവിതം","duration":"1062.79"},
{"name":"00122","title":"വാസന്തിയുടെ_ബ്രാ_ഊരി_മുല_പിടിച്ചു","duration":"805.38"},
{"name":"00126","title":"വീണയുടെ_പൂറും_വിനീതയുടെ_മുലയും","duration":"1009.68"},
{"name":"00127","title":"വേലക്കാരി റീത്ത","duration":"1039.99"},
{"name":"00128","title":"വേലക്കാരിയും ഞാനും","duration":"520.02"},
{"name":"00129","title":"വൈശക്കിന്റെ_അനുഭവത്തിന്റെ_ഒരു_കഥ","duration":"1112.22"},
{"name":"00121","title":"വർക്കിയും രേഷ്മയും","duration":"1024.50"},
{"name":"00120","title":"വരതയും ഗിരിയും","duration":"663.61"},
{"name":"00151","title":"റീനയുടെ_ചന്തിയിൽ_കുണ്ണ_കയറ്റി","duration":"1357.69"},
{"name":"00132","title":"ഷംന_ഇത്തയുടെ_കൂതിയിൽ_അടിച്ചു","duration":"982.83"},
{"name":"00125","title":"വീട്ടിൽ_പണിക്കുവന്ന_തമിഴത്തി","duration":"2465.31"},
{"name":"00134","title":"ഷൈനി ചെച്ചി","duration":"696.42"},
{"name":"00135","title":"ഷൈനി_ചേച്ചിയുടെ_വഴുതനങ്ങ_കളി","duration":"908.54"},
{"name":"00136","title":"സനയുടെ_കുണ്ടിയിൽ_കുണ്ണ_കയറ്റി","duration":"758.54"},
{"name":"00137","title":"സമീര മാഡം","duration":"948.30"},
{"name":"00138","title":"സരസുവിന്റെ_മുലയിൽ_ഉമ്മ_വെച്ചു","duration":"645.85"},
{"name":"00139","title":"സഹോദരിമാരുടെ_വിവാഹ_തയ്യാറെടുപ്പുകൾ","duration":"914.00"},
{"name":"00140","title":"സാറാ ജോൺസണും അന്നയും","duration":"1180.76"},
{"name":"00131","title":"ശ്രേഷ്മ മാമി","duration":"367.52"},
{"name":"00142","title":"സീത_ചിറ്റയുടെ_കുണ്ണ_പിടിത്തം","duration":"816.27"},
{"name":"00143","title":"സുരേഷ്","duration":"909.79"},
{"name":"00144","title":"സുഹാര","duration":"796.53"},
{"name":"00130","title":"ശരിക","duration":"922.44"},
{"name":"00141","title":"സിന്ധുവിന്റെ_പൂറ്റിൽ_വിരൽ_ഇട്ടു","duration":"1044.27"},
{"name":"00147","title":"ഹരികുട്ടൻ","duration":"1391.02"},
{"name":"00145","title":"സോണിച്ചേച്ചിയും_അയൽക്കാരനും","duration":"1348.96"},
{"name":"00146","title":"സ്വാതിയുടെ_കൂതിയിൽ_ദിവ്യയുടെ_നക്കൽ","duration":"746.08"},
{"name":"00133","title":"ഷീബയുടെ_ശരീരത്തിന്റെ_ആകൃതി","duration":"1050.98"},
{"name":"00148","title":"ഹോസ്റ്റലിലെ_ആദ്യത്തെ_മദ്യപാനം","duration":"1129.56"},
{"name":"00152","title":"AC_നന്നാക്കാൻ_വന്ന_ഇലക്ട്രീഷനും_ഞാനും","duration":"1721.57"},
{"name":"00156","title":"അമ്രത","duration":"739.42"},
{"name":"00157","title":"എന്റെ അമ്മായി","duration":"967.29"},
{"name":"00158","title":"എന്റെ ഓഫീസ് ബോസ്","duration":"963.66"},
{"name":"00159","title":"എന്റെ പേര് ഇന്ദു","duration":"865.70"},
{"name":"00160","title":"എന്റെ പേര് ഐഷ","duration":"1320.75"},
{"name":"00161","title":"എന്റെ പേര് മിനി","duration":"479.03"},
{"name":"00162","title":"എന്റെ പേര് രാജു","duration":"1349.46"},
{"name":"00163","title":"എന്റെ പേര് വികാസ്","duration":"479.14"},
{"name":"00164","title":"എന്റെ പേര് സിന്ധു","duration":"524.12"},
{"name":"00165","title":"എന്റെ പേര് സൂരജ്","duration":"621.74"},
{"name":"00166","title":"ഏട്ടത്തി_അമ്മയുടെ_കുണ്ടി_അടി","duration":"1165.43"},
{"name":"00167","title":"ഓട്ടോ ഡ്രൈവർ രാജു","duration":"623.20"},
{"name":"00168","title":"ഗീത_ടീച്ചറിന്റെ_മുല_ചപ്പൽ","duration":"946.18"},
{"name":"00169","title":"ചേച്ചിയെ_ചെയ്ത_അനിയൻ_കഥ","duration":"808.44"},
{"name":"00170","title":"ഞാൻ അനിൽ","duration":"982.26"},
{"name":"00171","title":"ഞാൻ കാവ്യയാണ്","duration":"452.88"},
{"name":"00172","title":"ഞാൻ ടോണി","duration":"1506.93"},
{"name":"00173","title":"ഞാൻ ശിൽപയാണ്","duration":"660.11"},
{"name":"00174","title":"നമിതയുടെ_കുണ്ടി_അടിച്ചു_പൊളിച്ചു","duration":"733.91"},
{"name":"00175","title":"ഭാഗം_01_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"949.00"},
{"name":"00176","title":"ഭാഗം_02_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"907.76"},
{"name":"00177","title":"ഭാഗം_03_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"902.30"},
{"name":"00178","title":"ഭാഗം_04_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"860.13"},
{"name":"00179","title":"ഭാഗം_05_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"693.68"},
{"name":"00180","title":"ഭാഗം_06_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"867.50"},
{"name":"00181","title":"ഭാഗം_07_അരുന്ധതിക്ക്‌_രസം_മൂത്തപ്പോൾ","duration":"817.11"},
{"name":"00182","title":"മായ_ടീച്ചറെ_കളി_പഠിച്ചു_സ്കൂളിലെ_കളി","duration":"808.57"},
{"name":"00183","title":"രോഹിണിയുടെ_ചുണ്ടിൽ_കുണ്ണ_വെച്ചു","duration":"932.13"},
{"name":"00188","title":"റീനചേച്ചിയുടെ_ചന്തിയിൽ_ചുണ്ണ_കയറ്റി","duration":"1070.84"},
{"name":"00184","title":"ഷീജ_താത്തയുടെ_പൂറിൽ_കയറ്റി","duration":"1311.16"},
{"name":"00185","title":"സിന്ധുവിന്റെ_ചന്തിയിൽ_പിടിച്ചു","duration":"1092.81"},
{"name":"00186","title":"സീത_ചേച്ചി_എന്റെ_വാണരാണി","duration":"1043.04"},
{"name":"00187","title":"സീമ_ചേച്ചിയുടെ_മുല_ചപ്പി","duration":"849.87"},
{"name":"00153","title":"അഭിരാമി","duration":"743.37"},
{"name":"00154","title":"അമൃതയുടെ_മുല_ഞെക്കി_പിഴിഞ്ഞു","duration":"531.72"},
{"name":"00155","title":"അമ്മുവും മാമനും","duration":"865.91"},
{"name":"00192","title":"17കാരി_പെണ്ണും_20കാരൻ_പയ്യനും ","duration":"985.26"},
{"name":"00190","title":"+2_പെണ്ണിൻ്റെ_ട്യൂഷൻ_ക്ലാസ്സ് ","duration":"695.82"},
{"name":"00191","title":"2_സീറ്റ്_3_പേര്_,_കൊയമ്പത്തൂർ_ബസ്സ്_യാത്ര ","duration":"1141.81"},
{"name":"00195","title":"അഞ്ജലി ","duration":"632.40"},
{"name":"00196","title":"അടുത്ത_വീട്ടിലെ_സ്നേഹ_ചേച്ചി ","duration":"587.42"},
{"name":"00197","title":"അനുപമയുടെ_സീൽ_പൊട്ടിച്ചു_സ്കൂളിലെ_കളി ","duration":"836.70"},
{"name":"00198","title":"അനുവിന്റെ അനുഭവം ","duration":"620.72"},
{"name":"00199","title":"അഭിരാമി ","duration":"743.37"},
{"name":"00200","title":"അമൃതയുടെ_മുല_ഞെക്കി_പിഴിഞ്ഞു ","duration":"531.72"},
{"name":"00189","title":"+2 കാരി കുണ്ടി റാണി ","duration":"1308.03"},
{"name":"00202","title":"അമ്മായിയപ്പനും_മരുമകളും ","duration":"457.93"},
{"name":"00203","title":"അമ്മായിയമ്മയുടെ_കുണ്ടിയിൽ_അടിച്ചു ","duration":"899.34"},
{"name":"00204","title":"അമ്മായിയുടെ_വീട്ടിൽ_ഉത്സവത്തിന്_പോയപ്പോൾ ","duration":"569.47"},
{"name":"00205","title":"അമ്രത ","duration":"739.42"},
{"name":"00206","title":"അയൽവക്കത്തെ_ചക്കമുലകൾ_ഉള്ള_ശ്രുതിയും_ലയയും ","duration":"567.88"},
{"name":"00207","title":"ആശ ചേച്ചിയുടെ ചക്ക മുല ","duration":"662.44"},
{"name":"","title":"ഇഡലി","duration":"1012.56"},
{"name":"00208","title":"എന്റെ അമ്മായി ","duration":"1098.89"},
{"name":"00209","title":"എന്റെ അമ്മാവൻ മകൾ ","duration":"718.89"},
{"name":"00210","title":"എന്റെ ഓഫീസ് ബോസ് ","duration":"963.66"},
{"name":"00211","title":"എന്റെ ചക്കര ചെക്കൻ ","duration":"2314.97"},
{"name":"00212","title":"എന്റെ ദാരുണമായ ജീവിതം ","duration":"985.78"},
{"name":"00213","title":"എന്റെ പാൽക്കാരി ","duration":"624.38"},
{"name":"00214","title":"എന്റെ പേര് അനിൽ ","duration":"480.84"},
{"name":"00215","title":"എന്റെ പേര് കൃഷ്ണദാസ് ","duration":"410.41"},
{"name":"00216","title":"എന്റെ പേര് ജമീല ","duration":"498.13"},
{"name":"00217","title":"എന്റെ പേര് ജിഷ്ണു ","duration":"569.03"},
{"name":"00218","title":"എന്റെ പേര് ഡീപ് ","duration":"516.57"},
{"name":"00219","title":"എന്റെ പേര് രവി ","duration":"546.98"},
{"name":"00220","title":"എന്റെ പേര് രാകേഷ് ","duration":"645.30"},
{"name":"00221","title":"എന്റെ പേര് രാമു ","duration":"599.12"},
{"name":"00222","title":"എന്റെ പേര് രാഹുൽ ","duration":"1099.28"},
{"name":"00233","title":"എന്റെ പേര് റിനു ","duration":"526.73"},
{"name":"00234","title":"എന്റെ പേര് റീന ","duration":"544.97"},
{"name":"00223","title":"എന്റെ പേര് ലീന ","duration":"510.46"},
{"name":"00194","title":"18കാരികോളേജ്പെണ്ണ് ","duration":"1135.20"},
{"name":"00227","title":"എന്റെ പേര് വിനു ","duration":"626.78"},
{"name":"00228","title":"എന്റെ പേര് വീണ ","duration":"511.48"},
{"name":"00226","title":"എന്റെ പേര് വിനീത് ","duration":"765.94"},
{"name":"00225","title":"എന്റെ പേര് വൽസൻ ","duration":"386.19"},
{"name":"00229","title":"എന്റെ പേര് ഷിബു ","duration":"399.46"},
{"name":"00230","title":"എന്റെ പേര് സുഡി ","duration":"477.73"},
{"name":"00231","title":"എന്റെ പേര് സുശീല ","duration":"536.53"},
{"name":"00232","title":"എന്റെ പേര് സോണ ","duration":"599.80"},
{"name":"00235","title":"എന്റെ പ്രിയക്കുട്ടി ","duration":"1628.68"},
{"name":"00236","title":"എന്റെ മണിച്ചെപ്പ് ","duration":"1110.39"},
{"name":"00237","title":"എന്റെ മമ്മി സോഫിയ ","duration":"1512.28"},
{"name":"00238","title":"എന്റെ_കാമുകൻ_എന്നെ_വിറ്റു ","duration":"1032.36"},
{"name":"00239","title":"എന്റെ_കൂട്ടുകാരനും_ഭാര്യയും ","duration":"1047.72"},
{"name":"00240","title":"എന്റെ_രണ്ട്_നീലക്കുറിഞ്ഞികൾ_കാമുകിയും_അമ്മയും_! ","duration":"1796.83"},
{"name":"00241","title":"എന്റെ_സഹോദരന്റെ_അവധിക്കാലം_കഴിഞ്ഞപ്പോൾ ","duration":"779.62"},
{"name":"00242","title":"ഒളിച്ചോടിയ_ദാമ്പത്യ_ജീവിതം ","duration":"1111.46"},
{"name":"00193","title":"18ആം വയസ്സിൽ ","duration":"1219.60"},
{"name":"00244","title":"കല്യാണ വീട്ടിലെ കളി ","duration":"530.78"},
{"name":"00245","title":"കള്ളൻ റോക്കി ","duration":"712.10"},
{"name":"00246","title":"കാവ്യയുടെ_പൂർ_മനുവിന്റെ_വായിൽ ","duration":"933.28"},
{"name":"00247","title":"കിരൺ ","duration":"615.39"},
{"name":"00248","title":"കിഷോർ ","duration":"602.96"},
{"name":"00249","title":"കുഞ്ഞമ്മയും_കൊച്ചുമോനും ","duration":"602.98"},
{"name":"00250","title":"കൂട്ടുകാരന്റെ_കസിന്റെ_ഭാര്യ_ഷീജ_ചേച്ചി ","duration":"586.19"},
{"name":"00251","title":"കോട്ടയം റാണി ","duration":"819.77"},
{"name":"00252","title":"ചേച്ചിയുടെ_കളി_ക്ലാസ്സ്‌_അനുജന് ","duration":"645.12"},
{"name":"00253","title":"ജക്ക പഴങ്ങൾ ","duration":"719.78"},
{"name":"00254","title":"ജോസഫ് ","duration":"479.14"},
{"name":"00255","title":"ഞങ്ങളുടെ_പുതിയ_അയൽക്കാരി ","duration":"1232.38"},
{"name":"00256","title":"ഞാൻ അംബികയാണ് ","duration":"363.42"},
{"name":"00257","title":"ഞാൻ ഹാരി ","duration":"559.67"},
{"name":"00258","title":"ഡ്രൈവറുടെ_ചരക്ക്_ഭാര്യയും_മകളും ","duration":"1100.96"},
{"name":"00259","title":"തൊഴിലില്ലാത്ത_വികൃതിയായ_കുട്ടി ","duration":"1051.27"},
{"name":"00260","title":"തൊഴിൽഉറപ്പ്_പെണ്ണുങ്ങൾ_1മുട്ടി_നിൽക്കുന്ന_ചക്കകൾ ","duration":"577.62"},
{"name":"00261","title":"ദേവിക_തമ്പുരാട്ടിയുടെ_വെളുത്ത_പൂറ് ","duration":"1093.85"},
{"name":"00224","title":"എന്റെ പേര് വർഷ ","duration":"527.54"},
{"name":"00201","title":"അമ്മായിടെ_വീട്ടിൽ_വിരുന്നിന്_പോയപ്പോൾ_അമ്മായി_തിന്നാൻ_തന്നു ","duration":"1039.52"},
{"name":"00264","title":"നീലിമ_ചേച്ചി_എന്ന_കുണ്ടി_കുലുക്കികൊച്ചിക്കാരി ","duration":"965.07"},
{"name":"00265","title":"ന്യൂ ഡെൽഹി ","duration":"2078.56"},
{"name":"00266","title":"പയ്യനും 30കാരിയും ","duration":"872.05"},
{"name":"00267","title":"പാറുവിന്റെ_പൂറ്_പൊളിച്ചു ","duration":"865.54"},
{"name":"00268","title":"പൊറോട്ട വട ","duration":"1043.91"},
{"name":"00269","title":"പ്രിയയുടെ_ഉണ്ട_മുല_ചപ്പി_lockdown_കളി ","duration":"722.26"},
{"name":"00270","title":"ഫാത്തിമയുടെ_കുണ്ടിയിൽ_മമൂട്ടി_പണ്ണി ","duration":"995.29"},
{"name":"00271","title":"ബംഗാളി_ബാബുവും_കൊച്ചമ്മയും ","duration":"941.17"},
{"name":"00263","title":"നിമ്മിയുടെ_മുലകൾ_കോട്ടയംകാരി_അച്ചായത്തി ","duration":"999.13"},
{"name":"00273","title":"ബിസിനസ്സ് മാൻ ","duration":"600.01"},
{"name":"00262","title":"ദോശ ","duration":"1004.46"},
{"name":"00275","title":"മലാവികയും അമ്മാവനും ","duration":"744.93"},
{"name":"00276","title":"മായ_ടീച്ചർ_ചന്തിയിൽ_അടിച്ചു ","duration":"737.23"},
{"name":"00277","title":"മീരയുടെ_ചന്തിയും_മിനിയുടെ_കുണ്ടിയും ","duration":"1014.60"},
{"name":"00278","title":"മുതലാളിയും_വേലക്കാരിയും ","duration":"1107.20"},
{"name":"00279","title":"മെഡിക്കൽ സ്റ്റോർ ","duration":"914.10"},
{"name":"00280","title":"മേസൺ സുരേന്ദ്രൻ ","duration":"665.84"},
{"name":"00281","title":"രണ്ടാനമ്മയായ നീതു ","duration":"479.11"},
{"name":"00282","title":"രാജന്റെ_പാരയിൽ_ബീനയുടെ_തേങ്ങ ","duration":"823.82"},
{"name":"00283","title":"രേവതി ","duration":"1241.68"},
{"name":"00284","title":"രേഷ്മയുടെ പാട്ട് ","duration":"645.62"},
{"name":"00308","title":"റംല_ഇത്തയുടെ_ചന്തിക്ക്_പിടുത്തം ","duration":"996.18"},
{"name":"00309","title":"റോബിൻ ","duration":"555.28"},
{"name":"00285","title":"ലക്ഷ്മണന്റെ ബാറ്റ് ","duration":"1029.25"},
{"name":"00286","title":"ലോറി_ഡ്രൈവറും_ലേഡി_ഡോക്ടറും ","duration":"687.18"},
{"name":"00287","title":"വട ","duration":"671.19"},
{"name":"00291","title":"വിലക്കപ്പെട്ട ഫലം_temp ","duration":"1143.38"},
{"name":"00292","title":"വിവേക് ","duration":"655.15"},
{"name":"00293","title":"വിഷ്ണുവിന്റെ_പലചരക്ക്_കട ","duration":"554.53"},
{"name":"00294","title":"വീണ ","duration":"785.89"},
{"name":"00295","title":"വേലക്കാരിയുടെ_കൂതിയിൽ_ഹാജിയാരുടെ_പഴം ","duration":"983.12"},
{"name":"00296","title":"വേലപ്പന്റെ_കുണ്ണയും_കൊച്ചമ്മയുടെ_കുണ്ടിയും ","duration":"894.62"},
{"name":"00288","title":"വർഗ്ഗീസ് ","duration":"1205.97"},
{"name":"00290","title":"വർഷ ","duration":"840.02"},
{"name":"00289","title":"വർഷ ആന്റി ","duration":"874.74"},
{"name":"00297","title":"ഷബാന ഒരു വീട്ടമ്മയാണ് ","duration":"506.59"},
{"name":"00298","title":"ഷാഹിനയും_ആൻ_മരിയയും_പിന്നെ_ഞാനും ","duration":"742.77"},
{"name":"00274","title":"ബീന_ടീച്ചർ_ചന്തിയിൽ_നുള്ളി ","duration":"938.11"},
{"name":"00300","title":"ഷൗക്കത്ത് ","duration":"599.43"},
{"name":"00301","title":"സതീഷന്റെ_വിരസമായ_ജീവിതം ","duration":"727.75"},
{"name":"00302","title":"സാമ്പാർ വട ","duration":"770.22"},
{"name":"00243","title":"കന്യസ്ത്രീകളെ_കളിച്ച_പള്ളിയിൽ_അച്ഛൻ ","duration":"958.59"},
{"name":"00304","title":"സുജാത മിസ് ","duration":"628.64"},
{"name":"00305","title":"സുതീഷ് ","duration":"1027.11"},
{"name":"00306","title":"സ്വർണലത ","duration":"599.59"},
{"name":"00307","title":"ഹേമ ഭാഭി ","duration":"599.28"},
{"name":"00299","title":"ഷൈനിയുടെ വഴുതനങ്ങ കളി ","duration":"907.26"},
{"name":"00272","title":"ബില്ല്_നോക്കാൻ_വന്ന_ചേച്ചിയും_അയലത്തെ_പയ്യനും ","duration":"1239.51"},
{"name":"00303","title":"സാറാമ്മയുടെ_കുണ്ടിക്ക്_അടി ","duration":"759.88"}]
module.exports = Audios;
