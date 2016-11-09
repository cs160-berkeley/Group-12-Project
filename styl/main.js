import Pins from "pins";
import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';

var blueSkin = new Skin({ fill:"#33C1FF" });
var whiteSkin = new Skin({ fill:"#FFFFFF" });
var greySkin = new Skin({ fill:"#D3D3D3" });
var blackSkin = new Skin({ fill:"black" });
var darkGreySkin = new Skin({ fill:"#827979" });
var pinkSkin = new Skin({ fill:"#F9C1E4" });
var tealSkin = new Skin({ fill:"#58B1D7" });
var darkBlueSkin = new Skin({ fill:"#618B9D" });
var blackBorder = new Skin({borders: {left: 2, right: 2, top: 2, bottom: 2}, 
    stroke: "black"});
var blackBottomBorder = new Skin({borders: {bottom: 2}, 
    stroke: "black"});
var blackTopBorder = new Skin({borders: {top: 2}, 
    stroke: "black"});

var titleText = new Style({ font: "italic 70px Roboto", color: "black" });
var homeText = new Style({ font: "34px Roboto", color: "black" });
var medText = new Style({ font: "20px Roboto", color: "black", vertical: "middle"});
var buttonText = new Style({ font: "16px Roboto", color: "black"});
var bottomText = new Style({ font: "12px Roboto", color: "black", vertical: "middle"});
var tinyText = new Style({ font: "12px Roboto", color: "black", horizontal: "middle"});

var StringTemplate = Label.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    style: $.style,
    string: $.string
}));

var pictureTemplate = Label.template($ => ({
    height: $.height,
    url: $.url
}));

var logo = new Picture({height: 200, top: 75, left: 0, right: 0, url: "assets/clothes-clip.png"})

let pinkBackground = new Texture("assets/pink-background.png")

let backgroundSkin = new Skin({
      width: 377, height: 646,
      texture: pinkBackground,
      aspect: "stretch"
});

var backArrow = Picture.template($ => ({left: -235, height: 40, align: "left", url: "assets/backarrow.png",
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
    		container.container.container.visible = false;
        }
    })
    }));
let titleContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        logo,
    	new StringTemplate({ style: titleText, 
            string: " S T Y L" })
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
            container.bubble("tappedTitlePage")
        }
    })
}));

let topBar = Line.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 80, skin: blackBottomBorder,
    contents: [
    	new backArrow
    ],
}));

let bottomBar = Line.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 80, skin: blackTopBorder,
    contents: [
    	new Picture({top: 5, left: 0, right: 0, bottom: 0, url: "assets/mini-inventory-button.png",
    		behavior: Behavior({
    			onCreate: function(container, data) {
    				container.active = true;
    			},
    			onTouchEnded: function(container) {
	            	container.bubble("toInventoryPage")
        		}
    		})}),
    	new Picture({top: 5, left: 0, right: 0, bottom: 0, url: "assets/mini-input-button.png",
    		behavior: Behavior({
    			onCreate: function(container, data) {
    				container.active = true;
    			},
    			onTouchEnded: function(container) {
	            	container.bubble("toInputPage")
        		}
    		})}),
    	new Picture({top: 5, left: 0, right: 0, bottom: 0, url: "assets/mini-favorites-button.png",
    		behavior: Behavior({
    			onCreate: function(container, data) {
    				container.active = true;
    			},
    			onTouchEnded: function(container) {
	            	container.bubble("toFavoritesPage")
        		}
    		})}),
    	new Picture({top: 5, left: 0, right: 0, bottom: 0, url: "assets/mini-settings-button.png",
    		behavior: Behavior({
    			onCreate: function(container, data) {
    				container.active = true;
    			},
    			onTouchEnded: function(container) {
	            	container.bubble("toSettingsPage")
        		}
    		})})
    ],
    behavior: Behavior({
    	
    })
}));

let homeContent = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 400,
    contents: [
    	new Line({
    		left: 0, top: 0, right: 0, bottom: 0, height: 30,
    		contents: [
    			
    		]
    	}),
    	new Line({
    		left: 0, top: 0, right: 0, bottom: 0,
    		contents: [
    			new Picture({top: 0, left: 0, right: 0, bottom: 0, url: "assets/inventory-button.png",
    				behavior: Behavior({
    					onCreate: function(container, data) {
    						container.active = true;
    					},
    					onTouchEnded: function(container) {
	            			container.bubble("toInventoryPage")
        				}
    			})}),
    			new Picture({top: 0, left: 0, right: 0, bottom: 0, url: "assets/input-button.png",
    				behavior: Behavior({
    					onCreate: function(container, data) {
    						container.active = true;
    					},
    					onTouchEnded: function(container) {
	            			container.bubble("toInputPage")
        				}
    			})})
    		]
    	}),
    	new Line({
    		left: 0, top: 0, right: 0, bottom: 30,
    		contents: [
    			new Picture({top: 0, left: 0, right: 0, bottom: 0, url: "assets/favorites-button.png",
    				behavior: Behavior({
    					onCreate: function(container, data) {
    						container.active = true;
    					},
    					onTouchEnded: function(container) {
	            			container.bubble("toFavoritesPage")
        				}
    			})}),
    			new Picture({top: 0, left: 0, right: 0, bottom: 0, url: "assets/settings-button.png",
    				behavior: Behavior({
    					onCreate: function(container, data) {
    						container.active = true;
    					},
    					onTouchEnded: function(container) {
	            			container.bubble("toSettingsPage")
        				}
    			})})
    		]
    	})
    ],
    behavior: Behavior({
    	
    })
}));

