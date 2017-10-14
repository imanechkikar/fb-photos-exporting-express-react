/**
 * Created by IMAD on 13/10/2017.
 */
import {black,white, grey100, grey300, grey400, grey500, darkBlack, fullBlack,red500,blue500,blue600} from "material-ui/styles/colors";
import {fade} from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

export default {
    theme :{
        spacing: Spacing,
        zIndex: zIndex,
        tabs: {
            textColor: black,
            selectedTextColor: blue500,
            backgroundColor: white,
            width: '50%'
        },
        palette: {
            primary1Color: blue500,
            primary2Color: blue600,
            primary3Color: grey400,
            accent1Color: white,
            accent2Color: grey100,
            accent3Color: grey500,
            textColor: darkBlack,
            alternateTextColor: white,
            canvasColor: white,
            borderColor: grey300,
            disabledColor: fade(darkBlack, 0.3),
            pickerHeaderColor: blue500,
            clockCircleColor: fade(darkBlack, 0.07),
            shadowColor: fullBlack,
        },

    },

    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: white,
        margin: '0px 5px 5px 5px',
        width: '90%',
        height:'100%',
    },

    row: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        padding : '5px',
        margin: '5px',
        width: '100%',
        height:'100%',
        backgroundColor: white,
    },

    list :{
        width: '100%' ,
        height:'100%',
    },

    failedMsg:{
        margin : "0px 15px 0 15px",
        color: red500,
        zIndex: 4000,
    },

    formLogin :{
        width: '50%'
    },

    buttons: {
        marginTop: '24px',
        marginRight: '15px',
    },

    field:{
        width : '100%'
    }
}