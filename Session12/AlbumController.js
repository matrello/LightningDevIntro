({
	doInit : function(component, event, helper)
    {
		helper.loadOptions(component);
	},
    
    handleUpdate : function(component, event, helper) {
    	helper.updateAlbum(component);
	}
}) 