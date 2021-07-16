<?php
class Connection{
	protected $conn ="";

	public function __construct()
	{
		$this->conn = new mysqli("localhost","root","","react_php_app");
	}

	public function __destruct(){
		$this->conn->close();
	}
}

?>