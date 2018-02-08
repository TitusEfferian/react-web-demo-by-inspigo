import React from 'react';


class FormInput extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state=
		{
			name:"",
			price:"",
			link:""
		};
	}

	render()
	{
		return(
			<div>
				<input type="text" placeholder="name" onChange={
					(event) => {this.setState({name: event.target.value})}
				} value={this.state.name} />
				
				<input type="number" placeholder="price" onChange={
					(event) => {this.setState({price: event.target.value})}
				} value={this.state.price} />

				<input type="text" placeholder="link" onChange={
					(event) => {this.setState({link: event.target.value})}
				} value={this.state.link} />

				<button type="button" onClick={()=>{this.props.addItem(this.state)}}>
					add
				</button>
			</div>
		); 
	}
}


export default FormInput;