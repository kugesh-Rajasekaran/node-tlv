/**
 * Created by coolbong on 2017-02-14.
 */

/**
 * Created by coolbong on 2016-06-10.
 */
var toBuffer = require('../util').toBuffer;
var toHexString = require('../util').toHexString;
var toAscii = require('../util').toAscii;

function RecordModel() {

}


/**
 * Card holder name
 * '5F20'
 *
 * @param tlv
 * @returns {Array}
 * @constructor
 */


function CardHolderName(tlv) {
    var buf = toBuffer(tlv.getValue());
    var desc = [];
    desc.push(toAscii(buf));
    return desc;
}

/**
 * CDOL1
 * '8C'
 *
 * tlv
 * @returns {Array}
 * @constructor
 */
function CDOL1 (tlv) {
    var dol = tlv.parseDolValue();

    var desc = [];
    desc.push('CDOL1: 8C CDOL1 Related Data length: ' + toHexString(dol.getDolRelatedDataLength()) + ' (' + dol.getDolRelatedDataLength() + ')');
    var dolList = dol.getList();
    dolList.forEach(function (tl) {
        desc.push(tl.getTag() + ' ' + tl.getL() + ' (' + tl.getLength() + ') ' + tl.getName());
    });

    return desc;
}


/**
 * CDOL2
 * '8D'
 *
 * tlv
 * @returns {Array}
 * @constructor
 */
function CDOL2 (tlv) {

    var dol = tlv.parseDolValue();
    var desc = [];
    desc.push('CDOL2: CDOL2 Related Data length: ' + toHexString(dol.getDolRelatedDataLength()) + ' (' + dol.getDolRelatedDataLength() + ')');
    var dolList = dol.getList();
    dolList.forEach(function (tl) {
        desc.push(tl.getTag() + ' ' + tl.getL() + ' (' + tl.getLength() + ') ' + tl.getName());
    });

    return desc;
}


/*
function CVM(data) {
    var value = toBuffer(data);
    var desc = [];
    var code = value[0] & 0x3F;

    desc.push('CVM: ' + toHexString(value));
    //desc.push('CV Rule Byte 1 (Leftmost): Cardholder Verification Method (CVM) codes: ' + toHexString(this.value[0]));

    if ((value[0] & 0x40) == 0x40)  {
        desc.push('\tMove to next rule if verification is unsuccessful');
    } else {
        desc.push('\tFail cardholder verification if this CVM is unsuccessful');
    }

    if (code == 0x00) {
        desc.push('\tFail CVM processing');
    } else if (code == 0x01) {
        // 0b0000 0000
        desc.push('\tPlaintext PIN verification performed by ICC');
    } else if (code == 0x02) {
        // 0b0000 0001
        desc.push('\tEnciphered PIN verified online')
    } else if (code == 0x03) {
        // 0b0000 0011
        desc.push('\tPlaintext PIN verification performed by ICC and signature(paper)');
    } else if (code == 0x04) {
        // 0b0000 0100
        desc.push('\tEnciphered PIN verification performed by ICC');
    } else if (code == 0x05) {
        // 0b0000 0101
        desc.push('\tEnciphered PIN verification performed by ICC and signature (paper)');
    } else if (code == 0x1E) {
        // 0b0001 1110
        desc.push('\tSignature (paper)');
    } else if (code ==0x1F) {
        // 0b0001 1111
        desc.push('\tNo CVM required');
    }

    code = value[1];

    //desc.push('CV Rule Byte 2  Cardholder Verification Method (CVM)  Condition codes: ' + toHexString(this.value[1]));
    if (code == 0x00) {
        desc.push('\tAlways');
    } else if (code == 0x01) {
        desc.push('\tIf unattended cash');
    } else if (code == 0x02) {
        desc.push('\tIf not unattended cash and not manual cash and not purchase with cashback');
    } else if (code == 0x03) {
        desc.push('\tIf terminal supports the CVM');
    } else if (code == 0x04) {
        desc.push('\tIf manual cash');
    } else if (code == 0x05) {
        desc.push('\tIf purchase with cashback');
    } else if (code == 0x06) {
        desc.push('\tIf transaction is in the application currency 21 and is under X value (see section 10.5 for a discussion of X)');
    } else if (code == 0x07) {
        desc.push('\tIf transaction is in the application currency and is over X value');
    } else if (code == 0x08) {
        desc.push('\tIf transaction is in the application currency and is under Y value (see section 10.5 for a discussion of Y)');
    } else if (code == 0x09) {
        desc.push('\tIf transaction is in the application currency and is over Y value');
    }

    return desc;
}
*/

/**
 * '8E'
 * tlv
 * @returns {Array}
 * @constructor
 */
/*
function CVMList(value) {

    value = toBuffer(value);
    this.cvm = [];
    var len = value.length;

    // x : 4 byte
    this.amountX = value.slice(0, 4);
    this.amountY = value.slice(4, 8);

    var value = value.slice(8, len);


    var cnt = value.length / 2;
    var offset = 0;
    for (var i=0; i<cnt; i++) {
        var item = value.slice(offset, offset+2);
        offset += 2;
        this.cvm.push(new CVM(item));
    }

    var desc = [];
    desc.push('amount x: ' + this.amountX.toHexString());
    desc.push('amount y: ' + this.amountY.toHexString());

    this.cvm.forEach(function(item) {
        desc = desc.concat(item.desc());
        desc.push('');
    });
    return desc;
}
*/