let inventoryContent = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 320, 
    contents: [
    	// new Text({left: 0, top: 125, right: 0, bottom: 0, string: "inventory content goes here", style: homeText})
        currInventoryContent()
    ],
    behavior: Behavior({
    	
    })
}));


let inputContent = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 320, 
    contents: [
    	// new Text({left: 0, top: 125, right: 0, bottom: 0, string: "input content goes here", style: homeText})
        currInputContent()
    ],
    behavior: Behavior({
    	
    })
}));

let favoritesContent = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 320, 
    contents: [
    	// new Text({left: 0, top: 125, right: 0, bottom: 0, string: "favorites content goes here", style: homeText})
        currFavoritesContent()
    ],
    behavior: Behavior({
    	
    })
}));

let settingsContent = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, height: 320, 
    contents: [
    	new Text({left: 0, top: 125, right: 0, bottom: 0, string: "settings content goes here", style: homeText})
    ],
    behavior: Behavior({
    	
    })
}));

let homeContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        new homeContent
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
            //container.visible = false;
        }
    })
}));

let inventoryContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        new topBar, new inventoryContent, new bottomBar
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
            //container.visible = false;
        }
    })
}));

let pictureContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        new Picture({ top: 0, bottom: 0, url: "assets/dummyInput.jpg" })
    ],
    behavior: Behavior({
        onCreate: function(container, data) {
            container.active = true;
        },
        onTouchEnded: function(container) {
            container.bubble("toInputPage");
        }
    })
}));

let inputContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        new topBar, new inputContent, new bottomBar
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
            //container.visible = false;
        }
    })
}));

let favoritesContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        new topBar, new favoritesContent, new bottomBar
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
            //container.visible = false;
        }
    })
}));

let settingsContainer = Column.template($ => ({
    left: 0, top: 0, right: 0, bottom: 0, skin: backgroundSkin,
    contents: [
        new topBar, new settingsContent, new bottomBar
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		container.active = true;
    	},
    	onTouchEnded: function(container) {
            //container.visible = false;
        }
    })
}));


/* CONTENTS WITHIN CONTAINERS */
let currInventoryContent;
let currInputContent;
let currFavoritesContent;
let currSettingsContent;


/* INVENTORY PAGE */
const inventorySearchResultCards = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: inventory.map(element => {
        return itemCard({ item: element, isInventory: true, toPage: "toInventoryPage" });
    })
}));

let inventorySearchResults = VerticalScroller.template($ => ({ 
    active: true, top: 10, bottom: 0,
    contents: [
        inventorySearchResultCards(),
        VerticalScrollbar(), 
        TopScrollerShadow() 
    ]                     
}));


const itemCard = Column.template($ => ({
    left: 0, right: 0, top: 10, height: 130,
    skin: whiteSkin,
    active: true,
    behavior: Behavior({
        onCreate: function(container, data) {
            this.item = $.item;
            this.isInventory = $.isInventory;
            this.toPage = $.toPage;
        },
        onTouchEnded: function(container) {
            //TODO: change screens to itemPage
            const item = this.item;
            const toPage = this.toPage;
            if (this.isInventory){
                currInventoryContent = function() {
                    return itemPage({ item: item, toPage: toPage });
                };
                container.bubble("toInventoryPage");
            } else {
                currFavoritesContent = function() {
                    return itemPage({ item: item, toPage: toPage });
                };
                container.bubble("toFavoritesPage");
            }
        }
    }),
    contents: [
        new $.item.img(),
        new StringTemplate({ style: medText, string: $.item.name })
    ]
}));

const itemPage = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        new $.item.img({ height: 130 }),
        new descriptionContainer({ item: $.item }),
        favoriteButton({ item: $.item }),
        retrieveButton({ item: $.item }),
        doneButton({ toPage: $.toPage })
    ]
}));

