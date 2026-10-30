var L_UNDEFINED_TEXT="이 항목에 대한 용어정의를 찾을 수 없습니다.";

function AppendPopup(oSource, sPopup)
{
	var sPopupText;
	if (oSource.tagName=="A" && oSource.getAttribute("State")!="On")
	{
		sPopupText= GetGlossaryTerms(sPopup);

		// Have we found a definition?
		if (sPopupText != L_UNDEFINED_TEXT)
		{
//{{add by HSJ FireFox
			var newSpan = document.createElement('SPAN');
			newSpan.id = 'Pop';
			newSpan.className = 'GlossaryDef';
			oSource.appendChild(newSpan);
			newSpan.innerHTML = sPopupText;
//}}
//			oSource.insertAdjacentHTML("BeforeEnd", "<SPAN ID='Pop' class='GlossaryDef'>&nbsp;" + sPopupText + "</SPAN>");  //IE4
			oSource.setAttribute("State", "On");
			window.event.returnValue=false;
		}
		else
		{
			alert(L_UNDEFINED_TEXT);
		}
	}
	else if (oSource.tagName=="A" && oSource.getAttribute("State")=="On" )
	{
//{{Add by HSJ FireFox
		var oATag = oSource.children[0];
		oSource.removeChild(oATag);
//	}}
//		oSource.all("Pop").outerHTML="";
		oSource.setAttribute("State", "Off");
		window.event.returnValue=false;
	}
}


