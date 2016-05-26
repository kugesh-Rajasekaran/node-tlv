/**
 * Created by coolbong on 2016-03-25.
 * reference 
 * - http://www.openscdp.org/scsh3/tlv.html
 */

var assert = require('assert');
var TLV = require('../lib/TLV');

exports.tlv = {

    'example' : function() {
        var response = '6F3A8407A0000000041010A52F500A4D6173746572436172649F38069F5C089F4005BF0C179F5E095413339000001513019F5D030101009F4D020B0A';
        var tlv = TLV.parse(response);

        var tag6F = tlv.getTag();
        assert(tag6F === '6F');

        var tag6FLength = tlv.getLength();
        assert(tag6FLength === 0x3A);

        var tag6FValue = tlv.getValue();
        assert(tag6FValue === '8407A0000000041010A52F500A4D6173746572436172649F38069F5C089F4005BF0C179F5E095413339000001513019F5D030101009F4D020B0A');


        var child = tlv.getChild();
        assert(child.length === 2);
    },

    'tlv parse TLV.EMV' : {
        'getTag': function() {
            var tlv;
            tlv = TLV.parse('6F098407A0000000041010');
            assert(tlv.getTag() == '6F');

            tlv = TLV.parse('6F3A8407A0000000041010A52F500A4D6173746572436172649F38069F5C089F4005BF0C179F5E095413339000001513019F5D030101009F4D020B0A');
            assert(tlv.getTag() == '6F');

            tlv = TLV.parse('771682027980941008010100100104011801050020010301');
            assert(tlv.getTag() == '77');

            tlv = TLV.parse('70759F6C0200019F62060000003800009F630600000000E0E0563442353431333333393030303030313531335E202F5E323031323230313333303030333333303030323232323230303031313131309F6401039F6502000E9F66020E709F6B135413339000001513D20122019000990000000F9F670103');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70385F24032012315F25030601019F0702FF005A0854133390000015139F0D05F8406420009F0E0500108800009F0F05F86064F8005F28020056');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70538C279F02069F03069F1A0295055F2A029A039C019F37049F35019F45029F4C089F34039F21039F7C148D12910A8A0295059F37049F4C089F02069F03068E1400000000000000004201440341035E0342031F03');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70339F420209789F0802000257125413339000001513D20122010000000000009F5B0CDF6008DF6108DF6201DF63A09F51039F3704');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70049F320103');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70298F01F492246E8042D075DDC54E51300D03E44EBFF7140C0556B39CA0D78B28553644A12365F40FA547');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('7081B39081B0914315BDA0CCFC820718C0225A278C2964B9668C697A4C00451C75A10180B0BD3E2601BDD30D3319DC4006E911E271B7C6AAEE28FA65312BB1F680489CDC9CD311980E156F5841B7C6B0EFE3BD3DAA1C4D9DE235644F461C79DF0336A8C570CA69BAC1EA1570C590178AAC7532934839660F4C8F3B74023DBCD75E655240952AA1E4CB4ECF322749B51B72865B1B28C1000E542E562FF20E0F9FCA28C930831F8FDC06FC7B05E162CB37570E41C65D14');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70399F47030100019F482AAE83BF5BB436738AC650AC991DB606E56644E9CCFC6A7035434D7D425C5FBF474799E09F79E31472FBF39F49039F3704');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70339F2E030100019F2F2AC5C9852EDB8C522912F3D49EADDDEF2257297F73C9955499297DD3386999A8BD86FEAB16F3191E15287B');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('7081B49F2D81B00302F0561066BC392C611A317ADFA285DF7859CE7F58C84C98B9E5571606A5A7DC8D5FC578F6F5858BCC0A212C821A4CE05FED68BB9EB6B4368CEACDF913F5ADAD738EFA58B3C4849B811DD53FE59DCC7353FACC2F3F407EE3F789F4D5AB7F6527B075EE00C8AA1C6BCC6AF1AF9E789D2E38982653258940BC7D5A32F38B2229183A8E585505B795F827BF5F8C4207A3890B90E68C98723302586581895921B8E22941E87730515AA9F1E6C0C04E2F48');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('70045F340101');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('7081B39381B08DF93EE206F8F998F1919B44DDBE3F39337FCACCBFE9F48B7C29EDBF4F766CA0B53A67235D70CCC580B4C166C9B3E3CDC3DCE06D36206AA42EC0BB71366EEA9F2AC31387D138DF4553F7ADE93C4E6C8DAD181435111904A6A7F39A203291F632CF655A7C86FF7872F518F72F946012D3EA7E22F733E4F85CC1D8DB710A80E9E5423B6F83B56F0973121D5217D10E8668D21452834446850B26BA31506B1BF994065B2E3CB5D956F5A8B0646BB232F60B');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('7081B49F4681B07896EEC5FCF7F1BF73BD60455E20667B6A72EE9F625E6D97144A1BD0C4F589D271004EEC7DED670A5614F9F9D58D9B1827C3299F8775AC81B63C2DD76BC0AE94C236523F53309267F8F12DA0795F78CFC5F346DF0B16A110C55F4419FAAC363334E7AEB3C5A2A0AA008D49AA139ED8AFB8AA5447E52F878F981126D866808E8EB6B36D2B82440C47C0ED8D9DE0BB58B7C1D6E9D7C308EEF0BDB733E75367231396F338BFFFD1D97B0759F32E719F9F02');
            assert(tlv.getTag() == '70');

            tlv = TLV.parse('E581CDDF01080000000000000001DF020180DF03080101010101010101DF040140DF05080101010101010101DF0681A001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101');
            assert(tlv.getTag() == 'E5');

            tlv = TLV.parse('77319F2701009F360200019F2608C3992F2EA81CDA489F101A22108D0203040005000000000000000000FF00000000000000FF');
            assert(tlv.getTag() == '77');

            tlv = TLV.parse('D7069C064098E10C');
            assert(tlv.getTag() == 'D7');

            tlv = TLV.parse('C70142');
            assert(tlv.getTag() == 'C7');

            tlv = TLV.parse('DF300103');
            assert(tlv.getTag() == 'DF30');

            tlv = TLV.parse('DF4101C1');
            assert(tlv.getTag() == 'DF41');
        }
    },
    'tlv parse TLV.DGI' : {
        'create DGI TLV' :  function() {
            // fixme
            // more length checking
            // 0x7F // 7F
            // 0x80 // 80
            // 0xFF //
        },

        'getTag' : function() {
            var tlv;

            tlv = TLV.parse('01017770759F6C0200019F62060000003800009F630600000000E0E0563442353431333333393030303030313531335E202F5E323031323230313333303030333333303030323232323230303031313131309F6401039F6502000E9F66020E709F6B135413339000001513D20122019000990000000F9F670103', TLV.DGI);
            assert(tlv.getTag() == '0101');

            tlv = TLV.parse('02013A70385F24032012315F25030601019F0702FF005A0854133390000015139F0D05F8406420009F0E0500108800009F0F05F86064F8005F28020056', TLV.DGI);
            assert(tlv.getTag() == '0201');

            tlv = TLV.parse('02025570538C279F02069F03069F1A0295055F2A029A039C019F37049F35019F45029F4C089F34039F21039F7C148D12910A8A0295059F37049F4C089F02069F03068E1400000000000000004201440341035E0342031F03', TLV.DGI);
            assert(tlv.getTag() == '0202');

            tlv = TLV.parse('02033570339F420209789F0802000257125413339000001513D20122010000000000009F5B0CDF6008DF6108DF6201DF63A09F51039F3704', TLV.DGI);
            assert(tlv.getTag() == '0203');

            tlv = TLV.parse('02040670049F320103', TLV.DGI);
            assert(tlv.getTag() == '0204');
        },
        'getLength' : function() {
            var tlv;

            tlv = TLV.parse('01017770759F6C0200019F62060000003800009F630600000000E0E0563442353431333333393030303030313531335E202F5E323031323230313333303030333333303030323232323230303031313131309F6401039F6502000E9F66020E709F6B135413339000001513D20122019000990000000F9F670103', TLV.DGI);
            assert(tlv.getLength() == 0x77);

            tlv = TLV.parse('02013A70385F24032012315F25030601019F0702FF005A0854133390000015139F0D05F8406420009F0E0500108800009F0F05F86064F8005F28020056', TLV.DGI);
            assert(tlv.getLength() == 0x3A);

            tlv = TLV.parse('02025570538C279F02069F03069F1A0295055F2A029A039C019F37049F35019F45029F4C089F34039F21039F7C148D12910A8A0295059F37049F4C089F02069F03068E1400000000000000004201440341035E0342031F03', TLV.DGI);
            assert(tlv.getLength() == 0x55);

            tlv = TLV.parse('02033570339F420209789F0802000257125413339000001513D20122010000000000009F5B0CDF6008DF6108DF6201DF63A09F51039F3704', TLV.DGI);
            assert(tlv.getLength() == 0x35);

            tlv = TLV.parse('02040670049F320103', TLV.DGI);
            assert(tlv.getLength() == 0x06);
        }
    },
    'tlv parse error case' : {
        'parse undefined ' : function() {
            var tlv;
            tlv = TLV.parse();

            assert(tlv.getTag() === '');
            assert(tlv.getLength() === 0);
            assert(tlv.getValue() === '');
        },
        'parse empty string' : function() {
            var tlv;
            tlv = TLV.parse('');
            
            assert(tlv.getTag() === '');
            assert(tlv.getLength() === 0);
            assert(tlv.getValue() === '');
        }
    },
    'constructor' : function() {
        var tlv;
        var data;

        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.encodingMode == TLV.EMV);
        assert(tlv.size == 5);

        tlv = new TLV(0x0601, '2A1234', TLV.EMV);
        assert(tlv.encodingMode == TLV.EMV);
        assert(tlv.size == 6);


        //fixme
        //try {
        //    // Invalid tag for EMV  
        //    tlv = new TLV(0x6FFFFF, '2A1234', TLV.EMV);
        //} catch (e) {
        //    assert(e instanceof Error);
        //}


        data = new Buffer('561000', 'ascii');
        tlv = new TLV(0x1201, data, TLV.DGI);
        assert(tlv.encodingMode == TLV.DGI);
        assert(tlv.size == 9);

        tlv = new TLV(0x12, data, TLV.DGI);
        assert(tlv.encodingMode == TLV.DGI);
        assert(tlv.size == 9);
        

    },
    'getL()' : function() {

        var tlv;
        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getL() == '03');

        // 130 bytes
        tlv = new TLV(0x06, 
            '00010203040506070809000102030405060708090001020304050607080900010203040' + 
            '50607080900010203040506070809000102030405060708090001020304050607080900' +
            '01020304050607080900010203040506070809000102030405060708090001020304050' +
            '60708090001020304050607080900010203040506070809', TLV.EMV);
        assert(tlv.getL() == '8182');

        // 260 bytes
        tlv = new TLV(0x06, 
            '00010203040506070809000102030405060708090001020304050607080900010203040' +
            '50607080900010203040506070809000102030405060708090001020304050607080900' +
            '01020304050607080900010203040506070809000102030405060708090001020304050' +
            '60708090001020304050607080900010203040506070809000102030405060708090001' +
            '02030405060708090001020304050607080900010203040506070809000102030405060' +
            '70809000102030405060708090001020304050607080900010203040506070809000102' +
            '03040506070809000102030405060708090001020304050607080900010203040506070' +
            '80900010203040506070809', TLV.EMV);
        assert(tlv.getL() == '820104');


        tlv = new TLV(0x06, '2A1234', TLV.DGI);
        assert(tlv.getL() == '03');

        tlv = new TLV(0x06, 
            '00010203040506070809000102030405060708090001020304050607080900010203040' +
            '50607080900010203040506070809000102030405060708090001020304050607080900' +
            '01020304050607080900010203040506070809000102030405060708090001020304050' +
            '60708090001020304050607080900010203040506070809000102030405060708090001' +
            '02030405060708090001020304050607080900010203040506070809000102030405060' +
            '70809000102030405060708090001020304050607080900010203040506070809000102' +
            '03040506070809000102030405060708090001020304050607080900010203040506070' +
            '80900010203040506070809', TLV.DGI);
        assert(tlv.getL() == 'FF0104');
    },
    'getTV()' : function() {
        var tlv;
        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getTV() == "062A1234");

        tlv = new TLV(0x061F, '2A1234', TLV.DGI);
        assert(tlv.getTV() == "061F2A1234");
    },
    'getLV()' : function() {
        var tlv;
        tlv =  new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getLV() == '032A1234');

        tlv =  new TLV(0x06, '2A1234', TLV.DGI);
        assert(tlv.getLV() == '032A1234');
    },
    'getTag()' : function() {
        var tlv;
        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getTag() == '06');

        tlv = new TLV(0x9F03, '2A1234', TLV.EMV);
        assert(tlv.getTag() == '9F03');

        tlv = new TLV(0x061F, '2A1234', TLV.DGI);
        assert(tlv.getTag() == '061F');

        tlv = new TLV('', '1234');
        assert(tlv.getTag() == '');
    },
    'getTLV()' : function() {
        var tlv;
        var data;
        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getTLV() == "06032A1234");

        data = new Buffer('561000', 'ascii');
        tlv = new TLV(0x1201, data, TLV.DGI);
        assert(tlv.getTLV() == "120106353631303030");

        tlv = new TLV('', 'FE5960267173B426A62024AF18E7D978');
        assert(tlv.getTLV() == '10FE5960267173B426A62024AF18E7D978');
    },
    'getValue()' : function() {
        var tlv;
        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getValue() == '2A1234');


        tlv = new TLV(0x061F, '2A1234', TLV.DGI);
        assert(tlv.getValue() == '2A1234');
    },
    'getEncoding()' : function() {
        var tlv;
        tlv = new TLV(0x06, '2A1234', TLV.EMV);
        assert(tlv.getEncoding() === TLV.EMV);

        tlv = new TLV(0x061F, '2A1234', TLV.DGI);
        assert(tlv.getEncoding() === TLV.DGI);
    },
    'getName()' : function() {
        var tlv;
        tlv = new TLV('', 'FE5960267173B426A62024AF18E7D978');
        assert(tlv.getName() == '');
    },
    'TLV.L()' : function() {
        var data = 'F8C40DEA18E95A0B';
        var l = TLV.L(data);
        assert(l === '08');
    },
    'TLV.LV()': function() {
        var data = 'F8C40DEA18E95A0B';
        var lv = TLV.LV(data);
        assert(lv === '08' + data);
    },
    'TLV.TLV()': function() {
        var data = 'F8C40DEA18E95A0B';
        var tlv = TLV.TLV('00', data);
        assert(tlv === '0008' + data);
    },
    'util': {
        'getLength' : function() {

            // fixme assert
            var buf = new Buffer(127);
            TLV.getBufferLength(buf);

            buf = new Buffer(255);
            TLV.getBufferLength(buf);

            buf = new Buffer(0x1234);
            TLV.getBufferLength(buf);

            buf = new Buffer(0x123456);
            TLV.getBufferLength(buf);

            buf = new Buffer(0x12345678);
            TLV.getBufferLength(buf);
        },
        'adjustTag' : function() {
            var ret;
            var num;
            var str;

            num = 0x80;
            ret = TLV.adjustTag(num);
            assert(ret == '80');

            str = '8';
            ret = TLV.adjustTag(str);
            assert(ret == '08');

            str = '00C0';
            ret = TLV.adjustTag(str);
            assert(ret == 'C0');
        }
    }
};