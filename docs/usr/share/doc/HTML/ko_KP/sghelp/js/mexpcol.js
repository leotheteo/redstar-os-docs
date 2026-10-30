//Generic Display code
//Updated 11/9/00 - updated outline3()

var strHide="모두 숨기기";
var strShow="모두 표시";

function ExpandAll()
{
//{{Add by HSJ 
	var Ex = false;
	var Net = false;
	var app = navigator.appName.substring(0,1);
	if (app == 'N') Net = true;
	else Ex = true;
//}}end
	// Expand all 
	var iSpan
	var iSpanSource
	var oSpan
	var sCaption
	var sAction
	var sImage
	var sExpImage
	
	// Determine the action, and the picture to replace
	sCaption=document.all("ExpandAll").innerHTML;

	if (sCaption==strShow)
		{
		sAction="expanded";
		sImage="../image/image/common/bluedrop.gif";
		sExpImage = "../image/image/common/collapsetri.gif";
		document.all("picHeader").src=sExpImage;
		document.all("ExpandAll").innerHTML=strHide;
		}
	else
		{
		sAction="collapsed";
		sImage="../image/image/common/blueup.gif";
		sExpImage = '../image/image/common/expandtri.gif';
		document.all("picHeader").src=sExpImage;
		document.all("ExpandAll").innerHTML=strShow;
		}
//{{Add by HSJ
	if(Net)
	{
			// Execute the action for all expand SPANs
		for (var iA=0; iA < document.getElementsByTagName('a').length; iA++)
		{
			var sChildNodeName = document.getElementsByTagName('a').item(iA).childNodes;
			if(document.getElementsByTagName('a').item(iA).className == "DropDown" && sChildNodeName[1].nodeName == "IMG")
			{
				for (var iSpan=0; iSpan < document.getElementsByTagName('div').length; iSpan++)
				{
					oSpan=document.getElementsByTagName('div').item(iSpan);
					if (oSpan.id=="ExpCol")
					{
						document.getElementsByTagName('div').item(iSpan).className=sAction;

						if(sChildNodeName[1].nodeName=="IMG" && sChildNodeName[2].nodeName!="IMG")
						{
							sChildNodeName[1].src=sImage;
							document.all("picHeader").src=sExpImage;
						}
						else if(sChildNodeName[2].nodeName=="IMG")
						{
							sChildNodeName[2].src=sImage
						}
					}
				}
			}
		}
	}

	if(Ex)
	{				//}}End HSJ
		// Execute the action for all expand SPANs
		for (var iSpan=0; iSpan < document.getElementsByTagName('div').length; iSpan++)
			{
				oSpan=document.getElementsByTagName('div').item(iSpan);
				iSpanSource=oSpan.sourceIndex;
				if (oSpan.id=="ExpCol")
				{
					document.getElementsByTagName('div').item(iSpan).className=sAction;
					if(document.all(iSpanSource-1).tagName=="IMG" && document.all(iSpanSource-2).tagName!="IMG")
					{
						document.all(iSpanSource-1).src=sImage;
					}
					else if(document.all(iSpanSource-2).tagName=="IMG")
					{
						document.all(iSpanSource-2).src=sImage
					}
					 
				}
				
				// Handle the Q tag added late for Loc
				if (document.all(iSpanSource-1).tagName=="Q")
				{
					document.all(iSpanSource-2).src=sImage;
				}
			}
	}

	// Change the text and the picture of the main caller
	document.all("ExpandAll").className="DropDown";
	// Now we do the inline defs
	var cLinks = document.getElementsByTagName('A');
	var iNumLinks = cLinks.length;
  	for (var i=0;i<iNumLinks;i++)
  	{
		cLink=document.getElementsByTagName('A').item(i);
		switch (sAction)
		{
			case 'expanded':
				if (cLink.className=="glossary" && cLink.getAttribute("State")!="On")
				{
					cLinks[i].click();
				}
				else if (cLink.className=="HidePopUp")
				{
					cLinks[i].click();
				}
				
				break;
			case 'collapsed':
				if (cLink.className=="glossary" && cLink.getAttribute("State")=="On")
				{
					cLinks[i].click();
				}
				else if (cLink.className=="HidePopUp")
				{
					cLinks[i].click();
				}
				break;
		}
  	}
}

