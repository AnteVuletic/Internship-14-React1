import React from 'react';
import BasketList from '../Lists/BasketList/BasketList';
import GroceryList from '../Lists/GroceryList/GroceryList';

import './CheckList.css';

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
            return { BasketItems:[...previousState.BasketItems,{ count: 1 , item, isCrossed: false}]};
        });
    }
    handleCrossedItem = (groceryItem) =>{
        this.setState((previousState)=>{
            let itemIndex = previousState.BasketItems.findIndex((basketItem) => basketItem.item === groceryItem.item);
            return {
                BasketItems:[
                    ...previousState.BasketItems.slice(0,itemIndex),
                    {
                        ...previousState.BasketItems[itemIndex],
                        isCrossed : !previousState.BasketItems[itemIndex].isCrossed
                    },
                    ...previousState.BasketItems.slice(itemIndex+1)
                ]
            };
        });
    }
    handleRemoveBasket = (groceryItem)=>{
        this.setState((previousState)=>{
            if(groceryItem.count === 1){
                let newBasketItems = previousState.BasketItems.filter((basketItem) => basketItem.item !== groceryItem.item);
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
    handleClear = () =>{
        this.setState({
            BasketItems : []
        });
    }
    render(){
        const { BasketItems } = this.state;
        return(
            <section className="checklist">
                <GroceryList onAddBasket={this.handleAddBasket}></GroceryList>
                <BasketList 
                    basketItems={BasketItems} 
                    onCrossedItem={this.handleCrossedItem} 
                    onRemoveBasket={this.handleRemoveBasket}
                    onClear={this.handleClear}>
                </BasketList>
            </section>
        );
    }
}
export default CheckList;