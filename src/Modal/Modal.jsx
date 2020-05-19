import React, { Component } from 'react';
import "../Modal/Modal.css"

const Modal = () => {
    return(
        <React.Fragment>
    <div class="container demo">
	
	
	<div class="text-center">
		<button type="button" class="btn btn-demo" data-toggle="modal" data-target="#myModal">
			P
		</button>

		<button type="button" class="btn btn-demo" data-toggle="modal" data-target="#myModal2">
			M
		</button>
        <button type="button" class="btn btn-demo" data-toggle="modal" data-target="#myModal2">
			G
		</button>
	</div>

	
	
	
	
	
	
</div>


</React.Fragment>
    )

};


export default Modal;