function getSourceIndex(strOpen)
{
	var incr;
	for (incr=1; incr < document.all.length; incr++)
	{
		var strSelectText = strOpen.textContent;
		var strSearchText = document.all(incr).textContent;
		if (strSelectText == strSearchText)
		{
			return incr;
		}
	}
}

function Outline2(oSource)
{
//{{Add by HSJ
	var elemPos;
	var Ex = false;
	var Net = false;
	var app = navigator.appName.substring(0,1);
	if (app == 'N') Net = true;
	else Ex = true;
	
if(Net)
{
	//Expand or collapse if a list item is clicked.
	var strOpen = document.activeElement;
	var elemPos = 0;
	
	elemPos = getSourceIndex(strOpen);

	//Verify that the tag which was clicked was either the 
	//trigger tag or nested within a trigger tag.
	var el = checkParent(strOpen,"A");
	if(null != el)
	{	
		var incr=0;
		var parentSpan;
		var fBreak

		//Get the position of the element which was clicked
		var nextNodeName = strOpen.childNodes;
		//Search for a SPAN tag
		for (parentSpan = strOpen.parentNode;
			parentSpan!=null;
			parentSpan = parentSpan.parentNode) 
		{
			//test if already at a span tag 
		    if (parentSpan.tagName=="DIV") 
			{
				incr=1;
				break;
			}
			
			//Test if the tag clicked was in a body tag or in any of the possible kinds of lists
			//we perform this test because nested lists require special handling
			if (parentSpan.tagName=="BODY" || parentSpan.tagName=="UL" || parentSpan.tagName=="OL"|| parentSpan.tagName=="P") 
			{
				//Determine where the span to be expanded is.  
				for (incr=1; (elemPos+incr) < document.all.length; incr++)
				{
					//verify we are at an expandable Div tag
						if(document.all(elemPos+incr).tagName=="DIV" && 
						(document.all(elemPos+incr).className=="expanded" ||
						 document.all(elemPos+incr).className=="collapsed"))
						{
							fBreak=1;
							break;
						}
						//If the next tag following the list item (li) is another 
						//list item(li) return in order to prevent accidentally opening
						//the next span in the list
						else if(document.all(elemPos+incr).tagName=="LI")
						{
							return;
						}
				}
			}
			//determine if we need to break out of the while loop (kind of a kludge since theres no goto in javascript)
			if(fBreak==1)
			{
				break;
			}
		}

	}
	else
	{
		//Alert("Return!");
		return;
	}

	//Now that we've identified the span, expand or collapse it
	if(document.all(elemPos+incr).className=="collapsed")
	{
		
		document.all(elemPos+incr).className="expanded"
		document.all(elemPos+1).src="../image/image/common/bluedrop.gif";
		if(strOpen.tagName=="IMG"){strOpen.src="../image/image/common/bluedrop.gif";}
		if(strOpen.tagName=="B")
			{
			if(strOpen.parentElement.all.tags("IMG").length != 0)
				{strOpen.parentElement.all.tags("IMG").item(0).src="../image/image/common/bluedrop.gif";}
			}
	}
	else if(document.all(elemPos+incr).className=="expanded")
	{
		document.all(elemPos+incr).className="collapsed"
		document.all(elemPos+1).src="../image/image/common/blueup.gif";
		if(strOpen.tagName=="IMG"){strOpen.src="../image/image/common/blueup.gif";}
		if(strOpen.tagName=="B")
			{
			if(strOpen.parentElement.all.tags("IMG").length != 0)
				{strOpen.parentElement.all.tags("IMG").item(0).src="../image/image/common/blueup.gif";}
			}
	}
	else
	{
		return;
	}
	event.cancelBubble = true;
}	
if(Ex){			//}}End
	window.event.returnValue=0	
	//Expand or collapse if a list item is clicked.
	var strOpen = event.srcElement;
	//Verify that the tag which was clicked was either the 
	//trigger tag or nested within a trigger tag.
	var el = checkParent(strOpen,"A");
	if(null != el)
	{	
		var incr=0;
		var elmPos = 0;
		var parentSpan;
		var fBreak
		//Get the position of the element which was clicked
		elemPos = window.event.srcElement.sourceIndex;
		//Search for a SPAN tag
		for (parentSpan = window.event.srcElement.parentElement;
			parentSpan!=null;
			parentSpan = parentSpan.parentElement) 
		{
			//test if already at a span tag 
		    if (parentSpan.tagName=="DIV") 
			{
				//alert("Parent Element is a SPAN");
				incr=1;
				break;
			}
			
			//Test if the tag clicked was in a body tag or in any of the possible kinds of lists
			//we perform this test because nested lists require special handling
			if (parentSpan.tagName=="BODY" || parentSpan.tagName=="UL" || parentSpan.tagName=="OL"|| parentSpan.tagName=="P") 
			{
				//Determine where the span to be expanded is.  
				for (incr=1; (elemPos+incr) < document.all.length; incr++)
				{	
					//verify we are at an expandable Div tag
					if(document.all(elemPos+incr).tagName=="DIV" && 
					(document.all(elemPos+incr).className=="expanded" ||
					 document.all(elemPos+incr).className=="collapsed"))
					{
						fBreak=1;
						break;
					}
					//If the next tag following the list item (li) is another 
					//list item(li) return in order to prevent accidentally opening
					//the next span in the list
					else if(document.all(elemPos+incr).tagName=="LI")
					{
						return;
					}
				}
			}
			//determine if we need to break out of the while loop (kind of a kludge since theres no goto in javascript)
			if(fBreak==1)
			{
				break;
			}
		}

	}
	else
	{
		//Alert("Return!");
		return;
	}

	//Now that we've identified the span, expand or collapse it
	if(document.all(elemPos+incr).className=="collapsed")
	{
		
		document.all(elemPos+incr).className="expanded"
		document.all(elemPos+1).src="../image/image/common/bluedrop.gif";
		if(strOpen.tagName=="IMG"){strOpen.src="../image/image/common/bluedrop.gif";}
		if(strOpen.tagName=="B")
			{
			if(strOpen.parentElement.all.tags("IMG").length != 0)
				{strOpen.parentElement.all.tags("IMG").item(0).src="../image/image/common/bluedrop.gif";}
			}
	}
	else if(document.all(elemPos+incr).className=="expanded")
	{
		document.all(elemPos+incr).className="collapsed"
		document.all(elemPos+1).src="../image/image/common/blueup.gif";
		if(strOpen.tagName=="IMG"){strOpen.src="../image/image/common/blueup.gif";}
		if(strOpen.tagName=="B")
			{
			if(strOpen.parentElement.all.tags("IMG").length != 0)
				{strOpen.parentElement.all.tags("IMG").item(0).src="../image/image/common/blueup.gif";}
			}
	}
	else
	{
		return;
	}
	event.cancelBubble = true;
//	open.scrollIntoView(true);
}
}