const descriptionContainer = Column.template($ => ({
    left: 0, right: 0, top: 10, bottom: 0,
    contents: [
        new StringTemplate({ style: tinyText, string: "Name: " + $.item.name }),
        new StringTemplate({ style: tinyText, string: "Closet: " + $.item.closet }),
        new StringTemplate({ style: tinyText, string: "Category: " + $.item.category }),
        new StringTemplate({ style: tinyText, string: "Brand: " + $.item.brand }),
        new StringTemplate({ style: tinyText, string: "Size: " + $.item.size }),
        new StringTemplate({ style: tinyText, string: "Tags: " + $.item.tags.join(", ") }),
    ]
}));

const retrieveButton = Column.template($ => ({
    left: 5, right: 5, top: 5, height: 20,
    skin: greySkin,
    active: true,
    behavior: Behavior({
        onCreate: function(container, data) {
            this.item = $.item;
            if (!inventory.includes(this.item)) {
                container.skin = darkGreySkin;
            }
        },
        onTouchEnded: function(container) {
            if (inventory.includes(this.item)) {
                retrieveItem(this.item);
                container.skin = darkGreySkin;
            }
        }
    }),
    contents: [
        new StringTemplate({ top: 100, style: buttonText, string: "Retrieve" })
    ]
}));

const favoriteButton = Column.template($ => ({
    left: 5, right: 5, top: 5, height: 20,
    skin: greySkin,
    active: true,
    behavior: Behavior({
        onCreate: function(container, data) {
            this.item = $.item;
            if (favorites.includes(this.item)) {
                container.skin = darkGreySkin;
            }
        },
        onTouchEnded: function(container) {
            if (!favorites.includes(this.item)) {
                favoriteItem(this.item);
                container.skin = darkGreySkin;
            } else {
                unfavoriteItem(this.item);
                container.skin = greySkin;
            }
        }
    }),
    contents: [
        new StringTemplate({ style: buttonText, string: "Favorite" })
    ]
}));

const doneButton = Column.template($ => ({
    left: 5, right: 5, top: 5, height: 20,
    skin: greySkin,
    active: true,
    behavior: Behavior({
        onCreate: function(container) {
            this.toPage = $.toPage;
        },
        onTouchEnded: function(container) {
            if (this.toPage == "toInventoryPage") {
                currInventoryContent = inventorySearchResults;
            } else if (this.toPage == "toFavoritesPage") {
                currFavoritesContent = favoritesSearchResults;
            }
            container.bubble(this.toPage);
        }
    }),
    contents: [
        new StringTemplate({ style: buttonText, string: "Done" })
    ]
}));


/* INPUT PAGE */
const firstInputPage = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        new Picture({ height: 130, url: "assets/emptyImage.jpg", active: true,
            behavior: Behavior({
                onTouchEnded: function(container) {
                    currInputContent = secondInputPage;
                    container.bubble("toPicturePage");
                }
            })
        }),
        emptyDescriptionContainer()
    ]
}));

const secondInputPage = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        allItems[1].img({ height: 130 }),
        descriptionContainer({ item: allItems[1] }),
        doneInputButton()
    ]
}));

const emptyDescriptionContainer = Column.template($ => ({
    left: 0, right: 0, top: 10, bottom: 0,
    contents: [
        new StringTemplate({ style: tinyText, string: "Name: ________________" }),
        new StringTemplate({ style: tinyText, string: "Closet: ______________" }),
        new StringTemplate({ style: tinyText, string: "Category: ____________" }),
        new StringTemplate({ style: tinyText, string: "Brand: _______________" }),
        new StringTemplate({ style: tinyText, string: "Size: ________________" }),
        new StringTemplate({ style: tinyText, string: "Tags: ________________" }),
    ]
}));

const doneInputButton = Column.template($ => ({
    left: 5, right: 5, top: 5, height: 30,
    skin: greySkin,
    active: true,
    behavior: Behavior({
        onTouchEnded: function(container) {
            currInputContent = firstInputPage;
            container.bubble("toInputPage");
            addItem(allItems[1]);
        }
    }),
    contents: [
        new StringTemplate({ style: buttonText, string: "Done" })
    ]
}));

/* FAVORITES PAGE */
const favoritesSearchResultCards = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: favorites.map(element => {
        return itemCard({ item: element, isInventory: false, toPage: "toFavoritesPage" });
    })
}));

let favoritesSearchResults = VerticalScroller.template($ => ({ 
    active: true, top: 10, bottom: 0,
    contents: [
        favoritesSearchResultCards(),
        VerticalScrollbar(), 
        TopScrollerShadow() 
    ]                     
}));

/* INITIALIZING ALL CONTENT */
currInventoryContent = inventorySearchResults;
currFavoritesContent = favoritesSearchResults;
currInputContent = firstInputPage;

/* HELPER FUNCTIONS */

class Item {
    constructor(name, closet, category, brand, size, index, tags=[]) {
        this.name = name
        this.closet = closet
        this.category = category
        this.brand = brand
        this.size = size
        this.tags = tags
        this.url = this.getUrl()
        this.index = index
        this.img = Picture.template($ => ({ height: ($ === undefined || $.height === undefined) ? 100 : $.height, url: this.url }));
    }

