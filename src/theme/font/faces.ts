// tslint:disable: max-line-length
import { FontFaceTheme } from './types';

const proximaNova: FontFaceTheme = {
    fontFamily: 'Open Sans',
    fontFaces: [
        {
            primarySrc: `local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNShampu5_7CjHW5spxoeN3Vs.woff2) format('woff2')`,
            secondarySrc: '',
            fontWeight: 600,
            fontStyle: 'normal',
            fontDisplay: 'auto',
        },
    ],
};

const faces: FontFaceTheme[] = [proximaNova];

export default faces;