function checkParent(src,dest)
{
	//Search for a specific parent of the current element.
	while(src !=null)
	{
		if(src.tagName == dest)
		{
			return src;
		}
		src = src.parentElement;
	}
	return null;
}

//This function displays content from different source HTML files
function showPopup(filename, theSpan){


	//Get the position of the element which was clicked
	elemPos = window.event.srcElement.sourceIndex;
	theIFRAME.location.replace(filename);
	tempSpan = theSpan
	window.setTimeout("showPopup2(tempSpan,elemPos)", 800)
}

function showPopup2(theSpan, elemPos){
//var elemPos=0;
//Get the position of the element which was clicked
//elemPos = window.event.srcElement.sourceIndex;

	defSpan = document.all(theSpan);
	if (defSpan && document.readyState == "complete" && theIFRAME.document.readyState == "complete"){
        	if (defSpan.style.display == "none"){
			theIFRAME.document.all.tags("H1").item(0).outerHTML="";
			
			if(theIFRAME.document.all.tags("P").item("ExpandAllLine") != null) {theIFRAME.document.all.tags("P").item("ExpandAllLine").outerHTML="";}			
			///defSpan.innerHTML = theIFRAME.document.all.glosdef.innerHTML;
			defSpan.innerHTML = theIFRAME.document.body.innerHTML;
			defSpan.style.display = "";
			defSpan.parentElement.style.display = "";

			document.all(elemPos+1).src="../image/image/common/bluedrop.gif";
			document.all(elemPos).src="../image/image/common/bluedrop.gif";
		}
    		else{
			defSpan.style.display = "none";
			defSpan.parentElement.style.display = "none";
			document.all(elemPos+1).src="../image/image/common/blueup.gif";
			//if(oSource.tagName=="IMG"){open.src="../../MSOHLP11.CHM/html/blueup.gif";}
    		}
	}
}