    getCamelCase() {
        const words = this.name.split(" ");
        const rest = words.slice(1);
        let result = words[0].toLowerCase();
        for (let i = 0; i < rest.length; i += 1) {
            result += rest[i].slice(0, 1).toUpperCase() + rest[i].slice(1).toLowerCase();
        }
        return result;
    }

    getUrl() {
        return "assets/" + this.getCamelCase() + ".jpg";
    }
}


const allItems = {1: new Item("Necklace", "Chicago", "Jewelry", "De Beers", 0, 1, ["jewelry", "necklace", "pearl"]),
                2: new Item("Blazer", "New York", "Outwear", "Yoins", 4, 2, ["classy", "b&w", "women"]),
                3: new Item("Red Tank", "New York", "Outwear", "", 4, 3, ["red", "casual", "tank", "top"]),
                4: new Item("Purple Blouse", "New York", "Outwear", "Yoins", 4, 4, ["classy", "b&w", "women"]),
                5: new Item("Red Stilettos", "New York", "Outwear", "Levis", 30, 5, ["casual", "gray", "long"]),
                6: new Item("Shorts", "New York", "Outwear", "Yoins", 4, 6, ["classy", "b&w", "women"]),
                7: new Item("Gray Jeans", "New York", "Outwear", "Levis", 30, 7, ["casual", "gray", "long"]),
                8: new Item("White Skirt", "New York", "Outwear", "", 4, 8, ["red", "casual", "tank", "top"])}

const inventory = [allItems[2], allItems[3], allItems[5], allItems[6]];
const favorites = [allItems[3]];
/*
1- Necklace
2 - Blazer
3 - Red Tank
4 - blouse
5 - heels
6 - shorts
7 - jeans
8 - skirt
*/

function favoriteItem(item) {
    favorites.push(item);
}

function unfavoriteItem(item) {
    for (let i = 0; i < favorites.length; i += 1) {
        if (favorites[i].index == item.index) {
            favorites.splice(i, 1);
            return true;
        }
    }
    return false;
}

function addItem(item) {
    if (!inventory.includes(item)) {
        inventory.push(item);
        inventory.sort(function(i, j){
            if(i.index < j.index) return -1;
            if(i.index > j.index) return 1;
            return 0;
        });
    }
    addToCloset(item.index);
}

function retrieveItem(item) {
    for (let i = 0; i < inventory.length; i += 1) {
        if (inventory[i].index == item.index) {
            inventory.splice(i, 1);
            removeFromCloset(item.index);
            return true;
        }
    }
    return false;
}

function addToCloset(index) {
    //TODO: Add item with index INDEX to the closet
    const arg = "/closetSpaceSensor" + index + "/write";
    remotePins.invoke(arg, 1);    
}

function removeFromCloset(index) {
    //TODO: Remove item with index INDEX from the closet
    const arg = "/closetSpaceSensor" + index + "/write";
    print("here");
    print(arg);
    remotePins.invoke(arg, 0);    
}

function print(str) {
    trace(str + '\n');
}


let remotePins;
application.behavior = Behavior({
    onLaunch: function(application) {
        application.active = true;
        application.add(new titleContainer);
        let discoveryInstance = Pins.discover(
            connectionDesc => {
                trace("FOUND!\n");
                if (connectionDesc.name == "pins-share-led") {
                    trace("Connecting to remote pins\n");
                    remotePins = Pins.connect(connectionDesc);
                }
                for (let i = 1; i <= 8; i += 1) {
                    //If item is in closet, then call `putbackItem(allItems[i])`
                    //else call `retrieveItem()
                    const arg = "/closetSpaceSensor" + i + "/read";
                    remotePins.repeat(arg, 83, value => {
                        if (inventory.includes(allItems[i]) && !value) {
                            retrieveItem(allItems[i]);
                        } else if (!inventory.includes(allItems[i]) && value) {
                            addItem(allItems[i]);
                        }
                    });    

                }

            }, 
            connectionDesc => {
                if (connectionDesc.name == "pins-share-led") {
                    trace("Disconnected from remote pins\n");
                    remotePins = undefined;
                }
            });
    },
    tappedTitlePage: function(container) {
    	application.add(new homeContainer);
    },
    toInventoryPage: function(container, data) {
    	application.add(new inventoryContainer);
    },
    toInputPage: function(container, data) {
    	application.add(new inputContainer);
    },
    toPicturePage: function(container, data) {
        application.add(new pictureContainer);
    },
    toFavoritesPage: function(container) {
    	application.add(new favoritesContainer);
    },
    toSettingsPage: function(container) {
    	application.add(new settingsContainer);
    }
});