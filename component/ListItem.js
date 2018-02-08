import React from 'react';

class ListItem extends React.Component{
	


	render()
	{
		return(
			<div>
				<ol>
					{
						this.props.items.map((item,index)=>{
							return(
								<li key={index}>
									<a href={item.link} target="_blank">{item.name} - {item.price}
									
									</a>
									<span onClick={()=>{this.props.removeItems(item.name)}} style={{color:'red',textDecoration:'underline',cursor:'pointer'}}>
										delete
									</span>
								</li>
							);
						})
					}
				</ol>
			</div>
		);
	}





}

export default ListItem;