//Swapping images
function MM_swapImgRestore() { //v2.0
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}

function MM_swapImage() { //v2.0
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray; //used for restore
}

function openWindow(url, example) {
  var popupWin;
  if (typeof(popupWin) != "object") 
	popupWin = window.open(url, example, "width=452,height=572,top=0,left=0,alwaysRaised=yes,toolbar=0,directories=0,menubar=0,status=1,resizable=yes,location=0,scrollbars=1,copyhistory=0");
  else {
    if (!popupWin.closed) 
      popupWin.location.href = url;
    else 
	  popupWin = window.open(url, example, "width=452,height=572,top=0,left=0,alwaysRaised=yes,toolbar=0,directories=0,menubar=0,status=1,resizable=yes,location=0,scrollbars=1,copyhistory=0");
 }	  
   
   popupWin.focus();
}

function footerView()
{
	var strIndex;
	var strHtmlUrl = getURL();
	
	if(strHtmlUrl == "")
		strHtmlUrl = "index.html";

//	strIndex = "<hr><table width='100%' align='center'><tr><td width='30%' class='noborder' align='left'><a style='cursor:pointer; color:#0000cc' onClick='history.go(-1)'>이전</a></td><td width='35%' class='noborder' align='center'><a href='"+strHtmlUrl+"'>차례</a></td><td width='35%' class='noborder' align='right'><a style='cursor:pointer; color:#0000cc' onClick='history.go(1)'>다음</a></td></tr></table>";

	strIndex = "<hr><table width='100%' align='center'><tr><td width='30%' class='noborder' align='left'></td><td width='35%' class='noborder' align='center'><a href='"+strHtmlUrl+"'>차례</a></td><td width='35%' class='noborder' align='right'></td></tr></table>";

	document.write(strIndex);
}

function indexFooterView()
{
//	document.write("<hr><table width='100%' align='center'><tr><td width='30%' class='noborder' align='left'><a style='cursor:pointer; color:#0000cc' onClick='history.go(-1)'>이전</a></td><td width='35%' class='noborder' align='right'><a style='cursor:pointer; color:#0000cc' onClick='history.go(1)'>다음</a></td></tr></table>");

	document.write("<hr><table width='100%' align='center'><tr><td width='30%' class='noborder' align='left'></td><td width='35%' class='noborder' align='right'></td></tr></table>");
}

function getURL()
{
	var strTemp;
	var iUrlIndex;
	var strURL = "";

	strTemp = document.location.href;
	iUrlIndex = strTemp.indexOf("?");

	if(iUrlIndex == -1)
		return strURL;

	strURL = strTemp.substr(iUrlIndex+1);

	return strURL;	
}
function addHref(oSource)
{
	var oAttrA = oSource.attributes;
	var strHref = getURL();

	oAttrA.getNamedItem("href").value = oAttrA.getNamedItem("href").value + "?" + strHref;
}

