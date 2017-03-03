var TLV = require('../lib/TLV.js');


var resps =
[
    '6F3A8407A0000000041010A52F500A4D6173746572436172649F38069F5C089F4005BF0C179F5E095413339000001513019F5D030101009F4D020B0A',
  '70385F24032012315F25030601019F0702FF005A0854133390000015139F0D05F8406420009F0E0500108800009F0F05F86064F8005F28020056',
  '70538C279F02069F03069F1A0295055F2A029A039C019F37049F35019F45029F4C089F34039F21039F7C148D12910A8A0295059F37049F4C089F02069F03068E1400000000000000004201440341035E0342031F03',
  '70339F420209789F0802000257125413339000001513D20122010000000000009F5B0CDF6008DF6108DF6201DF63A09F51039F3704',
  '70049F320103',
  '70298F01F492246E8042D075DDC54E51300D03E44EBFF7140C0556B39CA0D78B28553644A12365F40FA547',
  '7081B39081B0914315BDA0CCFC820718C0225A278C2964B9668C697A4C00451C75A10180B0BD3E2601BDD30D3319DC4006E911E271B7C6AAEE28FA65312BB1F680489CDC9CD311980E156F5841B7C6B0EFE3BD3DAA1C4D9DE235644F461C79DF0336A8C570CA69BAC1EA1570C590178AAC7532934839660F4C8F3B74023DBCD75E655240952AA1E4CB4ECF322749B51B72865B1B28C1000E542E562FF20E0F9FCA28C930831F8FDC06FC7B05E162CB37570E41C65D14',
  '70399F47030100019F482AAE83BF5BB436738AC650AC991DB606E56644E9CCFC6A7035434D7D425C5FBF474799E09F79E31472FBF39F49039F3704',
  '70339F2E030100019F2F2AC5C9852EDB8C522912F3D49EADDDEF2257297F73C9955499297DD3386999A8BD86FEAB16F3191E15287B',
  '7081B49F2D81B00302F0561066BC392C611A317ADFA285DF7859CE7F58C84C98B9E5571606A5A7DC8D5FC578F6F5858BCC0A212C821A4CE05FED68BB9EB6B4368CEACDF913F5ADAD738EFA58B3C4849B811DD53FE59DCC7353FACC2F3F407EE3F789F4D5AB7F6527B075EE00C8AA1C6BCC6AF1AF9E789D2E38982653258940BC7D5A32F38B2229183A8E585505B795F827BF5F8C4207A3890B90E68C98723302586581895921B8E22941E87730515AA9F1E6C0C04E2F48',
  '70045F340101',
  '7081B39381B08DF93EE206F8F998F1919B44DDBE3F39337FCACCBFE9F48B7C29EDBF4F766CA0B53A67235D70CCC580B4C166C9B3E3CDC3DCE06D36206AA42EC0BB71366EEA9F2AC31387D138DF4553F7ADE93C4E6C8DAD181435111904A6A7F39A203291F632CF655A7C86FF7872F518F72F946012D3EA7E22F733E4F85CC1D8DB710A80E9E5423B6F83B56F0973121D5217D10E8668D21452834446850B26BA31506B1BF994065B2E3CB5D956F5A8B0646BB232F60B',
  '7081B49F4681B07896EEC5FCF7F1BF73BD60455E20667B6A72EE9F625E6D97144A1BD0C4F589D271004EEC7DED670A5614F9F9D58D9B1827C3299F8775AC81B63C2DD76BC0AE94C236523F53309267F8F12DA0795F78CFC5F346DF0B16A110C55F4419FAAC363334E7AEB3C5A2A0AA008D49AA139ED8AFB8AA5447E52F878F981126D866808E8EB6B36D2B82440C47C0ED8D9DE0BB58B7C1D6E9D7C308EEF0BDB733E75367231396F338BFFFD1D97B0759F32E719F9F02'
];


function main() {
    // record data element record -> dataElement
    var dataElement = [];


    resps.forEach(function (item){
        // parse each record
        var tlv = TLV.parse(item);

        // record have 1 depth children
        var children = tlv.getChild();
        // concatenate array
        dataElement = dataElement.concat(children);
        console.log(tlv.toString());
        tlv.print();
        console.log('');
    });
}

main();