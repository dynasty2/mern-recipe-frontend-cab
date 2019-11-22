# Fridge To Table Planning

Access to our planning google doc:

https://docs.google.com/document/d/11EFhLCxSAB7PbA0v5HvWEtEC_deROmNWHQU8dtSNiHk/edit

###### Initial Project Plan submition

Project idea: We are creating an application that accepts inputs of the foodstuffs you have in your fridge.  Want to know what to cook or what you are close to being able to cook?  We will match those food items with recipes that you can already accomplish and/or recipes you are close to accomplishing.  As time allows we will throw in extra features like price of new goods, amount, meal type, etc. 

Models: 

Fridge {
Ingredients: [Ingredient]
}

Ingredients {
	Type: String (enum?),
	Name: String
}

Recipe {
	Ingredients: [String],
	Name: String,
	Minutes: Number,
	Steps: [String]
}

Our git work-flow: gitflow.
