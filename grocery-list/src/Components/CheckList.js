import React from 'react';
import BasketList from './Lists/BasketList';
import GroceryList from './Lists/GroceryList';

class CheckList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            BasketItems: []
        }
    }
    handleAddBasket = (item) =>{
        this.setState((previousState)=>{
            let isInBasketIndex = previousState.BasketItems.findIndex((basketItem)=> basketItem.item === item);
            if(isInBasketIndex !== -1)
                return{ BasketItems:[
                    ...previousState.BasketItems.slice(0,isInBasketIndex),
                    {
                        ...previousState.BasketItems[isInBasketIndex],
                        count : previousState.BasketItems[isInBasketIndex].count+1
                    },
                    ...previousState.BasketItems.slice(isInBasketIndex+1)
                ]};
            return { BasketItems:[...previousState.BasketItems,{ count: 1 , item}]};
        });
    }
    handleRemoveBasket = (groceryItem)=>{
        this.setState((previousState)=>{
            if(groceryItem.count === 1){
                let newBasketItems = previousState.BasketItems.filter((item) => item.item !== groceryItem.item);
                return { BasketItems:[...newBasketItems] };
            }
            let indexOfItem = previousState.BasketItems.findIndex((item)=> groceryItem.item === item.item);
            return { BasketItems:[
                ...previousState.BasketItems.slice(0,indexOfItem),
                {
                    ...previousState.BasketItems[indexOfItem],
                    count : previousState.BasketItems[indexOfItem].count-1
                },
                ...previousState.BasketItems.slice(indexOfItem+1)
            ]}; 
        });
    }
    render(){
        const { BasketItems } = this.state;
        return(
            <>
             <GroceryList onAddBasket={this.handleAddBasket}></GroceryList>
             <BasketList basketItems={BasketItems} onRemoveBasket={this.handleRemoveBasket}></BasketList>
            </>
        );
    }
}
export default CheckList;