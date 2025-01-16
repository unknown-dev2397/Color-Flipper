let btn = document.querySelector('.btn');
let color = document.querySelector('.color-name');

let arr = [
    "#040720", "#0C090A", "#34282C", "#3B3131", "#3A3B3C", "#454545", "#4D4D4F", "#413839", "#3D3C3A", "#463E3F",
    "#4C4646", "#504A4B", "#565051", "#52595D", "#5C5858", "#625D5D", "#666362", "#696969", "#686A6C", "#6D6968",
    "#726E6D", "#736F6E", "#757575", "#797979", "#837E7C", "#808080", "#848482", "#888B90", "#8C8C8C", "#8D918D",
    "#9B9A96", "#99A3A3", "#A9A9A9", "#A8A9AD", "#B6B6B4", "#B6B6B6", "#C0C0C0", "#C9C1C1", "#C9C0BB", "#C0C6C7",
    "#D1D0CE", "#CECECE", "#D3D3D3", "#DADBDD", "#DCDCDC", "#E0E5E5", "#F5F5F5", "#EEEEEE", "#E5E4E2", "#BCC6CC",
    "#98AFC7", "#838996", "#778899", "#708090", "#6D7B8D", "#657383", "#616D7E", "#646D7E", "#71797E", "#566D7E",
    "#737CA1", "#728FCE", "#4863A0", "#2F539B", "#2B547E", "#36454F", "#29465B", "#2B3856", "#123456", "#151B54",
    "#191970", "#000080", "#151B8D", "#00008B", "#15317E", "#0000A0", "#0000A5", "#0020C2", "#0000CD", "#0041C2",
    "#2916F5", "#0000FF", "#0002FF", "#0909FF", "#1F45FC", "#2554C7", "#1569C7", "#1974D2", "#2B60DE", "#4169E1",
    "#2B65EC", "#0059FF", "#306EFF", "#157DEC", "#1589FF", "#1E90FF", "#368BC1", "#4682B4", "#488AC7", "#357EC7",
    "#3090C7", "#14A3C7", "#659EC7", "#87AFC7", "#95B9C7", "#6495ED", "#6698FF", "#56A5EC", "#38ACEC", "#00BFFF",
    "#3BB9FF", "#5CB3FF", "#79BAEC", "#82CAFF", "#87CEFA", "#87CEEB", "#A0CFEC", "#B7CEEC", "#B4CFEC", "#ADDFFF",
    "#C2DFFF", "#C6DEFF", "#BDEDFF", "#B0E0E6", "#AFDCEC", "#ADD8E6", "#B0CFDE", "#C9DFEC", "#D5D6EA", "#E3E4FA",
    "#DBE9FA", "#E6E6FA", "#EBF4FA", "#F0F8FF", "#F8F8FF", "#F0FFFF", "#E0FFFF", "#CCFFFF", "#9AFEFF", "#7DFDFE",
    "#57FEFF", "#00FFFF", "#0AFFFF", "#50EBEC", "#4EE2EC", "#16E2F5", "#8EEBEC", "#AFEEEE", "#CFECEC", "#B3D9D9",
    "#81D8D0", "#77BFC7", "#92C7C7", "#78C7C7", "#7BCCB5", "#66CDAA", "#93E9BE", "#AAF0D1", "#93FFE8", "#7FFFD4",
    "#01F9C6", "#40E0D0", "#48D1CC", "#48CCCD", "#46C7C7", "#43C6DB", "#00CED1", "#43BFC7", "#20B2AA", "#3EA99F",
    "#5F9EA0", "#3B9C9C", "#008B8B", "#00827F", "#008080", "#007C80", "#045F5F", "#045D5D", "#033E3E", "#25383C",
    "#2C3539", "#3C565B", "#4C787E", "#5E7D7E", "#307D7E", "#348781", "#438D80", "#4E8975", "#1F6357", "#306754",
    "#006A4E", "#2E8B57", "#1B8A6B", "#31906E", "#00A36C", "#34A56F", "#1AA260", "#3EB489", "#50C878", "#22CE83",
    "#3CB371", "#7C9D8E", "#78866B", "#848B79", "#617C58", "#728C00", "#6B8E23", "#808000", "#555D50", "#556B2F",
    "#4E5B31", "#3A5F0B", "#4B5320", "#667C26", "#4E9258", "#08A04B", "#387C44", "#347235", "#27742C", "#347C2C",
    "#227442", "#228B22", "#008000", "#006400", "#056608", "#046307", "#355E3B", "#254117", "#004225", "#026C3D",
    "#437C17", "#347C17", "#6AA121", "#8A9A5B", "#3F9B0B", "#4AA02C", "#41A317", "#12AD2B", "#3EA055", "#73A16C",
    "#6CBB3C", "#6CC417", "#4CC417", "#32CD32", "#52D017", "#4CC552", "#54C571", "#89C35C", "#85BB65", "#99C68E",
    "#A0D6B4", "#8FBC8F", "#829F82", "#A2AD9C", "#B8BC86", "#9CB071", "#8FB31D", "#B0BF1A", "#B2C248", "#9DC209",
    "#A1C935", "#9ACD32", "#77DD77", "#7FE817", "#59E817", "#57E964", "#16F529", "#5EFB6E", "#00FF7F", "#00FF80",
    "#36F57F", "#00FA9A", "#12E193", "#5FFB17", "#00FF00", "#7CFC00", "#66FF00", "#7FFF00", "#87F717", "#98F516",
    "#B1FB17", "#ADF802", "#ADFF2F", "#BDF516", "#DAEE01", "#E2F516", "#CCFB5D", "#BCE954", "#64E986", "#90EE90",
    "#6AFB92", "#98FB98", "#98FF98", "#B5EAAA", "#E3F9A6", "#C3FDB8", "#C2E5D3", "#DBF9DB", "#E8F1D4", "#F0FFF0",
    "#F5FFFA", "#FFFACD", "#FFFFC2", "#FFFFCC", "#FFFDD0", "#FAFAD2", "#FFFFE0", "#F5F5DC", "#F2F0DF", "#FFF8DC",
    "#FBF6D9", "#FAEBD7", "#FFF0DB", "#FFEFD5", "#F7E7CE", "#FFEBCD", "#FFE4C4", "#F5DEB3", "#FFE4B5", "#FFE5B4",
    "#FED8B1", "#FFDAB9", "#FBD5AB", "#FFDEAD", "#FBE7A1", "#F3E3C3", "#F0E2B6", "#F1E5AC", "#F3E5AB", "#ECE5B6",
    "#E8E4C9", "#EEE8AA", "#F0E68C", "#EDDA74", "#EDE275", "#FFE87C", "#FFF380", "#FAF884", "#FFFF33", "#FFFF00",
    "#FEF250", "#FFEF00", "#F5E216", "#FFDB58", "#FFDF00", "#F9DB24", "#EED202", "#FFD801", "#FFD700", "#FDD017",
    "#FFCE44", "#EAC117", "#F6BE00", "#F2BB66", "#FFBF00", "#FBB917", "#FDBD01", "#FBB117", "#FFAE42", "#FFA62F",
    "#FFA600", "#FFA500", "#EE9A4D", "#F4A460", "#E2A76F", "#C19A6B", "#E6BF83", "#DEB887", "#FFDAB9", "#FFDEAD",
    "#FFE4B5", "#FFE5B4", "#FFDAB9", "#FBD5AB", "#FFDEAD", "#FBE7A1", "#F3E3C3", "#F0E2B6", "#F1E5AC", "#F3E5AB",
    "#ECE5B6", "#E8E4C9", "#EEE8AA", "#F0E68C", "#EDDA74", "#EDE275", "#FFE87C", "#FFF380", "#FAF884", "#FFFF33",
    "#FFFF00", "#FEF250", "#FFEF00", "#F5E216", "#FFDB58", "#FFDF00", "#F9DB24", "#EED202", "#FFD801", "#FFD700",
    "#FDD017", "#FFCE44", "#EAC117", "#F6BE00", "#F2BB66", "#FFBF00", "#FBB917", "#FDBD01", "#FBB117", "#FFAE42",
    "#FFA62F", "#FFA600", "#FFA500", "#EE9A4D", "#F4A460", "#E2A76F", "#C19A6B", "#E6BF83", "#DEB887"
]

btn.addEventListener('click', () => {
    let randomnum = Math.floor(Math.random() * arr.length)
    document.body.style.backgroundColor = arr[randomnum];
    color.textContent = `Background Color = ${arr[randomnum]}`

})