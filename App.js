import React from 'react';
import FormInput from './component/FormInput';
import ListItem from './component/ListItem';

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			items:[
				{
					name: 'iphone',
					price: 100000,
					link: 'https://google.com'
				},
				{
					name: 'samsung',
					price: 500000,
					link: 'https://google.com'
				},
			]
		};
	}
	removeItems(name)
	{
		var items = this.state.items.filter((item)=>{
			return item.name !== name;
		});
		this.setState({
			items//items: items (kaerna sama bisa dibikin satu)
		});
	}
	render()
	{
		return (
			<div>
				<FormInput addItem={(item) => {this.setState({items: [...this.state.items,item]})}} />
				<ListItem removeItems={this.removeItems.bind(this)} items={this.state.items} />
			</div>
		);
	}
}

export default App;