/**
 * Issuer Country Code
 * '5F28'
 * tlv
 * @returns {Array}
 * @constructor
 */
function IssuerCountryCode(tlv) {

    var value = tlv.getValue();
    var issuerCountryCode = require('./json/CountryCode.json');
    var obj = issuerCountryCode[value];

    var desc = [];
    if (obj !== undefined) {
        desc.push('country info: name : ' + obj['country'] + ' (' + obj['A3'] + ')');
    } else {
        desc.push('unknown country code. plz update ISO3166.');
    }
    return desc;
}


/**
 * Service Code
 * http://www.gae.ucm.es/~padilla/extrawork/tracks.html
 * '5F30'
 *
 * @param tlv
 * @returns {Array}
 * @constructor
 */
function ServiceCode(tlv) {
    var value = toBuffer(tlv.getValue());

    var desc = [];
    //Digit 1 (most significant): Interchange and technology:
    var digit = parseInt(value[1]);
    var digit1InterchangeAndTech = {
        0: '0: Reserved for future use by ISO.',
        1: '1: Available for international interchange.',
        2: '2: Available for international interchange and with integrated circuit, which should be used for the financial transaction when feasible.',
        3: '3: Reserved for future use by ISO.',
        4: '4: Reserved for future use by ISO.',
        5: '5: Available for national interchange only, except under bilateral agreement.',
        6: '6: Available for national interchange only, except under bilateral agreement, and with integrated circuit, which should be used for the financial transaction when feasible.',
        7: '7: Not available for general interchange, except under bilateral agreement.',
        8: '8: Reserved for future use by ISO.',
        9: '9: Test.'
    };

    desc.push(digit1InterchangeAndTech[digit]);


    digit = parseInt(value[2]);
    var digit2AuthorizingProcessing = {
        0: '0: Transactions are authorized following the normal rules.',
        1: '1: Reserved for future use by ISO.',
        2: '2: Transactions are authorized by issuer and should be online.',
        3: '3: Reserved for future use by ISO.',
        4: '4: Transactions are authorized by issuer and should be online, except under bilateral agreement.',
        5: '5: Reserved for future use by ISO.',
        6: '6: Reserved for future use by ISO.',
        7: '7: Reserved for future use by ISO.',
        8: '8: Reserved for future use by ISO.',
        9: '9: Reserved for future use by ISO.'
    };
    desc.push(digit2AuthorizingProcessing[digit]);


    digit = parseInt(value[3]);
    var digit3RangeOfServices = {
        0: '0: No restrictions and PIN required.',
        1: '1: No restrictions.',
        2: '2: Goods and services only (no cash).',
        3: '3: ATM only and PIN required.',
        4: '4: Cash only.',
        5: '5: Goods and services only (no cash) and PIN required.',
        6: '6: No restrictions and require PIN when feasible.',
        7: '7: Goods and services only (no cash) and require PIN when feasible.',
        8: '8: Reserved for future use by ISO.',
        9: '9: Reserved for future use by ISO.'
    };

    desc.push(digit3RangeOfServices[digit]);

    return desc;
}

/**
 * Application Usage Control
 *
 * Indicates issuer's specified restrictions on the geographic usage and services allowed for the application
 * '9F07'
 *
 * @param tlv
 * @returns {Array}
 * @constructor
 */
function ApplicationUsageControl(tlv) {
    var buff = toBuffer(tlv.getValue());
    var code = buff[0];
    var desc = [];

    desc.push('byte1: ' + toHexString(code));
    if ((code & 0x80) === 0x80) {
        desc.push('\tb8 Valid for domestic cash transactions');
    }
    if ((code & 0x40) === 0x40) {
        desc.push('\tb7 Valid for international cash transactions');
    }
    if ((code & 0x20) === 0x20) {
        desc.push('\tb6 Valid for domestic goods');
    }
    if ((code & 0x10) === 0x10) {
        desc.push('\tb5 Valid for international goods');
    }
    if ((code & 0x08) === 0x08) {
        desc.push('\tb4 Valid for domestic services');
    }
    if ((code & 0x04) === 0x04) {
        desc.push('\tb3 Valid for international services');
    }
    if ((code & 0x02) === 0x02) {
        desc.push('\tb2 Valid at ATMs');
    }
    if ((code & 0x01) === 0x01) {
        desc.push('\tb1 Valid at terminals other than ATMs');
    }

    code = buff[1];
    desc.push('byte2: ' + toHexString(code));
    if ((code & 0x80) === 0x80) {
        desc.push('\tb8 Domestic cash-back allowed');
    }
    if ((code & 0x40) === 0x40) {
        desc.push('\tb7 International cash-back allowed');
    }
    return desc;
}

RecordModel.CardHolderName = CardHolderName;
RecordModel.CDOL1 = CDOL1;
RecordModel.CDOL2 = CDOL2;
// RecordModel.CVMList = CVMList;
RecordModel.IssuerCountryCode = IssuerCountryCode;
RecordModel.ServiceCode = ServiceCode;
RecordModel.ApplicationUsageControl = ApplicationUsageControl;

module.exports = RecordModel;