 var animals= [
                    {name:"First",imgSrc:"img/cat1.jpg",imgAttribution:'bla bla',clickCount:0,nicknames:["T1-Bone","Tab-tab","Tabiscuse"]},
                    {name:"Second",imgSrc:"img/cat2.jpg",imgAttribution:'bla bla',clickCount:0,nicknames:["T2-Bone","Tab-tab","Tabiscuse"]},
                    {name:"Third",imgSrc:"img/cat3.jpg",imgAttribution:'bla bla',clickCount:0,nicknames:["T3-Bone","Tab-tab","Tabiscuse"]},
                    {name:"Fourth",imgSrc:"img/cat4.jpg",imgAttribution:'bla bla',clickCount:0,nicknames:["T4-Bone","Tab-tab","Tabiscuse"]},
                    {clickCount:0,		name:'Tabby',
		imgSrc:'img/1413379559_412a540d29_z.jpg',
		imgAttribution:'bla bla',
		nicknames:["T-Bone","Tab-tab","Tabiscuse"]}
                    ]           ;

                    
var resume= [{
experience:[
	{company:"компаха", site:"", position:"человек молекулв", dateTime:"май-июнь 2013", description: "чего делали чего получилось"},
	{company:"компаха старая", site:"http:/site.com", position:"робот копатель", dateTime:"март-июнь 2012", description: "чего делали чего получилось"}
	],
education:[
	{university:"msmu", degree: "маг", specialty:" vvyvbuy емпминла", dateTime:"2007-2011"},
	{university:"msmu", degree: "бакалавр", specialty:"автоматизация бла бла", dateTime:"2011-2013"}
	],
skills:["skill1","skill skill","skill2"],
portfolio:[
	{imgSrc:"img/cat1.jpg",description:"First"},
	{imgSrc:"img/cat2.jpg",description:"Второй"},
	{imgSrc:"img/cat3.jpg",description:"Третий"}
			],
contacts:["hbhjbj@hgik.ru"]
}];



var Cat = function(data){
	this.clickCount=ko.observable(data.clickCount);
	this.name=ko.observable(data.name);
	this.imgSrc=ko.observable(data.imgSrc);
	this.imgAttribution=ko.observable(data.imgAttribution);
	this.nicknames=ko.observableArray(data.nicknames);
	this.ageLevel=ko.computed(function(){
		return (this.clickCount()<=10) ? "Newborn" : ((this.clickCount()<=20)? "Infant":"Teen");
	},this)
}




var ViewModel = function(){
	var self=this;

	this.catList=ko.observableArray([]);

	animals.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	this.currentCat=ko.observable(this.catList()[0]);
	self.setCat=function(place){
				self.currentCat(place)

		//self.catList.remove(place);
	}
	self.changeCurrentCat=function(cat){
		this.currentCat=ko.observable(cat)
	}
	this.incrementCounter=function(){
		this.clickCount(this.clickCount()+1);
	};
}

ko.applyBindings(new ViewModel());