function GetGlossaryTerms(sPopup)
{
	var sTemp;
	switch (sPopup)

	{
		case	'IDG_ANSICHAR':
			L_IDG_ANSICHAR_TEXT='(건반을 사용하여 최대 256자(0~255)를 현시할수 있는 8비트의 문자집합입니다. ASCII문자집합은 ANSI집합의 아래준위 집합입니다.)';
			sTemp = L_IDG_ANSICHAR_TEXT;
			break;
		case	'IDG_EXTENSIBLEML':
			L_IDG_EXTENSIBLEML_TEXT='(SGML(Standard Generalized Markup Language)을 간략화한 형태로서 보다 유연하게 정보를 구성하고 표현할수 있는 사용자지정태그를 만들수 있습니다.)';
			sTemp = L_IDG_EXTENSIBLEML_TEXT;
			break;
		case	'IDG_HTMLANG':
			L_IDG_HTMLANG_TEXT='(Hypertext Markup Language의 략어로서 웨브문서에 사용하는 표준의 서술언어입니다. HTML은 태그를 사용하여 웨브열람기에서 본문이나 그림 등의 페지요소를 현시하는 방법과 사용자의 조작에 응답하는 방법을 반영합니다.)';
			sTemp = L_IDG_HTMLANG_TEXT;
			break;
		case	'IDG_TRUETYPE':
			L_IDG_TRUETYPE_TEXT='(요구하는 모든 크기로 현시하고 인쇄할수 있는 축척가능한 륜곽벡토르서체의 한가지 형식입니다.)';
			sTemp = L_IDG_TRUETYPE_TEXT;
			break;
		case	'IDG_XMLANG':
			L_IDG_XMLANG_TEXT='(XML(Extensible Markup Language)은 응용프로그람에서 다양하고 구조적인 자료를 일정한 표준방식으로 제공하는 형식입니다. HTML태그는 문서가 현시되는 방법을 지정한다면 XML은 문서의 내용을 지정합니다.)';
			sTemp = L_IDG_XMLANG_TEXT;
			break;
		case	'IDG_HORRULER':
			L_IDG_HORRULER_TEXT='(인치 등의 측정단위를 현시하는 띠이며 문서창의 우에 가로로 현시됩니다.)';
			sTemp = L_IDG_HORRULER_TEXT;
			break;
		case	'IDG_STYLE':
			L_IDG_STYLE_TEXT='(격식을 사용하여 본문의 서체와 크기, 색 등의 특성을 설정합니다.)';
			sTemp = L_IDG_STYLE_TEXT;
			break;
		case	'IDG_FIXTOOLBAR':
			L_IDG_FIXTOOLBAR_TEXT='(프로그람창의 한쪽 측면에 배치된 도구띠입니다. 제목띠의 아래 또는 창의 왼쪽이나 오른쪽, 아래쪽으로 도구띠를 끌면 프로그람창의 그 측면위치에 고정됩니다.)';
			sTemp = L_IDG_FIXTOOLBAR_TEXT;
			break;
		case	'IDG_DIVICHAR':
			L_IDG_DIVICHAR_TEXT='(표를 본문으로 변환하는 경우 본문을 구분할 위치 또는 본문을 표로 구분하는 경우 새 행이나 렬이 시작될 위치를 가리키는 문자입니다.)';
			sTemp = L_IDG_DIVICHAR_TEXT;
			break;
		case	'IDG_AREA':
			L_IDG_AREA_TEXT='(문서에서 특정한 페지서식을 설정한 부분입니다. 머리부나 바닥부 등을 바꾸는 경우 새 구역을 만듭니다.)';
			sTemp = L_IDG_AREA_TEXT;
			break;
		case	'IDG_DIVIDEAREE':
			L_IDG_DIVIDEAREE_TEXT='(구역의 끝을 보여주기 위하여 삽입하는 표식입니다. 구역나누기에는 여백, 페지방향, 머리부/바닥부, 페지번호 등 구역서식요소들이 포함됩니다.)';
			sTemp = L_IDG_DIVIDEAREE_TEXT;
			break;
		case	'IDG_GROUP':
			L_IDG_GROUP_TEXT='(하나의 객체처럼 동작하는 객체의 모임으로서 한번에 이동, 크기변경, 회전 등의 변경을 적용할수 있습니다. 한개의 그룹은 여러개 그룹의 집합으로 구성될수 있습니다.)';
			sTemp = L_IDG_GROUP_TEXT;
			break;
		case	'IDG_PICTUREINDEX':
			L_IDG_PICTUREINDEX_TEXT='(문서에 있는 그림, 도표 등에 대한 객체제목을 페지번호와 함께 작성한 목록입니다.)';
			sTemp = L_IDG_PICTUREINDEX_TEXT;
			break;
		case	'IDG_DEFAULTSTYLE':
			L_IDG_DEFAULTSTYLE_TEXT='(문서처리프로그람에 이미 등록되여 표준적으로 제공하고있는 격식을 말합니다.)';
			sTemp = L_IDG_DEFAULTSTYLE_TEXT;
			break;
		case	'IDG_STANDARDSTYLE':
			L_IDG_STANDARDSTYLE_TEXT='(문서에서 다른 격식의 기준이 되는 원본격식입니다. 문서에서 기정격식의 서식요소를 변경하면 그 기정격식을 기준으로 하는 다른 모든 격식도 영향을 받습니다.)';
			sTemp = L_IDG_STANDARDSTYLE_TEXT;
			break;
		case	'IDG_OBJECT':
			L_IDG_OBJECT_TEXT='(표, 도표, 그림, 수식 등 여러가지 다른 형태의 정보입니다. 표처리프로그람과 같은 응용프로그람에서 만들어져 다른 응용프로그람에 련결되거나 포함된 객체를 OLE객체라고 합니다.)';
			sTemp = L_IDG_OBJECT_TEXT;
			break;
		case	'IDG_GRAYSCALE':
			L_IDG_GRAYSCALE_TEXT='(주로 한가지 색에서 다른 색으로 련속적으로 농도가 변화되여가는 색변화상태를 말합니다.)';
			sTemp = L_IDG_GRAYSCALE_TEXT;
			break;
		case	'IDG_RELATIONDB':
			L_IDG_RELATIONDB_TEXT='(표에 정보를 보관하는 자료기지의 한 종류입니다. 두 표에서 일치하는 값을 사용하여 한 표의 자료와 다른 표의 자료사이에 관계를 설정합니다. 일반적으로 관계형자료기지에서는 특정한 형식의 자료를 한번만 보관합니다.)';
			sTemp = L_IDG_RELATIONDB_TEXT;
			break;
		case	'IDG_CELLLINE':
			L_IDG_CELLLINE_TEXT='(표에서 세포경계를 보여주는 가는 선입니다. 문서를 인쇄하는 경우 눈금선은 인쇄되지 않습니다.)';
			sTemp = L_IDG_CELLLINE_TEXT;
			break;
		case	'IDG_PARAGRAPH':
			L_IDG_PARAGRAPH_TEXT='(글에서 내용상 통일성과 형식상 전일성을 가지고 하나의 큰 단위로 구획지어지는 복잡한 문장론적구조를 말합니다. 여러개의 문장으로 이루어질수도 있고 하나의 문장으로 이루어질수도 있는데 보통은 복합문보다 크고 문단보다는 작은것을 말합니다. Enter건을 눌렀을 때와 같이 끝에 단락기호가 붙은 본문입니다. 항목기호목록이나 항목번호목록에 있는 각 항목은 단락이며 제목과 부제목도 단락입니다.)';
			sTemp = L_IDG_PARAGRAPH_TEXT;
			break;
		case	'IDG_PARASYMBOL':
			L_IDG_PARASYMBOL_TEXT='(Enter건을 눌러 단락을 끝낼 때 자동으로 삽입되는 인쇄되지 않은 기호입니다.)';
			sTemp = L_IDG_PARASYMBOL_TEXT;
			break;
		case	'IDG_TOOLBAR':
			L_IDG_TOOLBAR_TEXT='(지령을 수행하는데 사용하는 단추들을 포함합니다. 도구띠를 현시하려면 보기(도구)차림표에서 사용자정의를 찰칵하고 도구띠표쪽을 찰칵합니다.)';
			sTemp = L_IDG_TOOLBAR_TEXT;
			break;
		case	'IDG_OBJECTFILE':
			L_IDG_OBJECTFILE_TEXT='(련결객체 또는 포함객체가 삽입된 파일입니다. 객체를 만드는데 사용하는 파일은 원본파일입니다. 대상파일의 정보를 변경하여도 원본파일의 정보는 변경되지 않습니다.)';
			sTemp = L_IDG_OBJECTFILE_TEXT;
			break;
		case	'IDG_LINK':
			L_IDG_LINK_TEXT='(어떤 프로그람에서 만든 정보의 복사본을 다른 프로그람의 문서에 복사하고 두 파일간의 련결을 유지하는것입니다. 원본파일의 정보가 변경되면 대상문서에도 변경내용이 반영됩니다.)';
			sTemp = L_IDG_LINK_TEXT;
			break;
		case	'IDG_OBJECTLINK':
			L_IDG_OBJECTLINK_TEXT='(두 파일사이의 련결을 유지하면서 원본파일에서 만들어져 대상파일에 삽입되는 객체입니다. 원본파일을 갱신하면 대상파일에 있는 련결된 객체도 갱신됩니다.)';
			sTemp = L_IDG_OBJECTLINK_TEXT;
			break;
		case	'IDG_FLOATOBJECT':
			L_IDG_FLOATOBJECT_TEXT='(도형객체에 삽입되여있는 도형이나 기타 객체입니다. 본문 또는 다른 객체의 앞뒤에 배치할수 있습니다.)';
			sTemp = L_IDG_FLOATOBJECT_TEXT;
			break;
		case	'IDG_FLOATTOOLBAR':
			L_IDG_FLOATTOOLBAR_TEXT='(프로그람창의 어느 측면에도 고정되여있지 않은 도구띠입니다. 류동도구띠의 모양은 변경할수 있습니다.)';
			sTemp = L_IDG_FLOATTOOLBAR_TEXT;
			break;
		case	'IDG_FIELD':
			L_IDG_FIELD_TEXT='(문서처리프로그람에서 날자나 시간, 페지번호 등의 자료가 문서에 자동적으로 삽입되도록 지정하는 코드집합입니다.)';
			sTemp = L_IDG_FIELD_TEXT;
			break;
		case	'IDG_FOOTER':
			L_IDG_FOOTER_TEXT='(페지웃쪽에 놓이는 머리부는 본문이나 그림으로 구성됩니다. 바닥부는 페지아래쪽에 놓입니다. 머리부와 바닥부에는 주로 페지번호, 장제목, 날자 등이 포함됩니다.)';
			sTemp = L_IDG_FOOTER_TEXT;
			break;
		case	'IDG_DOCLIB':
			L_IDG_DOCLIB_TEXT='(파일모임을 공유하거나 같이 사용하는 형판을 모아 놓은 서류철입니다. 서고의 각 파일은 해당 서고의 내용목록에 현시된 사용자정의정보와 련관됩니다.)';
			sTemp = L_IDG_DOCLIB_TEXT;
			break;
		case	'IDG_METAFILE':
			L_IDG_METAFILE_TEXT='(도형을 점이 아니라 선, 원, 다각형 등을 그린 벡토르자료로 보관한 파일입니다. 그림의 크기를 조정할 때 메타파일은 점으로 보관한 화상보다 더 정확하게 도형을 보존합니다.)';
			sTemp = L_IDG_METAFILE_TEXT;
			break;
		case	'IDG_FOOTNOTE':
			L_IDG_FOOTNOTE_TEXT='(페지의 바닥이나 측면에 추가정보가 있다는것을 보여주는 수자, 문자 또는 문자조합입니다.)';
			sTemp = L_IDG_FOOTNOTE_TEXT;
			break;
		case	'IDG_ORIENTATION':
			L_IDG_ORIENTATION_TEXT='(건반에 설정된 언어와 관계없이 오른쪽에서 왼쪽으로 쓰기하는 본문과 문서의 읽는 순서, 맞추기 또는 시각적인 모양을 지정합니다.)';
			sTemp = L_IDG_ORIENTATION_TEXT;
			break;
		case	'IDG_TEXTAREA':
			L_IDG_TEXTAREA_TEXT='(문서에서 다른 본문령역과는 구별되는 본문범위가 포함된 문서령역입니다. 또한 하나의 본문칸 또는 련결된 본문칸에 포함된 본문을 말하기도 합니다.)';
			sTemp = L_IDG_TEXTAREA_TEXT;
			break;
		case	'IDG_TEXTFIELD':
			L_IDG_TEXTFIELD_TEXT='(마당내용이 본문인 마당입니다.)';
			sTemp = L_IDG_TEXTFIELD_TEXT;
			break;
		case	'IDG_TEXTBOX':
			L_IDG_TEXTBOX_TEXT='(본문을 입력할수 있는 직사각형의 도형객체입니다. 입력된 본문에는 서식을 설정할수 있습니다.)';
			sTemp = L_IDG_TEXTBOX_TEXT;
			break;
		case	'IDG_BITDIAGRAM':
			L_IDG_BITDIAGRAM_TEXT='(점으로 구성된 문양으로 보관된 그림입니다. 일반적으로 화상가공프로그람에서 만든 그림이나 화상입력장치로 입력한 사진 등은 비트도로 보관됩니다.)';
			sTemp = L_IDG_BITDIAGRAM_TEXT;
			break;
		case	'IDG_VECTORPIC':
			L_IDG_VECTORPIC_TEXT='(기하학적공식을 사용하여 선, 사각형, 원호와 같은 도형객체를 표현하는것을 말합니다. 반면에 비트도그림은 화소들로 보관되며 주사화상이라고도 합니다.)';
			sTemp = L_IDG_VECTORPIC_TEXT;
			break;
		case	'IDG_FORMATFILE':
			L_IDG_FORMATFILE_TEXT='(서식 및 격식과 페지배치와 같은 속성들이 류사한 다른 문서에 대한 기준으로 만들어 사용하는 문서로서 확장자로 구별됩니다. 실례로 본문문서의 확장자가 《*.odt》이라면 형판의 확장자는 《*.ott》입니다.)';
			sTemp = L_IDG_FORMATFILE_TEXT;
			break;
		case	'IDG_RTFTEXT':
			L_IDG_RTFTEXT_TEXT='(응용프로그람들이 Windows, Mac OS 등 서로 다른 기반에서 실행되여도 서식이 지정된 본문문서를 서로 주고받으려는 경우 사용할수 있는 파일형식입니다.)';
			sTemp = L_IDG_RTFTEXT_TEXT;
			break;
		case	'IDG_FONT':
			L_IDG_FONT_TEXT='(모든 문자, 수자, 기호에 적용된 도형적모양을 말합니다. 《청봉》이나 《천리마》가 서체의 례입니다. 서체는 여러가지 크기와 다양한 격식으로 사용됩니다.)';
			sTemp = L_IDG_FONT_TEXT;
			break;
		case	'IDG_PROPERTY':
			L_IDG_PROPERTY_TEXT='(객체의 모양(례: 크기,색 또는 위치)이나 동작(례: 객체를 보이거나 숨기기)을 정의하는 조종체, 마당, 객체의 이름붙은 특성을 말합니다.)';
			sTemp = L_IDG_PROPERTY_TEXT;
			break;
		case	'IDG_TABLECELL':
			L_IDG_TABLECELL_TEXT='(표에서 행과 렬이 교차하여 만들어지는 칸이며 여기에 정보를 입력할수 있습니다.)';
			sTemp = L_IDG_TABLECELL_TEXT;
			break;
		case	'IDG_AUTOTEXT':
			L_IDG_AUTOTEXT_TEXT='(문서처리프로그람에서는 편지의 인사말과 맺음말 등 일상적으로 자주 사용하는 단어나 구를 자동본문으로 제공합니다. 자동본문입력이 유효하게 된 상태에서 자동본문의 앞의 몇글자가 입력한 글자와 일치하면 해당 자동본문항목이 현시되는데 그때 Enter건을 누르면 그 자동본문이 현재 입력위치에 입력됩니다.)';
			sTemp = L_IDG_AUTOTEXT_TEXT;
			break;
		case	'IDG_WORKFOLDER':
			L_IDG_WORKFOLDER_TEXT='(문서를 열거나 보관할 때 리용되는 서류철입니다. 열거나 보관할 때 다른 서류철을 선택하면 그 서류철이 작업서류철로 됩니다.)';
			sTemp = L_IDG_WORKFOLDER_TEXT;
			break;
		case	'IDG_WORKSTATION':
			L_IDG_WORKSTATION_TEXT='(주어진 작업에 대하여 선택한 설정내용이 들어있는 작업령역입니다. 작업창은 문서를 열 때 또는 차림표와 도구띠에서 특정한 지령을 찰칵할 때와 같이 특정한 동작을 할 때 현시됩니다.)';
			sTemp = L_IDG_WORKSTATION_TEXT;
			break;
		case	'IDG_WORDART':
			L_IDG_WORDART_TEXT='(제공되는 효과를 사용하여 만든 본문객체이며 이 객체에 추가적인 서식설정을 적용할수 있습니다.)';
			sTemp = L_IDG_WORDART_TEXT;
			break;
		case	'IDG_ABSREFERENCE':
			L_IDG_ABSREFERENCE_TEXT='(현재 세포의 위치에 관계없이 렬이나 행을 참조하는것을 말합니다. 절대참조값은 현재 세포의 위치에 관계없이 항상 같습니다.)';
			sTemp = L_IDG_ABSREFERENCE_TEXT;
			break;
		case	'IDG_VERTEXPOINT':
			L_IDG_VERTEXPOINT_TEXT='(도형의 점을 편집할 때 특정한 도형(례: 곡선)의 선 또는 곡선의 끝과 교차점에 현시되는 끌기가능한 4각형의 점입니다.)';
			sTemp = L_IDG_VERTEXPOINT_TEXT;
			break;
		case	'IDG_CTRLHANDLE':
			L_IDG_CTRLHANDLE_TEXT='(대부분의 도형에서 모양을 조절할 때 사용하는 4각형꼭지입니다. 례를 들어 모서리가 둥근 사각형을 더 둥글게 또는 덜 둥글게 조절할수 있습니다.)';
			sTemp = L_IDG_CTRLHANDLE_TEXT;
			break;
		case	'IDG_CONTROLER':
			L_IDG_CONTROLER_TEXT='(본문칸, 확인칸, 목록칸 등 사용자가 프로그람을 조종할수 있는 GUI대면부객체입니다. 조종체를 사용하여 자료나 선택내용을 현시하고 필요한 작업을 수행하며 사용자대면부를 더 편리하게 만들수 있습니다.)';
			sTemp = L_IDG_CONTROLER_TEXT;
			break;
		case	'IDG_TIP':
			L_IDG_TIP_TEXT='(도구띠의 단추나 특정한 요소우에 마우스지시자를 잠시 놓아두면 현시되는 문자렬 또는 설명문입니다.)';
			sTemp = L_IDG_TIP_TEXT;
			break;
		case	'IDG_NOTE':
			L_IDG_NOTE_TEXT='(작성자나 검토자가 문서에 추가하는 참고사항이나 주석입니다. 문서처리프로그람에서는 주해가 노란색배경의 네모칸으로 해당 항목의 주변에 배치됩니다.)';
			sTemp = L_IDG_NOTE_TEXT;
			break;
		case	'IDG_MIXEDTABLE':
			L_IDG_MIXEDTABLE_TEXT='(표의 세포안에 삽입된 표입니다.)';
			sTemp = L_IDG_MIXEDTABLE_TEXT;
			break;
		case	'IDG_SHORTCUTMENU':
			L_IDG_SHORTCUTMENU_TEXT='(지정된 지령에 관한 지령목록이 현시되는 차림표입니다. 상황차림표를 현시하려면 항목을 마우스의 오른쪽단추로 찰칵합니다.)';
			sTemp = L_IDG_SHORTCUTMENU_TEXT;
			break;
		case	'IDG_POINTERLINE':
			L_IDG_POINTERLINE_TEXT='(설명문으로부터 그림의 해당 부분까지 사용자의 시선을 따라 이어주는 선입니다.)';
			sTemp = L_IDG_POINTERLINE_TEXT;
			break;
		case	'IDG_TITLESTYLE':
			L_IDG_TITLESTYLE_TEXT='(제목에 적용된 격식입니다.)';
			sTemp = L_IDG_TITLESTYLE_TEXT;
			break;
		case	'IDG_TITLEBAR':
			L_IDG_TITLEBAR_TEXT='(프로그람창, 대화창, 류동도구띠의 웃쪽에 문서나 프로그람, 도구띠의 이름을 현시하는 수평띠입니다.)';
			sTemp = L_IDG_TITLEBAR_TEXT;
			break;
		case	'IDG_GENERALMENU':
			L_IDG_GENERALMENU_TEXT='(차림표띠에서 차림표이름을 찰칵할 때 현시되는 지령목록입니다.)';
			sTemp = L_IDG_GENERALMENU_TEXT;
			break;
		case	'IDG_MENUBAR':
			L_IDG_MENUBAR_TEXT='(차림표이름이 포함된 조작체계의 탁상화면에 현시되는 수평띠입니다.)';
			sTemp = L_IDG_MENUBAR_TEXT;
			break;
		case	'IDG_BOOKMARK':
			L_IDG_BOOKMARK_TEXT='(참조용으로 이름을 지정한 문서안에서의 본문의 위치 또는 선택령역입니다. 책갈피로 후에 참조하거나 련결할수 있는 문서안의 위치를 식별합니다.)';
			sTemp = L_IDG_BOOKMARK_TEXT;
			break;
		case	'IDG_SIZEHANDLE':
			L_IDG_SIZEHANDLE_TEXT='(선택한 객체의 모서리와 옆에 현시되는 작은 4각형입니다. 이 꼭지를 끌어서 객체의 크기를 변경할수 있습니다.)';
			sTemp = L_IDG_SIZEHANDLE_TEXT;
			break;
		case	'IDG_TABCTRL':
			L_IDG_TABCTRL_TEXT='(가로눈금자에서 본문의 들여쓰기범위 또는 본문렬을 시작할 위치를 가리킵니다.)';
			sTemp = L_IDG_TABCTRL_TEXT;
			break;
		case	'IDG_TRANCEPATTERN':
			L_IDG_TRANCEPATTERN_TEXT='(문서본문의 뒤에 삽입하는 그림을 말합니다.)';
			sTemp = L_IDG_TRANCEPATTERN_TEXT;
			break;
		case	'IDG_FILEPROPERTY':
			L_IDG_FILEPROPERTY_TEXT='(문서의 구체적인 제목, 주제와 같은 파일의 내용이나 실마리어 등 파일에 대한 세부정보입니다.)';
			sTemp = L_IDG_FILEPROPERTY_TEXT;
			break;
		case	'IDG_FILEFORMAT':
			L_IDG_FILEFORMAT_TEXT='(프로그람에서 파일을 열고 보관할수 있도록 해당 파일에 정보가 보관되는 방식입니다. 파일구조는 파일보관 및 현시방법을 정의합니다. 파일형식은 .jpg와 같이 파일이름의 뒤에 확장자를 사용하여 구분합니다.)';
			sTemp = L_IDG_FILEFORMAT_TEXT;
			break;
		case	'IDG_INCLUDE':
			L_IDG_INCLUDE_TEXT='(어떤 프로그람에서 만든 도표나 수식, 도형과 같은 객체정보를 다른 프로그람에 삽입하는것입니다. 객체를 포함하면 해당 정보가 문서의 일부로 됩니다. 객체에 대한 모든 변경내용이 문서에 반영됩니다.)';
			sTemp = L_IDG_INCLUDE_TEXT;
			break;
		case	'IDG_INCLUDEDOBJECT':
			L_IDG_INCLUDEDOBJECT_TEXT='(대상파일에 삽입된 객체입니다. 포함된 객체는 대상파일의 일부로 됩니다. 포함된 객체를 두번 찰칵하면 객체가 작성된 원본프로그람에서 열립니다.)';
			sTemp = L_IDG_INCLUDEDOBJECT_TEXT;
			break;
		case	'IDG_POINTER':
			L_IDG_POINTER_TEXT='(문자의 높이를 설정하는 측정단위입니다. 1pt는 1/72in입니다.)';
			sTemp = L_IDG_POINTER_TEXT;
			break;
		case	'IDG_TABLE':
			L_IDG_TABLE_TEXT='(특정한 주제에 대하여 행과 렬로 구분하여 기록된 자료집합입니다.)';
			sTemp = L_IDG_TABLE_TEXT;
			break;
		case	'IDG_STANDARDTOOLBAR':
			L_IDG_STANDARDTOOLBAR_TEXT='(《서광사무처리》 3.0 프로그람들에 포함된 도구띠입니다.)';
			sTemp = L_IDG_STANDARDTOOLBAR_TEXT;
			break;
		case	'IDG_PAGEBREAK':
			L_IDG_PAGEBREAK_TEXT='(작업용지를 인쇄할수 있도록 페지단위로 가르는 구분선입니다. 표처리프로그람에서는 표용지크기, 여백설정, 배률설정, 사용자가 삽입한 수동페지가르기위치 등에 따라 자동페지가르기가 삽입됩니다.)';
			sTemp = L_IDG_PAGEBREAK_TEXT;
			break;
		case	'IDG_HYPERLINK':
		L_IDG_HYPERLINK_TEXT='(파일, 문서안의 위치, 웨브페지로 련결할수 있는 본문이나 도형객체입니다. 하이퍼련결본문은 일반본문과 다른 색으로 지정되거나 밑줄이 현시됩니다.)';
		sTemp = L_IDG_HYPERLINK_TEXT;
		break;
		case	'IDG_CURRENTDOC':
		L_IDG_CURRENTDOC_TEXT='(현재 작업하고있는 문서입니다. 현재 문서의 제목띠는 강조현시됩니다.)';
		sTemp = L_IDG_CURRENTDOC_TEXT;
		break;
		case	'IDG_ROWHEIGHT':
		L_IDG_ROWHEIGHT_TEXT='(본문의 한 행 아래쪽에서 다음 행 아래쪽까지의 공간크기입니다. 가장 큰 서체나 가장 긴 그림이 해당 행에 들어갈수 있도록 행높이가 조정됩니다.)';
		sTemp = L_IDG_ROWHEIGHT_TEXT;
		break;
		case	'IDG_NOTROWSPACE':
		L_IDG_NOTROWSPACE_TEXT='(행의 끝에 오는 여러 단어가 잘리지 않게 사용하는 공백입니다. 대신 전체 항목이 다음 행의 맨앞으로 이동합니다.)';
		sTemp = L_IDG_NOTROWSPACE_TEXT;
		break;
		case	'IDG_PIXCEL':
		L_IDG_PIXCEL_TEXT='(수자화상의 최소요소로서 화상의 해상도에 따라 크기가 변하는 단색의 바른4각형입니다. 해상도가 높은 그림은 화소크기가 작고 세부그림을 정교하게 현시할수 있습니다.)';
		sTemp = L_IDG_PIXCEL_TEXT;
		break;
		case	'IDG_UNDERSUBSCRIPT':
		L_IDG_UNDERSUBSCRIPT_TEXT='(같은 행의 다른 문자보다 조금 낮게 현시되는 문자입니다. 아래첨자는 공학용 수식에서 많이 사용합니다.)';
		sTemp = L_IDG_UNDERSUBSCRIPT_TEXT;
		break;
		case	'IDG_PASSWORD':
		L_IDG_PASSWORD_TEXT='(콤퓨터체계와 중요한 파일에 대한 접근을 제한하기 위해 사용하는 보안방법입니다.)';
		sTemp = L_IDG_PASSWORD_TEXT;
		break;
		case	'IDG_FORM':
		L_IDG_FORM_TEXT='(마당의 자료를 입력하고 현시하며 편집하거나 다른 동작을 실행할수 있도록 조종체를 배치하는 자료기지프로그람객체입니다.)';
		sTemp = L_IDG_FORM_TEXT;
		break;
		case	'IDG_FORMFIELD':
		L_IDG_FORMFIELD_TEXT='(양식에서 이름 또는 주소 같은 특정한 형식의 자료가 기록되는 위치입니다.)';
		sTemp = L_IDG_FORMFIELD_TEXT;
		break;
		case	'IDG_PAGESPACE':
		L_IDG_PAGESPACE_TEXT='(페지에서 인쇄범위밖의 빈 구역입니다.)';
		sTemp = L_IDG_PAGESPACE_TEXT;
		break;
		case	'IDG_BROWSER':
		L_IDG_BROWSER_TEXT='(HTML파일을 해석하여 웨브페지로 서식을 지정하고 화면에 현시하는 쏘프트웨어입니다. 열람기는 하이퍼련결을 열어보고 파일을 전송하며 웨브페지에 포함된 음악이나 동화상파일을 재생할수 있습니다.)';
		sTemp = L_IDG_BROWSER_TEXT;
		break;
		case	'IDG_UPERSUBSCRIPT':
		L_IDG_UPERSUBSCRIPT_TEXT='(같은 행의 다른 문자보다 조금 높게 현시되는 문자입니다.)';
		sTemp = L_IDG_UPERSUBSCRIPT_TEXT;
		break;
		case	'IDG_UNICODE':
		L_IDG_UNICODE_TEXT='(Unicode Consortium에서 개발한 문자부호화표준입니다. 유니코드는 2Byte이상을 사용하여 각 문자를 현시하는것으로서 단일문자집합을 사용하여 세계의 거의 모든 언어에 대응할수 있습니다.)';
		sTemp = L_IDG_UNICODE_TEXT;
		break;
		case	'IDG_PRINTSTYLEVIEW':
		L_IDG_PRINTSTYLEVIEW_TEXT='(문서나 다른 객체를 인쇄될 때의 모양 그대로 현시합니다. 실례로 머리부, 바닥부, 본문칸 등의 항목이 실제 위치에 현시됩니다.)';
		sTemp = L_IDG_PRINTSTYLEVIEW_TEXT;
		break;
		case	'IDG_PRINTPREVIEW':
		L_IDG_PRINTPREVIEW_TEXT='(인쇄하는 경우의 모양 그대로 문서를 현시합니다.)';
		sTemp = L_IDG_PRINTPREVIEW_TEXT;
		break;
		case	'IDG_IME':
		L_IDG_IME_TEXT='(조선어나 중어, 일어 등을 입력할수 있게 하는 입력지원프로그람입니다. 대표적인 조선어입력기로는 《하나》가 있습니다.)';
		sTemp = L_IDG_IME_TEXT;
		break;
		case	'IDG_READONLY':
		L_IDG_READONLY_TEXT='(파일을 변경하거나 보관할수는 없고 읽거나 복사만 할수 있는 설정입니다.)';
		sTemp = L_IDG_READONLY_TEXT;
		break;
		case	'IDG_ORIGENFILE':
		L_IDG_ORIGENFILE_TEXT='(련결된 객체나 포함된 객체를 만들 때 사용한 정보가 들어있는 파일입니다. 원본파일이 갱신되면 대상파일의 련결된 객체도 갱신할수 있습니다.)';
		sTemp = L_IDG_ORIGENFILE_TEXT;
		break;
		case	'IDG_ORIGENPROGRAM':
		L_IDG_ORIGENPROGRAM_TEXT='(련결 또는 포함된 객체를 만들 때 사용하는 프로그람입니다. 객체를 편집하려면 원본프로그람이 콤퓨터에 설치되여있어야 합니다.)';
		sTemp = L_IDG_ORIGENPROGRAM_TEXT;
		break;
		case	'IDG_WEBVIEW':
		L_IDG_WEBVIEW_TEXT='(문서가 웨브열람기에 현시될 때의 모양 그대로 현시합니다.)';
		sTemp = L_IDG_WEBVIEW_TEXT;
		break;
		case	'IDG_WEBBROWSER':
		L_IDG_WEBBROWSER_TEXT='(HTML파일을 해석하여 웨브페지로 서식을 지정하고 화면에 현시하는 쏘프트웨어입니다. 열람기는 하이퍼련결을 열어보고 파일을 전송하며 웨브페지에 포함된 음악이나 동화상파일을 재생할수 있습니다.)';
		sTemp = L_IDG_WEBBROWSER_TEXT;
		break;
		case	'IDG_WWWURL':
		L_IDG_WWWURL_TEXT='(Uniform Resource Locator의 략자로서 HTTP, FTP 등의 통신규약과 인터네트에서 파일이나 문서, 웨브페지 등의 객체에 대한 이름과 위치를 지정하는 주소입니다. URL은 웨브에서 널리 사용되며 HTML문서에서 하이퍼련결의 대상위치를 지정하는데 사용됩니다(례: http://www.naenara.inf.kp).)';
		sTemp = L_IDG_WWWURL_TEXT;
		break;
		case	'IDG_STYLEFORMAT':
		L_IDG_STYLEFORMAT_TEXT='(격식 및 서식을 사용하여 본문의 서체와 크기, 정렬 및 간격, 선모양, 색 등 기타 객체의 특성을 조정합니다.)';
		sTemp = L_IDG_STYLEFORMAT_TEXT;
		break;
		case	'IDG_GRID':
		L_IDG_GRID_TEXT='(자료를 구분하기 쉽게 하기 위해 도표에 추가할수 있는 선입니다. 격자선은 축우에 있는 눈금에서부터 그림령역을 지나 그어집니다.)';
		sTemp = L_IDG_GRID_TEXT;
		break;
		case	'IDG_DRAWOBJECT':
		L_IDG_DRAWOBJECT_TEXT='(도형객체는 도형도구띠를 리용하여 그린 객체입니다. 도형객체에는 선, 직4각형, 원, 다각형, 곡선과 같은 기본도형객체들과 기호도형객체, 흐름도, 장식문자와 같은 도형객체들이 있습니다.)';
		sTemp = L_IDG_DRAWOBJECT_TEXT;
		break;
		case	'IDG_PICTURE':
		L_IDG_PICTURE_TEXT='(그림의 종류에는 화상과 벡토르그림이 있습니다. 그림은 비트도, 화상입력기로 입력한 사진, 삽화와 같은 화상이나 파일형식이 wmf인 메타파일과 같은 벡토르그림이 이에 해당됩니다.)';
		sTemp = L_IDG_PICTURE_TEXT;
		break;
		case	'IDG_PICTUREAREA':
		L_IDG_PICTUREAREA_TEXT='(2차원도표에서는 모든 자료계렬이 포함되고 축으로 둘러싸인 령역이며 3D 도표에서는 자료계렬, 항목이름, 눈금표식, 축의 이름 등이 포함되며 축으로 둘러싸인 령역입니다.)';
		sTemp = L_IDG_PICTUREAREA_TEXT;
		break;
		case	'IDG_HIERARCHICAL':
		L_IDG_HIERARCHICAL_TEXT='(요약보고서를 만들수 있도록 상세자료의 행 또는 렬이 그룹화된 표용지자료입니다. 계층은 전체 표용지자료 또는 그중의 선택된 일부를 요약할수 있습니다.)';
		sTemp = L_IDG_HIERARCHICAL_TEXT;
		break;
		case	'IDG_TOOLBAR':
		L_IDG_TOOLBAR_TEXT='(지령을 수행하는데 사용하는 단추들을 포함합니다. 도구띠를 현시하려면 보기(도구)차림표에서 사용자정의를 찰칵하고 도구띠표쪽을 찰칵합니다.)';
		sTemp = L_IDG_TOOLBAR_TEXT;
		break;
		case	'IDG_CHARTAREA':
		L_IDG_CHARTAREA_TEXT='(전체 도표 및 모든 도표요소를 말합니다.)';
		sTemp = L_IDG_CHARTAREA_TEXT;
		break;
		case	'IDG_LINKLINE':
		L_IDG_LINKLINE_TEXT='(현재 세포와 관련된 세포사이의 관계를 현시하는 화살표입니다. 자료를 제공하는 세포로부터 다른 세포까지 가리킬 때에는 련결선이 파란색이며 세포에 《오유:503》과 같은 오유값이 들어있을 때에는 빨간색입니다.)';
		sTemp = L_IDG_LINKLINE_TEXT;
		break;
		case	'IDG_LOGICALMULT':
		L_IDG_LOGICALMULT_TEXT='(량방향본문에 대한 작업을 진행하는 경우 삽입위치이동 및 본문선택방법을 지정하기 위해 사용됩니다. 량방향본문안에서의 이동방향은 사용된 언어의 방향에 따라 달라집니다.)';
		sTemp = L_IDG_LOGICALMULT_TEXT;
		break;
		case	'IDG_NOTAREA':
		L_IDG_NOTAREA_TEXT='(서로 떨어져 있는 두개이상의 세포 또는 범위로 이루어진 선택범위입니다. 도표에서 린접하지 않은 선택범위를 그릴 때에는 결합된 선택범위들이 직4각형을 이루는가를 확인해야 합니다.)';
		sTemp = L_IDG_NOTAREA_TEXT;
		break;
		case	'IDG_SELECTRANGE':
		L_IDG_SELECTRANGE_TEXT='(표용지의 두개이상의 세포입니다. 범위내의 세포는 린접될수도 있고 린접되지 않을수도 있습니다.)';
		sTemp = L_IDG_SELECTRANGE_TEXT;
		break;
		case	'IDG_COPYAREA':
		L_IDG_COPYAREA_TEXT='(자료를 다른 위치로 붙여넣으려고 하는 경우 복사하는 세포 또는 범위입니다.)';
		sTemp = L_IDG_COPYAREA_TEXT;
		break;
		case	'IDG_PASTEAREA':
		L_IDG_PASTEAREA_TEXT='(오림판을 사용하여 자르기하거나 복사한 자료를 붙여넣을 대상위치입니다.)';
		sTemp = L_IDG_PASTEAREA_TEXT;
		break;
		case	'IDG_BITDIAGRAM':
		L_IDG_BITDIAGRAM_TEXT='(점으로 구성된 문양으로 보관된 그림입니다. 일반적으로 화상가공프로그람에서 만든 그림이나 화상입력장치로 입력한 사진 등은 비트도로 보관됩니다.)';
		sTemp = L_IDG_BITDIAGRAM_TEXT;
		break;
		case	'IDG_ARRAY':
		L_IDG_ARRAY_TEXT='(여러가지 결과를 만들거나 행과 렬로 구성되는 인수그룹에 대하여 연산이 이루어지는 한개의 수식을 작성하기 위해 사용됩니다. 배렬범위는 공통수식을 공유하며 배렬상수는 한개의 인수로 사용되는 상수그룹입니다.)';
		sTemp = L_IDG_ARRAY_TEXT;
		break;
		case	'IDG_ARRAYFORMULA':
		L_IDG_ARRAYFORMULA_TEXT='(하나이상의 값 집합에 대해 여러가지 계산을 수행하고 한개 또는 여러개의 결과를 반환하는 수식입니다. 행렬식은 대괄호 { }안에 서술되고 [Ctrl+Shift+Enter]건을 눌러 입력합니다.)';
		sTemp = L_IDG_ARRAYFORMULA_TEXT;
		break;
		case	'IDG_RELATIVEREF':
		L_IDG_RELATIVEREF_TEXT='(현재 세포를 기준으로 렬이나 행의 위치를 참조하는 방법입니다. 따라서 상대참조값은 현재 세포의 위치가 변경될 때마다 달라집니다. 수식에서 수식과 참조되는 세포가 들어있는 세포의 상대위치를 기준으로 하는 세포의 주소로서 상대참조를 리용합니다. 수식을 복사하면 참조가 자동으로 조정됩니다.)';
		sTemp = L_IDG_RELATIVEREF_TEXT;
		break;
		case	'IDG_LITERAL':
		L_IDG_LITERAL_TEXT='(계산되지 않는 값이므로 변경되지 않습니다. 실례로 수자 210과 "분기생산액"이라는 문자렬은 상수입니다. 식이나 식의 결과값은 상수가 아닙니다.)';
		sTemp = L_IDG_LITERAL_TEXT;
		break;
		case	'IDG_DETAILDATA':
		L_IDG_DETAILDATA_TEXT='(상세자료는 요약자료의 계산에 리용된 자료들로서 표준적으로 요약자료의 왼쪽 혹은 웃쪽에 린접하고있습니다. 요약자료는 자동부분합이나 계층에서 부분합렬 혹은 행들입니다.)';
		sTemp = L_IDG_DETAILDATA_TEXT;
		break;
		case	'IDG_FORMULA':
		L_IDG_FORMULA_TEXT='(세포에서 새로운 값을 만들어내는 일련의 값, 세포참조, 이름, 함수, 연산자 등의 결합입니다. 수식은 항상 같기부호(=)로 시작합니다.)';
		sTemp = L_IDG_FORMULA_TEXT;
		break;
		case	'IDG_FORMULAINPUTROW':
		L_IDG_FORMULAINPUTROW_TEXT='(세포나 도형에서 값 또는 수식을 입력하거나 편집할 때 사용하는 표처리프로그람창 웃쪽에 있는 입력띠입니다. 현재 세포에 보관된 상수값이나 수식이 현시됩니다.)';
		sTemp = L_IDG_FORMULAINPUTROW_TEXT;
		break;
		case	'IDG_VISUAL':
		L_IDG_VISUAL_TEXT='(량방향본문에 대한 작업을 진행하는 경우 유표이동과 문자렬선택을 설명하는데 사용되는 용어입니다. 량방향 본문내에서의 이동은 화면에서 린접한 문자로 이동함으로써 진행됩니다.)';
		sTemp = L_IDG_VISUAL_TEXT;
		break;
		case	'IDG_CELLREFER':
		L_IDG_CELLREFER_TEXT='(표용지에서 세포가 차지하는 좌표집합입니다. 실례로 B렬과 3행의 교차부분에 있는 세포의 참조는 B3이 됩니다.)';
		sTemp = L_IDG_CELLREFER_TEXT;
		break;
		case	'IDG_AUTOSTYLE':
		L_IDG_AUTOSTYLE_TEXT='(서체크기, 맞추기 등 자료범위에 적용할수 있는 기정의 세포서식입니다. 표처리프로그람에서는 선택한 범위의 요약 및 세부수준을 파악하여 이에 따라 적절한 서식을 적용합니다.)';
		sTemp = L_IDG_AUTOSTYLE_TEXT;
		break;
		case	'IDG_DATASERIAL':
		L_IDG_DATASERIAL_TEXT='(도표에 그려진 관련자료요소입니다. 도표의 각 자료계렬에는 고유한 색이나 형식이 있습니다. 한개의 도표에 여러개의 자료계렬을 그릴수 있습니다.)';
		sTemp = L_IDG_DATASERIAL_TEXT;
		break;
		case	'IDG_DATAPOINTER':
		L_IDG_DATAPOINTER_TEXT='(도표에서 단일자료요소나 값을 가리키는 막대나 령역, 점, 쪼각, 기호 등을 말합니다. 도표의 관련자료점은 자료계렬을 구성합니다.)';
		sTemp = L_IDG_DATAPOINTER_TEXT;
		break;
		case	'IDG_DATASYMBOL':
		L_IDG_DATASYMBOL_TEXT='(자료표식에 대한 추가정보를 제공하는 표식자로서 단일자료요소나 값을 가리킵니다.)';
		sTemp = L_IDG_DATASYMBOL_TEXT;
		break;
		case	'IDG_WORKSHEET':
		L_IDG_WORKSHEET_TEXT='(자료를 보관하고 작업하기 위해 표처리프로그람에서 사용하는 기본문서입니다. 표용지는 렬과 행으로 구성되는 세포로 이루어지며 자료표문서안에 보관됩니다.)';
		sTemp = L_IDG_WORKSHEET_TEXT;
		break;
		case	'IDG_CONDITION':
		L_IDG_CONDITION_TEXT='(질문 또는 려과결과에 포함되는 기록편이나 행을 제한하기 위하여 지정하는 조건입니다.)';
		sTemp = L_IDG_CONDITION_TEXT;
		break;
		case	'IDG_CONDITIONSTYLE':
		L_IDG_CONDITIONSTYLE_TEXT='(지정된 조건에 맞을 때 표처리프로그람에서 자동적으로 세포에 적용하는 세포배경색이나 글자색 등의 서식입니다.)';
		sTemp = L_IDG_CONDITIONSTYLE_TEXT;
		break;
		case	'IDG_TITLEBAR':
		L_IDG_TITLEBAR_TEXT='(프로그람창, 대화창, 류동도구띠의 웃쪽에 문서나 프로그람, 도구띠의 이름을 현시하는 수평띠입니다.)';
		sTemp = L_IDG_TITLEBAR_TEXT;
		break;
		case	'IDG_GENERALMENU':
		L_IDG_GENERALMENU_TEXT='(차림표띠에서 차림표이름을 찰칵할 때 현시되는 지령목록입니다.)';
		sTemp = L_IDG_GENERALMENU_TEXT;
		break;
		case	'IDG_MENUBAR':
		L_IDG_MENUBAR_TEXT='(차림표이름이 포함된 제목띠 아래의 수평띠입니다.)';
		sTemp = L_IDG_MENUBAR_TEXT;
		break;
		case	'IDG_AXIS':
		L_IDG_AXIS_TEXT='(도표구역의 선 경계이며 측정을 위한 참조틀로 사용됩니다. 일반적으로 y축은 자료를 포함하는 세로축이며 x축은 항목을 포함하는 가로축입니다.)';
		sTemp = L_IDG_AXIS_TEXT;
		break;
		case	'IDG_FILLHANDLE':
		L_IDG_FILLHANDLE_TEXT='(선택범위의 오른쪽 아래모서리에 있는 검은색의 작은 4각형입니다. 채우기꼭지우에 마우스를 가져가면 마우스유표가 검은색의 곱하기모양으로 바뀝니다. 주변에 있는 세포로 내용을 복사하거나 선택한 정보를 반복하여 입력하려면 채우기꼭지를 끕니다.)';
		sTemp = L_IDG_FILLHANDLE_TEXT;
		break;
		case	'IDG_SIZEHANDLE':
		L_IDG_SIZEHANDLE_TEXT='(선택한 객체의 모서리와 옆에 현시되는 작은 4각형입니다. 이 꼭지를 끌어서 객체의 크기를 변경할수 있습니다.)';
		sTemp = L_IDG_SIZEHANDLE_TEXT;
		break;
		case	'IDG_TRANCEPATTERN':
		L_IDG_TRANCEPATTERN_TEXT='(문서본문의 뒤에 현시하는 그림을 말합니다.)';
		sTemp = L_IDG_TRANCEPATTERN_TEXT;
		break;
		case	'IDG_PAGEBREAKPREVIEW':
		L_IDG_PAGEBREAKPREVIEW_TEXT='(인쇄할 령역과 페지가르기위치를 보여주는 표용지보기입니다. 인쇄할 령역은 흰색으로 현시되고 자동페지자르기는 어두운 청색으로 현시되며 수동페지가르기는 밝은 청색으로 현시됩니다.)';
		sTemp = L_IDG_PAGEBREAKPREVIEW_TEXT;
		break;
		case	'IDG_FUNCTION':
		L_IDG_FUNCTION_TEXT='(하나이상의 값을 사용하여 작업을 수행하고 하나이상의 값을 반환하도록 미리 작성된 수식입니다. 함수를 사용하면 표용지의 수식 특히 길거나 복잡한 계산을 수행하는 수식을 간단하고 짧게 만들수 있습니다.)';
		sTemp = L_IDG_FUNCTION_TEXT;
		break;
		case	'IDG_ADDEDCELL':
		L_IDG_ADDEDCELL_TEXT='(두개이상의 선택된 세포를 결합하여 만들어진 한개의 세포입니다. 합쳐진 세포에 대한 세포참조는 원래 선택된 범위의 왼쪽우의 세포에 해당합니다.)';
		sTemp = L_IDG_ADDEDCELL_TEXT;
		break;
		case	'IDG_CURRENTCELL':
		L_IDG_CURRENTCELL_TEXT='(자료가 입력되도록 선택된 세포입니다. 한번에 한개의 세포만 현재 세포가 될수 있습니다. 현재 세포는 검은색의 굵은 테두리로 현시됩니다.)';
		sTemp = L_IDG_CURRENTCELL_TEXT;
		break;
		case	'IDG_REVIEW':
		L_IDG_REVIEW_TEXT='(도표의 자료계렬이나 항목에 지정된 문양이나 색을 식별하는 네모칸으로서 도표의 자료를 구분하여보도록 해줍니다.)';
		sTemp = L_IDG_REVIEW_TEXT;
		break;
		case	'IDG_OPERATOR':
		L_IDG_OPERATOR_TEXT='(연산자는 수식요소에 대하여 수행할 계산의 종류를 지정합니다. 표처리프로그람에는 산수, 비교, 본문, 참조 등 네가지의 계산연산자가 있습니다.)';
		sTemp = L_IDG_OPERATOR_TEXT;
		break;
		case	'IDG_INDENTLEFT':
		L_IDG_INDENTLEFT_TEXT='(본문의 현시방향을 가리킵니다. 아랍어와 헤브라이어가 오른쪽에서 왼쪽쓰기언어입니다.)';
		sTemp = L_IDG_INDENTLEFT_TEXT;
		break;
		case	'IDG_NAME':
		L_IDG_NAME_TEXT='(세포, 세포범위, 수식, 상수값 등을 정의하는 단어 또는 문자렬입니다. "판매!C20:C30"과 같이 범위를 리해하기 어려운 경우에는 "제품"과 같이 알아보기 쉬운 이름을 사용합니다.)';
		sTemp = L_IDG_NAME_TEXT;
		break;
		case	'IDG_PARAMETER':
		L_IDG_PARAMETER_TEXT='(함수에서 연산이나 계산을 수행하기 위해 사용하는 값입니다. 함수에서 사용하는 인수의 형식은 그 함수에 대해 고유합니다. 함수안에서 많이 사용하는 인수로는 수자, 세포참조, 이름 등이 있습니다.)';
		sTemp = L_IDG_PARAMETER_TEXT;
		break;
		case	'IDG_PRINTAREA':
		L_IDG_PRINTAREA_TEXT='(전체 표용지를 인쇄하지 않으려는 경우 인쇄하도록 지정하는 한개이상의 세포범위입니다. 표용지에 인쇄범위가 있으면 그 인쇄범위만 인쇄됩니다.)';
		sTemp = L_IDG_PRINTAREA_TEXT;
		break;
		case	'IDG_INTRANET':
		L_IDG_INTRANET_TEXT='(HTTP나 FTP통신규약과 같은 인터네트기술을 사용하는 기관안의 네트워크입니다. 하이퍼련결을 사용하여 인트라네트에서 객체, 문서, 웨브페지와 그밖의 다른 대상을 탐색할수 있습니다. 인트라네트의 정보는 기관안에만 배포됩니다.)';
		sTemp = L_IDG_INTRANET_TEXT;
		break;
		case	'IDG_ORIENTDOC':
		L_IDG_ORIENTDOC_TEXT='(이동, 복사, 반입, 반출 등의 작업을 하는 경우 정보의 원본을 말합니다. 원본은 보기, 표, 문서, 다른 프로그람 등이 될수 있습니다. OLE에서는 대상 또는 포함기, 문서 또는 프로그람안의 련결된 객체에 정보를 제공하는 문서나 프로그람입니다.)';
		sTemp = L_IDG_ORIENTDOC_TEXT;
		break;
		case	'IDG_OLEOBJECT':
		L_IDG_OLEOBJECT_TEXT='(프로그람들사이에서 정보를 공유하는데 사용할수 있는 프로그람통합기술입니다. 모든 《서광사무처리》 3.0 프로그람들에서 OLE를 지원하므로 련결된 객체와 포함된 객체를 통하여 정보를 공유할수 있습니다.)';
		sTemp = L_IDG_OLEOBJECT_TEXT;
		break;
		case	'IDG_OBJECTFRAME':
		L_IDG_OBJECTFRAME_TEXT='(빗살무늬의 테두리가 있는 네모칸으로서 대부분의 투영편지면배치에 포함되여있습니다. 객체틀안에는 제목과 본문, 도표, 표, 그림과 같은 객체를 포함합니다.)';
		sTemp = L_IDG_OBJECTFRAME_TEXT;
		break;
		case	'IDG_NUMERRULER':
		L_IDG_NUMERRULER_TEXT='(cm단위로 된 가로, 세로 눈금자로서 현시하거나 숨길수 있습니다. 원점(또는 0 표식)은 투영편에서 본문, 본문칸 및 도형중에서 어느것이 선택되였는가에 따라 변합니다.)';
		sTemp = L_IDG_NUMERRULER_TEXT;
		break;
		case	'IDG_ANIMATION':
		L_IDG_ANIMATION_TEXT='(본문이나 객체에 특수한 시각적효과나 소리효과를 추가합니다. 례를 들어 본문을 회전시키면서 현시되게, 그림이 현시될 때 박수소리가 나게 할수 있습니다.)';
		sTemp = L_IDG_ANIMATION_TEXT;
		break;
		case	'IDG_PROJECT':
		L_IDG_PROJECT_TEXT='(하이퍼련결을 통해 이동하는 요소에 대한 일반적인 명칭입니다.)';
		sTemp = L_IDG_PROJECT_TEXT;
		break;
		case	'IDG_LINKEDPIC':
		L_IDG_LINKEDPIC_TEXT='(대상파일의 외부에 보관되여있는 그림파일에 련결되는 그림입니다. 련결된 그림이 화상편집프로그람에서 변경되면 대상파일에서 련결된 그림을 갱신할수 있습니다.)';
		sTemp = L_IDG_LINKEDPIC_TEXT;
		break;
		case	'IDG_PRONOUNCESYMBOL':
		L_IDG_PRONOUNCESYMBOL_TEXT='(오른쪽에서 왼쪽으로 쓰는 언어에서 모음웃쪽이나 아래쪽에 현시되여 모음발음방법을 지정하는 기호를 말합니다.)';
		sTemp = L_IDG_PRONOUNCESYMBOL_TEXT;
		break;
		case	'IDG_SERVER':
		L_IDG_SERVER_TEXT='(LAN에서 네트워크와 자원(례: 인쇄기)전체 또는 일부에 대한 접근을 조종하는 콤퓨터입니다. World Wide Web에서는 HTTP요청에 응답하는 웨브봉사기쏘프트웨어를 실행하는 콤퓨터입니다.)';
		sTemp = L_IDG_SERVER_TEXT;
		break;
		case	'IDG_BACKGROUND':
		L_IDG_BACKGROUND_TEXT='(연시물의 모든 투영편이나 페지의 서식을 정의하는 투영편보기 또는 페지입니다. 연시물마다 투영편, 제목부분, 설명부분, 배포물 등 각 주요 구성요소를 위한 배경이 하나씩 있습니다.)';
		sTemp = L_IDG_BACKGROUND_TEXT;
		break;
		case	'IDG_RELATIVELINK':
		L_IDG_RELATIVELINK_TEXT='(하이퍼련결에서 상대련결을 기반으로 하는 경로를 사용하면 하이퍼련결이 끊어지지 않은 상태로 해당 하이퍼련결과 하이퍼련결대상이 포함된 파일을 옮길수 있습니다. 하이퍼련결과 그 대상이 함께 들어있는 파일을 이동합니다.)';
		sTemp = L_IDG_RELATIVELINK_TEXT;
		break;
		case	'IDG_STYLEDOC':
		L_IDG_STYLEDOC_TEXT='(선의 두께 및 색, 도형객체내부의 색 및 문양, 서체와 같은 도형객체의 시각적모양을 가리킵니다. 서식을 적용하거나 개별적인 속성을 변경하여 도형객체의 서식을 변경할수 있습니다.)';
		sTemp = L_IDG_STYLEDOC_TEXT;
		break;
		case	'IDG_COLORTABLE':
		L_IDG_COLORTABLE_TEXT='(투영편, 주해 또는 배포물에 적용할수 있는 기본색들을 묶어놓은 표입니다. 색구성표는 배경색, 선과 본문의 색 및 투영편의 각 요소를 구분하거나 보기 좋게 표현할수 있도록 하기 위한 여러 분류의 색으로 구성됩니다.)';
		sTemp = L_IDG_COLORTABLE_TEXT;
		break;
		case	'IDG_PLACELINE':
		L_IDG_PLACELINE_TEXT='(인쇄되지 않는 가로 및 세로 직선이며 객체를 시각적으로 정렬하는데 사용됩니다.)';
		sTemp = L_IDG_PLACELINE_TEXT;
		break;
		case	'IDG_LAYOUT':
		L_IDG_LAYOUT_TEXT='(페지에서 본문, 그림 및 기타 객체의 전체적인 배렬상태입니다.)';
		sTemp = L_IDG_LAYOUT_TEXT;
		break;
		case	'IDG_MINIMAGE':
		L_IDG_MINIMAGE_TEXT='(축소하여 현시하는 그림입니다.)';
		sTemp = L_IDG_MINIMAGE_TEXT;
		break;
		case	'IDG_SLIDEBACKGROUND':
		L_IDG_SLIDEBACKGROUND_TEXT='(적용된 형판의 정보를 보관하는 배경으로 되는 투영편으로서 서체격식, 객체틀의 크기와 위치,  색구성표 등이 포함됩니다.)';
		sTemp = L_IDG_SLIDEBACKGROUND_TEXT;
		break;
		case	'IDG_BODER':
		L_IDG_BODER_TEXT='(객체의 경계에 현시되는 선입니다. 례를 들어 직4각형은 4개의 선으로 테두리가 구성됩니다.)';
		sTemp = L_IDG_BODER_TEXT;
		break;
		case	'IDG_IMAGE':
		L_IDG_IMAGE_TEXT='(점으로 구성된 문양으로 보관된 그림입니다. 일반적으로 화상가공프로그람에서 만든 그림이나 화상입력장치로 입력한 사진 등은 비트도로 보관됩니다.)';
		sTemp = L_IDG_IMAGE_TEXT;
		break;
		case	'IDG_MOVEPATH':
		L_IDG_MOVEPATH_TEXT='(지정된 객체 또는 본문이 투영편에 대한 동작순서대로 움직이는 경로입니다.)';
		sTemp = L_IDG_MOVEPATH_TEXT;
		break;
		case	'IDG_SGDATABASE':
		L_IDG_SGDATABASE_TEXT='(주문정보 또는 수집, 기록과 같이 특정의 주제나 목적과 관련된 정보를 모아 관리할수 있는 기능을 제공하는 관계형자료기지 프로그람입니다.)';
		sTemp = L_IDG_SGDATABASE_TEXT;
		break;
		case	'IDG_DATABASEFILE':
		L_IDG_DATABASEFILE_TEXT='(자료기지프로그람의 자료기지파일을 말합니다. 자료기지프로그람의 자료기지는 자료기지객체와 자료를 .odb파일에 보관합니다.)';
		sTemp = L_IDG_DATABASEFILE_TEXT;
		break;
		case	'IDG_FTPPROTOCAL':
		L_IDG_FTPPROTOCAL_TEXT='(사용자가 네트워크의 원격위치에 파일을 전송하는것을 가능하게 하는 통신규약입니다. 이 통신규약을 통해 사용자는 FTP 지령(례: 파일 및 서류철목록 현시)을 사용하여 원격위치의 파일에 대한 작업을 할수 있습니다.)';
		sTemp = L_IDG_FTPPROTOCAL_TEXT;
		break;
		case	'IDG_GIFIMAGE':
		L_IDG_GIFIMAGE_TEXT='(화상형식으로서 확장자는 .gif입니다. 256색까지 지원하며 압축하는 경우 화상자료가 손실되지 않는 가역압축을 사용합니다.)';
		sTemp = L_IDG_GIFIMAGE_TEXT;
		break;
		case	'IDG_JPEGIMAGE':
		L_IDG_JPEGIMAGE_TEXT='(사진화상압축과 보관을 위해 개발된 화상파일형식으로서 확장자가 .jpg(또는 .jpeg)입니다. 화상입력장치로 입력한 사진처럼 많은 색을 사용한 화상을 보관하는데 가장 적합합니다.)';
		sTemp = L_IDG_JPEGIMAGE_TEXT;
		break;
		case	'IDG_NULLVALUE':
		L_IDG_NULLVALUE_TEXT='(마당에 입력하거나 식과 질문에 사용하여 손실되거나 알수 없는 자료를 현시할수 있는 값입니다. 기본열쇠마당과 같은 일부 마당에는 Null을 포함할수 없습니다.)';
		sTemp = L_IDG_NULLVALUE_TEXT;
		break;
		case	'IDG_SQL':
		L_IDG_SQL_TEXT='(관계형자료기지에서 자료호출, 질문, 갱신, 관리 등을 위해 널리 사용하는 자료기지질문언어로서 구조적조회언어라고도 합니다.)';
		sTemp = L_IDG_SQL_TEXT;
		break;
		case	'IDG_SQLGRAMER':
		L_IDG_SQLGRAMER_TEXT='(SELECT, UPDATE 또는 DELETE 등의 SQL지령을 정의하는 식이며 WHERE 및 ORDER BY 등의 절을 포함합니다. 일반적으로 SQL문은 질문과 집계함수에 사용됩니다.)';
		sTemp = L_IDG_SQLGRAMER_TEXT;
		break;
		case	'IDG_SQLVIEWER':
		L_IDG_SQLVIEWER_TEXT='(현재의 질문에 대한 SQL문을 현시하거나 SQL질문을 만들 때 사용하는 창입니다. 설계보기에서 질문을 만들면 SQL보기에서 적절한 SQL문이 작성됩니다.)';
		sTemp = L_IDG_SQLVIEWER_TEXT;
		break;
		case	'IDG_SQLQUERY':
		L_IDG_SQLQUERY_TEXT='(SQL문으로 이루어진 질문입니다.)';
		sTemp = L_IDG_SQLQUERY_TEXT;
		break;
		case	'IDG_RELATION':
		L_IDG_RELATION_TEXT='(양식이나 보고서에서 표, 질문 또는 SQL문의 자료를 현시하거나 수정하는데 사용하는 조종체입니다. 조종체의 자료마당속성에는 조종체가 결부된 마당이름이 보관됩니다.)';
		sTemp = L_IDG_RELATION_TEXT;
		break;
		case	'IDG_JOIN':
		L_IDG_JOIN_TEXT='(어떤 표나 질문의 마당과 자료형식이 일치하는 다른 표나 질문의 마당사이의 련결입니다. 결합은 자료의 련결방식을 프로그람에 알려줍니다. 일치하지 않는 기록편들은 결합형식에 따라 포함되거나 제거될수 있습니다.)';
		sTemp = L_IDG_JOIN_TEXT;
		break;
		case	'IDG_NOMALINDEX':
		L_IDG_NOMALINDEX_TEXT='(마당의 색인속성을 단일로 설정하여 정의된 색인입니다. 마당을 기본열쇠로 설정하면 그 마당은 자동으로 고유색인됩니다.)';
		sTemp = L_IDG_NOMALINDEX_TEXT;
		break;
		case	'IDG_GROUPBOX':
		L_IDG_GROUPBOX_TEXT='(양식이나 보고서에서 확인칸, 단일선택단추를 포함할수 있는 틀입니다. 그룹칸을 사용하여 사용자가 단일항목을 선택할수 있는 대용방법을 보여줍니다.)';
		sTemp = L_IDG_GROUPBOX_TEXT;
		break;
		case	'IDG_RECORD':
		L_IDG_RECORD_TEXT='(특정한 사람, 장소, 사건, 사물 등에 대한 정보의 집합입니다. 론리적으로 기록편은 표의 행에 해당합니다.)';
		sTemp = L_IDG_RECORD_TEXT;
		break;
		case	'IDG_RECORDNUMBER':
		L_IDG_RECORDNUMBER_TEXT='(자료표 보기나 양식보기의 왼쪽 아래 모서리에서 현재 기록편번호를 현시하는 작은 칸입니다. 특정 기록편으로 이동하려면 이 칸에 기록편번호를 입력하고 Enter건을 누릅니다.)';
		sTemp = L_IDG_RECORDNUMBER_TEXT;
		break;
		case	'IDG_RECORDSEL':
		L_IDG_RECORDSEL_TEXT='(기록편 왼쪽의 작은 네모칸이나 띠로서 자료표보기에서 기록편전체를 선택할 때 찰칵합니다.)';
		sTemp = L_IDG_RECORDSEL_TEXT;
		break;
		case	'IDG_ORIGENRECORD':
		L_IDG_ORIGENRECORD_TEXT='(양식이나 보고서에 대하여 원본으로 사용하는 자료입니다. 자료기지프로그람의 자료기지에서는 표나 질문, SQL문 등이 기록편원본이 됩니다.)';
		sTemp = L_IDG_ORIGENRECORD_TEXT;
		break;
		case	'IDG_STANDARDTABLE':
		L_IDG_STANDARDTABLE_TEXT='(일대다관계에서 두개의 관련표 중 《일》 쪽의 표입니다. 기본표에는 기본열쇠가 하나 있어야 하며 각 기록편은 고유해야 합니다.)';
		sTemp = L_IDG_STANDARDTABLE_TEXT;
		break;
		case	'IDG_PRIMARYKEY':
		L_IDG_PRIMARYKEY_TEXT='(표의 매 기록편을 고유하게 식별하는 값을 가지는 마당(렬)입니다. 기본열쇠는 Null값이 될수 없으며 항상 고유한 색인을 가져야 합니다. 표를 다른 표의 외부열쇠와 련결하는 경우 기본열쇠를 사용합니다.)';
		sTemp = L_IDG_PRIMARYKEY_TEXT;
		break;
		case	'IDG_CALCFIELD':
		L_IDG_CALCFIELD_TEXT='(질문에서 정의된 마당으로서 보관된 자료를 현시하는것이 아니라 식의 결과를 현시합니다. 이 값은 식에 있는 값이 바뀔때마다 다시 계산됩니다.)';
		sTemp = L_IDG_CALCFIELD_TEXT;
		break;
		case	'IDG_CALCCONTROL':
		L_IDG_CALCCONTROL_TEXT='(양식, 보고서에서 식의 결과를 현시하는데 사용하는 조종체입니다. 식과 련관된 값이 하나라도 변경될 때마다 결과가 다시 계산됩니다.)';
		sTemp = L_IDG_CALCCONTROL_TEXT;
		break;
		case	'IDG_RELATIONSHIP':
		L_IDG_RELATIONSHIP_TEXT='(두 표의 공통마당(렬)사이에 설정된 련결이며 일대일, 일대다, 다대다관계가 있습니다.)';
		sTemp = L_IDG_RELATIONSHIP_TEXT;
		break;
		case	'IDG_RELATIONWINDOW':
		L_IDG_RELATIONWINDOW_TEXT='(표와 질문사이의 관계를 보고 만들고 수정하는 창입니다.)';
		sTemp = L_IDG_RELATIONWINDOW_TEXT;
		break;
		case	'IDG_INERJOIN':
		L_IDG_INERJOIN_TEXT='(결합된 마당의 값이 지정된 조건에 맞는 경우에만 두 표의 기록편이 질문결과로 결합되는것을 말합니다. 질문에서는 결합된 마당의 값이 일치하는 경우에만 기록편을 선택하는 내부결합이 기본결합입니다.)';
		sTemp = L_IDG_INERJOIN_TEXT;
		break;
		case	'IDG_OTHERTOOTHER':
		L_IDG_OTHERTOOTHER_TEXT='(어떤 표의 기록편 하나가 다른 표의 여러 기록편과 련결된 두 표사이의 련결입니다. 이 련결을 설정하려면 제3의 표를 만들고 다른 두 표의 기본열쇠마당을 이 표에 추가합니다.)';
		sTemp = L_IDG_OTHERTOOTHER_TEXT;
		break;
		case	'IDG_UPERCASE':
		L_IDG_UPERCASE_TEXT='(대문자와 소문자를 구분하는 기능입니다. 대/소문자를 구분하는 탐색에서는 대문자와 소문자가 정확하게 일치하는 본문만 찾습니다.)';
		sTemp = L_IDG_UPERCASE_TEXT;
		break;
		case	'IDG_FILTDATA':
		L_IDG_FILTDATA_TEXT='(목록에서 지정한 조건에 맞는 행만 현시하는것을 의미합니다. 자동려과를 사용하여 한개이상의 특정값이나 계산된 값, 조건 등에 맞는 행을 현시할수 있습니다.)';
		sTemp = L_IDG_FILTDATA_TEXT;
		break;
		case	'IDG_FILTER':
		L_IDG_FILTER_TEXT='(자료의 부분집합을 현시하거나 자료를 정렬하기 위해 자료에 적용하는 조건집합입니다. 자료기지에서는 표준려과기나 자동려과기와 같은 려과기술을 사용하여 자료를 려과할수 있습니다.)';
		sTemp = L_IDG_FILTER_TEXT;
		break;
		case	'IDG_ODERNUMBER':
		L_IDG_ODERNUMBER_TEXT='(표에 추가되는 각 기록편의 고유번호를 자동으로 기록하는 마당류형입니다.)';
		sTemp = L_IDG_ODERNUMBER_TEXT;
		break;
		case	'IDG_COLUMNSELECTOR':
		L_IDG_COLUMNSELECTOR_TEXT='(렬의 웃쪽에 있는 수평의 네모칸입니다. 렬선택기를 찰칵하면 질문설계격자의 렬을 모두 선택할수 있습니다.)';
		sTemp = L_IDG_COLUMNSELECTOR_TEXT;
		break;
		case	'IDG_FIELDTYPE':
		L_IDG_FIELDTYPE_TEXT='(마당에 어떤 류형의 자료를 넣을수 있는가를 결정하는 특징입니다. 마당류형으로서는 본문[VARCHAR], 수 [NUMERIC], 작은 옹근수 [TINYINT], 옹근수 [INTEGER], 날자 [DATE] 등이 있습니다.)';
		sTemp = L_IDG_FIELDTYPE_TEXT;
		break;
		case	'IDG_FIELDLIST':
		L_IDG_FIELDLIST_TEXT='(원본으로 사용하는 기록편원본이나 자료기지객체의 모든 마당을 현시하는 창입니다.)';
		sTemp = L_IDG_FIELDLIST_TEXT;
		break;
		case	'IDG_FIELDSELECT':
		L_IDG_FIELDSELECT_TEXT='(찰칵하여 자료표의 전체 렬을 선택할수 있는 작은 네모칸 또는 띠입니다.)';
		sTemp = L_IDG_FIELDSELECT_TEXT;
		break;
		case	'IDG_HEADER':
		L_IDG_HEADER_TEXT='(보고서의 시작부분에 제목, 날자, 개요 등의 정보를 보여주는데 사용하는 보고서의 구역입니다.)';
		sTemp = L_IDG_HEADER_TEXT;
		break;
		case	'IDG_LISTBOX':
		L_IDG_LISTBOX_TEXT='(선택할수 있는 내용들의 목록을 제공하는 조종체입니다.)';
		sTemp = L_IDG_LISTBOX_TEXT;
		break;
		case	'IDG_FOOTER':
		L_IDG_FOOTER_TEXT='(일반적으로 페지번호, 날자나 합계처럼 페지의 아래쪽에 현시하는 정보를 배치하는데 사용하는 보고서의 구역입니다.)';
		sTemp = L_IDG_FOOTER_TEXT;
		break;
		case	'IDG_REPORT':
		L_IDG_REPORT_TEXT='(설정내용에 따라 서식화되고 구성된 정보를 인쇄하는 자료기지프로그람객체입니다.)';
		sTemp = L_IDG_REPORT_TEXT;
		break;
		case	'IDG_COMBOBOX':
		L_IDG_COMBOBOX_TEXT='(목록칸과 본문칸이 결합된 기능을 제공하는 조종체입니다. 값을 입력하거나 조종체를 찰칵하여 목록을 현시하고 목록의 항목을 선택할수 있습니다.)';
		sTemp = L_IDG_COMBOBOX_TEXT;
		break;
		case	'IDG_UNLINK':
		L_IDG_UNLINK_TEXT='(마당과 련결되지 않았다는것을 말합니다.)';
		sTemp = L_IDG_UNLINK_TEXT;
		break;
		case	'IDG_UNLINKCONTROL':
		L_IDG_UNLINKCONTROL_TEXT='(원본으로 사용하는 표나 질문, SQL문의 마당에 련결되지 않은 조종체입니다. 비결부조종체는 흔히 정보문자렬이나 장식그림을 현시하는데 사용됩니다.)';
		sTemp = L_IDG_UNLINKCONTROL_TEXT;
		break;
		case	'IDG_NULLCHAR':
		L_IDG_NULLCHAR_TEXT='(문자가 포함되지 않은 문자렬입니다. 빈 문자렬을 사용하여 마당에 값이 없음을 지정할수 있습니다. 빈 문자렬을 입력하려면 사이에 공백이 없이 큰 옮김표 두개(" ")를 입력하면 됩니다.)';
		sTemp = L_IDG_NULLCHAR_TEXT;
		break;
		case	'IDG_USEDCOMPETENCE':
		L_IDG_USEDCOMPETENCE_TEXT='(자료기지의 자료나 객체에 대하여 사용자가 가지는 접근방법의 종류를 지정하는 속성의 집합입니다.)';
		sTemp = L_IDG_USEDCOMPETENCE_TEXT;
		break;
		case	'IDG_CUSTOMDIC':
		L_IDG_CUSTOMDIC_TEXT='(표준사전에는 없지만 철자법검사를 통해 맞는 단어로 하려고 하는 단어목록입니다.)';
		sTemp = L_IDG_CUSTOMDIC_TEXT;
		break;
		case	'IDG_STATUSBAR':
		L_IDG_STATUSBAR_TEXT='(화면 아래쪽에 창의 현재 항목상태, 현재 작업진행률, 선택한 항목에 대한 정보 등 프로그람의 현재 상태에 대한 정보가 현시되는 가로띠입니다.)';
		sTemp = L_IDG_STATUSBAR_TEXT;
		break;
		case	'IDG_SELECT':
		L_IDG_SELECT_TEXT='(자료표의 세포 또는 세포범위를 강조현시하는것을 말합니다. 선택된 세포는 다음에 수행하는 지령이나 작업의 영향을 받습니다.)';
		sTemp = L_IDG_SELECT_TEXT;
		break;
		case	'IDG_SELQUERY':
		L_IDG_SELQUERY_TEXT='(표에 기록된 자료에 관한 질문을 하고 자료는 변경하지 않은채로 결과집합을 자료표형태로 반환하는 질문입니다.)';
		sTemp = L_IDG_SELQUERY_TEXT;
		break;
		case	'IDG_DESIGN':
		L_IDG_DESIGN_TEXT='(표, 질문, 양식, 보고서와 같은 자료기지객체의 편집을 진행하는 창입니다. 편집에서는 자료기지객체를 새로 만들거나 기존객체의 설계를 수정할수 있습니다.)';
		sTemp = L_IDG_DESIGN_TEXT;
		break;
		case	'IDG_DESIGNGRID':
		L_IDG_DESIGNGRID_TEXT='(질문설계나 표설계에서 질문이나 표를 설계하는데 사용하는 격자입니다.)';
		sTemp = L_IDG_DESIGNGRID_TEXT;
		break;
		case	'IDG_FORMULA':
		L_IDG_FORMULA_TEXT='(수학연산자나 론리연산자, 상수, 함수, 마당이름, 조종체, 한개의 값으로 계산되는 속성 등의 결합입니다. 식은 조건(례: Order Amount > 100)을 지정하거나 마당값에 대한 계산(례: Price*Quantity)을 수행할수 있습니다. 또한 식에 의하여 문자를 조작하거나 자료의 유효성을 검사할수 있습니다.)';
		sTemp = L_IDG_FORMULA_TEXT;
		break;
		case	'IDG_INDEX':
		L_IDG_INDEX_TEXT='(열쇠값을 기초로 하여 표에서 탐색 및 정렬 속도를 향상시키는 기능으로서 표에 있는 행의 고유성을 강화할수 있습니다. 표의 기본열쇠는 자동으로 색인되며 자료형식때문에 색인될수 없는 마당도 있습니다.)';
		sTemp = L_IDG_INDEX_TEXT;
		break;
		case	'IDG_DETAILAREA':
		L_IDG_DETAILAREA_TEXT='(보고서에서 머리부나 바닥부가 현시되는 구역을 말합니다.)';
		sTemp = L_IDG_DETAILAREA_TEXT;
		break;
		case	'IDG_DATABASEOBJECT':
		L_IDG_DATABASEOBJECT_TEXT='(자료기지프로그람의 자료기지에는 표, 질문, 양식, 보고서와 같은 객체가 있습니다.)';
		sTemp = L_IDG_DATABASEOBJECT_TEXT;
		break;
		case	'IDG_DATABASEWINDOW':
		L_IDG_DATABASEWINDOW_TEXT='(자료기지창은 자료기지프로그람의 자료기지를 열었을 때 현시됩니다. 기존의 자료기지객체를 열거나 새로운 자료기지객체를 만들기 위한 그림기호나 지령들이 있습니다.)';
		sTemp = L_IDG_DATABASEWINDOW_TEXT;
		break;
		case	'IDG_DATAQUERY':
		L_IDG_DATAQUERY_TEXT='(자료정의문이 포함된 SQL질문입니다. 자료정의질문을 사용하면 자료기지에서 객체를 만들거나 변경할수 있습니다.)';
		sTemp = L_IDG_DATAQUERY_TEXT;
		break;
		case	'IDG_DATASHEET':
		L_IDG_DATASHEET_TEXT='(행과 렬 형식으로 표나 질문의 자료를 현시하는 표용지입니다.)';
		sTemp = L_IDG_DATASHEET_TEXT;
		break;
		case	'IDG_DATASHEETVIEW':
		L_IDG_DATASHEETVIEW_TEXT='(표나 질문의 자료를 행과 렬 형식으로 현시하는 창입니다. 자료표 보기에서는 자료를 추가하고 삭제할수 있으며 자료를 탐색할수 있습니다.)';
		sTemp = L_IDG_DATASHEETVIEW_TEXT;
		break;
		case	'IDG_ONESJOIN':
		L_IDG_ONESJOIN_TEXT='(표가 표자체에 결합되는 결합입니다. 결합된 마당에 일치하는 값이 있으면 표의 기록편은 같은 표의 다른 기록편과 결합합니다.)';
		sTemp = L_IDG_ONESJOIN_TEXT;
		break;
		case	'IDG_SORTARRANGE':
		L_IDG_SORTARRANGE_TEXT='(값이나 자료형식을 기준으로 자료를 정렬하는 방법입니다. 자모순서, 수자, 영어자모순서 또는 날자순서로 자료를 정렬할수 있습니다. 정렬순서로는 올리순서(ㄱ-ㅇ)이나 내리순서(ㅇ-ㄱ)을 사용합니다.)';
		sTemp = L_IDG_SORTARRANGE_TEXT;
		break;
		case	'IDG_QUERY':
		L_IDG_QUERY_TEXT='(자료원본에 보관된 기록편가운데서 지정한 조건에 맞는 기록편을 모두 찾는 방법입니다. 질문에 연산자, 옮김표, 통용문자, 괄호를 포함하여 탐색조건을 상세히 지정할수 있습니다.)';
		sTemp = L_IDG_QUERY_TEXT;
		break;
		case	'IDG_CONSOLIDATIONFUNC':
		L_IDG_CONSOLIDATIONFUNC_TEXT='(Sum, Count, Avg, Min, Max 등 종합적통계값을 계산하는데 사용되는 함수입니다.)';
		sTemp = L_IDG_CONSOLIDATIONFUNC_TEXT;
		break;
		case	'IDG_DBREFERENCE':
		L_IDG_DBREFERENCE_TEXT='(기록편을 입력하거나 삭제할 때 표사이에 정의된 관계를 유지하기 위해 따르는 규칙입니다.)';
		sTemp = L_IDG_DBREFERENCE_TEXT;
		break;
		case	'IDG_SYMBOLFIELD':
		L_IDG_SYMBOLFIELD_TEXT='(양식, 보고서에서 제목, 조종체의 이름, 설명과 같은 문자렬을 현시하는 조종체로서 다른 조종체에 련결하여 사용하거나 독립적으로 사용할수 있습니다.)';
		sTemp = L_IDG_SYMBOLFIELD_TEXT;
		break;
		case	'IDG_ROWSELECTOR':
		L_IDG_ROWSELECTOR_TEXT='(자료표에나 설계격자에서 한개 기록편 전체 또는 행 전체를 선택하는 작은 네모칸이나 띠입니다.)';
		sTemp = L_IDG_ROWSELECTOR_TEXT;
		break;
		case	'IDG_FORMVIEW':
		L_IDG_FORMVIEW_TEXT='(양식을 현시하여 자료를 현시하거나 입력하는 창입니다. 양식보기는 표에서 자료를 추가하고 수정하는 기본방법입니다. 양식보기에서 양식의 설계를 변경할수도 있습니다.)';
		sTemp = L_IDG_FORMVIEW_TEXT;
		break;
		case	'IDG_ONETOOTHER':
		L_IDG_ONETOOTHER_TEXT='(기본표에서 각 기록편의 기본열쇠값이 관련표의 여러 기록편의 해당 마당값에 대응될 때 두 표사이의 련결상태를 말합니다.)';
		sTemp = L_IDG_ONETOOTHER_TEXT;
		break;
		case	'IDG_ONETOONE':
		L_IDG_ONETOONE_TEXT='(기본표에 있는 각 기록편의 기본열쇠값이 관련표에 있는 한 기록편의 일치하는 마당값에 대응되는 두 표사이의 련결입니다.)';
		sTemp = L_IDG_ONETOONE_TEXT;
		break;
		case	'IDG_IMEINPUT':
		L_IDG_IMEINPUT_TEXT='(조선어나 중어, 일어 등을 입력할수 있게 하는 입력지원프로그람입니다. 대표적인 조선어입력기로는 《하나》가 있습니다.)';
		sTemp = L_IDG_IMEINPUT_TEXT;
		break;
		case	'IDG_INPUTBOX':
		L_IDG_INPUTBOX_TEXT='(문자렬을 현시하거나 자료를 입력할수 있는 조종체입니다. 본문칸에는 표식자를 지정할수 있습니다.)';
		sTemp = L_IDG_INPUTBOX_TEXT;
		break;
		case	'IDG_OUTSIDEJOIN':
		L_IDG_OUTSIDEJOIN_TEXT='(두 표에서 일치하는 각 기록편이 질문결과에서 한 기록편으로 결합되는 결합입니다. 결합된 마당의 값이 다른 표의 값과 일치하지 않아도 한 표가 해당 기록편을 모두 제공합니다.)';
		sTemp = L_IDG_OUTSIDEJOIN_TEXT;
		break;
		case	'IDG_OUTSIDEKEY':
		L_IDG_OUTSIDEKEY_TEXT='(기본열쇠마당이나 다른 표의 마당을 참조하는 하나이상의 마당을 의미합니다. 외부열쇠는 여러 표를 련결하는 방법을 제공합니다.)';
		sTemp = L_IDG_OUTSIDEKEY_TEXT;
		break;

		default:
			sTemp=L_UNDEFINED_TEXT;
			break;
	}
	return sTemp;
}
